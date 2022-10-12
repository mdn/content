---
title: HTMLMetaElement
slug: Web/API/HTMLMetaElement
page-type: web-api-interface
tags:
  - API
  - HTML DOM
  - Interface
  - Reference
browser-compat: api.HTMLMetaElement
---

{{ APIRef("HTML DOM") }}

The **`HTMLMetaElement`** interface contains descriptive metadata about a document provided in HTML as [`<meta>` elements](/en-US/docs/Web/HTML/Element/meta).
It inherits all of the properties and methods described in the {{domxref("HTMLElement")}} interface.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLMetaElement.charset")}}
  - : The character encoding for a HTML document.
- {{domxref("HTMLMetaElement.content")}}
  - : The 'value' part of name/value pairs of document metadata.
- {{domxref("HTMLMetaElement.httpEquiv")}}
  - : The name of an HTTP response header to define for a document.
- {{domxref("HTMLMetaElement.media")}}
  - : The media context for a metadata property.
- {{domxref("HTMLMetaElement.name")}}
  - : The 'name' part of name/value pairs defining metadata of a document.
- {{domxref("HTMLMetaElement.scheme")}} {{deprecated_inline}}
  - : Defines the scheme of the value in the {{domxref("HTMLMetaElement.content")}} attribute.
    This is deprecated and should not be used on new web pages.

## Instance methods

_No specific method; inherits methods from its parent, {{domxref("HTMLElement")}}._

## Examples

The following teo examples show a general approach to using the `HTMLMetaElement` interface.
For specific examples, see the pages for the individual properties as described in the [Instance properties](#instance_properties) above.

### Setting page description metadata

Creating a new meta element with `description` as a name and setting a `content` value:

```js
let meta = document.createElement("meta");
meta.name = "description";
meta.content =
  "The <meta> element can be used to provide document metadata in terms of name-value pairs, with the name attribute giving the metadata name, and the content attribute giving the value.";
document.head.appendChild(meta);
```

### Setting the viewport

```js
var meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1";
document.head.appendChild(meta);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{HTMLElement("meta")}}
