---
title: Using data attributes
slug: Learn/HTML/Howto/Use_data_attributes
tags:
  - Custom Data Attributes
  - Example
  - Guide
  - HTML
  - Web
---
{{LearnSidebar}}

[HTML5](/en-US/docs/Glossary/HTML5) is designed with extensibility in mind for data that should be associated with a particular element but need not have any defined meaning. [`data-*` attributes](/en-US/docs/Web/HTML/Global_attributes/data-*) allow us to store extra information on standard, semantic HTML elements without other hacks such as non-standard attributes, or extra properties on DOM.

## HTML syntax

The syntax is simple. Any attribute on any element whose attribute name starts with `data-` is a data attribute. Say you have an article and you want to store some extra information that doesn't have any visual representation. Just use `data` attributes for that:

```html
<article
  id="electric-cars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars">
…
</article>
```

## JavaScript access

Reading the values of these attributes out in [JavaScript](/en-US/docs/Web/JavaScript) is also very simple. You could use {{domxref("Element.getAttribute", "getAttribute()")}} with their full HTML name to read them, but the standard defines a simpler way: a {{domxref("DOMStringMap")}} you can read out via a {{domxref("HTMLElement/dataset", "dataset")}} property.

To get a `data` attribute through the `dataset` object, get the property by the part of the attribute name after `data-` (note that dashes are converted to camelCase).

```js
const article = document.querySelector('#electric-cars');
// The following would also work:
// const article = document.getElementById("electric-cars")

article.dataset.columns // "3"
article.dataset.indexNumber // "12314"
article.dataset.parent // "cars"
```

Each property is a string and can be read and written. In the above case setting `article.dataset.columns = 5` would change that attribute to `"5"`.

## CSS access

Note that, as data attributes are plain HTML attributes, you can even access them from [CSS](/en-US/docs/Web/CSS). For example to show the parent data on the article you can use [generated content](/en-US/docs/Web/CSS/content) in CSS with the [`attr()`](/en-US/docs/Web/CSS/attr) function:

```css
article::before {
  content: attr(data-parent);
}
```

You can also use the [attribute selectors](/en-US/docs/Web/CSS/Attribute_selectors) in CSS to change styles according to the data:

```css
article[data-columns='3'] {
  width: 400px;
}
article[data-columns='4'] {
  width: 600px;
}
```

You can see all this working together [in this JSBin example](https://jsbin.com/ujiday/2/edit).

Data attributes can also be stored to contain information that is constantly changing, like scores in a game. Using the CSS selectors and JavaScript access here this allows you to build some nifty effects without having to write your own display routines. See [this screencast](https://www.youtube.com/watch?v=On_WyUB1gOk) for an example using generated content and CSS transitions ([JSBin example](https://jsbin.com/atawaz/3/edit)).

Data values are strings. Number values must be quoted in the selector for the styling to take effect.

## Issues

Do not store content that should be visible and accessible in data attributes, because assistive technology may not access them. In addition, search crawlers may not index data attributes' values.

The main issues to consider are Internet Explorer support and performance. Internet Explorer 11+ provides support for the standard, but all earlier versions [do not support `dataset`](https://caniuse.com/#feat=dataset). To support IE 10 and under you need to access data attributes with {{domxref("Element.getAttribute", "getAttribute()")}} instead. Also, the performance of reading `data-*` attributes compared to storing the data in a regular JavaScript object is poor.

That said, though, for custom element-associated metadata, they are a great solution.

In Firefox 49.0.2 (and perhaps earlier/later versions), the data attributes that exceed 1022 characters will not be read by JavaScript (ECMAScript 4).

## See also

- This article is adapted from [Using data attributes in JavaScript and CSS on hacks.mozilla.org](https://hacks.mozilla.org/2012/10/using-data-attributes-in-javascript-and-css/).
- Custom attributes are also supported in SVG 2; see {{domxref("SVGElement.dataset")}} and {{SVGAttr("data-*")}} for more information.
- [How to use HTML data attributes](https://www.sitepoint.com/use-html5-data-attributes/) (Sitepoint)
