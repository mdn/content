---
title: PresentationAvailability
slug: Web/API/PresentationAvailability
page-type: web-api-interface
status:
  - experimental
browser-compat: api.PresentationAvailability
---

{{SeeCompatTable}}{{securecontext_header}}{{APIRef("Presentation API")}}

A **`PresentationAvailability`** object is associated with available [presentation displays](https://www.w3.org/TR/presentation-api/#dfn-presentation-display) and represents the _presentation display availability_ for a presentation request. If the [controlling user agent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) can [monitor the list of available presentation displays](https://www.w3.org/TR/presentation-api/#dfn-monitor-the-list-of-available-presentation-displays) in the background (without a pending request to `start()`), the `PresentationAvailability` object _MUST_ be implemented in a [controlling browsing context](https://www.w3.org/TR/presentation-api/#dfn-controlling-browsing-context).

The `value` attribute _MUST_ return the last value it was set to. The value is updated by the [monitor the list of available presentation displays](https://www.w3.org/TR/presentation-api/#dfn-monitor-the-list-of-available-presentation-displays) algorithm.

The `onchange` attribute is an [event handler](https://www.w3.org/TR/presentation-api/#dfn-event-handler) whose corresponding [event handler event type](https://www.w3.org/TR/presentation-api/#dfn-event-handler-event-type) is `change`.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("PresentationAvailability.value")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A boolean value indicating whether the given presentation display is available. The `value` attribute _MUST_ return the last value it was set to.

### Event

- {{domxref("PresentationAvailability.change_event", "change")}} {{Experimental_Inline}}
  - : Indicates that the availability of the presentation display has changed.

## Instance methods

None.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
