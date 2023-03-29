---
title: HTMLMetaElement
slug: Web/API/HTMLMetaElement
page-type: web-api-interface
browser-compat: api.HTMLMetaElement
---

{{ APIRef("HTML DOM") }}

The **`HTMLMetaElement`** interface contains descriptive metadata about a document provided in HTML as [`<meta>`](/en-US/docs/Web/HTML/Element/meta) elements.
This interface inherits all of the properties and methods described in the {{domxref("HTMLElement")}} interface.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLMetaElement.charset")}}
  - : The character encoding for a HTML document.
- {{domxref("HTMLMetaElement.content")}}
  - : The 'value' part of the name-value pairs of the document metadata.
- {{domxref("HTMLMetaElement.httpEquiv")}}
  - : The name of the pragma directive, the HTTP response header, for a document.
- {{domxref("HTMLMetaElement.media")}}
  - : The media context for a `theme-color` metadata property.
- {{domxref("HTMLMetaElement.name")}}
  - : The 'name' part of the name-value pairs defining the named metadata of a document.
- {{domxref("HTMLMetaElement.scheme")}} {{deprecated_inline}}
  - : Defines the scheme of the value in the {{domxref("HTMLMetaElement.content")}} attribute.
    This is deprecated and should not be used on new web pages.

## Instance methods

_No specific method; inherits methods from its parent, {{domxref("HTMLElement")}}._

## Examples

The following two examples show a general approach to using the `HTMLMetaElement` interface.
For specific examples, see the pages for the individual properties as described in the [Instance properties](#instance_properties) section above.

### Setting the page description metadata

The following example creates a new `<meta>` element with a `name` attribute set to [`description`](/en-US/docs/Web/HTML/Element/meta/name#standard_metadata_names_defined_in_the_html_specification).
The `content` attribute sets a description of the document and is appended to the document `<head>`:

```js
let meta = document.createElement("meta");
meta.name = "description";
meta.content =
  "The <meta> element can be used to provide document metadata in terms of name-value pairs, with the name attribute giving the metadata name, and the content attribute giving the value.";
document.head.appendChild(meta);
```

### Setting the viewport metadata

The following example shows how to create a new `<meta>` element with a `name` attribute set to [`viewport`](/en-US/docs/Web/HTML/Element/meta/name#standard_metadata_names_defined_in_other_specifications).
The `content` attribute sets the viewport size and is appended to the document `<head>`:

```js
var meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1";
document.head.appendChild(meta);
```

For more information on setting the viewport, see [Viewport basics](/en-US/docs/Web/HTML/Viewport_meta_tag#viewport_basics).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{HTMLElement("meta")}}
