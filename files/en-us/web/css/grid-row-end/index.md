---
title: grid-row-end
slug: Web/CSS/grid-row-end
page-type: css-property
browser-compat: css.properties.grid-row-end
---

{{CSSRef}}

The **`grid-row-end`** CSS property specifies a grid item's end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-end edge of its {{glossary("grid areas", "grid area")}}.

{{EmbedInteractiveExample("pages/css/grid-row-end.html")}}

## Syntax

```css
/* Keyword value */
grid-row-end: auto;

/* <custom-ident> values */
grid-row-end: somegridarea;

/* <integer> + <custom-ident> values */
grid-row-end: 2;
grid-row-end: somegridarea 4;

/* span + <integer> + <custom-ident> values */
grid-row-end: span 3;
grid-row-end: span somegridarea;
grid-row-end: 5 somegridarea span;

/* Global values */
grid-row-end: inherit;
grid-row-end: initial;
grid-row-end: revert;
grid-row-end: revert-layer;
grid-row-end: unset;
```

### Values

- `auto`
  - : Is a keyword indicating that the property contributes nothing to the grid item's placement, indicating auto-placement, an automatic span, or a default span of `1`.
- `<custom-ident>`

  - : If there is a named line with the name '\<custom-ident>-end', it contributes the first such line to the grid item's placement.

    > **Note:** Named grid areas automatically generate implicit named lines of this form, so specifying `grid-row-end: foo;` will choose the end edge of that named grid area (unless another line named `foo-end` was explicitly specified before it).

    Otherwise, this is treated as if the integer `1` had been specified along with the `<custom-ident>`.

    The `<custom-ident>` cannot take the `span` value.

- `<integer> && <custom-ident>?`

  - : Contributes the nth grid line to the grid item's placement. If a negative integer is given, it instead counts in reverse, starting from the end edge of the explicit grid.

    If a name is given as a \<custom-ident>, only lines with that name are counted. If not enough lines with that name exist, all implicit grid lines are assumed to have that name for the purpose of finding this position.

    An {{cssxref("integer")}} value of `0` is invalid.

- `span && [ <integer> || <custom-ident> ]`

  - : Contributes a grid span to the grid item's placement such that the row end edge of the grid item's grid area is n lines from the start edge.

    If a name is given as a \<custom-ident>, only lines with that name are counted. If not enough lines with that name exist, all implicit grid lines on the side of the explicit grid corresponding to the search direction are assumed to have that name for the purpose of counting this span.

    If the \<integer> is omitted, it defaults to `1`. Negative integers or 0 are invalid.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting row end for a grid item

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

{{ EmbedLiveSample('Setting_row_end_for_a_grid_item', '230', '420') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related CSS properties: {{cssxref("grid-row-start")}}, {{cssxref("grid-row")}}, {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}, {{cssxref("grid-column")}}
- Grid Layout Guide: _[Line-based placement with CSS Grid](/en-US/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)_
- Video tutorial: _[Line-based placement](https://gridbyexample.com/video/series-line-based-placement/)_
