---
title: "Notification: lang property"
short-title: lang
slug: Web/API/Notification/lang
page-type: web-api-instance-property
browser-compat: api.Notification.lang
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

The **`lang`** read-only property of the
{{domxref("Notification")}} interface indicates the language used in the notification,
as specified in the `lang` option of the
{{domxref("Notification.Notification","Notification()")}} constructor.

The language itself is specified using a string representing a language tag according to {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}.
See the Sitepoint [ISO 2 letter language codes](https://www.sitepoint.com/iso-2-letter-language-codes/) page for a simple reference.

## Value

A string specifying the language tag.

## Examples

The following snippet fires a notification; a simple `options` object is
created, then the notification is fired using the `Notification()`
constructor.

```js
const options = {
  body: "Your code submission has received 3 new review comments.",
  lang: "en-US",
};

const n = new Notification("New review activity", options);

console.log(n.lang); // "en-US"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
