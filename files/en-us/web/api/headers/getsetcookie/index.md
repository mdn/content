---
title: "Headers: getSetCookie() method"
short-title: getSetCookie()
slug: Web/API/Headers/getSetCookie
page-type: web-api-instance-method
browser-compat: api.Headers.getSetCookie
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

The **`getSetCookie()`** method of the {{domxref("Headers")}} interface returns an array containing the values of all {{httpheader("Set-Cookie")}} headers associated with a response. This allows {{domxref("Headers")}} objects to handle having multiple `Set-Cookie` headers, which wasn't possible prior to its implementation.

This method is intended for use on server environments (for example Node.js). Browsers block frontend JavaScript code from accessing the {{httpheader("Set-Cookie")}} header, as required by the Fetch spec, which defines `Set-Cookie` as a [forbidden response-header name](https://fetch.spec.whatwg.org/#forbidden-response-header-name) that [must be filtered out](https://fetch.spec.whatwg.org/#ref-for-forbidden-response-header-name%E2%91%A0) from any response exposed to frontend code.

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

As alluded to above, running code like the following on the client won't return any results — `Set-Cookie` is filtered out from {{domxref("Headers")}} retrieved over the network.

```js
fetch("https://example.com").then((response) => {
  console.log(response.headers.getSetCookie());
  // No header values returned
});
```

However, the following could be used to query multiple `Set-Cookie` values. This is much more useful on the server, but it would also work on the client.

```js
const headers = new Headers({
  "Set-Cookie": "name1=value1",
});

headers.append("Set-Cookie", "name2=value2");

headers.getSetCookie();
// Returns ["name1=value1", "name2=value2"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTTP](/en-US/docs/Web/HTTP)
- {{httpheader("Set-Cookie")}}
