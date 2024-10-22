---
title: position-visibility
slug: Web/CSS/position-visibility
page-type: css-property
status:
  - experimental
browser-compat: css.properties.position-visibility
---

{{CSSRef}}{{seecompattable}}

The **`position-visibility`** [CSS](/en-US/docs/Web/CSS) property enables conditionally hiding an anchor-positioned element depending on, for example, whether it is overflowing its containing element or the viewport.

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
  - : If the anchor is completely hidden, either by overflowing its containing element (or the viewport) or being covered by other elements, the positioned element will be strongly hidden.
- `no-overflow`
  - : If the positioned element starts to overflow its containing element or the viewport, it will be strongly hidden.

The specification also defines the `anchors-valid` value, which has not yet been implemented in any browser.

## Description

In some situations you might not want to display an anchor-positioned element. For example, if its associated anchor has been scrolled offscreen but the anchor positioned element would otherwise still be partially or fully visible, it might be unclear what it refers to and take up space unnecessarily, so you may want to hide it altogether.

The `position-visibility` property can be used to `always` show the anchor-positioned element, or conditionally hide it if the associated anchor element is completely hidden (`anchors-visible`) or if the anchor-positioned element itself is partially hidden (`no-overflow`).

When an element is hidden due to `position-visibility`, it is referred to as **strongly hidden**. This means that it will act as though it and its descendant elements have a {{cssxref("visibility")}} value of `hidden` set, regardless of what their actual visibility value is.

`position-visibility` should only be used in situations in which hiding the positioned element altogether is preferred. In most cases, it makes more sense to attempt to change the placement of positioned elements when they start to overflow, to keep them on-screen and usable. This can be done with the {{cssxref("position-try-fallbacks")}} property and {{cssxref("@position-try")}} at-rule. See the [Handling overflow: try fallbacks and conditional hiding](/en-US/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) guide for more information.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

This example enables changing the value of an anchor positioned element's `position-visibility` property to demonstrate the effects of each value.

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

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque.
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

The HTML also includes filler text to make the content taller than the viewport so scrolling is required. We've also included a {{htmlelement("fieldset")}} with a group of [radio inputs](/en-US/docs/Web/HTML/Element/input/radio) with different `position-visibility` values. The markup for these is not shown for the sake of brevity.

#### CSS

We style an `anchor` `<div>` as an anchor element and tether the `infobox` `<div>` to it. The relevant CSS is as follows:

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
  position-anchor: --myAnchor;
  position: fixed;
  position-area: top span-all;
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

Select different `position-visibility` values and then scroll the page up and down to see their effects. With `position-visibility: always` set, the positioned element will not be hidden. With `position-visibility: anchors-visible` set, the positioned element will only be visible when the anchor is partially or fully on-screen. With `position-visibility: no-overflow` set, the positioned element will be hidden as soon as it starts to overflow the viewport.

{{ EmbedLiveSample("Basic usage", "100%", "180") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- {{cssxref("position")}}
- {{cssxref("position-area")}}
- [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module
- [Using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using) guide
- [Handling overflow: try fallbacks and conditional hiding](/en-US/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) guide
