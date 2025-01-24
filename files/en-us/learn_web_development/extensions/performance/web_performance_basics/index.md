---
title: Web performance resources
slug: Learn_web_development/Extensions/Performance/Web_Performance_Basics
page-type: learn-module-chapter
---

{{LearnSidebar}}{{PreviousMenu("Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}

There are many [reasons](https://web.dev/learn/performance/why-speed-matters) why your website should perform as well as possible.
Below is a quick review of best practices, tools, APIs with links to provide more information about each topic.

## Best practices

- Start with learning the [critical rendering path](/en-US/docs/Web/Performance/Critical_rendering_path) of the browser. Knowing this will help you understand how to improve the performance of the site.
- Using _resource hints_ such as [`rel=preconnect`](/en-US/docs/Web/HTML/Attributes/rel/preconnect), [`rel=dns-prefetch`](/en-US/docs/Web/HTML/Attributes/rel/dns-prefetch), [`rel=prefetch`](/en-US/docs/Web/HTML/Attributes/rel/prefetch), [`rel=preload`](/en-US/docs/Web/HTML/Attributes/rel/preload).
- Keep the size of JavaScript to a [minimum](https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4). Only use as much JavaScript as needed for the current page.
- [CSS](/en-US/docs/Learn_web_development/Extensions/Performance/CSS) performance factors
- Use {{Glossary("HTTP_2", "HTTP/2")}} on your server (or CDN).
- Use a CDN for resources which can reduce load times significantly.
- Compress your resources using [gzip](https://www.gnu.org/software/gzip/), [Brotli](https://github.com/google/brotli), and [Zopfli](https://github.com/google/zopfli).
- Image optimization (use CSS animation, or SVG if possible).
- Lazy loading parts of your application outside the viewport. If you do, have a backup plan for SEO (e.g., render full page for bot traffic); for example, by using the [`loading`](/en-US/docs/Web/HTML/Element/img#loading) attribute on the {{HTMLElement("img")}} element
- It is also crucial to realize what is really important to your users. It might not be absolute timing, but [user perception](/en-US/docs/Learn_web_development/Extensions/Performance/Perceived_performance).

## Quick Wins

### CSS

Web performance is all about user experience and perceived performance. As we learned in the [critical rendering path](/en-US/docs/Web/Performance/Critical_rendering_path) document, linking CSS with a traditional link tag with rel="stylesheet" is synchronous and blocks rendering. Optimize the rendering of your page by removing blocking CSS.

To load CSS asynchronously one can set the media type to print and then change to all once loaded. The following snippet includes an onload attribute, requiring JavaScript, so it is important to include a noscript tag with a traditional fallback.

```html
<link
  rel="stylesheet"
  href="/path/to/my.css"
  media="print"
  onload="this.media='all'" />
<noscript><link rel="stylesheet" href="/path/to/my.css" /></noscript>
```

The downside with this approach is the flash of unstyled text (FOUT.) The simplest way to address this is by inlining CSS that is required for any content that is rendered above the fold, or what you see in the browser viewport before scrolling. These styles will improve perceived performance as the CSS does not require a file request.

```html
<style>
  /* Insert your CSS here */
</style>
```

### JavaScript

Avoid JavaScript blocking by using the [async](/en-US/docs/Web/HTML/Element/script) or [defer](/en-US/docs/Web/HTML/Element/script) attributes, or link JavaScript assets after the page's DOM elements. JavaScript only block rendering for elements that appear after the script tag in the DOM tree.

### Web Fonts

EOT and TTF formats are not compressed by default. Apply compression such as GZIP or Brotli for these file types. Use WOFF and WOFF2. These formats have compression built in.

Within @font-face use font-display: swap. By using font display swap the browser will not block rendering and will use the backup system fonts that are defined. Optimize [font weight](/en-US/docs/Web/CSS/font-weight) to match the web font as closely as possible.

#### Icon web fonts

If possible avoid icon web fonts and use compressed SVGs. To further optimize inline your SVG data within HTML markup to avoid HTTP requests.

## Tools

- Learn to use the [Firefox Dev Tools](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html) to profile your site.
- [PageSpeed Insights](https://pagespeed.web.dev/) can analyze your page and give some general hints to improve performance.
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) can give you a detailed breakdown of many aspects of your site including performance, SEO and accessibility.
- Test your page's speed using [WebPageTest.org](https://www.webpagetest.org/), where you can use different real device types and locations.
- Try the [Chrome User Experience Report](https://developer.chrome.com/docs/crux/) which quantifies real user metrics.
- Define a [performance budget](/en-US/docs/Web/Performance/Performance_budgets).

### APIs

- Gather user metrics using the [boomerang](https://github.com/akamai/boomerang) library.
- Or directly gather with [window.performance.timing](/en-US/docs/Web/API/Performance/timing)

### Things not to do (bad practices)

- Download everything
- Use uncompressed media files

## See also

- <https://github.com/filamentgroup/loadCSS>
