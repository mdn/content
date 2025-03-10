---
title: "XMLHttpRequest: getResponseHeader() method"
short-title: getResponseHeader()
slug: Web/API/XMLHttpRequest/getResponseHeader
page-type: web-api-instance-method
browser-compat: api.XMLHttpRequest.getResponseHeader
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

The {{DOMxRef("XMLHttpRequest")}} method
**`getResponseHeader()`** returns the string containing the
text of a particular header's value.

If there are multiple response headers
with the same name, then their values are returned as a single concatenated string,
where each value is separated from the previous one by a pair of comma and space. The
`getResponseHeader()` method returns the value as a UTF byte sequence.

> [!NOTE]
> The search for the header name is case-insensitive.

If you need to get the raw string of all of the headers, use the
{{DOMxRef("XMLHttpRequest.getAllResponseHeaders", "getAllResponseHeaders()")}} method,
which returns the entire raw header string.

## Syntax

```js-nolint
getResponseHeader(headerName)
```

### Parameters

- `headerName`
  - : A string indicating the name of the header you want to return the
    text value of.

### Return value

A string representing the header's text value, or `null`
if either the response has not yet been received or the header doesn't exist in the
response.

## Examples

In this example, a request is created and sent, and a {{domxref("XMLHttpRequest/readystatechange_event", "readystatechange")}}
handler is established to look for the {{DOMxRef("XMLHttpRequest.readyState", "readyState")}}
to indicate that the headers have been received; when that is the case,
the value of the {{httpheader("Content-Type")}} header is fetched. If the
`Content-Type` isn't the desired value, the {{DOMxRef("XMLHttpRequest")}} is
canceled by calling {{DOMxRef("XMLHttpRequest.abort", "abort()")}}.

```js
const client = new XMLHttpRequest();
client.open("GET", "unicorns-are-awesome.txt", true);
client.send();

client.onreadystatechange = () => {
  if (client.readyState === client.HEADERS_RECEIVED) {
    const contentType = client.getResponseHeader("Content-Type");
    if (contentType !== my_expected_type) {
      client.abort();
    }
  }
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [HTTP headers](/en-US/docs/Web/HTTP/Headers)
- {{DOMxRef("XMLHttpRequest.getAllResponseHeaders", "getAllResponseHeaders()")}}
- {{DOMxRef("XMLHttpRequest.response", "response")}}
- Setting request headers: {{DOMxRef("XMLHttpRequest.setRequestHeader", "setRequestHeader()")}}
