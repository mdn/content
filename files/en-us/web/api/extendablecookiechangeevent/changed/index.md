---
title: ExtendableCookieChangeEvent.changed
slug: Web/API/ExtendableCookieChangeEvent/changed
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - changed
  - ExtendableCookieChangeEvent
browser-compat: api.ExtendableCookieChangeEvent.changed
---
{{securecontext_header}}{{APIRef("Cookie Store API")}}

The **`changed`** read-only property of the {{domxref("ExtendableCookieChangeEvent")}} interface returns any cookies that have been changed by the given `ExtendableCookieChangeEvent` instance.

## Value

An array of objects containing the changed cookie(s). Each object contains the following properties:

- `name`
  - : A string containing the name of the cookie.
- `value`
  - : A string containing the value of the cookie.
- `domain`
  - : A string containing the domain of the cookie.
- `path`
  - : A string containing the path of the cookie.
- `expires`
  - : A {{domxref("DOMTimeStamp")}} containing the expiration date of the cookie.
- `secure`
  - : A {{jsxref("boolean")}} indicating whether the cookie is from a site with a secure context (HTTPS rather than HTTP).
- `sameSite`

  - : One of the following [SameSite](/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite) values:

    - `"strict"`
      - : Cookies will only be sent in a first-party context and not be sent with requests initiated by third party websites.
    - `"lax"`
      - : Cookies are not sent on normal cross-site subrequests (for example to load images or frames into a third party site), but are sent when a user is navigating within the origin site (i.e. when following a link).
    - `"none"`
      - : Cookies will be sent in all contexts.

    > **Note:** For more information on SameSite cookies see [SameSite cookies explained](https://web.dev/samesite-cookies-explained/).

## Examples

In this example when the cookie is set, the event listener logs the `changed` property to the console. The first item in that array contains an object representing the cookie that has just been set.

```js
self.addEventListener('cookiechange', (event) => {
  console.log(event.changed[0]);
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
