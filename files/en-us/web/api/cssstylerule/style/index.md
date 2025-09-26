---
title: "CSSStyleRule: style property"
short-title: style
slug: Web/API/CSSStyleRule/style
page-type: web-api-instance-property
browser-compat: api.CSSStyleRule.style
---

{{ APIRef("CSSOM") }}

The read-only **`style`** property is a {{domxref("CSSStyleProperties")}} object representing the inline declaration block of a {{DOMXref("CSSStyleRule")}}.

Note that properties that are not defined in the corresponding CSS declaration are set to the empty string (`""`).

## Value

A {{domxref("CSSStyleProperties")}}.

> [!NOTE]
> Earlier versions of the specification returned a {{domxref("CSSStyleDeclaration")}}, which is now the base class of {{domxref("CSSStyleProperties")}}.
> See the [browser compatibility](#browser_compatibility) table for browser support information.

## Examples

### Getting the styles for a style rule

The CSS below defines the style rule for the `h1` selector, which is represented in code by a {{domxref("CSSStyleRule")}} instance.
The declaration block is that part of the style rule that appears within the braces and that actually provides the style definitions (for the selector, the part that comes before the braces), which is represented in code by the {{domxref("CSSStyleRule.style")}} property.

```css
h1 {
  color: pink;
}
```

Assuming the above style rule is the first rule in the document, it will be the first {{domxref("CSSRule")}} returned by `document.styleSheets[0].cssRules`.
`myRules[0].style` returns a {{domxref("CSSStyleProperties")}} object representing the declarations defined for `h1`.

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].style); // a CSSStyleProperties representing the declarations on the h1.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
