---
title: NDEFMessage
slug: Web/API/NDEFMessage
page-type: web-api-interface
status:
  - experimental
browser-compat: api.NDEFMessage
---

{{securecontext_header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

The **`NDEFMessage`** interface of the [Web NFC API](/en-US/docs/Web/API/Web_NFC_API) represents the content of an NDEF message that has been read from or could be written to an NFC tag. An instance is acquired by calling the `NDEFMessage()` constructor or from the {{domxref("NDEFReadingEvent.message")}} property, which is passed to the {{domxref("NDEFReader.reading_event", "reading")}} event.

## Constructor

- {{DOMxRef("NDEFMessage.NDEFMessage", "NDEFMessage()")}} {{Experimental_Inline}}
  - : Creates a new `NDEFMessage` object, initialized with the given NDEF records.

## Attributes

- {{DOMxRef("NDEFMessage.records")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the list of NDEF records contained in the message.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
