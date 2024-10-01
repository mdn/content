---
title: "Protected Audience API: Reporting auction results"
slug: Web/API/Protected_Audience_API/Report_auction_results
page-type: guide
status:
  - experimental
---

{{SeeCompatTable}}{{securecontext_header}}{{DefaultAPISidebar("Protected Audience API")}}

There are several reporting mechanisms available to developers within and around the [Protected Audience API](/en-US/docs/Web/API/Protected_Audience_API). These provide reports of auction results, ad engegement, and conversion attribution. This article explains how these different mechanisms work.

> [!NOTE]
> The event-level reporting mechanisms that exist in the Protected Audience API today are transition mechanisms. In the future, alternative solutions will be designed to better support existing use cases.

## Report mechanism summary

There are several event-level reporting mechansims:

1. Auction results: When an in-browser [ad auction has been run](/en-US/docs/Web/API/Protected_Audience_API/Run_ad_auction), and a winning ad has been chosen, the results of the auction can be reported back to the seller and the winning buyer via author-defined functions located inside the seller's decision logic and the buyer's bidding logic.

   - The buyer's bidding logic JavaScript, available at the URL specified in the [`biddingLogicURL`](/en-US/docs/Web/API/Navigator.joinAdInterestGroup#biddingLogicURL) property passed into a `joinAdInterestGroup()` call, can contain a [`reportWin()`](#) function that serves to report an auction win to the buyer.
   - The seller's bidding logic JavaScript, available at the URL specified in the [`decisionLogicURL`](/en-US/docs/Web/API/Navigator.runAdAuction#decisionLogicURL) property passed into a `runAdAuction()` call, can contain a [`reportResult()`](#) function that report the auction results to the seller.

2. Ad engagement: When the winning ad has been rendered inside a {{htmlelement("fencedframe")}} or {{htmlelement("iframe")}}, you can create reports in which data from the ad — such as clicks or impressions — is associated with Protected Audience API signals. This reporting can be done via `reportResult()` in the case of an ad rendered inside an `<iframe>`, or a specialised ad [beacon](/en-US/docs/Web/API/Beacon_API) set up via the {{domxref("InterestGroupScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}} method in the case of a `<fencedframe>`-rendered ad.

3. Conversion attribution: When a user has clicked the winning ad (or interacted with it in some other way), it is useful for the buyer to be able to measure conversions — for example, did the user later go on to view or purchase the advertised product on the buyer's main site? To provide this functionality, the ad beacon can be [registered as an attribution source](/en-US/docs/Web/API/Attribution_Reporting_API/Registering_sources), allowing the conversions to be reported via the [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API).

In addition, the [Private Aggregation API](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation) can be used to generate summary reports from Protected Audience data.

> [!NOTE]
> A summary report differs from an event-level report in that it doesn't reveal information about each individual event. For example, with an event-level report, you can determine that users A, B and C have seen ad campaign A. With summary reports, you can measure the number of users that have seen campaign A and [noise](https://developers.google.com/privacy-sandbox/private-advertising/aggregation-service#noise-scale) is added to protect user privacy.

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
  - : A copy of the options object originally passed into the originating `runAdAuction()` call.
- `browserSignals`
  - : An object created by the browser, containing information such as the URLs of the top-level calling host, group owner, ad to render, etc.

We call the same `sendReportTo()` method to report results to the seller as we do when reporting auction success to the winning buyer, and it works in exactly the same way in this context. The only differences are the available arguments passed in that can be used to assemble the parameters in the reporting URL, and the time that the function is run — the `reportResult()` function's `sendReportTo()` call is run as soon as the winning bid is calculated.

`reportResult()` can optionally include a return value, which is made available as the `sellerSignals` argument in the `reportWin()` function call.

This mechanism is useful, as it gives the seller a chance to pass some data to the buyer when the auction finishes. The return value can contain any kind of data, but bear in mind that it must be JSON-serializable, otherwise the `sellerSignals` value passed into `reportWin()` will be `null`.

> [!NOTE]
> This example contains a limited subset of the available arguments. For more information, see the [`reportResult()`](#) reference page.

## Reporting ad engagement

After an ad has been displayed, it is useful to gather data on how many times the ad is interacted with (for example via a click). The Protected Audience API enables this data to be collected and associated with signals from the seller, buyer, etc. The main issue here is that the ad is rendered _after_ the auction finishes, therefore the auction signals will not be available at that time. Information from the two different times needs to be associated together.

How this is done depends on whether the ad is embeded inside an `<iframe>` or a `<fencedframe>`.

### Associating auction data with event-level `<iframe>` data

The `sendReportTo()` method can be used to associate auction data with event-level data from an ad `<iframe>`.

Let's look at an example. In the buyer's bidding logic, we could include a `reportWin()` function like the following:

```js
function reportWin(auctionSignals, browserSignals) {
  const { campaignId } = auctionSignals;

  sendReportTo(
    `${browserSignals.interestGroupOwner}/reporting/?campaignId=${campaignId}`,
  );
}
```

The first part of the reporting URL is determined from the `interestGroupOwner` property available in the [`browserSignals`](#) argument passed into `reportWin()`. The data being sent in the URL params is a unique campaign ID available in the [`auctionSignals`](#) argument. The `campaignId` will have been generated before the auction started and set in the [`auctionSignals`](/en-US/docs/Web/API/Navigator.runAdAuction#auctionSignals) property passed into the `runAdAuction()` call that started off the auction process.

Once the auction concludes, the `runAdAuction()` promise resolves with an opaque [URN](/en-US/docs/Web/URI#urns) containing the required information for displaying the winning ad in an `<iframe>`, provided the [`resolveToConfig`](/en-US/docs/Web/API/Navigator/runAdAuction#resolvetoconfig) option was set to `false`. At this point, you can include the `campaignId` in the `<iframe>`, as a class for example:

```js
const auctionConfig = {
  auctionSignals: {
    campaignId: "rekglmrlnm456lk76mnykl"
  }

  // ...

  resolveToConfig: false,
};

navigator.runAdAuction(auctionConfig).then((selectedAd) => {
    const iframeElem = document.getElementById("protected-audience-iframe");
    iframeElem.src = selectedAd;
    iframeElem.className = auctionConfig.auctionSignals.campaignId;
});
```

Inside the `<iframe>`, you can then read the `className`, and send the `campaignId` to the reporting server via a {{domxref("fetch()")}} call to be associated with the data sent via the `sendReportTo()` call.

### Associating auction data with event-level `<fencedframe>` data

When the ad is rendered inside a {{htmlelement("fencedframe")}}, there is an additional issue to overcome — content embedded inside `<fencedframe>` elements cannot communicate with the embedding document.

To overcome this problem, the reporting process is set up in two steps:

1. Registering a specialized ad [beacon](/en-US/docs/Web/API/Beacon_API) to send your reporting data in response to a custom event occurring. This is done over in the reporting functions in the bidding/scoring logic.
2. Later on, in the embedded ad code, triggering the custom event that will trigger the beacon to send the reporting data, and at the same time attaching its own data to the resulting request.

#### Registering the ad beacon

Inside the `reportWin()` and `reportResult()` author-defined functions, the browser makes available the {{domxref("InterestGroupScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}} method. This registers a specialised ad [beacon](/en-US/docs/Web/API/Beacon_API) to send your reporting data. The method accepts an object [map](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) as an argument, in which each property name is a string representing a type of event to respond to, each value is a reporting URL to send a request to in response to the event. You can include the signal data you wish to report as query parameters in the URL.

Let's look at an example. Over in the buyer's bidding logic, we could include a `reportWin()` function like the following:

```js
function reportWin(auctionSignals, browserSignals) {
  const { campaignId } = auctionSignals;

  registerAdBeacon({
    click: `${browserSignals.interestGroupOwner}/report/click?campaignId=${campaignId}`,
  });
}
```

This registers an ad beacon that will send a request to the buyer's reporting server location when a click occurs on the ad. The first part of the URL is determined from the `interestGroupOwner` property available in the [`browserSignals`](#) argument passed into `reportWin()`. The data being sent in the URL params is a unique campaign ID available in the [`auctionSignals`](#) argument. The `campaignId` will have been set in the [`auctionSignals`](/en-US/docs/Web/API/Navigator.runAdAuction#auctionSignals) property passed into the `runAdAuction()` call that started off the auction process.

We can also report this campaign ID to the seller when the ad is clicked in a very similar way:

```js
function reportResult(auctionConfig) {
  const { campaignId } = auctionConfig.auctionSignals;

  registerAdBeacon({
    click: `${auctionConfig.seller}/report/click?campaignId=${campaignId}`,
  });
}
```

In this case, the server address URL portion and the `campaignId` are retrieved from the `auctionConfig` argument, which contains a copy of the options object originally passed into the originating `runAdAuction()` call.

#### Triggering the custom event

Inside the `<fencedframe>` (or `<iframe>`) code, the custom event is triggered using the {{domxref("Fence.reportEvent()")}} method. A basic example looks like so:

```js
adElement.addEventListener("click", () => {
  window.fence.reportEvent({
    eventType: "click",
    eventData: JSON.stringify({ clickX: "123", clickY: "456" }),
    destination: ["buyer", "seller"],
  });
});
```

This causes the beacon to send a [`POST`](/en-US/docs/Web/HTTP/Methods/POST) request to the reporting URL. The arguments passed to this method are:

- A string representing the custom event type being reported. This must match the event type specified in the `registerAdBeacon()` call to successfully trigger the beacon to send the request.
- A string representing the data from the ad frame to include in the request payload sent by the beacon. Here we are providing the X and Y coordinates of the mouse click on the ad.
- An array of strings representing the destinations with registered ad beacons that will receive the event. In this case we want the buyer and the seller to send report data via their beacons when the event is triggered.

> [!NOTE]
> The browser keeps track of which ad is associated with which auction. The `reportEvent()` call in the ad frame will trigger the beacon that was registered for the auction that resulted in that ad frame.

If the document calling `reportEvent()` is cross-origin to the to the origin of the fenced frame root (specified inside the associated {{domxref("FencedFrameConfig")}}), then both the fenced frame root and the cross-origin document need to opt-in:

- To opt in the fenced frame root, serve it with an {{httpheader("Allow-Cross-Origin-Event-Reporting")}} response header.
- To opt in the cross-origin document, include a `crossOriginExposed: true` property in the argument passed into its `reportEvent()` call.

#### Sending report data to a custom destination URL

Sometimes you will want the `reportEvent()` call to trigger sending the report data to a custom URL, different to the one specific in `registerAdBeacon()`. This can be done by specifying a custom URL in the `reportEvent()` call's [`destinationURL`](/en-US/docs/Web/API/Fence/reportEvent#destinationurl) property:

```js
window.fence.reportEvent({
  eventType: "click",
  eventData: JSON.stringify({ clickX: "123", clickY: "456" }),
  destination: ["buyer", "seller"],
  destinationURL: "http://some-other.example",
});
```

The `destinationURL` can include substitution macros that are substituted with values registered by {{domxref("InterestGroupReportingScriptRunnerGlobalScope.registerAdMacro", "registerAdMacro()")}} calls inside the buyer's [`reportWin()`](#) reporting logic (this is not available inside the seller's [`reportResult()`](#) reporting logic). For example, you might want to include `PUBLISHER_ID` and `SOURCE_URL_ENC` values inside the `destinationURL`, which are defined inside `reportWin()`.

You first need to register these values via `registerAdMacro()`:

```js
function reportWin(auctionSignals, browserSignals) {
  const { campaignId } = auctionSignals;

  registerAdBeacon({
    click: `${browserSignals.interestGroupOwner}/report/click?campaignId=${campaignId}`,
  });

  registerAdMacro("PUBLISHER_ID", "123a");
  registerAdMacro("SOURCE_URL_ENC", "http%3A%2F%2Fpub%2Eexample%2Fpage");
}
```

You can then specify these inside the `destinationURL`:

```js
window.fence.reportEvent({
  eventType: "click",
  eventData: JSON.stringify({ clickX: "123", clickY: "456" }),
  destination: ["buyer", "seller"],
  destinationURL:
    "http://some-other.example?cid=555&pub_id=${PUBLISHER_ID}&site=${SOURCE_URL_ENC}&t=123'",
});
```

> [!NOTE]
> The macro values must be URL-encoded (percent encoded). If either the macro name or value contains characters that are cannot be represented in URL-encoded strings, the `registerAdMacro()` call will fail with a `TypeError`.

## Reporting conversions

When a user has clicked the winning ad (or interacted with it in some other way), it is useful to be able to measure conversions — for example, did the user later go on to view or purchase the advertised product on the buyer's main site? The [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API) is designed for this exact purpose, and can be integrated with Protected Audience API reporting like so:

1. Call `registerAdBeacon()` in the reporting logic, like before, to register the ad beacon. However, this time specify the custom event as one of the automatic event types `reserved.top_navigation_start` or `reserved.top_navigation_commit`:

   ```js
   function reportWin(auctionSignals, browserSignals) {
     const { campaignId } = auctionSignals;

     registerAdBeacon({
       "reserved.top_navigation_start": `${browserSignals.interestGroupOwner}/report/click?campaignId=${campaignId}`,
       "reserved.top_navigation_commit": `${browserSignals.interestGroupOwner}/report/click?campaignId=${campaignId}`,
     });
   }
   ```

   A `reserved.top_navigation_start` beacon will be sent when a top-level navigation begins, whereas a `reserved.top_navigation_commit` beacon will be sent when the navigation successfully completes. Beacons registered with these event types will automatically send requests with a {{httpheader("Attribution-Reporting-Eligible")}} header, meaning that they are eligible to be [registered as an attribution source](/en-US/docs/Web/API/Attribution_Reporting_API/Registering_sources).

2. Inside the `<fencedframe>` or `<iframe>` code, specify the automatic event type, event data, and destination(s) using the {{domxref("Fence.setReportEventDataForAutomaticBeacons()")}} method:

   ```js
   window.fence.setReportEventDataForAutomaticBeacons({
     eventType: "reserved.top_navigation_commit",
     eventData: JSON.stringify({ clickX: "123", clickY: "456" }),
     destination: ["buyer", "seller"],
   });
   ```

## Generating summary reports

The [Private Aggregation API](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation) can be used to generate summary reports from Protected Audience data. Summary reports are noisy, aggregated reports, with the associated data collected in buckets. A bucket is represented by an aggregation key, and information can be encoded into the key. For example, you could record the number of ad impression events occuring for different ad campaigns, geographic territories, or user statuses into different buckets.

You can aggregate the signals available within script runners to your server using the {{domxref("PrivateAggregation.contributeToHistogram()")}} method. This is available in the buyer bidding logic, seller scoring logic, and the buyer/seller reporting logic.

In the example below, the winning bid is aggregated into an interest group owner bucket:

```js
function convertBuyerToBucket(igOwner) {}
function convertWinningBidToValue(winningBid) {}

function reportResult(auctionConfig, browserSignals) {
  privateAggregation.contributeToHistogram({
    bucket: convertBuyerToBucket(browserSignals.interestGroupOwner),
    value: convertWinningBidToValue(browserSignals.bid),
  });
}
```

Until the Private Aggregation API is documented on MDN, see the [Private Aggregation API explainer](https://github.com/patcg-individual-drafts/private-aggregation-api) for more information on this API.
