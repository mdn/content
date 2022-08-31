---
title: PresentationConnectionList
slug: Web/API/PresentationConnectionList
page-type: web-api-interface
tags:
  - API
  - Experimental
  - Interface
  - Presentation
  - Presentation API
  - PresentationConnectionList
  - Reference
browser-compat: api.PresentationConnectionList
---
{{securecontext_header}}{{SeeCompatTable}}{{APIRef("Presentation API")}}

`PresentationConnectionList` is the collection of incoming presentation connections.

{{InheritanceDiagram}}

## Properties

- {{domxref('PresentationConnectionList.connections')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the non-terminated set of {{DOMxRef("PresentationConnection")}}s in the [set of presentation controllers](https://www.w3.org/TR/presentation-api/#dfn-set-of-presentation-controllers).

### Event Handlers

- {{domxref('PresentationConnectionList.onconnectionavailable')}} {{Experimental_Inline}}
  - : Fired whenever a new [presentation connection](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection) becomes available.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
