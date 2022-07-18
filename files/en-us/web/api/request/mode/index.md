---
title: Request.mode
slug: Web/API/Request/mode
page-type: web-api-instance-property
tags:
  - API
  - Fetch
  - Property
  - Reference
  - mode
  - request
browser-compat: api.Request.mode
---
{{APIRef("Fetch")}}

The **`mode`** read-only property of the {{domxref("Request")}}
interface contains the mode of the request (e.g., `cors`,
`no-cors`, `same-origin`, `navigate` or `websocket`.) This is used
to determine if cross-origin requests lead to valid responses, and which properties of the response are readable.

## Value

- A `RequestMode` value.

  - : The associated _mode_, available values of which are:

    - `same-origin`
      - : If a request is made to another origin with this mode
        set, the result is an error. You could use this to ensure that a request is always
        being made to your origin.
    - `no-cors`
      - : Prevents the method from being anything other than
        `HEAD`, `GET` or `POST`, and the headers from
        being anything other than [simple headers](https://fetch.spec.whatwg.org/#simple-header). If any
        ServiceWorkers intercept these requests, they may not add or override any headers
        except for those that are [simple headers](https://fetch.spec.whatwg.org/#simple-header). In
        addition, JavaScript may not access any properties of the resulting
        {{domxref("Response")}}. This ensures that ServiceWorkers do not affect the
        semantics of the Web and prevents security and privacy issues arising from leaking
        data across domains.
    - `cors`
      - : Allows cross-origin requests, for example to access various
        APIs offered by 3rd party vendors. These are expected to adhere to the [CORS protocol](/en-US/docs/Web/HTTP/CORS). Only a [limited set](https://fetch.spec.whatwg.org/#concept-filtered-response-cors) of headers are exposed in the {{domxref("Response")}}, but the body is
        readable.
    - `navigate`
      - : A mode for supporting navigation. The `navigate` value is intended to be used only by HTML navigation. A navigate request is created only while navigating between documents.
    - `websocket`
      - : A special mode used only when establishing a [WebSocket](/en-US/docs/Web/API/WebSockets_API) connection.

#### Default mode

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
const myRequest = new Request('flowers.jpg');
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
