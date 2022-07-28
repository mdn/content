---
title: XMLHttpRequest.responseURL
slug: Web/API/XMLHttpRequest/responseURL
page-type: web-api-instance-property
tags:
  - AJAX
  - Property
  - Read-only
  - Reference
  - URL
  - XMLHttpRequest
  - responseURL
browser-compat: api.XMLHttpRequest.responseURL
---
{{APIRef('XMLHttpRequest')}}

The read-only **`XMLHttpRequest.responseURL`** property returns the serialized URL of the response or the empty string if the URL is `null`. If the URL is returned, any URL fragment present in the URL will be stripped away. The value of `responseURL` will be the final URL obtained after any redirects.

## Example

```js
const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://example.com/test', true);
xhr.onload = () => {
  console.log(xhr.responseURL); // http://example.com/test
};
xhr.send(null);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
