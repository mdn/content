---
title: HTMLElement.offsetTop
slug: Web/API/HTMLElement/offsetTop
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
the top of the {{domxref("HTMLelement.offsetParent","offsetParent")}} node.

## Syntax

```js
topPos = element.offsetTop;
```

### Parameters

- `topPos` is the number of pixels from the top of the *closest
  relatively positioned* parent element.

## Example

```js
var d = document.getElementById("div1");
var topPos = d.offsetTop;

if (topPos > 10) {
  // object is offset more
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
