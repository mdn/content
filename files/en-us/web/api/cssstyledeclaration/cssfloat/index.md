---
title: "CSSStyleDeclaration: cssFloat property"
short-title: cssFloat
slug: Web/API/CSSStyleDeclaration/cssFloat
page-type: web-api-instance-property
browser-compat: api.CSSStyleDeclaration.cssFloat
---

{{APIRef("CSSOM")}}

The **`cssFloat`** property of the {{domxref("CSSStyleDeclaration")}} interface returns the result of invoking {{DOMxRef("CSSStyleDeclaration.getPropertyValue()")}} with `float` as an argument.

When setting, it invokes {{DOMxRef("CSSStyleDeclaration.setProperty()")}} with `float` as the first argument, and the given value as the second argument. The given value must be a valid value for the {{cssxref("float")}} property.

## Value

A string.

## Example

In the below example, the stylesheet contains a single rule for `.box`, which has the {{cssxref("float")}} property with a value of `left`. This value will be returned by `cssFloat`. We then set the value to "right" using `cssFloat`, and return the new value.

```css
.box {
  float: left;
  inline-size: 300px;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
let rule = myRules[0];
console.log(rule.style.cssFloat); // "left"
rule.style.cssFloat = "right";
console.log(rule.style.cssFloat); //right
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
