---
title: PresentationAvailability
slug: Web/API/PresentationAvailability
tags:
  - API
  - Experimental
  - Interface
  - Presentation API
  - PresentationAvailability
  - Reference
browser-compat: api.PresentationAvailability
---
{{SeeCompatTable}}{{securecontext_header}}{{APIRef("Presentation API")}}

A `PresentationAvailability` object is associated with available [presentation displays](https://www.w3.org/TR/presentation-api/#dfn-presentation-display) and represents the _presentation display availability_ for a presentation request. If the [controlling user agent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) can [monitor the list of available presentation displays](https://www.w3.org/TR/presentation-api/#dfn-monitor-the-list-of-available-presentation-displays) in the background (without a pending request to `start()`), the `PresentationAvailability` object _MUST_ be implemented in a [controlling browsing context](https://www.w3.org/TR/presentation-api/#dfn-controlling-browsing-context).

The _`value`_ attribute _MUST_ return the last value it was set to. The value is updated by the [monitor the list of available presentation displays](https://www.w3.org/TR/presentation-api/#dfn-monitor-the-list-of-available-presentation-displays) algorithm.

The _`onchange`_ attribute is an [event handler](https://www.w3.org/TR/presentation-api/#dfn-event-handler) whose corresponding [event handler event type](https://www.w3.org/TR/presentation-api/#dfn-event-handler-event-type) is _`change`_.

## Properties

- {{domxref("PresentationAvailability.value")}} {{readonlyinline}}
  - : A boolean value indicating whether the given presentation display is available. The _`value`_ attribute _MUST_ return the last value it was set to.

### Event handlers

- {{domxref("PresentationAvailability.onchange")}}
  - : Indicates that the availability of the presentation display has changed.

## Methods

None.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
