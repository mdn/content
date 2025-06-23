---
title: "HTMLImageElement: useMap property"
short-title: useMap
slug: Web/API/HTMLImageElement/useMap
page-type: web-api-instance-property
browser-compat: api.HTMLImageElement.useMap
---

{{APIRef("HTML DOM")}}

The **`useMap`** property on the
{{domxref("HTMLImageElement")}} interface reflects the value of the
{{Glossary("HTML")}} [`usemap`](/en-US/docs/Web/HTML/Reference/Elements/img#usemap) attribute, which is a string
providing the name of the client-side image map to apply to the image.

## Value

A string providing the page-local URL (that is, a URL that begins
with the hash or pound symbol, `#`) of the {{HTMLElement("map")}} element
which defines the image map to apply to the image.

You can learn more about client-side image maps in our learning article [Add a hitmap on top of an image](/en-US/docs/Web/HTML/How_to/Add_a_hit_map_on_top_of_an_image).

## Usage notes

The string value of `useMap` must be a valid anchor for a
{{HTMLElement("map")}} element. In other words, this string should be the value of the
appropriate `<map>`'s [`name`](/en-US/docs/Web/HTML/Reference/Elements/map#name) attribute with a
pound or hash symbol prepended to it.

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

Given the image map named `mainmenu-map`, the image which uses it should
look something like the following:

```html
<img src="menubox.png" usemap="#mainmenu-map" />
```

For additional examples (including interactive ones), see the articles about the
{{HTMLElement("map")}} and {{HTMLElement("area")}} elements, as well as the [guide to using image maps](/en-US/docs/Web/HTML/How_to/Add_a_hit_map_on_top_of_an_image).

## Examples

{{InteractiveExample("HTML Demo: &lt;area&gt;", "tabbed-taller")}}

```html interactive-example
<map name="infographic">
  <area
    shape="poly"
    coords="129,0,260,95,129,138"
    href="https://developer.mozilla.org/docs/Web/HTTP"
    alt="HTTP" />
  <area
    shape="poly"
    coords="260,96,209,249,130,138"
    href="https://developer.mozilla.org/docs/Web/HTML"
    alt="HTML" />
  <area
    shape="poly"
    coords="209,249,49,249,130,139"
    href="https://developer.mozilla.org/docs/Web/JavaScript"
    alt="JavaScript" />
  <area
    shape="poly"
    coords="48,249,0,96,129,138"
    href="https://developer.mozilla.org/docs/Web/API"
    alt="Web APIs" />
  <area
    shape="poly"
    coords="0,95,128,0,128,137"
    href="https://developer.mozilla.org/docs/Web/CSS"
    alt="CSS" />
</map>
<img
  usemap="#infographic"
  src="/shared-assets/images/examples/mdn-info.png"
  alt="MDN infographic" />
```

```css interactive-example
img {
  display: block;
  margin: 0 auto;
  width: 260px;
  height: 260px;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
