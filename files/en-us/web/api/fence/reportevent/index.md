---
title: "Fence: reportEvent() method"
short-title: reportEvent()
slug: Web/API/Fence/reportEvent
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Fence.reportEvent
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

The **`reportEvent()`** method of the
{{domxref("Fence")}} interface triggers the submission of report data via a [beacon](/en-US/docs/Web/API/Beacon_API) to one or more specific URLs registered via the {{domxref("InterestGroupReportingScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}} method of the [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience), for the purpose of collecting ad auction results.

> **Note:** {{domxref("Fence.setReportEventDataForAutomaticBeacons", "setReportEventDataForAutomaticBeacons()")}} provides similar report data submission, except in that case the submission is triggered via a navigation rather than by an explicit method call.

## Syntax

```js-nolint
reportEvent(event)
```

### Parameters

- `event`
  - : An object or string representing the data to send.
    - An object value defines a specific report event that you want to send. The required properties are as follows:
      - `eventType`
        - : A string representing the type of event that is being reported — for example you might be interested in how many times an ad is clicked on. This string can be any relevant event name (for example [`click`](/en-US/docs/Web/API/Element/click_event)). This needs to match the event type specified in the associated {{domxref("InterestGroupReportingScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}} call in a [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) worklet.
      - `eventData`
        - : A string representing the data to be sent.
      - `destination`
        - : An array containing one or more enumerated values representing destination types. These are the involved parties that will receive the data to their registered URLs (i.e. via {{domxref("InterestGroupReportingScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}}). The possible values are:
          - `"buyer"`: The bidder in the ad auction.
          - `"seller"`: The top-level seller running the ad auction.
          - `"component-seller"`: The seller for a component auction in a multi-level auction.
          - `"direct-seller"`: The seller that directly ran the auction the buyer bid in. If the ad was a single-level auction, the value used will be `"seller"`. If the ad was a multi-level auction, the value used will be `"component-seller"`.
          - `"shared-storage-select-url"`: A [Shared Storage API](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage) storage location, as defined in a {{domxref("WindowSharedStorage.selectURL", "Window.sharedStorage.selectURL()")}} method call.
    - A string value represents an `eventType`, for example `"click"` (see the earlier definition of `eventType`). When an `eventType` string is passed as the value of `reportEvent()`, it triggers all Private Aggregation contributions that were made conditional on that event type (for example via {{domxref("PrivateAggregation.contributeToHistogramOnEvent()")}}) to be sent.

### Return value

None (`Undefined`).

## Examples

```js
window.fence.reportEvent({
  eventType: "click",
  eventData: JSON.stringify({ clickX: "123", clickY: "456" }),
  destination: ["buyer", "seller"],
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fenced frames](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame) on developers.google.com
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) on developers.google.com
