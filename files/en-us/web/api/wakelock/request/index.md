---
title: "WakeLock: request() method"
short-title: request()
slug: Web/API/WakeLock/request
page-type: web-api-instance-method
browser-compat: api.WakeLock.request
---

{{APIRef("Screen Wake Lock API")}}{{SecureContext_Header}}

The **`request()`** method of the
{{domxref("WakeLock")}} interface returns a {{jsxref("Promise")}} that resolves with a
{{domxref("WakeLockSentinel")}} object, which allows control over screen dimming and
locking.

## Syntax

```js-nolint
request(type)
```

### Parameters

- `type`

  - : Options are as follows:

    - `'screen'`
      - : Requests a screen wake lock. Prevents devices from
        dimming or locking the screen.

### Return value

A {{jsxref("Promise")}} that resolves with a {{domxref("WakeLockSentinel")}} object.

### Exceptions

- `NotAllowedError`

  - : Thrown when wake lock is not available, which can happen because:

    - Use of this feature is blocked by a [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy).
    - The document is not fully active.
    - The document is hidden.
    - The {{Glossary("User Agent")}} could not acquire platform's wake lock.

## Examples

The following asynchronous function requests a {{domxref("WakeLockSentinel")}} object.
The `request()` method is wrapped in a `try...catch` statement
to account for if the browser refuses the request for any reason.

```js
const requestWakeLock = async () => {
  try {
    const wakeLock = await navigator.wakeLock.request("screen");
  } catch (err) {
    // The wake lock request fails - usually system-related, such as low battery.

    console.log(`${err.name}, ${err.message}`);
  }
};

requestWakeLock();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("WakeLock")}}
- {{DOMxRef("Navigator.wakeLock")}}
