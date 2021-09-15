---
title: CSSKeywordValue.value
slug: Web/API/CSSKeywordValue/value
tags:
  - API
  - CSS Typed Object Model API
  - CSSKeywordValue
  - Experimental
  - Houdini
  - Property
  - Reference
  - value
browser-compat: api.CSSKeywordValue.value
---
{{SeeCompatTable}}{{APIRef("CSS Typed Object Model API")}}

The **`value`** property of the
{{domxref("CSSKeywordValue")}} interface returns or sets the value of the
`CSSKeywordValue`.

## Syntax

```js
var val = cssKeywordValue.value
cssKeywordValue.value = val
```

### Value

A {{domxref('USVString')}}.

### Exceptions

- `TypeError`
  - : If the `value` property is an empty {{jsxref('String')}} when being set.

## Examples

The following example resets the CSS {{cssxref('display')}} property to its defaults.

```js
let indicator = document.getElementById('indicator');
indicator.attributeStyleMap.set('display', new CSSKeywordValue('initial'));
indicator.attributeStyleMap.get('display').value // 'initial'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
