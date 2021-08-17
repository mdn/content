---
title: Inheritance
slug: Web/CSS/inheritance
tags:
  - CSS
  - Guide
  - Inheritance
  - Layout
  - Web
---
{{CSSRef}}

In CSS, **inheritance** controls what happens when no value is specified for a property on an element.

CSS properties can be categorized in two types:

- **inherited properties**, which by default are set to the [computed value](/en-US/docs/Web/CSS/computed_value) of the parent element
- **non-inherited properties**, which by default are set to [initial value](/en-US/docs/Web/CSS/Initial_value) of the property

Refer to [any CSS property](/en-US/docs/Web/CSS/Reference#Keyword_index) definition to see whether a specific property inherits by default ("Inherited: yes") or not ("Inherited: no").

## Inherited properties

When no value for an **inherited property** has been specified on an element, the element gets the [computed value](/en-US/docs/Web/CSS/computed_value) of that property on its parent element. Only the root element of the document gets the [initial value](/en-US/docs/Web/CSS/initial_value) given in the property's summary.

A typical example of an inherited property is the {{ Cssxref("color") }} property. Given the style rules:

```css
p { color: green; }
```

... and the markup:

```html
<p>This paragraph has <em>emphasized text</em> in it.</p>
```

... the words "emphasized text" will appear green, since the `em` element has inherited the value of the {{ Cssxref("color") }} property from the `p` element. It does _not_ get the initial value of the property (which is the color that is used for the root element when the page specifies no color).

## Non-inherited properties

When no value for a **non-inherited property** has been specified on an element, the element gets the [initial value](/en-US/docs/Web/CSS/initial_value) of that property (as specified in the property's summary).

A typical example of a non-inherited property is the {{ Cssxref("border") }} property. Given the style rules:

```css
 p { border: medium solid; }
```

... and the markup:

```html
  <p>This paragraph has <em>emphasized text</em> in it.</p>
```

... the words "emphasized text" will not have a border (since the initial value of {{ Cssxref("border-style") }} is `none`).

## Notes

The {{ Cssxref("inherit") }} keyword allows authors to explicitly specify inheritance. It works on both inherited and non-inherited properties.

You can control inheritance for all properties at once using the {{cssxref("all")}} shorthand property, which applies its value to all properties. For example:

```css
p {
  all: revert;
  font-size: 200%;
  font-weight: bold;
}
```

This reverts the style of the paragraphs' {{cssxref("font")}} property to the user agent's default unless a user stylesheet exists, in which case that is used instead. Then it doubles the font size and applies a {{cssxref("font-weight")}} of `"bold"`.

## See also

- CSS values for controlling inheritance: {{ cssxref("inherit") }}, {{cssxref("initial")}}, {{cssxref("unset")}}, and {{cssxref("revert")}}
- [Introducing the CSS cascade](/en-US/docs/Web/CSS/Cascade)
- [Cascade and inheritance](/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance)
- {{ CSS_key_concepts() }}
