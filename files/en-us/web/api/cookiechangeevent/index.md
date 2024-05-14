---
title: CookieChangeEvent
slug: Web/API/CookieChangeEvent
page-type: web-api-interface
browser-compat: api.CookieChangeEvent
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}

The `CookieChangeEvent` interface of the {{domxref("Cookie Store API", "", "", "nocode")}} represents a change to the contents of the cookie store. An instance of a `CookieChangeEvent` is passed into the event handler for the {{domxref("CookieStore.change_event", "change")}} event of the `CookieStore` interface.

The `CookieChangeEvent` interface use two list to represent "changed" and "deleted" cookies, and put cookie in different lists based on:

- A newly-created cookie which is not immediately evicted is considered "changed".
- A newly-created cookie which is immediately evicted is considered "deleted".
- A cookie which is otherwise evicted or removed is considered "deleted".

> **Note:** that the `change` event ignores cookies which were removed removed due to an insertion of another cookie with the same name, domain, and path.

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
