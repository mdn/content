---
title: NDEFMessage
slug: Web/API/NDEFMessage
tags:
  - NDEF
  - Reference
  - Web NFC
browser-compat: api.NDEFMessage
---
{{securecontext_header}}{{SeeCompatTable}}{{APIRef()}}

The **`NDEFMessage`** interface of the [Web NFC API](/en-US/docs/Web/API/Web_NFC_API) represents the content of an NDEF message that has been read from or could be written to an NFC tag. An instance is acquired by calling the `NDEFMessage()` constructor or from the {{domxref("NDEFReadingEvent.message")}} property, which is passed to {{domxref("NDEFReader.onreading")}}.

## Constructor

- {{DOMxRef("NDEFMessage.NDEFMessage", "NDEFMessage()")}}
  - : Creates a new `NDEFMessage` object, initialized with the given NDEF records.

## Attributes

- {{DOMxRef("NDEFMessage.records")}}{{ReadOnlyInline}}
  - : Returns the list of NDEF records contained in the message.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
