---
title: PresentationRequest
slug: Web/API/PresentationRequest
page-type: web-api-interface
status:
  - experimental
browser-compat: api.PresentationRequest
---

{{SeeCompatTable}}{{securecontext_header}}{{APIRef("Presentation API")}}

A `PresentationRequest` object is used to initiate or reconnect to a presentation made by a [controlling browsing context](https://www.w3.org/TR/presentation-api/#dfn-controlling-browsing-context). The `PresentationRequest` object _MUST_ be implemented in a [controlling browsing context](https://www.w3.org/TR/presentation-api/#dfn-controlling-browsing-context) provided by a [controlling user agent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent).

When a `PresentationRequest` is constructed, the given `urls` _MUST_ be used as the list of _presentation request URLs_ which are each a possible [presentation URL](https://www.w3.org/TR/presentation-api/#dfn-presentation-url) for the `PresentationRequest` instance.

{{InheritanceDiagram}}

## Constructor

- {{domxref("PresentationRequest.PresentationRequest","PresentationRequest()")}} {{Experimental_Inline}}
  - : Creates a `PresentationRequest`.

## Instance properties

None

### Event handlers

- {{domxref("PresentationRequest.onconnectionavailable")}} {{Experimental_Inline}}
  - : Fires on a successful call to {{DOMxRef("PresentationRequest.start","PresentationRequest.start()")}} or {{DOMxRef("PresentationRequest.join","PresentationRequest.join()")}}. This method provides an object with a reference to the created or joined object.

## Instance methods

- {{domxref("PresentationRequest.start()")}} {{Experimental_Inline}}
  - : Returns a {{JSxRef("Promise")}} that resolves with a {{DOMxRef("PresentationConnection")}} after the user agent prompts the user to select a display and grant permission to use that display.
- {{domxref("PresentationRequest.reconnect()")}} {{Experimental_Inline}}
  - : When the `reconnect(presentationId)` method is called on a `PresentationRequest` _presentationRequest_, the [user agent](https://www.w3.org/TR/presentation-api/#dfn-user-agents) _MUST_ run the following steps to _reconnect to a presentation_.
- {{domxref("PresentationRequest.getAvailability()")}} {{Experimental_Inline}}
  - : When the `getAvailability()` method is called, the user agent _MUST_ run the steps as the link.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
