---
title: position-anchor
slug: Web/CSS/position-anchor
page-type: css-property
status:
  - experimental
browser-compat: css.properties.position-anchor
---

{{CSSRef}}{{seecompattable}}

The **`position-anchor`** [CSS](/en-US/docs/Web/CSS) property specifices the anchor name of the **anchor element** (i.e. an element that has an **anchor name** set on it via the {{cssxref("anchor-name")}} property) it is associated with.

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

This property is only relevant to "positioned" elements, elements and pseudo elements that have a {{cssxref("position")}} of `absolute` or `fixed` set.

To position an element relative to an anchor element, the positioned element requires three features: an association, a position, and a location. The `position-anchor` and {{htmlelement("anchor-name")}} properties provide the association.

The anchor element accepts one or more `<dashed-ident>` anchor names set on it via the `anchor-name` property. When one of those names is then set as the value of the positioned element's `position-anchor` property, the two elements are associated by the name and tethered by the positioning.

If there are multiple anchor elements with the anchor name listed in the the `position-anchor` propert, the positioned element will be associated with the last anchor element with that anchor name in the source order.

To place the positioned element in a specific location relative to its anchor, an anchor positioning feature such as the {{cssxref("anchor()")}} function on an {{glossary("inset properties", "inset property")}} or the {{cssxref("inset-area")}} property is needed.

If the associated anchor is hidden, for example with {{cssxref("display", "display: none")}} or {{cssxref("visibility", "visibility: hidden")}}, or if it is part of the [skipped contents](/en-US/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents) of another element due to it having {{cssxref("content-visibility", "content-visibility: hidden")}} set on it, the anchor positioned element will not be displayed.

The `position-anchor` property is supported on all elements that are positioned, including [pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements) like {{cssxref("::before")}} and {{cssxref("::after")}}. Pseudo elements are implicitly anchored to the same element as the pseudo-element's originating element, unless otherwise specified.

For more information on anchor features and usage, see the [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module landing page and the [Using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using) guide.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

See the `anchor-name` documentation for [basic usage](/en-US/docs/Web/CSS/anchor-name#basic_usage) and additional [`position-anchor` examples](/en-US/docs/Web/CSS/anchor-name#examples).

### A range thumb as anchor

In this example, an {{htmlelement("output")}} is positioned relative to an anchor that is the thumb of a range input.

#### HTML

We include an input of type range, and an output that will include the value of the range that is updated via JavaScript.

```html
<label for="slider">Change the value:</label>
<input type="range" min="0" max="100" value="25" id="slider" />
<output>25</output>
```

#### CSS

We give the thumb, a pseudo-element, an anchor name of `thumb`. We then reference that name as the value of the `<output>` element's `position-anchor` property, which is positioned `fixed` to the range, with

```css hidden
body {
  display: grid;
  place-items: center;
  height: 100vh;
  font-size: 1.4rem;
}
input {
  width: 33vw;
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

We include an event listener that updates the content of the `<output.` when the value of the `<input>` changes:

```js
const input = document.querySelector("input");
const output = document.querySelector("output");

input.addEventListener("change", (event) => {
  output.innerText = `${input.value}`;
});
```

#### Results

The output is anchored to the thumb. Change the value. If anchor positioning is supported in your browser, the value will be above and to the right of the thumb, no matter where it is along the slider.

{{ EmbedLiveSample("A range thumb as anchor", "100%", "225") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("anchor-name")}}
- HTML [`anchor`](/en-US/docs/Web/HTML/Global_attributes/anchor) attribute
- [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module
- [Using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using) guide
