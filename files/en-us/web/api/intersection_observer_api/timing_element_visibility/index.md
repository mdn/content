---
title: Timing element visibility with the Intersection Observer API
slug: Web/API/Intersection_Observer_API/Timing_element_visibility
page-type: guide
---

{{DefaultAPISidebar("Intersection Observer API")}}

In this article, we'll build a mock blog which has a number of ads interspersed among the contents of the page, then use the [Intersection Observer API](/en-US/docs/Web/API/Intersection_Observer_API) to track how much time each ad is visible to the user. When an ad exceeds one minute of visible time, it will be replaced with a new one.

Although many aspects of this example will not match real-world usage (in particular, the articles all have the same text and aren't loaded from a database, and there are just a handful of simple text-only ads that are selected from an array), this should provide enough understanding of the API to quickly learn how to apply the Intersection Observer API to your own site.

There's a good reason why the notion of tracking visibility of ads is being used in this example. It turns out that one of the most common uses of Flash or other script in advertising on the Web is to record how long each ad is visible, for the purpose of billing and payment of revenues. Without the Intersection Observer API, this winds up being done using intervals and timeouts for each individual ad, or other techniques that tend to slow the page down. Using this API lets everything get streamlined by the browser to reduce the impact on performance substantially.

Let's get started!

## Building the site

### Site structure: The HTML

The site's structure is not too complicated. We'll be using [CSS Grid](/en-US/docs/Web/CSS/CSS_grid_layout) to style and lay out the site, so we can be pretty straightforward here:

```html
<div class="wrapper">
  <header>
    <h1>A Fake Blog</h1>
    <h2>Showing Intersection Observer in action!</h2>
  </header>

  <aside>
    <nav>
      <ul>
        <li><a href="#link1">A link</a></li>
        <li><a href="#link2">Another link</a></li>
        <li><a href="#link3">One more link</a></li>
      </ul>
    </nav>
  </aside>

  <main>…</main>
</div>
```

This is the framework for the entire site. At the top is the site's header region, contained within a {{HTMLElement("header")}} block. Below that, we define the site's sidebar as a list of links within an {{HTMLElement("aside")}} block.

Finally comes the main body. We start with an empty {{HTMLElement("main")}} element here. This box will be populated using script later.

### Styling the site with CSS

With the structure of the site defined, we turn to the styling for the site. Let's look at the style for each component of the page individually.

#### The basics

We provide styles for the {{HTMLElement("body")}} and {{HTMLElement("main")}} elements to define the site's background as well as the grid the various parts of the site will be placed in.

```css
body {
  font-family: "Open Sans", "Arial", "Helvetica", sans-serif;
  background-color: aliceblue;
}

.wrapper {
  display: grid;
  grid-template-columns: auto minmax(min-content, 1fr);
  grid-template-rows: auto minmax(min-content, 1fr);
  max-width: 700px;
  margin: 0 auto;
  background-color: aliceblue;
}
```

The site's {{HTMLElement("body")}} is configured here to use one of a number of common sans-serif fonts, and to use `"aliceblue"` as the background color. Then the `"wrapper"` class is defined; it wraps the entire blog, including the header, sidebar, and body content (articles and ads).

The wrapper establishes a CSS grid with two columns and two rows. The first column (sized automatically based on its content) is used for the sidebar and the second column (which will be used for body content) is sized to be at least the width of the contents of the column and at most all remaining available space.

The first row will be used specially for the site header. The rows are sized the same way as the columns: the first one is automatically sized and the second one uses the remaining space, but at least enough space to provide room for all elements within it.

The wrapper's width is fixed at 700px so that it will fit in the available space when presented inline on MDN below.

#### The header

The header is fairly simple, since for this example all it contains is some text. Its style looks like this:

```css
header {
  grid-column: 1 / -1;
  grid-row: 1;
  background-color: aliceblue;
}
```

{{cssxref("grid-row")}} is set to 1, since we want the header to be placed in the top row of the site's grid. More interesting is our use of {{cssxref("grid-column")}} here; here we specify that we want the column to start in the first column and ends in the first column past the last grid line—in other words, the header spans across all of the columns within the grid. Perfect for our needs.

#### The sidebar

Our sidebar is used to present links to other pages on the site. None of them work in our example here, but they exist to help with the presentation of a blog-like experience. The sidebar is represented using an {{HTMLElement("aside")}} element, and is styled as follows:

```css
aside {
  grid-column: 1;
  grid-row: 2;
  background-color: cornsilk;
  padding: 5px 10px;
}

aside ul {
  padding-left: 0;
}

aside ul li {
  list-style: none;
}

aside ul li a {
  text-decoration: none;
}
```

The most important thing to note here is that the {{cssxref("grid-column")}} is set to 1, to place the sidebar on the left-hand side of the screen. If you change this to -1, it will appear on the right (although some other elements will need some adjustments made to their margins to get the spacing just right). The {{cssxref("grid-row")}} is set to 2, to place it alongside the site body.

#### The content body

Speaking of the site's body: the main content of the site is kept in a {{HTMLElement("main")}} element. The following style is applied to that:

```css
main {
  grid-column: 2;
  grid-row: 2;
  margin: 0;
  margin-left: 16px;
  font-size: 16px;
}
```

The primary feature here is that the grid position is set to place the body content in column 2, row 2.

#### Articles

Each article is contained in an {{HTMLElement("article")}} element, styled like this:

```css
article {
  background-color: white;
  padding: 6px;
}

article:not(:last-child) {
  margin-bottom: 8px;
}

article h2 {
  margin-top: 0;
}
```

This creates article boxes with a white background which float atop the blue background, with a small margin around the article. Every article which isn't the last item in the container has an 8px bottom margin to space things apart.

#### Ads

Finally, the ads have the following initial styling. Individual ads may customize the style somewhat, as we'll see later.

```css
.ad {
  height: 96px;
  padding: 6px;
  border-color: #555;
  border-style: solid;
  border-width: 1px;
}

.ad:not(:last-child) {
  margin-bottom: 8px;
}

.ad h2 {
  margin-top: 0;
}

.ad div {
  position: relative;
  float: right;
  padding: 0 4px;
  height: 20px;
  width: 120px;
  font-size: 14px;
  bottom: 30px;
  border: 1px solid black;
  background-color: rgb(255 255 255 / 50%);
}
```

There's nothing magic in here. It's fairly basic CSS.

### Tying it together with JavaScript

That brings us to the JavaScript code which makes everything work. Let's start with the global variables:

```js
let contentBox;

let nextArticleID = 1;
const visibleAds = new Set();
let previouslyVisibleAds = null;

let adObserver;
let refreshIntervalID = 0;
```

These are used as follows:

- `contentBox`
  - : A reference to the {{HTMLElement("main")}} element's {{domxref("HTMLElement")}} object in the DOM. This is where we'll insert the articles and ads.
- `nextArticleID`
  - : Each article is given a unique ID number; this variable tracks the next ID to use, starting with 1.
- `visibleAds`
  - : A {{jsxref("Set")}} which we'll use to track the ads currently visible on the screen.
- `previouslyVisibleAds`
  - : Used to temporarily store the list of visible ads while the document is not visible (for example, if the user has tabbed to another page).
- `adObserver`
  - : Will hold our {{domxref("IntersectionObserver")}} used to track the intersection between the ads and the `<main>` element's bounds.
- `refreshIntervalID`
  - : Used to store the interval ID returned by {{domxref("setInterval()")}}. This interval will be used to trigger our periodic refreshes of the ads' content.

#### Setting up

To set things up, we run the `startup()` function below when the page loads:

```js
window.addEventListener("load", startup, false);

function startup() {
  contentBox = document.querySelector("main");

  document.addEventListener("visibilitychange", handleVisibilityChange, false);

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: [0.0, 0.75],
  };

  adObserver = new IntersectionObserver(intersectionCallback, observerOptions);

  buildContents();
  refreshIntervalID = setInterval(handleRefreshInterval, 1000);
}
```

First, a reference to the content wrapping {{HTMLElement("main")}} element is obtained, so we can insert our content into it. Then we set up an event listener for the {{domxref("document.visibilitychange_event", "visibilitychange")}} event. This event is sent when the document becomes hidden or visible, such as when the user switches tabs in their browser. The Intersection Observer API doesn't take this into account when detecting intersection, since intersection isn't affected by page visibility. Therefore, we need to pause our timers while the page is tabbed out; hence this event listener.

Next we set up the options for the {{domxref("IntersectionObserver")}} which will monitor target elements (ads, in our case) for intersection changes relative to the document. The options are configured to watch for intersections with the document's viewport (by setting `root` to `null`). We have no margins to extend or contract the intersection root's rectangle; we want to match the boundaries of the document's viewport exactly for intersection purposes. And the `threshold` is set to an array containing the values 0.0 and 0.75; this will cause our callback to execute whenever a targeted element becomes completely obscured or first starts to become unobscured (intersection ratio 0.0) or passes through 75% visible in either direction (intersection ratio 0.75).

The observer, `adObserver`, is created by calling `IntersectionObserver`'s constructor, passing in the callback function, `intersectionCallback`, and our options.

We then call a function `buildContents()`, which we'll define later to actually generate and insert into the document the articles and ads we want to present.

Finally, we set up an interval which triggers once a second to handle any necessary refreshing. We need a one second refresh since we're displaying timers in all visible ads for the purposes of this example. You may not need an interval at all, or you might do it differently or using a different time interval.

#### Handling document visibility changes

Let's take a look at the handler for the {{domxref("document.visibilitychange_event", "visibilitychange")}} event. Our script receives this event when the document itself becomes visible or invisible. The most important scenario here is when the user switches tabs. Since Intersection Observer only cares about the intersection between the targeted elements and the intersection root, and not the tab's visibility (which is a different issue entirely), we need to use the [Page Visibility API](/en-US/docs/Web/API/Page_Visibility_API) to detect these tab switches and disable our timers for the duration.

```js
function handleVisibilityChange() {
  if (document.hidden) {
    if (!previouslyVisibleAds) {
      previouslyVisibleAds = visibleAds;
      visibleAds = [];
      previouslyVisibleAds.forEach((adBox) => {
        updateAdTimer(adBox);
        adBox.dataset.lastViewStarted = 0;
      });
    }
  } else {
    previouslyVisibleAds.forEach((adBox) => {
      adBox.dataset.lastViewStarted = performance.now();
    });
    visibleAds = previouslyVisibleAds;
    previouslyVisibleAds = null;
  }
}
```

Since the event itself doesn't state whether the document has switched from visible to invisible or vice versa, the {{domxref("document.hidden")}} property is checked to see if the document is not currently visible. Since it's theoretically possible to get called multiple times, we only proceed if we haven't already paused the timers and saved the visibility states of the existing ads.

To pause the timers, all we need to do is remove the ads from the set of visible ads (`visibleAds`) and mark them as inactive. To do so, we begin by saving the set of visible ads into a variable known as `previouslyVisibleAds` to be sure we can restore them when the user tabs back into the document, and we then empty the `visibleAds` set so they won't be treated as visible. Then, for each of the ads that are being suspended, we call our `updateAdTimer()` function, which handles updating the ad's total visible time counter, then we set their `dataset.lastViewStarted` property to 0, which indicates that the tab's timer isn't running.

If the document has just become visible, we reverse this process: first we go through `previouslyVisibleAds` and set each one's `dataset.lastViewStarted` to the current document's time (in milliseconds since the document was created) using the {{domxref("Performance.now", "performance.now()")}} method. Then we set `visibleAds` back to `previouslyVisibleAds` and set the latter to `null`. Now the ads are all restarted, and configured to know that they became visible at the current time, so that they will not add up the duration of time the page was tabbed away the next time they're updated.

#### Handling intersection changes

Once per pass through the browser's event loop, each {{domxref("IntersectionObserver")}} checks to see if any of its target elements have passed through any of the observer's intersection ratio thresholds. For each observer, a list of targets that have done so is compiled, and sent to the observer's callback as an array of {{domxref("IntersectionObserverEntry")}} objects. Our callback, `intersectionCallback()`, looks like this:

```js
function intersectionCallback(entries) {
  entries.forEach((entry) => {
    const adBox = entry.target;

    if (entry.isIntersecting) {
      if (entry.intersectionRatio >= 0.75) {
        adBox.dataset.lastViewStarted = entry.time;
        visibleAds.add(adBox);
      }
    } else {
      visibleAds.delete(adBox);
      if (
        entry.intersectionRatio === 0.0 &&
        adBox.dataset.totalViewTime >= 60000
      ) {
        replaceAd(adBox);
      }
    }
  });
}
```

As previously mentioned, the {{domxref("IntersectionObserver")}} callback receives as input an array of all of the observer's targeted elements which have become either more or less visible than one of the intersection observer ratios. We iterate over each of those entries—which are of type {{domxref("IntersectionObserverEntry")}}. If the target element is intersecting with the root, we know it has just transitioned from the obscured state to the visible state. If it's become at least 75% visible, then we consider the ad visible and we start the timer by setting the ad's `dataset.lastViewStarted` attribute to the transition time in {{domxref("IntersectionObserverEntry.time", "entry.time")}}, then add the ad to the set `visibleAds` so we know to process it as time goes by.

If the ad has transitioned to the not-intersecting state, we remove the ad from the set of visible ads. Then we have one special behavior: we look to see if {{domxref("IntersectionObserverEntry.intersectionRatio", "entry.intersectionRatio")}} is 0.0; if it is, that means the element has become totally obscured. If that's the case, and the ad has been visible for at least a minute total, we call a function we'll create called `replaceAd()` to replace the existing ad with a new one. This way, the user sees a variety of ads over time, but the ads are only replaced while they can't be seen, resulting in a smooth experience.

#### Handling periodic actions

Our interval handler, `handleRefreshInterval()`, is called about once per second courtesy of the call to {{domxref("setInterval()")}} made in the `startup()` function [described above](#setting_up). Its main job is to update the timers every second and schedule a redraw to update the timers we'll be drawing within each ad.

```js
function handleRefreshInterval() {
  const redrawList = [];

  visibleAds.forEach((adBox) => {
    const previousTime = adBox.dataset.totalViewTime;
    updateAdTimer(adBox);

    if (previousTime !== adBox.dataset.totalViewTime) {
      redrawList.push(adBox);
    }
  });

  if (redrawList.length) {
    window.requestAnimationFrame((time) => {
      redrawList.forEach((adBox) => {
        drawAdTimer(adBox);
      });
    });
  }
}
```

The array `redrawList` will be used to keep a list of all the ads which need to be redrawn during this refresh cycle, since it may not be exactly the same as the elapsed time due to system activity or because you've set the interval to something other than every 1000 milliseconds.

Then, for each of the visible ads, we save the value of `dataset.totalViewTime` (the total number of milliseconds the ad has currently been visible, as of the last time it was updated) and then call `updateAdTimer()` to update the time. If it's changed, then we push the ad onto the `redrawList` so we know it needs to be updated during the next animation frame.

Finally, if there's at least one element to redraw, we use {{domxref("window.requestAnimationFrame", "requestAnimationFrame()")}} to schedule a function that will redraw each element in the `redrawList` during the next animation frame.

#### Updating an ad's visibility timer

Previously (see [Handling document visibility changes](#handling_document_visibility_changes) and [Handling periodic actions](#handling_periodic_actions)), we've seen that when we need to update an ad's "total visible time" counter, we call a function named `updateAdTimer()` to do so. This function takes as an input an ad's {{domxref("HTMLDivElement")}} object. Here it is:

```js
function updateAdTimer(adBox) {
  const lastStarted = adBox.dataset.lastViewStarted;
  const currentTime = performance.now();

  if (lastStarted) {
    const diff = currentTime - lastStarted;

    adBox.dataset.totalViewTime =
      parseFloat(adBox.dataset.totalViewTime) + diff;
  }

  adBox.dataset.lastViewStarted = currentTime;
}
```

To track an element's visible time, we use two custom data attributes (see [`data-*`](/en-US/docs/Web/HTML/Global_attributes/data-*)) on every ad:

- `lastViewStarted`
  - : The time in milliseconds, relative to the time at which the document was created, at which the ad's visibility count was last updated, or the ad last became visible. 0 if the ad was not visible as of the last time it was checked.
- `totalViewTime`
  - : The total number of milliseconds the ad has been visible.

These are accessed through each ad's {{domxref("HTMLElement.dataset")}} attribute, which provides a {{domxref("DOMStringMap")}} mapping each custom attribute's name to its value. The values are strings, but we can convert those to numbers easily enough—in fact, JavaScript generally does it automatically, although we'll have one instance where we have to do it ourselves.

We start by fetching the time at which the ad's previous visibility status check time (`adBox.dataset.lastViewStarted`) into a local variable named `lastStarted`. We also get the current time-since-creation value using {{domxref("Performance.now", "performance.now()")}} into `currentTime`.

If `lastStarted` is non-zero—meaning the timer is currently running, we compute the difference between the current time and the start time to determine the number of milliseconds the timer has been visible since the last time it became visible. This is added to the current value of the ad's `totalViewTime` to bring the total up to date. Note the use of {{jsxref("parseFloat", "parseFloat()")}} here; because these values are strings, JavaScript tries to do a string concatenation instead of addition without it.

Finally, the last-viewed time for the ad is updated to the current time. This is done whether the ad was running when this function was called or not; this causes the ad's timer to always be running when this function returns. This makes sense because this function is only called if the ad is visible, even if it's just now become visible.

#### Drawing an ad's timer

Inside each ad, for demonstration purposes, we draw the current value of its `totalViewTime`, converted into minutes and seconds. This is handled by passing the ad's element into the `drawAdTimer()` function:

```js
function drawAdTimer(adBox) {
  const timerBox = adBox.querySelector(".timer");
  const totalSeconds = adBox.dataset.totalViewTime / 1000;
  const sec = Math.floor(totalSeconds % 60);
  const min = Math.floor(totalSeconds / 60);

  timerBox.innerText = `${min}:${sec.toString().padStart(2, "0")}`;
}
```

This code finds the ad's timer using its ID, `"timer"`, and computes the number of seconds elapsed by dividing the ad's `totalViewTime` by 1000. Then it calculates the number of minutes and seconds elapsed before setting the timer's {{domxref("HTMLElement/innerText", "innerText")}} to a string representing that time in the form m:ss. The {{jsxref("String.padStart()")}} method is used to ensure that the number of seconds is padded out to two digits if it's less than 10.

#### Building the page contents

The `buildContents()` function is called by the [startup code](#setting_up) to select and insert into the document the articles and ads to be presented:

```js
const loremIpsum =
  "<p>Lorem ipsum dolor sit amet, consectetur adipiscing" +
  " elit. Cras at sem diam. Vestibulum venenatis massa in tincidunt" +
  " egestas. Morbi eu lorem vel est sodales auctor hendrerit placerat" +
  " risus. Etiam rutrum faucibus sem, vitae mattis ipsum ullamcorper" +
  " eu. Donec nec imperdiet nibh, nec vehicula libero. Phasellus vel" +
  " malesuada nulla. Aliquam sed magna aliquam, vestibulum nisi at," +
  " cursus nunc.</p>";

function buildContents() {
  for (let i = 0; i < 5; i++) {
    contentBox.appendChild(createArticle(loremIpsum));

    if (!(i % 2)) {
      loadRandomAd();
    }
  }
}
```

The variable `loremIpsum` contains the text we'll use for the body of all of our articles. Obviously in the real world, you'd have some code to pull articles from a database or the like, but this does the job for our purposes. Every article uses the same text; you could of course change that easily enough.

`buildContents()` creates a page with five articles. Following every odd-numbered article, an ad is "loaded" and inserted into the page. Articles are inserted into the content box (that is, the {{HTMLElement("main")}} element that contains all the site content) after being created using a method called `createArticle()`, which we'll look at next.

The ads are created using a function called `loadRandomAd()`, which both creates the ad and inserts it into the page. We'll see later that this same function can also replace an existing ad, but for now, we're appending ads to the existing content.

#### Creating an article

To create the {{HTMLElement("article")}} element for an article (as well as all of its contents), we use the `createArticle()` function, which takes as input a string which is the full text of the article to add to the page.

```js
function createArticle(contents) {
  const articleElem = document.createElement("article");
  articleElem.id = nextArticleID;

  const titleElem = document.createElement("h2");
  titleElem.innerText = `Article ${nextArticleID} title`;
  articleElem.appendChild(titleElem);

  articleElem.innerHTML += contents;
  nextArticleID += 1;

  return articleElem;
}
```

First, the `<article>` element is created and its ID is set to the unique value `nextArticleID` (which starts at 1 and goes up for each article). Then we create and append an {{HTMLElement("Heading_Elements", "h2")}} element for the article title and then we append the HTML from `contents` to that. Finally, `nextArticleID` is incremented (so that the next element gets a new unique ID) and we return the new `<article>` element to the caller.

#### Creating an ad

The `loadRandomAd()` function simulates loading an ad and adding it to the page. If you don't pass a value for `replaceBox`, a new element is created to contain the ad; the ad is then appended to the page. If you specify a `replaceBox`, that box is treated as an existing ad element; instead of creating a new one, the existing element is changed to contain the new ad's style, content, and other data. This avoids the risk of lengthy layout work being done when you update the ad, which could happen if you first delete the old element then insert a new one.

```js
function loadRandomAd(replaceBox) {
  const ads = [
    {
      bgcolor: "#cec",
      title: "Eat Green Beans",
      body: "Make your mother proud—they're good for you!",
    },
    {
      bgcolor: "aquamarine",
      title: "MillionsOfFreeBooks.whatever",
      body: "Read classic literature online free!",
    },
    {
      bgcolor: "lightgrey",
      title: "3.14 Shades of Gray: A novel",
      body: "Love really does make the world go round…",
    },
    {
      bgcolor: "#fee",
      title: "Flexbox Florist",
      body: "When life's layout gets complicated, send flowers.",
    },
  ];
  let adBox, title, body, timerElem;

  const ad = ads[Math.floor(Math.random() * ads.length)];

  if (replaceBox) {
    adObserver.unobserve(replaceBox);
    adBox = replaceBox;
    title = replaceBox.querySelector(".title");
    body = replaceBox.querySelector(".body");
    timerElem = replaceBox.querySelector(".timer");
  } else {
    adBox = document.createElement("div");
    adBox.className = "ad";
    title = document.createElement("h2");
    body = document.createElement("p");
    timerElem = document.createElement("div");
    adBox.appendChild(title);
    adBox.appendChild(body);
    adBox.appendChild(timerElem);
  }

  adBox.style.backgroundColor = ad.bgcolor;

  title.className = "title";
  body.className = "body";
  title.innerText = ad.title;
  body.innerHTML = ad.body;

  adBox.dataset.totalViewTime = 0;
  adBox.dataset.lastViewStarted = 0;

  timerElem.className = "timer";
  timerElem.innerText = "0:00";

  if (!replaceBox) {
    contentBox.appendChild(adBox);
  }

  adObserver.observe(adBox);
}
```

First is the array `ads`. This array contains the data needed to create each ad. We have four here to choose from at random. In a real-world scenario, of course, the ads would come from a database or, more likely, an advertising service from which you fetch ads using an API. However, our needs are simple: each ad is represented by an object with three properties: a background color (`bgcolor`), a title (`title`), and a body text string (`body`).

Then we define several variables:

- `adBox`
  - : This will be set to the element that represents the ad. For new ads being appended to the page, this is created using {{domxref("Document.createElement()")}}. When replacing an existing ad, this is set to the specified ad element (`replaceBox`).
- `title`
  - : Will hold the {{HTMLElement("Heading_Elements", "h2")}} element representing the ad's title.
- `body`
  - : Will hold the {{HTMLElement("p")}} representing the ad's body text.
- `timerElem`
  - : Will hold the {{HTMLElement("div")}} element which contains the time the ad has been visible so far.

A random ad is selected by computing `Math.floor(Math.random() * ads.length)`; the result is a value between 0 and one less than the number of ads. The corresponding ad is now known as `adBox`.

If a value is specified for `replaceBox`, we use that as the ad element. To do so, we begin by ending observation of the element by calling {{domxref("IntersectionObserver.unobserve()")}}. Then the local variables for each of the elements that comprise an ad: the ad box itself, the title, the body, and the timer box, are all set to the corresponding elements in the existing ad.

If no value is specified for replaceBox, we create a new ad element. The ad's new {{HTMLElement("div")}} element is created and its properties established by setting its class name to `"ad"`. Next, the ad title element is created, along with the body and the visibility timer; these are an {{HTMLElement("Heading_Elements", "h2")}}, a {{HTMLElement("p")}}, and a {{HTMLElement("div")}} element, respectively. These elements are appended to the `adBox` element.

After that, the code paths converge once again. The ad's background color is set to the value specified in the new ad's record, and elements' classes and contents are set appropriately as well.

Next, it's time to set up the custom data properties to track the ad's visibility data by setting `adBox.dataset.totalViewTime` and `adBox.dataset.lastViewStarted` to 0.

Finally, we set the ID of the `<div>` which will show the timer we'll present in the ad to show how long it's been visible, giving it the class `"timer"`. The initial text is set to "0:00", to represent the starting time of 0 minutes and 0 seconds, and it's appended to the ad.

If we're not replacing an existing ad, we need to append the element to the content area of the page using {{domxref("Node.appendChild", "Document.appendChild()")}}. If we're replacing an ad, it's already there, with its contents replaced with the new ad's. Then we call the {{domxref("IntersectionObserver.observe", "observe()")}} method on our Intersection Observer, `adObserver`, to start watching the ad for changes to its intersection with the viewport. From now on, any time the ad becomes 100% obscured or even a single pixel becomes visible, or the ad passes through 75% visible in one way or another, the [observer's callback](#handling_intersection_changes) is executed.

#### Replacing an existing ad

Our [observer's callback](#handling_intersection_changes) keeps an eye out for ads which become 100% obscured and have a total visible time of at least one minute. When that happens, the `replaceAd()` function is called with that ad's element as an input, so that the old ad can be replaced with a new one.

```js
function replaceAd(adBox) {
  updateAdTimer(adBox);

  const visibleTime = adBox.dataset.totalViewTime;
  console.log(
    `Replacing ad: ${
      adBox.querySelector("h2").innerText
    } - visible for ${visibleTime}`,
  );

  loadRandomAd(adBox);
}
```

`replaceAd()` begins by calling `updateAdTimer()` on the existing ad, to ensure that its timer is up-to-date. This ensures that when we read its `totalViewTime`, we see the exact final value for how long the ad was visible to the user. We then report that data; in this case, by logging it to console, but in the real world, you'd submit the information to an ad service's API or save it into a database.

Then we load a new ad by calling [`loadRandomAd()`](#creating_an_ad), specifying the ad to be replaced as an input parameter. As we saw previously, `loadRandomAd()` will replace an existing ad with content and data corresponding to a new ad, if you specify an existing ad's element as an input parameter.

The new ad's element object is returned to the caller in case it's needed.

### Result

The resulting page looks like this. Try experimenting by scrolling up and down and notice how changes in the visibility affect the timers in each ad. Also note that each ad is replaced after one minute of visibility (but the ad must first be scrolled out of view and back again), and how the timers pause while the document is tabbed into the background. However, covering the browser with another window does not pause the timers.

{{EmbedLiveSample("Building_the_site", 750, 800)}}

## See also

- [Intersection Observer API](/en-US/docs/Web/API/Intersection_Observer_API)
- [Page Visibility API](/en-US/docs/Web/API/Page_Visibility_API)
