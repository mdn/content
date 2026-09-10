---
title: "MathMLAnchorElement: pathname property"
short-title: pathname
slug: Web/API/MathMLAnchorElement/pathname
page-type: web-api-instance-property
browser-compat: api.MathMLAnchorElement.pathname
---

{{APIRef("MathML")}}

The **`pathname`** property of the {{domxref("MathMLAnchorElement")}} interface is a string containing an initial `'/'` followed by the path of the URL not including the query string or fragment (or the empty string if there is no path).

See {{domxref("URL.pathname")}} for more information.

## Value

A string.

## Examples

### Basic usage

Given this MathML:

```html
<math>
  <a id="myAnchor" href="https://example.com/subsection#examples"> ... </a>
</math>
```

you can get the `pathname` of the anchor like this:

```js
const mathAnchor = document.getElementById("myAnchor");
mathAnchor.pathname; // returns '/subsection'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The MathML [`<a>`](/en-US/docs/Web/MathML/Reference/Element/a) element
