---
title: CSS performance optimization
slug: Learn/Performance/CSS
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Performance/html", "Learn/Performance/business_case_for_performance", "Learn/Performance")}}

When developing a website, it is important to consider how the browser is handling your CSS, and optimize it to mitigate any performance issues that it is causing. For example, you should optimize for render blocking, and minimize the number of required reflows. This article walks you through key CSS performance techniques and features.

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
        To learn about the impact of CSS on web
        performance optimization.
      </td>
    </tr>
  </tbody>
</table>

## CSS rendering optimization

Showing users an unstyled page and then repainting it once the CSS styles have been parsed would be a bad user experience. For this reason, CSS is render blocking, unless the browser knows the CSS is not currently needed. The browser can paint the page once it has downloaded the CSS and built the [CSS object model (CSSOM)](/en-US/docs/Glossary/CSSOM).

Browsers follow a specific rendering path: paint only occurs after layout, which occurs after the render tree is created, which in turn requires both the DOM and the CSSOM trees. To optimize the CSSOM construction and improve page performance, you can do the following:

- **Remove unnecessary styles**: This may sound obvious, but it is surprising how many developers forget to clean up rules and declarations that were added in their stylesheets during development and ended up not being used. All styles get parsed, whether they are being used during layout and painting or not, so it can speed up page rendering to get rid of these. As [How Do You Remove Unused CSS From a Site?](https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/) (csstricks.com, 2019) summarizes, this is a difficult problem to solve for a large codebase, and there isn't a magic bullet to reliably find and remove unused CSS. You need to do the hard work of keeping your CSS modular and being careful and deliberate about what is added and removed.
- **Split CSS into separate modules**: Keeping CSS modular means that CSS not required at page load can be loaded later on, reducing initial CSS render-blocking and loading times. The simplest way to do this is to split your CSS up into separate files, and loading only what is needed:

  ```html
  <!-- Loading and parsing styles.css is render-blocking -->
  <link rel="stylesheet" href="styles.css" />

  <!-- Loading and parsing print.css is not render-blocking -->
  <link rel="stylesheet" href="print.css" media="print" />

  <!-- Loading and parsing mobile.css is not render-blocking on large screens -->
  <link
    rel="stylesheet"
    href="mobile.css"
    media="screen and (max-width: 480px)" />
  ```

  The above example provides default styles, styles that will only be loaded when the document is being printed, and styles that will be loaded only by devices with narrow screens. By default, the browser assumes that each specified style sheet is render-blocking. You can tell the browser when the style sheet should be applied by adding a `media` attribute containing a [media query](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries). When the browser sees a style sheet that it only needs to apply in a specific scenario, it still downloads the stylesheet, but doesn't render-block. By separating the CSS into multiple files, the main render-blocking file, in this case `styles.css`, is much smaller, reducing the time that rendering is blocked.

- **Minify and compress your CSS**: Loading times can be reduced by minifying your CSS (meaning removing all the whitespace in the file that is only there for human readability), and making sure that the server that your site is hosted on uses compression such as gzip on files before serving them. Minification is generally done as part of a build process (for example, most JavaScript frameworks will minify code when you build a project ready to be deployed to production).

- **Simplify selectors**: People often write selectors that are more complex than needed for applying their styles. This increases file sizes and parsing time for those selectors. For example:

  ```css
  /* Very specific selector */
  body div#main-content article.post h2.headline {
    font-size: 24px;
  }

  /* You probably only really need this */
  .headline {
    font-size: 24px;
  }
  ```

  Making your selectors less complex and specific is also good for maintenance. It is easy to understand what simple selectors are doing, and it is easy to override styles when needed later on if the selectors are less [specific](/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#specificity_2).

- **Don't apply styles to more elements than needed**: A common mistake is to just apply something to all elements using the [universal selector](/en-US/docs/Web/CSS/Universal_selectors), or at least, more elements than needed. This kind of styling can impact performance, especially on larger sites.

  ```css
  /* Select every element inside the <body> */
  body * {
    font-size: 14px;
    display: flex;
  }
  ```

  Remember that many properties (such as {{cssxref("font-size")}}) inherit their values from their parents, so you don't need to apply them everywhere. And powerful tools such as [Flexbox](/en-US/docs/Learn/CSS/CSS_layout/Flexbox) need to be used sparingly. Using them everywhere can cause all kinds of unexpected behavior.

- **Cut down on image HTTP requests with CSS sprites**: [CSS sprites](https://css-tricks.com/css-sprites/) is a technique that places several small images (such as icons) that you want to use on your site into a single image file, and then uses different {{cssxref("background-position")}} values to display the chunk of image that you want to show in each different place. This can dramatically cut down on the number of HTTP requests needed to fetch the images.

- **Preload important assets**: You can use [`rel="preload"`](/en-US/docs/Web/HTML/Attributes/rel/preload) to turn {{htmlelement("link")}} elements into preloaders for critical assets. This includes CSS files, fonts, and images:

  ```html
  <link rel="preload" href="style.css" as="style" />

  <link
    rel="preload"
    href="ComicSans.woff2"
    as="font"
    type="font/woff2"
    crossorigin />

  <link
    rel="preload"
    href="bg-image-wide.png"
    as="image"
    media="(min-width: 601px)" />
  ```

  The browser will fetch the referenced resources as soon as possible and make them available in the browser cache so that they will be ready for use sooner when they are referenced in subsequent code. It is useful to preload high-priority resources that the user will encounter early on in a page so that the experience is as smooth as possible. Note how you can also use `media` attributes to create responsive preloaders.

  See also [Preload critical assets to improve loading speed](https://web.dev/preload-critical-assets/) on web.dev (2020)

## Handling animations

Animations can improve perceived performance, making interfaces feel snappier and making users feel like progress is being made when they are waiting for a page to load (loading spinners, for example). However, larger animations, and greater numbers of animations will naturally require more processing power to handle, which can degrade performance.

The simplest advice is to cut down on all unnecessary animations. You could also provide users with a control/site preference to turn off animations if they are on a low-powered device, perhaps using JavaScript to control whether animation is applied to the page in the first place. There is also a media query called [`prefers-reduced-motion`](/en-US/docs/Web/CSS/@media/prefers-reduced-motion) that can be used to selectively serve animation styles or not based on a user's OS-level preferences for animation.

If you must animate, first of all, you are making the right choice by directly using [CSS for animations](/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations), rather than using old-school JavaScript techniques to dynamically change CSS styles to create an animation. If you want to use JavaScript, The [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) provides a way to directly hook into CSS animations using JavaScript.

Next, animation performance relies heavily on what properties you are animating. Certain properties, when animated, trigger a reflow (and therefore also a repaint) and should be avoided. These include properties that:

- Alter an element's dimensions, such as [`width`](/en-US/docs/Web/CSS/width), [`height`](/en-US/docs/Web/CSS/height), [`border`](/en-US/docs/Web/CSS/border), [`padding`](/en-US/docs/Web/CSS/padding).
- Reposition an element, such as [`margin`](/en-US/docs/Web/CSS/margin), [`top`](/en-US/docs/Web/CSS/top), [`bottom`](/en-US/docs/Web/CSS/bottom), [`left`](/en-US/docs/Web/CSS/left), and [`right`](/en-US/docs/Web/CSS/right).
- Change an element's layout, such as [`align-content`](/en-US/docs/Web/CSS/align-content), [`align-items`](/en-US/docs/Web/CSS/align-items), or [`flex`](/en-US/docs/Web/CSS/flex).
- Add visual effects that change the element geometry, such as [`box-shadow`](/en-US/docs/Web/CSS/box-shadow).

Modern browsers are smart enough to repaint only the changed area of the document, rather than the entire page. As a result, larger animations are more costly.

If at all possible, it is better to animate properties that do not cause reflow/repaint. This includes:

- [Transforms](/en-US/docs/Web/CSS/CSS_transforms)
- [`opacity`](/en-US/docs/Web/CSS/opacity)
- [`filter`](/en-US/docs/Web/CSS/filter)

### Animating on the GPU

To further improve performance, animation work can be moved off the main thread and onto the device's GPU (also referred to as compositing). Elements whose animation will be moved onto the GPU include:

- Those animated with 3D transforms: [`transform: translateZ()`](/en-US/docs/Web/CSS/transform), [`rotate3d()`](/en-US/docs/Web/CSS/transform-function/rotate3d), etc.
- Those with certain other properties animated such as [`position: fixed`](/en-US/docs/Web/CSS/position).
- Those with [`will-change`](/en-US/docs/Web/CSS/will-change) applied (see below).
- Certain elements that are rendered in their own layer, including [`<video>`](/en-US/docs/Web/HTML/Element/video), [`<canvas>`](/en-US/docs/Web/HTML/Element/canvas) and [`<iframe>`](/en-US/docs/Web/HTML/Element/iframe).

Animation on the GPU can result in improved performance, especially on mobile. However, as with many things in life, it is not always that simple. Read [CSS GPU Animation: Doing It Right](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/) (smashingmagazine.com, 2016) for a very useful and detailed analysis.

## Optimizing element changes with `will-change`

The CSS [`will-change`](/en-US/docs/Web/CSS/will-change) property hints to browsers how an element is expected to change. Browsers may set up optimizations before an element is actually changed. These kinds of optimizations can increase the responsiveness of a page by doing potentially expensive work before it is required.

> **Note:** `will-change` is intended to be used as a last resort to try to deal with existing performance problems. It should not be used to anticipate performance problems.

```css
.element {
  will-change: opacity, transform;
}
```

## Improving font performance

This section contains some useful tips for improving web font performance.

In general, think carefully about the fonts you use on your site. Some font files can be very large (multiple megabytes). While it can be tempting to use lots of fonts for visual excitment, this can slow down loading significantly, and cause your site to look like a mess. You probably only need about 2 or 3, and you could get away with less if you chose to use [web safe fonts](/en-US/docs/Learn/CSS/Styling_text/Fundamentals#web_safe_fonts).

### Font loading

Bear in mind that a font is only loaded when it is actually applied to an element using the [`font-family`](/en-US/docs/Web/CSS/font-family) property, not when it is first referenced using the [`@font-face`](/en-US/docs/Web/CSS/@font-face) at-rule:

```css
/* Font not loaded here */
@font-face {
  font-family: "Open Sans";
  src: url("OpenSans-Regular-webfont.woff2") format("woff2");
}

h1,
h2,
h3 {
  /* It is actually loaded here */
  font-family: "Open Sans";
}
```

It can therefore be benefitical to use `rel="preload"` to load important fonts early, so they will be available more quickly when they are actually needed:

```html
<link
  rel="preload"
  href="OpenSans-Regular-webfont.woff2"
  as="font"
  type="font/woff2"
  crossorigin />
```

This is more likely to be beneficial if your `font-family` declaration is hidden inside a large external stylesheet, and won't be reached until significantly later in the parsing process. It is a tradeoff however — fonts files are quite large, and if you preload too many of them, you may delay other resources.

You can also consider:

- Using [`rel="preconnect"`](/en-US/docs/Web/HTML/Attributes/rel/preconnect) to make an early connection with the font provider. See [Preconnect to critical third-party origins](https://web.dev/font-best-practices/#preconnect-to-critical-third-party-origins) for details.
- Using the [CSS Font Loading API](/en-US/docs/Web/API/CSS_Font_Loading_API) to customize your font loading behavior via JavaScript.

### Load only the glyphs you need

When choosing a font for body copy, it is harder to be sure of what glyphs will be used in it, especially if you are dealing with user generated content and/or content across multiple languages.

However, if you know you are going to use a specific set of glyphs (for example in headings, or spercific punctuation characters only), you could limit the number of glyphs the browser has to download. This could be done in a brute-force way, by creating a font file than only contains that subset.

However, there is a smarter way. The [`unicode-range`](/en-US/docs/Web/CSS/unicode-range) `@font-face` descriptor can be used to specify the exact subset of glyphs, or glyph ranges, that you want to download:

```css
@font-face {
  font-family: "Open Sans";
  src: url("OpenSans-Regular-webfont.woff2") format("woff2");
  unicode-range: U+0025-00FF;
}
```

### Defining font display behavior with the `font-display` descriptor

Applied to the `@font-face` at-rule, the [`font-display`](/en-US/docs/Web/CSS/@font-face/font-display) descriptor defines how font files are loaded and displayed by the browser, allowing text to appear with a fallback font while a font loads, or fails to load. This improves performance by making the text visible instead of having a blank screen, with a trade-off being a flash of unstyled text.

```css
@font-face {
  font-family: someFont;
  src: url(/path/to/fonts/someFont.woff) format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: fallback;
}
```

## Optimizing styling recalculation with CSS containment

The [CSS containment](/en-US/docs/Web/CSS/CSS_containment) module aims to provide performance improvements by allowing the browser to isolate parts of the page from one another and make optimizations when rendering those parts, independently from one another. As an example, the browser can choose to not render parts until they are visible in the viewport.

The {{cssxref("contain")}} property allows an author to specify exactly what containment types they want applied to individual containers on the page. This allows the browser to recalculate layout, style, paint, size, or any combination of them for a limited part of the DOM.

```css
article {
  contain: content;
}
```

The {{cssxref("content-visibility")}} property is a useful shortcut, which allows authors to apply a strong set of containments on a set of containers and specify that the browser should not lay out and render those containers until needed.

A second property, {{cssxref("contain-intrinsic-size")}}, is also available, which allows you to provide a placeholder size for the containers while they are under the effects of containment. This means that the containers will take up space even if their contents have not yet been renderered, allowing containment to do its performance magic without the risk of scroll bar shift and jank as elements render and come into view.

```css
article {
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
}
```

This causes the intial page load to be much faster.

{{PreviousMenuNext("Learn/Performance/html", "Learn/Performance/business_case_for_performance", "Learn/Performance")}}

## See also

- [CSS animation performance](/en-US/docs/Web/Performance/CSS_JavaScript_animation_performance)
- [Best practices for fonts](https://web.dev/font-best-practices/) on web.dev (2022)
- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/content-visibility/) on web.dev (2022)
