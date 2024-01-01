---
title: "CSSConditionRule: conditionText property"
short-title: conditionText
slug: Web/API/CSSConditionRule/conditionText
page-type: web-api-instance-property
browser-compat: api.CSSConditionRule.conditionText
---

{{ APIRef("CSSOM") }}

The **`conditionText`** property of
the {{domxref("CSSConditionRule")}} interface returns or sets the text of the CSS
rule.

## Value

A string.

## Examples

The following example demonstrates getting and setting the value of
`conditionText` on a {{domxref("CSSMediaRule")}} which implements the
{{domxref("CSSConditionRule")}} interface.

```css
@media (min-width: 500px) {
  body {
    color: blue;
  }
}
```

```js
let myRules = document.styleSheets[0].cssRules;
let text = myRules[0].conditionText;
console.log(text); // "(min-width: 500px)"
text = "(min-width: 400px)";
console.log(text); // "(min-width: 400px)"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using dynamic styling information](/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
