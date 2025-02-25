---
title: "Document: writeln() method"
short-title: writeln()
slug: Web/API/Document/writeln
page-type: web-api-instance-method
browser-compat: api.Document.writeln
---

{{ ApiRef("DOM") }}

Writes a string of text followed by a newline character to a document.

## Syntax

```js-nolint
writeln(line)
```

### Parameters

- `line`
  - : A string containing a line of text.

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
