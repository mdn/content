---
title: Selector list
slug: Web/CSS/Selector_list
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

To reduce the size of style sheets, one can group selectors in comma-separated lists.

## Syntax

```css
element, element, element { style properties }
```

## Examples

### Single Line Grouping

Grouping selectors in a single line using a comma-separated lists.

```css
h1, h2, h3, h4, h5, h6 { font-family: helvetica; }
```

### Multi Line Grouping

Grouping selectors in a multiple lines using a comma-separated lists.

```css
#main,
.content,
article {
  font-size: 1.1em;
}
```

### Selector list invalidation

A downside to using selector lists is that the following aren't equivalent:

```css
h1 { font-family: sans-serif }
h2:maybe-unsupported { font-family: sans-serif }
h3 { font-family: sans-serif }
```

```css
h1, h2:maybe-unsupported, h3 { font-family: sans-serif }
```

This is because a single unsupported selector in a selector list invalidates the whole rule.

A way to remedy this is to use the {{CSSxRef(":is", ":is()")}} or {{CSSxRef(":where", ":where()")}} selectors, which accept a forgiving selector list. This will ignore invalid selectors in the list but accept those which are valid.

```css
h1 { font-family: sans-serif }
h2:maybe-unsupported { font-family: sans-serif }
h3 { font-family: sans-serif }
```

```css
:is(h1, h2:maybe-unsupported, h3) { font-family: sans-serif }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{CSSxRef(":is", ":is()")}} {{Experimental_Inline}} and {{CSSxRef(":where", ":where()")}} {{Experimental_Inline}} pseudo-classes, which accept a forgiving selector list.
