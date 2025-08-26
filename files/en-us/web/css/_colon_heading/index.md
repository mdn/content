---
title: :heading
slug: Web/CSS/:heading
page-type: css-pseudo-class
status:
  - experimental
browser-compat: css.selectors.heading
sidebar: cssref
---

{{SeeCompatTable}}

The **`:heading`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) matches all [heading elements](/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) in a document. This allows you to style all headings at once, rather than matching and styling them individually.

This pseudo-class matches only elements that by default are semantically recognized as headings (`<h1>` through `<h6>`). Elements with [`role="heading"`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role) are not matched; you can select those by using the `[role="heading"]` [attribute selector](/en-US/docs/Web/CSS/Attribute_selectors).

> [!NOTE]
> The `:heading` pseudo-class has the same [specificity](/en-US/docs/Web/CSS/CSS_cascade/Specificity#how_is_specificity_calculated) as a class selector, that is, `0-1-0`. So `:heading` would have a specificity of `0-1-0`, and `section:heading` would have a specificity of `0-1-1`.

## Syntax

```css
:heading {
  /* ... */
}
```

## Examples

### Styling all headings

The document in this example contains headings at three different levels.

```html
<h1>Mastering CSS</h1>
<h2>Chapter 1: Selectors</h2>
<h3>1.1 Pseudo-classes</h3>
```

```css
:heading {
  color: tomato;
}
```

The `:heading` pseudo-class applies the `color` to all the headings in the document:

{{EmbedLiveSample("styling_all_headings", "", "170")}}

The `:heading` pseudo-class applies the `color` to all the headings in the document.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSXRef(":heading_function", ":heading()")}}
