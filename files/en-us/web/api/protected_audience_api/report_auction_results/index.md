---
title: "Protected Audience API: Reporting auction results"
slug: Web/API/Protected_Audience_API/Report_auction_results
page-type: guide
status:
  - experimental
---

{{SeeCompatTable}}{{securecontext_header}}{{DefaultAPISidebar("Protected Audience API")}}

There are several reporting mechanisms available to developers within and around the [Protected Audience API](/en-US/docs/Web/API/Protected_Audience_API). These provide reports of auction results, ad engegement, and conversion attribution. This article explains how these different mechanaisms work.

## Report mechanism summary

1. Auction results: When an in-browser [ad auction has been run](/en-US/docs/Web/API/Protected_Audience_API/Run_ad_auction), and a winning ad has been chosen, the results of the auction can be reported back to the seller and the winning buyer via author-defined functions located inside the seller's decision logic and the buyer's bidding logic.

   - The buyer's bidding logic JavaScript, available at the URL specified in the [`biddingLogicURL`](/en-US/docs/Web/API/Navigator.joinAdInterestGroup#biddingLogicURL) property passed into a `joinAdInterestGroup()` call, can contain a [`reportWin()`](#) function that serves to report an auction win to the buyer.
   - The seller's bidding logic JavaScript, available at the URL specified in the [`decisionLogicURL`](/en-US/docs/Web/API/Navigator.runAdAuction#decisionLogicURL) property passed into a `runAdAuction()` call, can contain a [`reportResult()`](#) function that report the auction results to the seller.

2. Ad engagement: When the winning ad has been rendered inside a {{htmlelement("fencedframe")}} or {{htmlelement("iframe")}}, you can create reports in which data from the ad — such as clicks or impressions — is associated with Protected Audience API signals. In the case of `<iframe>` ads, this can be done directly from the `reportWin()`/`reportResult()` functions. In the case of `<fencedframe>` ads, communication between the frame and embedding origin is much more limited, so reporting is done via a specialised ad [beacon](/en-US/docs/Web/API/Beacon_API) set up via the {{domxref("InterestGroupScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}} method.

3. Conversion attribution: When a user has clicked the winning ad (or interacted with it in some other way), it is useful for the buyer to be able to measure conversions — for example, did the user later go on to view or purchase the advertised product on the buyer's main site? To provide this functionality, the ad beacon can be [registered as an attribution source](/en-US/docs/Web/API/Attribution_Reporting_API/Registering_sources), allowing the conversions to be reported via the [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API).

## Reporting auction results

### Buyer result reporting

When the buyer runs {{domxref("Navigator.joinAdInterestGroup()")}} to request that the user's browser join an interest group, it passes in a [`biddingLogicURL`](/en-US/docs/Web/API/Navigator.joinAdInterestGroup#biddingLogicURL) property containing the URL of the buyer's bidding logic. This contains the [`generateBid()`](#) function used to generate the buyer's bid, but it can also contain a [`reportWin()`](#) function that serves to report an auction win to the buyer.

Let's look at a `reportWin()` example:

```js
function reportWin(
  auctionSignals,
  perBuyerSignals,
  sellerSignals,
  browserSignals,
) {
  sendReportTo(
    `${browserSignals.interestGroupOwner}/reporting?bid=${browserSignals.bid}`,
  );
}
```

The arguments passed to this function are as follows:

- `auctionSignals`
  - : The data provided in the [`auctionSignals`](/en-US/docs/Web/API/Navigator.runAdAuction#auctionSignals) property passed into the `runAdAuction()` call.
- `perBuyerSignals`
  - : The data provided for this particular group owner in the [`perBuyerSignals`](/en-US/docs/Web/API/Navigator.runAdAuction#perBuyerSignals) property passed into the `runAdAuction()` call.
- `sellerSignals`
  - : The return value of the seller's `reportResult()` function (see below).
- `browserSignals`
  - : An object created by the browser, containing information such as the URLs of the top-level calling host, group owner, ad to render, etc.

Inside the function, we call the {{domxref("InterestGroupReportingScriptRunnerGlobalScope.sendReportTo", "sendReportTo()")}} method, which the browser makes available only inside buyer and seller reporting script runner [worklets](/en-US/docs/Web/API/Worklet), i.e. the worklets inside which such reporting code is run. `sendReportTo()` takes a single argument — the URL to send the report to. This URL can have any data encoded in it that is available from the input signals objects; in this case we've just reported the winning bid value.

The browser makes a [`GET`](/en-US/docs/Web/HTTP/Methods/GET) request to the reporting URL when it starts to render the ad.

> [!NOTE]
> This example contains a limited subset information concerning the data available in the arguments. For more information, see the [`reportWin()`](#) reference page.

### Seller result reporting

When the seller runs {{domxref("Navigator.RunAdAuction()")}} to start off the auction process, it passes in a [`decisionLogicURL`](/en-US/docs/Web/API/Navigator.runAdAuction#decisionLogicURL) property containing the URL of the seller's scoring logic. This contains the [`scoreAd()`](#) function used to score the buyer bids, but it can also contain a [`reportResult()`](#) function that serves to report the auction results to the seller.

The following is a simple `reportResult()` example:

```js
function reportResult(auctionConfig, browserSignals) {
  sendReportTo(`${auctionConfig.seller}/reporting?bid=${browserSignals.bid}`);

  return {
    success: true,
    signalsForWinner: { signalForWinner: 1 },
    reportUrl: auctionConfig.seller + "/report_seller",
  };
}
```

This function takes the following arguments:

- `auctionConfig`
  - : A copy of the options object
- `browserSignals`
  - : An object created by the browser, containing information such as the URLs of the top-level calling host, group owner, ad to render, etc.

We call the same `sendReportTo()` method to report results to the seller as we do when reporting auction success to the winning buyer, and it works in exactly the same way in this context. The only differences are the available arguments passed in that can be used to assemble the parameters in the reporting URL, and the time that the function is run — the `reportResult()` function's `sendReportTo()` call is run as soon as the winning bid is calculated.

`reportResult()` can optionally include a return value, which is made available as the `sellerSignals` argument in the `reportWin()` function call.

This mechanism is useful, as it gives the seller a chance to pass some data to the buyer when the auction finishes. The return value can contain any kind of data, but bear in mind that it must be JSON-serializable, otherwise the `sellerSignals` value passed into `reportWin()` will be `null`.

> [!NOTE]
> This example contains a limited subset of the available arguments. For more information, see the [`reportResult()`](#) reference page.

Other things to cover:

- https://developer.mozilla.org/en-US/docs/Web/API/Fence/reportEvent
  undefined sendReportTo(DOMString url);
  undefined registerAdBeacon(record<DOMString, USVString> map);
  undefined registerAdMacro(DOMString name, USVString value);

  also engagement report, whatever that is

  mention attribution reporting api for conversion data when ad is clicked.

  Things not to cover:

  - All of the private aggregation API stuff, like the events, and using the contributeToHistogram() methos in biddingLogic(). Document that API separately.
