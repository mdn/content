---
title: "HTMLModelElement: height property"
short-title: height
slug: Web/API/HTMLModelElement/height
page-type: web-api-instance-property
browser-compat: api.HTMLModelElement.height
---

{{APIRef("HTML DOM")}}

The **`height`** property of the {{domxref("HTMLModelElement")}} interface indicates the height at which a model is drawn in {{Glossary("CSS pixel", "CSS pixels")}} if it's being drawn or rendered to any visual medium such as a screen or printer.

## Value

An integer value indicating the height of the model portal's display.

### Impact on model presentation

While valid model content does possess dimensional data, the model's _portal dimensions_ are not implicitly set by valid content. Because of this, the width and height of any model element will remain at the default element dimensions of 300 x 150px unless explicitly set with CSS, or specifying explicit `width` and `height` values through their respective attributes.

### Initial presentation

A model's contents is set to automatically fit within the portal's `width` and `height` dimensions at the moment that the `ready` Promise is resolved. However, the resulting [entityTransform](/en-US/docs/Web/API/HTMLModelElement/entityTransform) is not automatically updated during subsequent changes to the viewport dimensions, meaning that the model contents will remain the same size within the portal's overall dimensions.

### `stagemode="orbit"`

An exception applies when a model has its [`stagemode`](/en-US/docs/Web/HTML/Reference/Elements/model#stagemode) attribute set to `orbit`, which will automatically fit the model contents into the available portal space, according to the "orbit fit" guidelines. See orbit's [impact on `entityTransform`](/en-US/docs/Web/API/HTMLModelElement/stageMode#impact_on_entitytransform) for details.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLCanvasElement.height")}}
- {{domxref("HTMLEmbedElement.height")}}
- {{domxref("HTMLIFrameElement.height")}}
- {{domxref("HTMLObjectElement.height")}}
- {{domxref("HTMLSourceElement.height")}}
- {{domxref("HTMLVideoElement.height")}}
