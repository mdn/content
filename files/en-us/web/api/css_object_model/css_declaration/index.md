---
title: CSS Declaration
slug: Web/API/CSS_Object_Model/CSS_Declaration
page-type: guide
tags:
  - CSS
  - CSS Object Model
  - CSS Declaration
  - Reference
spec-urls: https://drafts.csswg.org/cssom/#css-declarations
---
{{ APIRef("CSSOM") }}

A **CSS declaration** is an abstract concept not exposed as an object in the DOM. It represents a CSS property and value pairing.

A CSS declaration has the following associated properties:

- property name
  - : The property name of the declaration, for example {{cssxref("background-color")}}.
- value
  - : The value of the declaration as a list of component values.
- important flag
  - : Either set or unset.
- case-sensitive flag
  - : Set if the property name is defined to be case-sensitive according to the specification, otherwise unset.

## Basic example

The following example shows a CSS rule with a [CSS declaration block](/en-US/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block) for the {{htmlelement("Heading_elements","&lt;h1&gt;")}} element. The CSS declaration block is the lines between the curly braces, it contains two CSS declarations. One for {{cssxref("font-style")}} and another for {{cssxref("color")}}.

```css
h1 {
  font-style: italic;
  color: rebeccapurple;
}
```

## Specifications

{{Specifications}}
