---
title: "Request: destination property"
short-title: destination
slug: Web/API/Request/destination
page-type: web-api-instance-property
browser-compat: api.Request.destination
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

The **`destination`** read-only
property of the **{{domxref("Request")}}** interface returns a string
describing the type of content being requested.

The string must be one of the `audio`, `audioworklet`,
`document`, `embed`, `fencedframe`, `font`, `frame`,
`iframe`, `image`, `json`, `manifest`, `object`,
`paintworklet`, `report`, `script`, `sharedworker`,
`style`, `track`, `video`, `worker`
or `xslt` strings, or the empty string, which is the default value.

The `destination` is used by the {{Glossary("user agent")}} to, for example,
help determine which set of rules to follow for CORS purposes, or how to navigate any
complicated code paths that affect how specific types of request get handled.

These destinations vary substantially in how they operate. Some are data receptacles,
where the received data is stored for processing later. Others are script-based, in
which case the received data is delivered to a script by calling it and passing the data
along. Script-based destinations include {{HTMLElement("script")}} elements, as well as
any of the {{domxref("Worklet")}}-based destinations
(including subclasses like {{domxref("AudioWorklet")}}), and the
{{domxref("Worker")}}-based destinations, including {{domxref("ServiceWorker")}}
and {{domxref("SharedWorker")}}.

## Value

A string which indicates the type of content the request is asking for. This type is much broader than the usual document type values (such as `"document"` or `"manifest"`), and may include contextual cues such as `"image"` or `"worker"` or `"audioworklet"`.

Possible values are:

- `""`

  - : The empty string is the default value, and is used for destinations that do not have their own value. This is the value when requests are made using the following APIs (among others):
    - [`<a ping>`](/en-US/docs/Web/HTML/Element/a#ping)
    - [`<area ping>`](/en-US/docs/Web/HTML/Element/area#ping)
    - {{domxref("Cache")}}
    - {{domxref("EventSource")}}
    - {{domxref("Window/fetch", "fetch()")}}
    - {{domxref("navigator.sendBeacon()")}}
    - {{domxref("WebSocket")}}
    - {{domxref("XMLHttpRequest")}}

- `"audio"`
  - : The target is audio data.
- `"audioworklet"`
  - : The target is data being fetched for use by an audio worklet.
- `"document"`
  - : The target is a document (HTML or XML).
- `"embed"`
  - : The target is embedded content.
- `"fencedframe"`
  - : The target is a [fenced frame](/en-US/docs/Web/API/Fenced_frame_API).
- `"font"`
  - : The target is a font.
- `"image"`
  - : The target is an image.
- `"json"`
  - : The target is a JSON file.
- `"manifest"`
  - : The target is a manifest.
- `"object"`
  - : The target is an object.
- `"paintworklet"`
  - : The target is a paint worklet.
- `"report"`
  - : The target is a report.
- `"script"`
  - : The target is a script.
- `"serviceworker"`
  - : The target is a service worker.
- `"sharedworker"`
  - : The target is a shared worker.
- `"style"`
  - : The target is a style
- `"track"`
  - : The target is an HTML {{HTMLElement("track")}}.
- `"video"`
  - : The target is video data.
- `"worker"`
  - : The target is a worker.
- `"xslt"`
  - : The target is an XSLT transform.

## Examples

In the following snippet, we create a new request using the
{{domxref("Request.Request", "Request()")}} constructor (for an image file in the same
directory as the script), then save the request's destination:

```js
const myRequest = new Request("flowers.jpg");
const myDestination = myRequest.destination; // returns the empty string by default
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
