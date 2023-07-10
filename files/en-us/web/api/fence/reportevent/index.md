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
{{domxref("Fence")}} interface triggers the submission of report data via a [beacon](/en-US/docs/Web/API/Beacon_API) to one or more specific URLs registered via the {{domxref("InterestGroupReportingScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}} method of the [Protected Audience API](https://developer.chrome.com/docs/privacy-sandbox/fledge/), for the purpose of collecting ad auction results.

> **Note:** {{domxref("Fence.setReportEventDataForAutomaticBeacons", "setReportEventDataForAutomaticBeacons()")}} provides similar report data submission, except in that case the submission is triggered via a navigation rather than by an explicit method call.

## Syntax

```js-nolint
reportEvent(event)
```

### Parameters

- `event`
  - : an object or a string representing the data to send.
    - If the value is an object, the required properties are as follows:
      - `eventType`
        - : A string representing the type of event that is being reported — for example you might be interested in how many times an ad is clicked on. This string can be any relevant event name (for example [`click`](/en-US/docs/Web/API/Element/click_event)). This needs to match the event type specified in the associated {{domxref("InterestGroupReportingScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}} call(s).
      - `eventData`
        - : A string representing the data to be sent.
      - `destination`
        - : An array containing one or more enumerated values representing destination types. These are the involved parties that will receive the data to their registered URLs (i.e. via {{domxref("InterestGroupReportingScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}}). The possible values are:
          - `"buyer"`: The bidder in the ad auction.
          - `"seller"`: The top-level seller running the ad auction.
          - `"component-seller"`: The seller for a component auction in a multi-level auction.
          - `"direct-seller"`: The seller that ran the top-level or component auction that the buyer bid in.
          - `"shared-storage-select-url"`: A [Shared Storage API](https://developer.chrome.com/docs/privacy-sandbox/shared-storage/) select URL. HOW IS ONE OF THESE DESTINATION URLS CREATED VIA SHARED STORAGE?
    - If the value is a string ... TODO, NO INFORMATION AVAILABLE ANYWHERE ABOUT WHAT THIS STRING MIGHT LOOK LIKE OR HOW IT WORKS.

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

- [Fenced frames](https://developer.chrome.com/docs/privacy-sandbox/fenced-frame/) on developer.chrome.com
- [The Privacy Sandbox](https://developer.chrome.com/docs/privacy-sandbox/) on developer.chrome.com
