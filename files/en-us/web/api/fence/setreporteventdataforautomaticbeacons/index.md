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
{{domxref("Fence")}} interface specifies event data that will be sent when a navigation occurs inside a {{htmlelement("fencedframe")}}. This data will be sent via an automatic [beacon](/en-US/docs/Web/API/Beacon_API) to one or more specific URLs registered via the {{domxref("InterestGroupReportingScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}} method of the [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience), for the purpose of collecting reporting data for ad auction results.

> **Note:** {{domxref("Fence.reportEvent", "reportEvent()")}} provides similar report data submission, except in that case the submission is triggered via an explicit method call rather than a navigation.

## Syntax

```js-nolint
setReportEventDataForAutomaticBeacons(event)
```

### Parameters

- `event`
  - : an object representing the data to send. The possible properties are as follows:
    - `eventType`
      - : A string representing the type of event that is being reported. The available values are:
        - `reserved.top_navigation_start`: An event fired when a top-level navigation begins.
        - `reserved.top_navigation_commit`: An event fired when a top-level navigation completes.
    - `eventData`
      - : A string representing the data to be sent.
    - `destination`
      - : An array containing one or more enumerated values representing destination types. These are the involved parties that will receive the data to their registered URLs (i.e. via {{domxref("InterestGroupReportingScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}}). The possible values are:
        - `"buyer"`: The bidder in the ad auction.
        - `"seller"`: The top-level seller running the ad auction.
        - `"component-seller"`: The seller for a component auction in a multi-level auction.
        - `"direct-seller"`: The seller that directly ran the auction the buyer bid in. If the ad was a single-level auction, the value used will be `"seller"`. If the ad was a multi-level auction, the value used will be `"component-seller"`.
        - `"shared-storage-select-url"`: A [Shared Storage API](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage) storage location, as defined in a {{domxref("WindowSharedStorage.selectURL", "Window.sharedStorage.selectURL()")}} method call.
    - `once` {{optional_inline}}
      - : A boolean value. If set to `true`, the automatic beacon will only be sent for the next event, and beacons will not be sent for subsequent events until `setReportEventDataForAutomaticBeacons()` is invoked again. For example, when used with a `click` handler this can be used to send beacon data only for specific top-level navigations, rather than for every top-level navigation. This property defaults to `false`.

### Return value

None (`Undefined`).

## Examples

```js
window.fence.setReportEventDataForAutomaticBeacons({
  eventType: "reserved.top_navigation_start",
  eventData: "an example string",
  destination: ["seller", "buyer"],
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fenced frames](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame) on developers.google.com
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) on developers.google.com
