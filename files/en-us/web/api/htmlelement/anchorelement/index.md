---
title: "HTMLElement: anchorElement property"
short-title: anchorElement
slug: Web/API/HTMLElement/anchorElement
page-type: web-api-instance-property
status:
  - non-standard
browser-compat: api.HTMLElement.anchorElement
---

{{APIRef("HTML DOM")}}{{Non-standard_Header}}

The **`anchorElement`** property of the {{domxref("HTMLElement")}} interface returns a reference to the element's anchor element. This works only in the case of elements associated with their anchors via the [`anchor`](/en-US/docs/Web/HTML/Global_attributes/anchor) HTML attribute, not elements associated with their anchors via the {{cssxref("anchor-name")}} and {{cssxref("position-anchor")}} CSS properties.

For detailed information on anchor usage, see the [CSS Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module landing page.

## Value

An {{domxref("HTMLElement")}} instance representing the element's anchor element, or `null` if it doesn't have one.

## Examples

### Basic usage

#### HTML

In the HTML, we create a {{htmlelement("div")}} element with an [`id`](/en-US/docs/Web/HTML/Global_attributes/id) of `example-anchor`. This will be our anchor element. We then include another `<div>` with a class of `infobox` and an [`anchor`](/en-US/docs/Web/HTML/Global_attributes/anchor) attribute set to `example-anchor`. This designates the first `<div>` as the second `<div>`'s anchor, associating the two together.

We also include a {{htmlelement("p")}} element to output some results into.

```html
<div class="anchor" id="example-anchor">⚓︎</div>

<div class="infobox" anchor="example-anchor">
  <p>This is an information box.</p>
</div>

<p class="output"></p>
```

#### JavaScript

In the JavaScript, we get references to the positioned element and the output element, and then print the value of the positioned element's `anchorElement` property's associated `id` to the output, proving that the anchor element is the positioned element's `anchorElement`.

```js
const posElem = document.querySelector(".infobox");
const outputElem = document.querySelector(".output");
outputElem.textContent = `The positioned element's anchor element is the ${posElem.anchorElement.id}.`;
```

#### Result

The result is as follows.

{{EmbedLiveSample("Basic usage", "100%", 110)}}

## Specifications

This property is not currently a part of any specification. See [https://github.com/whatwg/html/pull/9144](https://github.com/whatwg/html/pull/9144) for an ongoing discussion about it.

## Browser compatibility

{{Compat}}

## See also

- [CSS Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning)
- [Using CSS Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using)
