---
title: CookieStore.get()
slug: Web/API/CookieStore/get
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - get()
  - CookieStore
  - Experimental
browser-compat: api.CookieStore.get
---
{{securecontext_header}}{{APIRef("Cookie Store API")}}{{SeeCompatTable}}

The **`get()`** method of the {{domxref("CookieStore")}} interface returns a single cookie with the given name or options object. (See below.) The method will return the first matching cookie for the passed parameters.

## Syntax

```js
get(name)
get(options)
```

### Parameters

This method requires one of the following:

- `name`
  - : A string with the name of a cookie.
- `options`

  - : An object containing:

    - `name`
      - : A string with the name of a cookie.
    - `url`
      - : A string with the URL of a cookie.

> **Note:** The `url` option enables the modification of a cookie scoped under a particular URL. Service workers can obtain cookies that would be sent to any URL under their scope. From a document you may only obtain the cookies at the current URL, so the only valid URL in a document context is the document's URL.

### Return value

A {{jsxref("Promise")}} that resolves with an object containing the first cookie matching the submitted name or options. This object contains the following properties:

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
  - : A {{jsxref("boolean")}} indicating whether the cookie is to be used in secure contexts only.
- `sameSite`

  - : One of the following [SameSite](/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite) values:

    - `"strict"`
      - : Cookies will only be sent in a first-party context and not be sent with requests initiated by third party websites.
    - `"lax"`
      - : Cookies are not sent on normal cross-site subrequests (for example to load images or frames into a third party site), but are sent when a user is navigating within the origin site (i.e. when following a link).
    - `"none"`
      - : Cookies will be sent in all contexts.

    > **Note:** For more information on SameSite cookies see [SameSite cookies explained](https://web.dev/samesite-cookies-explained/).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if getting the cookie represented by the given `name` or `options` fails.

## Examples

In this example we return a cookie named "cookie1". If the cookie is found the result of the Promise is an object containing the details of a single cookie.

```js
let cookie = cookieStore.get('cookie1');
if (cookie) {
    console.log(cookie);
} else {
    console.log('Cookie not found');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
