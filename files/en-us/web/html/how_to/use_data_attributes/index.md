---
title: Use data attributes
slug: Web/HTML/How_to/Use_data_attributes
page-type: how-to
sidebar: htmlsidebar
---

HTML is designed with extensibility in mind for data that should be associated with a particular element but need not have any defined meaning. [`data-*` attributes](/en-US/docs/Web/HTML/Reference/Global_attributes/data-*) allow us to store extra information on standard, semantic HTML elements without other hacks such as non-standard attributes, or extra properties on DOM.

## HTML syntax

The syntax is simple. Any attribute on any element whose attribute name starts with `data-` is a data attribute. Say you have some articles and you want to store some extra information that doesn't have any visual representation. Just use `data` attributes for that:

```html
<main>
  <article
    id="electric-cars"
    data-columns="3"
    data-index-number="12314"
    data-parent="cars">
    <!-- Electric car content -->
  </article>

  <article
    id="solar-cars"
    data-columns="3"
    data-index-number="12315"
    data-parent="cars">
    <!-- Solar car content -->
  </article>

  <article
    id="flying-cars"
    data-columns="4"
    data-index-number="12316"
    data-parent="cars">
    <!-- Flying car content -->
  </article>
</main>
```

## JavaScript access

Reading the values of these attributes out in [JavaScript](/en-US/docs/Web/JavaScript) is also very simple. You could use {{domxref("Element.getAttribute", "getAttribute()")}} with their full HTML name to read them, but the standard defines a simpler way: a {{domxref("DOMStringMap")}} you can read out via a {{domxref("HTMLElement/dataset", "dataset")}} property.

To get a `data` attribute through the `dataset` object, get the property by the part of the attribute name after `data-` (note that dashes are converted to {{Glossary("camel_case", "camel case")}}).

```js
const article = document.querySelector("#electric-cars");
// The following would also work:
// const article = document.getElementById("electric-cars")

article.dataset.columns; // "3"
article.dataset.indexNumber; // "12314"
article.dataset.parent; // "cars"
```

Each property is a string and can be read and written. In the above case setting `article.dataset.columns = 5` would change that attribute to `"5"`.

You can also use [`document.querySelector()`](/en-US/docs/Web/API/Document/querySelector) or [`document.querySelectorAll()`](/en-US/docs/Web/API/Document/querySelectorAll) with data attribute selectors to find one element or all elements that match:

```js
// Find all elements with a data-columns attribute
const articles = document.querySelectorAll("[data-columns]");

// Find all elements with data-columns="3"
const threeColumnArticles = document.querySelectorAll('[data-columns="3"]');
// You can then iterate over the results
threeColumnArticles.forEach((article) => {
  console.log(article.dataset.indexNumber);
});
```

## CSS access

Note that, as data attributes are plain HTML attributes, you can even access them from [CSS](/en-US/docs/Web/CSS). For example to show the parent data on the article you can use [generated content](/en-US/docs/Web/CSS/Reference/Properties/content) in CSS with the {{cssxref("attr()")}} function:

```css
article::before {
  content: attr(data-parent);
}
```

You can also use the [attribute selectors](/en-US/docs/Web/CSS/Reference/Selectors/Attribute_selectors) in CSS to change styles according to the data:

```css
article[data-columns="3"] {
  width: 400px;
}
article[data-columns="4"] {
  width: 600px;
}
```

Data values are strings. Number values must be quoted in the selector for the styling to take effect.

## Examples

### Style variants

Imagine you have a `callout` class. Now you want to implement different variants, such as "note" and "warning". Traditionally, people just use different class names.

```html
<div class="callout callout--note">...</div>
<div class="callout callout--warning">...</div>
```

```css
.callout {
  margin: 0.5em 0;
  padding: 0.5em;
  border-radius: 4px;
  border-width: 2px;
  border-style: solid;
}

.callout--note {
  border-color: rgb(15 15 235);
  background-color: rgb(15 15 235 / 0.2);
}
.callout--warning {
  border-color: rgb(235 15 15);
  background-color: rgb(235 15 15 / 0.2);
}
```

With data attributes, here's an alternative you can consider:

```html live-sample___callout-data-attr
<div class="callout">...</div>
<div class="callout" data-variant="note">...</div>
<div class="callout" data-variant="warning">...</div>
```

```css live-sample___callout-data-attr
.callout {
  margin: 0.5em 0;
  padding: 0.5em;
  border-radius: 4px;
  border-width: 2px;
  border-style: solid;
}

/* Default style */
.callout:not([data-variant]) {
  border-color: rgb(15 15 15);
  background-color: rgb(15 15 15 / 0.2);
}
.callout[data-variant="note"] {
  border-color: rgb(15 15 235);
  background-color: rgb(15 15 235 / 0.2);
}
.callout[data-variant="warning"] {
  border-color: rgb(235 15 15);
  background-color: rgb(235 15 15 / 0.2);
}
```

{{EmbedLiveSample("callout-data-attr", "", "200")}}

There are multiple benefits of this:

- It eliminates a lot of invalid states, such as applying `callout--note` without also adding `callout`, or applying multiple variants simultaneously.
- A separate `data-variant` attribute allows static analysis for valid values via linting or type checking.
- Toggling the variant is more intuitive: you can use `div.dataset.variant = "warning";` instead of manipulating the [`classList`](/en-US/docs/Web/API/Element/classList) which requires multiple steps.

### Associating arbitrary data with DOM elements

Many web apps have JavaScript data as the source-of-truth for their UI state. In these cases, you only add HTML attributes necessary for rendering. Data attributes are useful in the cases where everything is present in the markup, and JavaScript is only needed for handling events, syncing state, etc.

For example, in our [carousel with scroll margin](/en-US/docs/Web/API/IntersectionObserver/scrollMargin#carousel_with_scroll_margin) example, we have an HTML page already populated with many `<img>` elements. The image's source is initially stored in `data-src` to prevent any request being fired, and the real `src` is only added when the `<img>` scrolls into view. The data (image source) is colocated with the element, and the JavaScript is only responsible for defining behavior.

## Issues

Do not store content that should be visible and accessible in data attributes, because assistive technology may not access them. In addition, search crawlers may not index data attributes' values. Often, if you only intend for the data attribute to be displayed, you can directly manipulate [`textContent`](/en-US/docs/Web/API/Node/textContent).

## See also

- This article is adapted from [Using data attributes in JavaScript and CSS on hacks.mozilla.org](https://hacks.mozilla.org/2012/10/using-data-attributes-in-javascript-and-css/).
- Custom attributes are also supported in SVG 2; see {{domxref("HTMLElement.dataset")}} and {{SVGAttr("data-*")}} for more information.
- [How to use HTML data attributes](https://www.sitepoint.com/how-why-use-html5-custom-data-attributes/) (Sitepoint)
