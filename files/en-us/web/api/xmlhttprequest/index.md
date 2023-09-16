---
title: XMLHttpRequest
slug: Web/API/XMLHttpRequest
page-type: web-api-interface
browser-compat: api.XMLHttpRequest
---

{{DefaultAPISidebar("XMLHttpRequest")}}

`XMLHttpRequest` (XHR) objects are used to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing.

`XMLHttpRequest` is used heavily in [AJAX](/en-US/docs/Web/Guide/AJAX) programming.

{{InheritanceDiagram}}

Despite its name, `XMLHttpRequest` can be used to retrieve any type of data, not just XML.

If your communication needs to involve receiving event data or message data from a server, consider using [server-sent events](/en-US/docs/Web/API/Server-sent_events) through the {{domxref("EventSource")}} interface. For full-duplex communication, [WebSockets](/en-US/docs/Web/API/WebSockets_API) may be a better choice.

{{AvailableInWorkers("notservice")}}

## Constructor

- {{domxref("XMLHttpRequest.XMLHttpRequest", "XMLHttpRequest()")}}
  - : The constructor initializes an `XMLHttpRequest`. It must be called before any other method calls.

## Instance properties

_This interface also inherits properties of {{domxref("XMLHttpRequestEventTarget")}} and of {{domxref("EventTarget")}}._

- {{domxref("XMLHttpRequest.readyState")}} {{ReadOnlyInline}}
  - : Returns a number representing the state of the request.
- {{domxref("XMLHttpRequest.response")}} {{ReadOnlyInline}}
  - : Returns an {{jsxref("ArrayBuffer")}}, a {{domxref("Blob")}}, a {{domxref("Document")}}, a JavaScript object, or a string, depending on the value of {{domxref("XMLHttpRequest.responseType")}}, that contains the response entity body.
- {{domxref("XMLHttpRequest.responseText")}} {{ReadOnlyInline}}
  - : Returns a string that contains the response to the request as text, or `null` if the request was unsuccessful or has not yet been sent.
- {{domxref("XMLHttpRequest.responseType")}}
  - : Specifies the type of the response.
- {{domxref("XMLHttpRequest.responseURL")}} {{ReadOnlyInline}}
  - : Returns the serialized URL of the response or the empty string if the URL is null.
- {{domxref("XMLHttpRequest.responseXML")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("Document")}} containing the response to the request, or `null` if the request was unsuccessful, has not yet been sent, or cannot be parsed as XML or HTML. Not available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API).
- {{domxref("XMLHttpRequest.status")}} {{ReadOnlyInline}}
  - : Returns the [HTTP response status code](/en-US/docs/Web/HTTP/Status) of the request.
- {{domxref("XMLHttpRequest.statusText")}} {{ReadOnlyInline}}

  - : Returns a string containing the response string returned by the HTTP server. Unlike {{domxref("XMLHttpRequest.status")}}, this includes the entire text of the response message ("`OK`", for example).

    > **Note:** According to the HTTP/2 specification {{RFC(7540, "Response Pseudo-Header Fields", "8.1.2.4")}}, HTTP/2 does not define a way to carry the version or reason phrase that is included in an HTTP/1.1 status line.

- {{domxref("XMLHttpRequest.timeout")}}
  - : The time in milliseconds a request can take before automatically being terminated.
- {{domxref("XMLHttpRequest.upload")}} {{ReadOnlyInline}}
  - : A {{domxref("XMLHttpRequestUpload")}} representing the upload process.
- {{domxref("XMLHttpRequest.withCredentials")}}
  - : Returns `true` if cross-site `Access-Control` requests should be made using credentials such as cookies or authorization headers; otherwise `false`.

### Non-standard properties

- {{domxref("XMLHttpRequest.channel")}} {{ReadOnlyInline}}
  - : The channel used by the object when performing the request.
- {{domxref("XMLHttpRequest.mozAnon")}} {{ReadOnlyInline}}
  - : A boolean. If true, the request will be sent without cookie and authentication headers.
- {{domxref("XMLHttpRequest.mozSystem")}} {{ReadOnlyInline}}
  - : A boolean. If true, the same origin policy will not be enforced on the request.
- {{domxref("XMLHttpRequest.mozBackgroundRequest")}}
  - : A boolean. It indicates whether or not the object represents a background service request.

## Instance methods

- {{domxref("XMLHttpRequest.abort()")}}
  - : Aborts the request if it has already been sent.
- {{domxref("XMLHttpRequest.getAllResponseHeaders()")}}
  - : Returns all the response headers, separated by {{Glossary("CRLF")}}, as a string, or `null` if no response has been received.
- {{domxref("XMLHttpRequest.getResponseHeader()")}}
  - : Returns the string containing the text of the specified header, or `null` if either the response has not yet been received or the header doesn't exist in the response.
- {{domxref("XMLHttpRequest.open()")}}
  - : Initializes a request.
- {{domxref("XMLHttpRequest.overrideMimeType()")}}
  - : Overrides the MIME type returned by the server.
- {{domxref("XMLHttpRequest.send()")}}
  - : Sends the request. If the request is asynchronous (which is the default), this method returns as soon as the request is sent.
- {{domxref("XMLHttpRequest.setRequestHeader()")}}
  - : Sets the value of an HTTP request header. You must call `setRequestHeader()` after {{domxref("XMLHttpRequest.open", "open()")}}, but before {{domxref("XMLHttpRequest.send", "send()")}}.

## Events

- {{domxref("XMLHttpRequest/abort_event", "abort")}}
  - : Fired when a request has been aborted, for example because the program called {{domxref("XMLHttpRequest.abort()")}}.
    Also available via the `onabort` event handler property.
- {{domxref("XMLHttpRequest/error_event", "error")}}
  - : Fired when the request encountered an error.
    Also available via the `onerror` event handler property.
- {{domxref("XMLHttpRequest/load_event", "load")}}
  - : Fired when an `XMLHttpRequest` transaction completes successfully.
    Also available via the `onload` event handler property.
- {{domxref("XMLHttpRequest/loadend_event", "loadend")}}
  - : Fired when a request has completed, whether successfully (after {{domxref("XMLHttpRequest/load_event", "load")}}) or unsuccessfully (after {{domxref("XMLHttpRequest/abort_event", "abort")}} or {{domxref("XMLHttpRequest/error_event", "error")}}).
    Also available via the `onloadend` event handler property.
- {{domxref("XMLHttpRequest/loadstart_event", "loadstart")}}
  - : Fired when a request has started to load data.
    Also available via the `onloadstart` event handler property.
- {{domxref("XMLHttpRequest/progress_event", "progress")}}
  - : Fired periodically when a request receives more data.
    Also available via the `onprogress` event handler property.
- {{domxref("XMLHttpRequest/readystatechange_event", "readystatechange")}}
  - : Fired whenever the {{domxref("XMLHttpRequest.readyState", "readyState")}} property changes.
    Also available via the `onreadystatechange` event handler property.
- {{domxref("XMLHttpRequest/timeout_event", "timeout")}}
  - : Fired when progress is terminated due to preset time expiring.
    Also available via the `ontimeout` event handler property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XMLSerializer")}}: Serializing a DOM tree into XML
- MDN tutorials covering `XMLHttpRequest`:

  - [Ajax](/en-US/docs/Web/Guide/AJAX)
  - [Using XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
  - [HTML in XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)
  - [Fetch API](/en-US/docs/Web/API/Fetch_API)

- [New Tricks in XMLHttpRequest2 (2011)](https://web.dev/xhr2/)
