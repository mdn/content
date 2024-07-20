---
title: anchor-size()
slug: Web/CSS/anchor-size
page-type: css-function
browser-compat: css.types.anchor-size
---

{{CSSRef}}

The **`anchor-size()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) enables [sizing anchor-positioned elements](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using#sizing_elements_based_on_anchor_size) relative to the dimensions of anchor elements. It returns the `<length>` of a specified side of the target anchor element. `anchor()` is only valid when used within the value of anchor-positioned elements' [sizing properties](#properties_that_accept_anchor-size_function_values).

For detailed information on anchor features and usage, see the [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module landing page and the [Using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using) guide.

## Syntax

```css
/* size of anchor side */
width: anchor-size(width);
block-size: anchor-size(block);
height: calc(anchor-size(self-inline) + 2em);

/* size of named anchor side */
width: anchor-size(--myAnchor width);
block-size: anchor-size(--myAnchor block);

/* size of named anchor side with fallback */
width: anchor-size(--myAnchor width, 50%);
block-size: anchor-size(--myAnchor block, 200px);
```

### Parameters

The `anchor-size()` function's syntax is as follows:

```text
anchor-size(<anchor-element> <anchor-size>, <length-percentage>)
```

The parameters are:

- `<anchor-element>` {{optional_inline}}

  - : The [`anchor-name`](/en-US/docs/Web/CSS/anchor-name) property value of an anchor element you want to size the element relative to. This is a `<dashed-ident>` value. If omitted, the element's default anchor is used.

    > **Note:** Specifying an `<anchor-element>` inside an `anchor-size()` function neither associates nor tethers an element to an anchor; it only sizes the element relative to that anchor.

- `<anchor-size>`

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
      - : The length of the anchor element in the inline direction.

    > **Note:** If this parameter is omitted, the dimension defaults to the `<anchor-size>` keyterm that matches the axis of the property in which the function is included. For example, `width: anchor-size();` is equivalent to `width: anchor-size(width);`.

- {{cssxref("length-percentage")}} {{optional_inline}}

  - : Specifies the size to use as a fallback value if the element is not absolutely or fixed positioned, or the anchor element doesn't exist. If this parameter is omitted in a case when the fallback would otherwise be used, the declaration is invalid.

> **Note:** The anchor dimension you size the positioned element relative to does not have to be along the same axis as the sizing value being set. For example, `width: anchor-size(height)` is valid.

### Return value

Returns a {{cssxref("length")}} value.

## Description

The `anchor()` function enables a positioned element's sizing values to be expressed in terms of an anchor element's dimensions; it defines the dimension of a specific anchor element the positioned element is being sized relative to. It is a valid value for [sizing properties](#properties_that_accept_anchor-size_function_values) set on anchor-positioned elements. When used, the function returns the {{cssxref("length")}} dimension of an anchor element, with both the anchor element and the dimension being optional parameters.

The length returned is the vertical or horizontal size of an anchor element or its containing block. The dimension used is defined by the `<anchor-size>` parameter. If that parameter is omitted, the dimension used will match the axis of the sizing property is it set on.

The anchor element used as the basis for the dimension length is the element with the `anchor-name` specified in the `<anchor-name>` parameter. If more than one element has the same anchor name, the last element with that anchor name in the DOM order is used.

If no `<anchor-name>` parameter is included in the function call, the element's **default anchor**, referenced in its [`position-anchor`](/en-US/docs/Web/CSS/position-anchor) property, or associated with the element via the [`anchor`](/en-US/docs/Web/HTML/Global_attributes/anchor) HTML attribute, is used.

If an `<anchor-name>` parameter is included and there are no elements matching that anchor name, the fallback value is used. If no fallback was included, the declaration is ignored. For example, if `width: anchor-size(--foo width, 50px); height: anchor-size(--foo width);` were specified on the positioned element but no anchor named `--foo` exists in the DOM, the `width` would be `50px` and the `height` declaration would have no effect.

If an element has sizing properties with `anchor-size()` values set on them, but it is not an anchor-positioned element (it does not have its {{cssxref("position")}} property set to `absolute` or `fixed` or does not have an anchor associated with it via its `position-anchor` property), the fallback value will be used if one is available. If no fallback is available, the declaration is ignored.

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

For example, this rule sizes the positioned element's width equal to the default anchor element's width:

```css
.positionedElem {
  width: anchor-size(width);
}
```

This rule sizes the positioned element's inline size to 4 times the anchor element's inline size, with the multiplication being done inside a {{cssxref("calc()")}} function:

```css
.positionedElem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

### Formal syntax

{{csssyntax}}

## Examples

### Basic `anchor-size()` usage

This example shows two elements positioned relative to an anchor and sized using `anchor-size()` functions.

#### HTML

We specify three {{htmlelement("div")}} elements, one `anchor` element and the two `infobox` elements we'll position relative to the anchor. We also include filler text to make the {{htmlelement("body")}} tall enough to require scrolling, but this has been hidden for the sake of brevity.

```html hidden
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>
```

```html
<div class="anchor">⚓︎</div>

<div class="infobox" id="infobox1">
  <p>This is the first infobox.</p>
</div>

<div class="infobox" id="infobox2">
  <p>This is the second infobox.</p>
</div>
```

```html hidden
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

We declare the `anchor` `<div>` as an anchor element by giving it an {{cssxref("anchor-name")}}. The positioned elements, with their {{cssxref("position")}} properties set to `fixed`, are associated with the anchor element via their {{cssxref("position-anchor")}} properties. We also set absolute {{cssxref("height")}} and {{cssxref("width")}} dimensions on the anchor to provide a reference point when checking the positioned element dimensions, for example, with browser developer tools:

```css hidden
.anchor {
  font-size: 2rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  text-align: center;
  align-content: center;
  outline: 1px solid black;
}

body {
  width: 80%;
  margin: 0 auto;
}

.infobox {
  align-content: center;
  color: darkblue;
  background-color: azure;
  outline: 1px solid #ddd;
  font-size: 1rem;
  text-align: center;
}
```

```css
.anchor {
  anchor-name: --myAnchor;
  width: 100px;
  height: 100px;
}

.infobox {
  position-anchor: --myAnchor;
  position: fixed;
}
```

We set some distinct property values on the positioned elements:

- The positioned elements are tethered to the anchor with different {{cssxref("inset-area")}} values that position the elements in different places around the anchor element.
- The {{cssxref("height")}} of the first infobox is set to the same height as the anchor element: `anchor-size(height)` returns the anchor element's height. The element's {{cssxref("width")}} is set to double the anchor element's width using the `anchor-size()` function within a {{cssxref("calc()")}} function: `anchor-size(width)` retrieves the anchor element's width, which is then multiplied by two.
- The {{cssxref("height")}} of the second infobox is set to two-thirds of the anchor element's height, using a similar technique.
- Margin values are included to provide some separation from the anchor element.

```css
#infobox1 {
  inset-area: right;
  height: anchor-size(height);
  width: calc(anchor-size(width) * 2);
  margin-left: 5px;
}

#infobox2 {
  inset-area: top span-right;
  height: calc(anchor-size(height) / 1.5);
  margin-bottom: 5px;
}
```

#### Result

{{EmbedLiveSample("Basic `anchor-size()` usage", "100%", "240")}}

Use your browser tools to inspect the anchor-positioned elements. The first infobox will be `100px` tall and `200px` wide, while the second infobox will have a height of approximately `66.7px`, with the `width` defaulting to {{cssxref("max-content")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- {{cssxref("anchor()")}} function
- [Using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using) guide
- [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module
