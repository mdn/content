---
title: Fetch priority
slug: Web/Performance/Guides/Fetch_priority
page-type: guide
sidebar: performancesidebar
---

**Fetch priority** influences the order in which a browser downloads resources. Adjusting it helps the resources needed for the first render arrive sooner, improving the user experience.

This guide explains how browsers decide what to fetch first, and how you can change that. The main tools are the [`fetchpriority`](/en-US/docs/Web/HTML/Reference/Attributes/fetchpriority) attribute and the `priority` option of {{domxref("Window/fetch", "fetch()")}}, which this guide calls priority hints. The first part covers these hints, including how to use them with scripts. The second part explains how to make resources discoverable sooner with [`rel="preload"`](/en-US/docs/Web/HTML/Reference/Attributes/rel/preload), and when to combine it with a priority hint.

The guide assumes you know the basics of how a browser loads and renders a page. If you don't, read [Populating the page: how browsers work](/en-US/docs/Web/Performance/Guides/How_browsers_work) first.

## Prioritizing resource fetches

### How browsers prioritize requests

A typical page needs stylesheets, scripts, fonts, images, and data, and the browser can't fetch all of them at full speed at once. So it gives every request an internal priority, and uses it to decide which requests go first.

The specifications leave the details to each browser. The [Fetch Standard](https://fetch.spec.whatwg.org/#request-internal-priority) lets a browser weigh a request's priority hint, what started the request, the type of resource, and whether it blocks rendering, in whatever way the browser chooses.

Chrome and Firefox both publish tables of their choices, Chrome in [Optimize resource loading with the Fetch Priority API](https://web.dev/articles/fetch-priority#resource-priority) on web.dev and Firefox in [Firefox Network Scheduling and Prioritization](https://firefox-source-docs.mozilla.org/networking/http/prioritization.html). The two agree on the broad strokes. Render-blocking stylesheets in the {{htmlelement("head")}} go ahead of images, and scripts with `async` or `defer` go behind scripts that block the parser. Images start low and get raised once the browser knows they're about to be shown.

Chrome, for example, has five levels, which its developer tools show as Highest, High, Medium, Low, and Lowest. Its defaults include these:

- Render-blocking stylesheets discovered early, such as those in the `<head>`, get Highest.
- Scripts with the `async` or `defer` attribute get Low.
- Images start at Low, or Medium for the first five large images. Once layout shows that an image is inside the viewport, it's raised to High.
- Requests at the same priority are fetched in the order the browser discovers them.

Chrome has changed these rules over time, so treat them as an example rather than values to build a page around.

### Using the `fetchpriority` attribute

The [`fetchpriority`](/en-US/docs/Web/HTML/Reference/Attributes/fetchpriority) attribute asks the browser to raise or lower a resource's download priority relative to other resources of the same type. You can use it on {{htmlelement("img")}}, {{htmlelement("link")}}, and {{htmlelement("script")}} elements, but not on {{htmlelement("iframe")}}. It takes `high`, `low`, or `auto`, which is the default. Some SVG elements have a non-standard, experimental {{svgattr("fetchpriority")}} attribute too.

The value is relative, not absolute. In Chrome, `fetchpriority` raises or lowers a resource's default priority by an amount that depends on the resource, rather than setting it to a fixed level. A stylesheet in the `<head>` with `fetchpriority="low"` only drops from Highest to High, while an image with `fetchpriority="high"` goes straight to High, from Low or, for one of the first five large images, from Medium.

It's also a hint, and the browser can ignore it when it conflicts with the browser's own rules. Firefox, for example, gives a stylesheet in the `<body>` the same priority with `fetchpriority="low"` as without it.

From JavaScript, you can read or set the value with the {{domxref("HTMLImageElement.fetchPriority")}}, {{domxref("HTMLLinkElement.fetchPriority")}}, and {{domxref("HTMLScriptElement.fetchPriority")}} properties. Set it before the element starts fetching so the hint is available when the browser assigns the initial priority.

#### Boosting the main image

On many pages, the {{glossary("Largest Contentful Paint")}} (LCP) element is a large image near the top, such as a hero banner or a product photo. Chrome only raises in-viewport images to High after layout, which can be late in the load. Adding `fetchpriority="high"` lets the image start at a high priority as soon as the browser finds it.

```html
<header class="hero">
  <img
    src="/images/mountain-trail.webp"
    alt="A hiking trail winding up a mountain ridge at sunrise"
    width="1600"
    height="900"
    fetchpriority="high" />
  <h1>Plan your next trail</h1>
</header>
```

Because the image is in the HTML, the browser can find it early, and the attribute keeps that request from waiting behind less important ones. Keep `high` for the one image that matters most (see [When not to use priority hints](#when_not_to_use_priority_hints)).

Don't add `loading="lazy"` to this image. Lazy loading can delay the request until the image is near the viewport, regardless of its priority hint.

#### Lowering images the user can't see yet

A carousel has the opposite problem. Only the first slide is visible when the page loads, but every slide image is in the HTML. Chrome may treat the hidden slides as close enough to the viewport to raise them to High, even with `loading="lazy"`, as the [Fetch Priority article on web.dev](https://web.dev/articles/fetch-priority#use-cases) notes. Here the first slide is the main image, so it gets `fetchpriority="high"`. The others get `fetchpriority="low"`, so they still download but don't compete with it.

```html
<div class="carousel">
  <img
    src="/images/slide-lake.webp"
    alt="A calm lake surrounded by pine trees"
    fetchpriority="high" />
  <img
    src="/images/slide-canyon.webp"
    alt="Red rock walls of a narrow canyon"
    fetchpriority="low" />
  <img
    src="/images/slide-coast.webp"
    alt="Waves breaking on a rocky coastline"
    fetchpriority="low" />
  <img
    src="/images/slide-forest.webp"
    alt="Sunlight through a dense forest canopy"
    fetchpriority="low" />
</div>
```

For images further down the page, which the user might never scroll to, [lazy loading](/en-US/docs/Web/Performance/Guides/Lazy_loading) is the better fit. The [`loading="lazy"`](/en-US/docs/Web/HTML/Reference/Elements/img#loading) attribute delays the request until the image is close to the viewport, while `fetchpriority="low"` only changes its place in the queue.

#### Prioritizing scripts

A classic {{htmlelement("script")}} element with a `src` and no `async` or `defer` attribute blocks the HTML parser. The browser stops building the page until the script has downloaded and run. Scripts that aren't needed for the first render should use [`defer`](/en-US/docs/Web/HTML/Reference/Elements/script#defer), or [`async`](/en-US/docs/Web/HTML/Reference/Elements/script#async) if they don't depend on running in order. [JavaScript modules](/en-US/docs/Web/JavaScript/Guide/Modules) are deferred by default.

Both attributes let parsing continue while the script downloads, and Chrome and Firefox both give these scripts a lower priority than ones that do block it. That suits most scripts. When an async script matters to the page, such as the one that runs the site navigation, add `fetchpriority="high"`:

```html
<script src="/js/site-nav.js" async fetchpriority="high"></script>
<script src="/js/analytics.js" async></script>
```

The navigation script now gets a higher priority than the analytics script, which keeps the default.

Sometimes you have the opposite case, a parser-blocking script near the end of the `<body>` that isn't urgent but can't easily be made async. Lowering its priority lets the resources above it go first. It still blocks the parser once the parser reaches it.

```html
<body>
  <!-- Page content -->
  <script src="/js/legacy-widget.js" fetchpriority="low"></script>
</body>
```

`fetchpriority` on a `<script>` only affects the request for that script file. It doesn't change the priority of any modules the script imports. To start fetching imported modules earlier, see [`rel="modulepreload"`](/en-US/docs/Web/HTML/Reference/Attributes/rel/modulepreload).

### Setting the priority of `fetch()` requests

Requests you make from JavaScript have a priority too. To set it, pass the `priority` option to {{domxref("Window/fetch", "fetch()")}} or to the {{domxref("Request.Request", "Request()")}} constructor. It takes the same `high`, `low`, and `auto` values. See [`RequestInit`](/en-US/docs/Web/API/RequestInit#priority) for the details.

There's no `priority` property on {{domxref("Request")}} objects, so you can't read the value back once the request exists.

In this example, an article page needs two pieces of data. The article text is what the reader came for, and the comments sit below it.

```js
async function getJSON(responsePromise) {
  const response = await responsePromise;
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  return response.json();
}

async function loadArticlePage(id) {
  // Start both requests together
  const articlePromise = fetch(`/api/articles/${id}`, { priority: "high" });
  const commentsPromise = fetch(`/api/articles/${id}/comments`, {
    priority: "low",
  });

  await Promise.all([
    getJSON(articlePromise).then(renderArticle),
    getJSON(commentsPromise).then(renderComments),
  ]);
}
```

When the two requests compete for the network, the browser can favor the article over the comments. In Chrome, `fetch()` requests already start at High, so there the `low` on the comments does the work. Setting `high` on the article still matters in browsers where it raises the request, such as Firefox.

If the data is for a page the user might visit next, rather than the current one, see [Speculative loading](/en-US/docs/Web/Performance/Guides/Speculative_loading) instead. [`rel="prefetch"`](/en-US/docs/Web/HTML/Reference/Attributes/rel/prefetch) is a different tool. It asks the browser to fetch a resource that a future page will need, and Chrome gives it Lowest, below a `fetch()` with `priority: "low"`.

### When not to use priority hints

Every `high` you add pushes something else down. Priority only means something in comparison with other requests, so raising everything changes nothing, or slows down the wrong things. Use them sparingly. The web.dev guide to [optimizing LCP](https://web.dev/articles/optimize-lcp) warns that setting a high priority on more than one or two images makes it unhelpful in reducing LCP.

Don't use them to fix a discovery problem (see [Preloading resource fetches](#preloading_resource_fetches)).

Expect less from them when there isn't much competition. Priority hints matter most when many resources compete for limited bandwidth, such as over HTTP/1.1 or on a slow connection. On a fast connection with few resources, the default order may already be fine.

## Preloading resource fetches

The priority hints above change how requests compete for the network. If a resource is discovered late, first make it discoverable sooner through markup changes or preloading, then adjust its priority if needed.

### How browsers discover resources

While the main parser builds the DOM, a [preload scanner](/en-US/docs/Web/Performance/Guides/How_browsers_work#preload_scanner) reads ahead through the raw HTML and starts fetching the resources it finds there. It only reads markup, though. It doesn't look inside stylesheets or scripts, so resources referenced from those files stay invisible until the browser has downloaded and processed the file that refers to them.

### Using `rel="preload"`

[`rel="preload"`](/en-US/docs/Web/HTML/Reference/Attributes/rel/preload) on a {{htmlelement("link")}} element tells the browser about a resource ahead of time, usually from the `<head>`, so it can start the request before it would otherwise find it. The [`as`](/en-US/docs/Web/HTML/Reference/Elements/link#as) attribute says what kind of resource it is, and the browser picks a priority from that. A preload doesn't automatically get a high priority. In Chrome, a preloaded image starts at Low or Medium, even when it's your LCP image.

You can also preload a resource from the server with the {{HTTPHeader("Link", "", "#controlling_fetch_priority")}} header, which accepts a `fetchpriority` parameter:

```http
Link: </images/hero-banner.webp>; rel=preload; as=image; fetchpriority="high"
```

If the server sends this header in a {{HTTPStatus("103", "103 Early Hints")}} response, the browser can start the request while the server is still preparing the page. Not every browser acts on preloads in an early hints response (see the {{HTTPStatus("103")}} reference for compatibility).

The following examples show resources that the preload scanner cannot find directly, and when to use preload or change the markup instead.

#### Stylesheets loaded with `@import`

A stylesheet loaded with an {{cssxref("@import")}} rule can't be requested until the stylesheet that contains the rule has downloaded. The preload scanner can't see it, so the browser finds this {{glossary("Render blocking", "render-blocking")}} stylesheet late, and the two files download one after the other instead of at the same time.

```css example-bad
/* main.css */
@import url("typography.css");
```

In most cases you can reference each stylesheet with its own `<link>` element instead, so both are in the HTML and can download in parallel:

```html example-good
<link rel="stylesheet" href="/css/typography.css" />
<link rel="stylesheet" href="/css/main.css" />
```

If you do need `@import`, for example to put a third-party stylesheet in a [cascade layer](/en-US/docs/Web/CSS/Reference/At-rules/@import#importing_css_rules_into_a_cascade_layer), preload the imported file from the `<head>` so its request starts early:

```html
<link rel="preload" href="/css/typography.css" as="style" />
<link rel="stylesheet" href="/css/main.css" />
```

Keep the `@import` rule in `main.css`. The preload fetches `typography.css` early, while the `@import` still determines how its rules are applied.

#### Background images in CSS

Images set with the {{cssxref("background-image")}} property aren't discovered until the browser has downloaded and processed the stylesheet. For the main image of the page, prefer an {{htmlelement("img")}} element in the HTML when possible, so the preload scanner can find it directly. This also lets you supply alternative text when the image conveys information.

If the image needs to remain a CSS background, preload it and add `fetchpriority="high"`:

```html
<head>
  <link rel="stylesheet" href="/css/home.css" />
  <link
    rel="preload"
    href="/images/hero-banner.webp"
    as="image"
    type="image/webp"
    fetchpriority="high" />
</head>
```

```css
.hero {
  background-image: url("/images/hero-banner.webp");
}
```

Without the preload, the browser wouldn't know about the image until it had downloaded and processed `home.css`. With it, the request starts at a high priority as soon as the preload scanner reaches the `<link>`.

#### Fonts

Fonts are usually referenced from an {{cssxref("@font-face")}} rule in a stylesheet, and by default the browser doesn't request a font until it knows some text on the page uses it. That can delay text.

If the `@font-face` rule lives in an external stylesheet, the browser can't learn about the font until that file has downloaded. Putting the rule in a {{htmlelement("style")}} element in the `<head>` removes that wait:

```html
<head>
  <style>
    @font-face {
      font-family: "Source Serif";
      src: url("/fonts/source-serif-regular.woff2") format("woff2");
    }
  </style>
  <link rel="stylesheet" href="/css/main.css" />
</head>
```

The font is still only requested once the browser knows some text uses it. If the font is used for text in the first render, preload it as well. Font preloads need the `crossorigin` attribute, even when the font is on the same origin as the page:

```html
<link
  rel="preload"
  href="/fonts/source-serif-regular.woff2"
  as="font"
  type="font/woff2"
  crossorigin />
```

In Chrome, preloading a font helps because the browser finds it sooner, not because of its priority. It gives a preloaded font High, which `fetchpriority="high"` doesn't raise, while a font found through CSS gets Highest. Pair the preload with the {{cssxref("@font-face/font-display", "font-display")}} descriptor to control how text is shown while the font is still loading.

## Checking request priority

Chrome DevTools and Safari's Web Inspector can both show each request's priority as an optional column in their network panels (see the [Chrome DevTools network reference](https://developer.chrome.com/docs/devtools/network/reference#columns) and the [Web Inspector Network tab](https://webkit.org/web-inspector/network-tab/)). Chrome's column shows the priority a request ended with, so an image raised to High after layout shows as High, and its [big request rows](https://developer.chrome.com/docs/devtools/network/reference#request-rows) setting adds the priority it started with.

What you care about in the end is whether the page got faster. Compare LCP before and after the change, for example with the {{domxref("LargestContentfulPaint")}} API.

## See also

- [`fetchpriority`](/en-US/docs/Web/HTML/Reference/Attributes/fetchpriority) HTML attribute
- [`rel="preload"`](/en-US/docs/Web/HTML/Reference/Attributes/rel/preload)
- {{domxref("RequestInit", "RequestInit.priority", "#priority")}}
- [Lazy loading](/en-US/docs/Web/Performance/Guides/Lazy_loading)
- [Speculative loading](/en-US/docs/Web/Performance/Guides/Speculative_loading)
- [Critical rendering path](/en-US/docs/Web/Performance/Guides/Critical_rendering_path)
- [Controlling the priority (and ordering) of downloading images](/en-US/docs/Learn_web_development/Extensions/Performance/Multimedia#controlling_the_priority_and_ordering_of_downloading_images)
- [Optimize resource loading with the Fetch Priority API](https://web.dev/articles/fetch-priority) on web.dev (2023)
- [Don't fight the browser preload scanner](https://web.dev/articles/preload-scanner) on web.dev (2022)
- [Optimize resource loading](https://web.dev/learn/performance/optimize-resource-loading) on web.dev (2023)
- [Firefox Network Scheduling and Prioritization](https://firefox-source-docs.mozilla.org/networking/http/prioritization.html) in the Firefox source docs
