---
title: "HTMLImageElement: isMap property"
short-title: isMap
slug: Web/API/HTMLImageElement/isMap
page-type: web-api-instance-property
browser-compat: api.HTMLImageElement.isMap
---

{{APIRef("HTML DOM")}}

The **`isMap`** property of the {{domxref("HTMLImageElement")}} interface indicates that the image is part of a [server-side map](https://en.wikipedia.org/wiki/Image_map#Server-side). If so, the coordinates where the user clicked on the image are sent to the server. It reflects the `<img>` element's [`ismap`](/en-US/docs/Web/HTML/Reference/Elements/img#ismap) content attribute. This attribute is allowed only if the `<img>` element is a descendant of an {{htmlelement("a")}} element with a valid [`href`](/en-US/docs/Web/HTML/Reference/Elements/a#href) attribute.

> [!NOTE]
> For accessibility reasons, you should generally avoid using server-side image maps, as they require the use of a mouse. Use a [client-side image map](/en-US/docs/Web/HTML/How_to/Add_a_hit_map_on_top_of_an_image) instead.

## Value

A Boolean value which is `true` if the image is being used for a server-side image map; otherwise, the value is `false`.

## Usage notes

When an image marked as being part of a server-side image map is clicked, the browser constructs the string "?x,y", where x and y indicate the coordinates at which the mouse was clicked as offsets from the top-left corner of the image, specified in CSS pixels.

The browser then fetches that URL from the server and displays or downloads it depending on the value of the [`download`](/en-US/docs/Web/HTML/Reference/Elements/a#download) attribute.

Unlike server-side image maps, client-side image maps don't cause the {{HTMLElement("img")}} element to adopt interactive content mode.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
