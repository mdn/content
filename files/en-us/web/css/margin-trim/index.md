---
title: margin-trim
slug: Web/CSS/margin-trim
tags:
  - CSS
  - CSS Property
  - Draft
  - Experimental
  - NeedsContent
  - NeedsExample
  - NeedsLiveSample
  - Reference
  - recipe:css-property
browser-compat: css.properties.margin-trim
---
{{CSSRef}}{{SeeCompatTable}}

The `margin-trim` property allows the container to trim the margins of its children where they adjoin the container's edges.

## Syntax

```css
margin-trim: none;
margin-trim: in-flow;
margin-trim: all;

/* Global values */
margin-trim: inherit;
margin-trim: initial;
margin-trim: revert;
margin-trim: revert-layer;
margin-trim: unset;
```

## Values

- `none`
  - : Margins are not trimmed by the container.
- `in-flow`

  - : For in-flow boxes contained by this box, block-axis margins adjacent to the box's edges are truncated to zero.

    It also truncates any margins collapsed with such a margin.

- `all`
  - : Trims the margins of in-flow boxes and floats whose margins coincide with the container's content edge.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

Once support is implemented for this property, it will probably work like so:

When you've got a container with some inline children and you want to put a margin between each child but not have it interfere with the spacing at the end of the row, you might do something like this:

```css
article {
  background-color: red;
  margin: 20px;
  padding: 20px;
  display: inline-block;
}

article > span {
  background-color: black;
  color: white;
  text-align: center;
  padding: 10px;
  margin-right: 20px;
}
```

The problem here is that you'd end up with 20px too much spacing at the right of the row, so you'd maybe do this to fix it:

```css
span:last-child {
  margin-right: 0;
}
```

It is a pain having to write another rule to achieve this, and it is also not very flexible. Instead, `margin-trim` could fix it:

```css
 article {
  margin-trim: in-flow;
  /* … */
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("margin")}}
