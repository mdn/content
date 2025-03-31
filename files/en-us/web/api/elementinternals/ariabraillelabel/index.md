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

- `<string>`
  - : The value is a string, an unconstrained value type, that is intended to be converted into braille.

## Examples

### Getting and setting ariaBrailleLabel

This example shows how to get and set the `ariaBrailleLabel` property.

#### HTML

First we define a button with label text "3 out of 5 stars" and an `aria-braillelabel` attribute with a value of `"\*\*\*"`.
This allows a braille display to show "btn \*\*\*" in braille rather than the more verbose "btn gra 3 out of 5 stars".

```html
<button id="button" aria-braillelabel="\*\*\*">3 out of 5 stars</button>
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

#### JavaScript

```js hidden
const logElementInternals = document.querySelector("#log");
function log(text) {
  logElementInternals.innerText = `${logElementInternals.innerText}${text}\n`;
  logElementInternals.scrollTop = logElementInternals.scrollHeight;
}
```

The code then uses the button's `ariaBrailleLabel` property to first get and log the braille label.
It then sets the braille label to "3\*" and logs the value again.

```js
const button = document.getElementById("button");
log(button.ariaBrailleLabel);
button.ariaBrailleLabel = "3*";
log(button.ariaBrailleLabel);
```

#### Result

{{EmbedLiveSample("Getting and setting ariaBrailleLabel")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
