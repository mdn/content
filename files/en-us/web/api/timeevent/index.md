---
title: TimeEvent
slug: Web/API/TimeEvent
page-type: web-api-interface
---

{{APIRef("SVG")}}

The **`TimeEvent`** interface, a part of [SVG SMIL](/en-US/docs/Web/SVG/SVG_animation_with_SMIL) animation, provides specific contextual information associated with Time events.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("TimeEvent.detail")}} {{ReadOnlyInline}}
  - : A `long` that specifies some detail information about the Event, depending on the type of the event. For this event type, indicates the repeat number for the animation.
- {{domxref("TimeEvent.view")}} {{ReadOnlyInline}}
  - : A {{glossary("WindowProxy")}} that identifies the Window from which the event was generated.

## Instance methods

- {{domxref("TimeEvent.initTimeEvent()")}}
  - : Used to initialize the value of a TimeEvent created through the DocumentEvent interface. This method may only be called before the TimeEvent has been dispatched via the dispatchEvent method, though it may be called multiple times during that phase if necessary.
