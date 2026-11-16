---
title: "CookieStore: change event"
short-title: change
slug: Web/API/CookieStore/change_event
page-type: web-api-event
browser-compat: api.CookieStore.change_event
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}

A `change` event is fired at a {{domxref("CookieStore")}} object when a change is made to any cookie.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("change", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onchange = (event) => { }
```

## Event type

A {{domxref("CookieChangeEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("CookieChangeEvent")}}

## Examples

To be informed when a cookie has changed, you can add a handler to the `cookieStore` instance using {{domxref("EventTarget.addEventListener", "addEventListener()")}}, like this:

```js
cookieStore.addEventListener("change", (event) => {
  console.log("1 change event");
});
```

Alternatively, you can use the `onchange` event handler property to establish a handler for the `change` event (but note that this replaces other event listeners added using `onchange`, if any):

```js
cookieStore.onchange = (event) => {
  console.log("1 change event");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
