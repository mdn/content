---
title: CookieChangeEvent
slug: Web/API/CookieChangeEvent
page-type: web-api-interface
browser-compat: api.CookieChangeEvent
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}

The **`CookieChangeEvent`** interface of the {{domxref("Cookie Store API", "", "", "nocode")}} is the event type of the {{domxref("CookieStore/change_event", "change")}} event fired at a {{domxref("CookieStore")}} when any cookies are created or deleted.

> [!NOTE]
> A cookie that is replaced due to the insertion of another cookie with the same name, domain, and path, is ignored and does not trigger a change event.

{{InheritanceDiagram}}

## Constructor

- {{domxref("CookieChangeEvent.CookieChangeEvent", "CookieChangeEvent()")}}
  - : Creates a new `CookieChangeEvent`.

## Instance properties

_This interface also inherits properties from {{domxref("Event")}}._

- {{domxref("CookieChangeEvent.changed")}} {{ReadOnlyInline}}
  - : An array listing all newly-created cookies. Note that this will exclude cookies which were created with an expiry date in the past, as these cookies are immediately deleted.
- {{domxref("CookieChangeEvent.deleted")}} {{ReadOnlyInline}}
  - : An array listing all cookies which were removed, either because they expired or because they were explicitly deleted. Note that this will include cookies which were created with an expiry date in the past.

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
