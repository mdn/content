---
title: CookieStore.delete()
slug: Web/API/CookieStore/delete
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - delete()
  - CookieStore
  - Experimental
browser-compat: api.CookieStore.delete
---
{{securecontext_header}}{{APIRef("Cookie Store API")}}{{SeeCompatTable}}

The **`delete()`** method of the {{domxref("CookieStore")}} interface deletes a cookie with the given name or options object. (See below.) The `delete()` method expires the cookie by changing the date to one in the past.

## Syntax

```js
delete(name)
delete(options)
```

### Parameters

This method requires one of the following:

- `name`
  - : A string with the name of a cookie.
- `options`

  - : An object containing:

    - `name`
      - : A string with the name of a cookie.
    - `url` {{Optional_Inline}}
      - : A string with the URL of a cookie.
    - `path` {{Optional_Inline}}
      - : A string containing a path.

> **Note:** The `url` option enables the modification of a cookie scoped under a particular URL. Service workers can obtain cookies that would be sent to any URL under their scope. From a document you may only obtain the cookies at the current URL, so the only valid URL in a document context is the document's URL.

### Return value

A {{jsxref("Promise")}} that resolves with {{jsxref("undefined")}} when deletion completes.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if deleting the cookie represented by the given `name` or `options` fails.

## Examples

In this example a cookie is deleted by passing the name to the `delete()` method.

```js
let result = cookieStore.delete('cookie1');
console.log(result);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
