---
title: HTMLImageElement.complete
slug: Web/API/HTMLImageElement/complete
page-type: web-api-instance-property
tags:
  - API
  - Fetching
  - HTML
  - HTML DOM
  - HTMLImageElement
  - Loading
  - Property
  - Reference
  - complete
browser-compat: api.HTMLImageElement.complete
---
{{APIRef("HTML DOM")}}

The read-only {{domxref("HTMLImageElement")}} interface's
**`complete`** attribute is a Boolean value which indicates
whether or not the image has completely loaded.

## Value

A Boolean value which is `true` if the image has completely loaded;
otherwise, the value is `false`.

The image is considered completely loaded if any of the following are true:

- Neither the {{htmlattrxref("src", "img")}} nor the {{htmlattrxref("srcset", "img")}}
  attribute is specified.
- The `srcset` attribute is absent and the `src` attribute,
  while specified, is the empty string (`""`).
- The image resource has been fully fetched and has been queued for
  rendering/compositing.
- The image element has previously determined that the image is fully available and
  ready for use.
- The image is "broken;" that is, the image failed to load due to an error or because
  image loading is disabled.

It's worth noting that due to the image potentially being received asynchronously, the
value of `complete` may change while your script is running.

## Examples

Consider a photo library app that provides the ability to open images into a lightbox
mode for improved viewing as well as editing of the image. These photos may be very
large, so you don't want to wait for them to load, so your code
uses `async`/`await` to load the images in the background.

But imagine that you have other code that needs to only run when the image has
completed loading, such as a command that performs red-eye removal on the image in the
lightbox. While ideally this command wouldn't even be executed if the image hasn't fully
loaded, for improved reliability you want to check to ensure this is the case.

So the `fixRedEyeCommand()` function, which is called by the button that
triggers red-eye removal, checks the value of the lightbox
image's `complete` property before attempting to do its work. This is
demonstrated in the code below.

```js
let lightboxElem = document.querySelector("#lightbox");
let lightboxImgElem = lightboxElem.querySelector("img");
let lightboxControlsElem = lightboxElem.querySelector(".toolbar");

async function loadImage(url, elem) {
  return new Promise((resolve, reject) => {
    elem.onload = () => resolve(elem);
    elem.onerror = reject;
    elem.src = url;
  });
}

async function lightBox(url) {
  lightboxElem.style.display = "block";
  await loadImage("https://somesite.net/huge-image.jpg", lightboxImgElem);
  lightboxControlsElem.disabled = false;
}

// …

function fixRedEyeCommand() {
  if (lightboxElem.style.display === "block" && lightboxImgElem.complete) {
    fixRedEye(lightboxImgElem);
  } else {
    /* can't start doing this until the image is fully loaded */
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
