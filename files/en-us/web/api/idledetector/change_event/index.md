---
title: "IdleDetector: change event"
short-title: change
slug: Web/API/IdleDetector/change_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.IdleDetector.change_event
---

{{securecontext_header}}{{APIRef("Idle Detection API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

The **`change`** event of the {{domxref("IdleDetector")}} interface fires when the value of `userState` or `screenState` has changed.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("change", (event) => {});

onchange = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Example

In the following example, the `change` callback prints the status of `userState` and `screenState` to the console.

```js
idleDetector.addEventListener("change", () => {
  const userState = idleDetector.userState;
  const screenState = idleDetector.screenState;
  console.log(`Idle change: ${userState}, ${screenState}.`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
