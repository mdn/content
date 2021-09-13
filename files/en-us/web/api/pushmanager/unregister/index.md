---
title: PushManager.unregister()
slug: Web/API/PushManager/unregister
tags:
  - API
  - Deprecated
  - Method
  - Reference
  - Simple Push API
browser-compat: api.PushManager.unregister
---
{{deprecated_header}}{{ ApiRef("Push API")}}

The **`unregister()`** method was used to ask the system to
unregister and delete the specified endpoint.

> **Note:** In the updated API, a subscription can be unregistered via the {{domxref("PushSubscription.unsubscribe()")}} method.

## Syntax

```js
var request = navigator.push.unregister(pushEndpoint);
```

### Properties

- pushEndpoint
  - : A pushEndpoint to be unregistered.

### Return

A {{domxref("DOMRequest")}} object to handle the success or failure of the method call.

If the method call is successful, the request's `result` will be a
{{Anch("PushRegistration")}} object representing the endpoint that has been
unregistered.

### PushRegistration

Those objects are anonymous JavaScript objects with the following properties:

- `pushEndpoint`
  - : A string representing the URL of the unregistered endpoint.
- `version`
  - : `Undefined` when `unregister.onsuccess` is called.

## Example

```js
var req = navigator.push.unregister(pushEndpoint);

req.onsuccess = function(e) {
  var endpoint = req.result;
  debug("Unregistered endpoint: " + endpoint );
}

req.onerror = function(e) {
  debug("Error unregistering the endpoint: " + JSON.stringify(e));
}
```

## Specifications

This feature is not part of any specification anymore. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PushManager")}}
- {{domxref("DOMRequest")}}
