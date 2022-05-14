---
title: USVString
slug: Web/API/USVString
tags:
  - API
  - DOM
  - Reference
  - String
  - WebIDL
spec-urls:
  - https://webidl.spec.whatwg.org/#idl-USVString
  - https://webidl.spec.whatwg.org/#es-USVString
---
{{APIRef("DOM")}}

A **`USVString`** is a sequence of [Unicode scalar values](http://www.unicode.org/glossary/#unicode_scalar_value). This definition differs from that of {{domxref("DOMString")}} or the JavaScript {{jsxref("String")}} type in that it always represents a valid sequence suitable for text processing, while the latter can contain surrogate code points. The `USVString` type is generally found in APIs that perform text processing, while {{domxref("DOMString")}} is used by most other APIs.

When a `USVString` is provided to JavaScript, it maps to the JavaScript primitive {{jsxref("String")}} with the UTF-16 encoding of its sequence of Unicode scalar values.

When a Web API accepts a `USVString`, the JavaScript value provided is first stringified, in the same way as for {{domxref("DOMString")}}. The resulting string is then further converted to `USVString` by replacing any surrogate code points (or equivalently, any unpaired surrogate code units) with the Unicode "replacement character" U+FFFD (�).

## Specifications

{{Specifications}}

## See also

- {{JSxRef("String")}}
- {{DOMxRef("DOMString")}}
- {{DOMxRef("CSSOMString")}}
- [Binary strings](/en-US/docs/Web/API/DOMString/Binary)
