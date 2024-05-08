---
title: "HTMLMediaElement: preload property"
short-title: preload
slug: Web/API/HTMLMediaElement/preload
page-type: web-api-instance-property
browser-compat: api.HTMLMediaElement.preload
---

{{APIRef("HTML DOM")}}

The **`preload`** property of the {{domxref("HTMLMediaElement")}} interface is a string that provides a hint to the browser about what the author thinks will lead to the best user experience.

It reflects the `preload` attribute of the {{HTMLElement("audio")}} element and the {{HTMLElement("video")}} element.

## Value

A string. Possible values are as follows:

- `none`
  - : Indicates that the media should not be preloaded.
- `metadata`
  - : Indicates that only media metadata (e.g. length) is fetched.
- `auto`
  - : Indicates that the whole media file can be downloaded, even if the user is not expected to use it.
- _empty string_
  - : A synonym of the `auto` value.

## Examples

```html
<video
  id="el"
  controls
  src="https://example.com/media.mp4"
  poster="https://example.com/media.jpg"
  width="800"
  height="600"
  preload="metadata">
  Sorry, your browser doesn't support embedded videos, but don't worry, you can
  <a href="https://example.com/media.mp4" download="media.mp4">download it</a>
  and watch it with your favorite video player!
</video>
```

```js
const el = document.getElementById("el");
console.log(el.preload); // Output: "metadata"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
