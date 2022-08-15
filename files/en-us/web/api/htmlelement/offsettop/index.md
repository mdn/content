---
title: HTMLElement.offsetTop
slug: Web/API/HTMLElement/offsetTop
page-type: web-api-instance-property
tags:
  - API
  - CSSOM View
  - NeedsMarkupWork
  - Property
  - Read-only
  - Reference
browser-compat: api.HTMLElement.offsetTop
---
{{ APIRef("HTML DOM") }}

The **`HTMLElement.offsetTop`** read-only property returns the
distance of the outer border of the current element relative to the inner border of
the top of the {{domxref("HTMLelement.offsetParent","offsetParent")}}, the *closest
positioned* ancestor element.

## Value

A number.

## Examples

```js
const d = document.getElementById("div1");
const topPos = d.offsetTop;

if (topPos > 10) {
  // object offset is more
  // than 10 pixels from its parent
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

In compliance with the specification, this property will return `null` on
Webkit if the element is hidden (the `style.display` of this element or any
ancestor is `"none"`) or if the `style.position` of the element
itself is set to `"fixed"`.

This property will return `null` on Internet Explorer (9) if the
`style.position` of the element itself is set to `"fixed"`.
(Having `display:none` does not affect this browser.)
