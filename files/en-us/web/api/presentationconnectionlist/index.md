---
title: PresentationConnectionList
slug: Web/API/PresentationConnectionList
page-type: web-api-interface
status:
  - experimental
browser-compat: api.PresentationConnectionList
---

{{securecontext_header}}{{SeeCompatTable}}{{APIRef("Presentation API")}}

`PresentationConnectionList` is the collection of incoming presentation connections.

{{InheritanceDiagram}}

## Instance properties

- {{domxref('PresentationConnectionList.connections')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the non-terminated set of {{DOMxRef("PresentationConnection")}}s in the [set of presentation controllers](https://www.w3.org/TR/presentation-api/#dfn-set-of-presentation-controllers).

## Events

- {{domxref('PresentationConnectionList/connectionavailable_event', "connectionavailable")}} {{Experimental_Inline}}
  - : Fired whenever a new [presentation connection](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection) becomes available.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
