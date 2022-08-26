---
title: Document.lastModified
slug: Web/API/Document/lastModified
page-type: web-api-instance-property
tags:
  - API
  - Document
  - HTML DOM
  - NeedsSpecTable
  - Property
  - Reference
browser-compat: api.Document.lastModified
---
{{APIRef("DOM")}}

The **`lastModified`** property of the {{domxref("Document")}}
interface returns a string containing the date and time on which the current document
was last modified.

## Value

A string.

## Examples

### Simple usage

This example alerts the value of `lastModified`.

```js
alert(document.lastModified);
// returns: Tuesday, December 16, 2017 11:09:42
```

### Transforming lastModified into a Date object

This example transforms `lastModified` into a {{jsxref("Date")}} object.

```js
let oLastModif = new Date(document.lastModified);
```

### Transforming lastModified into milliseconds

This example transforms `lastModified` into the number of milliseconds since
January 1, 1970, 00:00:00, local time.

```js
let nLastModif = Date.parse(document.lastModified);
```

## Notes

Note that as a string, `lastModified` cannot _easily_ be used for
comparing the modification dates of documents. Here is a possible example of how to show
an alert message when the page changes (see also: [JavaScript cookies API](/en-US/docs/Web/API/Document/cookie)):

```js
if (Date.parse(document.lastModified) > parseFloat(document.cookie.replace(/(?:(?:^|.*;)\s*last_modif\s*=\s*([^;]*).*$)|^.*$/, "$1") || "0")) {
  document.cookie = `last_modif=${Date.now()}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=${location.pathname}`;
  alert("This page has changed!");
}
```

…the same example, but skipping the first visit:

```js
const lastVisit = parseFloat(document.cookie.replace(/(?:(?:^|.*;)\s*last_modif\s*=\s*([^;]*).*$)|^.*$/, "$1"));
const lastModif = Date.parse(document.lastModified);

if (isNaN(lastVisit) || lastModif > lastVisit) {
  document.cookie = `last_modif=${Date.now()}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=${location.pathname}`;

  if (isFinite(lastVisit)) {
    alert("This page has been changed!");
  }
}
```

> **Note:** WebKit returns the time string in UTC; Gecko and
> Internet Explorer return a time in the local timezone. (See: [Bug 4363 – document.lastModified returns date in UTC time, but should return it in local time](https://bugs.webkit.org/show_bug.cgi?id=4363))

If you want to know **whether _an external page_ has changed**,
please read [this paragraph about the `XMLHttpRequest()` API](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#get_last_modified_date).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
