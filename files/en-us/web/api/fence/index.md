---
title: Fence
slug: Web/API/Fence
page-type: web-api-interface
status:
  - experimental
browser-compat: api.Fence
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

The **`Fence`** interface of the {{domxref("Fenced Frame API", "Fenced Frame API", "", "nocode")}} contains several functions relevant to fenced frame functionality.

It is available via {{domxref("Window.fence")}}, but only to documents embedded inside a {{htmlelement("fencedframe")}}.

{{InheritanceDiagram}}

## Instance methods

- {{domxref("Fence.getNestedConfigs", "getNestedConfigs()")}} {{Experimental_Inline}}
  - : Returns the {{domxref("FencedFrameConfig")}}s of any `<fencedframe>` elements embedded inside the current `<fencedframe>`.
- {{domxref("Fence.reportEvent", "reportEvent()")}} {{Experimental_Inline}}
  - : Triggers the submission of report data via a [beacon](/en-US/docs/Web/API/Beacon_API) to one ore more specific URLs registered via the {{domxref("InterestGroupReportingScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}} method of the [Protected Audience API](https://developer.chrome.com/docs/privacy-sandbox/fledge/), for the purpose of collecting ad auction results.
- {{domxref("Fence.setReportEventDataForAutomaticBeacons", "setReportEventDataForAutomaticBeacons()")}} {{Experimental_Inline}}
  - : Specifies event data that will be sent when a navigation occurs inside a `<fencedframe>`. This data will be sent via an automatic beacon to one or more specific URLs registered via the {{domxref("InterestGroupReportingScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}} method of the [Protected Audience API](https://developer.chrome.com/docs/privacy-sandbox/fledge/), for the purpose of collecting reporting data for ad auction results.

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
