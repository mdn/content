---
title: justify-content
slug: Web/CSS/justify-content
page-type: css-property
browser-compat: css.properties.justify-content
---

{{CSSRef}}

The [CSS](/en-US/docs/Web/CSS) **`justify-content`** property defines how the browser distributes space between and around content items along the {{Glossary("Main Axis", "main-axis")}} of a flex container, and the inline axis of a grid container.

The interactive example below demonstrates some of the values using Grid Layout.

{{EmbedInteractiveExample("pages/css/justify-content.html")}}

The alignment is done after the lengths and auto margins are applied, meaning that, if in a [Flexbox layout](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout) there is at least one flexible element, with {{cssxref("flex-grow")}} different from `0`, it will have no effect as there won't be any available space.

## Syntax

```css
/* Positional alignment */
justify-content: center; /* Pack items around the center */
justify-content: start; /* Pack items from the start */
justify-content: end; /* Pack items from the end */
justify-content: flex-start; /* Pack flex items from the start */
justify-content: flex-end; /* Pack flex items from the end */
justify-content: left; /* Pack items from the left */
justify-content: right; /* Pack items from the right */

/* Baseline alignment */
/* justify-content does not take baseline values */

/* Normal alignment */
justify-content: normal;

/* Distributed alignment */
justify-content: space-between; /* Distribute items evenly
                                   The first item is flush with the start,
                                   the last is flush with the end */
justify-content: space-around; /* Distribute items evenly
                                   Start and end gaps are half the size of the space
                                   between each item */
justify-content: space-evenly; /* Distribute items evenly
                                   Start, in-between, and end gaps have equal sizes */
justify-content: stretch; /* Distribute items evenly
                                   Stretch 'auto'-sized items to fit
                                   the container */

/* Overflow alignment */
justify-content: safe center;
justify-content: unsafe center;

/* Global values */
justify-content: inherit;
justify-content: initial;
justify-content: revert;
justify-content: revert-layer;
justify-content: unset;
```

### Values

- `start`
  - : The items are packed flush to each other toward the start edge of the alignment container in the main axis.
- `end`
  - : The items are packed flush to each other toward the end edge of the alignment container in the main axis.
- `flex-start`
  - : The items are packed flush to each other toward the edge of the alignment container depending on the flex container's main-start side.
    This only applies to flex layout items. For items that are not children of a flex container, this value is treated like `start`.
- `flex-end`
  - : The items are packed flush to each other toward the edge of the alignment container depending on the flex container's main-end side.
    This only applies to flex layout items. For items that are not children of a flex container, this value is treated like `end`.
- `center`
  - : The items are packed flush to each other toward the center of the alignment container along the main axis.
- `left`
  - : The items are packed flush with each other toward the left edge of the alignment container. When the property's horizontal axis is not parallel with the inline axis, such as when [`flex-direction: column;`](/en-US/docs/Web/CSS/flex-direction) is set, this value behaves like `start`.
- `right`
  - : The items are packed flush to each other toward the right edge of the alignment container in the appropriate axis. If the property's axis is not parallel with the inline axis (in a grid container) or the main-axis (in a flexbox container), this value behaves like `start`.
- `normal`
  - : Behaves as `stretch`, except in the case of multi-column containers with a non-`auto` [`column-width`](/en-US/docs/Web/CSS/column-width), in which case the columns take their specified `column-width` rather than stretching to fill the container. As `stretch` behaves as `start` in flex containers, `normal` also behaves as `start`.
- `space-between`
  - : The items are evenly distributed within the alignment container along the main axis. The spacing between each pair of adjacent items is the same. The first item is flush with the main-start edge, and the last item is flush with the main-end edge.
- `space-around`
  - : The items are evenly distributed within the alignment container along the main axis. The spacing between each pair of adjacent items is the same. The empty space before the first and after the last item equals half of the space between each pair of adjacent items.
- `space-evenly`
  - : The items are evenly distributed within the alignment container along the main axis. The spacing between each pair of adjacent items, the main-start edge and the first item, and the main-end edge and the last item, are all exactly the same.
- `stretch`

  - : If the combined size of the items along the main axis is less than the size of the alignment container, any `auto`-sized items have their size increased equally (not proportionally), while still respecting the constraints imposed by {{cssxref("max-height")}}/{{cssxref("max-width")}} (or equivalent functionality), so that the combined size exactly fills the alignment container along the main axis.

    > **Note:** While `stretch` is supported by flexible boxes (flexbox), when applied on a flexbox, as stretching is controlled by {{CSSXref("flex")}}, `stretch` behaves as `start`.

- `safe`
  - : If the item overflows the alignment container, then the item is aligned as if the alignment mode is `start`. The desired alignment will not be implemented.
- `unsafe`
  - : Even if the item overflows the alignment container, the desired alignment will be implemented. Unlike `safe`, which will ignore the desired alignment in favor of preventing overflow.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting flex item distribution

#### CSS

```css
#container {
  display: flex;
  justify-content: space-between; /* Can be changed in the live sample */
}

#container > div {
  width: 100px;
  height: 100px;
  background: linear-gradient(-45deg, #788cff, #b4c8ff);
}
```

```html hidden
<div id="container">
  <div></div>
  <div></div>
  <div></div>
</div>
<select id="justifyContent">
  <option value="start">start</option>
  <option value="end">end</option>
  <option value="flex-start">flex-start</option>
  <option value="flex-end">flex-end</option>
  <option value="center">center</option>
  <option value="left">left</option>
  <option value="right">right</option>
  <option value="space-between" selected>space-between</option>
  <option value="space-around">space-around</option>
  <option value="space-evenly">space-evenly</option>
  <option value="stretch">stretch</option>
</select>
```

```js hidden
const justifyContent = document.getElementById("justifyContent");
justifyContent.addEventListener("change", (evt) => {
  document.getElementById("container").style.justifyContent = evt.target.value;
});
```

#### Result

{{EmbedLiveSample("Setting_flex_item_distribution", "100%", 180)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS Flexbox Guide: _[Aligning items in a flex container](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
- CSS Grid Guide: _[Box alignment in CSS Grid layouts](/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)_
- [CSS Box Alignment](/en-US/docs/Web/CSS/CSS_Box_Alignment)
