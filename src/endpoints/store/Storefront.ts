import { ValorantEndpoint } from "../../ValorantEndpoint";
import { z } from "zod";
import {
  currencyIDSchema,
  itemIDSchema,
  itemTypeIDSchema,
  offerSchema,
  weakUUIDSchema,
} from "../../commonTypes";

const bundleSchema = z.object({
  ID: weakUUIDSchema,
  DataAssetID: weakUUIDSchema,
  CurrencyID: currencyIDSchema,
  Items: z.array(
    z.object({
      Item: z.object({
        ItemTypeID: itemTypeIDSchema,
        ItemID: itemIDSchema,
        Amount: z.number(),
      }),
      BasePrice: z.number(),
      CurrencyID: currencyIDSchema,
      DiscountPercent: z.number(),
      DiscountedPrice: z.number(),
      IsPromoItem: z.boolean(),
    })
  ),
  ItemOffers: z
    .array(
      z.object({
        BundleItemOfferID: weakUUIDSchema,
        Offer: offerSchema,
        DiscountPercent: z.number(),
        DiscountedCost: z.record(weakUUIDSchema, z.number()),
      })
    )
    .nullable(),
  TotalBaseCost: z.record(weakUUIDSchema, z.number()).nullable(),
  TotalDiscountedCost: z.record(weakUUIDSchema, z.number()).nullable(),
  TotalDiscountPercent: z.number(),
  DurationRemainingInSeconds: z.number(),
  WholesaleOnly: z.boolean(),
});

const bonusOfferSchema = z.object({
  BonusOfferID: weakUUIDSchema,
  Offer: offerSchema,
  DiscountPercent: z.number(),
  DiscountCosts: z.record(weakUUIDSchema, z.number()),
  IsSeen: z.boolean(),
});

export const storefrontEndpoint = {
  name: "Storefront",
  description: "Get the currently available items in the store",
  queryName: "Store_GetStorefrontV2",
  category: "Store Endpoints",
  type: "pd",
  suffix: "store/v2/storefront/{puuid}",
  riotRequirements: {
    token: true,
    entitlement: true,
  },
  responses: {
    "200": z.object({
      FeaturedBundle: z.object({
        Bundle: bundleSchema,
        Bundles: z.array(bundleSchema),
        BundleRemainingDurationInSeconds: z.number(),
      }),
      SkinsPanelLayout: z.object({
        SingleItemOffers: z.array(itemIDSchema),
        SingleItemStoreOffers: z.array(offerSchema),
        SingleItemOffersRemainingDurationInSeconds: z.number(),
      }),
      UpgradeCurrencyStore: z.object({
        UpgradeCurrencyOffers: z.array(
          z.object({
            OfferID: weakUUIDSchema,
            StorefrontItemID: itemIDSchema,
            Offer: offerSchema,
            DiscountedPercent: z.number(),
          })
        ),
      }),
      AccessoryStore: z.object({
        AccessoryStoreOffers: z.array(
          z.object({
            Offer: z.object({
              OfferID: weakUUIDSchema,
              IsDirectPurchase: z.boolean(),
              StartDate: z.coerce.date(),
              Cost: z.object({
                weakUUIDSchema: z.number(),
              }),
              Rewards: z.array(
                z.object({
                  ItemTypeID: itemTypeIDSchema,
                  ItemID: itemIDSchema,
                  Quantity: z.number(),
                })
              ),
            }),
            ContractID: weakUUIDSchema,
          })
        ),
        AccessoryStoreRemainingDurationInSeconds: z.number(),
        StorefrontID: weakUUIDSchema,
      }),
      BonusStore: z
        .object({
          BonusStoreOffers: z.array(bonusOfferSchema),
          BonusStoreRemainingDurationInSeconds: z.number(),
        })
        .optional()
        .describe("Night market"),
    }),
  },
} as const satisfies ValorantEndpoint;

export type StorefrontResponse = z.input<
  (typeof storefrontEndpoint.responses)["200"]
>;
