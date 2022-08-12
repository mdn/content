---
title: HTMLImageElement.useMap
slug: Web/API/HTMLImageElement/useMap
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - HTML
  - HTML DOM
  - HTML WHATWG
  - HTMLImageElement
  - Image maps
  - Links
  - Property
  - Reference
  - interactive
  - useMap
browser-compat: api.HTMLImageElement.useMap
---
{{APIRef("HTML DOM")}}

The **`useMap`** property on the
{{domxref("HTMLImageElement")}} interface reflects the value of the
{{Glossary("HTML")}} {{htmlattrxref("usemap", "img")}} attribute, which is a string
providing the name of the client-side image map to apply to the image.

## Value

A string providing the page-local URL (that is, a URL that begins
with the hash or pound symbol, "`#`") of the {{HTMLElement("map")}} element
which defines the image map to apply to the image.

You can learn more about client-side image maps in our learning article [Add a hitmap on top of an image](/en-US/docs/Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image).

## Usage notes

The string value of `useMap` must be a valid anchor for a
{{HTMLElement("map")}} element. In other words, this string should be the value of the
appropriate `<map>`'s {{htmlattrxref("name", "map")}} attribute with a
pound or hash symbol prepended to it.

Consider a `<map>` that looks like this:

```html
<map name="mainmenu-map">
  <area shape="circle" coords="25, 25, 75" href="/index.html" alt="Return to home page">
  <area shape="rect" coords="25, 25, 100, 150" href="/index.html" alt="Shop">
</map>
```

Given the image map named `mainmenu-map`, the image which uses it should
look something like the following:

```html
<img src="menubox.png" usemap="#mainmenu-map">
```

For additional examples (including interactive ones), see the articles about the
{{HTMLElement("map")}} and {{HTMLElement("area")}} elements, as well as the [guide to using image maps](/en-US/docs/Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image).

## Examples

{{EmbedInteractiveExample("pages/tabbed/area.html", "tabbed-taller")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
