---
title: MSManipulationEvent
slug: Web/API/MSManipulationEvent
page-type: web-api-interface
tags:
  - API
  - API:Microsoft Extensions
  - Event
  - Event:Microsoft Extensions
  - Interface
  - MSManipulationEvent
  - Non-standard
  - Reference
---
{{APIRef("UI Events")}}{{Non-standard_Header}}

**`MSManipulationEvent`** provides contextual information when contact is made to the screen and an element is manipulated.

This proprietary method is specific to Internet Explorer.

### Events

{{domxref("Element/MSManipulationStateChanged_event", "MSManipulationStateChanged")}}: Event fires when the state of an element being manipulated has changed.

### Methods

{{DOMxRef("MSManipulationEvent.initMSManipulationEvent()")}}: Used to create a manipulation event that can be called from JavaScript.

### Properties

| Property                                      | Description                                                                          |
| --------------------------------------------- | ------------------------------------------------------------------------------------ |
| `currentState` {{ReadOnlyInline}}        | Returns the current state of a manipulation event.                                   |
| `inertiaDestinationX` {{ReadOnlyInline}} | Represents the predicted horizontal scroll offset after the inertia phase completes. |
| `inertiaDestinationY` {{ReadOnlyInline}} | Represents the predicted vertical scroll offset after the inertia phase completes.   |
| `lastState` {{ReadOnlyInline}}           | Returns the last state after a manipulation change event.                            |

## Example

```
interface MSManipulationEvent extends UIEvent {
    readonly currentState: number;
    readonly inertiaDestinationX: number;
    readonly inertiaDestinationY: number;
    readonly lastState: number;
    initMSManipulationEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, lastState: number, currentState: number): void;
    readonly MS_MANIPULATION_STATE_ACTIVE: number;
    readonly MS_MANIPULATION_STATE_CANCELLED: number;
    readonly MS_MANIPULATION_STATE_COMMITTED: number;
    readonly MS_MANIPULATION_STATE_DRAGGING: number;
    readonly MS_MANIPULATION_STATE_INERTIA: number;
    readonly MS_MANIPULATION_STATE_PRESELECT: number;
    readonly MS_MANIPULATION_STATE_SELECTING: number;
    readonly MS_MANIPULATION_STATE_STOPPED: number;
}
```

## See also

- {{DOMxRef("TouchEvent")}}
- {{domxref("Element/MSManipulationStateChanged_event", "MSManipulationStateChanged")}}
- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_Extensions)
