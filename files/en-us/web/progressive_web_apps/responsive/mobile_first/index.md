---
title: Mobile first
slug: Web/Progressive_web_apps/Responsive/Mobile_first
tags:
  - Apps
  - CSS
  - Development
  - HTML
  - Java
  - JavaScript
  - Mobile
  - Mobile Development
  - Mobile first
---
This article provides a guide to implementing a website layout that follows the principle of **mobile first**. This means creating a layout where the default configuration is for narrow screen/mobile devices, and layout features for wider viewports are then layered on top of that default.

## First things first — mobile as a default

You may think that concentrating on the mobile experience first sounds pointless, as we are more used to dealing with desktop sites, and we surely need to consider the full gamut of features for the overall experience across desktop, mobile, etc., before then paring it down to a mobile experience that is simpler, more streamlined, or whatever. This rings true, yes, but in our experience mobile first is more about having the mobile implementation as a default layer to build on.

We consider the overall experience during the planning stage, look at what subset of features will be available on mobile, desktop, etc. in tandem and how they will be implemented. Then at implementation stage, we present the mobile layout and functionality as the default configuration provided, before additional information is loaded on top of that, whenever appropriate. This means that mobiles (often the target devices with the least available memory, bandwidth or processing power available) can be given an experience suitable for them as quickly as possible, and as free as possible of extraneous information. For example:

- If you are serving different styling and layout information for different viewport sizes, etc., it makes more sense to include the narrow screen/mobile styling as the default styling before any media queries are encountered, rather than having desktop/wider screen styling first. This way, mobile devices don't have to load assets and other information twice.
- If you are using mechanisms like feature detection and [matchMedia](/en-US/docs/Web/API/Window/matchMedia) to conditionally load scripting functionality depending on viewport size, feature support, etc., you should just load the very basics that pretty much all browsers will need first, then progressively enhance browsers higher up the food chain.

> **Note:** Starting with very little and working up as the need arises usually makes more sense than starting with everything and then covering up things if they aren't needed!

## Mobile constraints

We have already mentioned the fact that mobiles generally have less memory, processing power and bandwidth than other devices (although bear in mind that smart TVs are also generally pretty low powered.) They also have less viewport size available. Therefore, as well as splitting content into different views, and simplifying the interface and content on each view of your application for mobile as much as possible, it is also a good idea to not include visual effects such as shadows, animations, and gradients. You should at least consider it as an option, especially if you are experiencing slow or laggy performance when your application is running on mobile.

### Control mechanisms

Control mechanisms are another large constraint on mobile devices. Anyone who has ever tried to enter data into a form on a mobile device, or even just navigated around a complex site, knows this well. Therefore we should try to simplify things on mobile, keeping each view cut down to a single, simple purpose where possible, and reducing the amount of typing users are expected to do. The latter will please desktop users as well as mobile users!

### Usage context

On top of everything else, you must consider the kinds of situations mobile devices will be used in, and the kinds of tasks users most commonly want to perform on mobiles. A phrase you'll read in a few places is "one eyeball, one thumb", referring to how much of the user's attention you are likely to have. Of course, your users will be concentrating on what they're doing, but they are likely to be in a car with bad lighting, or in a noisy bar with the sport on TV in the background! You need to consider this, and again make sure your content/functionality is simple, legible and distraction-free as much as possible.

### Mobile navigation

When developing mobile app layouts, you often run into problems with navigation menus. The concept is the same regardless of the target device — you want to provide a mechanism for users to search for things and get to different views/pages of the application — but because mobile screens are so much smaller, a reasonable desktop navigation can spoil the experience by filling up most of the initial view of the app, covering up the content.

There are several ways to solve the problem of navigation getting in the way on mobile, a few of which I'll discuss here. The main objective is to put the content first and to hide away the navigation until the user really needs it.

First of all, you can consider a different navigation mechanism on mobile. So, if you were planning to have a vertical navigation menu on desktop, you might replace this on mobile with a select menu containing the options, or even a single button that when pressed brings the navigation options up in an overlay.

Second, a popular option is to put the navigation menu down at the bottom of the page rather than up at the top as the expectation would commonly be. This puts the content first at the top of the page and means that when the user has reached the end of a page, they have a signpost giving them an idea of where to go next.

Third, combining the two is also a good option — why not have a single button at the top of the page, which links to an anchor on the nav menu at bottom of the page? You could then also provide a link to get back up to the top of the article.

## Conditional resource loading

To actually implement responsive/adaptive designs, you will need to enlist a certain amount of conditional resource loading, again so that different devices can receive an optimal experience without having to shoulder the burden of many resources that they don't need. See below for more details.

## A simple example

To demonstrate the concepts, I wanted to cover in this article, I created a very simple app containing a nav menu, heading and single column of text. You can see my [mobile first example running live](https://chrisdavidmills.github.io/good-read/www/), or grab the code to [play with it on GitHub](https://github.com/chrisdavidmills/good-read). To make my simple example I created a sample app structure from a [Mozilla Mortar](https://github.com/mozilla/mortar) template. I installed the Volo automation tool by running the following on the command line

```bash
sudo npm install -g volo
```

(You'll also need to [get Node.js](https://nodejs.org/download/) too if you don't already have it)

I then created my sample project using

```bash
volo create myapp mozilla/mortar-app-stub
```

This creates a sample project inside a directory called myapp. The app's code files are inside the www folder. Volo has a number of useful commands available, of which we will just use a couple:

- `volo server`: starts a local web server at localhost:8080 and runs your app through it: great for easy testing.
- `volo build`: builds a minified code version of your app, ready for production deployment, in a www-built folder.
- `volo build base=www-built`: runs the built version through the server instead of the development version.

### Built-in features of the Mortar template

Mortar templates contain a number of built-in features. In this sample app, I have used a couple of the built-in features to:

- Include an install button that works for Firefox OS, Firefox Aurora, Chrome and iOS app installs (as explained on the [Install GitHub page](https://github.com/wavysandbox/install/blob/master/README.md)). To make the install button work, all you have to do is put a `<button>` on the page with an ID of `install-btn`. Magic!
- Selectively include JavaScript libraries according to media query and feature tests ([require.js](https://requirejs.org/) is built in, which is helpful and very easy to use.)

### HTML structure

For this example app, the HTML structure is going to be very simple: I am just including a heading, navigation menu and filler text to highlight the fact that articles can get very long on narrow screen devices. Our HTML looks like this:

```html
<article>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Articles</a></li>
      <li><a href="#">Videos</a></li>
      <li><a href="#">Work</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>

  <header>
    <a id="top" href="#bottom">Jump to menu</a>
    <h1>My article</h1>
  </header>

  <div class="main">
    <p>Lorem ipsum …</p>
    <a id="bottom" href="#top">Back to top</a>
  </div>
</article>

<button id="install-btn">Install</button>
```

### Default mobile CSS

For the CSS, I first added some styles into our app.css stylesheet to provide a reasonable narrow-screen layout. There is very little going on here, and anyone with a basic understanding of CSS should be able to understand most of it by just looking at the source code in app.css. Particular bits of interest to point out are as follows.

```css
article {
  display: table;
}

nav {
  display: table-caption;
  caption-side: bottom;
}
```

This is a rather nice hacky bit of CSS you can use to make the navigation menu display at the bottom, even though it is at the top in the source order. And it works in IE8+. `display: table` makes the `<article>` and its children display in a table layout, without abusing table markup. `display: table-caption` makes the `<nav>` element think it's the caption of the table, and `caption-side: bottom` makes it jump down to the bottom of the table.

One word of warning about this technique though - positioning doesn't work as expected on elements with `display: table` set on them. I have included two links in my markup:

```html
<a id="top" href="#bottom">Jump to menu</a>

…

<a id="bottom" href="#top">Back to top</a>
```

The first one is to jump down from the top of the article to the navigation menu, and the second one is to jump back up to the top of the article again. I had to make sure both of these were NOT direct children of the `<article>`, otherwise the following would not work:

```css
#bottom,
#top {
  font-size: 0.8em;
  position: absolute;
  right: 1em;
  text-decoration: none;
}

#top {
  color: white;
  top: 0.5em;
}

#bottom {
  bottom: 0.5em;
}
```

I also set their parents to be positioned relatively, so they would become the positioning contexts of the absolutely positioned elements (you don't want them to be positioned relative to the `<body>` element.)

### Adding a mobile first layout

The above layout is fine for narrower layouts, but it doesn't work very well when you get wider than about 480px. To create something more suitable for desktop, I put in the following media queries:

```css
@media (min-width: 480px) {
  #bottom,
  #top {
    display: none;
  }

  article,
  nav {
    display: block;
  }

  nav ul {
    text-align: center;
  }

  nav li {
    display: inline;
  }

  nav li a {
    border-right: 1px solid #AD66D5;
    border-bottom: none;
    display: inline-block;
    padding: 0 5px;
    font-size: 1.6em;
  }

  nav li:last-child a {
    border-right: none;
  }
}

@media (min-width: 600px) {
  html {
    background: #eee;
    height: 100%;
  }

  body {
    width: 600px;
    height: inherit;
    margin: 0 auto;
    background: url(../img/firefox-os.png) bottom left no-repeat, linear-gradient(to bottom, #fff, #eee);
  }

  .main > p {
    background: rgba(255, 255, 255, 0.3);
  }

  nav li a {
    padding: 0 10px;
    font-size: 2em;
  }
}
```

The first one cancels out the CSS `display: table` behavior, hides the links to jump to and from the navigation, as they are not needed anymore in the wider layout, and changes the vertical menu to a horizontal menu that makes better use of the horizontal space available.

The second one sets the width of the content at 600px and centers it in the space available, then adds in a gradient and a nice background image for the wider layout. This is a key point - the background image is 126KB, and not ideal for narrow layouts. Having it included in the "600 pixels or wider" media query means that narrow screen devices won't read that media query, so they will not waste their time and bandwidth downloading that image.

> **Note:** Firefox's Responsive Design View is a great way to get a quick idea of how your media queries are behaving themselves. Try it out with Tools > Web Developer > Responsive Design View.

### Feature detection

Feature detection involves doing tests (usually in JavaScript) to determine whether a browser supports a certain feature, and then serving CSS or JavaScript to suit that situation. This can be very useful for mobile first, as you may well want to hide bits of code from the "mobile version" and only include them for the "desktop version", or vice versa.

You can write your own feature detects (Mark Pilgrim's [All-In-One Almost-Alphabetical Guide to Detecting Everything](http://diveintohtml5.info/everything.html) is a good start), but really it is much better to use a dedicated existing solution, such as [Modernizr](https://modernizr.com/). Modernizr is a good choice as it not only includes a feature detect for just about everything (CSS, modern HTML features, some other bits besides), it is also fairly reliable, and you can create your own custom version with only the feature detects you need in it, using the [Modernizr Download Builder](https://modernizr.com/download/). The full uncompressed Modernizr library is 42KB, but the version we are using in this demo is only 8KB.

I put Modernizr inside my `js/lib` directory, then included it by putting the following construct inside my HTML file:

```html
<script src="js/lib/modernizr.js"></script>
```

With Modernizr in place, we can now use the following JS block to test whether media queries are supported, and if not, to load in [respond.js](https://github.com/scottjehl/Respond), Scott Jehl's `matchMedia` and media query polyfill.

```js
if (!Modernizr.mq('only all')) {
  require('respond');
}
```

`matchMedia` is also very useful in many other ways. Imagine you wanted to include some kind of WebGL chart in the desktop version of the site requiring a WebGL library like Three but didn't want it included in the mobile version? You could create a block to only load the library in the case of narrow screen devices:

```js
if (window.matchMedia("(min-width: 481px)").matches) {
  require('three');
}
```

We can, therefore, save the bandwidth for browsers that don't need it.

#### Modernizr CSS and JavaScript

Back to Modernizr! The reason why it is so useful is that it provides a mechanism to selectively serve both CSS and JavaScript. Modernizr stores the results of all its feature tests as classes on the HTML element. For example, the Modernizr in our example app is testing for multiple background image and rgba support. When they are not supported, the `<html>` tag looks like this:

```html
<html class="js no-rgba no-multiplebgs">
```

When these are present, we can serve alternative styling rules to provide sensible fallbacks using descendant selectors — see the following in my code.

```css
.no-multiplebgs body {
  background: white;
}

.no-rgba .main > p {
  background: white;
}
```

This is not hugely pretty, but it does make the main content area more readable on browsers that don't support either or both of these features.

Modernizr also puts its feature detect results in a JavaScript `Modenizr` object too, so that you can run JavaScript code selectively depending on feature support. For example, you could do this:

```js
if (Modernizr.rgba) {
  // run code that depends on RGBA colors being supported.
}
```

## Google searches and mobile preference

Since April 21, 2015, Google's algorithm gives pages that display well on mobile devices priority over those that do not on searches made from mobile devices.
