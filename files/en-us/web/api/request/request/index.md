---
title: "Request: Request() constructor"
short-title: Request()
slug: Web/API/Request/Request
page-type: web-api-constructor
browser-compat: api.Request.Request
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

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

  - : A {{domxref("RequestInit")}} object containing any custom settings that you want to apply to the request.

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

### Exceptions

- `TypeError`
  - : The URL has credentials, such as `http://user:password@example.com`, or cannot be parsed.

## Examples

In our [Fetch Request example](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request) (see [Fetch Request live](https://mdn.github.io/dom-examples/fetch/fetch-request/)) we create a new `Request` object using the constructor, then fetch it using a {{domxref("Window/fetch", "fetch()")}} call.
Since we are fetching an image, we run {{domxref("Response.blob")}} on the response to give it the proper MIME type so it will be handled properly, then create an Object URL of it and display it in an {{htmlelement("img")}} element.

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

In our [Fetch Request with init example](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request-with-init) (see [Fetch Request init live](https://mdn.github.io/dom-examples/fetch/fetch-request-with-init/)) we do the same thing except that we pass in an _options_ object when we invoke `fetch()`.
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
  // …
});
```

Note that you could also pass `options` into the `fetch` call to get the same effect, e.g.:

```js
fetch(req, options).then((response) => {
  // …
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

> [!NOTE]
> This last usage is probably only useful in [ServiceWorkers](/en-US/docs/Web/API/Service_Worker_API).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/Guides/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
