---
title: "CookieStore: getAll() method"
short-title: getAll()
slug: Web/API/CookieStore/getAll
page-type: web-api-instance-method
browser-compat: api.CookieStore.getAll
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

The **`getAll()`** method of the {{domxref("CookieStore")}} interface returns a {{jsxref("Promise")}} that resolves as an array of cookies that match the `name` or `options` passed to it.
Passing no parameters will return all cookies for the current context.

## Syntax

```js-nolint
getAll()
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

> [!NOTE]
> The `url` option enables the modification of a cookie scoped under a particular URL. Service workers can obtain cookies that would be sent to any URL under their scope. From a document you may only obtain the cookies at the current URL, so the only valid URL in a document context is the document's URL.

### Return value

A {{jsxref("Promise")}} that resolves with an array of objects representing cookies that match the given `name` or `options`.

Each object contains the following properties:

- `domain`

  - : A string containing the domain of the cookie.

- `expires`

  - : A timestamp, given as [Unix time](/en-US/docs/Glossary/Unix_time) in milliseconds, containing the expiration date of the cookie.

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
    - The method is called in the main thread, and the `url` option is specified but does not match the URL of the current window.
    - The method is called in a worker and the `url` option is specified, but does not match the origin of the worker.
    - Querying cookies represented by the given `name` or `options` fails.

## Examples

<!-- The examples don't work as live examples in MDN environment (due to unknown errors) -->

### Get all cookies for this context

This example shows how to get all cookies in the current context.

First we define `setTestCookies()` which creates the test cookies "cookie1" and "cookie2", logging any errors.

```js
async function setTestCookies() {
  // Set two cookies
  try {
    await cookieStore.set("cookie1", "cookie1-value");
  } catch (error) {
    console.log(`Error setting cookie1: ${error}`);
  }

  try {
    await cookieStore.set("cookie2", "cookie2-value");
  } catch (error) {
    console.log(`Error setting cookie2: ${error}`);
  }
}
```

The `cookieTest()` method calls `setTestCookies()` and then waits on `getAll()`.
This returns a {{jsxref("Promise")}} that resolves with all of the cookies for this context as an array of objects, or an empty array if there are no cookies.
If the returned promise resolves with array containing cookie information we iterate the array and log each cookie ("cookie1" and "cookie2").

```js
async function cookieTest() {
  // Set our test cookies
  await setTestCookies();

  // Get all cookies
  const cookies = await cookieStore.getAll();

  // Iterate the cookies, or log that none were found
  if (cookies.length > 0) {
    console.log(`Found cookies: ${cookies.length}:`);
    cookies.forEach((cookie) => console.log(cookie));
  } else {
    console.log("Cookies not found");
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
