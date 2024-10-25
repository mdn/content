---
title: "Protected Audience API: Running an ad auction"
slug: Web/API/Protected_Audience_API/Run_ad_auction
page-type: guide
status:
  - experimental
---

{{SeeCompatTable}}{{securecontext_header}}{{DefaultAPISidebar("Protected Audience API")}}

This article explains how to use the [Protected Audience API](/en-US/docs/Web/API/Protected_Audience_API) to run an ad auction on the user's browser when a seller site is visited that contains some ad space that buyers may want to bid for, to display ads relevant to that user. Relevant ads are defined by the [interest groups](/en-US/docs/Web/API/Protected_Audience_API/Join_ad_interest_group) the user's browser is a member of.

## Process summary

Returning to the scenario that we outlined in the [How does it work?](/en-US/docs/Web/API/Protected_Audience_API#how_does_it_work) section of the API landing page, we now turn our attention to the part of the process where the user visits a publisher (seller) site, `fashion.example`, which displays ads in return for ad revenue. We are assuming that the user has already visited the buyer site and had their browser added to the `fashion-shoes` interest group.

When the user visits the seller site, the seller — the publisher themselves, or more likely, a **Sell-side platform** (SSP) acting on their behalf — runs an in-browser ad auction to invite the owners of interest groups relevant to the advertising context to bid on the available ad space on the page. The invited group owners submit bids, and the browser collates those bids and determines which ad is the most suitable to be shown, based on decision logic provided by the seller.

To summarize:

1. {{domxref("Navigator.runAdAuction()")}} is invoked to start the in-browser ad auction in motion. This function provides information to the browser such as the size and type of ad space that is available, which interest group owners should be invited to bid in the auction, and the location of the decision logic JavaScript that will determine which bid wins the auction.
2. Each bidder generates a bid to submit to the auction. This is done by running the author-defined [`generateBid()`](#) function contained in the bidder's interest group information that was previously stored in the browser. `generateBid()` should be available at the URL defined in the [`biddingLogicURL`](/en-US/docs/Web/API/Navigator/joinAdInterestGroup#biddingLogicURL) property passed along with the `joinAdInterestGroup()` that added the browser to the interest group in the first place.
3. For each submitted bid, the browser runs the seller's decision logic to determine what each buyer ad's suitability score is. This is done by running the author-defined [`scoreAd()`](#) function, which should be available at the URL defined in the [`decisionLogicURL`](/en-US/docs/Web/API/Navigator/runAdAuction#decisionLogicURL) property passed into the `runAdAuction()` call that started the auction. The `scoreAd()` function returns a numeric score for each bid.
4. The browser determines the ad with the highest score, and fulfills the promise returned by `runAdAuction()` with a value that can be used to render the ad, typically a {{domxref("FencedFrameConfig")}} that can be used to render the ad inside a {{htmlelement("fencedframe")}}.
5. The seller and buyers can optionally choose to define reporting functions. The seller's `decisionLogicURL` code can contain a [`reportResult()`](#) function that reports the outcome of the auction. The buyer's `biddingLogicURL` code can contain a [`reportWin()`](#) function that reports whether the buyer won the auction or not.

> [!NOTE]
> To avoid leaking any sensitive information, the browser runs buyer- and seller-specific code inside dedicated **script runners**, which are modified [worklets](/en-US/docs/Web/API/Worklet), each associated with a single domain. The worklets cannot communicate with the seller page or the network — they serve only to load the buyer or seller logic, fetch any associated real-time data, run the code, and return the output.

In the sections below, we'll look each of these steps in detail, except for Step 5. — you can find more details about reporting in [Protected Audience API: Auction event-level reporting](/en-US/docs/Web/API/Protected_Audience_API/Auction_event-level_reporting).

## A typical `runAdAuction()` call

`runAdAuction()` is invoked with an options object parameter, which contains all the information the browser needs to run the auction. A typical basic call might look like this:

```js
const auctionConfig = {
  seller: "https://ssp.example",
  decisionLogicURL: "https://ssp.example/decision-logic.js,
  interestGroupBuyers: ["https://dsp.example"],
  auctionSignals: {
    isControversial: true
  },
  sellerSignals: {
    key: "value"
  },
  sellerTimeout: 100,
  perBuyerSignals: {
    "https://dsp.example": { windowInnerHeight: window.innerHeight },
  },
  perBuyerTimeouts: {
    '*': 50,
  },
  resolveToConfig: true
};

// Promise fulfills with a FencedFrameConfig, which can then be set as a
// fencedFrame.config value to display the ad
navigator.runAdAuction(auctionConfig)
  .then(selectedAd => {
    const fencedFrame = document.getElementById("protected-audience-fenced-frame");
    fencedFrame.config = selectedAd;
  })
```

The option properties as follows:

- `seller`
  - : The URL of the seller, or a third party (such as an SSP) acting on their behalf.
- `decisionLogicURL`
  - : The URL of the seller's bidding logic JavaScript code, which is run during the ad auction to generate the interest group's auction bid. The JavaScript must contain an author-defined [`generateBid()`](#) function, which is run on each received bid to generate suitability scores. `decisionLogicURL`s must be valid HTTPS URLs that contain no fragment or credentials. They must also be same-origin with the `seller`.
- `interestGroupBuyers`
  - : An array containing the URLs of the interest group [owners](/en-US/docs/Web/API/Navigator/joinAdInterestGroup#owner) invited to bid in the auction. All interest groups with these owners that the user's browser is a member of will be invited to bid in the auction, provided:
    - The group's [`biddingLogicURL`](/en-US/docs/Web/API/Navigator/joinAdInterestGroup#biddingLogicURL) resolves successfully.
    - The group has at least one ad creative listed in its [`ads`](/en-US/docs/Web/API/Navigator/joinAdInterestGroup#ads) array.
    - The group's [`priority`](/en-US/docs/Web/API/Navigator/joinAdInterestGroup#priority) is greater than or equal to `0`.
- `auctionSignals`
  - : Arbitrary metadata related to the auction that is shared with the buyer (passed into `generateBid()`) and the seller (passed into `scoreAd()`). This property can take any value provided it is JSON-serializable. Can also be expressed as a promise if you wish the values to be passed asynchronously. This gives the seller an opportunity to provide information about the page context (such as ad size and publisher ID), the type of auction (for example, first-price vs second-price), etc.
- `sellerSignals`
  - : Arbitrary metadata related to the seller that is shared with the seller only at this stage (passed into `scoreAd()`). This property can take any value provided it is JSON-serializable. Can also be expressed as a promise if you wish the values to be passed asynchronously.
- `sellerTimeout`
  - : A number representing the maximum allowable runtime in milliseconds of the seller's `scoreAd()` script. If a value is not specified, the default 50ms is used. The maximum allowed `sellerTimeout` is 500ms — higher values will be clamped to this maximum.
- `perBuyerSignals`
  - : A sequence of record types, with the structure `(id, value)`, representing arbitrary metadata related to each group owner invited to bid in the auction. Each buyer's metadata is shared with them (passed into their `generateBid()` function). The sequence behaves like an [ordered map](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map): In each case, the `id` is a string containing the URL of the group owner, and the `value` can be any value type containing metadata suitable for the current auction.
- `perBuyerTimeouts`
  - : A sequence of record types, with the structure `(id, value)`, representing the maximum allowable runtime in milliseconds of each buyer's `generateBid()` script. The sequence behaves like an [ordered map](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map): In each case, the `id` is a string containing the URL of the group owner, and the `value` is a number representing their timeout value. If a value is not specified, the default 50ms is used. The maximum allowed buyer timeout is 500ms — higher values will be clamped to this maximum.
- `resolveToConfig`
  - : A boolean value; if set to `true`, the `runAdAuction()` call will fulfill with a `FencedFrameConfig` object containing the required information for displaying the winning ad in a `<fencedframe>`. If set to `false`, the `runAdAuction()` call will fulfill with an opaque [URN](/en-US/docs/Web/URI#urns) containing the required information for displaying the winning ad in an `<iframe>`.

> [!NOTE]
> This example contains a limited subset of the available properties. For more information, see the {{domxref("Navigator.runAdAuction()")}} reference page.

## `generateBid()` functions

When an interest group owner invokes `joinAdInterestGroup()` to request a browser to join the interest group, it includes a [`biddingLogicURL`](/en-US/docs/Web/API/Navigator/joinAdInterestGroup#biddingLogicURL) property inside the method options object, which points to a JavaScript file on the owner's origin. For the owner to be able to successfully bid in auctions, this file should define a [`generateBid()`](#) function.

> [!NOTE]
> Other requirements for successful bidding: The group has at least one ad creative listed in its [`ads`](/en-US/docs/Web/API/Navigator/joinAdInterestGroup#ads) array,
> and a [`priority`](/en-US/docs/Web/API/Navigator/joinAdInterestGroup#priority) of greater than or equal to `0`.

During an auction, each group owner invited to bid will have their `generateBid()` function invoked to create their bid. This is done inside a dedicated script runner, designed to protect user privacy, keeping the input, computation, and output from leaking.

A minimal `generateBid()` example might look like the following:

```js
function generateBid(interestGroup, auctionSignals, perBuyerSignals) {
  const [testAd] = interestGroup.ads;

  return {
    bid: 1, // Arbitrary bid value
    ad: {
      adName: testAd?.metadata?.adName,
    },
    render: testAd?.renderUrl,
  };
}
```

The arguments passed to the above function are as follows:

- `interestGroup`
  - : An object containing information about the interest group; this is the information saved by the browser after a successful `joinAdInterestGroup()` call, with the exception of a couple of properties. For example, [`lifetimeMs`](/en-US/docs/Web/API/Navigator/joinAdInterestGroup#lifetimeMs) is not shared because it is ambiguous as to whether it should be the lifetime when joined, or the remaining lifetime, and providing the remaining lifetime would potentially provide access to more granular timing information than is necessary.
- `auctionSignals`
  - : The data provided in the [`auctionSignals`](/en-US/docs/Web/API/Navigator/runAdAuction#auctionSignals) property passed into the `runAdAuction()` call.
- `perBuyerSignals`
  - : The data provided for this particular group owner in the [`perBuyerSignals`](/en-US/docs/Web/API/Navigator/runAdAuction#perBuyerSignals) property passed into the `runAdAuction()` call.

The return object must provide the group owner's bid, plus information about the ad that will be rendered. In this case, we provide:

- `bid`
  - : A number representing the bid value. In this case, we are providing an arbitrary bid value, but in a production app this could be calculated in whatever way makes sense for the auction, for example using passed signal data.
- `ad`
  - : Arbitrary metadata about the ad, which the seller can use in its decision logic (i.e. `scoreAd()`).
- `render`
  - : A string containing the URL of the ad to display should the group owner win the bid. Alternatively, `render` can take the value of an object containing the URL value, plus the height and width of the ad.

> [!NOTE]
> This example contains a limited subset of the available arguments and return properties. For more information, see the [`generateBid()`](#) reference page.

## `scoreAd()` functions()

Once all the bidding group owners' `generateBid()` functions have been run, the browser runs the seller's `scoreAd()` function on each submitted bid to determine what each buyer ad's suitability score is. `scoreAd()` should be available at the URL defined in the [`decisionLogicURL`](/en-US/docs/Web/API/Navigator/runAdAuction#decisionLogicURL) property passed into the `runAdAuction()` call. The `scoreAd()` function returns a numeric score for each bid.

The `scoreAd()` function is run inside a dedicated script runner, designed to protect user privacy, keeping the input, computation, and output from leaking.

A minimal `generateBid()` example might look like the following:

```js
function scoreAd(
  adMetadata,
  bid,
  auctionConfig,
  trustedScoringSignals,
  browserSignals,
) {
  return bid;
}
```

The arguments passed to the above function are as follows:

- `adMetadata`
  - : The arbitrary ad metadata returned by the group owner's `generateBid()` function in the `ad` property.
- `bid`
  - : The `bid` returned by the owner's `generateBid()` function.
- `auctionConfig`
  - : a copy of the options object passed to the originating `runAdAuction()` call.
- `trustedScoringSignals`
  - : Data retrieved from a [trusted real-time server](https://github.com/WICG/turtledove/blob/main/FLEDGE.md#31-fetching-real-time-data-from-a-trusted-server), which reflects the seller's opinion of the current ad being scored.
- `browserSignals`
  - : An object created by the browser, containing information that the browser knows and which the seller's auction script may want to verify. This can include the URLs of the top-level calling host, group owner, and ad to render (should this particular owner win the auction), the bid duration and currency, etc.

The return value must provide a numeric `desirability` value indicating how desirable the ad is in the context the auction was run. In this case we have just set `desirability` to be the value of the `bid` argument passed into the function; in a production app this could be calculated in whatever way makes sense for the auction, for example using passed signal data.

> [!NOTE]
> Alternatively, the return value can be an object containing the `desirability` value as a property along with other information.

## Rendering the winning ad

The winner of the auction is the ad that was given the highest `desirability` score. When the browser has determined the winning ad, it fulfills the promise returned by `runAdAuction()` with a value that can be used to render the ad. Let's revisit the code snippet we saw earlier:

```js
navigator.runAdAuction(auctionConfig).then((selectedAd) => {
  const fencedFrame = document.getElementById(
    "protected-audience-fenced-frame",
  );
  fencedFrame.config = selectedAd;
});
```

The fulfillment value can be one of two things, depending on the value set for the [`resolveToConfig`](/en-US/docs/Web/API/Navigator/runAdAuction#resolveToConfig) property passed into the `runAdAuction()`:

- If `resolveToConfig` is `true`, the promise will fulfill with a {{domxref("FencedFrameConfig")}} object. This can be set as the value of a {{htmlelement("fencedframe")}} element's {{domxref("HTMLFencedFrameElement.config")}} property to display the ad in the `<fencedframe>`.
- If `resolveToConfig` is `false`, the promise will fulfill with an opaque [URN](/en-US/docs/Web/URI#urns). This can be set as the value of an {{htmlelement("iframe")}} element's {{domxref("HTMLIFrameElement.src")}} property to display the ad in the `<iframe>`.
