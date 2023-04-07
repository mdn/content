---
title: "HTMLMetaElement: charset property"
short-title: charset
slug: Web/API/HTMLMetaElement/charset
page-type: web-api-instance-property
---

{{APIRef("HTML DOM")}}

The **`HTMLMetaElement.charset`** property is a string that specifies the {{Glossary("character_encoding", "character encoding")}} used in a document.
Using **non-UTF-8 character encodings is strongly discouraged** as this can create unexpected results on form submission and [URL encoding](https://en.wikipedia.org/wiki/URL_encoding).
For more details, see [Character encodings in HTML](/en-US/docs/Web/HTML/Element/meta#charset).

## Value

A string.

## Examples

### Reading character encoding from a meta element

The following example queries a `<meta>` element that contains a `charset` attribute.
The `charset` value is logged to the console to display the character encoding of the document:

```js
// given <meta charset="utf-8">
let meta = document.querySelector("meta[charset]");
console.log(meta.attributes["charset"].value);
// "utf-8"
```

### Creating a meta element

The following example creates a new `<meta>` element with a `charset` attribute set to `utf-8` and appends it to the document `<head>`:

```js
let meta = document.createElement("meta");
meta.charset = "utf-8";
document.head.appendChild(meta);
```

## See also

- {{HTMLElement("meta")}}
