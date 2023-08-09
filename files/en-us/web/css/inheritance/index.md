---
title: Inheritance
slug: Web/CSS/Inheritance
page-type: guide
---

{{CSSRef}}

In CSS, **inheritance** controls what happens when no value is specified for a property on an element.

CSS properties can be categorized in two types:

- **inherited properties**, which by default are set to the [computed value](/en-US/docs/Web/CSS/computed_value) of the parent element
- **non-inherited properties**, which by default are set to [initial value](/en-US/docs/Web/CSS/initial_value) of the property

Refer to [any CSS property](/en-US/docs/Web/CSS/Reference#index) definition to see whether a specific property inherits by default ("Inherited: yes") or not ("Inherited: no").

## Inherited properties

When no value for an **inherited property** has been specified on an element, the element gets the [computed value](/en-US/docs/Web/CSS/computed_value) of that property on its parent element. Only the root element of the document gets the [initial value](/en-US/docs/Web/CSS/initial_value) given in the property's summary.

A typical example of an inherited property is the [`color`](/en-US/docs/Web/CSS/color) property. Consider the following style rules and the markup:

```css
p {
  color: green;
}
```

```html
<p>This paragraph has <em>emphasized text</em> in it.</p>
```

{{EmbedLiveSample("","",40)}}

The words "emphasized text" will appear green, since the `em` element has inherited the value of the [`color`](/en-US/docs/Web/CSS/color) property from the `p` element. It does _not_ get the initial value of the property (which is the color that is used for the root element when the page specifies no color).

## Non-inherited properties

When no value for a **non-inherited property** has been specified on an element, the element gets the [initial value](/en-US/docs/Web/CSS/initial_value) of that property (as specified in the property's summary).

A typical example of a non-inherited property is the {{ Cssxref("border") }} property. Consider the following style rules and the markup:

```css
p {
  border: medium solid;
}
```

```html
<p>This paragraph has <em>emphasized text</em> in it.</p>
```

{{EmbedLiveSample("","",40)}}

The words "emphasized text" will not have another border (since the initial value of [`border-style`](/en-US/docs/Web/CSS/border-style) is `none`).

## Notes

The [`inherit`](/en-US/docs/Web/CSS/inherit) keyword allows authors to explicitly specify inheritance. It works on both inherited and non-inherited properties.

You can control inheritance for all properties at once using the [`all`](/en-US/docs/Web/CSS/all) shorthand property, which applies its value to all properties. For example:

```css
p {
  all: revert;
  font-size: 200%;
  font-weight: bold;
}
```

This reverts the style of the paragraphs' [`font`](/en-US/docs/Web/CSS/font) property to the user agent's default unless a user stylesheet exists, in which case that is used instead. Then it doubles the font size and applies a [`font-weight`](/en-US/docs/Web/CSS/font-weight) of `"bold"`.

### Overriding inheritance, an example

Using our previous example with [`border`](/en-US/docs/Web/CSS/border), if we explicitly set the inheritance with `inherit`, we get the following:

```css
p {
  border: medium solid;
}

em {
  border: inherit;
}
```

```html
<p>This paragraph has <em>emphasized text</em> in it.</p>
```

{{EmbedLiveSample("","",40)}}

We can see here another border around the word "emphasized text".

## See also

- CSS values for controlling inheritance: [`inherit`](/en-US/docs/Web/CSS/inherit), [`initial`](/en-US/docs/Web/CSS/initial), [`revert`](/en-US/docs/Web/CSS/revert), [`revert-layer`](/en-US/docs/Web/CSS/revert-layer), and [`unset`](/en-US/docs/Web/CSS/unset)
- [Introducing the CSS cascade](/en-US/docs/Web/CSS/Cascade)
- [Cascade, specificity, and inheritance](/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- CSS key concepts:
  - [CSS syntax](/en-US/docs/Web/CSS/Syntax)
  - [At-rules](/en-US/docs/Web/CSS/At-rule)
  - [Comments](/en-US/docs/Web/CSS/Comments)
  - [Specificity](/en-US/docs/Web/CSS/Specificity)
  - [Box model](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layout modes](/en-US/docs/Web/CSS/Layout_mode)
  - [Visual formatting models](/en-US/docs/Web/CSS/Visual_formatting_model)
  - [Margin collapsing](/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Values
    - [Initial values](/en-US/docs/Web/CSS/initial_value)
    - [Computed values](/en-US/docs/Web/CSS/computed_value)
    - [Used values](/en-US/docs/Web/CSS/used_value)
    - [Actual values](/en-US/docs/Web/CSS/actual_value)
  - [Value definition syntax](/en-US/docs/Web/CSS/Value_definition_syntax)
  - [Shorthand properties](/en-US/docs/Web/CSS/Shorthand_properties)
  - [Replaced elements](/en-US/docs/Web/CSS/Replaced_element)
