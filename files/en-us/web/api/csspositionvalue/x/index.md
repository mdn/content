---
title: CSSPositionValue.x
slug: Web/API/CSSPositionValue/x
tags:
  - API
  - CSS Typed Object Model API
  - CSSPositionValue
  - Experimental
  - Houdini
  - Property
  - Reference
  - Deprecated
  - x
browser-compat: api.CSSPositionValue.x
---
{{deprecated_header}}{{APIRef("CSS Typed Object Model API")}}

The **`x`** property of the
{{domxref("CSSPositionValue")}} interface returns the item's position along the web
page's horizontal axis.

## Syntax

```js
var x = CSSPositionValue.x
```

### Value

A {{domxref('CSSNumericValue')}}.

## Example

The following example positions a container `<div>` 5 pixels from the
top and 10 pixels from the left of the page.

```js
let someDiv = document.getElementById('container');
let position = new CSSPositionValue(CSS.px(5), CSS.px(10));

someDiv.attributeStyleMap.set('object-position', position);
console.log(position.x.value, position.y.value);
```

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSPositionValue.CSSPositionValue()")}}
- {{domxref("CSSPositionValue.y")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
