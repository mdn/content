---
title: XMLHttpRequest API
slug: Web/API/XMLHttpRequest_API
page-type: web-api-overview
browser-compat: api.XMLHttpRequest
spec-urls: https://xhr.spec.whatwg.org/
---

{{DefaultAPISidebar("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

The **XMLHttpRequest API** enables web apps to make HTTP requests to web servers and receive the responses programmatically using JavaScript. This in turn enables a website to update just part of a page with data from the server, rather than having to navigate to a whole new page. This practice is also sometimes known as {{glossary("AJAX")}}.

The [Fetch API](/en-US/docs/Web/API/Fetch_API) is the more flexible and powerful replacement for the XMLHttpRequest API. The Fetch API uses {{jsxref("Promise", "promises", "", 1)}} instead of events to handle asynchronous responses, integrates well with [service workers](/en-US/docs/Web/API/Service_Worker_API), and supports advanced aspects of HTTP such as [CORS](/en-US/docs/Web/HTTP/CORS). For these reasons, the Fetch API is usually used in modern web apps instead of {{domxref("XMLHttpRequest")}}.

## Concepts and usage

The central interface in the XMLHttpRequest API is {{domxref("XMLHttpRequest")}}. To make an HTTP request:

1. Create a new `XMLHttpRequest` instance by calling its {{domxref("XMLHttpRequest.XMLHttpRequest", "constructor", "", "nocode")}}.
2. Initialize it by calling {{domxref("XMLHttpRequest.open()")}}. At this point you provide the URL for the request, the [HTTP method](/en-US/docs/Web/HTTP/Methods) to use, and optionally, a username and password.
3. Attach event handlers to get the result of the request. For example, the {{domxref("XMLHttpRequest.load_event", "load")}} event is fired when the request has successfully completed, and the {{domxref("XMLHttpRequest.error_event", "error")}} event is fired in various error conditions.
4. Send the request by calling {{domxref("XMLHttpRequest.send()")}}.

For an in-depth guide to the XMLHttpRequest API, see [Using XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest).

## Interfaces

- {{domxref("FormData")}}
  - : An object representing {{htmlelement("form")}} fields and their values, which can be sent to a server using {{domxref("XMLHttpRequest")}} or {{domxref("Window/fetch", "fetch()")}}.
- {{domxref("ProgressEvent")}}
  - : A subclass of {{domxref("Event")}} which is passed into the {{domxref("XMLHttpRequest.progress_event", "progress")}}, and which contains information about how much of the request has been completed.
- {{domxref("XMLHttpRequest")}}
  - : Represents a single HTTP request.
- {{domxref("XMLHttpRequestEventTarget")}}
  - : A superclass of both {{domxref("XMLHttpRequest")}} and {{domxref("XMLHttpRequestUpload")}}, defining the events that are available in both of those interfaces.
- {{domxref("XMLHttpRequestUpload")}}
  - : Represents the upload process for an HTTP upload. Provides events enabling code to track the progress of an upload.

## Examples

### Fetching JSON data from the server

In this example we fetch a JSON file from `https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json`, adding event listeners to show the progress of the event.

#### HTML

```html
<div class="controls">
  <button class="xhr" type="button">Click to start XHR</button>
</div>

<textarea readonly class="event-log"></textarea>
```

```css hidden
.event-log {
  width: 25rem;
  height: 5rem;
  border: 1px solid black;
  margin: 0.5rem;
  padding: 0.2rem;
}

button {
  width: 12rem;
  margin: 0.5rem;
}
```

#### JavaScript

```js
const xhrButton = document.querySelector(".xhr");
const log = document.querySelector(".event-log");
const url =
  "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json";

function handleEvent(e) {
  log.textContent = `${log.textContent}${e.type}: ${e.loaded} bytes transferred\n`;
}

function addListeners(xhr) {
  xhr.addEventListener("loadstart", handleEvent);
  xhr.addEventListener("load", handleEvent);
  xhr.addEventListener("loadend", handleEvent);
  xhr.addEventListener("progress", handleEvent);
  xhr.addEventListener("error", handleEvent);
  xhr.addEventListener("abort", handleEvent);
}

xhrButton.addEventListener("click", () => {
  log.textContent = "";

  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  addListeners(xhr);
  xhr.send();
});
```

#### Result

{{EmbedLiveSample("Fetching JSON data from the server")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fetch API](/en-US/docs/Web/API/Fetch_API)
