---
title: Response.json()
slug: Web/API/Response/json
tags:
  - API
  - Fetch
  - JSON
  - Method
  - Reference
  - Response
browser-compat: api.Response.json
---
{{APIRef("Fetch API")}}

The **`json()`** method of the {{DOMxRef("Response")}} interface takes
a {{DOMxRef("Response")}} stream and reads it to completion. It returns a promise which
resolves with the result of parsing the body text as {{JSxRef("JSON")}}.

Note that despite the method being named `json()`, the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object.

## Syntax

```js
response.json().then(data => {
  // do something with your data
});
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves to a JavaScript object. This object could be
anything that can be represented by JSON — an object, an array, a string, a number...

## Example

In our [fetch
json example](https://github.com/mdn/fetch-examples/tree/master/fetch-json) (run [fetch
json live](https://mdn.github.io/fetch-examples/fetch-json/)), we create a new request using the {{DOMxRef("Request.Request",
  "Request()")}} constructor, then use it to fetch a `.json` file. When the
fetch is successful, we read and parse the data using `json()`, then read
values out of the resulting objects as you'd expect and insert them into list items to
display our product data.

```js
const myList = document.querySelector('ul');
const myRequest = new Request('products.json');

fetch(myRequest)
  .then(response => response.json())
  .then(data => {
    for (const product of data.products) {
      let listItem = document.createElement('li');
      listItem.appendChild(
        document.createElement('strong')
      ).textContent = product.Name;
      listItem.append(
        ` can be found in ${
          product.Location
        }. Cost: `
      );
      listItem.appendChild(
        document.createElement('strong')
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
