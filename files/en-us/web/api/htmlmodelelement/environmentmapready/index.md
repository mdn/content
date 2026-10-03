---
title: "HTMLModelElement: environmentMapReady property"
short-title: environmentMapReady
slug: Web/API/HTMLModelElement/environmentMapReady
page-type: web-api-instance-property
browser-compat: api.HTMLModelElement.environmentMapReady
---

{{APIRef("HTML DOM")}}

The {{domxref("HTMLModelElement")}} property **`environmentMapReady`** is a {{jsxref("Promise")}} that reflects the ready-state of a model's [environment map](/en-US/docs/Web/API/HTMLModelElement/environmentMap) resource. It is resolved when a valid environment map resource is downloaded and ready to contribute to rendering, or is rejected if for any reason the resource cannot be used.

> [!NOTE]
> Because a model's rendering depends _necessarily_ on a valid model resource and _optionally_ on an environment map resource, it is important to wait for both to expect a given model to be ready for display, if a custom environment map is expected.

## Examples

This example demonstrates how to confirm that both a model's scene and environment map resources are ready for rendering, and how to gracefully address failed parsing:

```js
const modelElem = document.getElementById("model");

model.setAttribute("src", "./teapot.usdz");
model.setAttribute("environmentmap", "./night.hdr");
Promise.all([model.ready, model.environmentMapReady])
  .then(enhanceWithModel)
  .error(showModelError);
```

In this example, the display of the model is prevented until both resource Promises are resolved. If processing fails on either resource, the `showModelError()` function is called to display any relevant fallback representation to the user.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`HTMLModelElement.ready`](/en-US/docs/Web/API/HTMLModelElement/ready)
