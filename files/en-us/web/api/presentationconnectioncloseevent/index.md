---
title: PresentationConnectionCloseEvent
slug: Web/API/PresentationConnectionCloseEvent
tags:
  - API
  - Experimental
  - Presentation API
  - PresentationConnectionCloseEvent
  - PresentationRequest
  - Reference
  - events
browser-compat: api.PresentationConnectionCloseEvent
---
{{SeeCompatTable}}{{securecontext_header}}{{DefaultAPISidebar("Presentation API")}}

The **`PresentationConnectionCloseEvent`** interface of the [Presentation API](/en-US/docs/Web/API/Presentation_API) is fired on a {{domxref("PresentationConnection")}} when it is closed.

## Constructor

- {{DOMxRef("PresentationConnectionCloseEvent.PresentationConnectionCloseEvent()")}}
  - : Creates a new PresentationConnectionCloseEvent.

## Properties

- {{DOMxRef("PresentationConnectionCloseEvent.message")}} {{readonlyinline}}
  - : A human-readable message that provides more information about why the connection was closed.
- {{DOMxRef("PresentationConnectionCloseEvent.reason")}} {{readonlyinline}}
  - : Indicates why the connection was closed. This property takes one of the following values: `error`, `closed`, or `wentaway`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
