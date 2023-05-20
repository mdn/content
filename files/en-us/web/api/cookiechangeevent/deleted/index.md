---
title: "CookieChangeEvent: deleted property"
short-title: deleted
slug: Web/API/CookieChangeEvent/deleted
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.CookieChangeEvent.deleted
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{SeeCompatTable}}

The **`deleted`** read-only property of the {{domxref("CookieChangeEvent")}} interface returns an array of the cookies that have been deleted by the given `CookieChangeEvent` instance.

## Value

An array of objects containing the deleted cookie(s). Each object contains the following properties:

- `name`
  - : A string containing the name of the cookie.
- `value`
  - : A string containing the value of the cookie.
- `domain`
  - : A string containing the domain of the cookie.
- `path`
  - : A string containing the path of the cookie.
- `expires`
  - : A timestamp, given as [Unix time](/en-US/docs/Glossary/Unix_time) in milliseconds, containing the expiration date of the cookie.
- `secure`
  - : A {{jsxref("boolean")}} indicating whether the cookie is from a site with a secure context (HTTPS rather than HTTP).
- `sameSite`

  - : One of the following [`SameSite`](/en-US/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) values:

    - `"strict"`
      - : Cookies will only be sent in a first-party context and not be sent with requests initiated by third party websites.
    - `"lax"`
      - : Cookies are not sent on normal cross-site subrequests (for example to load images or frames into a third party site), but are sent when a user is navigating within the origin site (i.e. when following a link).
    - `"none"`
      - : Cookies will be sent in all contexts.

## Examples

In this example when the cookie is deleted the event listener logs the first item in the `CookieChangeEvent.deleted` property to the console. It contains an object representing the cookie that has just been deleted.

```js
cookieStore.addEventListener("change", (event) => {
  console.log(event.deleted[0]);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
