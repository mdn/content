---
title: Implementing feature detection
slug: Learn/Tools_and_testing/Cross_browser_testing/Feature_detection
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Accessibility","Learn/Tools_and_testing/Cross_browser_testing/Automated_testing", "Learn/Tools_and_testing/Cross_browser_testing")}}

Feature detection involves working out whether a browser supports a certain block of code, and running different code depending on whether it does (or doesn't), so that the browser can always provide a working experience rather than crashing/erroring in some browsers. This article details how to write your own simple feature detection, how to use a library to speed up implementation, and native features for feature detection such as `@supports`.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Familiarity with the core <a href="/en-US/docs/Learn/HTML">HTML</a>,
        <a href="/en-US/docs/Learn/CSS">CSS</a>, and
        <a href="/en-US/docs/Learn/JavaScript">JavaScript</a> languages; an idea
        of the high-level
        <a
          href="/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction"
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

Let's recap and look at the example we touched on in our [Handling common JavaScript problems](/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#feature_detection) — the [Geolocation API](/en-US/docs/Web/API/Geolocation_API) (which exposes available location data for the device the web browser is running on) has the main entry point for its use, a `geolocation` property available on the global [Navigator](/en-US/docs/Web/API/Navigator) object. Therefore, you can detect whether the browser supports geolocation or not by using something like the following:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function (position) {
    // show the location on a map, such as the Google Maps API
  });
} else {
  // Give the user a choice of static maps
}
```

To detect a single feature, the `if` statement works well. For complex applications, consider using an established feature detection library rather than writing your own. Modernizr is the industry standard for feature detection tests, and we'll look at that later on.

Before we move on, we'd like to say one thing upfront — don't confuse feature detection with **browser sniffing** (detecting what specific browser is accessing the site) — this is a terrible practice that should be discouraged at all costs. See [Using bad browser sniffing code](/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#using_bad_browser_sniffing_code) for more details.

## Writing your own feature detection tests

In this section, we'll look at implementing your own feature detection tests, in both CSS and JavaScript.

### CSS

You can write tests for CSS features by testing for the existence of _[element.style.property](/en-US/docs/Web/API/HTMLElement/style)_ (e.g. `paragraph.style.rotate`) in JavaScript.

A classic example might be to test for [Subgrid](/en-US/docs/Web/CSS/CSS_Grid_Layout/Subgrid) support in a browser; for browsers that support the `subgrid` value for a subgrid value for [`grid-template-columns`](/en-US/docs/Web/CSS/grid-template-columns) and [`grid-template-rows`](/en-US/docs/Web/CSS/grid-template-rows), we can use subgrid in our layout. For browsers that don't, we could use regular grid that works fine but is not as cool-looking.

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
  conditional.setAttribute("href", "subgrid-layout.css.css");
}
```

In our conditional statement, we test to see if the{{cssxref("grid-template-columns")}} property supports the `subgrid` value using [`CSS.supports()`](/en-US/docs/Web/API/CSS/supports).

#### @supports

CSS has a native feature detection mechanism: the {{cssxref("@supports")}} at-rule. This works in a similar manner to [media queries](/en-US/docs/Web/CSS/Media_Queries) except that instead of selectively applying CSS depending on a media feature like a resolution, screen width or aspect ratio, it selectively applies CSS depending on whether a CSS feature is supported, similar to `CSS.supports()`.

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

Bear in mind though that some features, however, are known to be undetectable — see Modernizr's list of [Undetectables](https://github.com/Modernizr/Modernizr/wiki/Undetectables) from 2016.

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
      return !!document.createElement('canvas').getContext;
    }

    if (supports_canvas()) {
      // Create and draw on canvas elements
    }
    ```

    > **Note:** The double `NOT` in the above example (`!!`) is a way to force a return value to become a "proper" boolean value, rather than a {{glossary("Truthy")}}/{{glossary("Falsy")}} value that may skew the results.

- Specific return values of a method on an element

  - : Create an element in memory using {{domxref("Document.createElement()")}} and then check if a method exists on it. If it does, check what value it returns. See the feature test in [Dive into HTML Video Format detection](https://diveinto.html5doctor.com/detect.html#video-formats) for an example of this pattern.

- Retention of assigned property value by an element

  - : Create an element in memory using {{domxref("Document.createElement()")}}, set a property to a specific value, then check to see if the value is retained. See the feature test in [Dive into HTML \<input> type detection](https://diveinto.html5doctor.com/detect.html#input-types) for an example of this pattern.

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

## Using Modernizr to implement feature detection

It is possible to implement your own feature detection tests using techniques like the ones detailed above. You might as well use a dedicated feature detection library however, as it makes things much easier. The mother of all feature detection libraries is [Modernizr](https://modernizr.com/), and it can detect just about everything you'll ever need. Let's look at how to use it now.

When you are experimenting with Modernizr you might as well use the development build, which includes every possible feature detection test. Download this now by:

1. Clicking on the [Development build](https://modernizr.com/download?do_not_use_in_production) link.
2. Clicking the big pink _Build_ button at the top of the page.
3. Clicking the top _Download_ link in the dialog box that appears.

Save it somewhere sensible, like the directory you've been using your other guides in this series.

When you are using Modernizr in production, you can go to the [Download page](https://modernizr.com/download) you've already visited and click the plus buttons to include only the features you need to feature detect. Then when you click the _Build_ button, you'll download a custom build containing only those feature detects, making for a much smaller file size.

### CSS

Let's have a look at how Modernizr works in terms of selectively applying CSS.

1. First, make a copy of [`supports-feature-detect.html`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/feature-detection/supports-feature-detect.html) and [`supports-styling.css`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/feature-detection/supports-styling.css). Save them as `modernizr-css.html` and `modernizr-css.css`.
2. Update your {{htmlelement("link")}} element in your HTML so it points to the correct CSS file (you should also update your {{htmlelement("title")}} element to something more suitable!):

   ```html
   <link href="modernizr-css.css" rel="stylesheet" />
   ```

3. Above this `<link>` element, add a {{htmlelement("script")}} element to apply the Modernizr library to the page, as shown below. This needs to be applied to the page before any CSS (or JavaScript) that might make use of it.

   ```html
   <script src="modernizr-custom.js"></script>
   ```

4. Now edit your opening `<html>` tag, so that it looks like this:

   ```html
   <html lang="en-us" class="no-js">
     …
   </html>
   ```

At this point, try loading your page, and you'll get an idea of how Modernizr works for CSS features. If you look at the DOM inspector of your browser's developer tools, you'll see that Modernizr has updated the `class` attribute of your `<html>` element like so:

```html
<html
  class="js no-htmlimports no-proximity sizes no-flash transferables applicationcache blobconstructor blob-constructor no-contextmenu (and loads of more values)">
  …
</html>
```

It now contains a large number of classes that indicate the support status of different technology features. As an example, if the browser didn't support grid at all, `<html>` would be given a class name of `no-cssgrid`. If you search through the class list, you'll also see others relating to grid, like:

- `cssgridlegacy` or `no-cssgridlegacy` depending on whether a legacy version of grid is or is not supported.

> **Note:** You can find a list of what most of the class names mean — see [Features detected by Modernizr](https://modernizr.com/docs#features).

Unfortunately, Modernizr does not test for support of some new CSS features like container queries, cascade layers, or subgrid. If it did, we would update our `@supports` example in the following way:

```css
main {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, minmax(100px, auto));
}
.item {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-rows: repeat(3, 80px);
}
/* Properties for browsers with subgrid */
.csssubgrid .item {
  grid-template-columns: subgrid;
}
.csssubgrid .subitem {
  grid-column: 3 / 6;
  grid-row: 1 / 3;
}
/* Fallbacks for browsers that don't support subgrid */
.no-csssubgrid .subitem {
  display: flex;
  flex: 33%;
}
```

So how does this work? Because all those class names have been put on the `<html>` element, you can target browsers that do or don't support a feature using specific descendant selectors. So here we're applying the top set of rules only to browsers that do support subgrid, and the bottom set of rules only to browsers that don't (`no-csssubgrid`).

> **Note:** All of Modernizr's HTML and JavaScript feature tests are reported as class names, so you can apply CSS selectively based on whether the browser supports HTML or JavaScript features, if needed.

### JavaScript

Modernizr is also equally well-prepared for implementing JavaScript feature detects too. It does this by making the global `Modernizr` object available to the page it is applied to, which contains results of the feature detects as `true`/`false` properties.

For example, load up our [`modernizr-css.html`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/feature-detection/modernizr-css.html) example in your browser, then try going to your JavaScript console and typing in `Modernizr.` followed by some of those class names (they are the same here too). For example:

```
Modernizr.flexbox
Modernizr.xhr2
Modernizr.fetch
```

The console will return `true`/`false` values to indicate whether your browser supports those features or not.

Let's look at an example to show how you'd use those properties.

1. First of all, make a local copy of the [`modernizr-js.html`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/feature-detection/modernizr-js.html) example file.
2. Attach the Modernizr library to the HTML using a `<script>` element, as we have done in previous demos. Put it above the existing `<script>` element, which is attaching the Google Maps API to the page.
3. Next, fill in the `YOUR-API-KEY` placeholder text in the second `<script>` element (as it is now) with a valid Google Maps API key. To get a key, sign in to a Google account, go to the [Get a Key/Authentication](https://developers.google.com/maps/documentation/javascript/get-api-key) page, then click the blue _Get a Key_ button and follow the instructions.
4. Finally, add another `<script>` element at the bottom of the HTML body (just before the `</body>` tag), and put the following script inside the tags:

   ```js
   if (Modernizr.geolocation) {
     navigator.geolocation.getCurrentPosition(function (position) {
       let latlng = new google.maps.LatLng(
         position.coords.latitude,
         position.coords.longitude
       );
       let myOptions = {
         zoom: 8,
         center: latlng,
         mapTypeId: google.maps.MapTypeId.TERRAIN,
         disableDefaultUI: true,
       };
       let map = new google.maps.Map(
         document.getElementById("map_canvas"),
         myOptions
       );
     });
   } else {
     const para = document.createElement("p");
     para.textContent = "Argh, no geolocation!";
     document.body.appendChild(para);
   }
   ```

Try your example out! Here we use the `Modernizr.geolocation` test to check whether geolocation is supported by the current browser. If it is, we run some code that gets your device's current location, and plots it on a Google Map.

## Summary

This article covered feature detection in a reasonable amount of detail, going through the main concepts and showing you how to both implement your own feature detection tests and use the Modernizr library to implement tests more easily.

Next up, we'll start looking at automated testing.

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Accessibility","Learn/Tools_and_testing/Cross_browser_testing/Automated_testing", "Learn/Tools_and_testing/Cross_browser_testing")}}
