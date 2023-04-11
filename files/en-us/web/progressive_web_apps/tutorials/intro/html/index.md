---
title: Basic PWA page template
slug: Web/Progressive_web_apps/Tutorials/Intro/HTML
---

PWAs are progressively enhanced web applications. Like most web applications, PWAs are built with HTML, CSS, and JavaScript.

To build our PWA, we need to start with a fully functioning web applications

The first step in this [first PWA tutorial](/en-US/Docs/Web/Progressive_web_apps/tutorials/intro) is to create the HTML and CSS for the menstrual cycle progressive web application. We will create a website that shows a date picture and displays an installation button, using HTML, CSS, and JavaScript. In the rest of the tutorial steps, we will progressively enhance this page to be installable and available offline.

## PWA HTML template

To complete this tutorial, it is helpful to have a basic level of understanding of [HTML](/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics), [CSS](/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics), and [JavaScript](/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics). If you're not familiar with these, MDN is the home of [Getting Started](/en-US/docs/Learn/Getting_started_with_the_web/), an introduction to web development series.

Our PWA site HTML is:

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Cycle Tracker</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="manifest" href="cyclemanifest.json" />
  </head>
  <body>
    <form id="new-period">
      <p>
        <label for="start-date">Start date</label>
        <input type="date" id="start-date" />
      </p>
      <p>
        <label for="end-date">End date</label>
        <input type="date" id="end-date" />
      </p>
      <p>
        <button type="submit">Add Period</button>
      </p>
    </form>
    <button>Install</button>
    <script src="app.js" defer></script>
  </body>
</html>
```

Copy this HTML and save it in a file called `index.html`.

### The HTML, explained

We include a doctype HTML preamble, ensuring the content behaves correctly. Our root {{HTMLelement("html")}} wraps all the content with the [`lang`](/en-US/docs/Web/HTML/Global_attributes/lang) attribute defining the primary language of the page.

### Document head

The {{HTMLelement("head")}} includes all the [meta data,](/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML) including the character set definition which defines the [character encoding](/en-US/docs/Glossary/Character_encoding) and the [viewport](/en-US/docs/Web/HTML/Viewport_meta_tag) {{HTMLelement("meta")}} tag which ensures the page renders at the width of viewport and isn't shrunken down when loaded on very small screens.

```html
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
  </head>
</html>
```

We set the title of the page to "Cycle Tracker" with the {{HTMLelement("title")}} element. The title appears in the browser tab when the page is loaded, in search engine results, and as the title when the user bookmarks the page. While this is a menstrual cycle tracking application, the shortened title is more discreet.

```html
<title>Cycle Tracker</title>
```

We are starting by including two {{HTMLelement("link")}} elements (we will include more when we create the [PWA splash page](/en-US/Docs/Web/Progressive_web_apps/tutorials/intro/splash)):

```html
<link rel="stylesheet" href="style.css" />
<link rel="manifest" href="cyclemanifest.json" />
```

The HTML {{HTMLelement("link")}} element is used to specify a relationship between the current document and an external resource. There are more than 25 defined values for the `rel` attribute – and many more values that are not in any specification.

The most common value, `rel="stylesheet"`, imports an external resource as a stylesheet.

PWAs require a manifest file. The web manifest is an external JSON file. To include the external JSON resource, the `rel="manifest"` is used. The `href` attribute of the `<link>` points to the location of the resource.

The `<link>` element is most commonly used to link to stylesheets and, with PWAs, the required manifest file, but is also used to establish site icons (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things.

Copy the following CSS in a new file and save the file as `style.css`:

```css
body {
  margin: 1vh 1vw;
}
#new-period {
  margin: 2rem 0;
  padding: 1rem;
  background: lemonchiffon;
}
```

The manifest file, which we'll call `cyclemanifest.json`, defines the [PWA icons and appearance](/en-US/Docs/Web/Progressive_web_apps/tutorials/intro/manifest). For now, we include the link as a placeholder.

### Document contents

The {{HTMLelement("body")}} element contains all the content we want to display to our users when they visit the site on the Internet.

Within the `<body>`, we include a {{HTMLelement("form")}}.

Within the form, we include date pickers for the start and end dates for each period. The date pickers are {{HTMLElement("input")}} of type {{HTMLElement("input/date", "date")}}.

Each `<input>` has an [`id`](/en-US/docs/Web/HTML/Attributes/id) attribute matching the [`for`](/en-US/docs/Web/HTML/Attributes/for) attribute of its associated {{HTMLelement("label")}} which provides the `<input>` with an accessible name.

```html
<label for="start-date">Start date</label> <input type="date" id="start-date" />
```

There are two {{HTMLelement("button")}} elements. The first button, found within the form, submits the form.
The second button is a placeholder button that will be programmed to provide an alternative to the default browser PWA installation UI.

```html
<button>Install</button>
```

We will program this button when discussing creating an [offline experience](/en-US/Docs/Web/Progressive_web_apps/tutorials/intro/offline).

Before closing the `</body>`, we include a link to the `app.js` JavaScript file. We defer the loading of this script with the `defer` attribute.

```html
<script src="app.js" defer></script>
```

The `app.js` file will include all the workings of our application, including the event handlers for the submit button, saving the data submitted to local storage, and displaying cycled within the content of the body.

Before creating the app functionality, let's create the [PWA's manifest file](/en-US/Docs/Web/Progressive_web_apps/tutorials/intro/manifest).
