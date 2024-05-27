---
title: anchor-name
slug: Web/CSS/anchor-name
page-type: css-property
status:
  - experimental
browser-compat: css.properties.anchor-name
---

{{CSSRef}}{{seecompattable}}

The **`anchor-name`** [CSS](/en-US/docs/Web/CSS) property enables you to define an element as an **anchor element** and give it one or more identifying **anchor names**, which can then be set as values of positioned elements' {{cssxref("position-anchor")}} property to associate them with the anchor.

## Syntax

```css
/* Single values */
anchor-name: none;
anchor-name: --name;

/* Multiple values */
anchor-name: --name, --another-name;

/* Global values */
anchor-name: inherit;
anchor-name: initial;
anchor-name: revert;
anchor-name: revert-layer;
anchor-name: unset;
```

### Values

- `none`
  - : The default value. Setting `anchor-name: none` on an element means that it is not identified as an anchor element, and the property therefore has no effect.
- {{cssxref("dashed-ident")}}

  - : Defines the element as an anchor element and gives it one or more identifying anchor names, which can then be set as values of positioned elements' {{cssxref("position-anchor")}} properties to associate them with the anchor. The values need to be {{cssxref("dashed-ident")}} values; if multiple values are specified, they are separated with commas.

## Description

To position an element relative to an anchor element, the positioned element requires three features: an association, a position, and a location.  The {{cssxref("position-anchor")}} property provides the association. The positioned element is associated with the anchor element via an anchor name. The anchor element has a `<dashed-ident>` anchor name set on it via the `anchor-name` property. The same `<dashed-ident>` value is set as the value of the positioned element's `position-anchor` property.

The positioned element needs to be placed after the anchor element in the DOM, or be a descendant of it, for this association to work. This `position` will be relative to the anchor rather than to the nearest ancestor positioned element. 

If multiple anchor elements have the same anchor name set on them, and that name is referenced by a positioned element in its `position-anchor` property, it will be associated with the last anchor element in the source order.

To place the positioned element in a specific location relative to the anchor element, a feature such as the {{cssxref("anchor()")}} function or the {{cssxref("inset-area")}} property is needed.

You cannot associate a positioned element with an anchor element if the anchor is hidden, for example with {{cssxref("display", "display: none")}} or {{cssxref("visibility", "visibility: hidden")}}, or if it is part of the [skipped contents](/en-US/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents) of another element due to it having {{cssxref("content-visibility", "content-visibility: hidden")}} set on it.

[Pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements) set on anchor-positioned elements are implicitly anchored to the same element as the pseudo-element's originating element, unless otherwise specified.

For more information about anchor positioning, see the [using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using) guide.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

The following example associates a positioned element with an anchor, and tethers the positioned element to the right of the anchor.

#### HTML

We specify two {{htmlelement("div")}} elements; an anchor element with a class of `anchor` and a positioned element with a class of `infobox`.

We also include some filler text around the two `<div>`s to make the {{htmlelement("body")}} taller so that it will scroll.

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

#### CSS

We first declare the `anchor` `<div>` as an anchor element by setting an anchor name on it via the `anchor-name` property:

```css hidden
body {
  width: 50%;
  margin: 0 auto;
}

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

We associate the second `<div>` with the anchor element by setting its anchor name as the value of the positioned element's {{cssxref("position-anchor")}} property.

In addition, we set the `infobox`'s:

- {{cssxref("position")}} property to `fixed`, so it can be positioned relative to the anchor's position in the page.
- {{cssxref("left")}} property to an {{cssxref("anchor()")}} function with a value of `right` — this has the effect of positioning the infobox's left edge flush to the right edge of its anchor.
- {{cssxref("align-self")}} property to `anchor-center`. This causes the infobox to be aligned centrally to the center of the anchor in the inline direction.
- {{cssxref("margin-left")}} to `10px` to create space between the infobox and its anchor.

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
  left: anchor(right);
  align-self: anchor-center;
  margin-left: 10px;
}
```

#### Result

Try scrolling the page to demonstrate how the infobox is tethered to the anchor.

{{ EmbedLiveSample("Basic usage", "100%", "225") }}

### Multiple positioned elements

This example demonstrates how you can associate multiple positioned elements with one anchor.

#### HTML

The HTML is the same as for the previous example, except that this time we have multiple positioned element `<div>`s with different [`id`](/en-US/docs/Web/HTML/Global_attributes/id)s to identify them.

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor">⚓︎</div>

<div class="infobox" id="infobox1">
  <p>This is an information box.</p>
</div>

<div class="infobox" id="infobox2">
  <p>This is another information box.</p>
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

#### CSS

The CSS is mostly the same as the previous example too. We declare the `anchor` `<div>` as an anchor element using the `anchor-name` property and give it an anchor name as before.

```css hidden
body {
  width: 50%;
  margin: 0 auto;
}

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

Each of the two positioned elements are associated with the anchor element by setting its anchor name as each positioned element's {{cssxref("position-anchor")}} property value. The positioned elements are then positioned in different places relative to the anchor using a combination of inset, alignment, and margin properties.

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
#infobox1 {
  position-anchor: --infobox;

  position: fixed;
  left: anchor(right);
  align-self: anchor-center;
  margin-left: 10px;
}

#infobox2 {
  position-anchor: --infobox;

  position: fixed;
  bottom: anchor(top);
  justify-self: anchor-center;
  margin-bottom: 15px;
}
```

#### Result

Try scrolling the page to demonstrate how both of the infoboxes are tethered to the anchor.

{{ EmbedLiveSample("Multiple positioned elements", "100%", "225") }}

### Multiple positioned elements and anchors

This example demonstrates how you can move multiple positioned elements around, associating them with different anchors.

#### HTML

We have four different anchors and two different positioned elements, distinguished with different `id` values. The positioned elements contain {{htmlelement("select")}} boxes that allow you to chooose which anchor you want to associate them with.

```html
<div id="anchor-container">
  <div class="anchor" id="anchor1">⚓︎</div>
  <div class="anchor" id="anchor2">⚓︎</div>
  <div class="anchor" id="anchor3">⚓︎</div>
  <div class="anchor" id="anchor4">⚓︎</div>
</div>

<div class="infobox" id="infobox1">
  <form>
    <label for="infobox1-anchor-select">Place infobox on:</label>
    <select id="infobox1-anchor-select">
      <option value="1">Anchor 1</option>
      <option value="2">Anchor 2</option>
      <option value="3">Anchor 3</option>
      <option value="4">Anchor 4</option>
    </select>
  </form>
</div>

<div class="infobox" id="infobox2">
  <form>
    <label for="infobox2-anchor-select">Place infobox on:</label>
    <select id="infobox2-anchor-select">
      <option value="1">Anchor 1</option>
      <option value="2">Anchor 2</option>
      <option value="3">Anchor 3</option>
      <option value="4">Anchor 4</option>
    </select>
  </form>
</div>
```

#### CSS

We declare the first `anchor` `<div>` as an anchor using the `anchor-name` property, which is given two separate anchor names, one for each positioned element. This is the initial state of the demo — both positioned elements will be tethered to the first anchor.

```css hidden
body {
  height: 100vh;
}

#anchor-container {
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr 1fr;
  justify-items: center;
  align-items: center;
}

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
#anchor1 {
  anchor-name: --infobox1, --infobox2;
}
```

Each of the two positioned elements are given a {{cssxref("position-anchor")}} property with a value matching one of the anchor names. The positioned elements are then given anchor-relative positioning information using a combination of inset, alignment, and margin properties.

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
  width: 120px;
}
```

```css
#infobox1 {
  position-anchor: --infobox1;

  position: fixed;
  left: anchor(right);
  align-self: anchor-center;
  margin-left: 10px;
}

#infobox2 {
  position-anchor: --infobox2;

  position: fixed;
  bottom: anchor(top);
  justify-self: anchor-center;
  margin-bottom: 15px;
}
```

#### JavaScript

We dynamically change the `anchor-name` values set on the anchor elements in response to different anchors being selected in the positioned elements' `<select>` menus. The key functionality here is the [`change`](/en-US/docs/Web/API/HTMLElement/change_event) event handler, `updateAnchorNames()`. It sets both anchor names on one anchor, if the anchors chosen in the two `<select>` menus are the same, or otherwise it sets a single anchor name on two separate anchors as appropriate.

```js
// Get references to the two select menus
const select1 = document.querySelector("#infobox1-anchor-select");
const select2 = document.querySelector("#infobox2-anchor-select");
// Store references to all the anchors in a NodeList (array-like)
const anchors = document.querySelectorAll("#anchor-container > div");

// Set the same change event handler on both select menus
select1.addEventListener("change", updateAnchorNames);
select2.addEventListener("change", updateAnchorNames);

function updateAnchorNames() {
  // Remove all anchor names fomr all anchors
  for (const anchor of anchors) {
    anchor.style.anchorName = "none";
  }

  // convert the select menu values to numbers, and remove one to
  // make them match the selected anchors' index positions in the NodeList
  const value1 = Number(select1.value) - 1;
  const value2 = Number(select2.value) - 1;

  if (value1 === value2) {
    // If the chosen anchors are both the same, set both anchor
    // names on the same anchor
    anchors[value1].style.anchorName = "--infobox1, --infobox2";
  } else {
    // If they are not the same, set the anchor names separately
    // on each selected anchor
    anchors[value1].style.anchorName = "--infobox1";
    anchors[value2].style.anchorName = "--infobox2";
  }
}
```

#### Result

Try choosing values from the drop-down menus to change the anchors that the elements are positioned relative to.

{{ EmbedLiveSample("Multiple positioned elements and anchors", "100%", "400") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning)
- [Using CSS Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using)
