---
title: Using CSS anchor positioning
slug: Web/CSS/CSS_anchor_positioning/Using
page-type: guide
---

{{CSSRef}}

**CSS anchor positioning** enables elements to be tethered together — defining some elements as **anchor elements** and others as **anchored elements**. The anchored elements can be positioned and sized relative to the anchor elements. In addition, you can declare conditions under which anchored elements should be hidden, and alternative position options to render them in, if the default rendering position causes anchored elements to overflow their containing block and/or be rendered offscreen.

This article explains all the anchor positioning concepts, and how to use the spec's features at a basic level. For further examples and syntax details, see the reference pages linked through.

## Fundamental concepts

It's very common to want to tether one element to another, for example:

1. Error messages that appear alongside form controls.
2. Tooltips or infoboxes that pop up next to a UI element to provide more information about it.
3. Settings or options dialogs that can be accessed to quickly configure UI elements.

Creating such uses cases is fairly simple when the element to tether to (aka the **anchor element**) is always in the same place in the UI and the tethered element (aka the **anchored element**) can just be placed before or after it in the source order. However, things are rarely that simple, and modern interfaces will often call for reusable, dynamically-generated anchored elements to be absolutely positioned next to their respective anchor elements. Their positions relative to one another will need to be maintained as the anchor element moves (e.g. by scolling, or drag and drop).

And if the anchor element gets close to the edge of the viewport, meaning that the anchored element is now offscreen, it's common to want to move its position to put it back onscreen again. Think of how right-click (<kbd>Ctrl</kbd> + click) context menus work on common desktop OSes.

Historically, implementing this functionality has required JavaScript to dynamically keep positions updated as appropriate, has significant performance issues, and is difficult to get right. The [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module allows these use cases to be implemented performantly and declaratively.

## Associating anchor and anchored elements

To associate an element with an anchor, you need to first declare which element is the anchor, and then specify which anchored element(s) are to be associated with that anchor. Anchored elements need to have absolute or fixed [positioning](/en-US/docs/Learn/CSS/CSS_layout/Positioning) applied to them to be associated with anchors.

### Via CSS

To declare an anchor element with CSS, you need to set an anchor name on it via the {{cssxref("anchor-name")}} property. The value needs to be a {{cssxref("dashed-ident")}}:

```css hidden
.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}
```

```css
.anchor {
  anchor-name: --infobox;
}
```

The anchored element is then associated with the anchor element by setting its anchor name as the value of the anchored element's {{cssxref("position-anchor")}} property. Let's say we want to tether an infobox to the anchor:

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
  position: fixed;
  position-anchor: --infobox;
}
```

We'll apply the above CSS to the following HTML:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

This will render as follows:

{{ EmbedLiveSample("Via CSS", "100%", "120") }}

Note that the anchored element needs to be positioned after the anchor element in the DOM, or be a descendant of it, for the association to work.

The anchor and infobox are now associated together, but for the moment you'll have to trust us on this. They are not yet tethered to each other — if you were to position the anchor and move it somewhere else on the page, it would move on its own, leaving the infobox in the same place. You'll see the actual tethering in action later on, when we look at [positioning anchored elements based on anchor position](#positioning_anchored_elements_based_on_anchor_position).

### Via HTML

To associate an anchored element with an anchor in HTML, you need to give the anchor element an ID, and then reference that ID in the anchored element's [`anchor`](/en-US/docs/Web/HTML/Global_attributes/anchor) attribute:

```html
<div class="anchor" id="example-anchor">⚓︎</div>

<div class="infobox" anchor="example-anchor">
  <p>This is an information box.</p>
</div>
```

We still need to give the infobox absolute or fixed position so that it can be associated with the anchor:

```css hidden
.anchor {
  font-size: 1.8rem;
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

```css
.infobox {
  position: fixed;
}
```

This gives the same result that we achieved earlier with CSS:

{{ EmbedLiveSample("Via HTML", "100%", "120") }}

## Positioning anchored elements based on anchor position

As we saw above, associating an anchored element with an anchor is not really much use on its own. You also need to specify the position of the anchored element relative to the anchor. Let's look at the machanisms available to do this.

### Using individual inset values, via `anchor()`

Conventional positioned elements can have their position specified via `inset` properties. This includes:

- Physical properties: {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("bottom")}}, and {{cssxref("right")}}.
- Logical properties: {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, and {{cssxref("inset-inline-end")}}.
- Shorthand properties: {{cssxref("inset-block")}}, {{cssxref("inset-inline")}}, and {{cssxref("inset")}}.

With anchored elements, we have an extra tool at our disposal — the [`anchor()`](/en-US/docs/Web/CSS/anchor) function. This resolves to a {{cssxref("length")}} value, and enables `inset` values to be expressed in terms of the position of an anchor element's sides. The syntax looks like this:

```text
anchor(anchor-element anchor-side, length-percentage)
```

- The `anchor-element` specifies the `anchor-name` of the anchor you want to position to anchored element relative to. This is optional — if omitted, the anchored element is positioned relative to the anchor referenced by its `position-anchor` property (this is sometimes referred to as the element's **default anchor**).
- The `anchor-side` specifies the side of the anchor element that the anchored element will be positioned relative to. This can be expressed using a variety of values, for example physical (`top`, `left`, etc.) or logical (`start`, `end`, etc.)
- The {{cssxref("length-percentage")}} is a fallback value that specifies what the function should resolve to if the `anchor()` function is invalid.

The most common `anchor()` functions you'll use will just refer to a side of the default anchor. You will also likely use them inside {{cssxref("calc")}} functions, to add some spacing between the edge of the anchor and the edge of the anchored element. For example:

```css
.elem {
  /* Position the right edge of the anchored element
     flush to the anchor element's left edge  */
  right: anchor(left);

  /* Position the anchored element's logical block end edge
     10px from the anchor element's logical block start edge  */
  inset-block-end: calc(anchor(start) + 10px);
}
```

Let's look at an example of this in action. We'll start with the same HTML as in the previous examples, but with some filler text below and above to give the {{htmlelement("body")}} element some height:

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

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
```

We'll also give the anchor element the same CSS. The `<body>` element is given a narrow width to make the content taller:

```css hidden
.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}
```

```css
.anchor {
  anchor-name: --infobox;
}

body {
  width: 50%;
  margin: 0 auto;
}
```

The infobox is given fixed positioning and associated with the anchor in the same way as before. However, now we tether it to the anchor using the logical {{cssxref("inset-block-start")}} and {{cssxref("inset-inline-start")}} properties (which are equivalent to {{cssxref("top")}} and {{cssxref("left")}} in horizontal writing modes):

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
  position: fixed;
  position-anchor: --infobox;

  inset-block-start: calc(anchor(end) + 5px);
  inset-inline-start: calc(anchor(self-end) + 5px);
}
```

Let's look at the positioning declarations in more detail:

- `inset-block-start: calc(anchor(end) + 5px)`: Here we are setting the anchored element's block start edge to be positioned in the same position along the block axis as the anchor's block end edge (calculated using the `anchor(end)` function), plus 5px, so a gap is left and the two edges are not flush against each other.
- `inset-inline-start: calc(anchor(self-end) + 5px)`: Here we are setting the anchored element's inline start edge to be positioned in the same position along the inline axis as the anchor's inline end edge (calculated using the `anchor(self-end)` function), plus 5px (again, to create a gap).

This gives us the following result:

{{ EmbedLiveSample("Using individual inset values, via `anchor()`", "100%", "250") }}

The anchored element is positioned 5px below and 5px to the right of the anchor element. As the document is scrolled up and down, the anchored element — despite being given fixed position — maintains its position relative to the anchor element.

### Using an `inset-area`

The {{cssxref("inset-area")}} property provides an alternative to the `anchor()` function for positioning anchored elements. `inset-area` works on the concept of a 3x3 grid of tiles, with the anchor element inside the center tile:

![The inset-area grid, as described below](inset-area.png)

The grid tiles are broken up into rows and columns:

- The three rows are represented by the physical values `top`, `center`, and `bottom`. They also have logical equivalents — `start`, `center`, and `end`.
- The three columns are represented by the physical values `left`, `center`, and `right`. They also have logical equivalents — `start`, `center`, and `end`.

`inset-area` property values are composed of one or two values based on the row and column values described above, with a feature extra options available. For example:

- You can specify two or the above values to place the anchored element in that specific grid square — for example `top left` (logical equivalent `start start`) or `bottom center` (logical equivalent `end center`).
- You can specify a row or column value plus a `span-*` value. The first value specifies the row or column to place the anchored element in, placing it initially in the center, and the other one specifies the amount of that column to span. For example:
  - `span-left top` causes the anchored element to be placed in the top row, and span across the center and left tiles of that row.
  - `span-bottom right` causes the anchored element to be placed in the right column, and span across the center and bottom tiles of that column.
  - `span-all top` causes the anchored element to be placed in the top row, and span across the left, center, and right tiles of that row.
- If you only specify one value, the other value defaults to `span-all` in the case of physical values (except for `center`, in which case the other value defaults to `center`), or the same as the first value in the case of logical values. So, for example:
  - `top` gives the same effect as `top span-all`.
  - `start` gives the same effect as `start start`.

> **Note:** See the {{cssxref("inset-area")}} property for a detailed description of all the available values.

Lets demonstrate some of these values in action; this example uses exactly the same HTML as the previous example, except that we've included a {{htmlelement("select")}} element that allows you to change the `inset-area` applied to the anchored element, changing its position relative to the anchor.

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

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
  <label for="inset-area-select">Choose an inset-area:</label>
  <select id="inset-area-select" name="inset-area-select">
    <option>top</option>
    <option>bottom</option>
    <option>left</option>
    <option>right</option>
    <option>top left</option>
    <option>top right</option>
    <option>bottom left</option>
    <option>bottom right</option>
    <option>top span-left</option>
    <option>bottom span-right</option>
    <option>left span-top</option>
    <option>right span-bottom</option>
    <option>center</option>
  </select>
</form>
```

The anchor element and `<body>` element are given the same CSS as before. We have given the `<select>` form some simple styling and fixed its position in the top-left of the viewport:

```css hidden
.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

.anchor {
  anchor-name: --infobox;
}

body {
  width: 50%;
  margin: 0 auto;
}

form {
  background: white;
  border: 1px solid black;
  padding: 5px;
}

select {
  display: block;
  margin-top: 5px;
}
```

```css
form {
  position: fixed;
  top: 0;
  right: 2px;
}
```

The infobox is given fixed positioning and associated with the anchor in the same way as before. This time however, it is tethered to the anchor with `inset-area: top;`, which causes it to be positioned at the top of the inset-area grid. This will be overridden once you select different values from the `<select>` menu.

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
  position: fixed;
  position-anchor: --infobox;

  inset-area: top;
}
```

We also include a short script to apply new `inset-area` values chosen from the `<select>` menu to the infobox:

```js
const infobox = document.querySelector(".infobox");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  infobox.style.insetArea = selectElem.value;
});
```

The result is as follows. Try selecting new `inset-area` values from the `<select>` menu to see the effect they have on the position of the infobox:

{{ EmbedLiveSample("Using an `inset-area`", "100%", "250") }}

### Combining `anchor()` and `inset-area`

xx

### Centering on the anchor using `anchor-center`

xx

## Sizing anchored elements based on anchor size

xx

## Conditional anchored element hiding

xx

## Specifying alternatives — `position-try`

xx

## Examples

xx ?

### Sharing anchoring functionality across multiple anchors

### Popover example

xx

## See also

- [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning)
- [Positioning](/en-US/docs/Learn/CSS/CSS_layout/Positioning)
- [CSS logical properties and values](/en-US/docs/Web/CSS/CSS_logical_properties_and_values)
- [Sizing items in CSS](/en-US/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
