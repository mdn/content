---
title: Fetch priority
slug: Web/Performance/Guides/Fetch_priority
page-type: guide
sidebar: performancesidebar
---

When a page loads, the browser has to decide which of its resources to download first. It gives each request a **fetch priority**, based on things like the type of resource and where it appears in the page, and requests with a higher priority generally go first. The defaults work well for most pages, but the browser can't always tell which resources matter most to the user, such as which image is the main image on the page.

This guide explains how browsers assign fetch priorities and how you can adjust them with the [`fetchpriority`](/en-US/docs/Web/HTML/Reference/Attributes/fetchpriority) HTML attribute and the `priority` option of {{domxref("Window/fetch", "fetch()")}}. It then covers [`rel="preload"`](/en-US/docs/Web/HTML/Reference/Attributes/rel/preload), which lets the browser find a resource sooner, and how to use it together with `fetchpriority`.

The guide assumes you know the basics of how a browser loads and renders a page. If you don't, read [Populating the page: how browsers work](/en-US/docs/Web/Performance/Guides/How_browsers_work) first.

## Prioritizing resource fetches

### How browsers assign priorities

The [Fetch Standard](https://fetch.spec.whatwg.org/#request-internal-priority) leaves prioritization to each browser, which can weigh any priority set by the page, what started the request, the type of resource, and whether it blocks rendering. Browsers generally fetch render-blocking stylesheets in the {{htmlelement("head")}} before images, and scripts with `async` or `defer` after scripts that block the parser. Chrome documents its rules in [Optimize resource loading with the Fetch Priority API](https://web.dev/articles/fetch-priority#resource-priority) on web.dev, and Firefox in [Firefox Network Scheduling and Prioritization](https://firefox-source-docs.mozilla.org/networking/http/prioritization.html).

Chrome has five priority levels, which its developer tools show as Highest, High, Medium, Low, and Lowest. Requests at the same level are generally fetched in the order Chrome finds them. Some of Chrome's defaults are:

| Request                                    | Default priority in Chrome                                                                             |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| Render-blocking stylesheet in the `<head>` | Highest                                                                                                |
| Script with `async` or `defer`             | Low                                                                                                    |
| Image                                      | Low, or Medium for the first five large images. Raised to High once layout shows it's in the viewport. |
| `fetch()` request                          | High                                                                                                   |

### Using the `fetchpriority` attribute

The [`fetchpriority`](/en-US/docs/Web/HTML/Reference/Attributes/fetchpriority) attribute can be set on {{htmlelement("img")}}, {{htmlelement("link")}}, and {{htmlelement("script")}} elements, or from JavaScript through properties such as {{domxref("HTMLImageElement.fetchPriority")}}. Its values are `high`, `low`, and `auto`, which is the default. It's a hint that asks the browser to raise or lower a resource's priority relative to other resources of the same type, and browsers can ignore it when it conflicts with their own rules.

How far the priority moves depends on the resource. In Chrome, a stylesheet in the `<head>` with `fetchpriority="low"` drops from Highest to High, and an image with `fetchpriority="high"` starts at High instead of Low or Medium.

On a product page with a photo gallery, the first photo is often the page's {{glossary("Largest Contentful Paint")}} (LCP) element, and the other photos are hidden when the page loads. Chrome raises the first photo to High only after layout, which can be late in the load, and it may raise the hidden photos too because they're close to the viewport, even if they have `loading="lazy"`. Giving the first photo `fetchpriority="high"` lets it start at High as soon as the browser finds it, and giving the others `fetchpriority="low"` keeps them at a lower priority than the first photo:

```html
<div class="gallery">
  <img
    src="/images/boot-side.webp"
    alt="Hiking boot, side view"
    fetchpriority="high" />
  <img
    src="/images/boot-sole.webp"
    alt="Sole of the hiking boot"
    fetchpriority="low" />
  <img
    src="/images/boot-laces.webp"
    alt="Laces of the hiking boot"
    fetchpriority="low" />
</div>
```

Don't add `loading="lazy"` to the first photo, because lazy loading holds back the request until the browser knows the image is near the viewport. For images further down the page, use [lazy loading](/en-US/docs/Web/Performance/Guides/Lazy_loading) instead of `fetchpriority="low"`, so that they're only requested when the user scrolls close to them.

Scripts with [`async`](/en-US/docs/Web/HTML/Reference/Elements/script#async) or [`defer`](/en-US/docs/Web/HTML/Reference/Elements/script#defer) don't block the HTML parser, and browsers give them a lower priority than scripts that do. When one of these scripts matters to the page, such as the one that runs the site navigation, you can raise its priority and still load it asynchronously:

```html
<script src="/js/site-nav.js" async fetchpriority="high"></script>
<script src="/js/analytics.js" async></script>
```

Use `high` sparingly. Raising one request makes the others wait a little longer, and the web.dev guide to [optimizing LCP](https://web.dev/articles/optimize-lcp) notes that setting a high priority on more than one or two images makes it unhelpful for LCP. Priority makes the most difference when many requests compete for limited bandwidth, such as on a slow connection.

### Setting the priority of `fetch()` requests

Requests made from JavaScript have a priority too. To set it, pass the [`priority`](/en-US/docs/Web/API/RequestInit#priority) option to {{domxref("Window/fetch", "fetch()")}} or to the {{domxref("Request.Request", "Request()")}} constructor.

In this example, a product page requests its details and its reviews at the same time. The details get `high`, and the reviews, which appear further down the page, get `low`. Chrome already starts `fetch()` requests at High, so in Chrome it's the `low` on the reviews that changes the order.

```js
fetch(`/api/products/${id}`, { priority: "high" })
  .then((response) => response.json())
  .then(renderProduct);

fetch(`/api/products/${id}/reviews`, { priority: "low" })
  .then((response) => response.json())
  .then(renderReviews);
```

## Preloading resource fetches

A priority only takes effect once the browser knows about a resource. The browser's [preload scanner](/en-US/docs/Web/Performance/Guides/How_browsers_work#preload_scanner) reads ahead through the HTML and starts fetching the resources it finds there, but it doesn't look inside stylesheets or scripts. A resource referenced from one of those files isn't found until that file has downloaded and been processed. For these resources, first make them discoverable sooner, by changing the markup or by preloading them, and then adjust their priority if needed.

[`rel="preload"`](/en-US/docs/Web/HTML/Reference/Attributes/rel/preload) on a {{htmlelement("link")}} element tells the browser about a resource so it can start the request before it would otherwise find it. The [`as`](/en-US/docs/Web/HTML/Reference/Elements/link#as) attribute says what kind of resource it is, and the browser picks a priority from that, so a preloaded image in Chrome still starts at Low or Medium. You can add `fetchpriority` to the `<link>` element to change it. The server can also send a preload in a {{HTTPHeader("Link", "", "#controlling_fetch_priority")}} header, which accepts a `fetchpriority` parameter. If the header is sent in a {{HTTPStatus("103", "103 Early Hints")}} response, the browser can start the request while the server is still preparing the page.

### Stylesheets loaded with `@import`

The preload scanner can't see a stylesheet loaded with an {{cssxref("@import")}} rule, so the browser requests it only after the stylesheet that contains the rule has downloaded, and the two {{glossary("Render blocking", "render-blocking")}} files download one after the other:

```css example-bad
/* main.css */
@import url("typography.css");
```

Where you can, link each stylesheet from the HTML instead, so that both download in parallel:

```html example-good
<link rel="stylesheet" href="/css/typography.css" />
<link rel="stylesheet" href="/css/main.css" />
```

If you need `@import`, for example to put a third-party stylesheet in a [cascade layer](/en-US/docs/Web/CSS/Reference/At-rules/@import#importing_css_rules_into_a_cascade_layer), keep the rule and preload the imported file:

```html
<link rel="preload" href="/css/typography.css" as="style" />
<link rel="stylesheet" href="/css/main.css" />
```

### Background images in CSS

An image set with the {{cssxref("background-image")}} property isn't found until the browser has downloaded and processed the stylesheet. For the main image of the page, use an {{htmlelement("img")}} element where you can, because the preload scanner can find it and it can have alternative text. If the image has to stay a CSS background, preload it with `fetchpriority="high"`:

```html
<link rel="stylesheet" href="/css/product.css" />
<link
  rel="preload"
  href="/images/boot-banner.webp"
  as="image"
  fetchpriority="high" />
```

```css
/* product.css */
.banner {
  background-image: url("/images/boot-banner.webp");
}
```

### Fonts

The browser requests a font only once it knows that some text on the page uses it, which is usually after the stylesheet with the {{cssxref("@font-face")}} rule has downloaded. If a font is used in the first render, preload it. Font preloads need the `crossorigin` attribute, even when the font is on the same origin as the page:

```html
<link
  rel="preload"
  href="/fonts/source-serif-regular.woff2"
  as="font"
  type="font/woff2"
  crossorigin />
```

## Checking request priority

[Chrome DevTools](https://developer.chrome.com/docs/devtools/network/reference#columns) and [Safari's Web Inspector](https://webkit.org/web-inspector/network-tab/) can show each request's priority in an optional column of their network panels. Chrome's column shows the priority a request ended with, so an image raised after layout shows as High, and the [big request rows](https://developer.chrome.com/docs/devtools/network/reference#request-rows) setting adds the priority it started with. To find out whether a change made the page faster, compare LCP before and after it, for example with the {{domxref("LargestContentfulPaint")}} API.

## See also

- [`fetchpriority`](/en-US/docs/Web/HTML/Reference/Attributes/fetchpriority) HTML attribute
- [`rel="preload"`](/en-US/docs/Web/HTML/Reference/Attributes/rel/preload)
- {{domxref("RequestInit", "RequestInit.priority", "#priority")}}
- [Speculative loading](/en-US/docs/Web/Performance/Guides/Speculative_loading)
- [Lazy loading](/en-US/docs/Web/Performance/Guides/Lazy_loading)
- [Optimize resource loading with the Fetch Priority API](https://web.dev/articles/fetch-priority) on web.dev (2023)
