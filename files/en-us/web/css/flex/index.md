---
title: flex
slug: Web/CSS/flex
tags:
  - CSS
  - CSS Flexible Boxes
  - CSS Property
  - Reference
  - recipe:css-shorthand-property
browser-compat: css.properties.flex
---
{{CSSRef}}

The **`flex`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) sets how a flex _item_ will grow or shrink to fit the space available in its flex container.

{{EmbedInteractiveExample("pages/css/flex.html")}}

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-basis")}}

## Syntax

```css
/* Keyword values */
flex: auto;
flex: initial;
flex: none;

/* One value, unitless number: flex-grow
flex-basis is then equal to 0. */
flex: 2;

/* One value, width/height: flex-basis */
flex: 10em;
flex: 30%;
flex: min-content;

/* Two values: flex-grow | flex-basis */
flex: 1 30px;

/* Two values: flex-grow | flex-shrink */
flex: 2 2;

/* Three values: flex-grow | flex-shrink | flex-basis */
flex: 2 2 10%;

/* Global values */
flex: inherit;
flex: initial;
flex: revert;
flex: revert-layer;
flex: unset;
```

The `flex` property may be specified using one, two, or three values.

- **One-value syntax:** the value must be one of:

  - a `<number>`: In this case it is interpreted as `flex: <number> 1 0`; the {{cssxref("flex-shrink")}} value is assumed to be `1` and the {{cssxref("flex-basis")}} value is assumed to be `0`.
  - a `<width>`: In this case it is interpreted as `flex: 1 1 <width>`; the {{cssxref("flex-grow")}} value is assumed to be `1` and the {{cssxref("flex-shrink")}} value is assumed to be `1`.
  - one of the keywords: `none`, `auto`, or `initial`.

- **Two-value syntax:**

  - The first value must be:

    - a {{cssxref("&lt;number&gt;")}} and it is interpreted as `<flex-grow>`.

  - The second value must be one of:

    - a {{cssxref("&lt;number&gt;")}}: then it is interpreted as `<flex-shrink>`.
    - a valid value for {{cssxref("width")}}: then it is interpreted as `<flex-basis>`.

- **Three-value syntax:** the values must be in the following order:

  1. a {{cssxref("&lt;number&gt;")}} for `<flex-grow>`.
  2. a {{cssxref("&lt;number&gt;")}} for `<flex-shrink>`.
  3. a valid value for {{cssxref("width")}} for `<flex-basis>`.

### Values

- `initial`
  - : The item is sized according to its `width` and `height` properties. It shrinks to its minimum size to fit the container, but does not grow to absorb any extra free space in the flex container. This is equivalent to setting "`flex: 0 1 auto`".
- `auto`
  - : The item is sized according to its `width` and `height` properties, but grows to absorb any extra free space in the flex container, and shrinks to its minimum size to fit the container. This is equivalent to setting "`flex: 1 1 auto`".
- `none`
  - : The item is sized according to its `width` and `height` properties. It is fully inflexible: it neither shrinks nor grows in relation to the flex container. This is equivalent to setting "`flex: 0 0 auto`".
- `<'flex-grow'>`
  - : Defines the {{cssxref("flex-grow")}} of the flex item. Negative values are considered invalid. Defaults to `1` when omitted. (initial is `0`)
- `<'flex-shrink'>`
  - : Defines the {{cssxref("flex-shrink")}} of the flex item. Negative values are considered invalid. Defaults to `1` when omitted. (initial is `1`)
- `<'flex-basis'>`
  - : Defines the {{cssxref("flex-basis")}} of the flex item. A preferred size of `0` must have a unit to avoid being interpreted as a flexibility. Defaults to `0` when omitted. (initial is `auto`)

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
  background-color: #F4F7F8;
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
  background-color: #1B5385;
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

{{EmbedLiveSample("Description", 1200, 400, "", "", "example-outcome-frame")}}

By default flex items don't shrink below their minimum content size. To change this, set the item's {{cssxref("min-width")}} or {{cssxref("min-height")}}.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting flex: auto

#### HTML

```html
<div id="flex-container">
  <div class="flex-item" id="flex">Flex box (click to toggle raw box)</div>
  <div class="raw-item" id="raw">Raw box</div>
</div>
```

#### CSS

```css
#flex-container {
  display: flex;
  flex-direction: row;
}

#flex-container > .flex-item {
  flex: auto;
}

#flex-container > .raw-item {
  width: 5rem;
}
```

```js hidden
const flex = document.getElementById("flex");
const raw = document.getElementById("raw");
flex.addEventListener("click", () => {
  raw.style.display = raw.style.display === "none" ? "block" : "none";
});
```

```css hidden
#flex-container {
  width: 100%;
  font-family: Consolas, Arial, sans-serif;
}

#flex-container > div {
  border: 1px solid #f00;
  padding: 1rem;
}

#flex-container > .raw-item {
  border: 1px solid #000;
}
```

#### Result

{{EmbedLiveSample('Setting_flex_auto','100%','100')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS Flexbox Guide: _[Controlling Ratios of flex items along the main axis](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)_
