---
title: "CSSPropertyRule: inherits property"
short-title: inherits
slug: Web/API/CSSPropertyRule/inherits
page-type: web-api-instance-property
browser-compat: api.CSSPropertyRule.inherits
---

{{APIRef("CSS Properties and Values API")}}

The read-only **`inherits`** property of the {{domxref("CSSPropertyRule")}} interface returns the inherit flag of the custom property registration represented by the {{cssxref("@property")}} rule, a boolean describing whether or not the property inherits by default.

## Value

A boolean.

## Examples

This stylesheet contains a single {{cssxref("@property")}} rule. The first {{domxref("CSSRule")}} returned will be a `CSSPropertyRule` representing this rule. The `inherits` property returns the boolean `false`, this being the value of the `inherits` property in the CSS.

```css
@property --property-name {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].inherits); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
