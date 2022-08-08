---
title: PushManager.register()
slug: Web/API/PushManager/register
page-type: web-api-instance-method
tags:
  - API
  - Deprecated
  - Method
  - Reference
  - Simple Push API
browser-compat: api.PushManager.register
---
{{deprecated_header}}{{ApiRef("Push API")}}

The **`register`** method is used to ask the system to request
a new endpoint for notifications.

> **Note:** This method has been superseded by {{domxref("PushManager.subscribe()")}}.

## Syntax

```js
register()
```

### Parameters

None.

### Return value

A `DOMRequest` object to handle the success or failure of the method call.

If the method call is successful, the request's `result` will be a string,
which is the endpoint URL.

> **Note:** if you do not need the URL any more, please use
> {{domxref("PushManager.unregister()")}} to clean up after yourself.

## Examples

```js
const req = navigator.push.register();

req.onsuccess = (e) => {
  const endpoint = req.result;
  console.log(`New endpoint: ${endpoint}`);
}

req.onerror = (e) => {
  console.error(`Error getting a new endpoint: ${e.error}`);
}
```

## Specifications

This feature is not part of any specification. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PushManager")}}
