---
title: "Headers: getSetCookie() method"
short-title: getSetCookie()
slug: Web/API/Headers/getSetCookie
page-type: web-api-instance-method
browser-compat: api.Headers.getSetCookie
---

{{APIRef("Fetch API")}}

The **`getSetCookie()`** method of the {{domxref("Headers")}} interface returns an array containing the values of all {{httpheader("Set-Cookie")}} headers associated with a response.

This allows {{domxref("Headers")}} objects to handle having multiple `Set-Cookie` headers, which wasn't possible prior to its implementation.

## Syntax

```js-nolint
getSetCookie()
```

### Parameters

None.

### Return value

An array of strings representing the values of all the different `Set-Cookie` headers associated with a response.

If no `Set-Cookie` headers are set, the method will return an empty array (`[ ]`).

## Examples

```js
fetch("https://example.com").then((response) => {
  console.log(response.headers.getSetCookie());
  // ["value1", "value2", etc.]
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTTP](/en-US/docs/Web/HTTP)
- {{httpheader("Set-Cookie")}}
