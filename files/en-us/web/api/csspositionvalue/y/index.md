---
title: "CSSPositionValue: y property"
short-title: y
slug: Web/API/CSSPositionValue/y
page-type: web-api-instance-property
status:
  - deprecated
  - non-standard
browser-compat: api.CSSPositionValue.y
---

{{deprecated_header}}{{APIRef("CSS Typed Object Model API")}}{{Non-standard_header}}

The **`y`** property of the
{{domxref("CSSPositionValue")}} interface returns the item's position along the
vertical axis.

## Value

A {{domxref('CSSNumericValue')}}.

## Examples

The following example positions a container `<div>` 5 pixels from the
top and 10 pixels from the left of the page.

```js
let replaceEl = document.getElementById("container");
let position = new CSSPositionValue(CSS.px(5), CSS.px(10));

someDiv.attributeStyleMap.set("object-position", position);
console.log(position.x.value, position.y.value);
```

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSPositionValue.CSSPositionValue", "CSSPositionValue()")}}
- {{domxref("CSSPositionValue.x")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
