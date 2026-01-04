---
title: :heading
slug: Web/CSS/Reference/Selectors/:heading
page-type: css-pseudo-class
status:
  - experimental
browser-compat: css.selectors.heading
sidebar: cssref
---

{{SeeCompatTable}}

The **`:heading`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes) matches all [heading elements](/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) in a document.

## Syntax

```css
:heading {
  /* ... */
}
```

## Description

The `:heading` pseudo-class allows you to style all headings at once, rather than matching and styling them individually.

This pseudo-class matches only elements that by default are semantically recognized as headings (`<h1>` through `<h6>`). Elements with [`role="heading"`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role) are not matched; you can select those by using the `[role="heading"]` [attribute selector](/en-US/docs/Web/CSS/Reference/Selectors/Attribute_selectors).

The `:heading` pseudo-class has the same [specificity](/en-US/docs/Web/CSS/Guides/Cascade/Specificity#how_is_specificity_calculated) as a class selector, that is, `0-1-0`. So `:heading` has a specificity of `0-1-0`, whereas `h1, h2, h3, h4, h5, h6` would have a specificity of `0-0-1` and `section:heading` would have a specificity of `0-1-1`.

## Examples

### Styling all headings

In this example, we use the `:heading` pseudo-class to style multiple levels of headings.

#### HTML

The document contains headings at three different levels, along with {{htmlelement("p")}} paragraph elements.

```html
<h1>Mastering CSS</h1>
<h2>Chapter 1: Selectors</h2>
<p>
  A CSS selector is the part of a CSS rule that describes what elements in a
  document the rule will match.
</p>
<h3>1.1 Pseudo-classes</h3>
<p>
  CSS pseudo-classes enable selecting elements based on information that lies
  outside of the document tree.
</p>
```

#### CSS

We set the heading elements to be italic and tomato red.

```css
:heading {
  color: tomato;
  font-style: italic;
}
```

#### Results

{{EmbedLiveSample("styling_all_headings", "", "170")}}

The `:heading` pseudo-class applies the {{cssxref("color")}} and {{cssxref("font-style")}} to all the headings in the document, but not the paragraphs:

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`:heading()`](/en-US/docs/Web/CSS/Reference/Selectors/:heading_function)
