---
title: "`gap` CSS property"
short-title: gap
slug: Web/CSS/Reference/Properties/gap
page-type: css-shorthand-property
browser-compat: css.properties.gap
sidebar: cssref
---

The **`gap`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties) sets the gaps (also called {{glossary("gutters")}}) between rows and columns. This property applies to [multi-column](/en-US/docs/Web/CSS/Guides/Multicol_layout), [flex](/en-US/docs/Web/CSS/Guides/Flexible_box_layout), and [grid](/en-US/docs/Web/CSS/Guides/Grid_layout) containers.

{{InteractiveExample("CSS Demo: gap")}}

```css interactive-example-choice
gap: 0;
```

```css interactive-example-choice
gap: 10%;
```

```css interactive-example-choice
gap: 1em;
```

```css interactive-example-choice
gap: 10px 20px;
```

```css interactive-example-choice
gap: calc(20px + 10%);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
      <div>Four</div>
      <div>Five</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 200px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}

## Syntax

```css
/* Keyword value */
gap: normal;

/* One value */
gap: 20px;
gap: 1em;
gap: 3vmin;
gap: 0.5cm;
gap: 16%;
gap: 100%;
gap: calc(10% + 20px);

/* Two values */
gap: 20px 10px;
gap: 1em 0.5em;
gap: 3vmin 2vmax;
gap: 0.5cm 2mm;
gap: 16% 100%;
gap: 21px 82%;
gap: calc(20px + 10%) calc(10% - 5px);

/* Global values */
gap: inherit;
gap: initial;
gap: revert;
gap: revert-layer;
gap: unset;
```

### Values

- `normal`
  - A value of `1em` on multi-column containers and `0` in all other contexts.
- {{CSSxRef("&lt;length&gt;")}}
  - : The size of the gap as a non-negative {{CSSxRef("&lt;length&gt;")}} value.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : The size of the gap as a non-negative {{CSSxRef("&lt;percentage&gt;")}} value relative to the the [content box](/en-US/docs/Web/CSS/Guides/Box_model/Introduction#content_area) size of the container element in that dimension.

## Description

The `gap` property defines gaps between columns in [CSS multi-column layout](/en-US/docs/Web/CSS/Guides/Multicol_layout), between flex items and flex lines in [CSS flexible box layout](/en-US/docs/Web/CSS/Guides/Flexible_box_layout), and between rows and columns in [CSS grid layout](/en-US/docs/Web/CSS/Guides/Grid_layout).

This property is specified as a value for `<'row-gap'>`, followed optionally by a value for `<'column-gap'>`. While the default value is `normal` for both sub-properties, if only one value is declared, that value applies to both. Both `<'row-gap'>` and `<'column-gap'>` can each be specified as a `<length>`, a `<percentage>`, or the keyword `normal`.

Percentage gap values are always calculated against the [content box](/en-US/docs/Web/CSS/Guides/Box_model/Introduction#content_area) size of the container element. The behavior is well-defined and consistent across layout modes when the container size is definite.

The generated gaps create empty spaces that have the width or height of the gap's specified size, much like an empty item or track. The visible space between elements may differ from the provided `gap` value because margins, padding, and distributed alignment may increase the separation between elements beyond what is determined by `gap`.

Gaps may contain visible separators as gap decorations. If there are decorative rules between the columns, rows, or both, they will appear in the middle of their gap, but have no effect on the gaps' size. These decorative lines can be added to the otherwise "empty space" by using the {{cssxref("rule")}} shorthand.

### In grid layouts

In grid layout, the first value defines the gutter between rows, and the second defines the gutter between columns. If only one value is included, that value is used for both dimensions.

Percentage values are calculated against the [content box](/en-US/docs/Web/CSS/Guides/Box_model/Introduction#content_area) size of the container element. Cyclic percentage sizes resolve against zero for determining {{glossary("intrinsic size")}} contributions but resolve against the grid container's content box when laying out the contents. Two examples below demonstrate percentage gap values with [explicit container size](#percentage_gap_value_and_explicit_container_size) and [implicit container size](#percentage_gap_value_and_implicit_container_size) in the examples section.

The effect of positive `gap` values is as though the grid lines acquired thickness: the grid track between two grid lines is the space between the gutters that represent them. If a grid item spans multiple rows or columns, for the purpose of track sizing, the gutter is treated as an extra, empty, fixed-size track of the specified size, added to the dimension in the spanning direction. For example, if `gap: 10px` is set on a 3x3 grid of 100px by 100px boxes, if a grid item spans two vertical columns, it's width would be `210px`. If it spans all three, it has a width of `320px`.

Note: Additional spacing may be added between tracks due to justify-content/align-content. See § 12.1 Grid Sizing Algorithm. This space effectively increases the size of the gutters.

Gutters only appear between tracks of the implicit grid. If a grid is fragmented between tracks, the gutter spacing between those tracks must is suppressed, even after forced breaks, which differs from margins. There is no gutter before the first track or after the last track, and if a track is collapsed, it will have no gutter.

Early versions of the CSS grid specification called this property `grid-gap`. To maintain compatibility with legacy websites, browsers accept `grid-gap` as an alias for `gap`.

### In flexbox

With flex containers, whether the first value is the gap between flex items or between flex lines depends on the direction. Flex items are laid out in either rows or columns depending on the value of the {{cssxref("flex-direction")}} property. For rows (`row` (the default) or `row-reverse`), the first value defines the gap between flex lines, and the second value defines the gap between items within each line. If only one value is included, that value is used for both dimensions.

For columns (`column` or `column-reverse`), the first value defines the gap between flex items within a flex line, and the second value defines the gaps between each flex line. Again, if only one value is included, that value is used for both dimensions.

### In multi column layouts

In multi-column containers, the first value defines the gap between columns.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Flex layout

#### HTML

```html
<div id="flexbox">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css
#flexbox {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  gap: 20px 5px;
}

#flexbox > div {
  border: 1px solid green;
  background-color: lime;
  flex: 1 1 auto;
  width: 100px;
  height: 50px;
}
```

#### Result

{{EmbedLiveSample("Flex_layout", "auto", 250)}}

### Grid layout

#### HTML

```html
<div id="grid">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css
#grid {
  display: grid;
  height: 200px;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 20px 5px;
}

#grid > div {
  border: 1px solid green;
  background-color: lime;
}
```

#### Result

{{EmbedLiveSample("Grid_layout", "auto", 250)}}

### Multi-column layout

#### HTML

```html
<p class="content-box">
  This is some multi-column text with a 40px column gap created with the CSS
  <code>gap</code> property. Don't you think that's fun and exciting? I sure do!
</p>
```

#### CSS

```css
.content-box {
  column-count: 3;
  gap: 40px;
}
```

#### Result

{{EmbedLiveSample("Multi-column_layout", "auto", "120px")}}

### Percentage gap value and explicit container size

If the container has a fixed size set, then gap percentage value calculations are based on the size of the container. Thus, gap behavior is consistent across all layouts. In the following example, there are two containers, one with a grid layout and the other with a flex layout. The containers have five red 20x20px children. Both containers are explicitly set to 200px high using `height: 200px` and the gap is set with `gap: 12.5% 0`.

```html
<span>Grid</span>
<div id="grid">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
<span>Flex</span>
<div id="flex">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
```

```css hidden
body > div {
  background-color: #cccccc;
  width: 200px;
  flex-flow: column;
}
```

```css
#grid {
  display: inline-grid;
  height: 200px;
  gap: 12.5% 0;
}

#flex {
  display: inline-flex;
  height: 200px;
  gap: 12.5% 0;
}

#grid > div,
#flex > div {
  background-color: coral;
  width: 20px;
  height: 20px;
}
```

{{EmbedLiveSample("Explicit container size", "auto", "200px")}}

Now inspect the grid and flex elements using [Inspector tab in Web Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html). In order to see the actual gaps hover mouse over `<div id="grid">` and `<div id="flex">` tags in the inspector. You will notice that the gap is the same in both cases which is 25px.

### Percentage gap value and implicit container size

If size is not explicitly set on the container, then the percentage gap behaves differently in case of grid and flex layouts. In the following example the containers don't have height explicitly set.

```html hidden
<span>Grid</span>
<div id="grid">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
<span>Flex</span>
<div id="flex">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
```

```css hidden
body > div {
  background-color: #cccccc;
  width: 200px;
}

#grid {
  display: inline-grid;
  gap: 12.5% 0;
}

#flex {
  display: inline-flex;
  gap: 12.5% 0;
  flex-flow: column;
}

#grid > div,
#flex > div {
  background-color: coral;
  width: 20px;
  height: 20px;
}
```

{{EmbedLiveSample("Implicit container size", "auto", "200px")}}

In case of the grid layout, percentage gap doesn't contribute to the actual height of the grid. The container's height is calculated using `0px` gap, so the actual height turns out to be 100px (20px x 5). Then the actual percentage gap is calculated using the content box's height, the gap turns out to be `12.5px` (100px x 12.5%). The gap is applied just before rendering. Thus the grid remains 100px high but it overflows due to the percentage gap added later just before rendering.

In case of the flex layout, the percentage gap always results in zero value.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("row-gap")}}
- {{CSSxRef("column-gap")}}
- [Basic concepts of grid layout: gutters](/en-US/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#gutters)
- [CSS box alignment](/en-US/docs/Web/CSS/Guides/Box_alignment) module
- [CSS flexible box layout](/en-US/docs/Web/CSS/Guides/Flexible_box_layout) module
- [CSS grid layout](/en-US/docs/Web/CSS/Guides/Grid_layout) module
- [CSS multi-column layout](/en-US/docs/Web/CSS/Guides/Multicol_layout) module
