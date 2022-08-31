---
title: Response.text()
slug: Web/API/Response/text
page-type: web-api-instance-method
tags:
  - API
  - Fetch
  - Method
  - Reference
  - Text
  - Response
browser-compat: api.Response.text
---
{{APIRef("Fetch")}}

The **`text()`** method of the {{domxref("Response")}} interface takes a {{domxref("Response")}} stream and reads it to completion.
It returns a promise that resolves with a {{jsxref("String")}}.
The response is *always* decoded using UTF-8.

## Syntax

```js
text()
```

### Parameters

None.

### Return value

A Promise that resolves with a {{jsxref("String")}}.

## Examples

In our [fetch text example](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-text) (run [fetch text live](https://mdn.github.io/dom-examples/fetch/fetch-text/)), we have an {{htmlelement("article")}} element and three links (stored in the `myLinks` array.)
First, we loop through all of these and give each one an `onclick` event handler so that the `getData()` function is run — with the link's `data-page` identifier passed to it as an argument — when one of the links is clicked.

When `getData()` is run, we create a new request using the {{domxref("Request.Request","Request()")}} constructor, then use it to fetch a specific `.txt` file.
When the fetch is successful, we read a string out of the response using `text()`, then set the {{domxref("Element.innerHTML","innerHTML")}} of the {{htmlelement("article")}} element equal to the text object.

```js
const myArticle = document.querySelector('article');
const myLinks = document.querySelectorAll('ul a');

for (const link of myLinks) {
  link.onclick = (e) => {
    e.preventDefault();
    const linkData = e.target.getAttribute('data-page');
    getData(linkData);
  };
}

function getData(pageId) {
  console.log(pageId);
  const myRequest = new Request(`${pageId}.txt`);
  fetch(myRequest)
    .then((response) => response.text())
    .then((text) => {
      myArticle.innerHTML = text;
    });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
