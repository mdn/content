---
title: Encoding API
slug: Web/API/Encoding_API
page-type: web-api-overview
tags:
  - API
  - Encoding
  - Overview
  - Reference
browser-compat:
  - api.TextDecoder
  - api.TextEncoder
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

{{Compat}}

## See also

- A [shim](https://github.com/inexorabletash/text-encoding) allowing to use this interface in browsers that don't support it
