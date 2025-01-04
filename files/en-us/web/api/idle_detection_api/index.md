---
title: Idle Detection API
slug: Web/API/Idle_Detection_API
page-type: web-api-overview
status:
  - experimental
browser-compat: api.IdleDetector
---

{{securecontext_header}}{{DefaultAPISidebar("Idle Detection API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

The Idle Detection API provides a means to detect the user's idle status, active, idle, and locked, specifically, and to be notified of changes to idle status without polling from a script.

## Concepts and Usage

Native applications and browser extensions use idle detection base user experiences on when a user is interacting with a device. For example, chat applications can show other users of an application whether someone is available. Other applications might choose to show notifications only when a user is interacting with the app. A web application could use this API for similar use cases. Additionally, a progressive web app could use idle detection to trigger a service worker update when the app isn't being used.

## Interfaces

- {{domxref("IdleDetector")}} {{Experimental_Inline}}
  - : Provides methods and events for detecting user activity on a device or screen.

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
