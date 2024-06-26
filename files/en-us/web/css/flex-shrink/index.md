---
title: flex-shrink
slug: Web/CSS/flex-shrink
page-type: css-property
browser-compat: css.properties.flex-shrink
---

{{CSSRef}}

The **`flex-shrink`** [CSS](/en-US/docs/Web/CSS) property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, [flex items can shrink](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis#the_flex-shrink_property) to fit according to their `flex-shrink` value, with each flex line's [negative free space](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis#positive_and_negative_free_space) being distributed between the line's flex items that have a `flex-shrink` value greater than `0`.

> ![Note]
> It is recommended to use the {{cssxref("flex")}} shorthand shorthand instead of separate `flex-shrink`, {{cssxref("flex-grow")}} and {{cssxref("flex-basis")}} declarations. We have separated them here as this document is about one of the `flaex` shorthand components: the `flex-shrink` property.

{{EmbedInteractiveExample("pages/css/flex-shrink.html")}}

## Syntax

```css
/* <number> values */
flex-shrink: 2;
flex-shrink: 0.6;

/* Global values */
flex-shrink: inherit;
flex-shrink: initial;
flex-shrink: revert;
flex-shrink: revert-layer;
flex-shrink: unset;
```

## Description

The `flex-shrink` property specifies the flex shrink factor, which determines how much the flex item will shrink relative to the rest of the flex items in the flex container when negative free space is distributed.

This property deals with situations where the browser calculates the flex-basis values of the flex items, and finds that they are too large to fit into the flex container. As long as flex-shrink has a positive value the items will shrink in order that they do not overflow the container.

The `flex-grow` deals with adding available space, and distributes available space proportional to each items flex grow factor, with the value of the `flex-grow` property the only consideration. The `flex-shrink` manages taking away space to make boxes fit into their container without overflowing, but the removal of space is a bit more complicated. The shrink factor is proportional based on how much an item is able to shrink. The flex shrink factor is multiplied by the flex base size when distributing negative space. This distributes negative space in proportion to how much the item is able to shrink. This prevents smaller items from shrinking to `0px` before a larger item is noticeably reduced.

Generally, `flex-shrink` is used alongside the {{cssxref("flex-grow")}} and {{cssxref("flex-basis")}}. It is recommended to use the {{cssxref("flex")}} shorthand shorthand instead of separate `flex-grow`, `flex-shrink`, and `flex-basis` declarations. Within the `flex` shorthand, the shrink factor is always the second `<number>`. If the shorthand doesn't include two number values, `flex

## Values

The `flex-shrink` property is specified as a single `<number>`.

- `<number>`
  - : See {{cssxref("&lt;number&gt;")}}. Negative values are invalid. Defaults to 1.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting flex item shrink factor

In this example, there are five flex items with a `flex-shrink` value greater than 0, that have combined width that is wider than their parent flex container, demonstrating how negative free space is distributed based on the item's shrink factor.

#### HTML

```html
<div id="content">
  <div class="box" style="background-color:red;">A</div>
  <div class="box" style="background-color:lightblue;">B</div>
  <div class="box" style="background-color:yellow;">C</div>
  <div class="box4" style="background-color:brown;">D</div>
  <div class="box5" style="background-color:lightgreen;">E</div>
</div>
```

#### CSS

We give each flex item a {{cssxref("width")}} of `200px`. As the {{cssxref("flex-basis")}} property defaults to `auto`, each item's flex basis is `200px`, for a total of `1000px`; twice the size of the container. We set all flex items to be shrinkable, with `flex-shrink` values greater than `0`. The last two items have a greater `flex-shrink` values set, so they will shrink more.

```css
#content {
  display: flex;
  width: 500px;
}

#content div {
  width: 200px;
  flex-shrink: 1;
}

.box4 {
  flex-shrink: 1.5;
}

.box5 {
  flex-shrink: 2;
}
```

```css hidden
div {
  font-family: monospace;
  outline: 1px solid;
  line-height: 4em;
  text-align: center;
}
```

#### Result

{{EmbedLiveSample('Setting_flex_item_shrink_factor', 500, 100)}}

The `1000px` worth of flex items don't overflow their `500px` container because the items were able to shrink, distributing the `500px` of negative free space among the five items based on . The first three items have `flex-shrink: 1` set. D has `flex-shrink: 1.5` and E has `flex-shrink: 2` set. The final width of D and E is less than the others, with E smaller than D.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Basic concepts of flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Controlling ratios of flex items along the main axis](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) module
