---
title: "CSSNestedDeclarations: style property"
short-title: style
slug: Web/API/CSSNestedDeclarations/style
page-type: web-api-instance-property
browser-compat: api.CSSNestedDeclarations.style
---

{{APIRef("CSSOM")}}

The read-only **`style`** property of the {{domxref("CSSNestedDeclarations")}} interface represents the styles associated with the nested rules.

## Value

An object.

## Examples

This stylesheet contains a rule followed by a nested [@media](/en-US/docs/Web/CSS/@media) CSS at-rule followed by another rule. The JS will return an object of all the nested rules.

```css
.foo {
  background-color: silver;
  @media (screen) {
    color: tomato;
  }
  color: black;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].cssRules[1].style); // { "0": "color" }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See Also

- {{domxref("CSSNestedDeclarations")}}
- [The Nested Declarations Rule](https://drafts.csswg.org/css-nesting-1/#nested-declarations-rule)
