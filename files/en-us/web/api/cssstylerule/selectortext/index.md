---
title: "CSSStyleRule: selectorText property"
short-title: selectorText
slug: Web/API/CSSStyleRule/selectorText
page-type: web-api-instance-property
browser-compat: api.CSSStyleRule.selectorText
---

{{APIRef("CSSOM") }}

The **`selectorText`** property of the {{domxref("CSSStyleRule")}} interface gets and sets the selectors associated with the `CSSStyleRule`.

## Value

A string.

## Examples

The CSS includes one style rule. This will be the first {{domxref("CSSRule")}} returned by `document.styleSheets[0].cssRules`. `myRules[0].selectorText` therefore returns a literal string of the selector, in this case `"h1"`.

```css
h1 {
  color: pink;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].selectorText); // a string containing "h1".
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
