---
title: PushManager.registrations()
slug: Web/API/PushManager/registrations
tags:
  - API
  - Deprecated
  - Method
  - Reference
  - Simple Push API
browser-compat: api.PushManager.registrations
---
{{deprecated_header}}{{ApiRef("Push API")}}

The **`registrations`** method is used to ask the system about
existing push endpoint registrations.

> **Note:** This method has been superseded by the {{domxref("PushManager.getSubscription()")}} method.

## Syntax

```js
var request = navigator.push.registrations();
```

### Return

A {{domxref("DOMRequest")}} object to handle the success or failure of the method call.

If the method call is successful, the request's `result` will be an array of
{{Anch("PushRegistration")}} objects.

### PushRegistration

Those objects are anonymous JavaScript objects with the following properties:

- `pushEndpoint`
  - : A string representing the URL of the endpoint.
- `version`
  - : The current version that the push endpoint is at.

## Example

```js
var req = navigator.push.registrations();

req.onsuccess = function(e) {
  if (req.result.length > 0) {
    for (var i = 0, l = req.result.length; i < l; i++) {
      console.log("Existing registration", req.result[i].pushEndpoint, req.result[i].version);
    }
    // Reuse existing endpoints.
  } else {
    // Register for a new endpoint.
    var register = navigator.push.register();
    register.onsuccess = function(e) {
      console.log("Registered new endpoint", register.result);
    }
  }
}
```

## Specifications

This feature is not part of any specification anymore. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PushManager")}}
- {{domxref("DOMRequest")}}
