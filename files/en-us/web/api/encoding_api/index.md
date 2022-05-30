---
title: Encoding API
slug: Web/API/Encoding_API
tags:
  - API
  - Encoding
  - Overview
  - Reference
spec-urls: https://encoding.spec.whatwg.org/
---
{{DefaultAPISidebar("Encoding API")}}

The **Encoding API** provides a mechanism for handling text in various {{Glossary("character encoding", "character encodings")}}, including legacy non-{{Glossary("UTF-8")}} encodings.

The API provides four interfaces: {{domxref("TextDecoder")}}, {{domxref("TextEncoder")}}, {{domxref("TextDecoderStream")}} and {{domxref("TextEncoderStream")}}.

{{AvailableInWorkers}}

## Interfaces

- {{DOMxRef("TextDecoder")}}
- {{DOMxRef("TextEncoder")}}
- {{DOMxRef("TextDecoderStream")}}
- {{DOMxRef("TextEncoderStream")}}

## Specifications

{{Specifications}}

## Browser compatibility

### `TextDecoder`

{{Compat("api.TextDecoder")}}

### `TextEncoder`

{{Compat("api.TextEncoder")}}

## See also

- A [shim](https://github.com/inexorabletash/text-encoding) allowing to use this interface in browsers that don't support it
