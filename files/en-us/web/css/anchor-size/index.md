---
title: anchor-size()
slug: Web/CSS/anchor-size
page-type: css-function
browser-compat: css.types.anchor-size
---

{{CSSRef}}

The **`anchor-size()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) can be used as a value for an **anchor-positioned** element's [sizing properties](#properties_that_accept_anchor-size_function_values), to size it relative to the dimensions of its associated **anchor element**.

For detailed information on anchor features and usage, see the [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module landing page and the [Using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using) guide.

## Syntax

```css
/* property: anchor-size(anchor-size) */
width: anchor-size(width);
block-size: anchor-size(block);

/* property: anchor-size(anchor-element anchor-size) */
width: anchor-size(--myAnchor width);
block-size: anchor-size(--myAnchor block);

/* property: anchor-size(anchor-element anchor-size, length-percentage) */
width: anchor-size(--myAnchor width, 50%);
block-size: anchor-size(--myAnchor block, 200px);
```

### Parameters

The `anchor-size()` function's syntax is as follows:

```text
anchor-size(anchor-element anchor-size, length-percentage)
```

The parameters are:

- `anchor-element` {{optional_inline}}
  - : The {{cssxref("anchor-name")}} set on the anchor element you want to size an element relative to. If omitted, the positioned element is sized relative to the anchor referenced by its {{cssxref("position-anchor")}} property, or its implicit anchor if it has one.
- `anchor-size`

  - : Specifies the dimension of the anchor element that the positioned element will be sized relative to. Valid values include:
    - `width`
      - : The width of the anchor element.
    - `height`
      - : The height of the anchor element.
    - `block`
      - : The length of the anchor element's [containing block](/en-US/docs/Web/CSS/Containing_block) in the block direction.
    - `inline`
      - : The length of the anchor element's containing block in the inline direction.
    - `self-block`
      - : The length of the anchor element in the block direction.
    - `self-inline`
      -: The length of the anchor element in the inline direction.

- {{cssxref("length-percentage")}} {{optional_inline}}
  - : Specifies a fallback value the function should resolve to if the `anchor-size()` function would otherwise be invalid.

> **Note:** The anchor size you size the positioned element relative to does not have to be along the same axis as the sizing value being set. For example, `width: anchor-size(height)` is valid.

### Return value

Returns a {{cssxref("length")}} value.

## Description

The `anchor()` function enables a positioned element's sizing values to be expressed in terms of an anchor element's dimensions. It is a valid value for each of the sizing properties. When used, the function sets the size relative to the anchor element by defining the anchor element and the dimension of the anchor element the positioned element is being sized relative to.

If the positioned element does not have an anchor associated with it (i.e. via the {{cssxref("position-anchor")}} property) and it has sizing properties with `anchor-size()` values set on it, the fallback value is used if one is available. If no fallback is available, the sizing properties have no effect.

For example, if `width: anchor-size(width, 50px);` were specified on the positioned element but no anchor was associated with it, the fallback value would be used, so `width` would get a computed value of `50px`.

For detailed information on anchor features and usage, see the [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module landing page and the [Using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using) guide.

### Properties that accept `anchor-size()` function values

The sizing properties that accept an `anchor-size()` function as a value include:

- {{cssxref("width")}}
- {{cssxref("height")}}
- {{cssxref("min-width")}}
- {{cssxref("min-height")}}
- {{cssxref("max-width")}}
- {{cssxref("max-height")}}
- {{cssxref("block-size")}}
- {{cssxref("inline-size")}}
- {{cssxref("min-block-size")}}
- {{cssxref("min-inline-size")}}
- {{cssxref("max-block-size")}}
- {{cssxref("max-inline-size")}}

### Using `anchor-size()` inside `calc()`

The most common `anchor-size()` functions you'll use will just refer to a dimension of the default anchor. Alternative, include the `anchor-size()` function inside a {{cssxref("calc")}} functions to modify the size applied to the positioned element.

```css
.positionedElem {
  /* Size the positioned element's width
     equal to the anchor element's width  */
  width: anchor-size(width);
}
```

```css
.positionedElem {
  /* Size the positioned element's inline size
     equal to 4 times the anchor element's inline size  */
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

### Formal syntax

{{csssyntax}}

## Examples

### Basic `anchor-size()` usage

This example shows two elements positioned relative to an anchor, which are sized using `anchor-size()` functions.

#### HTML

We specify three {{htmlelement("div")}} elements, one `anchor` element and the two `infobox` elements we'll position relative to the anchor. We also add filler text to make the {{htmlelement("body")}} tall enough to require scrolling.

```html
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>

<div class="anchor">⚓︎</div>

<div class="infobox" id="infobox1">
  <p>This is the first infobox.</p>
</div>

<div class="infobox" id="infobox2">
  <p>This is the second infobox.</p>
</div>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>
```

#### CSS

We first declare the `anchor` `<div>` as an anchor element by giving it an anchor name using the {{cssxref("anchor-name")}} property:

```css hidden
.anchor {
  font-size: 2rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

body {
  width: 80%;
  margin: 0 auto;
}
```

```css
.anchor {
  anchor-name: --myAnchor;
}
```

The positioned elements are then associated with the anchor element by setting its anchor name as the value of the positioned elements' `position-anchor` properties. We also set the positioned elements' {{cssxref("position")}} properties to `fixed`, so they can be positioned relative to the anchor's position on the page.

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
  text-align: center;
}
```

```css
.infobox {
  position-anchor: --myAnchor;
  position: fixed;
}
```

Finally, we set some distinct property values on the positioned elements:

- Different {{cssxref("inset-area")}} values position the elements in different places around the anchor element.
- The {{cssxref("width")}} of the first infobox is set to double the anchor element's width. `anchor-size(width)` retrieves the anchor element width, and this is multiplied by two inside a {{cssxref("calc()")}} function. The {{cssxref("height")}} of the second infobox is set to two-thirds of the anchor element's height, using a similar technique.
- Appropriate margin values are set on the positioned elements to give them some separation from the anchor element.

```css
#infobox1 {
  inset-area: right;
  width: calc(anchor-size(width) * 2);
  margin-left: 5px;
}

#infobox2 {
  inset-area: top span-left;
  height: calc(anchor-size(height) / 1.5);
  margin-bottom: 5px;
}
```

#### Result

The result is as follows.

{{EmbedLiveSample("Basic `anchor-size()` usage", "100%", "240")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning)
- [Using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using)
