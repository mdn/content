---
title: USVString
slug: Web/API/USVString
tags:
  - API
  - DOM
  - Reference
  - String
  - WebIDL
---
{{APIRef("DOM")}}

A **`USVString`** is a sequence of [Unicode scalar values](http://www.unicode.org/glossary/#unicode_scalar_value). This definition differs from that of {{domxref("DOMString")}} or the JavaScript {{jsxref("String")}} type in that it always represents a valid sequence suitable for text processing, while the latter can contain surrogate code points. The `USVString` type is generally found in APIs that perform text processing, while {{domxref("DOMString")}} is used by most other APIs.

When a `USVString` is provided to JavaScript, it maps to the JavaScript primitive {{jsxref("String")}} with the UTF-16 encoding of its sequence of Unicode scalar values.

When a Web API accepts a `USVString`, the JavaScript value provided is first stringified, in the same way as for {{domxref("DOMString")}}. The resulting string is then further converted to `USVString` by replacing any surrogate code points (or equivalently, any unpaired surrogate code units) with the Unicode "replacement character" U+FFFD (�).

## Specifications

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">Specification</th>
      <th scope="col">Status</th>
      <th scope="col">Comment</th>
    </tr>
    <tr>
      <td>
        {{SpecName("WebIDL", "#idl-USVString", "USVString")}}
      </td>
      <td>{{Spec2("WebIDL")}}</td>
      <td>Initial definition of the <code>USVString</code> type itself.</td>
    </tr>
    <tr>
      <td>{{SpecName("WebIDL", "#es-USVString")}}</td>
      <td>{{Spec2("WebIDL")}}</td>
      <td>
        This defines how JavaScript values are converted to
        <code>USVString</code> and vice versa.
      </td>
    </tr>
  </tbody>
</table>

## See also

- {{JSxRef("String")}}
- {{DOMxRef("DOMString")}}
- {{DOMxRef("CSSOMString")}}
- [Binary strings](/en-US/docs/Web/API/DOMString/Binary)
