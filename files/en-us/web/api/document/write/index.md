---
title: document.write()
slug: Web/API/Document/write
page-type: web-api-instance-method
browser-compat: api.Document.write
---

{{ApiRef("DOM")}}

> **Warning:** Use of the `document.write()` method is strongly discouraged.
>
> As [the HTML spec itself warns](<https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#document.write()>):
>
> > This method has very idiosyncratic behavior. In some cases, this method can affect the state of the [HTML parser](https://html.spec.whatwg.org/multipage/parsing.html#html-parser) while the parser is running, resulting in a DOM that does not correspond to the source of the document (e.g. if the string written is the string "`<plaintext>`" or "`<!--`"). In other cases, the call can clear the current page first, as if [`document.open()`](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-document-open) had been called. In yet more cases, the method is simply ignored, or throws an exception. Users agents are [explicitly allowed to avoid executing `script` elements inserted via this method](https://html.spec.whatwg.org/multipage/parsing.html#document-written-scripts-intervention). And to make matters even worse, the exact behavior of this method can in some cases be dependent on network latency, which can lead to failures that are very hard to debug. For all these reasons, use of this method is strongly discouraged.
> > Therefore, avoid using `document.write()` — and if possible, update any existing code that is still using it.

The **`document.write()`** method writes a string of text to a document stream opened by {{domxref("document.open()")}}.

> **Note:** Because `document.write()` writes to the document **stream**, calling `document.write()` on a closed (loaded) document automatically calls `document.open()`, [which will clear the document](/en-US/docs/Web/API/Document/open#notes).

## Syntax

```js-nolint
write(markup)
```

### Parameters

- `markup`
  - : A string containing the text to be written to the document.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```html
<html lang="en">
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

{{EmbedLiveSample("Examples")}}

## Notes

The text you write is parsed into the document's structure model. In the example above, the `h1` element becomes a node in the document.

Writing to a document that has already loaded without calling {{domxref("document.open()")}} will automatically call `document.open()`. After writing, call {{domxref("document.close()")}} to tell the browser to finish loading the page.

If the `document.write()` call is embedded within an inline HTML `<script>` tag, then it will not call `document.open()`. For example:

```html
<script>
  document.write("<h1>Main title</h1>");
</script>
```

> **Note:** `document.write()` and {{domxref("document.writeln")}} do not work in XHTML documents (you'll get an "Operation is not supported" \[`NS_ERROR_DOM_NOT_SUPPORTED_ERR`] error in the error console). This happens when opening a local file with the .xhtml file extension or for any document served with an `application/xhtml+xml` {{Glossary("MIME type")}}. More information is available in the [W3C XHTML FAQ](https://www.w3.org/MarkUp/2004/xhtml-faq#docwrite).

> **Note:** Using `document.write()` in [deferred](/en-US/docs/Web/HTML/Element/script#defer) or [asynchronous](/en-US/docs/Web/HTML/Element/script#async) scripts will be ignored and you'll get a message like "A call to `document.write()` from an asynchronously-loaded external script was ignored" in the error console.

> **Note:** In Edge only, calling `document.write()` more than once in an {{HTMLElement("iframe")}} causes the error "SCRIPT70: Permission denied".

> **Note:** Starting with version 55, Chrome will not execute `<script>` elements injected via `document.write()` when specific conditions are met. For more information, refer to [Intervening against document.write()](https://developer.chrome.com/blog/removing-document-write/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("element.innerHTML")}}
- {{domxref("document.createElement()")}}
