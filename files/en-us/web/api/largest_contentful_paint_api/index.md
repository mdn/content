---
title: Largest Contentful Paint API
slug: Web/API/Largest_Contentful_Paint_API
page-type: web-api-overview
tags:
  - API
  - Largest Contentful Paint API
  - LargestContentfulPaint
  - Landing
  - Overview
  - Reference
  - Experimental
browser-compat: api.LargestContentfulPaint
---

{{DefaultAPISidebar("Performance API")}}{{SeeCompatTable}}

The **Largest Contentful Paint API** provides [perceived performance](/en-US/docs/Learn/Performance/Perceived_performance) data that allows you to know exactly how long a user waits, after navigating to your page, before seeing the main content of the page in their browser viewport — in contrast to just knowing when the user can first see a loading indicator or background image or other such initial/early-loading content (which is what the related [Paint Timing API](/en-US/docs/Web/API/Paint_Timing_API) provides).

## Concepts and Usage

The key principle underlying the Largest Contentful Paint API is that by having data to help you minimize the time that users have to wait before they can see the site's main content, you can make the site feel more engaging and responsive (better performing) for your users.

See the [perceived performance](/en-US/docs/Learn/Performance/Perceived_performance) article for an introduction to the core concepts underlying both the Largest Contentful Paint API and the [Paint Timing API](/en-US/docs/Web/API/Paint_Timing_API).

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
<img src="large_image.jpg" />
<p id="large-paragraph">This is large body of text.</p>
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

- [Perceived performance](/en-US/docs/Learn/Performance/Perceived_performance)
- [Largest Contentful Paint](https://web.dev/lcp/) at web.dev
- [Optimize Largest Contentful Paint](https://web.dev/optimize-lcp/) at web.dev
- [User-centric performance metrics](https://web.dev/user-centric-performance-metrics/#types-of-metrics) at web.dev
- [Largest Contentful Paint in Lighthouse](https://web.dev/lighthouse-largest-contentful-paint/)
