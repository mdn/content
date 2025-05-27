---
title: "HTMLModelElement: boundingBoxExtents property"
short-title: boundingBoxExtents
slug: Web/API/HTMLModelElement/boundingBoxExtents
page-type: web-api-instance-property
browser-compat: api.HTMLModelElement.boundingBoxExtents
---

{{APIRef("HTML DOM")}}

Once a model resource is ready and renderable, the
**`HTMLModelElement.boundingBoxExtents`** property indicates the extents
(or size) of the axis-aligned bounding box (AABB) of the model contents,
irrespective of their location.

> [!NOTE]
> The values for the bounding box information remains constant for the lifetime
> of the model. If a model contains animated content, the values of
> `boundingBoxCenter` and `boundingBoxExtents` will reflect the state of the
> model on the first frame of the animation, or the bounding box of the
> skeletal bind pose, if a
> [skeletal animation](https://en.wikipedia.org/wiki/Skeletal_animation) is present.

## Value

A {{domxref("DOMPointReadOnly")}} that reflects the Extents in X, Y, and Z
of the model resource. For example, both a 1m cube centered on the origin and
one centered at (100,0,0) will have a `boundingBoxExtents` value of
(1,1,1), but the offset cube's `boundingBoxCenter` will be (100,0,0) and the
origin-centered one will be (0,0,0).

> [!NOTE]
> While there are many useful computations of an object's center or size,
> such as [center of mass](https://en.wikipedia.org/wiki/Center_of_mass) or
> mean vertex position, the bounding box center and extents exclusively refer
> to the bounding box between the minimum and maximum position of the model's
> vertices in X, Y, and Z.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLModelElement")}}: Interface used to define the `HTMLModelElement.boundingBoxExtents` property
- {{HTMLElement("audio")}}, {{HTMLElement("video")}}
