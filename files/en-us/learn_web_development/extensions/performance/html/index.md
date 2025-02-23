---
title: HTML performance optimization
slug: Learn_web_development/Extensions/Performance/HTML
page-type: learn-module-chapter
---

{{LearnSidebar}} {{PreviousMenuNext("Learn_web_development/Extensions/Performance/Javascript", "Learn_web_development/Extensions/Performance/CSS", "Learn_web_development/Extensions/Performance")}}

HTML is by default fast and accessible. It is our job, as developers, to ensure that we preserve these two properties when creating or editing HTML code. Complications can occur when, for example, the file size of a {{htmlelement("video")}} embed is too large or when JavaScript parsing blocks the rendering of critical page elements. This article walks you through the key HTML performance features that can drastically improve the quality of your web page.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        <a
          href="/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Basic software installed</a
        >, and basic knowledge of
        <a href="/en-US/docs/Learn_web_development/Getting_started/Your_first_website"
          >client-side web technologies</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To learn about the impact of HTML on website performance
        and how to optimize your HTML to improve performance.
      </td>
    </tr>
  </tbody>
</table>

## To optimize or not to optimize

The first question you should answer before starting to optimize your HTML is "what do I need to optimize?". Some of the tips and techniques discussed below are good practices that will benefit just about any web project, whereas some are only needed in certain situations. Trying to apply all these techniques everywhere is probably unnecessary, and may be a waste of your time. You should figure out what performance optimizations are actually needed in each project.

To do this, you need to [measure the performance](/en-US/docs/Learn_web_development/Extensions/Performance/Measuring_performance) of your site. As this link shows, there are several different ways to measure performance, some involving sophisticated [performance APIs](/en-US/docs/Web/API/Performance_API). The best way to get started, however, is to learn how to use tools such as built-in browser [network](/en-US/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools) and [performance](/en-US/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools) tools, to examine the parts of the page that are taking a long time to load and need optimizing.

## Key HTML performance issues

HTML is simple in terms of performance — it is mostly text, which is small in size, and therefore, mostly quick to download and render. The key issues that can impact the performance of a web page include:

- Size of the image and video files: It is important to consider how to handle the content of replaced elements such as {{htmlelement("img")}} and {{htmlelement("video")}}. Image and video files are large and can add significantly to the weight of the page. Therefore, it is important to minimize the amount of bytes that get downloaded on a user's device (for example, serve smaller images for mobile). You also need to consider improving the perceived performance by loading images and videos on a page only when they are needed.
- Delivery of embedded content: This is usually the content embedded in {{htmlelement("iframe")}} elements. Loading content into `<iframe>`s can impact performance significantly, so it should be considered carefully.
- Order of resource loading: To maximize the perceived and actual performance, the HTML should be loaded first, in the order in which it appears on the page. You can then use various features to influence the order of resource loading for better performance. For example, you can preload critical CSS and fonts early, but defer non-critical JavaScript until later on.

> [!NOTE]
> There is an argument to be made for simplifying your HTML structure and [minifying](<https://en.wikipedia.org/wiki/Minification_(programming)>) your source code, so that rendering and downloads are faster. However, HTML file size is negligible compared to images and videos, and browser rendering is very fast these days. If your HTML source is so large and complex that it is creating rendering and download performance hits, you probably have bigger problems, and should aim to simplify it and split the content up.

## Responsive handling of replaced elements

[Responsive design](/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) has revolutionized the way that web content layout is handled across different devices. One key advantage that it enables is dynamic switching of layouts optimized for different screen sizes, for example a wide screen layout versus a narrow (mobile) screen layout. It can also handle dynamic switching of content based on other device attributes, such as resolution or preference for light or dark color scheme.

The so-called "mobile first" technique can ensure that the default layout is for small-screen devices, so mobiles can just download images suitable for their screens, and don't need to take the performance hit of downloading larger desktop images. However, since this is controlled using [media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) in your CSS, it can only positively affect performance of images loaded in CSS.

In the sections below, we'll summarize how to implement responsive replaced elements. You can find a lot more detail about these implementations in the [HTML video and audio](/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) and [Responsive images](/en-US/docs/Web/HTML/Responsive_images) guides.

### Providing different image resolutions via srcset

To provide different resolution versions of the same image depending on the device's resolution and viewport size, you can use the [`srcset`](/en-US/docs/Web/HTML/Element/img#srcset) and [`sizes`](/en-US/docs/Web/HTML/Element/img#sizes) attributes.

This example provides different size images for different screen widths:

```html
<img
  srcset="480w.jpg 480w, 800w.jpg 800w"
  sizes="(max-width: 600px) 480px,
         800px"
  src="800w.jpg"
  alt="Family portrait" />
```

`srcset` provides the intrinsic size of the source images along with their filenames, and `sizes` provides media queries alongside image slot widths that need to be filled in each case. The browser then decides which images makes sense to load for each slot. As an example, if the screen width is `600px` or less, then `max-width: 600px` is true, and therefore, the slot to fill is said to be `480px`. In this case, the browser will likely choose to load the 480w.jpg file (480px-wide image). This helps with performance because browsers don't load larger images than they need.

This example provides different resolution images for different screen resolutions:

```html
<img
  srcset="320w.jpg, 480w.jpg 1.5x, 640w.jpg 2x"
  src="640w.jpg"
  alt="Family portrait" />
```

`1.5x`, `2x`, etc. are relative resolution indicators. If the image is styled to be 320px-wide (for example with `width: 320px` in CSS), the browser will load `320w.jpg` if the device is low resolution (one {{glossary("device pixel")}} per CSS pixel), or `640x.jpg` if the device is high resolution (two device pixels per CSS pixel or more).

In both cases, the `src` attribute provides a default image to load if the browser does not support `src`/`srcset`.

### Providing different sources for images and videos

The {{htmlelement("picture")}} element builds on the traditional {{htmlelement("img")}} element, allowing you to provide multiple different sources for different situations. For example if the layout is wide, you will probably want a wide image, and if it is narrow, you will want a narrower image that still works in that context.

Of course, this also works to provide a smaller download of information on mobile devices, helping with performance.

An example is as follows:

```html
<picture>
  <source media="(max-width: 799px)" srcset="narrow-banner-480w.jpg" />
  <source media="(min-width: 800px)" srcset="wide-banner-800w.jpg" />
  <img src="large-banner-800w.jpg" alt="Dense forest scene" />
</picture>
```

The {{htmlelement("source")}} elements contain media queries inside `media` attributes. If a media query returns true, the image referenced in its `<source>` element's `srcset` attribute is loaded. In the above example, if the viewport width is `799px` or less, the `narrow-banner-480w.jpg` image is loaded. Also note how the `<picture>` element includes an `<img>` element, which provides a default image to load in the case of browsers that don't support `<picture>`.

Note the use of the `srcset` attribute in this example. As shown in the previous section, you can provide different resolutions for each image source.

`<video>` elements work in a similar way, in terms of providing different sources:

```html
<video controls>
  <source src="video/smaller.mp4" type="video/mp4" />
  <source src="video/smaller.webm" type="video/webm" />
  <source src="video/larger.mp4" type="video/mp4" media="(min-width: 800px)" />
  <source
    src="video/larger.webm"
    type="video/webm"
    media="(min-width: 800px)" />

  <!-- fallback for browsers that don't support video element -->
  <a href="video/larger.mp4">download video</a>
</video>
```

There are, however, some key differences between providing sources for images and videos:

- In the above example, we are using `src` rather than `srcset`; you can't specify different resolutions for videos via `srcset`.
- Instead, you specify different resolutions inside the different `<source>` elements.
- Note how we are also specifying different video formats inside different `<source>` elements, with each format being identified via its MIME type inside the `type` attribute. Browsers will load the first one they come across that they support, where the media query test returns true.

### Lazy loading images

A very useful technique for improving performance is **lazy loading**. This refers to the practice of not loading all images immediately when the HTML is rendered, but instead only loading them when they are actually visible to the user in the viewport (or imminently visible). This means that the immediately visible/usable content is ready to use more quickly, whereas subsequent content only has its images rendered when scrolled to, and the browser won't waste bandwidth loading images that the user will never see.

Lazy loading has historically been handled using JavaScript, but browsers now have a `loading` attribute available that can instruct the browser to lazy load images automatically:

```html
<img src="800w.jpg" alt="Family portrait" loading="lazy" />
```

See [Browser-level image lazy loading for the web](https://web.dev/articles/browser-level-image-lazy-loading) on web.dev for detailed information.

You can also lazy load video content by using the `preload` attribute. For example:

```html
<video controls preload="none" poster="poster.jpg">
  <source src="video.webm" type="video/webm" />
  <source src="video.mp4" type="video/mp4" />
</video>
```

Giving `preload` a value of `none` tells the browser to not preload any of the video data before the user decides to play it, which is obviously good for performance. Instead, it will just show the image indicated by the `poster` attribute. Different browsers have different default video loading behavior, so it is good to be explicit.

See [Fast playback with audio and video preload](https://web.dev/articles/fast-playback-with-preload) on web.dev for detailed information.

## Handling embedded content

It is very common for content to be embedded in web pages from other sources. This is most commonly done when displaying advertising on a site to generate revenue — the ads are usually generated by a third-party company of some kind and embedded onto your page. Other uses might include:

- Displaying shared content that a user might need across multiple pages, such as a shopping cart or profile information.
- Displaying third-party content related to the organization's main site, such as a social media posts feed.

Embedding content is most commonly done using {{htmlelement("iframe")}} elements, although other less commonly used embedding elements do exist, such as {{htmlelement("object")}} and {{htmlelement("embed")}}. We'll concentrate on `<iframe>`s in this section.

The most important and key piece of advice for using `<iframe>`s is: "Don't use embedded `<iframe>`s unless you absolutely have to". If you are creating a page with multiple different panes of information on it, it might sound organizationally sensible to break those up into separate pages and load them into different `<iframe>`s. However, this has a number of problems associated with it in terms of performance and otherwise:

- Loading the content into an `<iframe>` is much more expensive than loading the content as part of the same direct page — not only does it require extra HTTP requests to load the content, but the browser also needs to create a separate page instance for each one. Each one is effectively a separate web page instance embedded in the top-level web page.
- Following on from the previous point, you'll also need to handle any CSS styling or JavaScript manipulation separately for each different `<iframe>` (unless the embedded pages are from the same origin), which becomes much more complex. You can't target embedded content with CSS and JavaScript applied to the top-level page, or vice versa. This is a sensible security measure that is fundamental to the web. Imagine all the problems you might run into if third-party embedded content could arbitrarily run scripts against any page it was embedded in!
- Each `<iframe>` would also need to load any shared data and media files separately — you can't share cached assets across different page embeds (again, unless the embedded pages are from the same origin). This can lead to a page using much more bandwidth than you might expect.

It is advisable to put the content into a single page. If you want to pull in new content dynamically as the page changes, it is still better for performance to load it into the same page rather than putting it into an `<iframe>`. You might grab the new data using the {{domxref("Window/fetch", "fetch()")}} method, for example, and then inject it into the page using some DOM scripting. See [Making network requests with JavaScript](/en-US/docs/Learn_web_development/Core/Scripting/Network_requests) and [DOM scripting introduction](/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting) for more information.

> [!NOTE]
> If you control the content and it is relatively simple, you could consider using base-64 encoded content in the `src` attribute to populate the `<iframe>`, or even insert raw HTML into the `srcdoc` attribute (See [Iframe Performance Part 2: The Good News](https://medium.com/slices-of-bread/iframe-performance-part-2-the-good-news-26eb53cea429) for more information).

If you must use `<iframe>`s, then use them sparingly.

### Lazy loading iframes

In the same way as `<img>` elements, you can also use the `loading` attribute to instruct the browser to lazy-load `<iframe>` content that is initially offscreen, thereby improving performance:

```html
<iframe src="https://example.com" loading="lazy" width="600" height="400">
</iframe>
```

See [It's time to lazy-load offscreen iframes!](https://web.dev/articles/iframe-lazy-loading) for more information.

## Handling resource loading order

Ordering of resource loading is important for maximizing perceived and actual performance. When a web page is loaded:

1. The HTML is generally parsed first, in the order in which it appears on the page.
2. Any found CSS is parsed to understand the styles that need to be applied to the page. During this time, linked assets such as images and web fonts start to be fetched.
3. Any found JavaScript is parsed, evaluated, and run against the page. By default, this blocks parsing of the HTML that appears after the {{htmlelement("script")}} elements where the JavaScript is encountered.
4. Slightly later on, the browser works out how each HTML element should be styled, given the CSS applied to it.
5. The styled result is then painted to the screen.

> [!NOTE]
> This is a very simplified account of what happens, but it does give you an idea.

Various HTML features allow you to modify how resource loading happens to improve performance. We'll explore some of these now.

### Handling JavaScript loading

Parsing and executing JavaScript blocks the parsing of subsequent DOM content. This increases the time until that content is rendered and usable by the users of the page. A small script won't make much difference, but consider that modern web applications tend to be very JavaScript-heavy.

Another side effect of the default JavaScript parsing behavior is that, if the script being rendered relies on DOM content that appears later on in the page, you'll get errors.

For example, imagine a simple paragraph on a page:

```html
<p>My paragraph</p>
```

Now imagine a JavaScript file that contains the following code:

```js
const pElem = document.querySelector("p");

pElem.addEventListener("click", () => {
  alert("You clicked the paragraph");
});
```

We can apply this script to the page by referring to it in a `<script>` element like this:

```html
<script src="index.js"></script>
```

If we put this `<script>` element before the `<p>` element in the source order (for example, in the {{htmlelement("head")}} element), the page will throw an error (Chrome for example reports "Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')" to the console). This occurs because the script relies on the `<p>` element to work, but at the point the script is parsed, the `<p>` element does not exist on the page. It has not yet been rendered.

You can fix the above issue by putting the `<script>` element after the `<p>` element (for example at the end of the document body), or by running the code inside a suitable event handler (for example run it on the [`DOMContentLoaded`](/en-US/docs/Web/API/Document/DOMContentLoaded_event), which fires when the DOM has been completely parsed).

However, this doesn't solve the problem of waiting for the script to load. Better performance can be achieved by adding the `async` attribute to the `<script>` element:

```html
<script async src="index.js"></script>
```

This causes the script to be fetched in parallel with the DOM parsing, so it is ready at the same time, and won't block rendering, thereby improving performance.

> [!NOTE]
> There is another attribute, `defer`, which causes the script to be executed after the document has been parsed, but before firing `DOMContentLoaded`. This has a similar effect to `async`.

Another JavaScript load handling tip is to split your script up into code modules and load each part when required, instead of putting all your code into one giant script and loading it all at the beginning. This is done using [JavaScript modules](/en-US/docs/Web/JavaScript/Guide/Modules). Read the linked article for a detailed guide.

### Preloading content with rel="preload"

The fetching of other resources (such as images, videos, or font files) linked to from your HTML, CSS, and JavaScript can also cause performance problems, blocking your code from executing and slowing down the experience. One way to mitigate such problems is to use `rel="preload"` to turn {{htmlelement("link")}} elements into preloaders. For example:

```html
<link rel="preload" href="sintel-short.mp4" as="video" type="video/mp4" />
```

Upon coming across a `rel="preload"` link, the browser will fetch the referenced resource as soon as possible and make it available in the browser cache so that it will be ready for use sooner when it is referenced in subsequent code. It is useful to preload high-priority resources that the user will encounter early on in a page so that the experience is as smooth as possible.

See the following articles for detailed information on using `rel="preload"`:

- [`rel="preload"`](/en-US/docs/Web/HTML/Attributes/rel/preload)
- [Preload critical assets to improve loading speed](https://web.dev/articles/preload-critical-assets) on web.dev (2020)

> [!NOTE]
> You can use `rel="preload"` to preload CSS and JavaScript files as well.

> [!NOTE]
> There are other [`rel`](/en-US/docs/Web/HTML/Attributes/rel) values that are also designed to speed up various aspects of page loading: `dns-prefetch`, `preconnect`, `modulepreload`, `prefetch`, and `prerender`. Go to the linked page and find out what they do.

## See also

- [Making network requests with JavaScript](/en-US/docs/Learn_web_development/Core/Scripting/Network_requests)
- [DOM scripting introduction](/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/Javascript", "Learn_web_development/Extensions/Performance/CSS", "Learn_web_development/Extensions/Performance")}}
