---
title: "HTMLModelElement: entityTransform property"
short-title: entityTransform
slug: Web/API/HTMLModelElement/entityTransform
page-type: web-api-instance-property
browser-compat: api.HTMLModelElement.entityTransform
---

{{APIRef("HTML DOM")}}

The **`HTMLModelElement.entityTransform`**
property reflects the model's visual transformation, indicating the translation, rotation and scale of the model contents, specified as a {{domxref("DOMMatrixReadOnly")}} that may be read or overwritten (unless the model is in a special stage mode such as `orbit`, see the discussion of [`"orbit" stage mode`](/en-US/docs/Web/API/HTMLModelElement/stageMode#orbit_mode).)

## Value

A {{domxref("DOMMatrixReadOnly")}} that can be read for the current transformation, or written to in order to update the view of the model contents.
It is also possible to assign it a {{domxref("DOMMatrix")}} that include the self-mutating transformations such as [`translateSelf`](/en-US/docs/Web/API/DOMMatrix/translateSelf),[`rotateSelf`](/en-US/docs/Web/API/DOMMatrix/rotateSelf) etc.

> [!NOTE]
> Some transformations cannot be set on a model. Attempts to set
> transformations containing a non-uniform `scale` component or any
> shearing will be ignored and result in an error.

## Default value

By default, the `entityTransform` of a model element will be computed
to contain the 3D contents of the model resource within the displayed
bounds of the DOM element present on the page. That is, the model's
height (or Y-extents) will fit within the element's `height` value,
the model's width (or X-extents) will fit within the element's `width`
value. The model's horizontal and vertical (XY) center will be centered
in the viewport, and the model's Z-depth will be set back in -Z to
be fully contained in the viewport.

## Natural units

A model resource will be automatically scaled to fit within the
initially-assigned viewport allocated. However, the scale _relationship_
between model contents and the viewport allocated obey the implied CSS
scale of 1 centimeter representing 37.8 CSS pixels.

> [!NOTE]
> For privacy reasons, a user agent does not provide any indication of
> the true, real-world scale of a model or the containing window.

## Examples

```js
// Set the model to the identity transform. A 10cm object would have an
// apparent size of 10 * 32.8 = 328 CSS pixels.
document.querySelector("#model").entityTransform = new DOMMatrix();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLModelElement")}}: Interface used to define the `HTMLModelElement.entityTransform` property
- {{HTMLElement("audio")}}, {{HTMLElement("video")}}
