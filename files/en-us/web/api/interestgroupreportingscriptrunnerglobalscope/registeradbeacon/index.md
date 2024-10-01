---
title: "InterestGroupReportingScriptRunnerGlobalScope: registerAdBeacon() method"
short-title: registerAdBeacon()
slug: Web/API/InterestGroupReportingScriptRunnerGlobalScope/registerAdBeacon
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.InterestGroupReportingScriptRunnerGlobalScope.registerAdBeacon
---

{{APIRef("Protected Audience API")}}{{SeeCompatTable}}

The **`registerAdBeacon()`** method of the
{{domxref("InterestGroupReportingScriptRunnerGlobalScope")}} interface registers a specialized ad [beacon](/en-US/docs/Web/API/Beacon_API) to send your reporting data to in response to a custom event occurring.

## Syntax

```js-nolint
registerAdBeacon(map)
```

### Parameters

- `map`

  - : An object [map](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) that defines reporting URLs to make requests to in response to different custom events firing. Each property name is a string representing a custom event type, and each property value is a string representing a reporting URL. Reporting URLs must use the HTTPS scheme, and `registerAdBeacon()` can only be called once per script runner.

    The browser makes a [`POST`](/en-US/docs/Web/HTTP/Methods/POST) request to a `url` when its associated custom event is fired (i.e. via a {{domxref("Fence.reportEvent()")}} or {{domxref("Fence.setReportEventDataForAutomaticBeacons()")}} call).

    > [!NOTE]
    > The URLs need to be [enrolled](/en-US/docs/Web/API/Protected_Audience_API#enrollment_and_local_testing) before they can be used in reporting.

### Return value

None (`undefined`).

### Exceptions

- `TypeError` {{domxref("DOMException")}}
  - : Thrown if: - The URL scheme is not HTTPS. - `registerAdBeacon()` has already been called inside the same script runner context. - The specified event type starts with `reserved.`, but isn't one of the [reserved automatic beacon event types](/en-US/docs/Web/API/Fence/setReportEventDataForAutomaticBeacons#eventtype).

## Examples

### Associating auction data with event-level ad data

Associating auction data with event-level ad data is a two-step process:

1. Register a specialized ad [beacon](/en-US/docs/Web/API/Beacon_API) to send your reporting data to in response to a custom event occurring.
2. Later on, in the embedded ad code, trigger the custom event that will trigger the beacon to send the reporting data, and at the same time attaching its own data to the resulting request.

#### Registering the ad beacon

Over in the buyer's bidding logic, we could include a [`reportWin()`](#) function like the following:

```js
function reportWin(auctionSignals, browserSignals) {
  const { campaignId } = auctionSignals;

  registerAdBeacon({
    click: `${browserSignals.interestGroupOwner}/report/click?campaignId=${campaignId}`,
  });
}
```

This registers an ad beacon that will send a request to the buyer's reporting server location when a click occurs on the ad. The first part of the URL is determined from the `interestGroupOwner` property available in the [`browserSignals`](#) argument passed into `reportWin()`. The data being sent in the URL params is a unique campaign ID available in the [`auctionSignals`](#) argument. The `campaignId` will have been set in the [`auctionSignals`](/en-US/docs/Web/API/Navigator/runAdAuction#auctionSignals) property passed into the `runAdAuction()` call that started off the auction process.

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

> [!NOTE]
> The browser keeps track of which ad is associated with which auction. The `reportEvent()` call in the ad frame will trigger the beacon that was registered for the auction that resulted in that ad frame.

If the document calling `reportEvent()` is cross-origin to the to the origin of the fenced frame root (specified inside the associated {{domxref("FencedFrameConfig")}}), then both the fenced frame root and the cross-origin document need to opt-in:

- To opt in the fenced frame root, serve it with an {{httpheader("Allow-Cross-Origin-Event-Reporting")}} response header.
- To opt in the cross-origin document, include a `crossOriginExposed: true` property in the argument passed into its `reportEvent()` call.

### Reporting conversions

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Protected Audience API: Auction event-level reporting](/en-US/docs/Web/API/Protected_Audience_API/Auction_event-level_reporting)
