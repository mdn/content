---
title: Largest Contentful Paint API
slug: Web/API/Largest_Contentful_Paint_API
page-type: web-api-overview
tags:
  - API
  - LargestContentfulPaint
  - Overview
  - Reference
  - Experimental
browser-compat: api.LargestContentfulPaint
---
{{DefaultAPISidebar("Largest Contentful Paint API")}}{{SeeCompatTable}}

The **Largest Contentful Paint (LCP) API** enables monitoring the largest paint element triggered on screen.

## Concepts and Usage

The Largest Contentful Paint metric provides the render time of the largest image or text block visible within the viewport, recorded from when the page first begins to load. The API supports the following elements:

- {{HTMLElement("img")}} elements.
- [`<image>`](/en-US/docs/Web/SVG/Element/image) elements inside an SVG.
- The poster images of {{HTMLElement("video")}} elements.
- Elements with a {{cssxref("background-image")}}.
- Groups of text nodes, such as {{HTMLElement("p")}}.

## Interfaces

- {{domxref("LargestContentfulPaint")}}
  - : Reports details about the largest image or text paint before user input on a web page.

## Examples

The following example shows an image and a large paragraph of text. An observer is registered to get the largest contentful paint while the page is loading.

```html
<img src="large_image.jpg">
<p id='large-paragraph'>This is large body of text.</p>
```

```js
const observer = new PerformanceObserver((list) => {
  let perfEntries = list.getEntries();
  let lastEntry = perfEntries[perfEntries.length - 1];
  // Process the latest candidate for largest contentful paint
});
observer.observe({entryTypes: ['largest-contentful-paint']});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Largest Contentful Paint (LCP)](https://web.dev/lcp/)
- [LCP in Lighthouse](https://web.dev/lighthouse-largest-contentful-paint/)
