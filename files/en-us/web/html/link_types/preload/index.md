---
title: 'Link types: preload'
slug: Web/HTML/Link_types/preload
tags:
  - Attribute
  - HTML
  - Link
  - Link types
  - Reference
browser-compat: html.elements.link.rel.preload
---

{{HTMLSidebar}}

The `preload` value of the {{htmlelement("link")}} element's {{htmlattrxref("rel", "link")}} attribute lets you declare fetch requests in the
HTML's {{htmlelement("head")}}, specifying resources that your page will need very soon, which you want to start loading early in the page lifecycle,
before browsers' main rendering machinery kicks in. This ensures they are available earlier and are less likely to block the page's render, improving performance. Even though the name contains the term _load_, it doesn't load and execute the script but only schedules it to be downloaded and cached with a higher priority.

## The basics

You most commonly use `<link>` to load a CSS file to style your page with:

```html
<link rel="stylesheet" href="styles/main.css">
```

Here however, we will use a `rel` value of `preload`, which turns `<link>` into a preloader for any resource we want. You will also need to specify:

- The path to the resource in the {{htmlattrxref("href", "link")}} attribute.
- The type of resource in the {{htmlattrxref("as", "link")}} attribute.

A simple example might look like this (see our [JS and CSS example source](https://github.com/mdn/html-examples/tree/master/link-rel-preload/js-and-css), and [also live](https://mdn.github.io/html-examples/link-rel-preload/js-and-css/)):

```html
<head>
  <meta charset="utf-8">
  <title>JS and CSS preload example</title>

  <link rel="preload" href="style.css" as="style">
  <link rel="preload" href="main.js" as="script">

  <link rel="stylesheet" href="style.css">
</head>

<body>
  <h1>bouncing balls</h1>
  <canvas></canvas>

  <script src="main.js" defer></script>
</body>
```

Here we preload our CSS and JavaScript files so they will be available as soon as they are required for the rendering of the page later on. This example is trivial, as the browser probably discovers the `<link rel="stylesheet">` and `<script>` elements in the same chunk of HTML as the preloads, but the benefits can be seen much more clearly the later resources are discovered and the larger they are. For example:

- Resources that are pointed to from inside CSS, like fonts or images.
- Resources that JavaScript can request, like JSON, imported scripts, or web workers.
- Larger images and video files.

`preload` has other advantages too. Using `as` to specify the type of content to be preloaded allows the browser to:

- Prioritize resource loading more accurately.
- Store in the cache for future requests, reusing the resource if appropriate.
- Apply the correct [content security policy](/en-US/docs/Web/HTTP/CSP) to the resource.
- Set the correct {{HTTPHeader("Accept")}} request headers for it.

### What types of content can be preloaded?

Many different content types can be preloaded. The possible `as` attribute values are:

- `audio`: Audio file, as typically used in {{htmlelement("audio")}}.
- `document`: An HTML document intended to be embedded by a {{htmlelement("frame")}} or {{htmlelement("iframe")}}.
- `embed`: A resource to be embedded inside an {{htmlelement("embed")}} element.
- `fetch`: Resource to be accessed by a fetch or XHR request, such as an ArrayBuffer or JSON file.
- `font`: Font file.
- `image`: Image file.
- `object`: A resource to be embedded inside an {{htmlelement("object")}} element.
- `script`: JavaScript file.
- `style`: CSS stylesheet.
- `track`: WebVTT file.
- `worker`: A JavaScript web worker or shared worker.
- `video`: Video file, as typically used in {{htmlelement("video")}}.

> **Note:** `video` preloading is included in the Preload spec, but is not currently implemented by browsers.

> **Note:** There's more detail about these values and the web features they expect to be consumed by in the Preload spec — see [link element extensions](https://w3c.github.io/preload/#link-element-extensions). Also note that the full list of values the `as` attribute can take is governed by the Fetch spec — see [request destinations](https://fetch.spec.whatwg.org/#concept-request-destination).

## Including a MIME type

`<link>` elements can accept a {{htmlattrxref("type", "link")}} attribute, which contains the MIME type of the resource the element points to. This is especially useful when preloading resources — the browser will use the `type` attribute value to work out if it supports that resource, and will only download it if so, ignoring it if not.

You can see an example of this in our video example (see the [full source code](https://github.com/mdn/html-examples/tree/master/link-rel-preload/video), and also [the live version](https://mdn.github.io/html-examples/link-rel-preload/video/)), a code snippet from which is shown below. And while this code won't actually cause preloading in any browsers — because video preloading isn't yet supported in any browsers — it still illustrates the core behavior behind preloading in general.

```html
<head>
  <meta charset="utf-8">
  <title>Video preload example</title>

  <link rel="preload" href="sintel-short.mp4" as="video" type="video/mp4">
</head>
<body>
  <video controls>
    <source src="sintel-short.mp4" type="video/mp4">
    <source src="sintel-short.webm" type="video/webm">
    <p>Your browser doesn't support HTML video. Here is a <a href="sintel-short.mp4">link to the video</a> instead.</p>
  </video>
</body>
```

The code in the example above causes the `video/mp4` video to be preloaded only in supporting browsers — and for users who have `video/mp4` support in their browsers, causes the `video/mp4` video to actually be used (since it's the first {{htmlelement("source")}} specified). That makes the video player hopefully smoother/more responsive for users who have `video/mp4` support in their browsers.

Note that for users whose browsers have both `video/mp4` and `video/webm` support, if in that code a `<link rel="preload" href="sintel-short.webm" as="video" type="video/webm">` element were also specified, then _both_ the `video/mp4` and `video/webm` videos would be preloaded — even though only one of them would actually be used.

Therefore, specifying preloading for multiple types of the same resource is discouraged. Instead, the best practice is to specify preloading only for the type the majority of your users are likely to actually use. That's why the code in the example above doesn't specify preloading for the `video/webm` video.

However, the lack of preloading doesn't prevent the `video/webm` video from actually being used by those who need it: for users whose browsers don't have `video/mp4` support but do have `video/webm` support, the code in the example above does still cause the `video/webm` video to be used — but it does so without also causing it to also be preloaded unnecessarily for the majority of other users.

## CORS-enabled fetches

When preloading resources that are fetched with [CORS](/en-US/docs/Web/HTTP/CORS) enabled (e.g. [`fetch()`](/en-US/docs/Web/API/fetch), [`XMLHttpRequest`](/en-US/docs/Web/API/XMLHttpRequest) or [fonts](/en-US/docs/Web/CSS/@font-face)), special care needs to be taken to setting the {{htmlattrxref("crossorigin","link")}} attribute on your [`<link>`](/en-US/docs/Web/HTML/Element/link) element. The attribute needs to be set to match the resource's CORS and credentials mode, even when the fetch is not cross-origin.

As mentioned above, one interesting case where this applies is font files. Because of various reasons, these have to be fetched using anonymous-mode CORS (see [Font fetching requirements](https://drafts.csswg.org/css-fonts/#font-fetching-requirements)).

Let's use this case as an example. You can see the full [example source code on GitHub](https://github.com/mdn/html-examples/tree/master/link-rel-preload/fonts) ([also see it live](https://mdn.github.io/html-examples/link-rel-preload/fonts/)):

```html
<head>
  <meta charset="utf-8">
  <title>Web font example</title>

  <link rel="preload" href="fonts/cicle_fina-webfont.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="fonts/zantroke-webfont.woff2" as="font" type="font/woff2" crossorigin>

  <link href="style.css" rel="stylesheet">
</head>
<body>
  …
</body>
```

Not only are we providing the MIME type hints in the `type` attributes, but we are also providing the `crossorigin` attribute to make sure the preload's CORS mode matches the eventual font resource request.

## Including media

One nice feature of `<link>` elements is their ability to accept {{htmlattrxref("media", "link")}} attributes. These can accept [media types](/en-US/docs/Web/CSS/@media#media_types) or full-blown [media queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries), allowing you to do responsive preloading!

Let's look at an example (see it on GitHub — [source code](https://github.com/mdn/html-examples/tree/master/link-rel-preload/media), [live example](https://mdn.github.io/html-examples/link-rel-preload/media/)):

```html
<head>
  <meta charset="utf-8">
  <title>Responsive preload example</title>

  <link rel="preload" href="bg-image-narrow.png" as="image" media="(max-width: 600px)">
  <link rel="preload" href="bg-image-wide.png" as="image" media="(min-width: 601px)">

  <link rel="stylesheet" href="main.css">
</head>
<body>
  <header>
    <h1>My site</h1>
  </header>

  <script>
    const mediaQueryList = window.matchMedia("(max-width: 600px)");
    const header = document.querySelector('header');

    if (mediaQueryList.matches) {
      header.style.backgroundImage = 'url(bg-image-narrow.png)';
    } else {
      header.style.backgroundImage = 'url(bg-image-wide.png)';
    }
  </script>
</body>
```

We include `media` attributes on our `<link>` elements so that a narrow image is preloaded if the user has a narrow viewport, and a wider image is loaded if they have a wide viewport. We use {{domxref("Window.matchMedia")}} / {{domxref("MediaQueryList")}} to do this (see [Testing media queries](/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries) for more).

This makes it much more likely that the font will be available for the page render, cutting down on FOUT (flash of unstyled text).

This doesn't have to be limited to images, or even files of the same type — think big! You could perhaps preload and display a simple SVG diagram if the user is on a narrow screen where bandwidth and CPU is potentially more limited, or preload a complex chunk of JavaScript then use it to render an interactive 3D model if the user's resources are more plentiful.

## Scripting and preloads

Another nice thing about these preloads is that you can execute them with script. For example, here we create a {{domxref("HTMLLinkElement")}} instance, then attach it to the DOM:

```js
const preloadLink = document.createElement("link");
preloadLink.href = "myscript.js";
preloadLink.rel = "preload";
preloadLink.as = "script";
document.head.appendChild(preloadLink);
```

This means that the browser will preload the `myscript.js` file, but not actually use it yet. To use it, you could do this:

```js
const preloadedScript = document.createElement("script");
preloadedScript.src = "myscript.js";
document.body.appendChild(preloadedScript);
```

This is useful when you want to preload a script, but then defer execution until exactly when you need it.

## Other resource preloading mechanisms

Other preloading features exist, but none are quite as fit for purpose as `<link rel="preload">`:

- `<link rel="prefetch">` has been supported in browsers for a long time, but it is intended for prefetching resources that will be used in the **_next_** navigation/page load (e.g. when you go to the next page). This is fine, but isn't useful for the current page! In addition, browsers will give `prefetch` resources a lower priority than `preload` ones — the current page is more important than the next. See [Link prefetching FAQ](/en-US/docs/Web/HTTP/Link_prefetching_FAQ) for more details.
- `<link rel="prerender">` renders a specified webpage in the background, speeding up its load if the user navigates to it. Because of the potential to waste users bandwidth, Chrome treats `prerender` as a [NoState prefetch](https://developer.chrome.com/blog/nostate-prefetch/) instead.
- `<link rel="subresource">` {{non-standard_inline}} was supported in Chrome a while ago, and was intended to tackle the same issue as `preload`, but it had a problem: there was no way to work out a priority for the items (`as` didn't exist back then), so they all got fetched with fairly low priority.
- There are a number of script-based resource loaders out there, but they don't have any power over the browser's fetch prioritization queue, and are subject to much the same performance problems.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Preload: What Is It Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/) by Yoav Weiss
