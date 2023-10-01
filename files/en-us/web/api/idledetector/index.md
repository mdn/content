---
title: IdleDetector
slug: Web/API/IdleDetector
page-type: web-api-interface
status:
  - experimental
browser-compat: api.IdleDetector
---

{{securecontext_header}}{{APIRef("Idle Detection API")}}{{SeeCompatTable}}

The **`IdleDetector`** interface of the {{domxref('idle_detection_api','Idle
Detection API','','true')}} provides methods and events for detecting user activity on a device or screen.

This interface requires a secure context.

{{InheritanceDiagram}}

## Constructor

- {{domxref("IdleDetector.IdleDetector", "IdleDetector()")}} {{Experimental_Inline}}
  - : Creates a new `IdleDetector` object.

## Instance properties

- {{domxref("IdleDetector.userState")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a string indicating whether the users has interacted with either the screen or the device within the threshold provided to `start()`, one of `"active"` or `"idle"`. This attribute returns `null` before `start()` is called.
- {{domxref("IdleDetector.screenState")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a string indicating whether the screen is locked, one of `"locked"` or `"unlocked"`. This attribute returns `null` before `start()` is called.

## Events

- {{domxref("IdleDetector.change_event", "change")}} {{Experimental_Inline}}
  - : Called when the value of `userState` or `screenState` has changed.

## Static methods

- [`IdleDetector.requestPermission()`](/en-US/docs/Web/API/IdleDetector/requestPermission_static) {{Experimental_Inline}}
  - : Returns a {{jsxref('Promise')}} that resolves when the user has chosen
    whether to grant the origin access to their idle state. Resolves with
    `"granted"` on acceptance and `"denied"` on refusal.

## Instance methods

- {{domxref("IdleDetector.start()")}} {{Experimental_Inline}}
  - : Returns a `Promise` that resolves when the detector starts listening for
    changes in the user's idle state. `userState` and `screenState` are given
    initial values. This method takes an optional `options` object with the `threshold` in
    milliseconds where inactivity should be reported and `signal` for an
    `AbortSignal` to abort the idle detector.

## Examples

The following example shows creating a detector and logging changes to the
user's idle state. A button is used to get the necessary user activation before
requesting permission.

```js
const controller = new AbortController();
const signal = controller.signal;

startButton.addEventListener("click", async () => {
  if ((await IdleDetector.requestPermission()) !== "granted") {
    console.error("Idle detection permission denied.");
    return;
  }

  try {
    const idleDetector = new IdleDetector();
    idleDetector.addEventListener("change", () => {
      const userState = idleDetector.userState;
      const screenState = idleDetector.screenState;
      console.log(`Idle change: ${userState}, ${screenState}.`);
    });

    await idleDetector.start({
      threshold: 60_000,
      signal,
    });
    console.log("IdleDetector is active.");
  } catch (err) {
    // Deal with initialization errors like permission denied,
    // running outside of top-level frame, etc.
    console.error(err.name, err.message);
  }
});

stopButton.addEventListener("click", () => {
  controller.abort();
  console.log("IdleDetector is stopped.");
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
