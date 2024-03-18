---
title: grid-column-end
slug: Web/CSS/grid-column-end
page-type: css-property
browser-compat: css.properties.grid-column-end
---

{{CSSRef}}

The **`grid-column-end`** CSS property specifies a grid item's end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its {{glossary("grid areas", "grid area")}}.

{{EmbedInteractiveExample("pages/css/grid-column-end.html")}}

## Syntax

```css
/* Keyword value */
grid-column-end: auto;

/* <custom-ident> values */
grid-column-end: somegridarea;

/* <integer> + <custom-ident> values */
grid-column-end: 2;
grid-column-end: somegridarea 4;

/* span + <integer> + <custom-ident> values */
grid-column-end: span 3;
grid-column-end: span somegridarea;
grid-column-end: 5 somegridarea span;

/* Global values */
grid-column-end: inherit;
grid-column-end: initial;
grid-column-end: revert;
grid-column-end: revert-layer;
grid-column-end: unset;
```

### Values

- `auto`
  - : Is a keyword indicating that the property contributes nothing to the grid item's placement, indicating auto-placement, an automatic span, or a default span of `1`.
- `<custom-ident>`

  - : If there is a named line with the name '\<custom-ident>-end', it contributes the first such line to the grid item's placement.

    > **Note:** Named grid areas automatically generate implicit named lines of this form, so specifying `grid-column-end: foo;` will choose the end edge of that named grid area (unless another line named `foo-end` was explicitly specified before it).

    Otherwise, this is treated as if the integer `1` had been specified along with the `<custom-ident>`.

- `<integer> && <custom-ident>?`

  - : Contributes the nth grid line to the grid item's placement. If a negative integer is given, it instead counts in reverse, starting from the end edge of the explicit grid.

    If a name is given as a \<custom-ident>, only lines with that name are counted. If not enough lines with that name exist, all implicit grid lines are assumed to have that name for the purpose of finding this position.

    An {{cssxref("integer")}} value of `0` is invalid.

- `span && [ <integer> || <custom-ident> ]`

  - : Contributes a grid span to the grid item's placement such that the column end edge of the grid item's grid area is n lines from the start edge.

    If a name is given as a \<custom-ident>, only lines with that name are counted. If not enough lines with that name exist, all implicit grid lines on the side of the explicit grid corresponding to the search direction are assumed to have that name for the purpose of counting this span.

    If the \<integer> is omitted, it defaults to `1`. Negative integers or 0 are invalid.

    The `<custom-ident>` cannot take the `span` value.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting column end for a grid item

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
* {
  box-sizing: border-box;
}

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

{{ EmbedLiveSample('Setting_column_end_for_a_grid_item', '230', '420') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related CSS properties: {{cssxref("grid-column-start")}}, {{cssxref("grid-column")}}, {{cssxref("grid-row-start")}}, {{cssxref("grid-row-end")}}, {{cssxref("grid-row")}}
- Grid Layout Guide: _[Line-based placement with CSS Grid](/en-US/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)_
- Video tutorial: _[Line-based placement](https://gridbyexample.com/video/series-line-based-placement/)_
