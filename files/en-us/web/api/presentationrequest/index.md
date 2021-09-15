---
title: PresentationRequest
slug: Web/API/PresentationRequest
tags:
  - API
  - Experimental
  - Interface
  - Presentation API
  - PresentationRequest
  - Reference
browser-compat: api.PresentationRequest
---
{{SeeCompatTable}}{{securecontext_header}}{{DefaultAPISidebar("Presentation API")}}

A `PresentationRequest` object is used to initiate or reconnect to a presentation made by a [controlling browsing context](https://www.w3.org/TR/presentation-api/#dfn-controlling-browsing-context). The `PresentationRequest` object _MUST_ be implemented in a [controlling browsing context](https://www.w3.org/TR/presentation-api/#dfn-controlling-browsing-context) provided by a [controlling user agent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent).

When a `PresentationRequest` is constructed, the given `urls` _MUST_ be used as the list of _presentation request URLs_ which are each a possible [presentation URL](https://www.w3.org/TR/presentation-api/#dfn-presentation-url) for the `PresentationRequest` instance.

## Constructor

- {{domxref("PresentationRequest.PresentationRequest","PresentationRequest()")}}
  - : Creates a `PresentationRequest`.

## Properties

None

### Event handlers

- {{domxref("PresentationRequest.onconnectionavailable")}}
  - : Fires on a successful call to {{DOMxRef("PresentationRequest.start","PresentationRequest.start()")}} or {{DOMxRef("PresentationRequest.join","PresentationRequest.join()")}}. This method provides a object with a reference to the created or joined object.

## Methods

- {{domxref("PresentationRequest.start()")}}
  - : Returns a {{JSxRef("Promise")}} that resolves with a {{DOMxRef("PresentationConnection")}} after the user agent prompts the user to select a display and grant permission to use that display.
- {{domxref("PresentationRequest.reconnect()")}}
  - : When the `reconnect(presentationId)` method is called on a `PresentationRequest` _presentationRequest_, the [user agent](https://www.w3.org/TR/presentation-api/#dfn-user-agents) _MUST_ run the following steps to _reconnect to a presentation_.
- {{domxref("PresentationRequest.getAvailability()")}}
  - : When the `getAvailability()` method is called, the user agent _MUST_ run the steps as the link.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
