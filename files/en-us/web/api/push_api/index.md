---
title: Push API
slug: Web/API/Push_API
page-type: web-api-overview
browser-compat:
  - api.PushEvent
  - api.PushMessageData
---

{{DefaultAPISidebar("Push API")}}{{AvailableInWorkers}}

The **Push API** gives web applications the ability to receive messages pushed to them from a server, whether or not the web app is in the foreground, or even currently loaded, on a user agent. This lets developers deliver asynchronous notifications and updates to users that opt in, resulting in better engagement with timely new content.

## Push concepts and usage

> [!WARNING]
> When implementing PushManager subscriptions, it is vitally important that you protect against CSRF/XSRF issues in your app. See the following articles for more information:
>
> - [Cross-Site Request Forgery (CSRF) Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
> - [Preventing CSRF and XSRF Attacks](https://blog.codinghorror.com/preventing-csrf-and-xsrf-attacks/)

For an app to receive push messages, it has to have an active [service worker](/en-US/docs/Web/API/Service_Worker_API). When the service worker is active, it can subscribe to push notifications, using {{domxref("PushManager.subscribe()")}}.

The resulting {{domxref("PushSubscription")}} includes all the information that the application needs to send a push message: an endpoint and the encryption key needed for sending data.

The service worker will be started as necessary to handle incoming push messages, which are delivered to the {{domxref("ServiceWorkerGlobalScope.push_event", "onpush")}} event handler. This allows apps to react to push messages being received, for example, by displaying a notification (using {{domxref("ServiceWorkerRegistration.showNotification()")}}.)

Each subscription is unique to a service worker. The endpoint for the subscription is a unique [capability URL](https://www.w3.org/TR/capability-urls/): knowledge of the endpoint is all that is necessary to send a message to your application. The endpoint URL therefore needs to be kept secret, or other applications might be able to send push messages to your application.

Activating a service worker to deliver a push message can result in increased resource usage, particularly of the battery. Different browsers have different schemes for handling this, there is currently no standard mechanism. Firefox allows a limited number (quota) of push messages to be sent to an application, although Push messages that generate notifications are exempt from this limit. The limit is refreshed each time the site is visited. In Chrome there are no limits.

## Interfaces

- {{domxref("PushEvent")}}
  - : Represents a push action, sent to the [global scope](/en-US/docs/Web/API/ServiceWorkerGlobalScope) of a {{domxref("ServiceWorker")}}. It contains information sent from an application to a {{domxref("PushSubscription")}}.
- {{domxref("PushManager")}}
  - : Provides a way to receive notifications from third-party servers, as well as request URLs for push notifications.
- {{domxref("PushMessageData")}}
  - : Provides access to push data sent by a server, and includes methods to manipulate the received data.
- {{domxref("PushSubscription")}}
  - : Provides a subscription's URL endpoint, and allows unsubscribing from a push service.
- {{domxref("PushSubscriptionOptions")}}
  - : Represents the options associated with the push subscription.

## Service worker additions

The following additions to the [Service Worker API](/en-US/docs/Web/API/Service_Worker_API) have been specified in the Push API spec to provide an entry point for using Push messages. They also monitor and respond to push and subscription change events.

- {{domxref("ServiceWorkerRegistration.pushManager")}} {{ReadOnlyInline}}
  - : Returns a reference to the {{domxref("PushManager")}} interface for managing push subscriptions including subscribing, getting an active subscription, and accessing push permission status. This is the entry point into using Push messaging.
- {{domxref("ServiceWorkerGlobalScope.push_event", "onpush")}}
  - : An event handler fired whenever a {{domxref("ServiceWorkerGlobalScope/push_event", "push")}} event occurs; that is, whenever a server push message is received.
- {{domxref("ServiceWorkerGlobalScope.pushsubscriptionchange_event", "onpushsubscriptionchange")}}
  - : An event handler fired whenever a {{domxref("ServiceWorkerGlobalScope/pushsubscriptionchange_event", "pushsubscriptionchange")}} event occurs; for example, when a push subscription has been invalidated, or is about to be invalidated (e.g. when a push service sets an expiration time.)

## Examples

Mozilla's [ServiceWorker Cookbook](https://github.com/mdn/serviceworker-cookbook) contains many useful Push examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Sending VAPID identified WebPush Notifications via Mozilla's Push Service](https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/)
- [Push notifications overview](https://web.dev/articles/push-notifications-overview)
- [Service Worker API](/en-US/docs/Web/API/Service_Worker_API)
