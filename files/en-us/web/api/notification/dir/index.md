---
title: "Notification: dir property"
short-title: dir
slug: Web/API/Notification/dir
page-type: web-api-instance-property
browser-compat: api.Notification.dir
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

The **`dir`** read-only property of the {{domxref("Notification")}} interface indicates the text direction of the notification, as specified in the `dir` option of the {{domxref("Notification.Notification","Notification()")}} constructor.

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
  body: "Your code submission has received 3 new review comments.",
  dir: "rtl",
};

const n = new Notification("New review activity", options);

console.log(n.dir); // "rtl"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
