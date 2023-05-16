---
title: Basic PWA page template
slug: Web/Progressive_web_apps/Tutorials/Intro/HTML
---

We will create a website that shows a date picture and displays an installation button, using HTML, CSS, and JavaScript. In the rest of the tutorial steps, we will progressively enhance this page to be installable and available offline.

PWAs are progressively enhanced web applications. Like most web applications, PWAs are built with HTML, CSS, and JavaScript.

To build our PWA, we need to start with a fully-functioning web application. In this section, we will create a basic web application by:

1. create HTML markup for a static web page
2. enhance the appearance of the static content with CSS
3. add JavaScript functionality to create a basic web application

The first step in this [first PWA tutorial](/en-US/Docs/Web/Progressive_web_apps/tutorials/intro) is to create the HTML, CSS and basic JavaScript for the menstrual cycle progressive web application. In the following sections we'll convert that basic web application into a PWA.

## HTML template

To complete this tutorial, it is helpful to have a basic level of understanding of [HTML](/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics), [CSS](/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics), and [JavaScript](/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics). If you're not familiar with these, MDN is the home of [Getting Started](/en-US/docs/Learn/Getting_started_with_the_web/), an introduction to web development series.

Our static site HTML, with placeholder links for a stylesheet and JavaScript file, is:

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Cycle Tracker</title>
    <link rel="stylesheet" href="style.css" />
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

Before we add some [hard-coded fake menstrual cycles](#Placeholder_text) to enable styling our form, let's discuss this HTML content.

### The HTML, explained

We include a doctype HTML preamble, ensuring the content behaves correctly.

```html
<!DOCTYPE html>
```

The root {{HTMLelement("html")}} tags wrap all the content with the [`lang`](/en-US/docs/Web/HTML/Global_attributes/lang) attribute defining the primary language of the page.

 ```html
<!DOCTYPE html>
<html lang="en-US">
</html>
```

### Document head

The {{HTMLelement("head")}} includes all the [meta data,](/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML) including the character set definition which defines the [character encoding](/en-US/docs/Glossary/Character_encoding) and the [viewport](/en-US/docs/Web/HTML/Viewport_meta_tag) {{HTMLelement("meta")}} tag which ensures the page renders at the width of viewport and isn't shrunken down when loaded on very small screens.

```html
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
  </head>
```

We set the title of the page to "Cycle Tracker" with the {{HTMLelement("title")}} element. The title appears in the browser tab when the page is loaded, in search engine results, and as the title when the user bookmarks the page. While this is a menstrual cycle tracking application, the shortened title is more discreet.

```html
<title>Cycle Tracker</title>
```

We are starting by including a {{HTMLelement("link")}} element to our yet-to-be-written stylesheet.

```html
<link rel="stylesheet" href="style.css" />
```

The HTML {{HTMLelement("link")}} element is used to specify a relationship between the current document and an external resource. There are more than 25 defined values for the `rel` attribute – and many more values that are not in any specification. The most common value, `rel="stylesheet"`, imports an external resource as a stylesheet. We will [create the `style.css` file](#CSS_file) after discussing the rest of the HTML.

The `<head>` currently contains the following HTML:

```html
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Cycle Tracker</title>
    <link rel="stylesheet" href="style.css" />
  </head>
```

The `<head>` contains meta content which is not visible to the user, with the exception of the `<title>` contents, which may be displayed as the heading of the browser tab.

### Document contents

The {{HTMLelement("body")}} element contains all the content we want to display to our users when they visit the site on the Internet.

Within the `<body>`, we include the name of the PWA as a level-1 heading using {{HTMLelement("h1")}} and a {{HTMLelement("form")}}.

```html
<body>
  <h1>Period tracker</h1>
  <form>
  </form>
</body>
```

Within the `<form>`, we include a {{HTMLelement("fieldset")}} with a {{HTMLelement("legend")}} labeling the purpose of that section of the form. Within the `<fieldset>`, we include two paragraphs ({{HTMLelement("p")}}), each with a date picker along with their associated {{HTMLelement("label")}} for the start and end dates of each menstrual cycle.

The date pickers are {{HTMLElement("input")}} of type {{HTMLElement("input/date", "date")}}. {{HTMLelement("")}} {{HTMLelement("")}}

To associate a `<label>` with a form control, each `<input>` has an [`id`](/en-US/docs/Web/HTML/Attributes/id) attribute matching the [`for`](/en-US/docs/Web/HTML/Attributes/for) attribute of the associated {{HTMLelement("label")}} which provides the `<input>` with an accessible name.

```html
<label for="start-date">Start date</label> <input type="date" id="start-date" />
```

We include a {{HTMLelement("button")}} element which submits the form and label the button "Add period" by including that text between the opening and closing tags.

```html
<form>
  <fieldset>
    <legend>Enter your period start and end date</legend>
    <p>
      <label for="start-date">Start date</label>
      <input type="date" id="start-date" />
    </p>
    <p>
      <label for="end-date">End date</label>
      <input type="date" id="end-date" />
    </p>
  </fieldset>
  <p>
    <button type="submit">Add Period</button>
  </p>
</form>
```

If this HTML is new to you, [learn more about making accessible web forms](/en-US/docs/Learn/Forms).

When creating an [offline experience](/en-US/Docs/Web/Progressive_web_apps/tutorials/intro/offline) we will add another `<button>` that will be programmed to provide an alternative to the default browser PWA installation UI.

### Placeholder text

When the user submits the form, we will use JavaScript to capture the data and present a list of past periods along with a header for that list. You can hardcode placeholder content to test out the CSS and then remove it.

```html
<h2>Past periods</h2>
<ul>
  <li>From 01/01/2024 to 01/06/2024</li>
  <li>From 01/29/2024 to 03/04/2024</li>
</ul>
```

### JavaScript placeholder

Before closing the `</body>`, we include a link to the `app.js` JavaScript file. We defer the loading of this script with the `defer` attribute.

```html
<script src="app.js" defer></script>
```

The `app.js` file will include all the workings of our application, including the event handlers for the submit button, saving the data submitted to local storage, and displaying cycled within the content of the body.

The [HTML file for this step](step.html) is complete.

## CSS file

Copy the following CSS in a new file and save the file as [`style.css`](style.css):

```css
body {
  margin: 1vh 1vw;
  background-color: #efe;
}
ul, fieldset, legend {
  border: 1px solid;
  background-color: #fff;
}
ul {
  padding: 0;
  font-family: monospace;
}
li,
legend {
  list-style-type: none;
  padding: 0.2em 0.5em;
  background-color: #cfc;
}
li:nth-of-type(even) {
  background-color: inherit;
}
```

If any of the above CSS looks unfamiliar to you, look up the [CSS property](/en-US/docs/Glossary/Property/CSS), or the [type](/en-US/docs/Web/CSS/Type_selectors) or [`:nth-of-type()`](/en-US/docs/Web/CSS/:nth-of-type) pseudo-class [selector](/en-US/docs/Web/CSS/CSS_Selectors).

With the `index.html` updated, and the `style.css` housed in the same directory, viewing the page in a narrow browser window should look similar to this screenshot:

![Light green web page with a large header, a form with a legend, two date pickers and a button. The bottom shows two placeholder menstrual cycles and a header.](html.jpg)

Before moving on, [comment](/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started#html_comments) out or delete the placeholder text:

```html
<!--
<h2>Past periods</h2>
<ul>
  <li>From 01/01/2024 to 01/06/2024</li>
  <li>From 01/29/2024 to 03/04/2024</li>
</ul>
-->
```

### Up next

A PWA is a progressive web application. At it's core, it is a web application that is progressively enhanced to work offline. Before adding the features required to convert into a PWA, including the [manifest file](/en-US/Docs/Web/Progressive_web_apps/tutorials/intro/manifest), [secure connection](/en-US/Docs/Web/Progressive_web_apps/tutorials/intro/secure), and [service worker](/en-US/Docs/Web/Progressive_web_apps/tutorials/intro/service_worker), we have to make this application work.

Up next we will create the [basic JavaScript functionality](/en-US/Docs/Web/Progressive_web_apps/tutorials/intro/html) by writing `app.js` to include the basic JavaScript functionality, so we have a functioning application that can be progressively enhanced into a PWA.
