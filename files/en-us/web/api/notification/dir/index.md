---
title: Notification.dir
slug: Web/API/Notification/dir
page-type: web-api-instance-property
tags:
  - API
  - Notification
  - Notifications
  - Notifications API
  - Property
  - Reference
  - dir
browser-compat: api.Notification.dir
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

The `dir` read-only property of the {{domxref("Notification")}} interface indicates the text direction of the notification, as specified in the `dir` option of the {{domxref("Notification.Notification","Notification()")}} constructor.

## Value

A string specifying the text direction. Possible values are:

- `auto`
  - : adopts the browser's language setting behavior (the default.)
- `ltr`
  - : left to right.
- `rtl`
  - : right to left.

> **Note:** Most browsers seem to ignore explicit ltr and rtl settings, and just go with the browser-wide setting.

## Examples

The following snippet fires a notification; a simple `options` object is created, then the notification is fired using the `Notification()` constructor.

```js
const options = {
  body: 'Do you like my body?',
  dir: 'rtl'
}

const n = new Notification('Test notification',options);

console.log(n.dir) // should return 'rtl'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
