---
title: "ElementInternals: ariaBrailleRoleDescription property"
short-title: ariaBrailleRoleDescription
slug: Web/API/ElementInternals/ariaBrailleRoleDescription
page-type: web-api-instance-property
browser-compat: api.ElementInternals.ariaBrailleRoleDescription
---

{{APIRef("Web Components")}}

The **`ariaBrailleRoleDescription`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-brailleroledescription`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription) attribute, which defines the ARIA braille role description of the element.

This property may be used to provide an abbreviated version of the [`aria-roledescription`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription) value.
It should only be used if `aria-roledescription` is present and in the rare case where it is too verbose for braille.
The [`aria-brailleroledescription`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription) contains additional information about when the property should be set.

## Value

A string that is intended to be converted into braille.

## Examples

Assuming we have a custom slide element:

```js
class CustomSlide extends HTMLElement {
  constructor() {
    super();
    this._internals = this.attachInternals();
    this._internals.role = "slide";
  }

  // …
}

customElements.define("custom-slide", CustomSlide);
```

```html hidden
<custom-slide></custom-slide>
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(value) {
  logElement.textContent += `${value}\n`;
}
```

We can retrieve and set the value of the custom element's `aria-brailleroledescription` value:

```js
const customEl = document.querySelector("custom-slide");
log(customEl._internals.ariaBrailleRoleDescription);
customEl._internals.ariaBrailleRoleDescription = "sd";
log(customEl._internals.ariaBrailleRoleDescription);
```

### Result

{{EmbedLiveSample("examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### See also

- [ARIA roles](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles)
