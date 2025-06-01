---
title: "ElementInternals: ariaBrailleLabel property"
short-title: ariaBrailleLabel
slug: Web/API/ElementInternals/ariaBrailleLabel
page-type: web-api-instance-property
browser-compat: api.ElementInternals.ariaBrailleLabel
---

{{APIRef("Web Components")}}

The **`ariaBrailleLabel`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-braillelabel`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel) attribute, which defines the ARIA braille label of the element.

This element label may be used by assistive technologies that can present content in braille, but should only be set if a braille-specific label would improve the user experience.
The [`aria-braillelabel`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel) contains additional information about when the property should be set.

## Value

A string that is intended to be converted into braille.

## Examples

This example shows how to get and set the `ariaBrailleLabel` property.

Assuming we have defined a custom element called `<star-rating>`, in which the element internal's braille label is set to be the value of the element's `aria-braillelabel` attribute:

```js
class StarRating extends HTMLElement {
  constructor() {
    super();
    this._internals = this.attachInternals();
    this._internals.ariaRole = "slider";
    this._internals.ariaBrailleLabel = this.ariaBrailleLabel;
  }

  // …
}

customElements.define("star-rating", StarRating);
```

And we include the custom element with label text "3 out of 5 stars" and an `aria-braillelabel` attribute with a value of `"3"`.
This allows a braille display to show "slider 3" in braille rather than the more verbose "slider gra 3 out of 5 stars".

```html
<star-rating id="rate" aria-braillelabel="3">3 out of 5 stars</star-rating>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logInternals = document.querySelector("#log");
function log(text) {
  logInternals.innerText = `${logInternals.innerText}${text}\n`;
  logInternals.scrollTop = logInternals.scrollHeight;
}
```

The code uses the `ariaBrailleLabel` property to get and set the braille label.

```js
const el = document.querySelector("star-rating");
log(el._internals.ariaBrailleLabel);
el._internals.ariaBrailleLabel += "*";
log(el._internals.ariaBrailleLabel);
```

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ElementInternals.ariaBrailleRoleDescription")}}
