---
title: "CookieStore: delete() method"
short-title: delete()
slug: Web/API/CookieStore/delete
page-type: web-api-instance-method
browser-compat: api.CookieStore.delete
---

{{securecontext_header}}{{APIRef("Cookie Store API")}} {{AvailableInWorkers}}

The **`delete()`** method of the {{domxref("CookieStore")}} interface deletes a cookie with the given name or options object. The `delete()` method expires the cookie by changing the date to one in the past.

## Syntax

```js-nolint
delete(name)
delete(options)
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
    - `domain` {{Optional_Inline}}
      - : A string with the domain of a cookie. Defaults to `null`.
    - `path` {{Optional_Inline}}
      - : A string containing a path. Defaults to `/`.
    - `partitioned` {{Optional_Inline}}
      - : A boolean value that defaults to `false`. Setting it to `true` specifies that the cookie to delete will be a partitioned cookie. See [Cookies Having Independent Partitioned State (CHIPS)](/en-US/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies) for more information.

> **Note:** The `url` option enables the modification of a cookie scoped under a particular URL. Service workers can obtain cookies that would be sent to any URL under their scope. From a document you may only obtain the cookies at the current URL, so the only valid URL in a document context is the document's URL.

### Return value

A {{jsxref("Promise")}} that resolves with {{jsxref("undefined")}} when deletion completes.

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the origin can not be {{glossary("Serialization", "serialized")}} to a URL.
- {{jsxref("TypeError")}}
  - : Thrown if deleting the cookie represented by the given `name` or `options` fails.

## Examples

In this example, a cookie is deleted by passing the name to the `delete()` method.

```js
const result = cookieStore.delete("cookie1");

console.log(result);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
