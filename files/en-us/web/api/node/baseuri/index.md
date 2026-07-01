---
title: "Node: baseURI property"
short-title: baseURI
slug: Web/API/Node/baseURI
page-type: web-api-instance-property
browser-compat: api.Node.baseURI
---

{{APIRef("DOM")}}

The read-only **`baseURI`** property of the {{domxref("Node")}} interface
returns the absolute base URL of the document containing the node.

The base URL is used to resolve relative URLs when the browser needs to obtain an absolute URL, for example when processing the HTML {{HTMLElement("img")}} element's `src` attribute or the `xlink:href` {{deprecated_inline}} or `href` attributes in SVG.

Although this property is read-only, its value is determined by an algorithm each time
the property is accessed, and may change if the conditions changed.

The base URL is determined as follows:

1. By default, the base URL is the location of the document (as determined by {{domxref("window.location")}}).
2. If it is an HTML Document and there is a {{HTMLElement("Base")}} element in the document,
   the `href` value of the _first_ `Base` element with such an attribute is used instead.

## Value

A string representing the base URL of the {{domxref("Node")}}.

## Examples

### Without \<base>

```html
<output>Not calculated</output>
```

```js
const output = document.querySelector("output");
output.value = output.baseURI;
```

{{EmbedLiveSample("Without_base", "100%", 40)}}

### With \<base>

```html
<base href="https://developer.mozilla.org/modified_base_uri/" />
<output>Not calculated</output>
```

```js
const output = document.querySelector("output");
output.value = output.baseURI;
```

{{EmbedLiveSample("With_base", "100%", 40)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("base")}} element.
