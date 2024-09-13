---
title: flex
slug: Web/CSS/flex
page-type: css-shorthand-property
browser-compat: css.properties.flex
---

{{CSSRef}}

The **`flex`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) sets how a {{glossary("flex item")}} will grow or shrink to fit the space available in its flex container.

{{EmbedInteractiveExample("pages/css/flex.html")}}

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-basis")}}

## Syntax

```css
/* Keyword value */
flex: none; /* 0 0 auto */

/* One value, unitless number: flex-grow
flex-basis is then equal to 0%. */
flex: 2; /* 2 1 0% */

/* One value, width/height: flex-basis */
flex: auto; /* 1 1 auto */
flex: 10em; /* 1 1 10em */
flex: 30%;
flex: min-content;

/* Two values: flex-grow | flex-basis */
flex: 1 30px; /* 1 1 30px */

/* Two values: flex-grow | flex-shrink */
flex: 2 2; /* 2 2 0% */

/* Three values: flex-grow | flex-shrink | flex-basis */
flex: 2 2 10%;

/* Global values */
flex: inherit;
flex: initial; /* 0 1 auto */
flex: revert;
flex: revert-layer;
flex: unset;
```

The `flex` property may be specified using one, two, or three values.

- **One-value syntax:** the value must be one of:

  - a valid value for {{cssxref("&lt;flex-grow&gt;")}}: then, in all the browsers, the shorthand expands to `flex: <flex-grow> 1 0%`. However the specification says it should expand to `flex: <flex-grow> 1 0`.
  - a valid value for {{cssxref("&lt;flex-basis&gt;")}}: then the shorthand expands to `flex: 1 1 <flex-basis>`.
  - the keyword `none` or one of the global keywords.

- **Two-value syntax:**

  - The first value must be a valid value for {{cssxref("flex-grow")}}.

  - The second value must be one of:

    - a valid value for {{cssxref("flex-shrink")}}: then, in all the browsers, the shorthand expands to `flex: <flex-grow> <flex-shrink> 0%`.
    - a valid value for {{cssxref("flex-basis")}}: then the shorthand expands to `flex: <flex-grow> 1 <flex-basis>`.

- **Three-value syntax:** the values must be in the following order:

  1. a valid value for {{cssxref("flex-grow")}}.
  2. a valid value for {{cssxref("flex-shrink")}}.
  3. a valid value for {{cssxref("flex-basis")}}.

### Values

- `<'flex-grow'>`
  - : Defines the {{cssxref("flex-grow")}} of the flex item. Negative values are considered invalid. Defaults to `1` when omitted. (initial is `0`)
- `<'flex-shrink'>`
  - : Defines the {{cssxref("flex-shrink")}} of the flex item. Negative values are considered invalid. Defaults to `1` when omitted. (initial is `1`)
- `<'flex-basis'>`
  - : Defines the {{cssxref("flex-basis")}} of the flex item. Defaults to `0%` when omitted. The initial value is `auto`.
- `none`
  - : The item is sized according to its `width` and `height` properties. It is fully inflexible: it neither shrinks nor grows in relation to the flex container. This is equivalent to setting `flex: 0 0 auto`.

Commonly desired flexbox effects can be achieved using the following `flex` values:

- `initial`: Flex item doesn't grow but can shrink. This default value expands to `flex: 0 1 auto`. The item is sized according to its `width` or `height` properties, depending on the `flex-direction`. If there is negative available space, the item will shrink to its minimum size to fit within the container but will not grow to absorb any positive space available in the flex container.
- `auto`: Flex item can grow and shrink. This value expands to `flex: 1 1 auto`. The item is sized according to its `width` or `height` properties, depending on the `flex-direction`, but grows to absorb available positive space in the flex container or shrink down to its minimum size to fit the container in the case of negative space. The flex item is fully flexible.
- `none`: The flex item neither grows nor shrinks. This value expands to `flex: 0 0 auto`. The item is sized according to its `width` or `height` properties, depending on the direction of the flex container. The flex item is fully inflexible.
- `flex: <number [1,∞]>`: The flex item's main size will be proportional to the number set. This value expands to `flex: <number> 1 0`. This sets the `flex-basis` to zero and makes the flex item flexible. The item will be at least as wide or tall as its minimum size, with the container's positive available space being proportionally distributed based on the growth factors of this item and its sibling flex items. If all the flex items use this pattern, all will be sized in proportion to their numeric values.

  > [!WARNING]
  > The browsers use `flex-basis` value `0%` when the `flex-basis` is not specified in a `flex` value. This is not the same as `flex-basis` value `0` which is what the specification says. This may affect flex layout in some cases. See this effect demonstrated in the [Flex-basis `0` versus `0%`](/en-US/docs/Web/CSS/flex-basis#flex_basis_0_vs_0) example.

## Description

For most purposes, authors should set `flex` to one of the following values: `auto`, `initial`, `none`, or a positive unitless number. To see the effect of these values, try resizing the flex containers below:

```html hidden
<div class="flex-container">
  <div class="item auto">auto</div>
  <div class="item auto">auto</div>
  <div class="item auto">auto</div>
</div>

<div class="flex-container">
  <div class="item auto">auto</div>
  <div class="item initial">initial</div>
  <div class="item initial">initial</div>
</div>

<div class="flex-container">
  <div class="item auto">auto</div>
  <div class="item auto">auto</div>
  <div class="item none">none</div>
</div>

<div class="flex-container">
  <div class="item initial">initial</div>
  <div class="item none">none</div>
  <div class="item none">none</div>
</div>

<div class="flex-container">
  <div class="item four">4</div>
  <div class="item two">2</div>
  <div class="item one">1</div>
</div>
```

```css hidden
* {
  box-sizing: border-box;
}

.flex-container {
  background-color: #f4f7f8;
  resize: horizontal;
  overflow: hidden;
  display: flex;
  margin: 1em;
}

.item {
  margin: 1em;
  padding: 0.5em;
  width: 110px;
  min-width: 0;
  background-color: #1b5385;
  color: white;
  font-family: monospace;
  font-size: 13px;
}

.initial {
  flex: initial;
}

.auto {
  flex: auto;
}

.none {
  flex: none;
}

.four {
  flex: 4;
}

.two {
  flex: 2;
}

.one {
  flex: 1;
}
```

{{EmbedLiveSample("Description", 1200, 400)}}

By default flex items don't shrink below their {{cssxref("min-content")}} size. To change this, set the item's {{cssxref("min-width")}} or {{cssxref("min-height")}}.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting flex: auto

This example shows how a flex item with `flex: auto` grows to absorb any free space in the container.

#### HTML

```html
<div id="flex-container">
  <div id="flex-auto">
    flex: auto (click to remove/add the `flex: initial` box)
  </div>
  <div id="default">flex: initial</div>
</div>
```

#### CSS

```css hidden
body * {
  padding: 1rem;
  text-select: none;
  box-sizing: border-box;
  font-family: Consolas, Arial, sans-serif;
}
```

```css
#flex-container {
  border: 2px dashed gray;
  display: flex;
}

#flex-auto {
  cursor: pointer;
  background-color: wheat;

  flex: auto;
}

#default {
  background-color: lightblue;
}
```

#### JavaScript

```js
const flexAutoItem = document.getElementById("flex-auto");
const defaultItem = document.getElementById("default");
flexAutoItem.addEventListener("click", () => {
  defaultItem.style.display =
    defaultItem.style.display === "none" ? "block" : "none";
});
```

#### Result

The flex container contains two flex items:

- The `#flex-auto` item has a `flex` value of [`auto`](#auto). The `auto` value expands to `1 1 auto`, i.e. the item is allowed to expand.
- The `#default` item has no `flex` value set so it defaults to the [`initial`](#initial) value. The `initial` value expands to `0 1 auto`, i.e. the item is not allowed to expand.

The `#default` item takes up as much space as its width requires, but does not expand to take up any more space. All the remaining space is taken up by the `#flex-auto` item.

When you click the `#flex-auto` item, we set the `#default` item's {{cssxref("display")}} property to `none`, removing it from the layout. The `#flex-auto` item then expands to occupy all the available space in the container. Clicking the `#flex-auto` item again adds the `#default` item back to the container.

{{EmbedLiveSample('Setting_flex_auto','100%','150')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Basic concepts of flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Controlling ratios of flex items along the main axis](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) module
