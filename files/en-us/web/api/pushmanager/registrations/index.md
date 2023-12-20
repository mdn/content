---
title: "PushManager: registrations() method"
short-title: registrations()
slug: Web/API/PushManager/registrations
page-type: web-api-instance-method
status:
  - deprecated
browser-compat: api.PushManager.registrations
---

{{deprecated_header}}{{ApiRef("Push API")}}

The **`registrations`** method is used to ask the system about
existing push endpoint registrations.

> **Note:** This method has been superseded by the {{domxref("PushManager.getSubscription()")}} method.

## Syntax

```js-nolint
registrations()
```

### Parameters

None.

### Return value

A `DOMRequest` object to handle the success or failure of the method call.

If the method call is successful, the request's `result` will be an array of
[PushRegistration](#pushregistration) objects.

### PushRegistration

Those objects are anonymous JavaScript objects with the following properties:

- `pushEndpoint`
  - : A string representing the URL of the endpoint.
- `version`
  - : The current version that the push endpoint is at.

## Examples

```js
const req = navigator.push.registrations();

req.onsuccess = (e) => {
  if (req.result.length > 0) {
    req.result.forEach((result) => {
      console.log(
        `Existing registration ${result.pushEndpoint} ${result.version}`,
      );
    });
    // Reuse existing endpoints.
  } else {
    // Register for a new endpoint.
    const register = navigator.push.register();
    register.onsuccess = (e) => {
      console.log(`Registered new endpoint: ${register.result}`);
    };
  }
};
```

## Specifications

This feature is not part of any specification anymore. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PushManager")}}
