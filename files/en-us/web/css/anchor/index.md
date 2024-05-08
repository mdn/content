---
title: anchor()
slug: Web/CSS/anchor
page-type: css-function
browser-compat: css.types.anchor
---

{{CSSRef}}

The **`anchor()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) can be used as a value for an **anchor-positioned** element's [inset properties](#properties_that_accept_anchor_function_values), to position it relative to the edges of its associated **anchor element**.

For detailed information on anchor usage, see the [CSS Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module landing page.

## Syntax

```css
/* property: anchor(anchor-side) */
top: anchor(bottom);
inset-block-end: anchor(start);

/* property: anchor(anchor-element anchor-side) */
top: anchor(--my-anchor bottom);
inset-block-end: anchor(--my-anchor start);

/* property: anchor(anchor-element anchor-side, length-percentage) */
top: anchor(--my-anchor bottom, 50%);
inset-block-end: anchor(--my-anchor start, 200px);
```

### Parameters

The `anchor()` function's syntax is as follows:

```text
anchor(anchor-element anchor-side, length-percentage)
```

The parameters are:

- `anchor-element` {{optional_inline}}
  - : The {{cssxref("anchor-name")}} set on the anchor element you want to position an element relative to. This is optional — if omitted, the positioned element is positioned relative to the anchor referenced by its {{cssxref("position-anchor")}} property (this is sometimes referred to as the element's **default anchor**).
- `anchor-side`

  - : Specifies the side of the anchor element that the side of the positioned element denoted by the inset property will be positioned relative to. This can be expressed using the following values:

    - Physical values:
      - `top`: The top of the anchor element.
      - `right`: The right of the anchor element.
      - `bottom`: The bottom of the anchor element.
      - `left`: The left of the anchor element
    - Logical values:
      - `start`: The logical start of the anchor element's block axis.
      - `end`: The logical end of the anchor element's block axis.
      - `self-start`: The logical start of the anchor element's inline axis.
      - `self-end`: The logical end of the anchor element's inline axis.
    - {{cssxref("percentage")}}: The percentage between the anchor element's start and end along the same axis denoted by the specified inset property. For example, `top: anchor(70%)` will result in the positioned element's top side being lined up horizontally with a line inside the anchor element 70% towards its bottom edge. `top: anchor(0%)` is equivalent to `top: anchor(top)` or `top: anchor(start)`, while `top: anchor(100%)` is equivalent to `top: anchor(bottom)` or `top: anchor(end)`.
    - `center`: The center of the anchor element along the same axis denoted by the specified inset property. For example, `top: anchor(center)` will result in the positioned element's top side being lined up horizontally with the center of the anchor. `top: anchor(center)` is equivalent to `top: anchor(50%)`.

      The specification also defines `inside` and `outside` values, which are currently not supported by any browser.

- {{cssxref("length-percentage")}} {{optional_inline}}
  - : This is a fallback value that specifies what the function should return if the `anchor()` function is invalid.

> **Note:** The anchor side you position the positioned element relative to has to be along the same axis as the inset value being set. For example, `top: anchor(left)` doesn't make sense and won't work.

### Return value

Returns a {{cssxref("length")}} value.

## Description

The `anchor()` function enables a positioned element's inset values to be expressed in terms of the position of an anchor element's sides.

### Properties that accept `anchor()` function values

The properties that can take an `anchor()` function as a value are as follows:

- Physical inset properties: {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("bottom")}}, and {{cssxref("right")}}.
- Logical inset properties: {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, and {{cssxref("inset-inline-end")}}.
- Shorthand inset properties: {{cssxref("inset-block")}}, {{cssxref("inset-inline")}}, and {{cssxref("inset")}}.

### Using `anchor()` inside `calc()`

The most common `anchor()` functions you'll use will just refer to a side of the default anchor; you could then add some {{cssxref("margin")}} to create some spacing between the edges of the anchor and positioned element as required. You could also use `anchor()` functions inside {{cssxref("calc")}} functions to add the spacing. For example:

```css
.elem {
  /* Position the right edge of the positioned element
     flush to the anchor element's left edge then add
     margin to make some space between the adges  */
  right: anchor(left);
  margin-left: 10px;
}

.elem {
  /* Position the positioned element's logical block end edge
     10px from the anchor element's logical block start edge  */
  inset-block-end: calc(anchor(start) + 10px);
}
```

### Formal syntax

{{csssyntax}}

## Examples

### Comparison of different anchor-side values

This example shows an element positioned relative to an anchor via its {{cssxref("top")}} and {{cssxref("left")}} properties, which are given `anchor()` function values. It also includes two drop-down menus that allow you to vary the `anchor-side` values inside those `anchor()` functions, so you can see what effect they have.

#### HTML

In the HTML, we specify two {{htmlelement("div")}} elements, one with a class of `anchor` and one with a class of `infobox`. These are intended to be the anchor element and the positioned element we will associate with it, respectively.

We also include some filler text around the two `<div>`s to make the {{htmlelement("body")}} taller so that it will scroll. As mentioned earlier, the demo also includes two drop-down {{htmlelement("select")}} menus to allow you to choose different `anchor-size` values to position the positioned element with.

```html
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>

<form>
  <div>
    <label for="top-anchor-side"
      >Choose a vertical <code>anchor()</code> value:</label
    >
    <select id="top-anchor-side" name="top-anchor-side">
      <option value="top">top: anchor(top)</option>
      <option value="bottom" selected>top: anchor(bottom)</option>
      <option value="start">top: anchor(start)</option>
      <option value="end">top: anchor(end)</option>
      <option value="center">top: anchor(center)</option>
      <option value="0%">top: anchor(0%)</option>
      <option value="25%">top: anchor(25%)</option>
      <option value="50%">top: anchor(50%)</option>
      <option value="75%">top: anchor(75%)</option>
      <option value="100%">top: anchor(100%)</option>
    </select>
  </div>
  <div>
    <label for="left-anchor-side"
      >Choose a horizontal <code>anchor()</code> value:</label
    >
    <select id="left-anchor-side" name="left-anchor-side">
      <option value="left">left: anchor(left)</option>
      <option value="right" selected>left: anchor(right)</option>
      <option value="self-start">left: anchor(self-start)</option>
      <option value="self-end">left: anchor(self-end)</option>
      <option value="center">left: anchor(center)</option>
      <option value="0%">left: anchor(0%)</option>
      <option value="25%">left: anchor(25%)</option>
      <option value="50%">left: anchor(50%)</option>
      <option value="75%">left: anchor(75%)</option>
      <option value="100%">left: anchor(100%)</option>
    </select>
  </div>
</form>
```

#### CSS

In the CSS, we first declare the `anchor` `<div>` as an anchor element by setting an anchor name on it via the {{cssxref("anchor-name")}} property:

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

form {
  background: white;
  border: 1px solid black;
  padding: 5px;
  position: fixed;
  top: 0;
  right: 2px;
}

select {
  display: block;
  margin-top: 5px;
}

form div:last-child {
  margin-top: 10px;
}
```

```css
.anchor {
  anchor-name: --infobox;
}
```

The positioned element is then associated with the anchor element by setting its anchor name as the value of the positioned element's `position-anchor` property.

In addition, we set the `infobox`'s:

- {{cssxref("position")}} property to `fixed`, so it can be positioned relative to the anchor's position in the page.
- {{cssxref("top")}} property to a value of `anchor(bottom)` — this has the effect of positioning the infobox's top edge flush to the bottom edge of its anchor. This acts as a default value, which will be overwritten when different values are selected from the first drop-down.
- {{cssxref("left")}} property to a value of `anchor(right)` — this has the effect of positioning the infobox's left edge flush to the right edge of its anchor. This acts as a default value, which will be overwritten when different values are selected from the second drop-down.

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position-anchor: --infobox;

  position: fixed;
  top: anchor(bottom);
  left: anchor(right);
}
```

#### JavaScript

In the JavaScript, we grab references to the infobox, and the two `<select>` elements. To each `<select>` element, we add a `change` event handler function so that, when a new `anchor-side` value is selected, it is put in an `anchor()` function which is then set as the value of the infobox's relevant property (`top` or `left`, respectively).

```js
const infobox = document.querySelector(".infobox");
const topSelect = document.querySelector("#top-anchor-side");
const leftSelect = document.querySelector("#left-anchor-side");

topSelect.addEventListener("change", (e) => {
  const anchorSide = e.target.value;
  infobox.style.top = `anchor(${anchorSide})`;
});

leftSelect.addEventListener("change", (e) => {
  const anchorSide = e.target.value;
  infobox.style.left = `anchor(${anchorSide})`;
});
```

#### Result

The result is as follows. Try selecting different values from the drop-down menus to see how they affect the positioning of the infobox.

{{EmbedLiveSample("Comparison of different anchor-side values", "100%", '240')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning)
- [Using CSS Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using)
