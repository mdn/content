---
title: "HTMLMetaElement: content property"
short-title: content
slug: Web/API/HTMLMetaElement/content
page-type: web-api-instance-property
browser-compat: api.HTMLMetaElement.content
---

{{APIRef("HTML DOM")}}

The **`HTMLMetaElement.content`** property gets or sets the `content` attribute of pragma directives and named {{htmlelement("meta")}} data in conjunction with {{domxref("HTMLMetaElement.name")}} or {{domxref("HTMLMetaElement.httpEquiv")}}.
For more information, see the [content](/en-US/docs/Web/HTML/Element/meta#content) attribute.

## Value

A string.

## Examples

### Reading meta element content

The following example queries a `<meta>` element that contains a `name` attribute with the value of `keywords`.
The `content` value is logged to the console to display the [keywords](/en-US/docs/Web/HTML/Element/meta/name#standard_metadata_names_defined_in_the_html_specification) of the document:

```js
// given <meta name="keywords" content="documentation, HTML, web">
const meta = document.querySelector("meta[name='keywords']");
console.log(meta.content);
// "documentation, HTML, web"
```

### Creating a meta element with content

The following example creates a new `<meta>` element with a `name` attribute set to [`description`](/en-US/docs/Web/HTML/Element/meta/name#standard_metadata_names_defined_in_the_html_specification).
The `content` attribute sets a description of the document and is appended to the document `<head>`:

```js
const meta = document.createElement("meta");
meta.name = "description";
meta.content =
  "The <meta> element can be used to provide document metadata in terms of name-value pairs, with the name attribute giving the metadata name, and the content attribute giving the value.";
document.head.appendChild(meta);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("meta")}}
- {{domxref("HTMLMetaElement.name")}}
- {{domxref("HTMLMetaElement.httpEquiv")}}
- [Learn: Metadata in HTML](/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#metadata_the_meta_element)
