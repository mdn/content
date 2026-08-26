---
title: Fence
slug: Web/API/Fence
page-type: web-api-interface
status:
  - deprecated
browser-compat: api.Fence
---

{{APIRef("Fenced Frame API")}}{{deprecated_header}}

The **`Fence`** interface of the {{domxref("Fenced Frame API", "Fenced Frame API", "", "nocode")}} contains several functions relevant to {{htmlelement("fencedframe")}} functionality.

`Fence` objects are accessed through the {{domxref("Window.fence")}} property, but they are only available to documents embedded inside {{htmlelement("fencedframe")}}s (loaded via {{domxref("FencedFrameConfig")}}s) or {{htmlelement("iframe")}}s (loaded via opaque URNs).

> [!NOTE]
> See [How do `<fencedframe>`s work?](/en-US/docs/Web/API/Fenced_frame_API#how_do_fencedframes_work) for some description around `FencedFrameConfig`s and opaque URNs.

{{InheritanceDiagram}}

## Instance methods

- {{domxref("Fence.getNestedConfigs", "getNestedConfigs()")}} {{deprecated_inline}}
  - : Returns the {{domxref("FencedFrameConfig")}}s loaded into `<fencedframe>`s embedded inside the current `<fencedframe>`.
- {{domxref("Fence.reportEvent", "reportEvent()")}} {{deprecated_inline}}
  - : Triggers the submission of report data via a [beacon](/en-US/docs/Web/API/Beacon_API) to one ore more specific URLs registered via the {{domxref("InterestGroupReportingScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}} method of the [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience), for the purpose of collecting ad auction results.
- {{domxref("Fence.setReportEventDataForAutomaticBeacons", "setReportEventDataForAutomaticBeacons()")}} {{deprecated_inline}}
  - : Specifies event data that will be sent when a navigation occurs inside a `<fencedframe>`. This data will be sent via an automatic beacon to one or more specific URLs registered via the {{domxref("InterestGroupReportingScriptRunnerGlobalScope.registerAdBeacon", "registerAdBeacon()")}} method of the [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience), for the purpose of collecting reporting data for ad auction results.

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

- [Fenced frames](https://privacysandbox.google.com/private-advertising/fenced-frame) on privacysandbox.google.com
- [The Privacy Sandbox](https://privacysandbox.google.com/) on privacysandbox.google.com
