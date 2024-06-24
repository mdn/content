---
title: grid-area
slug: Web/CSS/grid-area
page-type: css-shorthand-property
browser-compat: css.properties.grid-area
---

{{CSSRef}}

The **`grid-area`** CSS [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) specifies a grid item's size and location within a {{glossary("grid", "grid")}} by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its {{glossary("grid areas", "grid area")}}.

{{EmbedInteractiveExample("pages/css/grid-area.html")}}

If four `<grid-line>` values are specified, `grid-row-start` is set to the first value, `grid-column-start` is set to the second value, `grid-row-end` is set to the third value, and `grid-column-end` is set to the fourth value.

When `grid-column-end` is omitted, if `grid-column-start` is a {{cssxref("&lt;custom-ident&gt;")}}, `grid-column-end` is set to that `<custom-ident>`; otherwise, it is set to `auto`.

When `grid-row-end` is omitted, if `grid-row-start` is a `<custom-ident>`, `grid-row-end` is set to that `<custom-ident>`; otherwise, it is set to `auto`.

When `grid-column-start` is omitted, if `grid-row-start` is a `<custom-ident>`, all four longhands are set to that value. Otherwise, it is set to `auto`.

The grid-area property can also be set to a {{cssxref("&lt;custom-ident&gt;")}} which acts as a name for the area, which can then be placed using {{cssxref("grid-template-areas")}}.

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`grid-row-start`](/en-US/docs/Web/CSS/grid-row-start)
- [`grid-column-start`](/en-US/docs/Web/CSS/grid-column-start)
- [`grid-row-end`](/en-US/docs/Web/CSS/grid-row-end)
- [`grid-column-end`](/en-US/docs/Web/CSS/grid-column-end)

## Syntax

```css
/* Keyword values */
grid-area: auto;
grid-area: auto / auto;
grid-area: auto / auto / auto;
grid-area: auto / auto / auto / auto;

/* <custom-ident> values */
grid-area: some-grid-area;
grid-area: some-grid-area / another-grid-area;

/* <integer> && <custom-ident>? values */
grid-area: 4 some-grid-area;
grid-area: 4 some-grid-area / 2 another-grid-area;

/* span && [ <integer> || <custom-ident> ] values */
grid-area: span 3;
grid-area: span 3 / span some-grid-area;
grid-area: 2 span / another-grid-area span;

/* Global values */
grid-area: inherit;
grid-area: initial;
grid-area: revert;
grid-area: revert-layer;
grid-area: unset;
```

### Values

- `auto`
  - : Is a keyword indicating that the property contributes nothing to the grid item's placement, indicating auto-placement or a default span of `1`.
- `<custom-ident>`

  - : If there is a named line with the name '`<custom-ident>-start`'/'`<custom-ident>-end`', it contributes the first such line to the grid item's placement.

    > **Note:** Named grid areas automatically generate implicit named lines of this form, so specifying `grid-area: foo;` will choose the start/end edge of that named grid area (unless another line named `foo-start`/`foo-end` was explicitly specified before it).

    Otherwise, this is treated as if the integer `1` had been specified along with the `<custom-ident>`.

- `<integer> && <custom-ident>?`

  - : Contributes the n-th grid line to the grid item's placement. If a negative integer is given, it instead counts in reverse, starting from the end edge of the explicit grid.

    If a name is given as a {{cssxref("&lt;custom-ident&gt;")}}, only lines with that name are counted. If not enough lines with that name exist, all implicit grid lines are assumed to have that name for the purpose of finding this position.

    An {{cssxref("&lt;integer&gt;")}} value of `0` is invalid.

- `span && [ <integer> || <custom-ident> ]`

  - : Contributes a grid span to the grid item's placement such that the corresponding edge of the grid item's grid area is _n_ lines from the opposite edge.

    If a name is given as a {{cssxref("&lt;custom-ident&gt;")}}, only lines with that name are counted. If not enough lines with that name exist, all implicit grid lines on the side of the explicit grid corresponding to the search direction are assumed to have that name for the purpose of counting this span.

    If the {{cssxref("&lt;integer&gt;")}} is omitted, it defaults to `1`. Negative integers or 0 are invalid.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting grid areas

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
  grid-template: repeat(4, 1fr) / 50px 100px;
}

#item1 {
  background-color: lime;
  grid-area: 2 / 2 / auto / span 3;
}

#item2 {
  background-color: yellow;
}

#item3 {
  background-color: blue;
}
```

#### Result

{{EmbedLiveSample("Setting_grid_areas", "100%", "150px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("grid-row")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}
- {{cssxref("grid-column")}}
- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-template-areas")}}
- [Grid template areas](/en-US/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- Video: [Grid template areas](https://gridbyexample.com/video/grid-template-areas/)
