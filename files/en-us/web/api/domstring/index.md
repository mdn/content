---
title: DOMString
slug: Web/API/DOMString
tags:
  - API
  - DOM
  - Reference
  - String
---
{{APIRef("DOM")}}

A **`DOMString`** is a sequence of 16-bit unsigned integers, typically interpreted as UTF-16 [code units](https://www.unicode.org/glossary/#code_unit). This corresponds exactly to the JavaScript [primitive String type](https://tc39.es/ecma262/#sec-ecmascript-language-types-string-type). When a `DOMString` is provided to JavaScript, it maps directly to the corresponding {{jsxref("String")}}.

When a Web API accepts a `DOMString`, the value provided will be stringified, using the [`ToString`](https://tc39.es/ecma262/#sec-tostring) abstract operation. (For types other than Symbol, this has the same behavior as the {{jsxref("String/String", "String()")}} function.)

Certain Web APIs accepting a `DOMString` have an additional legacy behavior, where passing {{jsxref("null")}} stringifies to the empty string instead of the usual `"null"`.

## Specifications

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Specification</th>
      <th scope="col">Status</th>
      <th scope="col">Comment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{SpecName('WebIDL', '#idl-DOMString', 'DOMString')}}
      </td>
      <td>{{Spec2('WebIDL')}}</td>
      <td></td>
    </tr>
    <tr>
      <td>{{SpecName('WebIDL', '#es-DOMString')}}</td>
      <td>{{Spec2('WebIDL')}}</td>
      <td>
        This defines how JavaScript values are converted
        to <code>DOMString</code> and vice versa.
      </td>
    </tr>
  </tbody>
</table>

## See also

- JavaScript {{jsxref("String")}}
- {{domxref("USVString")}}
- {{domxref("CSSOMString")}}
- [Binary strings](/en-US/docs/Web/API/DOMString/Binary)
