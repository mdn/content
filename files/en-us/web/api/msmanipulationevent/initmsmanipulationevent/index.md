---
title: MSManipulationEvent.initMSManipulationEvent()
slug: Web/API/MSManipulationEvent/initMSManipulationEvent
tags:
  - API
  - API:Microsoft Extensions
  - Deprecated
  - Method
  - Non-standard
  - Reference
  - initMSManipulationEvent
---
{{APIRef("Microsoft Extensions")}}{{Non-standard_Header}}{{Deprecated_Header}}

The **`initMSManipulationEvent`** method is used to create a {{DOMxRef("MSManipulationEvent")}} that can be called from JavaScript.

This proprietary method is specific to Internet Explorer. Beginning with the Microsoft Edge browser, the [initEvent()](/en-US/docs/Web/API/Event/initEvent) constructor pattern for synthetic events is deprecated.

### Syntax

```js
MSManipulationEvent.initMSManipulationEvent(typeArg, canBubbleArg, cancelableArg, viewArg, detailArg, lastState, currentState);
```

### Parameters

**typeArg** \[in]

Type: _DOMString_

The type of the event being created.

**canBubbleArg** \[in]

Type: _boolean_

Indicates whether the event can bubble. When true the event should propagate upward. When false the event does not propagate upward.

**cancelableArg** \[in]

Type: _boolean_

Indicates whether the event’s default action can be prevented. When true, the default action can be canceled. When false, the default action cannot be canceled.

**viewArg** \[in]

Type: _AbstractView_

The view in which the event is taking place.

**detailArg** \[in]

Type: _Integer_

Specifies some detailed information depending upon the event.

**lastState** \[in]

Type: _Integer_

Indicates the last state of the manipulation event.

**currentState** \[in]

Type: _Integer_

Indicates the current state of the manipulation event.

### Return value

This method does not return a value.

### Example

```js
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
