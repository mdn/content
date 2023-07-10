---
title: "Fence: setReportEventDataForAutomaticBeacons() method"
short-title: setReportEventDataForAutomaticBeacons()
slug: Web/API/Fence/setReportEventDataForAutomaticBeacons
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Fence.setReportEventDataForAutomaticBeacons
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

The **`setReportEventDataForAutomaticBeacons()`** method of the
{{domxref("Fence")}} interface specifies event data that will be sent when a navigation occurs inside a {{htmlelement("fencedframe")}}. This data will be sent via an automatic [beacon](/en-US/docs/Web/API/Beacon_API) to one or more specific URLs registered via the {{domxref("InterestGroupReportingScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}} method of the [Protected Audience API](https://developer.chrome.com/docs/privacy-sandbox/fledge/), for the purpose of collecting reporting data for ad auction results.

> **Note:** {{domxref("Fence.reportEvent", "reportEvent()")}} provides similar report data submission, except in that case the submission is triggered via an explicit method call rather than a navigation.

## Syntax

```js-nolint
setReportEventDataForAutomaticBeacons(event)
```

### Parameters

- `event`
  - : an object representing the data to send. The required properties are as follows:
    - `eventType`
      - : A string representing the type of event that is being reported — this is currently always the special event identifier `reserved.top_navigation`.
    - `eventData`
      - : A string representing the data to be sent.
    - `destination`
      - : An array containing one or more enumerated values representing destination types. These are the involved parties that will receive the data to their registered URLs (i.e. via {{domxref("InterestGroupReportingScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}}). The possible values are:
        - `"buyer"`: The bidder in the ad auction.
        - `"seller"`: The top-level seller running the ad auction.
        - `"component-seller"`: The seller for a component auction in a multi-level auction.
        - `"direct-seller"`: The seller that ran the top-level or component auction that the buyer bid in.
        - `"shared-storage-select-url"`: A [Shared Storage API](https://developer.chrome.com/docs/privacy-sandbox/shared-storage/) select URL. HOW IS ONE OF THESE DESTINATION URLS CREATED VIA SHARED STORAGE?

### Return value

None (`Undefined`).

## Examples

```js
window.fence.setReportEventDataForAutomaticBeacons({
  eventType: "reserved.top_navigation",
  eventData: "an example string",
  destination: ["seller", "buyer"],
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fenced frames](https://developer.chrome.com/docs/privacy-sandbox/fenced-frame/) on developer.chrome.com
- [The Privacy Sandbox](https://developer.chrome.com/docs/privacy-sandbox/) on developer.chrome.com
