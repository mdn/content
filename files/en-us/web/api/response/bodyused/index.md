---
title: Response.bodyUsed
slug: Web/API/Response/bodyUsed
tags:
  - API
  - Fetch
  - Property
  - Reference
  - bodyUsed
  - Response
browser-compat: api.Response.bodyUsed
---
{{APIRef("Fetch")}}

The **`bodyUsed`** read-only property of the {{domxref("Response")}} interface is a boolean value that indicates whether the body has been read yet.

## Value

A boolean value.

## Example

In our [fetch request example](https://github.com/mdn/fetch-examples/tree/master/fetch-request) (run [fetch request live](https://mdn.github.io/fetch-examples/fetch-request/)),
we create a new request using the {{domxref("Request.Request","Request()")}} constructor,
then use it to fetch a JPG. When the fetch is successful, we read a {{domxref("Blob")}} out of the response using `blob()`,
put it into an object URL using {{domxref("URL.createObjectURL")}}, and then set that URL as the source of an {{htmlelement("img")}} element to display the image.

Notice that we log `response.bodyUsed` to the console once before the `response.blob()` call and once after.
This returns `false` before and `true` afterwards, as at that point the body has been read.

### HTML Content

```html
<img class="my-image" src="https://wikipedia.org/static/images/project-logos/frwiki-1.5x.png">
```

### JS Content

```js
var myImage = document.querySelector('.my-image');
fetch('https://upload.wikimedia.org/wikipedia/commons/7/77/Delete_key1.jpg').then(function(response) {
    console.log(response.bodyUsed);
    var res = response.blob();
    console.log(response.bodyUsed);
    return res;
}).then(function(response) {
    var objectURL = URL.createObjectURL(response);
    myImage.src = objectURL;
});
```

{{ EmbedLiveSample('Example', '100%', '250px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
