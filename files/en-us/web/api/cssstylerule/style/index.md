---
title: "CSSStyleRule: style property"
short-title: style
slug: Web/API/CSSStyleRule/style
page-type: web-api-instance-property
browser-compat: api.CSSStyleRule.style
---

{{ APIRef("CSSOM") }}

The read-only **`style`** property is the {{ domxref("CSSStyleDeclaration") }} interface for the declaration block of the {{ DOMXref("CSSStyleRule") }}.

## Value

A {{domxref("CSSStyleDeclaration")}} object, with the following properties:

- computed flag
  - : Unset.
- declarations
  - : The declared declarations in the rule, in the order they were specified, shorthand properties expanded to longhands.
- parent CSS rule
  - : The context object, which is an alias for [this](https://heycam.github.io/webidl/#this).
- owner node
  - : Null.

## Examples

The CSS includes one style rule. This will be the first {{domxref("CSSRule")}} returned by `document.styleSheets[0].cssRules`.
`myRules[0].style` therefore returns a {{domxref("CSSStyleDeclaration")}} object representing the declarations defined for `h1`.

```css
h1 {
  color: pink;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].style); // a CSSStyleDeclaration representing the declarations on the h1.
```

> [!NOTE]
> The declaration block is that part of the style rule that appears within the braces and that actually provides the style definitions (for the selector, the part that comes before the braces).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
