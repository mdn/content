---
title: "CSSPageRule: selectorText property"
short-title: selectorText
slug: Web/API/CSSPageRule/selectorText
page-type: web-api-instance-property
browser-compat: api.CSSPageRule.selectorText
---

{{APIRef("CSSOM")}}

The **`selectorText`** property of the {{domxref("CSSPageRule")}} interface gets and sets the selectors associated with the `CSSPageRule`.

## Value

A string.

## Examples

The stylesheet includes two {{cssxref("@page")}} rules. The `selectorText` property will return the literal selector text of `:first` as a string.

```css
@page {
  margin: 1cm;
}

@page :first {
  margin: 2cm;
}
```

```js
let myRules = document.styleSheets[0].cssRules; //returns two myRules
console.log(myRules[1].selectorText); // returns the string ":first"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
