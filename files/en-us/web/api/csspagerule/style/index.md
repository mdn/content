---
title: "CSSPageRule: style property"
short-title: style
slug: Web/API/CSSPageRule/style
page-type: web-api-instance-property
browser-compat: api.CSSPageRule.style
---

{{APIRef("CSSOM")}}

The **`style`** read-only property of the {{domxref("CSSPageRule")}} interface returns a {{domxref("CSSStyleDeclaration")}} object. This represents an object that is a [CSS declaration block](/en-US/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block), and exposes style information and various style-related methods and properties.

## Value

A {{domxref("CSSStyleDeclaration")}} object, which represents a [CSS declaration block](/en-US/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block) with the following properties:

- computed flag
  - : Unset.
- declarations
  - : The declared declarations in the rule, in the order they were specified, shorthand properties expanded to longhands.
- parent CSS rule
  - : The context object, which is an alias for [this](https://heycam.github.io/webidl/#this).
- owner node
  - : Null.

## Examples

The stylesheet includes a {{cssxref("@page")}} rule. Getting a list of rules, then returning the value of the style property will return a {{domxref("CSSStyleDeclaration")}} object.

```css
@page {
  margin: 1cm;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].style); // returns a CSSStyleDeclaration object
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
