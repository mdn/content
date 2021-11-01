---
title: Request()
slug: Web/API/Request/Request
tags:
  - API
  - Constructor
  - Experimental
  - Fetch
  - Reference
  - request
browser-compat: api.Request.Request
---
{{APIRef("Fetch API")}}

The **`Request()`** constructor creates a new
{{domxref("Request")}} object.

## Syntax

```js
var myRequest = new Request(input[, init]);
```

### Parameters

- _input_

  - : Defines the resource that you wish to fetch. This can either be:

    - A {{domxref("USVString")}} containing the direct URL of the resource you want to
      fetch.
    - A {{domxref("Request")}} object, effectively creating a copy. Note the following
      behavioral updates to retain security while making the constructor less likely to
      throw exceptions:

      - If this object exists on another origin to the constructor call, the
        {{domxref("Request.referrer")}} is stripped out.
      - If this object has a {{domxref("Request.mode")}} of `navigate`,
        the `mode` value is converted to `same-origin`.

- _init_ {{optional_inline}}

  - : An options object containing any custom settings that you want to apply to the
    request. The possible options are:

    - `method`: The request method, e.g., `GET`,
      `POST`. The default is `GET`.
    - `headers`: Any headers you want to add to your request, contained
      within a {{domxref("Headers")}} object or an object literal with
      {{jsxref("String")}} values.
    - `body`: Any body that you want to add to your request: this can be a
      {{domxref("Blob")}}, {{domxref("BufferSource")}}, {{domxref("FormData")}},
      {{domxref("URLSearchParams")}}, {{domxref("USVString")}}, or
      {{domxref("ReadableStream")}} object. Note that a request using the
      `GET` or `HEAD` method cannot have a body.
    - `mode`: The mode you want to use for the request, e.g.,
      `cors`, `no-cors`, `same-origin`, or
      `navigate`. The default is `cors`.
    - `credentials`: The request credentials you want to use for the
      request: `omit`, `same-origin`, or `include`. The
      default is `same-origin`.
    - `cache`: The [cache
      mode](/en-US/docs/Web/API/Request/cache) you want to use for the request.
    - `redirect`: The redirect mode to use: `follow`,
      `error`, or `manual`. The default is `follow`.
    - `referrer`: A {{domxref("USVString")}} specifying
      `no-referrer`, `client`, or a URL. The default is
      `about:client`.
    - `integrity`: Contains the [subresource integrity](/en-US/docs/Web/Security/Subresource_Integrity)
      value of the request (e.g.,
      `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`).

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

## Example

In our [Fetch
Request example](https://github.com/mdn/fetch-examples/tree/master/fetch-request) (see [Fetch Request live](https://mdn.github.io/fetch-examples/fetch-request/)) we
create a new `Request` object using the constructor, then fetch it using a
{{domxref("fetch()")}} call. Since we are fetching an image, we run
{{domxref("Response.blob")}} on the response to give it the proper MIME type so it will be
handled properly, then create an Object URL of it and display it in an
{{htmlelement("img")}} element.

```js
var myImage = document.querySelector('img');

var myRequest = new Request('flowers.jpg');

fetch(myRequest).then(function(response) {
  return response.blob();
}).then(function(response) {
  var objectURL = URL.createObjectURL(response);
  myImage.src = objectURL;
});
```

In our [Fetch
Request with init example](https://github.com/mdn/fetch-examples/tree/master/fetch-request-with-init) (see [Fetch Request
init live](https://mdn.github.io/fetch-examples/fetch-request-with-init/)) we do the same thing except that we pass in an init object when we
invoke `fetch()`:

```js
var myImage = document.querySelector('img');

var myHeaders = new Headers();
myHeaders.append('Content-Type', 'image/jpeg');

var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

var myRequest = new Request('flowers.jpg',myInit);

fetch(myRequest).then(function(response) {
  ...
});
```

Note that you could also pass the init object into the `fetch` call to get
the same effect, e.g.:

```js
fetch(myRequest,myInit).then(function(response) {
  ...
});
```

You can also use an object literal as `headers` in `init`.

```js
var myInit = { method: 'GET',
               headers: {
                   'Content-Type': 'image/jpeg'
               },
               mode: 'cors',
               cache: 'default' };

var myRequest = new Request('flowers.jpg', myInit);
```

You may also pass a {{domxref("Request")}} object to the `Request()`
constructor to create a copy of the Request (This is similar to calling the
{{domxref("Request.clone","clone()")}} method.)

```js
var copy = new Request(myRequest);
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
