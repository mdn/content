---
title: XMLHttpRequest
slug: Web/API/XMLHttpRequest
tags:
  - AJAX
  - API
  - Communication
  - HTTP
  - Interface
  - Reference
  - Web
  - XHR
  - XMLHttpRequest
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

## Properties

_This interface also inherits properties of {{domxref("XMLHttpRequestEventTarget")}} and of {{domxref("EventTarget")}}._

- {{domxref("XMLHttpRequest.onreadystatechange")}}
  - : An [Event handler](/en-US/docs/Web/Events/Event_handlers) that is called whenever the `readyState` attribute changes.
- {{domxref("XMLHttpRequest.readyState")}} {{readonlyinline}}
  - : Returns an `unsigned short`, the state of the request.
- {{domxref("XMLHttpRequest.response")}} {{readonlyinline}}
  - : Returns an {{jsxref("ArrayBuffer")}}, {{domxref("Blob")}}, {{domxref("Document")}}, JavaScript object, or a {{domxref("DOMString")}}, depending on the value of {{domxref("XMLHttpRequest.responseType")}}, that contains the response entity body.
- {{domxref("XMLHttpRequest.responseText")}} {{readonlyinline}}
  - : Returns a {{domxref("DOMString")}} that contains the response to the request as text, or `null` if the request was unsuccessful or has not yet been sent.
- {{domxref("XMLHttpRequest.responseType")}}
  - : Is an enumerated value that defines the response type.
- {{domxref("XMLHttpRequest.responseURL")}} {{readonlyinline}}
  - : Returns the serialized URL of the response or the empty string if the URL is null.
- {{domxref("XMLHttpRequest.responseXML")}} {{readonlyinline}}
  - : Returns a {{domxref("Document")}} containing the response to the request, or `null` if the request was unsuccessful, has not yet been sent, or cannot be parsed as XML or HTML. Not available in workers.
- {{domxref("XMLHttpRequest.status")}} {{readonlyinline}}
  - : Returns an `unsigned short` with the status of the response of the request.
- {{domxref("XMLHttpRequest.statusText")}} {{readonlyinline}}

  - : Returns a {{domxref("DOMString")}} containing the response string returned by the HTTP server. Unlike {{domxref("XMLHttpRequest.status")}}, this includes the entire text of the response message ("`200 OK`", for example).

    > **Note:** According to the HTTP/2 specification ([8.1.2.4](https://http2.github.io/http2-spec/#rfc.section.8.1.2.4) [Response Pseudo-Header Fields](https://http2.github.io/http2-spec/#HttpResponse)), HTTP/2 does not define a way to carry the version or reason phrase that is included in an HTTP/1.1 status line.

- {{domxref("XMLHttpRequest.timeout")}}
  - : Is an `unsigned long` representing the number of milliseconds a request can take before automatically being terminated.
- {{domxref("XMLHttpRequestEventTarget.ontimeout")}}
  - : Is an [Event handler](/en-US/docs/Web/Events/Event_handlers) that is called whenever the request times out.
- {{domxref("XMLHttpRequest.upload")}} {{readonlyinline}}
  - : Is an {{domxref("XMLHttpRequestUpload")}}, representing the upload process.
- {{domxref("XMLHttpRequest.withCredentials")}}
  - : Is a boolean value that indicates whether or not cross-site `Access-Control` requests should be made using credentials such as cookies or authorization headers.

### Non-standard properties

- {{domxref("XMLHttpRequest.channel")}}{{ReadOnlyInline}}
  - : The channel used by the object when performing the request.
- {{domxref("XMLHttpRequest.mozAnon")}}{{ReadOnlyInline}}
  - : Is a boolean. If true, the request will be sent without cookie and authentication headers.
- {{domxref("XMLHttpRequest.mozSystem")}}{{ReadOnlyInline}}
  - : Is a boolean. If true, the same origin policy will not be enforced on the request.
- {{domxref("XMLHttpRequest.mozBackgroundRequest")}}
  - : Is a boolean. It indicates whether or not the object represents a background service request.

### Event handlers

`onreadystatechange` as a property of the `XMLHttpRequest` instance is supported in all browsers.

Since then, a number of additional `on*` event handler properties have been implemented in various browsers (`onload`, `onerror`, `onprogress`, etc.). See [Using XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest).

More recent browsers, including Firefox, also support listening to the `XMLHttpRequest` events via standard {{domxref("EventTarget.addEventListener", "addEventListener()")}} APIs in addition to setting `on*` properties to a handler function.

## Methods

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
  - : Sets the value of an HTTP request header. You must call `setRequestHeader()`after [`open()`](#open), but before `send()`.

## Events

- {{domxref("XMLHttpRequest/abort_event", "abort")}}
  - : Fired when a request has been aborted, for example because the program called {{domxref("XMLHttpRequest.abort()")}}.
    Also available via the {{domxref("XMLHttpRequestEventTarget/onabort", "onabort")}} property.
- {{domxref("XMLHttpRequest/error_event", "error")}}
  - : Fired when the request encountered an error.
    Also available via the {{domxref("XMLHttpRequestEventTarget/onerror", "onerror")}} property.
- {{domxref("XMLHttpRequest/load_event", "load")}}
  - : Fired when an {{domxref("XMLHttpRequest")}} transaction completes successfully.
    Also available via the {{domxref("XMLHttpRequestEventTarget/onload", "onload")}} property.
- {{domxref("XMLHttpRequest/loadend_event", "loadend")}}
  - : Fired when a request has completed, whether successfully (after {{domxref("XMLHttpRequest/load_event", "load")}}) or unsuccessfully (after {{domxref("XMLHttpRequest/abort_event", "abort")}} or {{domxref("XMLHttpRequest/error_event", "error")}}).
    Also available via the {{domxref("XMLHttpRequestEventTarget/onloadend", "onloadend")}} property.
- {{domxref("XMLHttpRequest/loadstart_event", "loadstart")}}
  - : Fired when a request has started to load data.
    Also available via the {{domxref("XMLHttpRequestEventTarget/onloadstart", "onloadstart")}} property.
- {{domxref("XMLHttpRequest/progress_event", "progress")}}
  - : Fired periodically when a request receives more data.
    Also available via the {{domxref("XMLHttpRequestEventTarget/onprogress", "onprogress")}} property.
- {{domxref("XMLHttpRequest/timeout_event", "timeout")}}
  - : Fired when progress is terminated due to preset time expiring.
    Also available via the {{domxref("XMLHttpRequestEventTarget/ontimeout", "ontimeout")}} property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XMLSerializer")}}: Serializing a DOM tree into XML
- MDN tutorials covering `XMLHttpRequest`:

  - [Ajax — Getting Started](/en-US/docs/Web/Guide/AJAX/Getting_Started)
  - [Using XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
  - [HTML in XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)
  - [Fetch API](/en-US/docs/Web/API/Fetch_API "Fetch API")

- [HTML5 Rocks — New Tricks in XMLHttpRequest2](https://www.html5rocks.com/en/tutorials/file/xhr2/)
- Feature-Policy directive {{httpheader("Feature-Policy/sync-xhr", "sync-xhr")}}
