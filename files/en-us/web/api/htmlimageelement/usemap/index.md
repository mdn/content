---
title: "HTMLImageElement: useMap property"
short-title: useMap
slug: Web/API/HTMLImageElement/useMap
page-type: web-api-instance-property
browser-compat: api.HTMLImageElement.useMap
---

{{APIRef("HTML DOM")}}

The **`useMap`** property of the {{domxref("HTMLImageElement")}} interface providing the name of the client-side image map to apply to the image. It reflects the `<img>` element's [`usemap`](/en-US/docs/Web/HTML/Reference/Elements/img#usemap) content attribute.

## Value

A string providing a valid anchor to a {{HTMLElement("map")}} element, formed by prepending the hash character `#` to the map's [`name`](/en-US/docs/Web/HTML/Reference/Elements/map#name) attribute.

You can learn more about client-side image maps in our learning article [Add a hitmap on top of an image](/en-US/docs/Web/HTML/How_to/Add_a_hit_map_on_top_of_an_image).

## Examples

Consider a `<map>` that looks like this:

```html
<map name="mainmenu-map">
  <area
    shape="circle"
    coords="25, 25, 75"
    href="/index.html"
    alt="Return to home page" />
  <area shape="rect" coords="25, 25, 100, 150" href="/index.html" alt="Shop" />
</map>
```

You could set `useMap` like this:

```js
const menuBox = document.getElementById("menu-box");
menuBox.useMap = "#mainmenu-map";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Add a hitmap on top of an image](/en-US/docs/Web/HTML/How_to/Add_a_hit_map_on_top_of_an_image)
- {{HTMLElement("map")}}
- {{HTMLElement("area")}}
