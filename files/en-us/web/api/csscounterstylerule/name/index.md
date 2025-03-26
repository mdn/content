---
title: "CSSCounterStyleRule: name property"
short-title: name
slug: Web/API/CSSCounterStyleRule/name
page-type: web-api-instance-property
browser-compat: api.CSSCounterStyleRule.name
---

{{APIRef("CSSOM")}}

The **`name`** property of the {{domxref("CSSCounterStyleRule")}} interface gets and sets the {{CSSxRef("&lt;custom-ident&gt;")}} defined as the `name` for the associated rule.

## Value

A string.

## Examples

The following example shows a {{cssxref("@counter-style")}} rule. In JavaScript, `myRules[0]` is this `@counter-style` rule, returning `name` gives us the custom ident "box-corner".

```css
@counter-style box-corner {
  system: fixed;
  symbols: ◰ ◳ ◲ ◱;
  suffix: ": ";
  fallback: disc;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].name); // "box-corner"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
