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

A string containing the hash `#` symbol followed by the [`name`](/en-US/docs/Web/HTML/Reference/Elements/map#name) of the {{HTMLElement("map")}} element which defines the image map to apply to the image.

## Examples

### Using useMap

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

Given the image map named `mainmenu-map`, you can dynamically construct images that reference the image map as follows:

```js
const image = new Image();
image.src = "menu-box.png";
image.alt = "";
image.useMap = "#mainmenu-map";
```

For additional examples (including interactive ones), see the articles about the {{HTMLElement("map")}} and {{HTMLElement("area")}} elements, as well as the [guide to using image maps](/en-US/docs/Web/HTML/How_to/Add_a_hit_map_on_top_of_an_image).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Add a hitmap on top of an image](/en-US/docs/Web/HTML/How_to/Add_a_hit_map_on_top_of_an_image)
- {{HTMLElement("map")}}
- {{HTMLElement("area")}}
