---
title: WakeLockSentinel
slug: Web/API/WakeLockSentinel
page-type: web-api-interface
browser-compat: api.WakeLockSentinel
---

{{securecontext_header}}{{APIRef("Screen Wake Lock API")}}

The **`WakeLockSentinel`** interface of the [Screen Wake Lock API](/en-US/docs/Web/API/Screen_Wake_Lock_API) provides a handle to the underlying platform wake lock and can be manually released and reacquired. An {{jsxref('Object')}} representing the wake lock is returned via the {{domxref('WakeLock.request()','navigator.wakeLock.request()')}} method.

An acquired `WakeLockSentinel` can be released manually via the {{domxref('WakeLockSentinel.release','release()')}} method, or automatically via the platform wake lock. This can happen if the document becomes inactive or looses visibility, if the device is low on power or the user turns on a power save mode. Releasing all `WakeLockSentinel` instances of a given wake lock type will cause the underlying platform wake lock to be released.

{{InheritanceDiagram}}

## Instance properties

_This interface provides the following properties._

- {{domxref("WakeLockSentinel.released", "released")}} {{ReadOnlyInline}}
  - : Returns a boolean indicating whether the `WakeLockSentinel` has been released.
- {{domxref("WakeLockSentinel.type", "type")}} {{ReadOnlyInline}}

  - : Returns a string representation of the currently acquired `WakeLockSentinel` type.
    Return values are:

    - `'screen'`: A screen wake lock. Prevents devices from dimming or locking the screen.

## Events

- {{domxref("WakeLockSentinel.release_event", "release")}}
  - : Fired when the {{domxref('WakeLockSentinel.release','release()')}} method is called or the wake lock is released by the user agent.

## Instance methods

- {{domxref('WakeLockSentinel.release()', 'release()')}}
  - : Releases the `WakeLockSentinel`, returning a {{jsxref("Promise")}} that is resolved once the sentinel has been successfully released.

## Examples

In this example we create an asynchronous function which requests a `WakeLockSentinel`. Once acquired we listen for the `release` event which can be used to give appropriate UI feedback. The sentinel can be acquired or released via appropriate interactions.

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
