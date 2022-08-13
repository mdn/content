---
title: CookieChangeEvent
slug: Web/API/CookieChangeEvent
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - CookieChangeEvent
  - Experimental
browser-compat: api.CookieChangeEvent
---
{{securecontext_header}}{{APIRef("Cookie Store API")}}{{SeeCompatTable}}

The **`CookieChangeEvent`** interface of the ['Cookie Store API'](/en-US/docs/Web/API/Cookie_Store_API) is the event type passed to {{domxref("CookieStore.onchange()")}} when any cookie changes occur. A cookie change consists of a cookie and a type (either "changed" or "deleted").

Cookie changes that will cause the `CookieChangeEvent` to be dispatched are:

- A cookie is newly created and not immediately removed. In this case `type` is "changed".
- A cookie is newly created and immediately removed. In this case `type` is "deleted"
- A cookie is removed. In this case `type` is "deleted".

> **Note:** A cookie that is replaced due to the insertion of another cookie with the same name, domain, and path, is ignored and does not trigger a change event.

{{InheritanceDiagram}}

## Constructor

- {{domxref("CookieChangeEvent.CookieChangeEvent", "CookieChangeEvent()")}} {{Experimental_Inline}}
  - : Creates a new `CookieChangeEvent`.

## Properties

_This interface also inherits properties from {{domxref("Event")}}._

- {{domxref("CookieChangeEvent.changed")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns an array containing one or more changed cookies.
- {{domxref("CookieChangeEvent.deleted")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns an array containing one or more deleted cookies.

## Examples

In this example when the cookie is set, the event listener logs the event to the console. This is a `CookieChangeEvent` object with the {{domxref("CookieChangeEvent.changed","changed")}} property containing an object representing the cookie that has just been set.

```js
cookieStore.addEventListener('change', (event) => {
  console.log(event);
});

const one_day = 24 * 60 * 60 * 1000;
cookieStore.set({
  name: "cookie1",
  value: "cookie1-value",
  expires: Date.now() + one_day,
  domain: "example.com"
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
