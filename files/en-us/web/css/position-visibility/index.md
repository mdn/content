---
title: position-visibility
slug: Web/CSS/position-visibility
page-type: css-property
status:
  - experimental
browser-compat: css.properties.position-visibility
---

{{CSSRef}}{{seecompattable}}

The **`position-visibility`** [CSS](/en-US/docs/Web/CSS) property enables conditionally hiding an **anchor-positioned element** depending on, for example, whether it is overflowing its containing element or the viewport.

## Syntax

```css
/* Single values */
position-visibility: always;
position-visibility: anchors-visible;
position-visibility: no-overflow;

/* Global values */
position-visibility: inherit;
position-visibility: initial;
position-visibility: revert;
position-visibility: revert-layer;
position-visibility: unset;
```

### Values

- `always`
  - : The positioned element is always displayed.
- `anchors-visible`
  - : If the anchor is completely hidden, either by overflowing its containing element (or the viewport) or being covered by other elements, the positioned element will be **strongly hidden**.
- `no-overflow`
  - : If the positioned element starts to overflow its containing element or the viewport, it will be strongly hidden.

The specification also defines another value, `anchors-valid`, but this is not yet supported in any browser.

## Description

Use the `position-visibility` property to conditionally hide the anchor-positioned element on which it is set if the associated anchor element is completely hidden (`anchors-visible`) or if just partially hidden (`no-overflow`).

When an element is hidden due to `position-visibility`, it is referred to as **strongly hidden**. This means that it will act as though it and its descendant elements have a {{cssxref("visibility")}} value of `hidden` set, regardless of what their actual visibility value is.

`position-visibility` should only be used in situations in which hiding the positioned element altogether is preferred. In most cases, it makes more sense to attempt to change the position of positioned elements when they start to overflow, to keep them on-screen and usable. This can be be done with the {{cssxref("position-try-options")}} property and associated features.

For detailed information on anchor usage, see the [CSS Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module landing page.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

This example associates a positioned element with an anchor and tethers the positioned element to the top of the anchor. It also provides radio buttons that set different `position-visibility` values on the positioned element to enable visualizing their effects.

#### HTML

We specify two {{htmlelement("div")}} elements; an anchor element with a class of `anchor` and a positioned element with a class of `infobox`.

```html hidden
<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>
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
  <fieldset>
    <legend>Choose position visibility</legend>
    <div>
      <label for="radio-always">always</label>
      <input
        type="radio"
        id="radio-always"
        name="position-visibility"
        value="always"
        checked />
    </div>
    <div>
      <label for="radio-anchors-visible">anchors-visible</label>
      <input
        type="radio"
        id="radio-anchors-visible"
        name="position-visibility"
        value="anchors-visible" />
    </div>
    <div>
      <label for="radio-no-overflow">no-overflow</label>
      <input
        type="radio"
        id="radio-no-overflow"
        name="position-visibility"
        value="no-overflow" />
    </div>
  </fieldset>
</form>
```

We also include a {{htmlelement("form")}} containing [radio inputs](/en-US/docs/Web/HTML/Element/input/radio) to allow you to choose different `position-visibility` values, and some filler text to make the content taller than the viewport so scrolling is required. These are not shown for the sake of brevity.

#### CSS

We first declare the `anchor` `<div>` as an anchor element by setting an anchor name on it via the {{cssxref("anchor-name")}} property:

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

form {
  position: fixed;
  background: white;
  bottom: 2px;
  right: 2px;
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
- {{cssxref("inset-area")}} property to `top span-all` — this has the effect of centering the infobox over the top of the anchor.
- {{cssxref("margin-bottom")}} to `5px` to create space between the infobox and its anchor.
- `position-visibility` to `always`, as a default value when the page first loads.

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
  inset-area: top span-all;
  margin-bottom: 5px;
  position-visibility: always;
}
```

#### JavaScript

We include a [`change`](/en-US/docs/Web/API/HTMLElement/change_event) event handler on the radio buttons so that, when a new value is selected, we update the infobox's `position-visibility` property value.

```js
const infobox = document.querySelector(".infobox");
const radios = document.querySelectorAll('[name="position-visibility"]');

for (const radio of radios) {
  radio.addEventListener("change", setPositionVisibility);
}

function setPositionVisibility(e) {
  infobox.style.positionVisibility = e.target.value;
}
```

#### Result

Select a `position-visibility` value and then scroll the page to see the effect. With `position-visibility: always` set, the positioned element will not be hidden. With `position-visibility: anchors-visible` set, the positioned element will only be visible when the anchor is partially or fully on-screen. With `position-visibility: no-overflow` set, the positioned element will be hidden as soon as it starts to overflow the viewport.

{{ EmbedLiveSample("Basic usage", "100%", "180") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning)
- [Using CSS Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using)
