---
title: Response
slug: Web/API/Response
tags:
  - API
  - Fetch
  - Fetch API
  - Interface
  - Reference
  - Response
browser-compat: api.Response
---
{{APIRef("Fetch API")}}

The **`Response`** interface of the [Fetch API](/en-US/docs/Web/API/Fetch_API) represents the response to a request.

You can create a new `Response` object using the {{domxref("Response.Response()")}} constructor, but you are more likely to encounter a `Response` object being returned as the result of another API operation—for example, a service worker {{domxref("Fetchevent.respondWith")}}, or a simple {{domxref("fetch()")}}.

## Constructor

- {{domxref("Response.Response","Response()")}}
  - : Creates a new `Response` object.

## Properties

- {{domxref("Response.body")}} {{readonlyInline}}
  - : A {{domxref("ReadableStream")}} of the body contents.
- {{domxref("Response.bodyUsed")}} {{readonlyInline}}
  - : Stores a boolean value that declares whether the body has been used in a response yet.
- {{domxref("Response.headers")}} {{readonlyinline}}
  - : The {{domxref("Headers")}} object associated with the response.
- {{domxref("Response.ok")}} {{readonlyinline}}
  - : A boolean indicating whether the response was successful (status in the range `200`–`299`) or not.
- {{domxref("Response.redirected")}} {{ReadOnlyInline}}
  - : Indicates whether or not the response is the result of a redirect (that is, its URL list has more than one entry).
- {{domxref("Response.status")}} {{readonlyinline}}
  - : The status code of the response. (This will be `200` for a success).
- {{domxref("Response.statusText")}} {{readonlyinline}}
  - : The status message corresponding to the status code. (e.g., `OK` for `200`).
- {{domxref("Response.trailers")}}
  - : A {{jsxref("Promise")}} resolving to a {{domxref("Headers")}} object, associated with the response with {{domxref("Response.headers")}} for values of the HTTP {{HTTPHeader("Trailer")}} header.
- {{domxref("Response.type")}} {{readonlyinline}}
  - : The type of the response (e.g., `basic`, `cors`).
- {{domxref("Response.url")}} {{readonlyinline}}
  - : The URL of the response.

## Methods

- {{domxref("Response.arrayBuffer()")}}
  - : Returns a promise that resolves with an {{jsxref("ArrayBuffer")}} representation of the response body.
- {{domxref("Response.blob()")}}
  - : Returns a promise that resolves with a {{domxref("Blob")}} representation of the response body.
- {{domxref("Response.clone()")}}
  - : Creates a clone of a `Response` object.
- {{domxref("Response.error()")}}
  - : Returns a new `Response` object associated with a network error.
- {{domxref("Response.formData()")}}
  - : Returns a promise that resolves with a {{domxref("FormData")}} representation of the response body.
- {{domxref("Response.json()")}}
  - : Returns a promise that resolves with the result of parsing the response body text as {{jsxref("JSON")}}.
- {{domxref("Response.redirect()")}}
  - : Creates a new response with a different URL.
- {{domxref("Response.text()")}}
  - : Returns a promise that resolves with a text representation of the response body.

## Examples

### Fetching an image

In our [basic fetch example](https://github.com/mdn/fetch-examples/tree/master/basic-fetch) ([run example live](https://mdn.github.io/fetch-examples/basic-fetch/)) we use a simple `fetch()` call to grab an image and display it in an {{htmlelement("img")}} element.
The `fetch()` call returns a promise, which resolves to the `Response` object associated with the resource fetch operation.

You'll notice that since we are requesting an image, we need to run {{domxref("Response.blob")}} to give the response its correct MIME type.

```js
const image = document.querySelector('.my-image');
fetch('flowers.jpg')
.then(response => response.blob())
.then(blob => {
  const objectURL = URL.createObjectURL(blob);
  image.src = objectURL;
});
```

You can also use the {{domxref("Response.Response()")}} constructor to create your own custom `Response` object:

```js
const response = new Response();
```

### An Ajax Call

Here we call a PHP program file that generates a JSON string, displaying the result as a JSON value, including simple error handling.

```js
// Function to do an Ajax call
const doAjax = async () => {
  const response = await fetch('Ajax.php'); // Generate the Response object
  if (response.ok) {
    const jsonValue = await response.json(); // Get JSON value from the response body
    return Promise.resolve(jsonValue);
  } else {
    return Promise.reject('*** PHP file not found');
  }
}

// Call the function and output value or error message to console
doAjax().then(console.log).catch(console.log);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
