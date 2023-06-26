---
title: HTML performance features
slug: Learn/Performance/HTML
---

{{LearnSidebar}} {{PreviousMenuNext("Learn/Performance/javascript_performance", "Learn/Performance/CSS", "Learn/Performance")}}

HTML is by default fast and accessible. It is our job, as developers, to ensure that we preserve these two properties when creating or editing HTML code. Complications can occur when, for example, the file size of a {{htmlelement("video")}} embed is too large, or when a webpage is not optimized for mobile devices. This module walks you through the key HTML performance features that can drastically improve the quality of your webpage.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Basic computer literacy,
        <a
          href="/en-US/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >basic software installed</a
        >, and basic knowledge of
        <a href="/en-US/docs/Learn/Getting_started_with_the_web"
          >client-side web technologies</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To learn about the impact of HTML elements and attributes on web
        performance optimization.
      </td>
    </tr>
  </tbody>
</table>

## Key HTML performance issues

HTML is simple in terms of performance — it is mostly text, which is small in size, and therefore mostly quick to download and render. The key issues are:

- Handling the content of replaced elements such as {{htmlelement("img")}} and {{htmlelement("video")}}. Images and video are large and can add significantly to the weight of the page, therefore it is important to minimize the amount of bytes downloaded as appropriate for the user's device (for example, serve smaller images for mobile) and try to improve perceived performance by only loading images and video when they are needed.
- Handling the delivery of content embedded in {{htmlelement("iframe")}} elements. Loading content into `<iframe>`s can also impact performance significantly, so it should be considered carefully.
- Ordering of resource loading. To maximize perceived and actual performance, the HTML should be loaded first, in the order in which it appears on the page. You can then use various features to influence the order of resource loading for better performance, for example preloading critical CSS and fonts early, but deferring non-critical JavaScript until later on.

> **Note**: There is an argument to be made for simplifying your HTML structure and [minifying](<https://en.wikipedia.org/wiki/Minification_(programming)>) your source code, so that rendering and downloads are faster. However, HTML file size is negligible compared to images and videos, browser rendering is very fast these days. If your HTML source is so large and complex that it is creating rendering and download performance hits, you probably have bigger problems, and should aim to simplify it and split the content up.

## Responsive handling of replaced elements

[Responsive design](/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design) has revolutionized the way that web content layout is handled across different devices. One key advantage that it enables is dynamic switching of layouts optimized for different screen sizes, for example a wide screen layout versus a narrow (mobile) screen layout, but it can also handle dynamic switching of content based on other device attributes, such as resolution or preference for light or dark color scheme.

The so-called "mobile first" technique can ensure that the default layout is for small-screen devices, so mobiles can just download images suitable for their screens, and don't need to take the performance hit of downloading larger desktop images. However, this is controlled using [media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) in your CSS, so can only positively affect performance of images loaded in CSS.

In the below sections we'll summarize how to implement responsive replaced elements. You can find a lot more detail on these implementations in [Video and audio content](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) and [Responsive images](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).

### Providing different image resolutions via srcset

To provide different resolution versions of the same image depending on the device's resolution and viewport size, you can use the `srcset` and `sizes` attributes.

This example provides different size images for different screen widths:

```html
<img
  srcset="480w.jpg 480w, 800w.jpg 800w"
  sizes="(max-width: 600px) 480px,
         800px"
  src="800w.jpg"
  alt="Family portrait" />
```

`srcset` provides the intrinsic size of the source images along with their filenames, and `sizes` provides media queries alongside image slot widths that need to be filled in each case. The browser then decides which images makes sense to load for each slot. As an example, if the width is 600px or less, the `max-width: 600px` is true, therefore the slot to fill is said to be `480px`, so the browser will likely choose to load the 480w (480px-wide image). This helps with performance, as browsers are not loading larger images than they need.

This example provides different resolution images for different screen resolutions:

```html
<img
  srcset="320w.jpg, 480w.jpg 1.5x, 640w.jpg 2x"
  src="640w.jpg"
  alt="Family portrait" />
```

`1.5x`, `2x`, etc. are relative resolution indicators. If the image is styled to be 320px-wide (for example with `width: 320px` in CSS), the browser will load `320w.jpg` if the device is low resolution (one device pixel per CSS pixel), or `640x.jpg` if the device is high resolution (two device pixels per CSS pixel or more).

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

The {{htmlelement("source")}} elements contain media queries inside `media` attributes. If a media query returns true, the image referenced in its `<source>` element's `srcset` attribute is loaded. For example, in the above example, if the viewport width is 799px or less, the `small-banner-480w.jpg` image is loaded. Also note how the `<picture>` element includes a `<img>` element, which provides a default image to load in the case of browsers that don't support `<picture>`.

> **Note:** note the use of the `srcset` element here. As shown in the previous section, you can provide different resolutions for each different image source.

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

Note however some key differences:

- Here we are using `src` rather than `srcset`; you can't specify different resolutions for videos via `srcset`.
- Instead, you specify different resolutions inside the different `<source>` elements.
- Note how here we are also specifying different video formats inside different `<source>` elements, with each format being identified via its MIME type inside the `type` attribute. Browsers will load the first one they come across that they support, where the media query test returns true.

### Lazy loading

A very useful technique for improving performance is **lazy loading**. This refers to the practice of not loading all images immediately when the HTML is rendered, but instead only loading them when they are actually visible to the user in the viewport (or imminently visible). This means that the immediately visible/usable content is ready to use more quickly, whereas subsequent content only has its images rendered when scrolled to, and the browser won't waste bandwith loading images that the user will never see.

Lazy loading has historically been handled using JavaScript, but browsers now have a `loading` attribute available that can instruct the browser to lazy load images automatically:

```html
<img src="800w.jpg" alt="Family portrait" loading="lazy" />
```

See [Browser-level image lazy loading for the web](https://web.dev/browser-level-image-lazy-loading/) on web.dev for detailed information.

You can also lazy load video content, using the `preload` attribute. For example:

```html
<video controls preload="none" poster="poster.jpg">
  <source src="video.webm" type="video/webm" />
  <source src="video.mp4" type="video/mp4" />
</video>
```

Giving `preload` a value of `none` tells the browser to not preload any of the video data before the user decides to play it, which is obviously good for preformance. Instead, it will just show the image indicated by the `poster` attribute. Different browsers have different default video loading behavior, so it is good to be explicit.

See [Lazy loading video](https://web.dev/lazy-loading-video/) on web.dev for detailed information.

## Handling embedding content

xx

## Handling resource loading order

xx

- [The `<picture>` Element](/en-US/docs/Web/HTML/Element/picture)
- [The `<video>` Element](/en-US/docs/Web/HTML/Element/video), metadata vs full download
- [The `<source>` Element](/en-US/docs/Web/HTML/Element/source)
- [The `<img> srcset` attribute](/en-US/docs/Web/HTML/Element/img#attributes) lazy loading

  - [Responsive images](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

- [Preloading content with `rel="preload"`](/en-US/docs/Web/HTML/Attributes/rel/preload)
- [(https://w3c.github.io/preload/](https://w3c.github.io/preload/))
- `async` / `defer` attributes
- {{htmlelement('iframe')}}
- {{htmlelement('object')}}
- {{htmlelement('script')}}
- [`rel` attribute](/en-US/docs/Web/HTML/Attributes/rel)

`having an HTML section with image sizing in the <img> tag, picture and srcset, and information on threads.`

## Conclusion

{{PreviousMenuNext("Learn/Performance/javascript_performance", "Learn/Performance/CSS", "Learn/Performance")}}

## See also

- [The `<picture>` Element](/en-US/docs/Web/HTML/Element/picture)
- [The `<video>` Element](/en-US/docs/Web/HTML/Element/video)
- [The `<source>` Element](/en-US/docs/Web/HTML/Element/source)
- [The `<img> srcset` attribute](/en-US/docs/Web/HTML/Element/img#attributes)

  - [Responsive images](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

- [Preloading content with `rel="preload"`](/en-US/docs/Web/HTML/Attributes/rel/preload)
- [(https://w3c.github.io/preload/](https://w3c.github.io/preload/))
