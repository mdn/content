---
title: "CSSKeyframesRule: name property"
short-title: name
slug: Web/API/CSSKeyframesRule/name
page-type: web-api-instance-property
browser-compat: api.CSSKeyframesRule.name
---

{{APIRef("CSSOM") }}

The **`name`** property of the {{domxref("CSSKeyframeRule")}} interface gets and sets the name of the animation as used by the {{cssxref("animation-name")}} property.

## Value

A string.

## Examples

The CSS includes a keyframes at-rule. This will be the first {{domxref("CSSRule")}} returned by `document.styleSheets[0].cssRules`.
`myRules[0]` returns a {{domxref("CSSKeyframesRule")}} object, with the `name` set to "slidein".

```css
@keyframes slidein {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
}
```

```js
let myRules = document.styleSheets[0].cssRules;
let keyframes = myRules[0]; // a CSSKeyframesRule
console.log(keyframes.name); // "slidein"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
