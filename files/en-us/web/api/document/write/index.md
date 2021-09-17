---
title: Document.write()
slug: Web/API/Document/write
tags:
  - API
  - DOM
  - Document
  - Method
  - Reference
  - write
browser-compat: api.Document.write
---
{{ApiRef("DOM")}}

The **`Document.write()`** method writes a string of text to a document stream opened by {{domxref("document.open()")}}.

> **Note:** Because `document.write()` writes to the document **stream**, calling `document.write()` on a closed (loaded) document automatically calls `document.open()`, [which will clear the document](/en-US/docs/Web/API/Document/open#notes).

## Syntax

```js
document.write(markup);
```

### Parameters

- _markup_
  - : A string containing the text to be written to the document.

### Example

```html
<html>

<head>
  <title>Write example</title>

  <script>
    function newContent() {
      document.open();
      document.write("<h1>Out with the old, in with the new!</h1>");
      document.close();
    }
  </script>
</head>

<body onload="newContent();">
  <p>Some original document content.</p>
</body>

</html>
```

{{EmbedLiveSample("Syntax")}}

## Notes

The text you write is parsed into the document's structure model. In the example above, the `h1` element becomes a node in the document.

Writing to a document that has already loaded without calling {{domxref("document.open()")}} will automatically call `document.open()`. After writing, call {{domxref("document.close()")}} to tell the browser to finish loading the page.

If the `document.write()` call is embedded within an inline HTML `<script>` tag, then it will not call `document.open()`. For example:

```html
<script>
  document.write("<h1>Main title</h1>")
</script>
```

> **Note:** `document.write()` and {{domxref("document.writeln")}} [do not work in XHTML documents](/en-US/docs/Archive/Web/Writing_JavaScript_for_HTML) (you'll get an "Operation is not supported" \[`NS_ERROR_DOM_NOT_SUPPORTED_ERR`] error in the error console). This happens when opening a local file with the .xhtml file extension or for any document served with an `application/xhtml+xml` {{Glossary("MIME type")}}. More information is available in the [W3C XHTML FAQ](https://www.w3.org/MarkUp/2004/xhtml-faq#docwrite).

> **Note:** Using `document.write()` in [deferred](/en-US/docs/Web/HTML/Element/script#attr-defer) or [asynchronous](/en-US/docs/Web/HTML/Element/script#attr-async) scripts will be ignored and you'll get a message like "A call to `document.write()` from an asynchronously-loaded external script was ignored" in the error console.

> **Note:** In Edge only, calling `document.write()` more than once in an {{HTMLElement("iframe")}} causes the error "SCRIPT70: Permission denied".

> **Note:** Starting with version 55, Chrome will not execute `<script>` elements injected via `document.write()` when specific conditions are met. For more information, refer to [Intervening against document.write()](https://developers.google.com/web/updates/2016/08/removing-document-write).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("element.innerHTML")}}
- {{domxref("document.createElement()")}}
