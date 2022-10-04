---
title: Selector list
slug: Web/CSS/Selector_list
page-type: css-combinator
tags:
  - CSS
  - Selector
  - Selector Lists
  - Selectors
browser-compat: css.selectors.list
---

{{CSSRef}}

The CSS **selector list** (`,`) selects all the matching nodes.

```css
/* Selects all matching elements */
span,
div {
  border: red 2px solid;
}
```

## Syntax

```css
element, element, element { style properties }
```

## Description

When applying styles to elements matching different criteria, group the selectors in a comma-separated list. This improves consistency while also reducing the size of style sheets.

### Invalid selector list

A downside to using a selector list is that a single invalid selector in the selector list invalidates the entire rule.

Consider the following two CSS rule sets:

```css
h1 {
  font-family: sans-serif;
}
h2:maybe-invalid {
  font-family: sans-serif;
}
h3 {
  font-family: sans-serif;
}
```

```css
h1, h2:maybe-invalid, h3 {
  font-family: sans-serif;
}
```

They are not equivalent. In the first rule set, styles will be applied on the `h1` and `h3` elements, but the `h2` rule will not be parsed. However, in the second rule set, because one selector in the list is invalid, the entire rule will not be parsed and no style will be applied to the `h1` and `h3` elements as well; the entire style block will be ignored.

### Forgiving selector list

A way to remedy the [invalid selector list](#invalid_selector_list) problem is to use the {{CSSxRef(":is", ":is()")}} or the {{CSSxRef(":where", ":where()")}} pseudo-class, which accept a forgiving selector list. Each selector in a forgiving selector list is parsed individually. So any invalid selectors in the list are ignored and the valid ones that are valid are used.

Carrying on from the previous example, the following two CSS rule sets are now equivalent:

```css
h1 {
  font-family: sans-serif;
}
h2:maybe-invalid {
  font-family: sans-serif;
}
h3 {
  font-family: sans-serif;
}
```

```css
:is(h1, h2:maybe-invalid, h3) {
  font-family: sans-serif;
}
```

The difference between the two is that the specificity of `:is()` is its most specific argument, whereas the `:where()` selector and the forgiving selector list parameter do not add any specificity weight.

### Forgiving relative selector list

A forgiving relative selector list is similar to the [forgiving selector list](#forgiving_selector_list); it just parses the list components as [relative selectors](/en-US/docs/Web/CSS/CSS_Selectors#relative_selector), which begin with an explicit or implied combinator, rather than [complex selectors](/en-US/docs/Web/CSS/CSS_Selectors#complex_selector).

## Examples

### Single line grouping

This example shows grouping selectors in a single line using a comma-separated list.

```css
h1, h2, h3, h4, h5, h6 {
  font-family: helvetica;
}
```

### Multi line grouping

This example shows grouping selectors in multiple lines using a comma-separated list.

```css
#main,
.content,
article {
  font-size: 1.1em;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{CSSxRef(":is", ":is()")}} and {{CSSxRef(":where", ":where()")}} pseudo-classes accept a forgiving selector list.
- [CSS selectors](/en-US/docs/Web/CSS/CSS_Selectors)
