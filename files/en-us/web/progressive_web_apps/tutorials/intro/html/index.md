---
title: Basic PWA page template
slug: Web/Progressive_web_apps/Tutorials/Intro/HTML
---

PWAs are progressively enhanced web applications. Like most web applications, PWAs are built with HTML, CSS, and JavaScript.

To build our PWA, we need to start with a fully functioning web applications

The first step in this [first PWA tutorial](/en-US/Docs/Web/Progressive_web_apps/tutorials/intro) is to create the HTML and CSS for "Cat viewer" progressive web application. We will create a website that shows a picture of a cat with an installation button, using HTML, CSS, and JavaScript. In the rest of the tutorial steps, we will progressively enhance this page to be installable and available offline.

## PWA HTML template

To complete this tutorial, it is helpful to have a basic level of understanding of [HTML](/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics), [CSS](/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics), and [JavaScript](/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics). If you're not familiar with these, MDN is the home of [Getting Started](/en-US/docs/Learn/Getting_started_with_the_web/), an introduction to web development series.

Our PWA site HTML is:

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Pets Unlimited</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="manifest" href="petmanifest.json" />
  </head>
  <body>
    <img src="https://placekitten.com/200/300" alt="A kitten" id="pet" />
    <button>Install</button>
    <script src="script.js" defer></script>
  </body>
</html>
```

We include a doctype HTML preamble, ensuring the content behaves correctly. Our root {{HTMLelement("html")}} wraps all the content with the [`lang`](/en-US/docs/Web/HTML/Global_attributes/lang) attribute defining the primary language of the page. The {{HTMLelement("head")}} includes all the [meta data,](/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML) including the character set definition which defines the [character encoding](/en-US/docs/Glossary/Character_encoding) and the [viewport](/en-US/docs/Web/HTML/Viewport_meta_tag) {{HTMLelement("meta")}} tag which ensures the page renders at the width of viewport and isn't shrunken down when loaded on very small screens.

We set the title of the page to "Pets Unlimited" with the {{HTMLelement("title")}} element. The title appears in the browser tab when the page is loaded, in search engine results, and as the title when the user bookmarks the page.

We are starting by including two {{HTMLelement("link")}} elements (we will include more when we create the [PWA splash page](/en-US/Docs/Web/Progressive_web_apps/tutorials/intro/splash)):

```html
<link rel="stylesheet" href="style.css" />
<link rel="manifest" href="petmanifest.json" />
```

The HTML {{HTMLelement("link")}} element is used to specify a relationship between the current document and an external resource. There are more than 25 defined values for the `rel` attribute, and even more values that are not in any specificiation.

The most common value, `rel="stylesheet"`, imports an external resource as a stylesheet.

PWAs require a manifest file. The web manifest is an external JSON file. To include the external JSON resource, the `rel="manifest"` is used. The `href` attribute of the `<link>` points to location of the resource.

The `<link>` element is most commonly used to link to stylesheets and, with PWAs, the required manifest file, but is also used to establish site icons (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things.

The {{HTMLelement("body")}} element contains all the content we want displayed to our users when they visit the site on the Internet.
