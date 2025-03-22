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

This stylesheet contains a nested {{domxref("cssRule","cssRules")}}.

The first `console.log` shows the top-level `style`, the second shows the nested `@media` query with its nested style and the final shows the nested style declared after the `@media` query.

```css
.foo {
  font-size: 1.2rem;
  @media (screen) {
    color: tomato;
    background-color: darkgrey;
  }
  color: black;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].style);
// { "0": "font-size" }
console.log(myRules[0].cssRules[0].cssRules[0].style);
// { "0": "color", "1": "background-color" }
console.log(myRules[0].cssRules[1].style);
// { "0": "color" }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See Also

- {{domxref("CSSNestedDeclarations")}}
- [The Nested Declarations Rule](/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting#nested_declarations_rule)
