---
title: Node.baseURI
slug: Web/API/Node/baseURI
tags:
  - API
  - HTML
  - NeedsSpecTable
  - Node
  - Property
  - Read-only
browser-compat: api.Node.baseURI
---
{{APIRef("DOM")}}

The **`baseURI`** read-only property returns the absolute base
URL of a {{domxref("Node")}}.

The base URL is used to resolve relative URLs when the browser needs to obtain an
absolute URL, for example when processing the HTML {{HTMLElement("img")}} element's
`src` attribute or XML `{{glossary("xlink")}}:href` attribute.

In most cases the base URL is the location of the document, but it can be affected by
many factors, including the {{HTMLElement("base")}} element in HTML and the
[`xml:base`](/en-US/docs/Web/XML/xml:base) attribute in XML.

## Syntax

```js
var nodeBaseURI = node.baseURI;
```

### Value

A {{ domxref("DOMString") }} representing the base URL of the specified
{{domxref("Node")}}. It may be `null` if unable to obtain an absolute URI.
Although this property is read-only, its value may change in certain situations (see
below).

## Details

### The base URL of a document

The base URL of a _document_ defaults to the document's address (as displayed by
the browser and available in {{domxref("window.location")}}), but it can be changed:

- When an HTML {{HTMLElement("base")}} tag is found in the document
- When the document is new (created dynamically)

See the [Base URLs section of
the HTML Living standard](https://developers.whatwg.org/urls.html#base-urls) for details.

You can use `{{domxref("document")}}.baseURI` to obtain the base URL of a
document. Note that obtaining the base URL for a document may return different URLs over
time if the {{HTMLElement("base")}} tags or the document's location change.

### The base URL of an element

The base URL of an _element_ in HTML normally equals the base URL of the
document the node is in.

If the document contains [`xml:base`](/en-US/docs/Web/XML/xml:base)
attributes (which you shouldn't do in HTML documents), the
`element.baseURI` takes the `xml:base` attributes of
element's parents into account when computing the base URL. See [xml:base](/en-US/docs/Web/XML/xml:base) for details.

You can use `{{domxref("element")}}.baseURI` to obtain the base URL of an
element.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("base")}} element (HTML)
- [`xml:base`](/en-US/docs/Web/XML/xml:base) attribute (XML
  documents).
