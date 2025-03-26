---
title: "CookieStore: set() method"
short-title: set()
slug: Web/API/CookieStore/set
page-type: web-api-instance-method
browser-compat: api.CookieStore.set
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

The **`set()`** method of the {{domxref("CookieStore")}} interface sets a cookie with the given `name` and `value` or `options` object.

## Syntax

```js-nolint
set(name, value)
set(options)
```

### Parameters

This method requires one of the following:

- `name` {{optional_inline}}
  - : A string with the name of the cookie.
- `value` {{optional_inline}}
  - : A string with the value of the cookie.

Or

- `options` {{optional_inline}}

  - : An object containing:

    - `domain` {{Optional_Inline}}
      - : A string containing the domain of the cookie. Defaults to `null`.
    - `expires` {{Optional_Inline}}
      - : A timestamp, given as {{glossary("Unix time")}} in milliseconds, containing the expiration date of the cookie. Defaults to `null`.
    - `name`
      - : A string with the name of a cookie.
    - `partitioned` {{Optional_Inline}}
      - : A boolean value that defaults to `false`. If set to `true`, the set cookie will be a partitioned cookie. See [Cookies Having Independent Partitioned State (CHIPS)](/en-US/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) for more information.
    - `path` {{Optional_Inline}}
      - : A string containing the path of the cookie. Defaults to `/`.
    - `sameSite` {{Optional_Inline}}
      - : One of the following [`SameSite`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) values: [`"strict"`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#strict), [`"lax"`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#lax), or [`"none"`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#none).
    - `value`
      - : A string with the value of the cookie.

> [!NOTE]
> While the values can be set here and will be used internally, some browsers will only return `name` and `value` options from {{domxref("CookieStore.get()")}} and {{domxref("CookieStore.getAll()")}}.

### Return value

A {{jsxref("Promise")}} that resolves with {{jsxref("undefined")}} when setting the cookie completes.

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the origin can not be {{glossary("Serialization", "serialized")}} to a URL.
- {{jsxref("TypeError")}}
  - : Thrown if setting the cookie with the given `name` and `value` or `options` fails.

## Examples

<!-- The examples don't work as live examples in MDN environment (due to unknown errors) -->

### Setting a cookie with name and value

This example sets a cookie by passing a `name` and `value` of "cookie1" and "cookie1-value", respectively.
The other properties of the cookie are set with default values, as defined in the [`options`](#options) parameter.

The code first waits for the cookie to be set: as this operation can fail, the operation is performed in a `try...catch` block and any errors are logged to the console.
It then gets and logs the cookie that was just set.

```js
async function cookieTest() {
  // Set cookie: passing name and value
  try {
    await cookieStore.set("cookie1", "cookie1-value");
  } catch (error) {
    console.log(`Error setting cookie1: ${error}`);
  }

  // Get the cookie and log its values
  const cookie = await cookieStore.get("cookie1");
  console.log(cookie);
}
```

### Setting a cookie with options

This example sets a cookie by passing an `options` object with `name`, `value`, `expires`, and `partitioned`.

The code first waits for the cookie to be set: as this operation can fail, the operation is performed in a `try...catch` block and any errors are logged to the console.
It then gets and logs the cookie that was just set.

```js
async function cookieTest() {
  const day = 24 * 60 * 60 * 1000;
  const cookieName = "cookie2";
  try {
    // Set cookie: passing options
    await cookieStore.set({
      name: cookieName,
      value: `${cookieName}-value`,
      expires: Date.now() + day,
      partitioned: true,
    });
  } catch (error) {
    log(`Error setting ${cookieName}: ${error}`);
    console.log(error);
  }

  // Log the new cookie
  const cookie = await cookieStore.get(cookieName);
  console.log(cookie);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
