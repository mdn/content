---
title: "Protected Audience API: Running an ad auction"
slug: Web/API/Protected_Audience_API/Run_ad_auction
page-type: guide
status:
  - experimental
---

{{SeeCompatTable}}{{securecontext_header}}{{DefaultAPISidebar("Protected Audience API")}}

This article explains how to use the [Protected Audience API](/en-US/docs/Web/API/Protected_Audience_API) to run an ad auction on the user's browser when a seller site is visited that contains some ad space that buyers may want to bid for, to display ads relevant to that user. Relevant ads are defined by the [interest groups](/en-US/docs/Web/API/Protected_Audience_API/Join_ad_interest_group) the user's browser is a member of.

## Basic process

Returning to the scenario that we outlined in the [How does it work?](/en-US/docs/Web/API/Protected_Audience_API#how_does_it_work) section of the API landing page, we now turn our attention to the part of the process where the user visits a publisher (seller) site, `fashion.example`, which displays ads in return for ad revenue. We are assuming that the user has already visited the buyer site and had their browser added to the `fashion-shoes` interest group.

When the user visits the seller site, the seller — the publisher themselves, or more likely, a **Sell-side platform** (SSP) acting on their behalf — runs an in-browser ad auction to invite the owners of interest groups relevant to the advertising context to bid on the available ad space on the page. The invited group owners submit bids, and the browser collates those bids and determines which ad is the most suitable to be shown, based on decision logic provided by the seller.

To summarize:

1. {{domxref("Navigator.runAdAuction()")}} is invoked to start the in-browser ad auction in motion. This function provides information to the browser such as the size and type of ad space that is available, which interest group owners should be invited to bid in the auction, and the location of the decision logic JavaScript that will determine which bid wins the auction.
2. Each bidder generates a bid to submit to the auction. This is done by running the author-defined [`generateBid()`](#) function contained in the bidder's interest group information that was previously stored in the browser. `generateBid()` should be available at the URL defined in the [`biddingLogicURL`](/en-US/docs/Web/API/Navigator.joinAdInterestGroup#biddingLogicURL) property passed along with the `joinAdInterestGroup()` that added the browser to the interest group in the first place.
3. For each submitted bid, the browser runs the seller's decision logic to determine what each buyer ad's suitability score is. This is done by running the author-defined [`scoreAd()`](#) function, which should be available at the URL defined in the [`decisionLogicURL`](/en-US/docs/Web/API/Navigator.runAdAuction#decisionLogicURL) property passed into the `runAdAuction()` call that started the auction. The `generateBid()` function returns a numeric score for each bid.
4. The browser determines the ad with the highest score, and fulfills the promise returned by `runAdAuction()` with a value that can be used to render the ad. This value can be one of two things:
   - If the [`resolveToConfig`](/en-US/docs/Web/API/Navigator.runAdAuction#resolveToConfig) property passed into the `runAdAuction()` resolves to `true`, the promise will fulfill with a {{domxref("FencedFrameConfig")}} object. This can be set as the value of a {{htmlelement("fencedframe")}} element's {{domxref("HTMLFencedFrameElement.config")}} property to display the ad in the `<fencedframe>`.
   - If the [`resolveToConfig`](/en-US/docs/Web/API/Navigator.runAdAuction#resolveToConfig) property passed into the `runAdAuction()` resolves to `false`, the promise will fulfill with an opaque [URN](/en-US/docs/Web/URI#urns). This can be set as the value of an {{htmlelement("iframe")}} element's {{domxref("HTMLIFrameElement.src")}} property to display the ad in the `<iframe>`.
5. The seller and buyers can optionally choose to define reporting functions. The seller's `decisionLogicURL` code can contain a [`reportResult()`](#) function that reports the outcome of the auction. The buyer's `biddingLogicURL` code can contain a [`reportWin()`](#) function that reports whether the buyer won the auction or not.

> [!NOTE]
> To avoid leaking any sensitive information, the browser runs buyer- and seller-specific code inside dedicated **script runners**, which are modified [worklets](/en-US/docs/Web/API/Worklet), each associated with a single domain. The worklets cannot communicate with the seller page or the network — they serve only to load the buyer or seller logic, fetch any associated real-time data, run the code, and return the output.

In the sections below, we'll look each of these steps in detail, except for Step 5. — you can find more details about reporting in [Reporting auction results](/en-US/docs/Web/API/Protected_Audience_API/reporting_auction_results)

## A typical `runAdAuction()` call

`runAdAuction()` is invoked with an options object parameter, which contains all the information the browser needs to join the interest group. A typical basic call might look like this:

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
  - : An array containing the URLs of the interest group [owners](/en-US/docs/Web/API/Navigator.joinAdInterestGroup#owner) invited to bid in the auction. All interest groups with these owners that the user's browser is a member of will be invited to bid in the auction, provided:
    - The group's [`biddingLogicURL`](/en-US/docs/Web/API/Navigator.joinAdInterestGroup#biddingLogicURL) resolves successfully.
    - The group has at least one ad creative listed in its [`ads`](/en-US/docs/Web/API/Navigator.joinAdInterestGroup#ads) array.
    - The group's [`priority`](/en-US/docs/Web/API/Navigator.joinAdInterestGroup#priority) is greater than or equasl to `0`.
- `auctionSignals`
  - : An object containing arbitrary metadata related to the auction that is shared with the buyer (passed into `generateBid()`) and the seller (passed into `scoreAd`). Can also be expressed as a promise if you wish the values to be passed asynchronously.
- `sellerSignals`
  - : xx
- `sellerTimeout`
  - : xx
- `perBuyerSignals`
  - : xx
- `perBuyerTimeouts`
  - : xx
- `resolveToConfig`
  - : xx

> [!NOTE]
> This example contains a limited subset of the available properties. For more information, see the {{domxref("Navigator.runAdAuction()")}} reference page.
