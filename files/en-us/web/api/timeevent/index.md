---
title: TimeEvent
slug: Web/API/TimeEvent
page-type: web-api-interface
browser-compat: api.TimeEvent
---

{{APIRef("SVG")}}

The **`TimeEvent`** interface, a part of [SVG SMIL](/en-US/docs/Web/SVG/Guides/SVG_animation_with_SMIL) animation, provides specific contextual information associated with Time events.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("TimeEvent.detail")}} {{ReadOnlyInline}}
  - : A `long` that specifies some detail information about the Event, depending on the type of the event. For this event type, indicates the repeat number for the animation.
- {{domxref("TimeEvent.view")}} {{ReadOnlyInline}}
  - : A {{glossary("WindowProxy")}} that identifies the Window from which the event was generated.

## Instance methods

- {{domxref("TimeEvent.initTimeEvent()")}}
  - : Initializes the value of a {{domxref("TimeEvent")}} created using {{domxref("Document.createEvent()")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
