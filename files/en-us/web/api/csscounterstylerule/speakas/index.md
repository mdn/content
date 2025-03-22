---
title: "CSSCounterStyleRule: speakAs property"
short-title: speakAs
slug: Web/API/CSSCounterStyleRule/speakAs
page-type: web-api-instance-property
browser-compat: api.CSSCounterStyleRule.speakAs
---

{{APIRef("CSSOM")}}

The **`speakAs`** property of the {{domxref("CSSCounterStyleRule")}} interface gets and sets the value of the {{cssxref("@counter-style/speak-as","speak-as")}} descriptor. If the descriptor does not have a value set, this attribute returns an empty string.

## Value

A string.

## Examples

The following example shows a {{cssxref("@counter-style")}} rule. In JavaScript, `myRules[0]` is this `@counter-style` rule, returning `speakAs` gives us the value "bullets".

```css
@counter-style box-corner {
  system: fixed;
  symbols: ◰ ◳ ◲ ◱;
  suffix: ": ";
  speak-as: bullets;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].speakAs); // "bullets"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
