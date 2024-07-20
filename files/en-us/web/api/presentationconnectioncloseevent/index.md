---
title: PresentationConnectionCloseEvent
slug: Web/API/PresentationConnectionCloseEvent
page-type: web-api-interface
status:
  - experimental
browser-compat: api.PresentationConnectionCloseEvent
---

{{SeeCompatTable}}{{securecontext_header}}{{APIRef("Presentation API")}}

The **`PresentationConnectionCloseEvent`** interface of the [Presentation API](/en-US/docs/Web/API/Presentation_API) is fired on a {{domxref("PresentationConnection")}} when it is closed.

{{InheritanceDiagram}}

## Constructor

- {{domxref("PresentationConnectionCloseEvent.PresentationConnectionCloseEvent", "PresentationConnectionCloseEvent()")}} {{Experimental_Inline}}
  - : Creates a new PresentationConnectionCloseEvent.

## Instance properties

- {{DOMxRef("PresentationConnectionCloseEvent.message")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A human-readable message that provides more information about why the connection was closed.
- {{DOMxRef("PresentationConnectionCloseEvent.reason")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Indicates why the connection was closed. This property takes one of the following values: `error`, `closed`, or `wentaway`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
