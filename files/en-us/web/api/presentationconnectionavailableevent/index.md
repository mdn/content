---
title: PresentationConnectionAvailableEvent
slug: Web/API/PresentationConnectionAvailableEvent
tags:
  - API
  - Experimental
  - Presentation API
  - PresentationConnectionAvailableEvent
  - PresentationRequest
  - Reference
  - events
browser-compat: api.PresentationConnectionAvailableEvent
---
{{SeeCompatTable}}{{securecontext_header}}{{DefaultAPISidebar("Presentation API")}}

The **`PresentationConnectionAvailableEvent`** interface of the [Presentation API](/en-US/docs/Web/API/Presentation_API) is fired on a {{domxref("PresentationRequest")}} when a connection associated with the object is created.

A [controlling user agent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) [fires](https://www.w3.org/TR/presentation-api/#dfn-firing-an-event) a [trusted event](https://www.w3.org/TR/presentation-api/#dfn-trusted-event) named [`connectionavailable`](https://www.w3.org/TR/presentation-api/#dfn-connectionavailable) on a [`PresentationRequest`](https://www.w3.org/TR/presentation-api/#idl-def-presentationrequest) when a connection associated with the object is created. It is fired at the [`PresentationRequest`](https://www.w3.org/TR/presentation-api/#idl-def-presentationrequest) instance, using the [`PresentationConnectionAvailableEvent`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnectionavailableevent) interface, with the [`connection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnectionavailableevent-connection) attribute set to the [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection) object that was created. The event is fired for each connection that is created for the [controller](https://www.w3.org/TR/presentation-api/#dfn-controller), either by the [controller](https://www.w3.org/TR/presentation-api/#dfn-controller) calling `start()` or `reconnect()`, or by the [controlling user agent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) creating a connection on the controller's behalf via [`defaultRequest`](https://www.w3.org/TR/presentation-api/#dom-presentation-defaultrequest).

## Constructor

- {{domxref("PresentationConnectionAvailableEvent.PresentationConnectionAvailableEvent", "PresentationConnectionAvailableEvent()")}}
  - : Creates a new PresentationConnectionAvailableEvent.

## Properties

- {{domxref("PresentationConnectionAvailableEvent.connection")}} {{readonlyinline}}
  - : Returns a references to the {{domxref("PresentationConnection")}} object that fired the event.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
