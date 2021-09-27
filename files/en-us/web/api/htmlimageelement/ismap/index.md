---
title: HTMLImageElement.isMap
slug: Web/API/HTMLImageElement/isMap
tags:
  - API
  - HTML
  - HTML DOM
  - HTMLImageElement
  - Image Map
  - Link
  - Reference
  - isMap
  - server-side
browser-compat: api.HTMLImageElement.isMap
---
{{APIRef("HTML DOM")}}

The {{domxref("HTMLImageElement")}} property **`isMap`** is a
Boolean value which indicates that the image is to be used by a server-side image map.
This may only be used on images located within an {{HTMLElement("a")}} element.

> **Note:** For accessibility reasons, you should generally avoid using
> server-side image maps, as they require the use of a mouse. Use a [client-side
> image map](/en-US/docs/Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image) instead.

## Syntax

```js
htmlImageElement.isMap = true|false;
let isMap = htmlImageElement.isMap;
```

### Value

A Boolean value which is `true` if the image is being used for a server-side
image map; otherwise, the value is `false`.

## Usage notes

When an image marked as being part of a server-side image map is clicked, the browser
constructs the string "?x,y", where x and y indicate the coordinates at which the
mouse was clicked as offsets from the top-left corner of the image, specified in CSS
pixels.

The browser then fetches that URL from the server and displays or downloads it
depending on the value of the {{htmlattrxref("download", "a")}} attribute.

Unlike server-side image maps, client-side image maps don't cause the
{{HTMLElement("img")}} element to adopt interactive content mode.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
