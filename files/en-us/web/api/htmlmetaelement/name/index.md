---
title: "HTMLMetaElement: name property"
short-title: name
slug: Web/API/HTMLMetaElement/name
page-type: web-api-instance-property
browser-compat: api.HTMLMetaElement.name
---

{{APIRef("HTML DOM")}}

The **`HTMLMetaElement.name`** property is used in combination with {{domxref("HTMLMetaElement.content")}} to define the name-value pairs for the metadata of a document.
The `name` attribute defines the metadata name and the `content` attribute defines the value.

## Value

A string.

## Examples

### Reading the metadata name of a meta element

The following example queries the first `<meta>` element in a document.
The `name` value is logged to the console, showing that [keywords](/en-US/docs/Web/HTML/Element/meta/name#standard_metadata_names_defined_in_the_html_specification) have been specified for the document:

```js
// given <meta name="keywords" content="documentation, HTML, web technologies">
const meta = document.querySelector("meta");
console.log(meta.name);
// "keywords"
```

### Creating a meta element with `author` metadata

The following example creates a new `<meta>` element with a `name` attribute set to [`author`](/en-US/docs/Web/HTML/Element/meta/name#standard_metadata_names_defined_in_the_html_specification).
The `content` attribute sets the author of the document and the element is appended to the document `<head>`:

```js
let meta = document.createElement("meta");
meta.name = "author";
meta.content = "Franz Kafka";
document.head.appendChild(meta);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("meta")}}
- [Possible values for the name attribute](/en-US/docs/Web/HTML/Element/meta/name#standard_metadata_names_defined_in_the_html_specification)
