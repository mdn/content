---
title: Web push architecture
slug: Web/API/Push_API/Web_Push_Architecture
page-type: guide
---

{{DefaultAPISidebar("Push API")}}

This article explains how the different pieces of the Web Push infrastructure fit together, from subscribing to a push service through to delivering a push message to a service worker.

## Overview

The Web Push system involves several parties working together:

1. Your **web application**, running in the user's browser
2. A **service worker**, registered by your application to receive push events in the background
3. A **push service**, operated by the browser vendor (such as Mozilla or Google), which routes messages from your server to the right browser
4. Your **application server**, which sends messages to the push service when it needs to notify a user

The key insight is that your server never talks directly to the user's browser. Instead, it posts messages to a push service, which holds them until the browser comes online to collect them.

## The subscription flow

Before your server can send push messages, the user's browser must subscribe to the push service:

1. Your application requests notification permission from the user.
2. On approval, it calls {{domxref("PushManager.subscribe()")}} with your server's VAPID public key in the `applicationServerKey` option.
3. The browser contacts its push service and creates a new subscription.
4. {{domxref("PushManager.subscribe()")}} resolves with a {{domxref("PushSubscription")}} object containing:
   - An **endpoint** URL — a unique URL on the push service where your server will POST messages.
   - A **p256dh** key — the browser's public key for encrypting message payloads.
   - An **auth** secret — a shared secret for message authentication.
5. Your application sends this subscription data to your server, which stores it.

The endpoint URL is a [capability URL](https://w3ctag.github.io/capability-urls/): anyone who knows it can send messages to that browser. Your server must keep it secret.

## Push services

Each browser vendor operates its own push service:

- **Firefox** uses [Mozilla Autopush](https://mozilla-push-service.readthedocs.io/), a Python/Rust service that maintains WebSocket connections to Firefox clients and exposes REST endpoints for application servers.
- **Chrome and Chromium-based browsers** use [Firebase Cloud Messaging (FCM)](https://firebase.google.com/docs/cloud-messaging), which handles routing through Google's infrastructure.
- **Safari on macOS and iOS** uses Apple's push infrastructure. On iOS and iPadOS (16.4+), web push follows the standard W3C Push API but is only available for Progressive Web Apps installed to the home screen.

Despite the different backend implementations, all push services speak the same protocol: the [Web Push Protocol (RFC 8030)](https://datatracker.ietf.org/doc/html/rfc8030). This means your application server uses the same code to send messages regardless of which browser the user has. The endpoint URL in each subscription already points to the correct push service.

## Sending a message

When your server needs to notify a user, it sends an HTTP POST request to the subscription's endpoint URL. The request includes:

### Encrypted payload

Message content is encrypted end-to-end so the push service cannot read it. The encryption uses:

- **ECDH key agreement** (P-256) between your server and the browser's subscription keys
- **HKDF-SHA-256** for deriving encryption keys
- **AES-128-GCM** content encoding (defined in [RFC 8188](https://datatracker.ietf.org/doc/html/rfc8188))

The full protocol is specified in [RFC 8291 (Message Encryption for Web Push)](https://datatracker.ietf.org/doc/html/rfc8291). In practice, libraries like [web-push](https://github.com/web-push-libs) handle this automatically.

### VAPID authentication

Your server identifies itself using Voluntary Application Server Identification ([VAPID, RFC 8292](https://datatracker.ietf.org/doc/html/rfc8292)). This works by signing requests with a JSON Web Token (JWT) that includes:

- An **audience** claim binding the token to the push service's origin
- An **expiry** no more than 24 hours in the future
- An optional **subject** with a contact URI (typically a `mailto:` address)

The push service verifies that the signing key matches the `applicationServerKey` used at subscription time, preventing unauthorized servers from sending messages to your users' subscriptions.

### Delivery headers

The POST request also includes headers that control delivery behavior:

- **TTL** (required): How many seconds the push service should hold the message if the user is offline. `0` means deliver immediately or discard.
- **Urgency** (optional): Battery-saving hint. Values are `very-low`, `low`, `normal` (default), and `high`.
- **Topic** (optional): A string up to 32 characters. If two messages share the same topic, the push service replaces the older one. Useful for updates that supersede each other, such as unread counts.

### Response codes

The push service responds with:

| Status         | Meaning                                                             |
| -------------- | ------------------------------------------------------------------- |
| `201`          | Message accepted for delivery                                       |
| `400`          | Invalid request (missing TTL, oversized payload)                    |
| `401`          | VAPID authentication failed                                         |
| `404` or `410` | Subscription expired or unsubscribed — remove it from your database |
| `413`          | Payload too large                                                   |
| `429`          | Rate limited — back off and retry                                   |

## Receiving a message

When the push service delivers a message to the browser:

1. The browser wakes the service worker registered for that subscription's scope.
2. A {{domxref("ServiceWorkerGlobalScope.push_event", "push")}} event fires with a {{domxref("PushEvent")}} containing the decrypted {{domxref("PushMessageData")}}.
3. The service worker typically calls {{domxref("ServiceWorkerRegistration.showNotification()")}} to display a notification.
4. If the user clicks the notification, a {{domxref("ServiceWorkerGlobalScope/notificationclick_event", "notificationclick")}} event fires, where the service worker can open or focus a window.

Browsers may limit background activity for sites without visible notifications. Firefox enforces a quota on push messages that do not display a notification.

## Subscription lifecycle

Push subscriptions do not last forever. They can become invalid when:

- The push service expires the subscription.
- The user clears browser data or revokes notification permissions.
- The service worker registration is removed.

When a subscription expires, the push service responds with `404` or `410` to your server's POST requests. Your server should remove the subscription from its database.

To detect expiration on the client side, listen for the {{domxref("ServiceWorkerGlobalScope.pushsubscriptionchange_event", "pushsubscriptionchange")}} event and re-subscribe when it fires.

## See also

- [Push API](/en-US/docs/Web/API/Push_API)
- [Web Push API Notifications best practices](/en-US/docs/Web/API/Push_API/Best_Practices)
- [Service Worker API](/en-US/docs/Web/API/Service_Worker_API)
- [Web Push Protocol (RFC 8030)](https://datatracker.ietf.org/doc/html/rfc8030)
- [Message Encryption for Web Push (RFC 8291)](https://datatracker.ietf.org/doc/html/rfc8291)
- [VAPID (RFC 8292)](https://datatracker.ietf.org/doc/html/rfc8292)
- [Push notifications overview on web.dev](https://web.dev/articles/push-notifications-overview)
