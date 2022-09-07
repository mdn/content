---
title: PresentationReceiver
slug: Web/API/PresentationReceiver
page-type: web-api-interface
tags:
  - API
  - Experimental
  - Interface
  - Presentation
  - Presentation API
  - PresentationReceiver
  - Reference
browser-compat: api.PresentationReceiver
---
{{securecontext_header}}{{SeeCompatTable}}{{APIRef("Presentation API")}}

The **`PresentationReceiver`** interface of the [Presentation API](/en-US/docs/Web/API/Presentation_API) provides a means for a receiving browsing context to access controlling browsing contexts and communicate with them.

## Properties

- {{domxref('PresentationReceiver.connectionList')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{jsxref('Promise')}} that resolves with a {{domxref('PresentationConnectionList')}} object containing a list of _incoming presentation connections._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
