---
title: PopStateEvent
slug: Web/API/PopStateEvent
page-type: web-api-interface
browser-compat: api.PopStateEvent
---

{{APIRef("History API")}}

**`PopStateEvent`** is an interface for the [`popstate`](/en-US/docs/Web/API/Window/popstate_event) event.

A `popstate` event is dispatched to the window every time the active history
entry changes between two history entries for the same document. If the history entry
being activated was created by a call to `history.pushState()` or was
affected by a call to `history.replaceState()`, the `popstate`
event's `state` property contains a copy of the history entry's state object.

{{InheritanceDiagram}}

## Constructor

- {{domxref("PopStateEvent.PopStateEvent", "PopStateEvent()")}}
  - : Creates a new `PopStateEvent` object.

## Instance properties

_This interface also inherits the properties of its parent, {{domxref("Event")}}._

- {{domxref("PopStateEvent.state")}} {{ReadOnlyInline}}
  - : Returns a copy of the information that was provided to `pushState()` or `replaceState()`.

## Instance methods

_This interface has no methods of its own, but inherits the methods of its parent, {{domxref("Event")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`popstate`](/en-US/docs/Web/API/Window/popstate_event) event
- [`hashchange`](/en-US/docs/Web/API/Window/hashchange_event) event
