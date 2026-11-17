---
title: "`margin-trim` CSS property"
short-title: margin-trim
slug: Web/CSS/Reference/Properties/margin-trim
page-type: css-property
browser-compat: css.properties.margin-trim
sidebar: cssref
---

The `margin-trim` property allows the container to trim the margins of its children, in the block axis, where they adjoin the container's edges.

{{InteractiveExample("CSS Demo: margin-trim")}}

```css interactive-example-choice
margin-trim: none;
```

```css interactive-example-choice
margin-trim: block;
```

```css interactive-example-choice
margin-trim: block-start;
```

```css interactive-example-choice
margin-trim: block-end;
```

```html interactive-example
<div class="example-wrapper" id="example-element">
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  <p>Paragraph 3</p>
</div>
```

```css interactive-example
.example-wrapper {
  border: 2px solid tomato;
  margin: 0;
  padding: 0;
}

p {
  color: white;
  background-color: slategrey;
  padding: 0.5rem;
  margin: 1rem;
}
```
## Syntax

```css
margin-trim: none;
margin-trim: block;
margin-trim: block-start;
margin-trim: block-end;

/* Global values */
margin-trim: inherit;
margin-trim: initial;
margin-trim: revert;
margin-trim: revert-layer;
margin-trim: unset;
```

### Values

This property is specified as one of the following keyword values:

- `none`
  - : Margins are not trimmed by the container.

- `block`
  - : Margins provided to the block children where they adjoin the container's edges are trimmed to zero without affecting the margins provided to the container.

- `block-start`
  - : Margin of the first block child with the container's edge is trimmed to zero.

- `block-end`
  - : Margin of last block child with the container's edge is trimmed to zero.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

In this example {{cssxref("margin")}}s are set so that there is spacing between the paragraphs. The `margin-trim` property is used to remove the margin at the start of the `<section>` so that it is more connected to the `<h2>` and the first paragraph using the `block-start` value.

This simplifies the syntax, meaning that the first paragraph does not need to be targeted with the {{cssxref(":first-child")}} pseudo-class.

```html
<h2>Section Heading</h2>
<section>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  <p>Paragraph 3</p>
</section>
```

The `border` around the `<section>` and `background-color` of the `<p>` are only there to help visualize the removal of the margin.

```css
section {
  border: 2px solid tomato;
  margin: 0;
  padding: 0;
  margin-trim: block-start;
}
p {
  background-color: aliceblue;
  padding: 0.5rem;
  margin: 1rem;
}
```

{{EmbedLiveSample('basic_usage','100%',270)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("margin")}}
