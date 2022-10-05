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

The CSS **selector list** (`,`) selects all the matching nodes. A selector list is a comma-separated list of selectors.

## Description

When multiple selectors share the same declarations, they can be grouped together into a comma-separated list. Selector lists can also be passed as parameters to some functional CSS pseudo-classes. White space may appear before and/or after the comma.

The following three declarations are equivalent:

```css
span {
  border: red 2px solid;
}
div {
  border: red 2px solid;
}
```

```css
span,
div {
  border: red 2px solid;
}
```

```css
:is(span, div) {
  border: red 2px solid;
}
```

## Examples

When applying the same styles to elements matching different criteria, grouping the selectors in a comma-separated list can improve consistency while reducing the size of style sheets.

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
article,
h1 + p {
  font-size: 1.1em;
}
```

## Valid and invalid selector lists

An invalid selector represents, and therefore matches, nothing. When a selector list contains an invalid selector, the entire style block is ignored, except for functional pseudo-classes that accept forgiving selector lists.

### Invalid selector list

A downside to using a selector list is that a single unsupported selector in the selector list invalidates the entire rule.

Consider the following two CSS rule sets:

```css
h1 {
  font-family: sans-serif;
}
h2:invalid-pseudo {
  font-family: sans-serif;
}
h3 {
  font-family: sans-serif;
}
```

```css
h1, h2:invalid-pseudo, h3 {
  font-family: sans-serif;
}
```

They are not equivalent. In the first rule set, styles will be applied on the `h1` and `h3` elements, but the `h2:invalid-pseudo` rule will not be parsed. In the second rule set, because one selector in the list is invalid, the entire rule will not be parsed. Because of this, no style will be applied to the `h1` and `h3` elements as when any selector in a list of selectors in invalid, the entire style block will be ignored.

### Forgiving selector list

A way to remedy the [invalid selector list](#invalid_selector_list) problem is to use the {{CSSxRef(":is", ":is()")}} or the {{CSSxRef(":where", ":where()")}} pseudo-class, which accept a forgiving selector list. Each selector in a forgiving selector list is parsed individually. So any invalid selectors in the list are ignored and the valid ones that are valid are used.

Carrying on from the previous example, the following two CSS rule sets are now equivalent:

```css
h1 {
  font-family: sans-serif;
}
h2:maybe-unsupported {
  font-family: sans-serif;
}
h3 {
  font-family: sans-serif;
}
```

```css
:is(h1, h2:maybe-unsupported, h3) {
  font-family: sans-serif;
}
```

The difference between the two is that the specificity of `:is()` is its most specific argument, whereas the `:where()` selector and the forgiving selector list parameter do not add any specificity weight.

### Forgiving relative selector list

A forgiving relative selector list is similar to the [forgiving selector list](#forgiving_selector_list); it just parses the list components as [relative selectors](/en-US/docs/Web/CSS/CSS_Selectors#relative_selector), which begin with an explicit or implied combinator.

```css
h2:has(+ p, > ul::after, + ul.red) {
  font-style: italic;
}
```

In the above, an `h2` that is immediately followed by a `<p>` or a `<ul class="red">`, will be italic. While pseudo-elements are not valid in the [`:has()`](/en-US/docs/Web/CSS/:has) forgiving relative selector list parameter, because the list is forgiving, it doesn't "break" the selector.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [`:is()`](/en-US/docs/Web/CSS/:is), [`:where()`](/en-US/docs/Web/CSS/:where), [`:not()`](/en-US/docs/Web/CSS/:not), and [`:has()`](/en-US/docs/Web/CSS/:has) pseudo-classes accept forgiving selector lists.
- [CSS selectors](/en-US/docs/Web/CSS/CSS_Selectors)
