---
title: "PushSubscription: getKey() method"
short-title: getKey()
slug: Web/API/PushSubscription/getKey
page-type: web-api-instance-method
browser-compat: api.PushSubscription.getKey
---

{{APIRef("Push API")}}

The `getKey()` method of the {{domxref("PushSubscription")}} interface
returns an {{jsxref("ArrayBuffer")}} representing a client public key, which can then
be sent to a server and used in encrypting push message data.

## Syntax

```js-nolint
getKey(name)
```

### Parameters

- `name`

  - : A string representing the encryption method used to generate a
    client key. The value can be:

    - `p256dh`
      - : An [Elliptic curve Diffie–Hellman](https://en.wikipedia.org/wiki/Elliptic_curve_Diffie%E2%80%93Hellman) public key on the P-256 curve (that is, the NIST
        secp256r1 elliptic curve). The resulting key is an uncompressed point in ANSI
        X9.62 format.
    - `auth`
      - : An authentication secret, as described in [Message Encryption for Web Push](https://datatracker.ietf.org/doc/html/draft-ietf-webpush-encryption-08).

### Return value

An {{jsxref("ArrayBuffer")}}.

## Examples

```js
reg.pushManager.getSubscription().then((subscription) => {
  // Enable any UI which subscribes / unsubscribes from
  // push messages.

  subBtn.disabled = false;

  if (!subscription) {
    console.log("Not yet subscribed to Push");
    // We aren't subscribed to push, so set UI
    // to allow the user to enable push
    return;
  }

  // Set your UI to show they have subscribed for
  // push messages
  subBtn.textContent = "Unsubscribe from Push Messaging";
  isPushEnabled = true;

  // initialize status, which includes setting UI elements for subscribed status
  // and updating Subscribers list via push
  const endpoint = subscription.endpoint;
  const key = subscription.getKey("p256dh");
  const auth = subscription.getKey("auth");

  // ...
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
