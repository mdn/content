---
title: "PushSubscription: toJSON() method"
short-title: toJSON()
slug: Web/API/PushSubscription/toJSON
page-type: web-api-instance-method
browser-compat: api.PushSubscription.toJSON
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`toJSON()`** method of the {{domxref("PushSubscription")}} interface returns a JSON-serializable plain object representing the `PushSubscription` object.

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `PushSubscription` object is stringified. This method is generally intended to, by default, usefully serialize `PushSubscription` objects during [JSON](/en-US/docs/Glossary/JSON) serialization.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON-serializable plain object, containing the following properties:

- {{domxref("PushSubscription/endpoint", "endpoint")}}
- {{domxref("PushSubscription/expirationTime", "expirationTime")}}
- `keys`

The `endpoint` and `expirationTime` values are copied as-is. The `keys` property contains the `p256dh` and `auth` values returned by {{domxref("PushSubscription/getKey", "getKey()")}}, encoded as [base64url](/en-US/docs/Glossary/Base64) strings without padding.

## Examples

### Calling toJSON() directly

This example obtains a `PushSubscription` object. Calling `toJSON()` directly returns a plain object. You can access its properties, which is the same as accessing them on the original object.

```js
navigator.serviceWorker.ready.then((reg) => {
  reg.pushManager.getSubscription().then((subscription) => {
    const json = subscription.toJSON();
    console.log(json); // A plain object
    console.log(typeof json); // "object"
    console.log(json.endpoint); // Same value as subscription.endpoint
  });
});
```

### Serializing to a JSON string

Within the callback from the previous example, the same object can be serialized using {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method automatically.

```js
console.log(JSON.stringify(subscription));
```

This would log a JSON string like so (formatted for readability):

```json
{
  "endpoint": "https://push.example.com/subscriptions/12345",
  "expirationTime": null,
  "keys": {
    "p256dh": "...",
    "auth": "..."
  }
}
```

The base64url-encoded key values are abbreviated as `"..."` for readability.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
