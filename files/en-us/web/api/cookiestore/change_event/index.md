---
title: "CookieStore: change event"
short-title: change
slug: Web/API/CookieStore/change_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.CookieStore.change_event
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{SeeCompatTable}}

A `change` event is fired at a {{domxref("CookieStore")}} object when a change is made to any cookie.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
cookieStore.addEventListener("change", (event) => { })

cookieStore.onchange = (event) => { }
```

## Examples

To be informed when a cookie has changed, you can add a handler to the `cookieStore` instance using {{domxref("EventTarget.addEventListener", "addEventListener()")}}, like this:

```js
cookieStore.addEventListener("change", (event) => {
  console.log("1 change event");
});
```

Alternatively, you can use the `CookieStore.onchange` event handler property to establish a handler for the `change` event:

```js
cookieStore.onchange = (event) => {
  console.log("1 change event");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
