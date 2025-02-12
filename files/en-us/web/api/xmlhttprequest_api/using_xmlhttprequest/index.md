---
title: Using XMLHttpRequest
slug: Web/API/XMLHttpRequest_API/Using_XMLHttpRequest
page-type: guide
browser-compat: api.XMLHttpRequest
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

In this guide, we'll take a look at how to use {{domxref("XMLHttpRequest")}} to issue [HTTP](/en-US/docs/Web/HTTP) requests in order to exchange data between the website and a server.

Examples of both common and more obscure use cases for `XMLHttpRequest` are included.

To send an HTTP request:

1. Create an `XMLHttpRequest` object
2. Open a URL
3. Send the request.

After the transaction completes, the `XMLHttpRequest` object will contain useful information such as the response body and the [HTTP status](/en-US/docs/Web/HTTP/Status) of the result.

```js
function reqListener() {
  console.log(this.responseText);
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "http://www.example.org/example.txt");
req.send();
```

## Types of requests

A request made via `XMLHttpRequest` can fetch the data in one of two ways, asynchronously or synchronously. The type of request is dictated by the optional `async` argument (the third argument) that is set on the {{domxref("XMLHttpRequest.open()")}} method. If this argument is `true` or not specified, the `XMLHttpRequest` is processed asynchronously, otherwise the process is handled synchronously. A detailed discussion and demonstrations of these two types of requests can be found on the [synchronous and asynchronous requests](/en-US/docs/Web/API/XMLHttpRequest_API/Synchronous_and_Asynchronous_Requests) page. You can't use synchronous requests outside web workers as it freezes the main interface.

> [!NOTE]
> The constructor `XMLHttpRequest` isn't limited to only XML documents. It starts with **"XML"** because when it was created the main format that was originally used for asynchronous data exchange was XML.

## Handling responses

There are several types of [response attributes](https://xhr.spec.whatwg.org/) defined for the {{domxref("XMLHttpRequest.XMLHttpRequest", "XMLHttpRequest()")}} constructor. These tell the client making the `XMLHttpRequest` important information about the status of the response. Some cases where dealing with non-text response types may involve some manipulation and analysis are outlined in the following sections.

### Analyzing and manipulating the responseXML property

If you use `XMLHttpRequest` to get the content of a remote XML document, the {{domxref("XMLHttpRequest.responseXML", "responseXML")}} property will be a DOM object containing a parsed XML document. This could prove difficult to manipulate and analyze. There are four primary ways of analyzing this XML document:

1. Using [XPath](/en-US/docs/Web/XML/XPath) to address (or point to) parts of it.
2. Manually [Parsing and serializing XML](/en-US/docs/Web/XML/Guides/Parsing_and_serializing_XML) to strings or objects.
3. Using {{domxref("XMLSerializer")}} to serialize **DOM trees to strings or to files**.
4. {{jsxref("RegExp")}} can be used if you always know the content of the XML document beforehand. You might want to remove line breaks, if you use `RegExp` to scan with regard to line breaks. However, this method is a "last resort" since if the XML code changes slightly, the method will likely fail.

> **Note:** `XMLHttpRequest` can now interpret HTML for you, using the {{domxref("XMLHttpRequest.responseXML", "responseXML")}} property. Read the article about [HTML in XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest) to learn how to do this.

### Processing a `responseText` property containing an HTML document

If you use `XMLHttpRequest` to get the content of a remote HTML webpage, the {{domxref("XMLHttpRequest.responseText", "responseText")}} property is a string containing the raw HTML. This could prove difficult to manipulate and analyze. There are three primary ways to analyze and parse this raw HTML string:

1. Use the `XMLHttpRequest.responseXML` property as covered in the article [HTML in XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest).
2. Inject the content into the body of a [document fragment](/en-US/docs/Web/API/DocumentFragment) via `fragment.body.innerHTML` and traverse the DOM of the fragment.
3. {{jsxref("RegExp")}} can be used if you always know the content of the HTML `responseText` beforehand. You might want to remove line breaks, if you use `RegExp` to scan with regard to line breaks. However, this method is a "last resort" since if the HTML code changes slightly, the method will likely fail.

## Handling binary data

Although {{domxref("XMLHttpRequest")}} is most commonly used to send and receive textual data, it can be used to send and receive binary content. There are several well tested methods for coercing the response of an `XMLHttpRequest` into sending binary data. These involve utilizing the {{domxref("XMLHttpRequest.overrideMimeType", "overrideMimeType()")}} method on the `XMLHttpRequest` object and is a workable solution.

```js
const req = new XMLHttpRequest();
req.open("GET", url);
// retrieve data unprocessed as a binary string
req.overrideMimeType("text/plain; charset=x-user-defined");
/* … */
```

However, more modern techniques are available, since the {{domxref("XMLHttpRequest.responseType", "responseType")}} attribute now supports a number of additional content types, which makes sending and receiving binary data much easier.

For example, consider this snippet, which uses the `responseType` of `"arraybuffer"` to fetch the remote content into a {{jsxref("ArrayBuffer")}} object, which stores the raw binary data.

```js
const req = new XMLHttpRequest();

req.onload = (e) => {
  const arraybuffer = req.response; // not responseText
  /* … */
};
req.open("GET", url);
req.responseType = "arraybuffer";
req.send();
```

For more examples check out the [Sending and Receiving Binary Data](/en-US/docs/Web/API/XMLHttpRequest_API/Sending_and_Receiving_Binary_Data) page.

## Monitoring progress

`XMLHttpRequest` provides the ability to listen to various events that can occur while the request is being processed. This includes periodic progress notifications, error notifications, and so forth.

Support for DOM {{domxref("XMLHttpRequest/progress_event", "progress")}} event monitoring of `XMLHttpRequest` transfers follows the [specification for progress events](https://xhr.spec.whatwg.org/#interface-progressevent): these events implement the {{domxref("ProgressEvent")}} interface. The actual events you can monitor to determine the state of an ongoing transfer are:

- {{domxref("XMLHttpRequest/progress_event", "progress")}}
  - : The amount of data that has been retrieved has changed.
- {{domxref("XMLHttpRequest/load_event", "load")}}
  - : The transfer is complete; all data is now in the `response`

```js
const req = new XMLHttpRequest();

req.addEventListener("progress", updateProgress);
req.addEventListener("load", transferComplete);
req.addEventListener("error", transferFailed);
req.addEventListener("abort", transferCanceled);

req.open();

// …

// progress on transfers from the server to the client (downloads)
function updateProgress(event) {
  if (event.lengthComputable) {
    const percentComplete = (event.loaded / event.total) * 100;
    // …
  } else {
    // Unable to compute progress information since the total size is unknown
  }
}

function transferComplete(evt) {
  console.log("The transfer is complete.");
}

function transferFailed(evt) {
  console.log("An error occurred while transferring the file.");
}

function transferCanceled(evt) {
  console.log("The transfer has been canceled by the user.");
}
```

We add event listeners for the various events that are sent while performing a data transfer using `XMLHttpRequest`.

> [!NOTE]
> You need to add the event listeners before calling `open()` on the request. Otherwise the `progress` events will not fire.

The progress event handler, specified by the `updateProgress()` function in this example, receives the total number of bytes to transfer as well as the number of bytes transferred so far in the event's `total` and `loaded` fields. However, if the `lengthComputable` field is false, the total length is not known and will be zero.

Progress events exist for both download and upload transfers. The download events are fired on the `XMLHttpRequest` object itself, as shown in the above sample. The upload events are fired on the `XMLHttpRequest.upload` object, as shown below:

```js
const req = new XMLHttpRequest();

req.upload.addEventListener("progress", updateProgress);
req.upload.addEventListener("load", transferComplete);
req.upload.addEventListener("error", transferFailed);
req.upload.addEventListener("abort", transferCanceled);

req.open();
```

> [!NOTE]
> Progress events are not available for the
> `file:` protocol.

Progress events come in for every chunk of data received, including the last chunk in cases in which the last packet is received and the connection closed before the progress event is fired. In this case, the progress event is automatically fired when the load event occurs for that packet. This lets you now reliably monitor progress by only watching the "progress" event.

One can also detect all three load-ending conditions (`abort`,
`load`, or `error`) using the `loadend` event:

```js
req.addEventListener("loadend", loadEnd);

function loadEnd(e) {
  console.log(
    "The transfer finished (although we don't know if it succeeded or not).",
  );
}
```

Note there is no way to be certain, from the information received by the `loadend` event, as to which condition caused the operation to terminate; however, you can use this to handle tasks that need to be performed in all end-of-transfer scenarios.

## Get last modified date

```js
function getHeaderTime() {
  console.log(this.getResponseHeader("Last-Modified")); // A valid GMTString date or null
}

const req = new XMLHttpRequest();
req.open(
  "HEAD", // use HEAD when you only need the headers
  "your-page.html",
);
req.onload = getHeaderTime;
req.send();
```

### Do something when last modified date changes

Let's create two functions:

```js
function getHeaderTime() {
  const lastVisit = parseFloat(
    window.localStorage.getItem(`lm_${this.filepath}`),
  );
  const lastModified = Date.parse(this.getResponseHeader("Last-Modified"));

  if (isNaN(lastVisit) || lastModified > lastVisit) {
    window.localStorage.setItem(`lm_${this.filepath}`, Date.now());
    isFinite(lastVisit) && this.callback(lastModified, lastVisit);
  }
}

function ifHasChanged(URL, callback) {
  const req = new XMLHttpRequest();
  req.open("HEAD" /* use HEAD - we only need the headers! */, URL);
  req.callback = callback;
  req.filepath = URL;
  req.onload = getHeaderTime;
  req.send();
}
```

And to test:

```js
// Let's test the file "your-page.html"
ifHasChanged("your-page.html", function (modified, visit) {
  console.log(
    `The page '${this.filepath}' has been changed on ${new Date(
      nModified,
    ).toLocaleString()}!`,
  );
});
```

If you want to know if the current page has changed, refer to the article about {{domxref("document.lastModified")}}.

## Cross-site XMLHttpRequest

Modern browsers support cross-site requests by implementing the [Cross-Origin Resource Sharing](/en-US/docs/Web/HTTP/CORS) (CORS) standard. As long as the server is configured to allow requests from your web application's origin, `XMLHttpRequest` will work. Otherwise, an `INVALID_ACCESS_ERR` exception is thrown.

## Bypassing the cache

A cross-browser compatible approach to bypassing the cache is appending a timestamp to the URL, being sure to include a "?" or "&" as appropriate. For example:

```plain
http://example.com/bar.html -> http://example.com/bar.html?12345
http://example.com/bar.html?foobar=baz -> http://example.com/bar.html?foobar=baz&12345
```

As the local cache is indexed by URL, this causes every request to be unique, thereby bypassing the cache.

You can automatically adjust URLs using the following code:

```js
const req = new XMLHttpRequest();

req.open("GET", url + (/\?/.test(url) ? "&" : "?") + new Date().getTime());
req.send(null);
```

## Security

The recommended way to enable cross-site scripting is to use the `Access-Control-Allow-Origin` HTTP header in the response to the XMLHttpRequest.

### XMLHttpRequests being stopped

If you conclude with an XMLHttpRequest receiving `status=0` and `statusText=null`, this means the request was not allowed to be performed. It was [`UNSENT`](https://xhr.spec.whatwg.org/#dom-xmlhttprequest-unsent). A likely cause for this is when the `XMLHttpRequest` origin (at the creation of the XMLHttpRequest) has changed when the XMLHttpRequest is subsequently `open()`. This case can happen, for example, when one has an XMLHttpRequest that gets fired on an onunload event for a window, the expected XMLHttpRequest is created when the window to be closed is still there, and finally sending the request (in other words, `open()`) when this window has lost its focus and another window gains focus. The most effective way to avoid this problem is to set a listener on the new window's {{domxref("Element/DOMActivate_event", "DOMActivate")}} event which is set once the terminated window has its {{domxref("Window/unload_event", "unload")}} event triggered.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Fetch API](/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [HTML in XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
- [HTTP access control](/en-US/docs/Web/HTTP/CORS)
- [XMLHttpRequest - REST and the Rich User Experience](https://www.peej.co.uk/articles/rich-user-experience.html)
- [The `XMLHttpRequest` object: WHATWG specification](https://xhr.spec.whatwg.org/)
