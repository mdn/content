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

It is available only to documents embedded inside a {{htmlelement("fencedframe")}}.

## Value

A {{domxref("Fence")}} object instance, or `null` if the document context doesn't have an associated {{domxref("FencedFrameConfig")}} (i.e. it isn't embedded inside a `<fencedframe>`).

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
