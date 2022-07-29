---
title: MSManipulationEvent.initMSManipulationEvent()
slug: Web/API/MSManipulationEvent/initMSManipulationEvent
page-type: web-api-instance-method
tags:
  - API
  - API:Microsoft Extensions
  - Deprecated
  - Method
  - Non-standard
  - Reference
  - initMSManipulationEvent
---
{{APIRef("UI Events")}}{{Non-standard_Header}}{{Deprecated_Header}}

The **`initMSManipulationEvent`** method is used to create a {{DOMxRef("MSManipulationEvent")}} that can be called from JavaScript.

This proprietary method is specific to Internet Explorer. Beginning with the Microsoft Edge browser, the [initEvent()](/en-US/docs/Web/API/Event/initEvent) constructor pattern for synthetic events is deprecated.

## Syntax

```js
initMSManipulationEvent(type, canBubble, cancelable, view, detail, lastState, currentState)
```

### Parameters

- `type`
  - : A string that represents the type of the event being created.

- `canBubble`
  - : A boolean value that indicates whether the event can bubble. When `true` the event should propagate upward. When `false` the event does not propagate upward.

- `cancelable`
  - : A boolean value that indicates whether the event's default action can be prevented. When `true`, the default action can be canceled. When `false`, the default action cannot be canceled.

- `view`
  - : An {{domxref("AbstractView")}} representing the view in which the event is taking place.

- `detail`
  - : An integer that specifies some detailed information depending upon the event.

- `lastState`
  - : An integer that indicates the last state of the manipulation event.

- `currentState`
  - : An integer that indicates the current state of the manipulation event.

### Return value

None ({{jsxref("undefined")}}).

## Examples

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

- [MSManipulationEvent](/en-US/docs/Web/API/MSManipulationEvent)
- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_Extensions)
