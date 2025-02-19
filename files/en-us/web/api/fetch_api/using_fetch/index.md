---
title: Using the Fetch API
slug: Web/API/Fetch_API/Using_Fetch
page-type: guide
---

{{DefaultAPISidebar("Fetch API")}}

The [Fetch API](/en-US/docs/Web/API/Fetch_API) provides a JavaScript interface for making HTTP requests and processing the responses.

Fetch is the modern replacement for {{domxref("XMLHttpRequest")}}: unlike `XMLHttpRequest`, which uses callbacks, Fetch is promise-based and is integrated with features of the modern web such as [service workers](/en-US/docs/Web/API/Service_Worker_API) and [Cross-Origin Resource Sharing (CORS)](/en-US/docs/Web/HTTP/CORS).

With the Fetch API, you make a request by calling {{domxref("Window/fetch", "fetch()")}}, which is available as a global function in both {{domxref("Window", "window")}} and {{domxref("WorkerGlobalScope", "worker")}} contexts. You pass it a {{domxref("Request")}} object or a string containing the URL to fetch, along with an optional argument to configure the request.

The `fetch()` function returns a {{jsxref("Promise")}} which is fulfilled with a {{domxref("Response")}} object representing the server's response. You can then check the request status and extract the body of the response in various formats, including text and JSON, by calling the appropriate method on the response.

Here's a minimal function that uses `fetch()` to retrieve some JSON data from a server:

```js
async function getData() {
  const url = "https://example.org/products.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}
```

We declare a string containing the URL and then call `fetch()`, passing the URL with no extra options.

The `fetch()` function will reject the promise on some errors, but not if the server responds with an error status like {{httpstatus("404")}}: so we also check the response status and throw if it is not OK.

Otherwise, we fetch the response body content as {{glossary("JSON")}} by calling the {{domxref("Response.json()", "json()")}} method of `Response`, and log one of its values. Note that like `fetch()` itself, `json()` is asynchronous, as are all the other methods to access the response body content.

In the rest of this page we'll look in more detail at the different stages of this process.

## Making a request

To make a request, call `fetch()`, passing in:

1. a definition of the resource to fetch. This can be any one of:
   - a string containing the URL
   - an object, such an instance of {{domxref("URL")}}, which has a {{glossary("stringifier")}} that produces a string containing the URL
   - a {{domxref("Request")}} instance
2. optionally, an object containing options to configure the request.

In this section we'll look at some of the most commonly-used options. To read about all the options that can be given, see the [`fetch()`](/en-US/docs/Web/API/Window/fetch) reference page.

### Setting the method

By default, `fetch()` makes a {{httpmethod("GET")}} request, but you can use the `method` option to use a different [request method](/en-US/docs/Web/HTTP/Methods):

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  // ...
});
```

If the `mode` option is set to `no-cors`, then `method` must be one of `GET`, `POST` or `HEAD`.

### Setting a body

The request body is the payload of the request: it's the thing the client is sending to the server. You cannot include a body with `GET` requests, but it's useful for requests that send content to the server, such as {{httpmethod("POST")}} or {{httpmethod("PUT")}} requests. For example, if you want to upload a file to the server, you might make a `POST` request and include the file as the request body.

To set a request body, pass it as the `body` option:

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
  // ...
});
```

You can supply the body as an instance of any of the following types:

- a string
- {{jsxref("ArrayBuffer")}}
- {{jsxref("TypedArray")}}
- {{jsxref("DataView")}}
- {{domxref("Blob")}}
- {{domxref("File")}}
- {{domxref("URLSearchParams")}}
- {{domxref("FormData")}}
- {{domxref("ReadableStream")}}

Other objects are converted to strings using their `toString()` method. For example, you can use a {{domxref("URLSearchParams")}} object to encode form data (see [setting headers](#setting_headers) for more information):

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  // Automatically converted to "username=example&password=password"
  body: new URLSearchParams({ username: "example", password: "password" }),
  // ...
});
```

Note that just like response bodies, request bodies are streams, and making the request reads the stream, so if a request contains a body, you can't make it twice:

```js example-bad
const request = new Request("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
});

const response1 = await fetch(request);
console.log(response1.status);

// Will throw: "Body has already been consumed."
const response2 = await fetch(request);
console.log(response2.status);
```

Instead, you would need to {{domxref("Request.clone()", "create a clone", "", "nocode")}} of the request before sending it:

```js
const request1 = new Request("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
});

const request2 = request1.clone();

const response1 = await fetch(request1);
console.log(response1.status);

const response2 = await fetch(request2);
console.log(response2.status);
```

See [Locked and disturbed streams](#locked_and_disturbed_streams) for more information.

### Setting headers

Request headers give the server information about the request: for example, in a `POST` request, the {{httpheader("Content-Type")}} header tells the server the format of the request's body.

To set request headers, assign them to the `headers` option.

You can pass an object literal here containing `header-name: header-value` properties:

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ username: "example" }),
  // ...
});
```

Alternatively, you can construct a {{domxref("Headers")}} object, add headers to that object using {{domxref("Headers.append()")}}, then assign the `Headers` object to the `headers` option:

```js
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const response = await fetch("https://example.org/post", {
  method: "POST",
  headers: myHeaders,
  body: JSON.stringify({ username: "example" }),
  // ...
});
```

Compared to using plain objects, the `Headers` object provides some additional input sanitization. For example, it normalizes header names to lowercase, strips leading and trailing whitespace from header values, and prevents certain headers from being set. Many headers are set automatically by the browser and can't be set by a script: these are called {{glossary("Forbidden header name", "Forbidden header names")}}. If the {{domxref("Request.mode", "mode")}} option is set to `no-cors`, then the set of permitted headers is further restricted.

### Sending data in a GET request

`GET` requests don't have a body, but you can still send data to the server by appending it to the URL as a query string. This is a common way to send form data to the server. You can do this by using {{domxref("URLSearchParams")}} to encode the data, and then appending it to the URL:

```js
const params = new URLSearchParams();
params.append("username", "example");

// GET request sent to https://example.org/login?username=example
const response = await fetch(`https://example.org/login?${params}`);
```

### Making cross-origin requests

Whether a request can be made cross-origin or not is determined by the value of the {{domxref("RequestInit", "", "mode")}} option. This may take one of three values: `cors`, `same-origin`, or `no-cors`.

- For fetch requests the default value of `mode` is `cors`, meaning that if the request is cross-origin then it will use the [Cross-Origin Resource Sharing (CORS)](/en-US/docs/Web/HTTP/CORS) mechanism. This means that:

  - if the request is a [simple request](/en-US/docs/Web/HTTP/CORS#simple_requests), then the request will always be sent, but the server must respond with the correct {{httpheader("Access-Control-Allow-Origin")}} header or the browser will not share the response with the caller.
  - if the request is not a simple request, then the browser will send a [preflighted request](/en-US/docs/Web/HTTP/CORS#preflighted_requests) to check that the server understands CORS and allows the request, and the real request will not be sent unless the server responds to the preflighted request with the appropriate CORS headers.

- Setting `mode` to `same-origin` disallows cross-origin requests completely.

- Setting `mode` to `no-cors` disables CORS for cross-origin requests. This restricts the headers that may be set, and restricts methods to GET, HEAD, and POST. The response is _opaque_, meaning that its headers and body are not available to JavaScript. Most of the time a website should not use `no-cors`: the main application of it is for certain service worker use cases.

See the reference documentation for {{domxref("RequestInit", "", "mode")}} for more details.

### Including credentials

Credentials are cookies, {{glossary("TLS")}} client certificates, or authentication headers containing a username and password.

To control whether or not the browser sends credentials, as well as whether the browser respects any **`Set-Cookie`** response headers, set the `credentials` option, which can take one of the following three values:

- `omit`: never send credentials in the request or include credentials in the response.
- `same-origin` (the default): only send and include credentials for same-origin requests.
- `include`: always include credentials, even cross-origin.

Note that if a cookie's [`SameSite`](/en-US/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) attribute is set to `Strict` or `Lax`, then the cookie will not be sent cross-site, even if `credentials` is set to `include`.

Including credentials in cross-origin requests can make a site vulnerable to {{glossary("CSRF")}} attacks, so even if `credentials` is set to `include`, the server must also agree to their inclusion by including the {{httpheader("Access-Control-Allow-Credentials")}} header in its response. Additionally, in this situation the server must explicitly specify the client's origin in the {{httpheader("Access-Control-Allow-Origin")}} response header (that is, `*` is not allowed).

This means that if `credentials` is set to `include` and the request is cross-origin, then:

- If the request is a [simple request](/en-US/docs/Web/HTTP/CORS#simple_requests), then the request will be sent with credentials, but the server must set the {{httpheader("Access-Control-Allow-Credentials")}} and {{httpheader("Access-Control-Allow-Origin")}} response headers, or the browser will return a network error to the caller. If the server does set the correct headers, then the response, including credentials, will be delivered to the caller.

- If the request is not a simple request, then the browser will send a [preflighted request](/en-US/docs/Web/HTTP/CORS#preflighted_requests) without credentials, and the server must set the {{httpheader("Access-Control-Allow-Credentials")}} and {{httpheader("Access-Control-Allow-Origin")}} response headers, or the browser will return a network error to the caller. If the server does set the correct headers, then the browser will follow up with the real request, including credentials, and will deliver the real response, including credentials, to the caller.

### Creating a `Request` object

The {{domxref("Request.Request()", "Request()")}} constructor takes the same arguments as `fetch()` itself. This means that instead of passing options into `fetch()`, you can pass the same options to the `Request()` constructor, and then pass that object to `fetch()`.

For example, we can make a POST request by passing options into `fetch()` using code like this:

```js
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const response = await fetch("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
  headers: myHeaders,
});
```

However, we could rewrite this to pass the same arguments to the `Request()` constructor:

```js
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const myRequest = new Request("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
  headers: myHeaders,
});

const response = await fetch(myRequest);
```

This also means that you can create a request from another request, while changing some of its properties using the second argument:

```js
async function post(request) {
  try {
    const response = await fetch(request);
    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

const request1 = new Request("https://example.org/post", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ username: "example1" }),
});

const request2 = new Request(request1, {
  body: JSON.stringify({ username: "example2" }),
});

post(request1);
post(request2);
```

## Canceling a request

To make a request cancelable, create an {{domxref("AbortController")}}, and assign its {{domxref("AbortSignal")}} to the request's `signal` property.

To cancel the request, call the controller's {{domxref("AbortController.abort()", "abort()")}} method. The `fetch()` call will reject the promise with an `AbortError` exception.

```js
const controller = new AbortController();

const fetchButton = document.querySelector("#fetch");
fetchButton.addEventListener("click", async () => {
  try {
    console.log("Starting fetch");
    const response = await fetch("https://example.org/get", {
      signal: controller.signal,
    });
    console.log(`Response: ${response.status}`);
  } catch (e) {
    console.error(`Error: ${e}`);
  }
});

const cancelButton = document.querySelector("#cancel");
cancelButton.addEventListener("click", () => {
  controller.abort();
  console.log("Canceled fetch");
});
```

If the request is aborted after the `fetch()` call has been fulfilled but before the response body has been read, then attempting to read the response body will reject with an `AbortError` exception.

```js
async function get() {
  const controller = new AbortController();
  const request = new Request("https://example.org/get", {
    signal: controller.signal,
  });

  const response = await fetch(request);
  controller.abort();
  // The next line will throw `AbortError`
  const text = await response.text();
  console.log(text);
}
```

## Handling the response

As soon as the browser has received the response status and headers from the server (and potentially before the response body itself has been received), the promise returned by `fetch()` is fulfilled with a {{domxref("Response")}} object.

### Checking response status

The promise returned by `fetch()` will reject on some errors, such as a network error or a bad scheme. However, if the server responds with an error like {{httpstatus("404")}}, then `fetch()` fulfills with a `Response`, so we have to check the status before we can read the response body.

The {{domxref("Response.status")}} property tells us the numerical status code, and the {{domxref("Response.ok")}} property returns `true` if the status is in the [200 range](/en-US/docs/Web/HTTP/Status#successful_responses).

A common pattern is to check the value of `ok` and throw if it is `false`:

```js
async function getData() {
  const url = "https://example.org/products.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    // ...
  } catch (error) {
    console.error(error.message);
  }
}
```

### Checking the response type

Responses have a {{domxref("Response.type", "type")}} property that can be one of the following:

- `basic`: the request was a same-origin request.
- `cors`: the request was a cross-origin CORS request.
- `opaque`: the request was a cross-origin simple request made with the `no-cors` mode.
- `opaqueredirect`: the request set the `redirect` option to `manual`, and the server returned a [redirect status](/en-US/docs/Web/HTTP/Status#redirection_messages).

The type determines the possible contents of the response, as follows:

- Basic responses exclude response headers from the {{glossary("Forbidden response header name")}} list.

- CORS responses include only response headers from the {{glossary("CORS-safelisted response header")}} list.

- Opaque responses and opaque redirect responses have a `status` of `0`, an empty header list, and a `null` body.

### Checking headers

Just like the request, the response has a {{domxref("Response.headers", "headers")}} property which is a {{domxref("Headers")}} object, and this contains any response headers that are exposed to scripts, subject to the exclusions made based on the response type.

A common use case for this is to check the content type before trying to read the body:

```js
async function fetchJSON(request) {
  try {
    const response = await fetch(request);
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new TypeError("Oops, we haven't got JSON!");
    }
    // Otherwise, we can read the body as JSON
  } catch (error) {
    console.error("Error:", error);
  }
}
```

### Reading the response body

The `Response` interface provides a number of methods to retrieve the entire body contents in a variety of different formats:

- {{domxref("Response.arrayBuffer()")}}
- {{domxref("Response.blob()")}}
- {{domxref("Response.formData()")}}
- {{domxref("Response.json()")}}
- {{domxref("Response.text()")}}

These are all asynchronous methods, returning a {{jsxref("Promise")}} which will be fulfilled with the body content.

In this example, we fetch an image and read it as a {{domxref("Blob")}}, which we can then use to create an object URL:

```js
const image = document.querySelector("img");

const url = "flowers.jpg";

async function setImage() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const blob = await response.blob();
    const objectURL = URL.createObjectURL(blob);
    image.src = objectURL;
  } catch (e) {
    console.error(e);
  }
}
```

The method will throw an exception if the response body is not in the appropriate format: for example, if you call `json()` on a response that can't be parsed as JSON.

### Streaming the response body

Request and response bodies are actually {{domxref("ReadableStream")}} objects, and whenever you read them, you're streaming the content. This is good for memory efficiency, because the browser doesn't have to buffer the entire response in memory before the caller retrieves it using a method like `json()`.

This also means that the caller can process the content incrementally as it is received.

For example, consider a `GET` request that fetches a large text file and processes it in some way, or displays it to the user:

```js
const url = "https://www.example.org/a-large-file.txt";

async function fetchText(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const text = await response.text();
    console.log(text);
  } catch (e) {
    console.error(e);
  }
}
```

If we use {{domxref("Response.text()")}}, as above, we must wait until the whole file has been received before we can process any of it.

If we stream the response instead, we can process chunks of the body as they are received from the network:

```js
const url = "https://www.example.org/a-large-file.txt";

async function fetchTextAsStream(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const stream = response.body.pipeThrough(new TextDecoderStream());
    for await (const value of stream) {
      console.log(value);
    }
  } catch (e) {
    console.error(e);
  }
}
```

In this example, we {{jsxref("Statements/for-await...of", "iterate asynchronously", "", "nocode")}} over the stream, processing each chunk as it arrives.

Note that when you access the body directly like this, you get the raw bytes of the response and must transform it yourself. In this case we call {{domxref("ReadableStream.pipeThrough()")}} to pipe the response through a {{domxref("TextDecoderStream")}}, which decodes the UTF-8-encoded body data as text.

### Processing a text file line by line

In the example below, we fetch a text resource and process it line by line, using a regular expression to look for line endings. For simplicity, we assume the text is UTF-8, and don't handle fetch errors:

```js
async function* makeTextFileLineIterator(fileURL) {
  const response = await fetch(fileURL);
  const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();

  let { value: chunk, done: readerDone } = await reader.read();
  chunk = chunk || "";

  const newline = /\r?\n/gm;
  let startIndex = 0;

  while (true) {
    const result = newline.exec(chunk);
    if (!result) {
      if (readerDone) break;
      const remainder = chunk.substr(startIndex);
      ({ value: chunk, done: readerDone } = await reader.read());
      chunk = remainder + (chunk || "");
      startIndex = newline.lastIndex = 0;
      continue;
    }
    yield chunk.substring(startIndex, result.index);
    startIndex = newline.lastIndex;
  }

  if (startIndex < chunk.length) {
    // Last line didn't end in a newline char
    yield chunk.substring(startIndex);
  }
}

async function run(urlOfFile) {
  for await (const line of makeTextFileLineIterator(urlOfFile)) {
    processLine(line);
  }
}

function processLine(line) {
  console.log(line);
}

run("https://www.example.org/a-large-file.txt");
```

### Locked and disturbed streams

The consequences of request and response bodies being streams are that:

- if a reader has been attached to a stream using `ReadableStream.getReader()`, then the stream is _locked_, and nothing else can read the stream.
- if any content has been read from the stream, then the stream is _disturbed_, and nothing else can read from the stream.

This means it's not possible to read the same response (or request) body more than once:

```js example-bad
async function getData() {
  const url = "https://example.org/products.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json1 = await response.json();
    const json2 = await response.json(); // will throw
  } catch (error) {
    console.error(error.message);
  }
}
```

If you do need to read the body more than once, you must call {{domxref("Response.clone()")}} before reading the body:

```js
async function getData() {
  const url = "https://example.org/products.json";
  try {
    const response1 = await fetch(url);
    if (!response1.ok) {
      throw new Error(`Response status: ${response1.status}`);
    }

    const response2 = response1.clone();

    const json1 = await response1.json();
    const json2 = await response2.json();
  } catch (error) {
    console.error(error.message);
  }
}
```

This is a common pattern when [implementing an offline cache with service workers](/en-US/docs/Web/Progressive_web_apps/Guides/Caching). The service worker wants to return the response to the app, but also to cache the response. So it clones the response, returns the original, and caches the clone:

```js
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open("MyCache_1");
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    return Response.error();
  }
}

self.addEventListener("fetch", (event) => {
  if (precachedResources.includes(url.pathname)) {
    event.respondWith(cacheFirst(event.request));
  }
});
```

## See also

- [Service Worker API](/en-US/docs/Web/API/Service_Worker_API)
- [Streams API](/en-US/docs/Web/API/Streams_API)
- [CORS](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
- [Fetch examples on GitHub](https://github.com/mdn/dom-examples/tree/main/fetch)
