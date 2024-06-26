---
title: "Request: integrity property"
short-title: integrity
slug: Web/API/Request/integrity
page-type: web-api-instance-property
browser-compat: api.Request.integrity
---

{{APIRef("Fetch API")}}

The **`integrity`** read-only property of the {{domxref("Request")}} interface contains the [subresource integrity](/en-US/docs/Web/Security/Subresource_Integrity) value of the request.

If this property has been set and is formatted correctly, then it will be checked when the resource is fetched, just as it would be when the [`integrity`](/en-US/docs/Web/HTML/Element/script#integrity) attribute is set on a {{htmlelement("script")}} element. The browser will compute the {{glossary("Cryptographic_hash_function", "hash")}} of the fetched resource using the specified algorithm, and if the result does not match the value specified in `integrity`, the browser will reject the fetch request with a network error.

If the property is set but not formatted correctly, it will be ignored.

## Value

The value that was passed as the `options.integrity` argument when constructing the `Request`.

It uses the same format as for the [`integrity`](/en-US/docs/Web/HTML/Element/script#integrity) attribute of the {{htmlelement("script")}} element, that is:

```plain
<hash-algo>-<hash-source>
```

where `<hash-algo>` may be any of: `sha256`, `sha384`, or `sha512`, and `<hash-source>` is the {{glossary("base64", "Base64-encoding")}} of the result of hashing the resource with the specified hash algorithm.

This format is not checked when the request is constructed, but only when the resource is fetched and checked.

If `integrity` has not been set, the property returns `''`.

## Examples

In the following example, we create a new request using the {{domxref("Request/Request", "Request()")}} constructor, passing the `integrity` option:

```js
const url = "https://example.org/get";

const request = new Request(url, {
  integrity:
    "sha384-S7LbAN3xH4xlzxftfaRs9wN4rIKBEddDxLjOykiX+iUI9G3eXBy2rGBRHi5xMuOR",
});

async function get(request) {
  const response = await fetch(request);
  console.log(response.status);
  // ...
}
```

When the request is made, the browser computes the SHA-384 {{glossary("Cryptographic_hash_function", "hash")}} of the fetched resource. If the result does not match the value specified in `integrity`, the browser will reject the fetch request.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Subresource Integrity](/en-US/docs/Web/Security/Subresource_Integrity)
