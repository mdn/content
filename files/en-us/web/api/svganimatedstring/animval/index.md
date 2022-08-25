---
title: SVGAnimatedString.animVal
slug: Web/API/SVGAnimatedString/animVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedString.animVal
---
{{APIRef("SVG")}}

AnimVal attribute or animVal property contains the same value as the {{domxref("SVGAnimatedString.baseVal")}} property. If the given attribute or property is being animated, contains the current animated value of the attribute or property. If the given attribute or property is not currently being animated, then it contains the same value as baseVal

> **Note:** The **animVal** property is a read only property. Internet Explorer 9 supports script-based SVG animation but it does not support declarative-based SVG animation. As a result, the **animVal** property contains the same value as the **baseVal** property.

## Syntax

```js
const currentValue = object.animVal
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
