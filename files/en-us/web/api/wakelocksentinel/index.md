---
title: WakeLockSentinel
slug: Web/API/WakeLockSentinel
tags:
  - API
  - Interface
  - Reference
  - Screen Wake Lock API
  - Wake Lock
  - screen
browser-compat: api.WakeLockSentinel
---
{{draft}}{{securecontext_header}}{{DefaultAPISidebar("Screen Wake Lock API")}}

The **`WakeLockSentinel`** interface of the {{domxref('Screen Wake Lock API')}} provides a handle to the underlying platform wake lock and can be manually released and reacquired. An {{jsxref('Object')}} representing the wake lock is returned via the {{domxref('WakeLock.request()','navigator.wakelock.request()')}} method.

An acquired `WakeLockSentinel` can be released manually via the {{domxref('WakeLockSentinel.release','release()')}} method, or automatically via the platform wake lock. This can happen if the document becomes inactive or looses visibility, if the device is low on power or the user turns on a power save mode. Releasing all `WakeLockSentinel` instances of a given wake lock type will cause the underlying platform wake lock to be released.

## Properties

_This interface provides the following properties._

- {{domxref("WakeLockSentinel.released", "released")}} {{ReadOnlyInline}}
  - : Returns a boolean indicating whether the `WakeLockSentinel` has been released.
- {{domxref("WakeLockSentinel.type", "type")}} {{ReadOnlyInline}}

  - : Returns a {{jsxref("String")}} representation of the currently acquired `WakeLockSentinel` type.
    Return values are:

    - `'screen'`: A screen wake lock. Prevents devices from dimming or locking the screen.

## Event handlers

- {{domxref("WakeLockSentinel.onrelease", "onrelease")}}
  - : Fired when the {{domxref('WakeLockSentinel.release','release()')}} method is called or the wake lock is released by the user agent.

## Methods

- {{domxref('WakeLockSentinel.release()', 'release()')}}
  - : Releases the `WakeLockSentinel`, returning a {{jsxref("Promise")}} that is resolved once the sentinel has been successfully released.

## Examples

In this example we create an asynchronous function which requests a `WakeLockSentinel`. Once acquired we listen for the `onrelease` event which can be used to give appropriate UI feedback. The sentinel can be acquired or released via appropriate interactions.

```js
// create a reference for the wake lock
let wakeLock = null;

// create an async function to request a wake lock
const requestWakeLock = async () => {
  try {
    wakeLock = await navigator.wakeLock.request('screen');

    // listen for our release event
    wakeLock.addEventListener('release', () => {
      // if wake lock is released alter the UI accordingly
    });

  } catch (err) {
    // if wake lock request fails - usually system related, such as battery

  }
}

wakeLockOnButton.addEventListener('click', () => {
  requestWakeLock();
})

wakeLockOffButton.addEventListener('click', () => {
  if (wakeLock !== null) {
    wakeLock.release()
      .then(() => {
        wakeLock = null;
      })
  }
})
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
