---
title: anchor()
slug: Web/CSS/anchor
page-type: css-function
browser-compat: css.types.anchor
---

{{CSSRef}}

The **`anchor()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) can be used within an **anchor-positioned** element's [inset property](#properties_that_accept_anchor_function_values) values, returning a length value relative to the position of the edges of its associated **anchor element**.

## Syntax

```css
/* property: anchor(anchor-side) */
top: anchor(bottom);
top: anchor(50%);
top: calc(anchor(bottom) + 10px)
inset-block-end: anchor(start);

/* property: anchor(anchor-element anchor-side) */
top: anchor(--myAnchor bottom);
inset-block-end: anchor(--myAnchor start);

/* property: anchor(anchor-element anchor-side, length-percentage) */
top: anchor(--myAnchor bottom, 50%);
inset-block-end: anchor(--myAnchor start, 200px);
```

### Parameters

The `anchor()` function's syntax is as follows:

```text
anchor(<anchor-element> <anchor-side>, <length-percentage>)
```

The parameters are:

- `<anchor-element>` {{optional_inline}}

  - : The [`anchor-name`](/en-US/docs/Web/CSS/anchor-name) property value of the anchor element you want to position the element's side relative to. This is a `<dashed-ident>` value. If omitted, the element's **default anchor** is used. This is the anchor referenced in its [`position-anchor`](/en-US/docs/Web/CSS/position-anchor) property, or associated with the element via the [`anchor`](/en-US/docs/Web/HTML/Global_attributes/anchor) HTML attribute.

- `<anchor-side>`

  - : Specifies the position relative to a side, or sides, of the anchor. If a physical or logical value is used that is not on the same axis as the inset property on which `anchor()` is set, the fallback value is used. Valid values include:

    - `top`
      - : The top of the anchor element.
    - `right`
      - : The right of the anchor element.
    - `bottom`
      - : The bottom of the anchor element.
    - `left`
      - : The left of the anchor element
    - `start`
      - : The logical start of the anchor element's [block axis](/en-US/docs/Glossary/Logical_properties#block_direction).
    - `end`
      - : The logical end of the anchor element's block axis.
    - `self-start`
      - : The logical start of the anchor element's [inline axis](/en-US/docs/Glossary/Logical_properties#inline_direction).
    - `self-end`
      - : The logical end of the anchor element's inline axis.
    - `center`
      - : The center of the axis of the inset property on which the `anchor()` function is set.
    - {{cssxref("percentage")}}
      - : Specifies the distance, as a percentage, from the start of the axis of the inset property on which the `anchor()` function is set.

    The CSS anchor positioning module introduces two additional `<anchor-side>` values, `inside` and `outside`, that have not yet been implemented.

- {{cssxref("length-percentage")}} {{optional_inline}}
  - : Specifies a fallback value the function should resolve to if the `anchor()` function would otherwise be invalid.

### Return value

Returns a {{cssxref("length")}} value.

## Description

The `anchor()` function enables positioning an element relative to the edges of an anchor element. It is only valid within within {{glossary("inset properties", "inset property")}} values.

The `anchor()` function resolves to a `<length>`, so it can be used within [other CSS functions](/en-US/docs/Web/CSS/CSS_Functions) that accept length values, including {{cssxref("calc()")}}, {{cssxref("clamp()")}}, etc.

The function sets the inset position value as an absolute distance relative to the anchor element by defining the anchor element, the side of the anchor element the positioned element is being positioned relative to, and the distance from that side.

If the `<anchor-element>` specified in an `anchor()` function within an inline direction inset property differs from the `<anchor-element>` specified in an `anchor()` function within a block direction inset property, the block direction `<anchor-element>` takes precedence.

> **Note:** Specifying an `<anchor-element>` inside an `anchor()` function cannot be used to associate an element with an anchor, only to position an element relative to an anchor. The [`position-anchor`](/en-US/docs/Web/CSS/position-anchor) CSS property, or the [`anchor`](/en-US/docs/Web/HTML/Global_attributes/anchor) HTML attribute is still needed to create the association.

If the positioned element does not have an anchor associated with it (i.e. via the {{cssxref("position-anchor")}} property) and it has inset properties containing `anchor()` functions within the value, the fallback `<length-perecentage>` value is used if one is available. For example, if `top: anchor(bottom, 50px)` were specified on the positioned element but no anchor was associated with it, the fallback value would be used, so `top` would get a computed value of `50px`. If no fallback is available, the inset property has no effect, but it is still valid (it is not considered [invalid CSS](/en-US/docs/Web/CSS/CSS_syntax/Error_handling) and is therefore not ignored).

For {{glossary("physical properties", "physical")}} inset values, the `<anchor-side>` has to be along the same axis as the inset value being set. For example, `top: anchor(left)` is invalid. If `top: anchor(left, 50px)` were specified, the fallback value would be used, so `top` would get a computed value of `50px`. If no fallback is present, the inset property has no effect, as if it were set to `auto`.

For detailed information on anchor features and usage, see the [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module landing page and the [Using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using) guide.

### Properties that accept `anchor()` function values

The CSS {{glossary("inset properties")}} that accept an `anchor()` function as a value include:

- {{cssxref("top")}}
- {{cssxref("left")}}
- {{cssxref("bottom")}}
- {{cssxref("right")}}
- {{cssxref("inset")}} shorthand
- {{cssxref("inset-block-start")}}
- {{cssxref("inset-block-end")}}
- {{cssxref("inset-block")}} shorthand
- {{cssxref("inset-inline-start")}}
- {{cssxref("inset-inline-end")}}
- {{cssxref("inset-inline")}} shorthand

### Using `anchor()` inside `calc()`

When the `anchor()` function refers to a side of the default anchor, you can include a {{cssxref("margin")}} to create spacing between the edges of the anchor and positioned element as needed. Alternatively, include the `anchor()` function within a {{cssxref("calc")}} function to add spacing.

This example positions the right edge of the positioned element flush to the anchor element's left edge then adds margin to make some space between the edges:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

This example positions the positioned element's logical block end edge `10px` from the anchor element's logical block start edge:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

### Positioning an element relative to multiple anchors

You can position an element relative to multiple anchors by specifying different `<anchor-element>` values inside different `anchor()` functions on the same element (see the [Element positioned relative to multiple anchors](#element_positioned_relative_to_multiple_anchors) demo below). This could be used to create useful functionality, for example, drag handles at the corners of a positioned element, which can be used to resize it.

Bear in mind however that a positioned element still needs to be associated with a single anchor (via the [`position-anchor`](/en-US/docs/Web/CSS/position-anchor) CSS property, or the [`anchor`](/en-US/docs/Web/HTML/Global_attributes/anchor) HTML attribute). This, for example, is the anchor the element will scroll with when the page scrolls.

### Formal syntax

{{csssyntax}}

## Examples

### Comparison of different anchor-side values

This example shows an element positioned relative to an anchor via its {{cssxref("top")}} and {{cssxref("left")}} properties, which are given `anchor()` function values. It also includes two drop-down menus that allow you to vary the `anchor-side` values inside those `anchor()` functions, so you can see what effect they have.

#### HTML

We specify two {{htmlelement("div")}} elements, one with a class of `anchor` and one with a class of `infobox`. These are intended to be the anchor element and the positioned element we will associate with it, respectively.

We also include some filler text around the two `<div>` elements to make the {{htmlelement("body")}} taller so that it will scroll. The demo also includes two {{htmlelement("select")}} elements to create the drop-down menus enabling the selection of different `anchor-side` values to place the positioned element with. We've hidden the filler text and the `<select>` elements for brevity.

```html hidden
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
```

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

```html hidden
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
    <label for="top-anchor-side">
      Choose a vertical <code>anchor()</code> value:
    </label>
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
    <label for="left-anchor-side">
      Choose a horizontal <code>anchor()</code> value:
    </label>
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

We declare the `anchor` `<div>` as an anchor element by setting an anchor name on it via the {{cssxref("anchor-name")}} property. We then associate it with the positioned element by setting the same value for its {{cssxref("position-anchor")}} property. `top: anchor(--myAnchor bottom)` positions the infobox's top edge flush to the bottom edge of its anchor, while `left: anchor(right)` positions the infobox's left edge flush to the right edge of its anchor. This provides an initial position that will be overwritten when different values are selected from the drop-down menus.

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
.anchor {
  anchor-name: --myAnchor;
}

.infobox {
  position: fixed;
  position-anchor: --myAnchor;
  top: anchor(--myAnchor bottom);
  left: anchor(right);
}
```

#### JavaScript

We grab references to the infobox and the two `<select>` elements. To each `<select>` element, we add a `change` event handler function so that, when a new `anchor-side` value is selected, it is put in an `anchor()` function which is then set as the value of the infobox's relevant property (`top` or `left`, respectively).

```js
const infobox = document.querySelector(".infobox");
const topSelect = document.querySelector("#top-anchor-side");
const leftSelect = document.querySelector("#left-anchor-side");

topSelect.addEventListener("change", (e) => {
  const anchorSide = e.target.value;
  infobox.style.top = `anchor(--myAnchor ${anchorSide})`;
});

leftSelect.addEventListener("change", (e) => {
  const anchorSide = e.target.value;
  infobox.style.left = `anchor(${anchorSide})`;
});
```

#### Result

Select different values from the drop-down menus to see how they affect the positioning of the infobox.

{{EmbedLiveSample("Comparison of different anchor-side values", "100%", '240')}}

### Element positioned relative to multiple anchors

This example positions an element relative to two different anchors, which are situated in the top-left and bottom-right corners of the element. The anchors can be clicked and dragged, which has the effect of resizing the positioned element.

#### HTML

We specify three {{htmlelement("div")}} elements in total. The first two have a class of `anchor` and will be defined as anchors; each one has an individual `id` that will be used to provide them with different positioning information. The last `<div>` has a class of `infobox` and will be defined as the positioned element.

```html
<div id="anchor1" class="anchor">⚓︎1</div>

<div id="anchor2" class="anchor">⚓︎2</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

```css hidden
body {
  width: 150vw;
  height: 150vh;
}

.anchor {
  font-size: 1rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

The anchors are each given a different {{cssxref("anchor-name")}} values, a {{cssxref("position")}} value of `absolute`, and different inset values to position the anchors in a rectangle formation.

```css
.anchor {
  position: absolute;
}

#anchor1 {
  anchor-name: --myAnchor1;
  top: 50px;
  left: 100px;
}

#anchor2 {
  anchor-name: --myAnchor2;
  top: 200px;
  left: 350px;
}
```

The anchor-positioned element is associated with the first anchor (the one with an anchor name of `--myAnchor1`) by setting the anchor name as the value of its {{cssxref("position-anchor")}} property and giving it a `position` value of `fixed`. It is then positioned relative to the two anchors by setting an `anchor()` function as the value of each of its {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}}, and {{cssxref("right")}} properties.

In each case, the `anchor()` function includes the anchor name of the anchor you want that particular edge positioned relative to, and a percentage value to specify how far along the inset property's axis you want that edge placed. For example, `top: anchor(--myAnchor1 100%);` means that the positioned element's top edge is being placed relative to `--myAnchor1`; `100%` means it is being placed at the very bottom of the anchor in the block direction, as that is the axis the top edge is situated along.

```css
.infobox {
  position-anchor: --myAnchor1;
  position: fixed;
  top: anchor(--myAnchor1 100%);
  left: anchor(--myAnchor1 100%);
  bottom: anchor(--myAnchor2 0%);
  right: anchor(--myAnchor2 0%);
}
```

#### JavaScript

The JavaScript is adapted from a basic [draggable element script](https://www.w3schools.com/howto/howto_js_draggable.asp) published on W3Schools; for brevity, we won't repeat it here.

```js hidden
// grab all the anchors and make each one draggable
const anchors = document.querySelectorAll(".anchor");
anchors.forEach((anchor) => dragElement(anchor));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
```

#### Result

Note how the positioned element is positioned relative to both the anchor elements. Drag them with the mouse to see how their position, and as a consequence, the area of the positioned element, changes. Also, try scrolling the demo to see how the positions of all the elements are maintained relative to one another on scroll.

{{EmbedLiveSample("Element positioned relative to multiple anchors", "100%", '350')}}

> **Note:** This example is a quick, rough proof-of-concept, and not intended to be used in production code. Its main shortcomings are:
>
> 1. The dragging functionality is not robust. Note how the example breaks if you try to drag the anchors past each other horizontally or vertically.
> 2. The example is not keyboard accessible.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("position-anchor")}}
- {{cssxref("inset-area")}}
- The {{cssxref("anchor-size()")}} function
- [Using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using) guide
- [Handling overflow: try options and conditional hiding](/en-US/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) guide
- [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module
