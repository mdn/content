---
title: Encoding API
slug: Web/API/Encoding_API
tags:
  - API
  - Encoding
  - Overview
  - Reference
---
{{DefaultAPISidebar("Encoding API")}}

The **Encoding API** provides a mechanism for handling text in various {{Glossary("character encoding", "character encodings")}}, including legacy non-{{Glossary("UTF-8")}} encodings.

The API provides four interfaces: {{domxref("TextDecoder")}}, {{domxref("TextEncoder")}}, {{domxref("TextDecoderStream")}} and {{domxref("TextEncoderStream")}}.

{{AvailableInWorkers}}

## Interfaces

- {{DOMxRef("TextDecoder")}}
- {{DOMxRef("TextEncoder")}}
- {{DOMxRef("TextDecoderStream")}}
- {{DOMxRef("TextEncoderStream")}}

## Polyfill

- A [shim](https://code.google.com/p/stringencoding/) allowing to use this interface in browsers that don't support it.

## Specifications

| Specification                    | Status                       | Comment             |
| -------------------------------- | ---------------------------- | ------------------- |
| {{SpecName("Encoding")}} | {{Spec2("Encoding")}} | Initial definition. |

## Browser compatibility

### `TextDecoder`

{{Compat("api.TextDecoder")}}

### `TextEncoder`

{{Compat("api.TextEncoder")}}
