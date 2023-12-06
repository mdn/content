---
title: "Response: json() static method"
short-title: json()
slug: Web/API/Response/json_static
page-type: web-api-static-method
browser-compat: api.Response.json_static
---

{{APIRef("Fetch API")}}

The **`json()`** static method of the {{domxref("Response")}} interface returns a `Response` that contains the provided JSON data as body, and a {{HTTPHeader("Content-Type")}} header which is set to `application/json`.
The response status, status message, and additional headers can also be set.

The method makes it easy to create `Response` objects for returning JSON encoded data.
[Service workers](/en-US/docs/Web/API/Service_Worker_API), for example, intercept fetch requests made by a browser, and might use `json()` to construct a `Response` from cached JSON data to return to the main thread.
The `json()` method can also be used in server code to return JSON data for [single page applications](/en-US/docs/Glossary/SPA), and any other applications where a JSON response is expected.

## Syntax

```js-nolint
Response.json(data)
Response.json(data, options)
```

### Parameters

- `data`
  - : The JSON data to be used as the response body.
- `options` {{optional_inline}}

  - : An options object containing settings for the response, including the status code, status text, and headers.
    This is the same as the options parameter of the {{domxref("Response.Response", "Response()")}} constructor.

    - `status`
      - : The status code for the response, such as `200`.
    - `statusText`
      - : The status message associated with the status code.
        For a status of `200` this might be `OK`.
    - `headers`
      - : Any headers you want to add to your response, contained within a {{domxref("Headers")}} object or object literal of {{jsxref("String")}} key/value pairs (see [HTTP headers](/en-US/docs/Web/HTTP/Headers) for a reference).

### Return value

A {{domxref("Response")}} object.

### Exceptions

- `TypeError`
  - : Thrown if `data` cannot be converted to a JSON string.
    This might happen if the data is a JavaScript object that has method, or that has a circular reference, or if the passed object is `undefined`.

## Examples

### Response with JSON data

This live example shows how you can create a JSON response object, and logs the newly created object for inspection (the logging code is hidden as it is not relevant).

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}

async function logResponse(response) {
  const responseText = await jsonResponse.text();
  log(`body: ${responseText}`);
  jsonResponse.headers.forEach((header) => log(`header: ${header}`));
  log(`status: ${jsonResponse.status}`);
  log(`statusText: ${jsonResponse.statusText}`);
  log(`type: ${jsonResponse.type}`);
  log(`url: ${jsonResponse.url}`);
  log(`ok: ${jsonResponse.ok}`);
  log(`redirected: ${jsonResponse.redirected}`);
  log(`bodyUsed: ${jsonResponse.bodyUsed}`);
}
```

The code below creates a `Response` object with JSON body `{ my: "data" }` and header set to `application/json`.

```js
const jsonResponse = Response.json({ my: "data" });
logResponse(jsonResponse);
```

The object has the following properties.
Note the body and header are set as expected, and that the default status is set to `200`.

{{EmbedLiveSample('Response with JSON data','100%', '170')}}

### Response with JSON data and options

This example shows how you can create a JSON response object with `status` and `statusText` options.

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}

async function logResponse(response) {
  const responseText = await jsonResponse.text();
  log(`body: ${responseText}`);
  jsonResponse.headers.forEach((header) => log(`header: ${header}`));
  log(`status: ${jsonResponse.status}`);
  log(`statusText: ${jsonResponse.statusText}`);
  log(`type: ${jsonResponse.type}`);
  log(`url: ${jsonResponse.url}`);
  log(`ok: ${jsonResponse.ok}`);
  log(`redirected: ${jsonResponse.redirected}`);
  log(`bodyUsed: ${jsonResponse.bodyUsed}`);
}
```

The code below creates a `Response` object with JSON body `{ some: "data", more: "information" }` and header set to `application/json`.
It also sets the status to `307` and sets the appropriate status text ("Temporary Redirect").

```js
const jsonResponse = Response.json(
  { some: "data", more: "information" },
  { status: 307, statusText: "Temporary Redirect" },
);
logResponse(jsonResponse);
```

The object has the following properties, which are set as expected.
Note that the `ok` property of the response changed to `false` as the status value is not in the range of 200 to 299.

{{EmbedLiveSample('Response with JSON data and options','100%', '170')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Service Worker API](/en-US/docs/Web/API/Service_Worker_API)
