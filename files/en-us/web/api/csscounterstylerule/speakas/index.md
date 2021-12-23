---
title: CSSCounterStyleRule.speakAs
slug: Web/API/CSSCounterStyleRule/speakAs
tags:
  - API
  - Property
  - Reference
  - speakAs
  - CSSCounterStyleRule
browser-compat: api.CSSCounterStyleRule.speakAs
---
{{DefaultAPISidebar("CSS Counter Styles")}}

The **`speakAs`** property of the {{domxref("CSSCounterStyleRule")}} interface gets and sets the value of the {{cssxref("@counter-style/speak-as","speak-as")}} descriptor. If the descriptor does not have a value set, this attribute returns an empty string.

## Syntax

```js
let speakAs = CSSCounterStyleRule.speakAs;
CSSCounterStyleRule.speakAs = a;
```

### Value

A {{domxref("CSSOMString")}}

## Examples

The following example shows a {{cssxref("@counter-style")}} rule. In JavaScript, `myRules[0]` is this `@counter-style` rule, returning `speakAs` gives us the value "bullets".

```css
@counter-style box-corner {
  system: fixed;
  symbols: ◰ ◳ ◲ ◱;
  suffix: ': ';
  speak-as: "bullets";
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
