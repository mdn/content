---
title: "Headers: Headers() constructor"
short-title: Headers()
slug: Web/API/Headers/Headers
page-type: web-api-constructor
browser-compat: api.Headers.Headers
---

{{APIRef("Fetch API")}}

The **`Headers()`** constructor creates a new
{{domxref("Headers")}} object.

## Syntax

```js-nolint
new Headers()
new Headers(init)
```

### Parameters

- `init` {{optional_inline}}
  - : An object containing any [HTTP headers](/en-US/docs/Web/HTTP/Headers)
    that you want to pre-populate your `Headers` object with. This can be a
    simple object literal with {{jsxref("String")}} values, an array of name-value pairs, where each pair is a 2-element string array; or an existing
    `Headers` object. In the last case, the new `Headers` object
    copies its data from the existing `Headers` object.

## Examples

Creating an empty `Headers` object is simple:

```js
const myHeaders = new Headers(); // Currently empty
```

You could add a header to this using {{domxref("Headers.append")}}:

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.get("Content-Type"); // Returns 'image/jpeg'
```

Or you can add the headers you want as the `Headers` object is created. In
the following snippet we create a new {{domxref("Headers")}} object, adding some headers
by passing the constructor an init object as an argument:

```js
const httpHeaders = {
  "Content-Type": "image/jpeg",
  "X-My-Custom-Header": "Zeke are cool",
};
const myHeaders = new Headers(httpHeaders);
```

You can now create another `Headers` object, passing it the first
`Headers` object as its init object:

```js
const secondHeadersObj = new Headers(myHeaders);
secondHeadersObj.get("Content-Type"); // Would return 'image/jpeg' — it inherits it from the first headers object
```

You can also add the headers you want as the `Headers` object is created by using a two-dimensional array to add multiple headers with the same values. In
the following snippet we create a new {{domxref("Headers")}} object with multiple `Set-Cookie` headers
by passing the constructor an init array as an argument:

```js
const headers = [
  ["Set-Cookie", "greeting=hello"],
  ["Set-Cookie", "name=world"],
];
const myHeaders = new Headers(headers);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
