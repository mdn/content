---
title: CSSPositionValue.y
slug: Web/API/CSSPositionValue/y
tags:
  - API
  - CSS Typed Object Model API
  - CSSPositionValue
  - Experimental
  - Houdini
  - Property
  - Reference
  - Deprecated
  - 'y'
browser-compat: api.CSSPositionValue.y
---
{{deprecated_header}}{{APIRef("CSS Typed Object Model API")}}

The **`y`** property of the
{{domxref("CSSPositionValue")}} interface returns the item's position along the
vertical axis.

## Syntax

```js
var y = CSSPositionValue.y
```

### Value

A {{domxref('CSSNumericValue')}}.

## Example

The following example positions a container `<div>` 5 pixels from the
top and 10 pixels from the left of the page.

```js
let replaceEl = document.getElementById('container');
let position = new CSSPositionValue(CSS.px(5), CSS.px(10));

someDiv.attributeStyleMap.set('object-position', position);
console.log(position.x.value, position.y.value);
```

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSPositionValue.CSSPositionValue")}}
- {{domxref("CSSPositionValue.x")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
