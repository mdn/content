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

    - `attributionReporting` {{experimental_inline}}

      - : Indicates that you want the request's response to be able to register a JavaScript-based [attribution source](/en-US/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) or [attribution trigger](/en-US/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers). `attributionReporting` is an object containing the following properties:

        - `eventSourceEligible`
          - : A boolean. If set to `true`, the request's response is eligible to register an attribution source. If set to `false`, it isn't.
        - `triggerEligible`
          - : A boolean. If set to `true`, the request's response is eligible to register an attribution trigger. If set to `false`, it isn't.

        > **Note:** See the [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API) for more details.

    - `body`
      - : Any body that you want to add to your request: this can be a
        {{domxref("Blob")}}, an {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, a {{jsxref("DataView")}},
        a {{domxref("FormData")}}, a {{domxref("URLSearchParams")}}, a string, or a {{domxref("ReadableStream")}} object.
        Note that a request using the `GET` or `HEAD` method cannot have a body.
    - `browsingTopics` {{experimental_inline}}
      - : A boolean specifying that the selected topics for the current user should be sent in a {{httpheader("Sec-Browsing-Topics")}} header with the associated request. See [Using the Topics API](/en-US/docs/Web/API/Topics_API/Using) for more details.
    - `cache`
      - : The [cache mode](/en-US/docs/Web/API/Request/cache) you want to use for the request.
    - `credentials`
      - : The request credentials you want to use for the
        request: `omit`, `same-origin`, or `include`. The
        default is `same-origin`.
    - `headers`
      - : Any headers you want to add to your request, contained
        within a {{domxref("Headers")}} object or an object literal with
        {{jsxref("String")}} values.
    - `integrity`
      - : Contains the [subresource integrity](/en-US/docs/Web/Security/Subresource_Integrity)
        value of the request (e.g.,
        `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`).
    - `keepalive`
      - : A boolean that indicates whether to make a persistent connection for multiple requests/responses.
    - `method`
      - : The request method, e.g., `GET`, `POST`. The default is `GET`.
    - `mode`
      - : The mode you want to use for the request, e.g.,
        `cors`, `no-cors`, `same-origin`, or
        `navigate`. The default is `cors`.
    - `priority`
      - : Specifies the priority of the fetch request relative to other requests of the same type. Must be one of the following strings:
        - `high`: A high priority fetch request relative to other requests of the same type.
        - `low`: A low priority fetch request relative to other requests of the same type.
        - `auto`: Automatically determine the priority of the fetch request relative to other requests of the same type (default).
    - `redirect`
      - : The redirect mode to use: `follow`,
        `error`, or `manual`. The default is `follow`.
    - `referrer`
      - : A string specifying
        `no-referrer`, `client`, or a URL. The default is
        `about:client`.
    - `referrerPolicy`
      - : A string that changes how the referrer header is populated during certain actions (e.g., fetching subresources, prefetching, performing navigations).
    - `signal`
      - : An [AbortSignal](/en-US/docs/Web/API/AbortSignal) object which can be used to communicate with/abort a request.

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

In our [Fetch Request with init example](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request-with-init) (see [Fetch Request init live](https://mdn.github.io/dom-examples/fetch/fetch-request-with-init)) we do the same thing except that we pass in an _options_ object when we invoke `fetch()`.
In this case, we can set a {{httpheader("Cache-Control")}} value to indicate what kind of cached responses we're okay with:

```js
const myImage = document.querySelector("img");
const reqHeaders = new Headers();

// A cached response is okay unless it's more than a week old.
reqHeaders.set("Cache-Control", "max-age=604800");

const options = {
  headers: reqHeaders,
};

// pass init as an "options" object with our headers
const req = new Request("flowers.jpg", options);

fetch(req).then((response) => {
  // ...
});
```

Note that you could also pass `options` into the `fetch` call to get the same effect, e.g.:

```js
fetch(req, options).then((response) => {
  // ...
});
```

You can also use an object literal as `headers` in `options`.

```js
const options = {
  headers: {
    "Cache-Control": "max-age=60480",
  },
};

const req = new Request("flowers.jpg", options);
```

You may also pass a {{domxref("Request")}} object to the `Request()`
constructor to create a copy of the Request (This is similar to calling the
{{domxref("Request.clone","clone()")}} method.)

```js
const copy = new Request(req);
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
