---
title: PushManager.subscribe()
slug: Web/API/PushManager/subscribe
tags:
  - API
  - Experimental
  - Method
  - PushManager
  - Reference
  - WebAPI
  - subscribe
browser-compat: api.PushManager.subscribe
---
{{SeeCompatTable}}{{ApiRef("Push API")}}

The **`subscribe()`** method of the {{domxref("PushManager")}}
interface subscribes to a push service.

It returns a {{jsxref("Promise")}} that resolves to a {{domxref("PushSubscription")}}
object containing details of a push subscription. A new push subscription is created if
the current service worker does not have an existing subscription.

## Syntax

```js
PushManager.subscribe(options).then(function(pushSubscription) { ... } );
```

### Parameters

- `options` {{optional_inline}}

  - : An object containing optional configuration parameters. It can have the following
    properties:

    - `userVisibleOnly`: A boolean indicating that the returned push
      subscription will only be used for messages whose effect is made visible to the
      user.
    - `applicationServerKey`: A Base64-encoded {{domxref("DOMString")}} or
      {{jsxref("ArrayBuffer")}} containing an [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm)
      P-256 public key that the push server will use to authenticate your application
      server. If specified, all messages from your application server must use the [VAPID](https://datatracker.ietf.org/doc/html/rfc8292) authentication scheme, and
      include a JWT signed with the corresponding private key. This key **_IS
      NOT_** the same ECDH key that you use to encrypt the data. For more
      information, see "[Using
      VAPID with WebPush](https://blog.mozilla.org/services/2016/04/04/using-vapid-with-webpush/)".

    > **Note:** This parameter is required in some browsers like
    > Chrome and Edge.

### Returns

A {{jsxref("Promise")}} that resolves to a {{domxref("PushSubscription")}} object.

## Example

```js
this.onpush = function(event) {
  console.log(event.data);
  // From here we can write the data to IndexedDB, send it to any open
  // windows, display a notification, etc.
}

navigator.serviceWorker.register('serviceworker.js');

// Use serviceWorker.ready to ensure that you can subscribe for push
navigator.serviceWorker.ready.then(
  function(serviceWorkerRegistration) {
    var options = {
      userVisibleOnly: true,
      applicationServerKey: applicationServerKey
    };
    serviceWorkerRegistration.pushManager.subscribe(options).then(
      function(pushSubscription) {
        console.log(pushSubscription.endpoint);
        // The push subscription details needed by the application
        // server are now available, and can be sent to it using,
        // for example, an XMLHttpRequest.
      }, function(error) {
        // During development it often helps to log errors to the
        // console. In a production environment it might make sense to
        // also report information about errors back to the
        // application server.
        console.log(error);
      }
    );
  });
```

### Responding to user gestures

`subscribe()` calls should be done in response to a user gesture, such as
clicking a button, for example:

```js
btn.addEventListener('click', function() {
  serviceWorkerRegistration.pushManager.subscribe(options)
  .then(function(pushSubscription) {
    // handle subscription
  });
})
```

This is not only best practice — you should not be spamming users with notifications
they didn't agree to — but going forward browsers will explicitly disallow notifications
not triggered in response to a user gesture. Firefox is already doing this from version
72, for example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
