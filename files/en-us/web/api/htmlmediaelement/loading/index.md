---
title: "HTMLMediaElement: loading property"
short-title: loading
slug: Web/API/HTMLMediaElement/loading
page-type: web-api-instance-property
browser-compat: api.HTMLMediaElement.loading
---

{{APIRef("HTML DOM")}}

The **`loading`** property of the {{domxref("HTMLMediaElement")}} interface provides a hint to the browser on how to handle the loading of the media which is currently outside the window's {{Glossary("visual viewport")}}. This helps to optimize the loading of the document's contents by postponing loading the media until it's expected to be needed, rather than immediately during the initial page load. It reflects the `<audio>` element's [`loading`](/en-US/docs/Web/HTML/Reference/Elements/audio#loading) content attribute or the `<video>` element's [`loading`](/en-US/docs/Web/HTML/Reference/Elements/video#loading) content attribute.

## Value

A string whose value is one of `eager` or `lazy`. For their meanings, see the HTML [`<audio loading>`](/en-US/docs/Web/HTML/Reference/Elements/audio#loading) or [`<video loading>`](/en-US/docs/Web/HTML/Reference/Elements/video#loading) reference.

## Examples

### Basic usage

The `addVideoToList()` function shown below adds a video thumbnail to a list of items, using lazy-loading to avoid loading the video from the network until it's actually needed.

```js
function addVideoToList(url) {
  const list = document.querySelector("div.video-list");

  const newItem = document.createElement("div");
  newItem.className = "video-item";

  const newVideo = document.createElement("video");

  // Lazy-load if supported
  if ("loading" in HTMLVideoElement.prototype) {
    newVideo.loading = "lazy";
  } else {
    // If native lazy-loading is not supported you may want to consider
    // alternatives, though this may be fine as a progressive enhancement.
  }

  newVideo.width = 320;
  newVideo.height = 240;
  newVideo.src = url;

  newItem.appendChild(newVideo);
  list.appendChild(newItem);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{HTMLElement("audio")}} element
- The {{HTMLElement("video")}} element
- [Web performance](/en-US/docs/Learn_web_development/Extensions/Performance) in the MDN Learning Area
- [Lazy loading](/en-US/docs/Web/Performance/Guides/Lazy_loading) in the MDN web performance guide
