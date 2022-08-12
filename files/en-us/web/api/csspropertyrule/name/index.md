---
title: CSSPropertyRule.name
slug: Web/API/CSSPropertyRule/name
page-type: web-api-instance-property
tags:
  - API
  - CSS
  - CSS Properties and Values API
  - CSSPropertyRule
  - Houdini
  - Property
  - Reference
  - Read-only
browser-compat: api.CSSPropertyRule.name
---
{{APIRef("CSS Properties and Values API")}}

The read-only **`name`** property of the {{domxref("CSSPropertyRule")}} interface represents the property name, this being the serialization of the name given to the custom property in the {{cssxref("@property")}} rule's prelude.

## Value

A string.

## Examples

This stylesheet contains a single {{cssxref("@property")}} rule. The first {{domxref("CSSRule")}} returned will be a `CSSPropertyRule` representing this rule. The `name` property returns the string `"--property-name"`, which is the name given to the custom property in CSS.

```css
@property --property-name {
  syntax: '<color>';
  inherits: false;
  initial-value: #c0ffee;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].name); //the string "--property-name"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
