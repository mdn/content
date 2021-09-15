---
title: CSS Declaration Block
slug: Web/API/CSS_Object_Model/CSS_Declaration_Block
tags:
  - CSS
  - CSS Object Model
  - CSS Declaration Block
  - CSS Declarations
  - Reference
---
{{ APIRef("CSSOM") }}

A **CSS declaration block** is an ordered collection of CSS properties and values. It is represented in the DOM as a {{domxref("CSSStyleDeclaration")}}.

Each property and value pairing is known as a [CSS declaration](/en-US/docs/Web/API/CSS_Object_Model/CSS_Declaration). The CSS declaration block has the following associated properties:

- computed flag
  - : Set if the {{domxref("CSSStyleDeclaration")}} object is a computed rather than specified style. Unset by default.
- declarations
  - : The [CSS declarations](/en-US/docs/Web/API/CSS_Object_Model/CSS_Declaration) associated with this object.
- parent CSS rule
  - : The {{domxref("CSSRule")}} that the CSS declaration block is associated with, otherwise null.
- owner node
  - : The {{domxref("element")}} that the CSS declaration block is associated with, otherwise null.
- updating flag
  - : Set when the CSS declaration block is updating the owner node's {{htmlattrxref("style")}} attribute.

When a {{domxref("CSSStyleDeclaration")}} is returned by a [CSS Object Model (CSSOM)](/en-US/docs/Web/API/CSS_Object_Model) interface these properties are set to appropriate values as defined by the specification.

## Basic example

The following example shows a CSS rule with a declaration block for the {{htmlelement("Heading_elements","&lt;h1&gt;")}} element. The CSS declaration block is the lines between the curly braces.

```css
h1 {
  margin: 0 auto;
  font-family: "Helvetica Neue", "Arial", sans-serif;
  font-style: italic;
  color: rebeccapurple;
}
```

We can return a {{domxref("CSSStyleDeclaration")}} representing this CSS declaration block using {{domxref("CSSStyleRule.style")}}.

```js
let myRules = document.styleSheets[0].cssRules;
let rule = myRules[0]; // a CSSStyleRule
console.log(rule.style); // a CSSStyleDeclaration object
```

## Specifications

| Specification                                                                                        | Status                   | Comment |
| ---------------------------------------------------------------------------------------------------- | ------------------------ | ------- |
| {{SpecName('CSSOM', '#css-declaration-blocks', 'CSS Declaration Blocks')}} | {{Spec2('CSSOM')}} |         |
