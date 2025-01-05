---
title: position-anchor
slug: Web/CSS/position-anchor
page-type: css-property
status:
  - experimental
browser-compat: css.properties.position-anchor
---

{{CSSRef}}{{seecompattable}}

The **`position-anchor`** [CSS](/en-US/docs/Web/CSS) property specifies the anchor name of the **anchor element** (i.e. an element that has an **anchor name** set on it via the {{cssxref("anchor-name")}} property) a positioned element is associated with.

## Syntax

```css
/* Single values */
position-anchor: auto;
position-anchor: --anchorName;

/* Global values */
position-anchor: inherit;
position-anchor: initial;
position-anchor: revert;
position-anchor: revert-layer;
position-anchor: unset;
```

### Values

- `auto`

  - : Associates a positioned element with its implicit anchor element, if it has one — for example as set by the non-standard HTML [`anchor`](/en-US/docs/Web/HTML/Global_attributes/anchor) attribute.

- {{cssxref("dashed-ident")}}

  - : The name of the anchor element to associate the positioned element with, as listed in the anchor element's {{cssxref("anchor-name")}} property. This is known as the **default anchor specifier**.

## Description

This property is only relevant to "positioned" elements — elements and pseudo elements that have a {{cssxref("position")}} of `absolute` or `fixed` set.

To position an element relative to an anchor element, the positioned element requires three features: an association, a position, and a location. The `position-anchor` and {{cssxref("anchor-name")}} properties provide the association.

The anchor element accepts one or more `<dashed-ident>` anchor names set on it via the `anchor-name` property. When one of those names is then set as the value of the positioned element's `position-anchor` property, the two elements are associated.

If there are multiple anchor elements with the anchor name listed in the `position-anchor` property, the positioned element will be associated with the last anchor element in the source order with that anchor name.

To tether a positioned element to its anchor, it must be placed relative to an anchor element using an anchor positioning feature, such as the {{cssxref("anchor()")}} function (set as a value on {{glossary("inset properties")}}) or the {{cssxref("position-area")}} property.

If the associated anchor is hidden, for example with {{cssxref("display", "display: none")}} or {{cssxref("visibility", "visibility: hidden")}}, or if it is part of the [skipped contents](/en-US/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents) of another element due to it having {{cssxref("content-visibility", "content-visibility: hidden")}} set on it, the anchor positioned element will not be displayed.

The `position-anchor` property is supported on all elements that are positioned, including [pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements) like {{cssxref("::before")}} and {{cssxref("::after")}}. Pseudo elements are implicitly anchored to the same element as the pseudo-element's originating element, unless otherwise specified.

For more information on anchor features and usage, see the [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module landing page and the [Using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using) guide.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

See the `anchor-name` documentation for [basic usage](/en-US/docs/Web/CSS/anchor-name#basic_usage) and additional [`position-anchor` examples](/en-US/docs/Web/CSS/anchor-name#examples).

### Using a slider thumb as an anchor

In this example, an {{htmlelement("output")}} is positioned relative to an anchor that is the thumb of a range slider.

#### HTML

We include an [`<input type="range">`](/en-US/docs/Web/HTML/Element/input/range) element and an [`<output>`](/en-US/docs/Web/HTML/Element/output) element to display the value of the range. The value displayed in the `<output>` element is updated via JavaScript as the slider value changes.

```html
<label for="slider">Change the value:</label>
<input type="range" min="0" max="100" value="25" id="slider" />
<output>25</output>
```

#### CSS

We give the thumb, represented by the [`::-webkit-slider-thumb`](/en-US/docs/Web/CSS/::-webkit-slider-thumb) pseudo-element, an anchor name of `--thumb`. We then set that name as the value of the `<output>` element's `position-anchor` property, and give it a {{cssxref("position")}} value of `fixed`. These steps associated the `<output>` with the thumb.

Finally, we use {{cssxref("left")}} and {{cssxref("top")}} properties with {{cssxref("anchor()")}} values to position the `<output>` relative to the thumb.

```css hidden
body {
  display: grid;
  place-items: center;
  height: 100vh;
  font-size: 1.4rem;
  font-family: sans-serif;
}
input {
  width: 33vw;
}
output {
  background: cyan;
  border: 2px solid darkblue;
  padding: 3px 6px;
  border-radius: 10px;
  font-size: 1.2rem;
}
```

```css
input::-webkit-slider-thumb {
  anchor-name: --thumb;
}

output {
  position-anchor: --thumb;
  position: absolute;
  left: anchor(right);
  bottom: anchor(top);
}
```

#### JavaScript

We include an event listener that updates the content of the `<output>` element when the value of the `<input>` changes:

```js
const input = document.querySelector("input");
const output = document.querySelector("output");

input.addEventListener("input", (event) => {
  output.innerText = `${input.value}`;
});
```

#### Results

The output is anchored to the thumb. Change the value. If anchor positioning is supported in your browser, the value will be above and to the right of the thumb, no matter where it is along the slider.

{{ EmbedLiveSample("A range thumb as anchor", "100%", "225") }}

### Multiple positioned elements and anchors

In this example, you can move multiple positioned elements around, associating them with different anchors. This example demonstrates how an anchor can be associated with multiple positioned elements, but an anchor-positioned element can only be associated with a single anchor at a time, the anchor defined by the `anchor-position` property.

#### HTML

We have four anchors and two positioned elements, distinguished with different `id` values. The positioned elements contain {{htmlelement("select")}} boxes that allow you to choose which anchor you want to associate them with.

```html
<div id="anchor-container">
  <div class="anchor" id="anchor1">⚓︎</div>
  <div class="anchor" id="anchor2">⚓︎</div>
  <div class="anchor" id="anchor3">⚓︎</div>
  <div class="anchor" id="anchor4">⚓︎</div>
</div>

<div class="infobox" id="infobox1">
  <form>
    <label for="anchor1-anchor-select">Place infobox on:</label>
    <select id="anchor1-anchor-select">
      <option value="1">Anchor 1</option>
      <option value="2">Anchor 2</option>
      <option value="3">Anchor 3</option>
      <option value="4">Anchor 4</option>
    </select>
  </form>
</div>

<div class="infobox" id="infobox2">
  <form>
    <label for="anchor2-anchor-select">Place infobox on:</label>
    <select id="anchor2-anchor-select">
      <option value="1">Anchor 1</option>
      <option value="2">Anchor 2</option>
      <option value="3">Anchor 3</option>
      <option value="4">Anchor 4</option>
    </select>
  </form>
</div>
```

#### CSS

We declare the first `anchor` `<div>` as an anchor using the `anchor-name` property, which is given two comma-separated anchor names, one for each positioned element. This is the initial state of the demo — both positioned elements will be tethered to the first anchor.

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
  anchor-name: --myAnchor1, --myAnchor2;
}
```

Each of the positioned elements is given a `position-anchor` property with a value matching one of the two anchor names. The positioned elements are then given anchor-relative positioning information using a combination of inset, alignment, and margin properties.

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
  position-anchor: --myAnchor1;
  position: fixed;
  left: anchor(right);
  align-self: anchor-center;
  margin-left: 10px;
}

#infobox2 {
  position-anchor: --myAnchor2;
  position: fixed;
  bottom: anchor(top);
  justify-self: anchor-center;
  margin-bottom: 15px;
}
```

#### JavaScript

We dynamically change which anchor elements the `anchor-name` values are set on in response to different anchors being selected in the positioned elements' `<select>` menus. The key functionality here is the [`change`](/en-US/docs/Web/API/HTMLElement/change_event) event handler, `updateAnchorNames()`. It sets both anchor names on one anchor, if the anchors chosen in the two `<select>` menus are the same. Otherwise, it sets a single anchor name on two separate anchors as appropriate.

```js
// Get references to the two select menus
const select1 = document.querySelector("#anchor1-anchor-select");
const select2 = document.querySelector("#anchor2-anchor-select");
// Store references to all the anchors in a NodeList (array-like)
const anchors = document.querySelectorAll("#anchor-container > div");

// Set the same change event handler on both select menus
select1.addEventListener("change", updateAnchorNames);
select2.addEventListener("change", updateAnchorNames);

function updateAnchorNames() {
  // Remove all anchor names from all anchors
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
    anchors[value1].style.anchorName = "--myAnchor1, --myAnchor2";
  } else {
    // If they are not the same, set the anchor names separately
    // on each selected anchor
    anchors[value1].style.anchorName = "--myAnchor1";
    anchors[value2].style.anchorName = "--myAnchor2";
  }
}
```

#### Result

Select different values from the drop-down menus to change the anchors that the elements are positioned relative to.

{{ EmbedLiveSample("Multiple positioned elements and anchors", "100%", "400") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("anchor-name")}}
- HTML [`anchor`](/en-US/docs/Web/HTML/Global_attributes/anchor) attribute
- [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module
- [Using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using) guide
