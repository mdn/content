---
title: "MathMLAnchorElement: hreflang property"
short-title: hreflang
slug: Web/API/MathMLAnchorElement/hreflang
page-type: web-api-instance-property
browser-compat: api.MathMLAnchorElement.hreflang
---

{{APIRef("MathML")}}

The **`hreflang`** property of the {{domxref("MathMLAnchorElement")}} interface is a string that is the language of the linked resource.

It reflects the `hreflang` attribute of the [`<a>`](/en-US/docs/Web/MathML/Reference/Element/a) element.

Web browsers and search engines may use this information to understand the language of the linked content better, but they are not required to follow it. The value provided for the `hreflang` attribute must adhere to the {{glossary("BCP 47 language tag")}} format. If not, it is ignored.

Web browsers do not rely solely on the `hreflang` attribute after fetching the linked resource. Instead, they use language information directly associated with the resource (e.g., through HTTP headers) to determine its language.

## Value

A string that contains a language tag, or the empty string (`""`) if there is no `hreflang` attribute.

## Examples

### Basic usage

Given this MathML:

```html
<math>
  <a id="myAnchor" href="https://example.com#examples" hreflang="en-CA">
    ...
  </a>
</math>
```

you can get the `hreflang` of the anchor like this:

```js
const mathAnchor = document.getElementById("myAnchor");
mathAnchor.hreflang; // returns 'en-CA'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The MathML [`<a>`](/en-US/docs/Web/MathML/Reference/Element/a) element
