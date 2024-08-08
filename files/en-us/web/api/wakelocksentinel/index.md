---
title: WakeLockSentinel
slug: Web/API/WakeLockSentinel
page-type: web-api-interface
browser-compat: api.WakeLockSentinel
---

{{securecontext_header}}{{APIRef("Screen Wake Lock API")}}

The **`WakeLockSentinel`** interface of the [Screen Wake Lock API](/en-US/docs/Web/API/Screen_Wake_Lock_API) can be used to monitor the status of the platform screen wake lock, and manually release the lock when needed.

The screen wake lock prevents device screens from dimming or locking when an application needs to keep running.

A screen wake lock is requested using the {{domxref('WakeLock.request()','navigator.wakeLock.request()')}} method, which returns a {{jsxref('Promise')}} that fulfills with a `WakeLockSentinel` object if the lock is granted.

An acquired screen wake lock can be released manually via the {{domxref('WakeLockSentinel.release','release()')}} method, or automatically via the platform screen wake lock. The latter may occur if the document becomes inactive or loses visibility, if the device is low on power, or if the user turns on a power save mode.
A released `WakeLockSentinel` cannot be re-used: a new sentinel must be requested using {{domxref('WakeLock.request()','navigator.wakeLock.request()')}} if a new lock is needed.
Releasing all `WakeLockSentinel` instances of a given wake lock type will cause the underlying platform wake lock to be released.

An event is fired at the `WakeLockSentinel` if the platform lock is released, allowing applications to configure their UI, and re-request the lock if needed.

{{InheritanceDiagram}}

## Instance properties

_Also inherits properties from its parent interface, {{DOMxRef("EventTarget")}}._

- {{domxref("WakeLockSentinel.released", "released")}} {{ReadOnlyInline}}
  - : Returns a boolean indicating whether the `WakeLockSentinel` has been released.
- {{domxref("WakeLockSentinel.type", "type")}} {{ReadOnlyInline}}

  - : Returns a string representation of the currently acquired `WakeLockSentinel` type.
    Return values are:

    - `screen`: A screen wake lock.
      Prevents devices from dimming or locking the screen.

## Instance methods

_Also inherits methods from its parent interface, {{DOMxRef("EventTarget")}}._

- {{domxref('WakeLockSentinel.release()', 'release()')}}
  - : Releases the `WakeLockSentinel`, returning a {{jsxref("Promise")}} that is resolved once the sentinel has been successfully released.

## Events

- {{domxref("WakeLockSentinel.release_event", "release")}}
  - : Fired when the {{domxref('WakeLockSentinel.release','release()')}} method is called or the wake lock is released by the user agent.

## Examples

In this example, we create an asynchronous function that requests a `WakeLockSentinel`.
Once the screen wake lock is acquired we listen for the `release` event, which can be used to give appropriate UI feedback.
The sentinel can be acquired or released via appropriate interactions.

```js
// create a reference for the wake lock
let wakeLock = null;

// create an async function to request a wake lock
const requestWakeLock = async () => {
  try {
    wakeLock = await navigator.wakeLock.request("screen");

    // listen for our release event
    wakeLock.addEventListener("release", () => {
      // if wake lock is released alter the UI accordingly
    });
  } catch (err) {
    // if wake lock request fails - usually system related, such as battery
  }
};

wakeLockOnButton.addEventListener("click", () => {
  requestWakeLock();
});

wakeLockOffButton.addEventListener("click", () => {
  if (wakeLock !== null) {
    wakeLock.release().then(() => {
      wakeLock = null;
    });
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Stay awake with the Screen Wake Lock API](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/)
