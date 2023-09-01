---
title: "Request: Request() constructor"
short-title: Request()
slug: Web/API/Request/Request
page-type: web-api-constructor
browser-compat: api.Request.Request
---

{{APIRef("Fetch API")}}

The **`Request()`** constructor creates a new
{{domxref("Request")}} object.

## Syntax

```js-nolint
new Request(input)
new Request(input, options)
```

### Parameters

- `input`

  - : Defines the resource that you wish to fetch. This can either be:

    - A string containing the URL of the resource you want to fetch. The URL may be relative to the base URL, which is the document's {{domxref("Node.baseURI", "baseURI")}} in a window context, or {{domxref("WorkerGlobalScope.location")}} in a worker context.
    - A {{domxref("Request")}} object, effectively creating a copy. Note the following
      behavioral updates to retain security while making the constructor less likely to
      throw exceptions:

      - If this object exists on another origin to the constructor call, the
        {{domxref("Request.referrer")}} is stripped out.
      - If this object has a {{domxref("Request.mode")}} of `navigate`,
        the `mode` value is converted to `same-origin`.

- `options` {{optional_inline}}

  - : An object containing any custom settings that you want to apply to the
    request. The possible options are:

    - `method`
      - : The request method, e.g., `GET`,
        `POST`. The default is `GET`.
    - `headers`
      - : Any headers you want to add to your request, contained
        within a {{domxref("Headers")}} object or an object literal with
        {{jsxref("String")}} values.
    - `body`
      - : Any body that you want to add to your request: this can be a
        {{domxref("Blob")}}, an {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, a {{jsxref("DataView")}},
        a {{domxref("FormData")}}, a {{domxref("URLSearchParams")}}, a string, or a {{domxref("ReadableStream")}} object.
        Note that a request using the `GET` or `HEAD` method cannot have a body.
    - `mode`
      - : The mode you want to use for the request, e.g.,
        `cors`, `no-cors`, `same-origin`, or
        `navigate`. The default is `cors`.
    - `credentials`
      - : The request credentials you want to use for the
        request: `omit`, `same-origin`, or `include`. The
        default is `same-origin`.
    - `cache`
      - : The [cache mode](/en-US/docs/Web/API/Request/cache) you want to use for the request.
    - `redirect`
      - : The redirect mode to use: `follow`,
        `error`, or `manual`. The default is `follow`.
    - `referrer`
      - : A string specifying
        `no-referrer`, `client`, or a URL. The default is
        `about:client`.
    - `referrerPolicy`
      - : A string that changes how the referrer header is populated during certain actions (e.g., fetching subresources, prefetching, performing navigations).
    - `integrity`
      - : Contains the [subresource integrity](/en-US/docs/Web/Security/Subresource_Integrity)
        value of the request (e.g.,
        `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`).
    - `keepalive`
      - : A boolean that indicates whether to make a persistent connection for multiple requests/responses.
    - `signal`
      - : An [AbortSignal](/en-US/docs/Web/API/AbortSignal) object which can be used to communicate with/abort a request.
    - `priority`
      - : Specifies the priority of the fetch request relative to other requests of the same type. Must be one of the following strings:
        - `high`: A high priority fetch request relative to other requests of the same type.
        - `low`: A low priority fetch request relative to other requests of the same type.
        - `auto`: Automatically determine the priority of the fetch request relative to other requests of the same type (default).

    If you construct a new `Request` from an existing `Request`, any options you set in an _options_ argument for the new request replace any corresponding options set in the original `Request`. For example:

    ```js
    const oldRequest = new Request(
      "https://github.com/mdn/content/issues/12959",
      { headers: { From: "webmaster@example.org" } },
    );
    oldRequest.headers.get("From"); // "webmaster@example.org"
    const newRequest = new Request(oldRequest, {
      headers: { From: "developer@example.org" },
    });
    newRequest.headers.get("From"); // "developer@example.org"
    ```

## Errors

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Type</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>TypeError</code></td>
      <td>
        Since <a href="/en-US/docs/Mozilla/Firefox/Releases/43">Firefox 43</a>,
        <code>Request()</code> will throw a TypeError if the URL has
        credentials, such as http://user:password@example.com.
      </td>
    </tr>
  </tbody>
</table>

## Examples

In our [Fetch Request example](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request) (see [Fetch Request live](https://mdn.github.io/dom-examples/fetch/fetch-request/)) we
create a new `Request` object using the constructor, then fetch it using a
{{domxref("fetch()")}} call. Since we are fetching an image, we run
{{domxref("Response.blob")}} on the response to give it the proper MIME type so it will be
handled properly, then create an Object URL of it and display it in an
{{htmlelement("img")}} element.

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

fetch(myRequest)
  .then((response) => response.blob())
  .then((response) => {
    const objectURL = URL.createObjectURL(response);
    myImage.src = objectURL;
  });
```

In our [Fetch Request with init example](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-with-init-then-request) (see [Fetch Request init live](https://mdn.github.io/dom-examples/fetch/fetch-with-init-then-request/)) we do the same thing except that we pass in an _options_ object when we
invoke `fetch()`:

```js
const myImage = document.querySelector("img");

const myHeaders = new Headers();
myHeaders.append("Content-Type", "image/jpeg");

const myOptions = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

const myRequest = new Request("flowers.jpg", myOptions);

fetch(myRequest).then((response) => {
  // ...
});
```

Note that you could also pass `myOptions` into the `fetch` call to get
the same effect, e.g.:

```js
fetch(myRequest, myOptions).then((response) => {
  // ...
});
```

You can also use an object literal as `headers` in `myOptions`.

```js
const myOptions = {
  method: "GET",
  headers: {
    "Content-Type": "image/jpeg",
  },
  mode: "cors",
  cache: "default",
};

const myRequest = new Request("flowers.jpg", myOptions);
```

You may also pass a {{domxref("Request")}} object to the `Request()`
constructor to create a copy of the Request (This is similar to calling the
{{domxref("Request.clone","clone()")}} method.)

```js
const copy = new Request(myRequest);
```

> **Note:** This last usage is probably only useful in [ServiceWorkers](/en-US/docs/Web/API/Service_Worker_API).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
