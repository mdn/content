---
title: "Notification: badge property"
short-title: badge
slug: Web/API/Notification/badge
page-type: web-api-instance-property
browser-compat: api.Notification.badge
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`badge`** read-only property of the {{domxref("Notification")}} interface returns a string containing the URL of an image to represent the notification when there is not enough space to display the notification itself such as for example, the Android Notification Bar. On Android devices, the badge should accommodate devices up to 4x resolution, about 96 by 96 px, and the image will be automatically masked.

## Value

A string containing a URL.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
