---
title: CookieChangeEvent
slug: Web/API/CookieChangeEvent
page-type: web-api-interface
browser-compat: api.CookieChangeEvent
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}

The **`CookieChangeEvent`** interface of the {{domxref("Cookie Store API", "", "", "nocode")}} is the event type of the {{domxref("CookieStore/change_event", "change")}} event fired at a {{domxref("CookieStore")}} when any cookie changes occur. A cookie change consists of a cookie and a type (either "changed" or "deleted").

A cookie-change is a cookie and a type. Cookie-Changes that will cause the `CookieChangeEvent` to be dispatched are:

- A cookie which is removed due to an insertion of another cookie with the same name, domain, and path is ignored.
- A newly-created cookie which is not immediately evicted. In this case `type` of cookie-change is "changed".
- A newly-created cookie which is immediately evicted. In this case `type` of cookie-change is "deleted".
- A cookie which is otherwise evicted or removed. In this case `type` of cookie-change is "deleted".

{{InheritanceDiagram}}

## Constructor

- {{domxref("CookieChangeEvent.CookieChangeEvent", "CookieChangeEvent()")}}
  - : Creates a new `CookieChangeEvent`.

## Instance properties

_This interface also inherits properties from {{domxref("Event")}}._

- {{domxref("CookieChangeEvent.changed")}} {{ReadOnlyInline}}
  - : Returns an array containing one or more changed cookies.
- {{domxref("CookieChangeEvent.deleted")}} {{ReadOnlyInline}}
  - : Returns an array containing one or more deleted cookies.

## Instance methods

_This interface also inherits methods from {{domxref("Event")}}._

## Examples

In this example when the cookie is set, the event listener logs the event to the console. This is a `CookieChangeEvent` object with the {{domxref("CookieChangeEvent.changed","changed")}} property containing an object representing the cookie that has just been set.

```js
cookieStore.addEventListener("change", (event) => {
  console.log(event);
});

const one_day = 24 * 60 * 60 * 1000;
cookieStore.set({
  name: "cookie1",
  value: "cookie1-value",
  expires: Date.now() + one_day,
  domain: "example.com",
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
