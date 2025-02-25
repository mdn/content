---
title: align-content
slug: Web/CSS/align-content
page-type: css-property
browser-compat: css.properties.align-content
---

{{CSSRef}}

The [CSS](/en-US/docs/Web/CSS) **`align-content`** property sets the distribution of space between and around content items along a [flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout)'s [cross axis](/en-US/docs/Glossary/Cross_Axis), or a [grid](/en-US/docs/Web/CSS/CSS_grid_layout) or [block-level](/en-US/docs/Glossary/Block-level_content) element's block axis.

The interactive example below uses grid layout to demonstrate some of the values of this property.

{{EmbedInteractiveExample("pages/css/align-content.html")}}

This property has no effect on single line flex containers (i.e. ones with `flex-wrap: nowrap`).

## Syntax

```css
/* Normal alignment */
align-content: normal;

/* Basic positional alignment */
/* align-content does not take left and right values */
align-content: start;
align-content: center;
align-content: end;
align-content: flex-start;
align-content: flex-end;

/* Baseline alignment */
align-content: baseline;
align-content: first baseline;
align-content: last baseline;

/* Distributed alignment */
align-content: space-between;
align-content: space-around;
align-content: space-evenly;
align-content: stretch;

/* Overflow alignment */
align-content: safe center;
align-content: unsafe center;

/* Global values */
align-content: inherit;
align-content: initial;
align-content: revert;
align-content: revert-layer;
align-content: unset;
```

### Values

- `normal`
  - : The items are packed in their default position as if no `align-content` value was set.
- `start`
  - : The items are packed flush to each other against the start edge of the alignment container in the cross axis.
- `center`
  - : The items are packed flush to each other in the center of the alignment container along the cross axis.
- `end`
  - : The items are packed flush to each other against the end edge of the alignment container in the cross axis.
- `flex-start`
  - : The items are packed flush to each other against the edge of the alignment container depending on the flex container's cross-start side.
    This only applies to flex layout items. For items that are not children of a flex container, this value is treated like `start`.
- `flex-end`
  - : The items are packed flush to each other against the edge of the alignment container depending on the flex container's cross-end side.
    This only applies to flex layout items. For items that are not children of a flex container, this value is treated like `end`.
- `baseline`, `first baseline`, `last baseline`

  - : Specifies participation in first- or last-baseline alignment: aligns the alignment baseline of the box's first or last baseline set with the corresponding baseline in the shared first or last baseline set of all the boxes in its baseline-sharing group.

    ![the baseline is the line upon which most letters "sit" and below which descenders extend.](410px-typography_line_terms.svg.png)

    The fallback alignment for `first baseline` is `start`, the one for `last baseline` is `end`.

- `space-between`
  - : The items are evenly distributed within the alignment container along the cross axis. The spacing between each pair of adjacent items is the same. The first item is flush with the start edge of the alignment container in the cross axis, and the last item is flush with the end edge of the alignment container in the cross axis.
- `space-around`
  - : The items are evenly distributed within the alignment container along the cross axis. The spacing between each pair of adjacent items is the same. The empty space before the first and after the last item equals half of the space between each pair of adjacent items.
- `space-evenly`
  - : The items are evenly distributed within the alignment container along the cross axis. The spacing between each pair of adjacent items, the start edge and the first item, and the end edge and the last item, are all exactly the same.
- `stretch`
  - : If the combined size of the items along the cross axis is less than the size of the alignment container, any `auto`-sized items have their size increased equally (not proportionally), while still respecting the constraints imposed by {{cssxref("max-height")}}/{{cssxref("max-width")}} (or equivalent functionality), so that the combined size exactly fills the alignment container along the cross axis.
- `safe`
  - : Used alongside an alignment keyword. If the chosen keyword means that the item overflows the alignment container causing data loss, the item is instead aligned as if the alignment mode were `start`.
- `unsafe`
  - : Used alongside an alignment keyword. Regardless of the relative sizes of the item and alignment container and whether overflow which causes data loss might happen, the given alignment value is honored.

> [!NOTE]
> The `<content-distribution>` values (`space-between`, `space-around`, `space-evenly`, and `stretch`) have no effect in [block layout](/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables#align-content_and_justify-content) as all the content in that block is treated as a single [alignment-subject](/en-US/docs/Glossary/Alignment_Subject)

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Effects of different align-content values

In this example, you can switch between three different {{cssxref("display")}} property values, including `flex`, `grid`, and `block`. You can also switch between the different values for `align-content`.

#### HTML

```html-nolint hidden
<div class="wrapper">
```

```html
<section>
  <div class="olive">Olive</div>
  <div class="coral">Coral</div>
  <div class="deepskyblue">Deep<br />sky<br />blue</div>
  <div class="orchid">Orchid</div>
  <div class="slateblue">Slateblue</div>
  <div class="maroon">Maroon</div>
</section>
```

```html-nolint hidden
<fieldset class="controls">
    <legend>Controls</legend>
    <div class="row">
      <label for="display">display: </label>
      <select id="display">
        <option value="block" selected>block</option>
        <option value="flex">flex</option>
        <option value="grid">grid</option>
      </select>
    </div>
    <div class="row">
      <label for="alignContent">align-content: </label>
      <select id="alignContent">
        <option value="normal" selected>normal</option>
        <option value="start">start</option>
        <option value="center">center</option>
        <option value="end">end</option>
        <option value="flex-start">flex-start</option>
        <option value="flex-end">flex-end</option>
        <option value="space-between">space-between</option>
        <option value="space-around">space-around</option>
        <option value="space-evenly">space-evenly</option>
      </select>
    </div>
    <p>CSS applied</p>
    <pre>
section {
  display: <span id="displayStyle">block</span>;
  align-content: <span id="align">normal</span>
}
    </pre>
  </fieldset>
</div>
```

#### CSS

```css hidden
.wrapper {
  font-size: 1.25rem;
  display: flex;
  gap: 1rem;
}
section div {
  font-family: monospace;
  padding: 3px;
}
```

```css
section {
  border: solid 1.5px tomato;
  height: 300px;
  width: 300px;
  flex-wrap: wrap; /* used by flex only */
  gap: 0.2rem; /* not used by block */
}
.olive {
  background-color: olive;
}
.coral {
  background-color: coral;
}
.deepskyblue {
  background-color: deepskyblue;
}
.orchid {
  background-color: orchid;
}
.slateblue {
  background-color: slateblue;
  color: white;
}
.maroon {
  background-color: maroon;
  color: white;
}
```

```js hidden
const alignContent = document.querySelector("#alignContent");
const display = document.querySelector("#display");
const container = document.querySelector("section");
const displayStyle = document.querySelector("#displayStyle");
const alignStyle = document.querySelector("#align");
document.addEventListener("load", () => {
  updatePage();
});
alignContent.addEventListener("change", () => {
  updatePage();
});
display.addEventListener("change", () => {
  updatePage();
});
function updatePage() {
  const alVal = alignContent.value;
  const dVal = display.value;
  container.style.alignContent = alVal;
  container.style.display = dVal;
  alignStyle.innerText = alVal;
  displayStyle.innerText = dVal;
}
```

#### Result

Try changing the `display` value and the `align-content` value.

{{EmbedLiveSample("Examples", 260, 310)}}

In [block layout](/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables#align-content_and_justify-content), child elements are treated as a single element, meaning `space-between`, `space-around`, and `space-evenly` behave differently.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Basic concepts of flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Aligning items in a flex container](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box alignment in grid layout](/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS box alignment](/en-US/docs/Web/CSS/CSS_box_alignment)
- [Block and inline layout in normal flow](/en-US/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow)
- [Block-level_content](/en-US/docs/Glossary/Block-level_content)
- {{CSSXRef("display")}}
