---
title: "CookieStore: get() method"
short-title: get()
slug: Web/API/CookieStore/get
page-type: web-api-instance-method
browser-compat: api.CookieStore.get
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

The **`get()`** method of the {{domxref("CookieStore")}} interface returns a {{jsxref("Promise")}} that resolves to a single cookie matching the given `name` or `options` object. The method will return the first cookie that matches.

## Syntax

```js-nolint
get(name)
get(options)
```

### Parameters

This method requires one of the following:

- `name` {{optional_inline}}
  - : A string with the name of a cookie.

Or

- `options` {{optional_inline}}

  - : An object containing:

    - `name`
      - : A string with the name of a cookie.
    - `url`
      - : A string with the URL of a cookie.

> [!NOTE]
> The `url` option enables the modification of a cookie scoped under a particular URL. Service workers can obtain cookies that would be sent to any URL under their scope. From a document you may only obtain the cookies at the current URL, so the only valid URL in a document context is the document's URL.

### Return value

A {{jsxref("Promise")}} that resolves with an object representing the first cookie matching the submitted `name` or `options`, or `null` if there is no matching cookie.

The object returned for a match contains the following properties:

- `domain`

  - : A string containing the domain of the cookie.

- `expires`

  - : A timestamp, given as {{glossary("Unix time")}} in milliseconds, containing the expiration date of the cookie.

- `name`

  - : A string containing the name of the cookie.

- `partitioned`

  - : A boolean indicating whether the cookie is a partitioned cookie (`true`) or not (`false`). See [Cookies Having Independent Partitioned State (CHIPS)](/en-US/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) for more information.

- `path`

  - : A string containing the path of the cookie.

- `sameSite`

  - : One of the following [`SameSite`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) values: [`"strict"`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#strict), [`"lax"`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#lax), or [`"none"`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#none).

- `secure`

  - : A boolean value indicating whether the cookie is to be used in secure contexts only (`true`) or not (`false`).

- `value`
  - : A string containing the value of the cookie.

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the origin does not {{glossary("Serialization", "serialize")}} to a URL.
- {{jsxref("TypeError")}}
  - : Thrown if:
    - The `options` parameter is an empty object.
    - The method is called in the main thread, and the `url` option is specified but does not match the URL of the current window.
    - The method is called in a worker and the `url` option is specified, but does not match the origin of the worker.
    - Querying cookies represented by the given `name` or `options` fails.

## Examples

<!-- The examples don't work as live examples in MDN environment (due to unknown errors) -->

### Getting a cookie by name

This example shows how to get a particular cookie by name.

The code first creates a cookie named "cookie1" using {{domxref("CookieStore.set()")}}, logging any errors to the console.
It then waits on `get()` to retrieve information about that same cookie.
If the returned promise resolves with an object we log the cookie: otherwise we log that no matching cookie was found.

```js
async function cookieTest() {
  // Set test cookie
  try {
    await cookieStore.set("cookie1", "cookie1-value");
  } catch (error) {
    console.log(`Error setting cookie1: ${error}`);
  }

  // Get cookie, specifying name
  const cookie = await cookieStore.get("cookie1");

  if (cookie) {
    console.log(cookie);
  } else {
    console.log("cookie1: Cookie not found");
  }
}

cookieTest();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
