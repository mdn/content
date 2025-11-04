---
title: :heading()
slug: Web/CSS/Reference/Selectors/:heading_function
page-type: css-pseudo-class
status:
  - experimental
browser-compat: css.selectors.headingfunction
sidebar: cssref
---

{{SeeCompatTable}}

The **`:heading()`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes) function represents all [heading elements](/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) whose levels match a comma-separated list of integers. This allows you to style elements at specific heading levels at once, rather than matching and styling them individually.

> [!NOTE]
> The `:heading()` functional pseudo-class has the same [specificity](/en-US/docs/Web/CSS/CSS_cascade/Specificity#how_is_specificity_calculated) as a class selector, that is, `0-1-0`. So `:heading()` would have a specificity of `0-1-0`, and `section:heading()` would have a specificity of `0-1-1`.

## Syntax

```css-nolint
:heading( <integer># ) {
  /* ... */
}
```

### Parameters

The `:heading()` pseudo-class function takes a comma-separated list of {{cssxref("&lt;integer&gt;")}}s that represent the heading levels to be styled.

## Usage notes

The `:heading()` functional pseudo-class matches only elements that are semantically recognized as headings. It does not match elements with a [`role="heading"`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role) attribute, nor does it respect the ['aria-level'](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) ARIA attribute.

The heading level might be different from an element's [type selector](/en-US/docs/Web/CSS/Reference/Selectors/Type_selectors). So, a selector `h1:heading(3)` matches any `<h1>` element which has an exposed heading level of 3.

## Examples

### Using heading function

In this example, the comma separated list of values are used to target headings with odd-numbered levels, which are `<h1>` and `<h3>` or alternatively even-numbered heading levels, `<h2>` and `<h4>`.

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
```

```css
:heading(1, 3) {
  color: tomato;
}
:heading(2, 4) {
  color: slateblue;
}
```

{{EmbedLiveSample("using_heading_function", "", "215")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`:heading`](/en-US/docs/Web/CSS/Reference/Selectors/:heading)
