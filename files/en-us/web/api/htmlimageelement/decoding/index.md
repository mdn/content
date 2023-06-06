---
title: "HTMLImageElement: decoding property"
short-title: decoding
slug: Web/API/HTMLImageElement/decoding
page-type: web-api-instance-property
browser-compat: api.HTMLImageElement.decoding
---

{{APIRef}}

The **`decoding`** property of the {{domxref("HTMLImageElement")}} interface provides a hint to the browser as to whether it should perform image decoding along with rendering the other DOM content and then present it all together (`sync`), or render and present the other DOM content first and then decode the image and present it later (`async`).

## Value

A string representing the decoding hint. Possible values are:

- `sync`
  - : Decode the image synchronously along with rendering the other DOM content, and present everything together. This results in a single presentation step that looks more "correct" (i.e. no intermediate display steps, mitigates problems such as content jank as images are loaded in), but it can result in a performance hit, especially for users on slower networks.
- `async`
  - : Decode the image asynchronously, after rendering and presenting the other DOM content. This may result in slightly inferior presentation, as different parts of the content are presented at different times, but it can improve performance, as the text content is available sooner.
- `auto`
  - : No preference for the decoding mode; the browser decides what is best for the user. This is the default value.

## Usage notes

The `decoding` property allows you to control whether or not the browser should try to decode and present your image synchronously along with the other page content, or present the other content first and then defer the image encoding until afterwards, asynchronously.

Which one you use depends on what is most important for your app — if you are not so worried about performance and want to encourage the browser to load the app "correctly" all in one go, you'll want to specify the `sync` decoding hint. If you are more worried about perceived performance of your app and think it is more beneficial for users to be able to read your text content as soon as possible, the `async` hint is the way to go.

`async` image decoding can be beneficial for performance when applied to {{HTMLElement("img")}} elements, but possibly even more so when used for offscreen image objects. If you can't even see an image on the screen yet, you certainly don't want it blocking the display of other page content.

Another aspect of this is more consistent behavior across browsers. Different browsers won't necessarily all have the same default behavior with regards to choosing sync or async in different situations, so anything that can make them choose more consistently is a good thing.

## Examples

```js
const img = new Image();
img.decoding = "sync";
img.src = "img/logo.png";
```

You could also create the equivalent {{htmlelement("img")}} element in HTML as follows:

```html
<img decoding="sync" src="img/logo.png" />
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
