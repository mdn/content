---
title: anchor()
slug: Web/CSS/anchor
page-type: css-function
browser-compat: css.types.anchor
---

{{CSSRef}}

The **`anchor()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) can be used within an **anchor-positioned** element's [inset property](#properties_that_accept_anchor_function_values) values, returning a length value relative to the position of the edges of its associated anchor element.

## Syntax

```css
/* side or percentage */
top: anchor(bottom);
top: anchor(50%);
top: calc(anchor(bottom) + 10px)
inset-block-end: anchor(start);

/* side of named anchor */
top: anchor(--myAnchor bottom);
inset-block-end: anchor(--myAnchor start);

/* side of named anchor with fallback */
top: anchor(--myAnchor bottom, 50%);
inset-block-end: anchor(--myAnchor start, 200px);
left: calc(anchor(--myAnchor right, 0%) + 10px);
```

### Parameters

The `anchor()` function's syntax is as follows:

```text
anchor(<anchor-element> <anchor-side>, <length-percentage>)
```

The parameters are:

- `<anchor-element>` {{optional_inline}}

  - : The [`anchor-name`](/en-US/docs/Web/CSS/anchor-name) property value of an anchor element you want to position the element's side relative to. This is a `<dashed-ident>` value. If omitted, the element's **default anchor**, referenced in its [`position-anchor`](/en-US/docs/Web/CSS/position-anchor) property, or associated with the element via the [`anchor`](/en-US/docs/Web/HTML/Global_attributes/anchor) HTML attribute, is used.

    > **Note:** Specifying an `<anchor-element>` inside an `anchor()` function does not associate an element with an anchor; it only positions the element relative to that anchor. The [`position-anchor`](/en-US/docs/Web/CSS/position-anchor) CSS property or the [`anchor`](/en-US/docs/Web/HTML/Global_attributes/anchor) HTML attribute is still needed to create the association.

- `<anchor-side>`

  - : Specifies the side of the anchor, or the relative distance from the `start` side, which the element is positioned relative to. If a physical or logical value is used that is not [compatible](#compatibility_of_inset_properties_and_anchor-side_values) with the inset property on which `anchor()` is set, the fallback value is used. Valid values include:

    - `top`
      - : The top of the anchor element.
    - `right`
      - : The right of the anchor element.
    - `bottom`
      - : The bottom of the anchor element.
    - `left`
      - : The left of the anchor element
    - `start`
      - : The logical start of the anchor element's [containing block](/en-US/docs/Web/CSS/Containing_block) along the axis of the inset property on which the `anchor()` function is set.
    - `end`
      - : The logical end of the anchor element's containing block along the axis of the inset property on which the `anchor()` function is set.
    - `self-start`
      - : The logical start of the anchor element's content along the axis of the inset property on which the `anchor()` function is set.
    - `self-end`
      - : The logical end of the anchor element's content along the axis of the inset property on which the `anchor()` function is set.
    - `center`
      - : The center of the axis of the inset property on which the `anchor()` function is set.
    - {{cssxref("percentage")}}
      - : Specifies the distance, as a percentage, from the start of the element's content along the axis of the inset property on which the `anchor()` function is set.

    The CSS anchor positioning module introduces two additional `<anchor-side>` values, `inside` and `outside`, that have not yet been implemented.

- {{cssxref("length-percentage")}} {{optional_inline}}
  - : Specifies a fallback value the function should resolve to if the `anchor()` function would otherwise not be valid.

### Return value

Returns a {{cssxref("length")}} value.

## Description

The `anchor()` function enables positioning an element relative to the edges of an anchor element. It is only valid within {{glossary("inset properties", "inset property")}} values set on absolute or fixed position elements.

It returns a `<length>` value specifying the distance between the anchor-positioned element side specified by the inset value, and the side of the anchor element specified by the chosen `<anchor-side>` value. As it returns a `<length>`, it can be used within [other CSS functions](/en-US/docs/Web/CSS/CSS_Functions) that accept length values, including {{cssxref("calc()")}}, {{cssxref("clamp()")}}, etc.

If no anchor with the name specified by the `<anchor-element>` exists, or if the positioned element does not have an anchor associated with it (i.e. via the {{cssxref("position-anchor")}} property), the first parameter is considered invalid and the fallback `<length-percentage>` value is used if one is available. For example, if `top: anchor(bottom, 50px)` were specified on the positioned element but no anchor was associated with it, the fallback value would be used, so `top` would get a computed value of `50px`.

For detailed information on anchor features and usage, see the [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module landing page and the [Using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using) guide.

### Properties that accept `anchor()` function values

The CSS {{glossary("inset properties")}} that accept an `anchor()` function as a value component include:

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

### Compatibility of inset properties and `<anchor-side>` values

When using an `anchor()` function inside an inset property value, the `<anchor-side>` parameter specified inside the `anchor()` function has to be compatible with the axis on which the inset property resides.

This means that physical `<anchor-side>` values can be used within the values of physical inset properties if the property has the same axis direction as the `<anchor-side>`. In other words, the `top` and `bottom` sides are not valid within the `left` and `right` property values, and the `left` and `right` sides are not valid within `top` and `bottom` property values. For example, `top: anchor(bottom)` is fine, as they are both vertical values but `top: anchor(left)` is not valid, as `left` is a horizontal value. If `top: anchor(left, 50px)` were specified, the fallback value would be used, so `top` would get a computed value of `50px`. If no fallback is present, the inset property behaves as if it were set to `auto`.

You can use logical `<anchor-side>` values within both logical and physical inset properties as logical `<anchor-side>` values are relative to the inset property's relevant axis, whether the property is logical or relative. For example, `top: anchor(start)`, `top: anchor(self-end)`, `inset-block-start: anchor(end)` and `inset-inline-end: anchor(self-start)` all work fine.

The story gets more complicated when using physical `<anchor-side>` parameters within logical inset property values as the physical side has to match the axis the inset property is relevant to within the current writing mode. For example:

- In a horizontal writing mode, the block direction is top-to-bottom, therefore `inset-block-end: anchor(bottom)` will work but `inset-block-end: anchor(left)` is incompatible. If `inset-block-end: anchor(left, 50px)` were set, the computed value would be `50px`, and the positioned element would be positioned `50px` from the block end (bottom) of its nearest positioned ancestor or the viewport, depending on the `position` value set.
- In a vertical writing mode, the block direction is right-to-left or left-to-right, therefore `inset-block-end: anchor(left)` will work, but `inset-block-end: anchor(top)` is incompatible. If `inset-block-end: anchor(top, 50px)` were set, the computed value would be `50px`, and the positioned element would be positioned `50px` from the block end (left or right depending on the writing mode) of its nearest positioned ancestor or the viewport, depending on the `position` value set.

To mitigate the potential for confusion with these values, you are advised to use logical inset properties with logical `<anchor-side>` values, and physical inset properties with physical `<anchor-side>` values. You should favor the use of logical values whenever possible because they are better for [internationalization](/en-US/docs/Glossary/Internationalization).

The `center` and `<percentage>` values are valid within the `anchor()` function within all logical and physical inset properties.

The below table lists the inset properties, and the `<anchor-side>` parameter values that are compatible with them. We have only listed the longhand inset properties; these comprise the shorthand inset property values.

| Inset property                              | Compatible `<anchor-side>` value                                                                                                               |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| All                                         | `center`                                                                                                                                       |
| All                                         | `<percentage>`                                                                                                                                 |
| `top` and `bottom`                          | `top`, `bottom`, `start`, `end`, `self-start`, `self-end`                                                                                      |
| `left` and `right`                          | `left`, `right`, `start`, `end`, `self-start`, `self-end`                                                                                      |
| `inset-block-start` and `inset-block-end`   | `start`, `end`, `self-start`, and `self-end`<br>`top` and `bottom` in horizontal writing modes<br>`left` and `right` in vertical writing modes |
| `inset-inline-start` and `inset-inline-end` | `start`, `end`, `self-start`, and `self-end`<br>`left` and `right` in horizontal writing modes<br>`top` and `bottom` in vertical writing modes |

### Using `anchor()` inside `calc()`

When the `anchor()` function refers to a side of the default anchor, you can include a {{cssxref("margin")}} to create spacing between the edges of the anchor and positioned element as needed. Alternatively, you can include the `anchor()` function within a {{cssxref("calc")}} function to add spacing.

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

You can position an element relative to multiple anchors by specifying different `<anchor-element>` names inside the `anchor()` function of different inset properties on the same element (see [Element positioned relative to multiple anchors](#element_positioned_relative_to_multiple_anchors) below). This can be used to create useful functionality such as drag handles at the corners of a positioned element that can be used to resize it.

While a positioned element can be positioned relative to more than one anchor element, it is only ever associated with the single anchor defined via its [`position-anchor`](/en-US/docs/Web/CSS/position-anchor) property (or the [`anchor`](/en-US/docs/Web/HTML/Global_attributes/anchor) HTML attribute). This is the anchor the element will scroll with when the page scrolls; it can also be used to control when the element is [conditionally hidden](/en-US/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements).

## Formal syntax

{{csssyntax}}

## Examples

### Common usage

In this example, the `anchor()` function is used to set the height of an anchor-positioned element to the height of its anchor by setting the bottom and top edges to the bottom and top edges of the anchor. The `anchor()` function within a `calc()` function is then used to offset the anchor-positioned element from its anchor.

#### HTML

We include a {{htmlelement("div")}} element, which we'll set as our anchor, and a {{htmlelement("p")}} that we will position relative to that anchor:

```html
<div class="anchor">⚓︎</div>

<p class="positionedElement">This is a positioned element.</p>
```

#### CSS

We set the anchor element's `anchor-name` value as the value of the positioned element's `position-anchor` property to associate the elements, then set three inset properties on the anchor-positioned element. The first two position the element's top edge flush with the top edge of the anchor and the bottom edge flush with the bottom edge of the anchor. In the third inset property, the `anchor()` function is used within a `calc()` function to position the element's left edge `10px` to the right edge of the anchor.

```css
.anchor {
  anchor-name: --infobox;
  background: palegoldenrod;
  font-size: 3em;
  width: fit-content;
  border: 1px solid goldenrod;
}

.positionedElement {
  position: absolute;
  position-anchor: --infobox;
  margin: 0;
  top: anchor(top);
  left: calc(anchor(right) + 10px);
  bottom: anchor(bottom);
  background-color: olive;
  border: 1px solid darkolivegreen;
}
```

#### Results

{{EmbedLiveSample("common_usage", "100%", '240')}}

### Comparison of different anchor-side values

This example shows an element positioned relative to an anchor via its {{cssxref("top")}} and {{cssxref("left")}} properties, which are defined using `anchor()` functions. It also includes two drop-down menus that allow you to vary the `<anchor-side>` values inside those `anchor()` functions, so you can see what effect they have.

#### HTML

We specify two {{htmlelement("div")}} elements, one with a class of `anchor` and one with a class of `infobox`. These are intended to be the anchor element and the positioned element we will associate with it, respectively.

We also include some filler text around the two `<div>` elements to make the {{htmlelement("body")}} taller so that it will scroll. This example also includes two {{htmlelement("select")}} elements to create the drop-down menus enabling the selection of different `<anchor-side>` values to place the positioned element with. We've hidden the filler text and the `<select>` elements for brevity.

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

We listen for the `change` event that occurs when a new `<anchor-side>` value is selected, and set the selected value as the `<anchor-side>` in the `anchor()` function within the infobox's relevant inset property (`top` or `left`) value.

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

This example positions an element relative to two different anchors, which are used to set the position of the top-left and bottom-right corners of the anchor-positioned element. The anchors can be moved via keyboard controls or dragged, resizing the positioned element.

#### HTML

We specify three {{htmlelement("div")}} elements in total. The first two have a class of `anchor` and will be defined as anchors; each one has an individual `id` that will be used to provide them with different positioning information. The last `<div>` has a class of `infobox` and will be defined as the positioned element. We include the [`tabindex`](/en-US/docs/Web/HTML/Global_attributes/tabindex) attribute to enable them to receive keyboard focus.

```html
<div id="anchor1" class="anchor" tabindex="0">⚓︎1</div>

<div id="anchor2" class="anchor" tabindex="0">⚓︎2</div>

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
  &:focus {
    background-color: hsl(60 100% 75%);
  }
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

The anchor-positioned element, with its `position` set to `fixed`, is associated with one anchor via its {{cssxref("position-anchor")}} property. It is positioned relative to two anchors by including two different `<anchor-name>` values with the `anchor()` functions set on its inset properties. In this case, we used {{cssxref("percentage")}} values for the `<anchor-side>` parameter, specifying the distance from the start of the axis of the inset property on which the function is set.

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

```js hidden
// grab all the anchors and make each one draggable
const anchors = document.querySelectorAll(".anchor");
anchors.forEach((anchor) => makeDraggable(anchor));

function makeDraggable(elem) {
  let pos1, pos2, pos3, pos4;

  elem.onmousedown = dragMouseDown;
  elem.addEventListener("keyup", (e) => {
    switch (e.key) {
      case "d":
        elem.style.left = elem.offsetLeft + 5 + "px";
        break;
      case "a":
        elem.style.left = elem.offsetLeft - 5 + "px";
        break;
      case "w":
        elem.style.top = elem.offsetTop - 5 + "px";
        break;
      case "s":
        elem.style.top = elem.offsetTop + 5 + "px";
        break;
    }
    e.preventDefault();
  });

  function elementMove(e) {
    console.dir(e);
    // calculate the new cursor position:
    pos1 = pos3 - e.offsetLeft;
    pos2 = pos4 - e.offsetTop;
    pos3 = e.offsetLeft;
    pos4 = e.offsetTop;
    // set the element's new position:
    elem.style.top = elem.offsetTop - pos2 + "px";
    elem.style.left = elem.offsetLeft - pos1 + "px";
  }

  function dragMouseDown(e) {
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the mouse moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elem.style.top = elem.offsetTop - pos2 + "px";
    elem.style.left = elem.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
```

#### Result

The positioned element is positioned relative to both anchor elements. Drag them with the mouse or tab to them and use the <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd>, and <kbd>D</kbd> keys to move them up, down, left, and right. See how this changes their position, and as a consequence, the area of the positioned element. Scroll to see how the positions of all the elements are maintained.

{{EmbedLiveSample("Element positioned relative to multiple anchors", "100%", '350')}}

> **Note:** This example is a proof-of-concept and not intended to be used in production code. Among its shortcomings, the example breaks if you try to move the anchors past each other horizontally or vertically.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("position-anchor")}}
- {{cssxref("inset-area")}}
- {{cssxref("anchor-size()")}} function
- [Using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using) guide
- [Handling overflow: try fallbacks and conditional hiding](/en-US/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) guide
- [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module
