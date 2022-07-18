---
title: grid-row-start
slug: Web/CSS/grid-row-start
tags:
  - CSS
  - CSS Grid
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.grid-row-start
---
{{CSSRef}}

The **`grid-row-start`** CSS property specifies a grid item's start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its {{glossary("grid areas", "grid area")}}.

{{EmbedInteractiveExample("pages/css/grid-row-start.html")}}

## Syntax

```css
/* Keyword value */
grid-row-start: auto;

/* <custom-ident> values */
grid-row-start: somegridarea;

/* <integer> + <custom-ident> values */
grid-row-start: 2;
grid-row-start: somegridarea 4;

/* span + <integer> + <custom-ident> values */
grid-row-start: span 3;
grid-row-start: span somegridarea;
grid-row-start: 5 somegridarea span;

/* Global values */
grid-row-start: inherit;
grid-row-start: initial;
grid-row-start: revert;
grid-row-start: revert-layer;
grid-row-start: unset;
```

This property is specified as a single `<grid-line>` value. A `<grid-line>` value can be specified as:

- either the `auto` keyword
- or a `<custom-ident>` value
- or an `<integer>` value
- or both `<custom-ident>` and `<integer>`, separated by a space
- or the keyword `span` together with either a `<custom-ident>` or an `<integer>` or both.

### Values

- `auto`
  - : Is a keyword indicating that the property contributes nothing to the grid item's placement, indicating auto-placement, an automatic span, or a default span of `1`.
- `<custom-ident>`

  - : If there is a named line with the name '\<custom-ident>-start', it contributes the first such line to the grid item's placement.

    > **Note:** Named grid areas automatically generate implicit named lines of this form, so specifying `grid-row-start: foo;` will choose the start edge of that named grid area (unless another line named `foo-start` was explicitly specified before it).

    Otherwise, this is treated as if the integer `1` had been specified along with the `<custom-ident>`.

- `<integer> && <custom-ident>?`

  - : Contributes the nth grid line to the grid item's placement. If a negative integer is given, it instead counts in reverse, starting from the end edge of the explicit grid.

    If a name is given as a \<custom-ident>, only lines with that name are counted. If not enough lines with that name exist, all implicit grid lines are assumed to have that name for the purpose of finding this position.

    An {{cssxref("integer")}} value of `0` is invalid.

- `span && [ <integer> || <custom-ident> ]`

  - : Contributes a grid span to the grid item's placement; such that the row start edge of the grid item's grid area is n lines from the end edge.

    If a name is given as a \<custom-ident>, only lines with that name are counted. If not enough lines with that name exist, all implicit grid lines on the side of the explicit grid, corresponding to the search direction, are assumed to have that name for the purpose of counting this span.

    If the \<integer> is omitted, it defaults to `1`. Negative integers or 0 are invalid.

    The `<custom-ident>` cannot take the `span` value.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting row start for a grid item

#### HTML

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
  <div class="box5">Five</div>
</div>
```

#### CSS

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}

.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}

.box2 {
  grid-column-start: 1;
  grid-row-start: 3;
  grid-row-end: 5;
}
```

```css hidden
* {box-sizing: border-box;}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}

.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

#### Result

{{ EmbedLiveSample('Setting_row_start_for_a_grid_item', '230', '420') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related CSS properties: {{cssxref("grid-row-end")}}, {{cssxref("grid-row")}}, {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}, {{cssxref("grid-column")}}
- Grid Layout Guide: _[Line-based placement with CSS Grid](/en-US/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)_
- Video tutorial: _[Line-based placement](https://gridbyexample.com/video/series-line-based-placement/)_
