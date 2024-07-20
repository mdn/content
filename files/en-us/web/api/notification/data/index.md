---
title: "Notification: data property"
short-title: data
slug: Web/API/Notification/data
page-type: web-api-instance-property
browser-compat: api.Notification.data
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

The **`data`** read-only property of the
{{domxref("Notification")}} interface returns a structured clone of the notification's
data, as specified in the `data` option of the
{{domxref("Notification.Notification","Notification()")}} constructor.

The notification's data can be any arbitrary data that you want associated with the
notification.

## Value

A structured clone.

## Examples

The following snippet fires a notification; a simple `options` object is
created, then the notification is fired using the `Notification()`
constructor.

```js
const options = {
  body: "Your code submission has received 3 new review comments.",
  data: {
    url: "https://example.com/review/12345",
    status: "open",
  },
};

const n = new Notification("New review activity", options);

console.log(n.data); // Logs the data object
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
