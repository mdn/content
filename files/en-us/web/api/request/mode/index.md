---
title: "Request: mode property"
short-title: mode
slug: Web/API/Request/mode
page-type: web-api-instance-property
browser-compat: api.Request.mode
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

The **`mode`** read-only property of the {{domxref("Request")}}
interface contains the mode of the request (e.g., `cors`,
`no-cors`, `same-origin`, or `navigate`.) This is used
to determine if cross-origin requests lead to valid responses, and which properties of the response are readable.

To construct a request with a specific mode, pass the desired value as the {{domxref("RequestInit", "", "mode")}} option to the {{domxref("Request.Request()")}} constructor.

Note that setting particular modes, especially `no-cors`, places restrictions on the request methods and headers that may be used, and prevents JavaScript from accessing the response headers or body. See the documentation for {{domxref("RequestInit", "", "mode")}} for more details.

## Value

One of the following values:

- `same-origin`

  - : Disallows cross-origin requests. If a request is made to another origin with this mode set, the result is an error.

- `no-cors`

  - : Disables CORS for cross-origin requests. The response is _opaque_, meaning that its headers and body are not available to JavaScript.

- `cors`

  - : If the request is cross-origin then it will use the [Cross-Origin Resource Sharing (CORS)](/en-US/docs/Web/HTTP/CORS) mechanism.

- `navigate`

  - : A mode for supporting navigation. The `navigate` value is intended to be used only by HTML navigation. A navigate request is created only while navigating between documents.

### Default mode

Requests can be initiated in a variety of ways, and the mode for a request depends on
the particular means by which it was initiated.

For example, when a `Request` object is created using the
{{domxref("Request.Request", "Request()")}} constructor, the value of the `mode` property
for that `Request` is set to `cors`.

However, for requests created other than by the {{domxref("Request.Request", "Request()")}}
constructor, `no-cors` is typically used as the mode; for example, for
embedded resources where the request is initiated from markup, unless the
[`crossorigin`](/en-US/docs/Web/HTML/Attributes/crossorigin)
attribute is present, the request is in most cases made using the `no-cors`
mode — that is, for the {{HTMLElement("link")}} or {{HTMLElement("script")}} elements
(except when used with modules), or {{HTMLElement("img")}}, {{HTMLElement("audio")}},
{{HTMLElement("video")}}, {{HTMLElement("object")}}, {{HTMLElement("embed")}}, or
{{HTMLElement("iframe")}} elements.

## Examples

In the following snippet, we create a new request using the
{{domxref("Request.Request", "Request()")}} constructor (for an image file in the same directory as
the script), then save the request mode in a variable:

```js
const myRequest = new Request("flowers.jpg");
const myMode = myRequest.mode; // returns "cors" by default
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
