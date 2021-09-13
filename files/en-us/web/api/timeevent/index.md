---
title: TimeEvent
slug: Web/API/TimeEvent
tags:
  - API
  - Interface
  - NeedsMarkupWork
  - SVG
---
{{APIRef("SVG")}}

The **`TimeEvent`** interface, a part of [SVG SMIL](/en-US/docs/Web/SVG/SVG_animation_with_SMIL) animation, provides specific contextual information associated with Time events.

{{InheritanceDiagram}}

## Properties

- {{domxref("TimeEvent.detail")}} {{ReadOnlyInline}}
  - : Is a `long` that specifies some detail information about the Event, depending on the type of the event. For this event type, indicates the repeat number for the animation.
- {{domxref("TimeEvent.view")}} {{ReadOnlyInline}}
  - : Is a {{domxref("WindowProxy")}} that identifies the Window from which the event was generated.

## Methods

- {{domxref("initTimeEvent")}}(DOMString typeArg, AbstractView viewArg, long detailArg)
  - : The initTimeEvent method is used to initialize the value of a TimeEvent created through the DocumentEvent interface. This method may only be called before the TimeEvent has been dispatched via the dispatchEvent method, though it may be called multiple times during that phase if necessary.
