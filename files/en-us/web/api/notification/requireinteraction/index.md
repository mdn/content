---
title: Notification.requireInteraction
slug: Web/API/Notification/requireInteraction
page-type: web-api-instance-property
tags:
  - API
  - Notification
  - Notifications
  - Notifications API
  - Property
  - Reference
  - Web
  - requireInteraction
  - Experimental
browser-compat: api.Notification.requireInteraction
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{SecureContext_Header}}{{SeeCompatTable}}

The **`requireInteraction`** read-only property of the {{domxref("Notification")}} interface returns a boolean value indicating that a notification should remain active until the user clicks or dismisses it, rather than closing automatically.

> **Note:** This can be set when the notification is first created by setting the `requireInteraction` option to `true` in the options object of the {{domxref("Notification.Notification", "Notification()")}} constructor.

## Value

A boolean value.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
