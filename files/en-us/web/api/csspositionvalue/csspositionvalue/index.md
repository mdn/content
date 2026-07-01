---
title: "CSSPositionValue: CSSPositionValue() constructor"
short-title: CSSPositionValue()
slug: Web/API/CSSPositionValue/CSSPositionValue
page-type: web-api-constructor
status:
  - deprecated
  - non-standard
browser-compat: api.CSSPositionValue.CSSPositionValue
---

{{APIRef("CSS Typed Object Model API")}}{{deprecated_header}}{{Non-standard_header}}

The **`CSSPositionValue()`** constructor
creates a new {{domxref("CSSPositionValue")}} object which represents values for
properties that take a position, for example {{cssxref('object-position')}}.

## Syntax

```js-nolint
new CSSPositionValue(x, y)
```

### Parameters

- `x`
  - : A position along the web page's horizontal axis.
- `y`
  - : A position along the web page's vertical axis.

## Examples

The following example positions a container `<div>` 5 pixels from the
top and 10 pixels from the left of the page.

```js
let someDiv = document.getElementById("container");
let position = new CSSPositionValue(CSS.px(5), CSS.px(10));

someDiv.attributeStyleMap.set("object-position", position);
console.log(position.x.value, position.y.value); // 5 10
```

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSPositionValue.x")}}
- {{domxref("CSSPositionValue.y")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
