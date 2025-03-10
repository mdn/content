---
title: "HTMLElement: offsetParent property"
short-title: offsetParent
slug: Web/API/HTMLElement/offsetParent
page-type: web-api-instance-property
browser-compat: api.HTMLElement.offsetParent
---

{{ APIRef("HTML DOM") }}

The **`HTMLElement.offsetParent`** read-only property returns a
reference to the element which is the closest (nearest in the containment hierarchy)
positioned ancestor element.

A positioned ancestor might be:

- a [containing block](/en-US/docs/Web/CSS/CSS_display/Containing_block#identifying_the_containing_block) for absolutely-positioned elements
- an element with a different effective [zoom](/en-US/docs/Web/CSS/zoom) value (that is, the product of all zoom scales of its parents) from this element
- `td`, `th`, `table` in case the element itself is static positioned.

If there is no positioned ancestor element, the `body` is returned.

> **Note:** `offsetParent` returns `null` in the following
> situations:
>
> - The element or any ancestor has the `display` property set to
>   `none`.
> - The element has the `position` property set to `fixed`
>   (Firefox returns `<body>`).
> - The element is `<body>` or `<html>`.

`offsetParent` is useful because
{{domxref("HTMLElement.offsetTop","offsetTop")}} and
{{domxref("HTMLElement.offsetLeft","offsetLeft")}} are relative to its padding edge.

## Value

An object reference to the element in which the current element is offset.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
