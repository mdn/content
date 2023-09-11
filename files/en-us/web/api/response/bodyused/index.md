---
title: "Response: bodyUsed property"
short-title: bodyUsed
slug: Web/API/Response/bodyUsed
page-type: web-api-instance-property
browser-compat: api.Response.bodyUsed
---

{{APIRef("Fetch API")}}

The **`bodyUsed`** read-only property of the {{domxref("Response")}} interface is a boolean value that indicates whether the body has been read yet.

## Value

A boolean value.

## Examples

### Checking `bodyUsed`

This example illustrates that reading the body of a response changes the value of `bodyUsed` from `false` to `true`.

The example contains an empty image.

When the example's JavaScript runs, we fetch an image and assigns the returned promise to a variable `responsePromise`.

When the user clicks "Use response", we check whether the response has been used already. If it has, we print a message. If it has not, we read the response body and used it to provide a value for the image's `src` attribute.

#### HTML

```html
<button id="use">Use response</button>
<button id="reset">Reset</button>
<br />
<img id="my-image" src="" />
<pre id="log"></pre>
```

#### JavaScript

```js
const useResponse = document.querySelector("#use");
const reset = document.querySelector("#reset");
const myImage = document.querySelector("#my-image");
const log = document.querySelector("#log");

const responsePromise = fetch(
  "https://upload.wikimedia.org/wikipedia/commons/7/77/Delete_key1.jpg",
);

useResponse.addEventListener("click", async () => {
  const response = await responsePromise;
  if (response.bodyUsed) {
    log.textContent = "Body has already been used!";
  } else {
    const result = await response.blob();
    const objectURL = URL.createObjectURL(result);
    myImage.src = objectURL;
  }
});

reset.addEventListener("click", () => {
  document.location.reload();
});
```

#### Result

Initially there is no value for the image. If you click "Use response" once, then `bodyUsed` is `false`, so we read the response and set the image. If you then click "Use response" again, then `bodyUsed` is `true`, and we print the message.

Click "Reset" to reload the example, so you can try again.

{{ EmbedLiveSample('Examples', '100%', '300px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
