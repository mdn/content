---
title: CookieStore.set()
slug: Web/API/CookieStore/set
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - set()
  - CookieStore
  - Experimental
browser-compat: api.CookieStore.set
---
{{securecontext_header}}{{APIRef("Cookie Store API")}}{{SeeCompatTable}}

The **`set()`** method of the {{domxref("CookieStore")}} interface sets a cookie with the given name and value or options object. (See below.)

## Syntax

```js
set(name, value)
set(options)
```

### Parameters

This method requires one of the following:

- `name`
  - : A string with the name of the cookie.
- `value`
  - : A string with the value of the cookie.
- `options`

  - : An object containing:

    - `name`
      - : A string with the name of a cookie.
    - `value`
      - : A string with the value of the cookie.
    - `expires` {{Optional_Inline}}
      - : A {{domxref("DOMTimeStamp")}} containing the expiration date of the cookie.
    - `domain` {{Optional_Inline}}
      - : A string containing the domain of the cookie.
    - `path` {{Optional_Inline}}
      - : A string containing the path of the cookie.
    - `sameSite` {{Optional_Inline}}

      - : One of the following [SameSite](/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite) values:

        - `"strict"`
          - : Cookies will only be sent in a first-party context and not be sent along with requests initiated by third party websites.
        - `"lax"`
          - : Cookies are not sent on normal cross-site subrequests (for example to load images or frames into a third party site), but are sent when a user is navigating to the origin site (i.e. when following a link).
        - `"none"`
          - : Cookies will be sent in all contexts.

        > **Note:** For more information on SameSite cookies see [SameSite cookies explained](https://web.dev/samesite-cookies-explained/).

### Return value

A {{jsxref("Promise")}} that resolves with {{jsxref("undefined")}} when setting the cookie completes.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if setting the cookie with the given values fails.
- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the origin does not {{glossary("serialize")}} to a URL.

## Examples

The following example sets a cookie by passing an object with `name`, `value`, `expires`, and `domain`.

```js
const day = 24 * 60 * 60 * 1000;
cookieStore.set({
  name: "cookie1",
  value: "cookie1-value",
  expires: Date.now() + day,
  domain: "example.com"
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
