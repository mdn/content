---
title: "Window: fence property"
short-title: fence
slug: Web/API/Window/fence
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Window.fence
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

The `fence` read-only property of the {{domxref("Window")}} interface returns a {{domxref("Fence")}} object instance for the current document context.

`Fence` objects are only available to documents embedded inside {{htmlelement("fencedframe")}}s (loaded via {{domxref("FencedFrameConfig")}}s) or {{htmlelement("iframe")}}s (loaded via opaque URNs).

> [!NOTE]
> See [How do `<fencedframe>`s work?](/en-US/docs/Web/API/Fenced_frame_API#how_do_fencedframes_work) for some description around `FencedFrameConfig`s and opaque URNs.

## Value

A {{domxref("Fence")}} object instance, or `null` if the document context does not have access to a {{domxref("Fence")}} object.

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
