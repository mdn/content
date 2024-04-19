---
title: "CookieStore: getAll() method"
short-title: getAll()
slug: Web/API/CookieStore/getAll
page-type: web-api-instance-method
browser-compat: api.CookieStore.getAll
---

{{securecontext_header}}{{APIRef("Cookie Store API")}} {{AvailableInWorkers}}

The **`getAll()`** method of the {{domxref("CookieStore")}} interface returns a list of cookies that match the name or options passed to it. Passing no parameters will return all cookies for the current context.

## Syntax

```js-nolint
getAll(name)
getAll(options)
```

### Parameters

- `name` {{optional_inline}}
  - : A string with the name of a cookie.

Or

- `options` {{optional_inline}}

  - : An object containing:

    - `name`
      - : A string with the name of a cookie.
    - `url`
      - : A string with the URL of a cookie.

> **Note:** The `url` option enables the modification of a cookie scoped under a particular URL. Service workers can obtain cookies that would be sent to any URL under their scope. From a document you may only obtain the cookies at the current URL, so the only valid URL in a document context is the document's URL.

### Return value

A {{jsxref("Promise")}} that resolves with an array of objects representing cookies that match the given name or options.

Each object contains the following properties:

- `domain`

  - : A string containing the domain of the cookie.

- `expires`

  - : A timestamp, given as [Unix time](/en-US/docs/Glossary/Unix_time) in milliseconds, containing the expiration date of the cookie.

- `name`

  - : A string containing the name of the cookie.

- `partitioned`

  - : A boolean indicating whether the cookie is a partitioned cookie (`true`) or not (`false`). See [Cookies Having Independent Partitioned State (CHIPS)](/en-US/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies) for more information.

- `path`

  - : A string containing the path of the cookie.

- `sameSite`

  - : One of the following [`SameSite`](/en-US/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) values:

    - `"strict"`
      - : Cookies will only be sent in a first-party context and not be sent with requests initiated by third party websites.
    - `"lax"`
      - : Cookies are not sent on normal cross-site subrequests (for example to load images or frames into a third party site), but are sent when a user is navigating within the origin site (i.e. when following a link).
    - `"none"`
      - : Cookies will be sent in all contexts.

- `secure`

  - : A boolean value indicating whether the cookie is to be used in secure contexts only (`true`) or not (`false`).

- `value`
  - : A string containing the value of the cookie.

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the origin does not {{glossary("Serialization", "serialize")}} to a URL.
- {{jsxref("TypeError")}}
  - : Thrown if:
    - The `url` option is present and is not equal with the creation URL, if in main thread.
    - The `url` option is present and its origin is not the same as the origin of the creation URL.
    - Querying cookies represented by the given `name` or `options` fails.

## Examples

In this example, we use `getAll()` with no parameters. This returns all of the cookies for this context as an array of objects.

```js
const cookies = await cookieStore.getAll();

if (cookies.length > 0) {
  console.log(cookies);
} else {
  console.log("Cookie not found");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
