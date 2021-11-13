---
title: NDEFReadingEvent
slug: Web/API/NDEFReadingEvent
tags:
  - NDEF
  - Reference
  - Web NFC
browser-compat: api.NDEFReadingEvent
---
{{securecontext_header}}{{SeeCompatTable}}{{APIRef()}}

The **`NDEFReadingEvent`** interface of the [Web NFC API](/en-US/docs/Web/API/Web_NFC_API) represents events dispatched on new NFC readings obtained by {{DOMxRef("NDEFReader")}}.

## Constructor

- {{DOMxRef("NDEFReadingEvent.NDEFReadingEvent", "NDEFReadingEvent.NDEFReadingEvent()")}}
  - : Creates a new `NDEFReadingEvent`.

## Properties

_Inherits properties from its parent, {{DOMxRef("Event")}}_.

- {{DOMxRef("NDEFReadingEvent.message")}}{{ReadOnlyInline}}
  - : Returns an {{DOMxRef("NDEFMessage")}} object containing the received message.
- {{DOMxRef("NDEFReadingEvent.serialNumber")}}{{ReadOnlyInline}}
  - : Returns the serial number of the device, which is used for anti-collision and identification, or an empty string if no serial number is available.

## Methods

_Inherits methods from its parent, {{DOMxRef("Event")}}_.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
