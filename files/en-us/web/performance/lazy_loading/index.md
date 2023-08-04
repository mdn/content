---
title: Lazy loading
slug: Web/Performance/Lazy_loading
page-type: guide
spec-urls: https://html.spec.whatwg.org/multipage/#lazy-loading-attributes
---

{{QuickLinksWithSubPages("Web/Performance")}}

**Lazy loading** is a strategy to identify resources as non-blocking (non-critical) and load these only when needed. It's a way to shorten the length of the [critical rendering path](/en-US/docs/Web/Performance/Critical_rendering_path), which translates into reduced page load times.

Lazy loading can occur on different moments in the application, but it typically happens on some user interactions such as scrolling and navigation.

## Overview

As the web has evolved, we have come to see huge increases in the number and size of assets sent to users.
Between 2011 and 2019, the median resource weight increased from **\~100KB** to **\~400KB** for desktop and **\~50KB** to **\~350KB** for mobile. While Image size has increased from **\~250KB** to **\~900KB** on desktop and **\~100KB** to **\~850KB** on mobile.

One of the methods we can use to tackle this problem is to shorten the [Critical Rendering Path](/en-US/docs/Web/Performance/Critical_rendering_path) length by lazy loading resources that are not critical for the first render to happen.
A practical example would be when you land on the home page of an e-commerce site with a link to a cart page/section, and none of the cart page's resources (such as JavaScript, CSS, and images) are downloaded **until** you navigate there.

## Strategies

Lazy loading can be applied to multiple resources and through multiple strategies.

### General

#### Code splitting

JavaScript, CSS and HTML can be split into smaller chunks. This enables sending the minimal code required to provide value upfront, improving page-load times. The rest can be loaded on demand.

- Entry point splitting: separates code by entry point(s) in the app
- Dynamic splitting: separates code where [dynamic import()](/en-US/docs/Web/JavaScript/Reference/Statements/import) statements are used

### JavaScript

#### Script type module

Any script tag with `type="module"` is treated as a [JavaScript module](/en-US/docs/Web/JavaScript/Guide/Modules) and is deferred by default.

### CSS

By default, CSS is treated as a [render blocking](/en-US/docs/Web/Performance/Critical_rendering_path) resource, so the browser won't render any processed content until the [CSSOM](/en-US/docs/Web/API/CSS_Object_Model) is constructed. CSS must be thin, delivered as quickly as possible, and the usage media types and queries are advised to unblock rendering.

```html
<link href="style.css" rel="stylesheet" media="all" />
<link href="portrait.css" rel="stylesheet" media="(orientation:portrait)" />
<link href="print.css" rel="stylesheet" media="print" />
```

It is possible to perform some [CSS optimizations](/en-US/docs/Learn/Performance/CSS) to achieve that.

### Fonts

By default, font requests are delayed until the render tree is constructed, which can result in delayed text rendering.

It is possible to override the default behavior and preload web font resources using `<link rel="preload">`, the [CSS font-display property](/en-US/docs/Web/CSS/@font-face/font-display), and the [Font Loading API](/en-US/docs/Web/API/CSS_Font_Loading_API).

See also: [Element Link](/en-US/docs/Web/HTML/Element/link).

### Images and iframes

Very often, webpages contain many images that contribute to data-usage and how fast a page can load. Most of those images are off-screen ([non-critical](/en-US/docs/Web/Performance/Critical_rendering_path)), requiring a user interaction, like scrolling, in order to view them.

#### Loading attribute

The [`loading`](/en-US/docs/Web/HTML/Element/img#loading) attribute on an {{HTMLElement("img")}} element (or the [`loading`](/en-US/docs/Web/HTML/Element/iframe#loading) attribute on an {{HTMLElement("iframe")}}) can be used to instruct the browser to defer loading of images/iframes that are off-screen until the user scrolls near them.

```html
<img src="image.jpg" alt="..." loading="lazy" />
<iframe src="video-player.html" title="..." loading="lazy"></iframe>
```

The `load` event fires when the eagerly-loaded content has all been loaded; at that time, it's entirely possible (or even likely) that there may be lazily-loaded images that are within the {{Glossary("visual viewport")}} that haven't yet loaded.

You can determine if a given image has finished loading by examining the value of its Boolean {{domxref("HTMLImageElement.complete", "complete")}} property.

#### Polyfill

Include this polyfill to provide support for older and currently incompatible browsers:
[loading-attribute-polyfill](https://github.com/mfranzke/loading-attribute-polyfill).

#### Intersection Observer API

[Intersection Observers](/en-US/docs/Web/API/IntersectionObserver) allow the user to know when an observed element enters or exits the browser's viewport.

#### Event handlers

When browser compatibility is crucial, there are a few options:

- [polyfill intersection observer](https://github.com/w3c/IntersectionObserver)
- fallback to scroll, resize or orientation change event handlers to determine if a specific element is in viewport

## Specifications

{{Specifications}}

## See also

- [Render blocking CSS](https://web.dev/critical-rendering-path-render-blocking-css/)
- [Optimizing loading and rendering](https://web.dev/fast/#optimize-webfonts)
- [Lazy loading images and video](https://web.dev/fast/#lazy-load-images-and-video)
