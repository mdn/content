---
title: "Scheduling: isInputPending() method"
short-title: isInputPending()
slug: Web/API/Scheduling/isInputPending
page-type: web-api-instance-method
browser-compat: api.Scheduling.isInputPending
---

{{SeeCompatTable}}{{APIRef("Scheduling API")}}

The `isInputPending()` method allows you to check whether there are pending input events in the event queue, indicating that the user has interacted with the page or the system is about to dispatch such events.

This feature can be useful in scenarios where you want to check if there are any pending input events before performing a long-running operation or updating the UI. By checking the value of navigator.scheduling.isInputPending, you can avoid blocking the main thread when the user is interacting with the page.

## Syntax

```js-nolint
navigator.scheduling.isInputPending(options)
```

### Parameters

- `options`

  - : An object containing options.
    - `includeContinuous`: A boolean (optional), indicate that continuous input events should also be considered when checking for pending input.

## Value

A boolean.

The `navigator.scheduling.isInputPending()` method returns a Boolean value, indicating whether there are pending input events or not. It can have one of the following three possible values:

- `true`: Indicates that there are input events pending in the event queue.

- `false`: Indicates that there are no input events pending in the event queue.

- `undefined`: Indicates that the browser does not support this feature or it is not enabled.

## Examples

```js
if (navigator.scheduling && navigator.scheduling.isInputPending()) {
  console.log("Input events are pending!");
} else {
  console.log("No input events pending.");
}
```

After checking the input event status, you can proceed with performing a long-running operation or updating the UI. This allows you to avoid blocking the main thread when the user is actively interacting with the page, potentially providing a smoother user experience.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
