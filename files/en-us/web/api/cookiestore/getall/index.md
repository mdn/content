---
title: CookieStore.getAll()
slug: Web/API/CookieStore/getAll
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - getAll()
  - CookieStore
  - Experimental
browser-compat: api.CookieStore.getAll
---
{{securecontext_header}}{{APIRef("Cookie Store API")}}{{SeeCompatTable}}

The **`getAll()`** method of the {{domxref("CookieStore")}} interface returns a list of cookies that match the name or options passed to it. Passing no parameters will return all cookies for the current context.

## Syntax

```js
getAll(name)
getAll(options)
```

### Parameters

- `name` {{optional_inline}}
  - : A string with the name of a cookie.
- `options` {{optional_inline}}

  - : An object containing:

    - `name`
      - : A string with the name of a cookie.
    - `url`
      - : A string with the URL of a cookie.

> **Note:** The `url` option enables the modification of a cookie scoped under a particular URL. Service workers can obtain cookies that would be sent to any URL under their scope. From a document you may only obtain the cookies at the current URL, so the only valid URL in a document context is the document's URL.

### Return value

A {{jsxref("Promise")}} that resolves with a list of cookies for the given name or options.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if getting the cookie or cookies represented by the given `name` or `options` fails.

## Examples

In this example we use `getAll()` with no parameters. This returns all of the cookies for this context as an array of objects.

```js
let cookies = cookieStore.getAll();
if (cookies) {
  console.log(cookies);
} else {
  console.log('Cookie not found');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
