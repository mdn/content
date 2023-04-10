---
title: "CSSPropertyRule: initialValue property"
short-title: initialValue
slug: Web/API/CSSPropertyRule/initialvalue
page-type: web-api-instance-property
browser-compat: api.CSSPropertyRule.initialValue
---

{{APIRef("CSS Properties and Values API")}}

The read-only **`initialValue`** nullable property of the {{domxref("CSSPropertyRule")}} interface returns the initial value of the custom property registration represented by the {{cssxref("@property")}} rule, controlling the property's initial value.

## Value

A string which is a {{CSSXref("&lt;declaration-value&gt;")}} as
defined in [CSS Syntax 3](https://www.w3.org/TR/css-syntax-3/#typedef-declaration-value).

## Examples

This stylesheet contains a single {{cssxref("@property")}} rule. The first {{domxref("CSSRule")}} returned will be a `CSSPropertyRule` representing this rule. The `initialValue` property returns the string `"#c0ffee"` this being the value of the `initial-value` property in the CSS.

```css
@property --property-name {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].initialValue); //the string "#c0ffee"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
