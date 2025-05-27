---
title: "HTMLModelElement: ready property"
short-title: ready
slug: Web/API/HTMLModelElement/ready
page-type: web-api-instance-property
browser-compat: api.HTMLModelElement.ready
---

{{APIRef("HTML DOM")}}

The {{domxref("HTMLModelElement")}}
**`ready`** is a {{jsxref("Promise")}} that reflects the ready-state of a model's [currentSrc](/en-US/docs/Web/API/HTMLModelElement/currentSrc) resource. It is resolved when a valid model resource is loaded and processed, or is rejected if for any reason the resource cannot be used.

> [!NOTE]
> Because a model's rendering depends _necessarily_ on a valid
> model resource and _optionally_ on an environment map resource, it is
> important to wait for both to expect a given model to be ready for display.

## Examples

This example demonstrates how to confirm that both a model's scene and environment map resources are ready for rendering, and how to gracefully address failed parsing:

```js
let modelElem = document.getElementById("model");

model.setAttribute("src", "./teapot.usdz");
model.setAttribute("environmentmap", "./night.hdr");
Promise.all([model.ready, model.environmentMapReady])
  .then(enhanceWithModel)
  .error(showModelError);
```

In this example, the display of the model is prevented until both
resource-related Promise objects are resolved. If processing fails on either
resource, the `showModelError()` function is called to display any relevant
fallback capability to the user.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [model.environmentMapReady](/en-US/docs/Web/API/HTMLModelElement/environmentMapReady)
