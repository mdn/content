---
title: RTCErrorEvent
slug: Web/API/RTCErrorEvent
page-type: web-api-interface
browser-compat: api.RTCErrorEvent
---

{{APIRef("WebRTC")}}

The **`RTCErrorEvent`** interface of the [WebRTC API](/en-US/docs/Web/API/WebRTC_API) represents an error event sent to a WebRTC object.
It inherits from the standard {{domxref("Event")}} interface, adding RTC-specific information describing the error.

The `error` events fired at {{domxref("RTCDataChannel.error_event", "RTCDataChannel")}} and {{domxref("RTCDtlsTransport.error_event", "RTCDtlsTransport")}} are instances of this object.

> [!NOTE]
> WebRTC defines other error event interfaces, such as {{domxref("RTCPeerConnectionIceErrorEvent")}}, which are used for errors that have other special information sharing requirements.

{{InheritanceDiagram}}

## Constructor

- {{domxref("RTCErrorEvent.RTCErrorEvent", "RTCErrorEvent()")}}
  - : Creates and returns a new `RTCErrorEvent` object.

## Instance properties

_Also inherits properties from its parent interface, {{domxref("Event")}}._

- {{domxref("RTCErrorEvent.error", "error")}} {{ReadOnlyInline}}
  - : An {{domxref("RTCError")}} object specifying RTC-specific information about the error.
    This includes information such as the error type and cause, and the location that triggered the error.

## Instance methods

_Only inherits methods from its parent interface, {{domxref("Event")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCPeerConnectionIceErrorEvent")}}
