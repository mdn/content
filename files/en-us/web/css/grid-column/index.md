---
title: grid-column
slug: Web/CSS/grid-column
page-type: css-shorthand-property
browser-compat: css.properties.grid-column
---

{{CSSRef}}

The **`grid-column`** CSS [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) specifies a grid item's size and location within a {{glossary("grid column")}} by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its {{glossary("grid areas", "grid area")}}.

{{EmbedInteractiveExample("pages/css/grid-column.html")}}

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`grid-column-end`](/en-US/docs/Web/CSS/grid-column-end)
- [`grid-column-start`](/en-US/docs/Web/CSS/grid-column-start)

## Syntax

```css
/* Keyword values */
grid-column: auto;
grid-column: auto / auto;

/* <custom-ident> values */
grid-column: somegridarea;
grid-column: somegridarea / someothergridarea;

/* <integer> + <custom-ident> values */
grid-column: somegridarea 4;
grid-column: 4 somegridarea / 6;

/* span + <integer> + <custom-ident> values */
grid-column: span 3;
grid-column: span somegridarea;
grid-column: 5 somegridarea span;
grid-column: span 3 / 6;
grid-column: span somegridarea / span someothergridarea;
grid-column: 5 somegridarea span / 2 span;

/* Global values */
grid-column: inherit;
grid-column: initial;
grid-column: revert;
grid-column: revert-layer;
grid-column: unset;
```

This property is specified as one or two `<grid-line>` values.

If two `<grid-line>` values are given, they are separated by `/`.
The `grid-column-start` longhand is set to the value before the slash, and the `grid-column-end` longhand is set to the value after the slash.

Each `<grid-line>` value can be specified as:

- either the `auto` keyword
- or a `<custom-ident>` value
- or an `<integer>` value
- or both `<custom-ident>` and `<integer>`, separated by a space
- or the keyword `span` together with either a `<custom-ident>` or an `<integer>` or both.

### Values

- `auto`
  - : Is a keyword indicating that the property contributes nothing to the grid item's placement, indicating auto-placement, an automatic span, or a default span of `1`.
- `<custom-ident>`

  - : If there is a named line with the name `<custom-ident>-start`/`<custom-ident>-end`, it contributes the first such line to the grid item's placement.

    > **Note:** Named grid areas automatically generate implicit named lines of this form, so specifying `grid-column: foo;` will choose the start/end edge of that named grid area (unless another line named `foo-start`/`foo-end` was explicitly specified before it).

    Otherwise, this is treated as if the integer `1` had been specified along with the `<custom-ident>`.

- `<integer> && <custom-ident>?`

  - : Contributes the nth grid line to the grid item's placement. If a negative integer is given, it instead counts in reverse, starting from the end edge of the explicit grid.

    If a name is given as a `<custom-ident>`, only lines with that name are counted. If not enough lines with that name exist, all implicit grid lines are assumed to have that name for the purpose of finding this position.

    An {{cssxref("integer")}} value of `0` is invalid.

- `span && [ <integer> || <custom-ident> ]`

  - : Contributes a grid span to the grid item's placement such that the corresponding edge of the grid item's grid area is n lines from the opposite edge.

    If a name is given as a `<custom-ident>`, only lines with that name are counted. If not enough lines with that name exist, all implicit grid lines on the side of the explicit grid corresponding to the search direction are assumed to have that name for the purpose of counting this span.

    If the `<integer>` is omitted, it defaults to `1`. Negative integers or 0 are invalid.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting grid column size and location

#### HTML

```html
<div id="grid">
  <div id="item1"></div>
  <div id="item2"></div>
  <div id="item3"></div>
</div>
```

#### CSS

```css
#grid {
  display: grid;
  height: 100px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 100px;
}

#item1 {
  background-color: lime;
}

#item2 {
  background-color: yellow;
  grid-column: 2 / 4;
}

#item3 {
  background-color: blue;
  grid-column: span 2 / 7;
}
```

#### Result

{{EmbedLiveSample("Setting_grid_column_size_and_location", "100%", "100px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("grid-row")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}
- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}

- [Line-based placement with CSS grid](/en-US/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- Video: [Line-based placement](https://gridbyexample.com/video/series-line-based-placement/)
