---
title: Implementing feature detection
slug: Learn_web_development/Extensions/Testing/Feature_detection
page-type: learn-module-chapter
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Testing/HTML_and_CSS","Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}

Feature detection involves working out whether a browser supports a certain block of code, and running different code depending on whether it does (or doesn't), so that the browser can always provide a working experience rather than crashing/erroring in some browsers. This article details how to write your own simple feature detection, how to use a library to speed up implementation, and native features for feature detection such as `@supports`.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Familiarity with the core <a href="/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/en-US/docs/Learn_web_development/Core/Styling_basics">CSS</a>, and
        <a href="/en-US/docs/Learn_web_development/Core/Scripting">JavaScript</a> languages; an idea
        of the high-level
        <a
          href="/en-US/docs/Learn_web_development/Extensions/Testing/Introduction"
          >principles of cross-browser testing</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To understand what the concept of feature detection is, and be able to
        implement suitable solutions in CSS and JavaScript.
      </td>
    </tr>
  </tbody>
</table>

## The concept of feature detection

The idea behind feature detection is that you can run a test to determine whether a feature is supported in the current browser, and then conditionally run code to provide an acceptable experience both in browsers that _do_ support the feature, and browsers that _don't_. If you don't do this, browsers that don't support the features you are using in your code may not display your sites properly or might fail altogether, creating a bad user experience.

Let's recap and look at the example we touched on in our [Handling common JavaScript problems](/en-US/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript#feature_detection) — the [Geolocation API](/en-US/docs/Web/API/Geolocation_API) (which exposes available location data for the device the web browser is running on) has the main entry point for its use, a `geolocation` property available on the global [Navigator](/en-US/docs/Web/API/Navigator) object. Therefore, you can detect whether the browser supports geolocation or not by using something like the following:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function (position) {
    // show the location on a map, such as the Google Maps API
  });
} else {
  // Give the user a choice of static maps
}
```

Before we move on, we'd like to say one thing upfront — don't confuse feature detection with **browser sniffing** (detecting what specific browser is accessing the site) — this is a terrible practice that should be discouraged at all costs. See [don't browser sniff](/en-US/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript#dont_browser_sniff) for more details.

## Writing your own feature detection tests

In this section, we'll look at implementing your own feature detection tests, in both CSS and JavaScript.

### CSS

You can write tests for CSS features by testing for the existence of _[element.style.property](/en-US/docs/Web/API/HTMLElement/style)_ (e.g. `paragraph.style.rotate`) in JavaScript.

A classic example might be to test for [Subgrid](/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid) support in a browser; for browsers that support the `subgrid` value for a subgrid value for [`grid-template-columns`](/en-US/docs/Web/CSS/grid-template-columns) and [`grid-template-rows`](/en-US/docs/Web/CSS/grid-template-rows), we can use subgrid in our layout. For browsers that don't, we could use regular grid that works fine but is not as cool-looking.

Using this as an example, we could include a subgrid stylesheet if the value is supported and a regular grid stylesheet if not. To do so, we could include two stylesheets in the head of our HTML file: one for all the styling, and one that implements the default layout if subgrid is not supported:

```html
<link href="basic-styling.css" rel="stylesheet" />
<link class="conditional" href="grid-layout.css" rel="stylesheet" />
```

Here, `basic-styling.css` handles all the styling that we want to give to every browser. We have two additional CSS files, `grid-layout.css` and `subgrid-layout.css`, which contain the CSS we want to selectively apply to browsers depending on their support levels.

We use JavaScript to test the support for the subgrid value, then update the `href` of our conditional stylesheet based on browser support.

We can add a `<script></script>` to our document, filled with the following JavaScript

```js
const conditional = document.querySelector(".conditional");
if (CSS.supports("grid-template-columns", "subgrid")) {
  conditional.setAttribute("href", "subgrid-layout.css");
}
```

In our conditional statement, we test to see if the {{cssxref("grid-template-columns")}} property supports the `subgrid` value using [`CSS.supports()`](/en-US/docs/Web/API/CSS/supports_static).

#### @supports

CSS has a native feature detection mechanism: the {{cssxref("@supports")}} at-rule. This works in a similar manner to [media queries](/en-US/docs/Web/CSS/CSS_media_queries) except that instead of selectively applying CSS depending on a media feature like a resolution, screen width or {{glossary("aspect ratio")}}, it selectively applies CSS depending on whether a CSS feature is supported, similar to `CSS.supports()`.

For example, we could rewrite our previous example to use `@supports`:

```css
@supports (grid-template-columns: subgrid) {
  main {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(4, minmax(100px, auto));
  }

  .item {
    display: grid;
    grid-column: 2 / 7;
    grid-row: 2 / 4;
    grid-template-columns: subgrid;
    grid-template-rows: repeat(3, 80px);
  }

  .subitem {
    grid-column: 3 / 6;
    grid-row: 1 / 3;
  }
}
```

This at-rule block applies the CSS rule within only if the current browser supports the `grid-template-columns: subgrid;` declaration. For a condition with a value to work, you need to include a complete declaration (not just a property name) and NOT include the semicolon on the end.

`@supports` also has `AND`, `OR`, and `NOT` logic available — the other block applies the regular grid layout if the subgrid option is not available:

```css
@supports not (grid-template-columns: subgrid) {
  /* rules in here */
}
```

This is more convenient than the previous example — we can do all of our feature detection in CSS, no JavaScript required, and we can handle all the logic in a single CSS file, cutting down on HTTP requests. For this reason it is the preferred method of determining browser support for CSS features.

### JavaScript

We already saw an example of a JavaScript feature detection test earlier on. Generally, such tests are done via one of a few common patterns.

Common patterns for detectable features include:

- Members of an object

  - : Check whether a particular method or property (typically an entry point into using the API or other feature you are detecting) exists in its parent `Object`.

    Our earlier example used this pattern to detect [Geolocation](/en-US/docs/Web/API/Geolocation_API) support by testing the [`navigator`](/en-US/docs/Web/API/Navigator) object for a `geolocation` member:

    ```js
    if ("geolocation" in navigator) {
      // Access navigator.geolocation APIs
    }
    ```

- Properties of an element

  - : Create an element in memory using {{domxref("Document.createElement()")}} and then check if a property exists on it.

    This example shows a way of detecting [Canvas API](/en-US/docs/Web/API/Canvas_API) support:

    ```js
    function supports_canvas() {
      return !!document.createElement("canvas").getContext;
    }

    if (supports_canvas()) {
      // Create and draw on canvas elements
    }
    ```

    > [!NOTE]
    > The double `NOT` in the above example (`!!`) is a way to force a return value to become a "proper" boolean value, rather than a {{glossary("Truthy")}}/{{glossary("Falsy")}} value that may skew the results.

- Specific return values of a method on an element

  - : Create an element in memory using {{domxref("Document.createElement()")}} and then check if a method exists on it. If it does, check what value it returns. See the feature test in [Dive into HTML Video Format detection](https://diveinto.html5doctor.com/detect.html#video-formats) for an example of this pattern.

- Retention of assigned property value by an element

  - : Create an element in memory using {{domxref("Document.createElement()")}}, set a property to a specific value, then check to see if the value is retained. See the feature test in [Dive into HTML \<input> type detection](https://diveinto.html5doctor.com/detect.html#input-types) for an example of this pattern.

Bear in mind that some features are, however, known to be undetectable. In these cases, you'll need to use a different approach, such as using a {{Glossary("Polyfill", "polyfill")}}.

#### matchMedia

We also wanted to mention the {{domxref("Window.matchMedia")}} JavaScript feature at this point too. This is a property that allows you to run media query tests inside JavaScript. It looks like this:

```js
if (window.matchMedia("(max-width: 480px)").matches) {
  // run JavaScript in here.
}
```

As an example, our [Snapshot](https://github.com/chrisdavidmills/snapshot) demo makes use of it to selectively apply the Brick JavaScript library and use it to handle the UI layout, but only for the small screen layout (480px wide or less). We first use the `media` attribute to only apply the Brick CSS to the page if the page width is 480px or less:

```html
<link
  href="dist/brick.css"
  rel="stylesheet"
  media="all and (max-width: 480px)" />
```

We then use `matchMedia()` in the JavaScript several times, to only run Brick navigation functions if we are on the small screen layout (in wider screen layouts, everything can be seen at once, so we don't need to navigate between different views).

```js
if (window.matchMedia("(max-width: 480px)").matches) {
  deck.shuffleTo(1);
}
```

## Summary

This article covered feature detection in a reasonable amount of detail, going through the main concepts and showing you how to implement your own feature detection tests.

Next up, we'll start looking at automated testing.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/HTML_and_CSS","Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}
