---
title: DOMString
slug: Web/API/DOMString
tags:
  - API
  - DOM
  - Reference
  - String
spec-urls:
  - https://webidl.spec.whatwg.org/#idl-DOMString
  - https://webidl.spec.whatwg.org/#es-DOMString
---
{{APIRef("DOM")}}

A **`DOMString`** is a sequence of 16-bit unsigned integers, typically interpreted as UTF-16 [code units](https://www.unicode.org/glossary/#code_unit). This corresponds exactly to the JavaScript [primitive String type](https://tc39.es/ecma262/#sec-ecmascript-language-types-string-type). When a `DOMString` is provided to JavaScript, it maps directly to the corresponding {{jsxref("String")}}.

When a Web API accepts a `DOMString`, the value provided will be stringified, using the [`ToString`](https://tc39.es/ecma262/#sec-tostring) abstract operation. (For types other than Symbol, this has the same behavior as the {{jsxref("String/String", "String()")}} function.)

Certain Web APIs accepting a `DOMString` have an additional legacy behavior, where passing {{jsxref("null")}} stringifies to the empty string instead of the usual `"null"`.

## Specifications

{{Specifications}}

## See also

- JavaScript {{jsxref("String")}}
- {{domxref("USVString")}}
- {{domxref("CSSOMString")}}
- [Binary strings](/en-US/docs/Web/API/DOMString/Binary)
