---
title: Linking
slug: Web/SVG/Guides/Linking
page-type: guide
sidebar: svgref
---

SVG takes part in linking in three ways: a graphic can be a link to another resource, a link can point at a particular view of an SVG document, and elements inside an SVG document can reference each other. This guide covers all three.

## Linking out of an SVG document

The SVG {{svgelement("a")}} element creates a hyperlink, much like the HTML {{htmlelement("a")}} element. In SVG it is a container, so you can wrap it around a single shape, a text string, or a whole {{svgelement("g")}} group, and the entire wrapped graphic becomes clickable.

The destination goes in the {{svgattr("href")}} attribute:

```html
<a href="https://example.com/">
  <circle cx="50" cy="50" r="40" />
</a>
```

You may encounter {{svgattr("xlink:href")}} used for the destination in older code. That attribute is deprecated: use plain `href` instead.

The SVG `<a>` element also takes the {{svgattr("download")}}, `hreflang`, `ping`, `referrerpolicy`, `rel`, and `type` attributes, matching the HTML `<a>` element. Support for them lags behind the HTML versions and differs from one attribute to the next, so check the [browser compatibility table](/en-US/docs/Web/SVG/Reference/Element/a#browser_compatibility) for `<a>` before relying on any of them.

Unlike HTML, SVG gives links no default appearance: a linked shape or text string looks exactly like an unlinked one. Style the link states yourself with CSS so the link is discoverable and its focus state is visible.

### Linked shape and text

This example links a circle and a text label, and uses CSS to give both a hover and focus state.

```html
<svg
  viewBox="0 0 220 100"
  width="220"
  height="100"
  xmlns="http://www.w3.org/2000/svg">
  <a href="https://example.com/">
    <circle cx="50" cy="50" r="40" />
  </a>

  <a href="https://example.com/">
    <text x="110" y="56">Text link</text>
  </a>
</svg>
```

```css
a circle,
a text {
  fill: steelblue;
}

a text {
  text-decoration: underline;
}

a:hover circle,
a:focus-visible circle,
a:hover text,
a:focus-visible text {
  fill: crimson;
}

a:focus-visible {
  outline: 2px solid black;
  outline-offset: 2px;
}
```

{{EmbedLiveSample("Linked_shape_and_text", "100%", 130)}}

Both links change color on hover and on keyboard focus. The {{cssxref("outline")}} gives focus a second, non-color indicator, and the {{cssxref("fill")}} change keeps the focus state visible even where `outline` is not rendered on SVG elements.

A shape carries no text for assistive technology to announce, so give shape-only links an accessible name with a {{svgelement("title")}} element inside the `<a>`:

```html
<a href="https://example.com/">
  <title>The circle element</title>
  <circle cx="50" cy="50" r="40" />
</a>
```

### Choosing where the link opens

The {{svgattr("target")}} attribute names the browsing context the linked document should open in: `_self` (the default), `_blank`, `_parent`, or `_top`.

This matters most when the SVG is embedded in an HTML page with {{htmlelement("object")}}, {{htmlelement("iframe")}}, or {{htmlelement("embed")}}. Such an SVG is a separate document in its own browsing context, so by default the linked page loads _inside_ that embedded frame — which is often only a few pixels wide. Add `target="_top"` to replace the whole page instead.

In `page1.html`:

```html
<p>This is an SVG button:</p>
<object width="100" height="50" type="image/svg+xml" data="button.svg"></object>
```

In `button.svg`:

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50">
  <a href="page2.html" target="_top">
    <title>Go to page 2</title>
    <rect width="100" height="50" fill="steelblue" />
    <text x="50" y="30" fill="white" text-anchor="middle">Page 2</text>
  </a>
</svg>
```

Use `target="_parent"` to replace only the immediately containing document, which differs from `_top` when the SVG is nested more than one frame deep.

> [!NOTE]
> Links are only active while the SVG is being displayed as a document — inline in HTML, or embedded with `<object>`, `<iframe>`, or `<embed>`. When an SVG is used as an image, with {{htmlelement("img")}}, the SVG {{svgelement("image")}} element, or a CSS property such as {{cssxref("background-image")}}, it is rendered in a secure, non-interactive mode: links can't be activated and scripts don't run. See [SVG as an image](/en-US/docs/Web/SVG/Guides/SVG_as_an_image).

## Linking into an SVG document

Appending a fragment identifier to an SVG URL lets a link, or an embedding element, select which part of the graphic is shown. This is how you crop or zoom into an SVG without editing the file or shipping several copies of it.

### Named views with `<view>`

The {{svgelement("view")}} element defines a named view: a {{svgattr("viewBox")}}, and optionally a {{svgattr("preserveAspectRatio")}}, that override the ones on the root {{svgelement("svg")}} element when the view's {{svgattr("id")}} is used as the URL fragment.

In `shapes.svg`:

```html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <view id="first" viewBox="0 0 100 100" />
  <circle cx="50" cy="50" r="40" fill="red" />

  <view id="second" viewBox="100 0 100 100" />
  <circle cx="150" cy="50" r="40" fill="green" />

  <view id="third" viewBox="200 0 100 100" />
  <circle cx="250" cy="50" r="40" fill="blue" />
</svg>
```

Referencing `shapes.svg#third` now shows only the blue circle:

```html
<img src="shapes.svg" width="300" height="100" alt="Three circles" />
<img src="shapes.svg#third" width="100" height="100" alt="A blue circle" />
```

The same fragment works anywhere the file's URL appears, including an `<a href>` pointing at the SVG file, an `<iframe>`, and CSS {{cssxref("url_function", "url()")}} references.

### Views defined in the URL with `svgView()`

If you can't edit the SVG file to add a `<view>` element, you can spell the view out in the fragment itself with the `svgView()` syntax, passing `viewBox()` and, optionally, `preserveAspectRatio()`:

```plain
shapes.svg#svgView(viewBox(200,0,100,100))
shapes.svg#svgView(viewBox(200,0,100,100);preserveAspectRatio(xMidYMid))
```

Prefer a named `<view>` when you control the file: it keeps the view definition with the graphic, and it can be changed without updating every URL that points at it.

## Referencing content within a document

The third kind of link is internal: SVG elements point at other elements by ID, in the same document or in an external one.

- {{svgelement("use")}} draws another element again somewhere else: `<use href="#icon" />`. The reference can be external too, which is the basis of the SVG sprite pattern: `<use href="icons.svg#search" />`.
- Gradients, patterns, filters, masks, and clip paths are referenced with a `url()` value, either from a presentation attribute or from CSS: `fill="url(#gradient)"`, `filter="url(#blur)"`, `clip-path: url(#clip-shape)`.
- {{svgelement("textPath")}} lays text along a path referenced with `href`, and {{svgelement("mpath")}} takes its motion path the same way.

A few restrictions apply to references that leave the document:

- External references must be [same-origin](/en-US/docs/Web/Security/Defenses/Same-origin_policy) with the referencing document. There is no way to opt into a cross-origin reference.
- `<use>` with an external file is widely supported, but `<use>` pointing at a `data:` URL is not: browsers that once allowed it have since dropped it. See the [browser compatibility table](/en-US/docs/Web/SVG/Reference/Element/use#browser_compatibility) for `<use>`.
- Naming the external file without a fragment, to pull in its root element, is not supported everywhere. Always include a fragment identifier naming the element you want.
- Referencing an external SVG from the CSS {{cssxref("filter")}}, {{cssxref("mask")}}, and {{cssxref("clip-path")}} properties is supported less widely than the SVG attributes are. Check the compatibility table for the feature you plan to use.

## See also

- SVG {{svgelement("a")}}, {{svgelement("use")}}, and {{svgelement("view")}} elements
- SVG {{svgattr("href")}} and {{svgattr("target")}} attributes
- HTML {{htmlelement("a")}} element
- [SVG as an image](/en-US/docs/Web/SVG/Guides/SVG_as_an_image)
- [SVG and CSS](/en-US/docs/Web/SVG/Tutorials/SVG_from_scratch/SVG_and_CSS)
