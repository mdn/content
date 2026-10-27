---
title: "MathMLAnchorElement: download property"
short-title: download
slug: Web/API/MathMLAnchorElement/download
page-type: web-api-instance-property
status:
  - experimental
  - non-standard
browser-compat: api.MathMLAnchorElement.download
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}{{non-standard_header}}

The **`download`** property of the {{domxref("MathMLAnchorElement")}} interface is a string indicating that the linked resource is intended to be downloaded rather than displayed in the browser. The value, if any, represents the proposed name of the file.

It reflects the `download` attribute of the [`<a>`](/en-US/docs/Web/MathML/Reference/Element/a) element.

## Value

A string.

## Examples

### Basic usage

Given this MathML:

```html
<math>
  <a id="myAnchor" href="/download?file=67530dc" download="booklet.pdf">...</a>
</math>
```

you can get the `download` value of the anchor like this:

```js
const mathAnchor = document.getElementById("myAnchor");
mathAnchor.download; // "booklet.pdf"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The MathML [`<a>`](/en-US/docs/Web/MathML/Reference/Element/a) element
