---
title: "Response: json() method"
short-title: json()
slug: Web/API/Response/json
page-type: web-api-instance-method
browser-compat: api.Response.json
---

{{APIRef("Fetch API")}}

The **`json()`** method of the {{DOMxRef("Response")}} interface takes
a {{DOMxRef("Response")}} stream and reads it to completion. It returns a promise which
resolves with the result of parsing the body text as {{JSxRef("JSON")}}.

Note that despite the method being named `json()`, the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object.

## Syntax

```js-nolint
json()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves to a JavaScript object. This object could be
anything that can be represented by JSON — an object, an array, a string, a number…

### Exceptions

- `TypeError`
  - A {{jsxref("TypeError")}} will be thrown if the body of the `Response` is unusable, meaning that the body is non-null and its stream is [disturbed](https://streams.spec.whatwg.org/#is-readable-stream-disturbed) or [locked](https://streams.spec.whatwg.org/#readablestream-locked). The following are some possible reasons for the stream to be disturbed or locked:
    - Attempting to read the body's stream multiple times
    - Attempting to read the body's stream after it has been consumed
    - Using a request body that doesn't have a known length (such as a `ReadableStream`)
  - Here is an example of how a TypeError can be thrown when using `response.json()`:

    ```js
    fetch('https://example.com/data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch((error) => {
        if (error instanceof TypeError) {
          console.error('Error: Response body stream is disturbed or locked.');
        } else {
          console.error('Error:', error.message);
        }
      });
    ```

- `SyntaxError`
  - A {{jsxref("SyntaxError")}} will be thrown if the response body is not valid JSON. This can happen if the server returns a non-JSON response or if the response body is truncated or malformed.

  - Here is an example of how a `SyntaxError` can be thrown when using `response.json()`:

    ```js
    fetch('https://example.com/data.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch((error) => {
      if (error instanceof SyntaxError) {
        console.error('Error: Response body is not valid JSON.');
      } else {
        console.error('Error:', error.message);
      }
    });
    ```

- Other Exceptions
  - Other exceptions that can be thrown by `response.json()` include those that are thrown by JSON.parse() when attempting to parse the response body as JSON. These exceptions include {{jsxref("TypeError")}}, {{jsxref("RangeError")}}, and {{jsxref("URIError")}}. For more information on these exceptions, see the {{jsxref("JSON.parse()#exceptions")}}.

## Examples

In our [fetch JSON example](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-json) (run [fetch JSON live](https://mdn.github.io/dom-examples/fetch/fetch-json/)), we create a new request using the {{DOMxRef("Request.Request",
  "Request()")}} constructor, then use it to fetch a `.json` file. When the
fetch is successful, we read and parse the data using `json()`, then read
values out of the resulting objects as you'd expect and insert them into list items to
display our product data.

```js
const myList = document.querySelector("ul");
const myRequest = new Request("products.json");

fetch(myRequest)
  .then((response) => response.json())
  .then((data) => {
    for (const product of data.products) {
      const listItem = document.createElement("li");
      listItem.appendChild(document.createElement("strong")).textContent =
        product.Name;
      listItem.append(` can be found in ${product.Location}. Cost: `);
      listItem.appendChild(
        document.createElement("strong")
      ).textContent = `£${product.Price}`;
      myList.appendChild(listItem);
    }
  })
  .catch(console.error);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [Cross-Origin Resource Sharing (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
