---
title: "document: writeln() method"
short-title: writeln()
slug: Web/API/Document/writeln
page-type: web-api-instance-method
browser-compat: api.Document.writeln
---

{{ ApiRef("DOM") }}

> **Warning:** Use of the `document.writeln()` method is strongly discouraged.
>
> As [the HTML spec itself warns](<https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#document.write()>):
>
> > This method has very idiosyncratic behavior. In some cases, this method can affect the state of the [HTML parser](https://html.spec.whatwg.org/multipage/parsing.html#html-parser) while the parser is running, resulting in a DOM that does not correspond to the source of the document (e.g. if the string written is the string "`<plaintext>`" or "`<!--`"). In other cases, the call can clear the current page first, as if [`document.open()`](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-document-open) had been called. In yet more cases, the method is simply ignored, or throws an exception. Users agents are [explicitly allowed to avoid executing `script` elements inserted via this method](https://html.spec.whatwg.org/multipage/parsing.html#document-written-scripts-intervention). And to make matters even worse, the exact behavior of this method can in some cases be dependent on network latency, which can lead to failures that are very hard to debug. For all these reasons, use of this method is strongly discouraged.
> > Therefore, avoid using `document.writeln()` — and if possible, update any existing code that is still using it.

Writes a string of text followed by a newline character to a document.

## Syntax

```js-nolint
writeln(line)
```

### Parameters

- `line` is string containing a line of text.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
document.writeln("<p>enter password:</p>");
```

## Notes

**document.writeln** is the same as {{domxref("document.write")}} but adds a newline.

> **Note:** **document.writeln** (like **document.write**) does not work in XHTML documents (you'll get a "Operation is not supported" (`NS_ERROR_DOM_NOT_SUPPORTED_ERR`) error on the error console). This is the case if opening a local file with a .xhtml file extension or for any document served with an application/xhtml+xml MIME type. More information is available in the [W3C XHTML FAQ](https://www.w3.org/MarkUp/2004/xhtml-faq#docwrite).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
