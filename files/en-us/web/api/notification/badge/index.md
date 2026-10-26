---
title: "Notification: badge property"
short-title: badge
slug: Web/API/Notification/badge
page-type: web-api-instance-property
browser-compat: api.Notification.badge
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`badge`** read-only property of the {{domxref("Notification")}} interface returns a string containing the URL of a small icon representing the web application itself. The badge is used by the platform when there is not enough space to display the full notification — for example, in a status bar. On Android, the badge should accommodate up to 4x display resolution (about 96×96px), and the image will be automatically masked to a monochrome silhouette.

See [Notifications with different images](/en-US/docs/Web/API/ServiceWorkerRegistration/showNotification#notifications_with_different_images) for a comparison of the three image options.

## Value

A string containing a URL.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
