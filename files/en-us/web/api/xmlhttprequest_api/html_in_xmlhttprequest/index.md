---
title: HTML in XMLHttpRequest
slug: Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest
page-type: guide
browser-compat: api.XMLHttpRequest
sidebar:
  - defaultapisidebar:
      - XMLHttpRequest API
---

The W3C {{domxref("XMLHttpRequest")}} specification adds [HTML](/en-US/docs/Web/HTML) parsing support to {{domxref("XMLHttpRequest")}}, which originally supported only {{Glossary("XML")}} parsing. This feature allows Web apps to obtain an HTML resource as a parsed {{Glossary("DOM")}} using `XMLHttpRequest`.

To get an overview of how to use `XMLHttpRequest` in general, see [Using XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest).

## Limitations

To discourage the synchronous use of `XMLHttpRequest`, HTML support is not available in the synchronous mode. Also, HTML support is only available if the {{domxref("XMLHttpRequest.responseType", "responseType")}} property has been set to `"document"`. This limitation avoids wasting time parsing HTML uselessly when legacy code uses `XMLHttpRequest` in the default mode to retrieve {{domxref("XMLHttpRequest.responseText", "responseText")}} for `text/html` resources. Also, this limitation avoids problems with legacy code that assumes that {{domxref("XMLHttpRequest.responseXML", "responseXML")}} is `null` for HTTP error pages (which often have a `text/html` response body).

## Usage

Retrieving an HTML resource as a DOM using {{domxref("XMLHttpRequest")}} works just like retrieving an XML resource as a DOM using `XMLHttpRequest`, except you can't use the synchronous mode and you have to explicitly request a document by assigning the string `"document"` to the {{domxref("XMLHttpRequest.responseType", "responseType")}} property of the `XMLHttpRequest` object after calling {{domxref("XMLHttpRequest.open", "open()")}} but before calling {{domxref("XMLHttpRequest.send", "send()")}}.

```js
const xhr = new XMLHttpRequest();
xhr.onload = () => {
  console.log(xhr.responseXML.title);
};
xhr.open("GET", "file.html");
xhr.responseType = "document";
xhr.send();
```

## Character encoding

If the character encoding is declared in the HTTP {{HTTPHeader("Content-Type")}} header, that character encoding is used. Failing that, if there is a byte order mark, the encoding indicated by the byte order mark is used. Failing that, if there is a {{HTMLElement("meta")}} element that declares the encoding within the first 1024 bytes of the file, that encoding is used. Otherwise, the file is decoded as UTF-8.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XMLHttpRequest")}}
- [Using XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
