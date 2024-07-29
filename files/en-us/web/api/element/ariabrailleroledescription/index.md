---
title: "Element: ariaBrailleRoleDescription property"
short-title: ariaBrailleRoleDescription
slug: Web/API/Element/ariaBrailleRoleDescription
page-type: web-api-instance-property
browser-compat: api.Element.ariaBrailleRoleDescription
---

{{APIRef("DOM")}}

The **`ariaBrailleRoleDescription`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-brailleroledescription`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-brailleroledescription) attribute, which defines the ARIA braille role description of the element.

This property may be used to provide an abbreviated version of the [`aria-roledescription`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription) value.
It should only be used if `aria-roledescription` is present and in the rare case where it is too verbose for braille.
The [`aria-brailleroledescription`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-brailleroledescription) contains additional information about when the property should be set.

## Value

- `<string>`
  - : The value is a string, an unconstrained value type, that is intended to be converted into braille.

## Examples

### Getting and setting ariaBrailleRoleDescription

This example shows how you can get and set the `ariaBrailleRoleDescription` property.

#### HTML

First we define an `<article>` element that would be use as a slide in a slideshow.
We set the `aria-roledescription` attribute to "slide", and its braille contraction in `aria-brailleroledescription` to "sld".

```html
<article
  id="article"
  aria-roledescription="slide"
  aria-brailleroledescription="sld"
  aria-labelledby="slide1heading">
  <h1 id="slide1heading">Welcome to my talk</h1>
</article>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 70px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

To get the element's role description we use the `ariaBrailleRoleDescription` property.
The code below first gets and then logs the value.
It then sets the braille role description to "sd" and logs the value again (for illustration only — in production code you would not set this value).

```js
const article = document.getElementById("article");
log(article.ariaBrailleRoleDescription);
article.ariaBrailleRoleDescription = "sd";
log(article.ariaBrailleRoleDescription);
```

#### Result

{{EmbedLiveSample("Getting and setting ariaBrailleRoleDescription")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
