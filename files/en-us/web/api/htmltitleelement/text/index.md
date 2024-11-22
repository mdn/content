---
title: "HTMLTitleElement: text property"
short-title: text
slug: Web/API/HTMLTitleElement/text
page-type: web-api-instance-property
browser-compat: api.HTMLTitleElement.text
---

{{APIRef("HTML DOM")}}

The **`text`** property of the {{domxref("HTMLTitleElement")}} interface represents the plain text content of the document's title. It only contains text; if HTML tags are included within the `title` element, they are treated as plain text rather than being interpreted as HTML.

## Value

A string.

## Examples

Consider the example below:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <title>
      Hello world! <span class="highlight">Isn't this wonderful</span> really?
    </title>
  </head>
  <body></body>
</html>
```

```js
const title = document.querySelector("title");
console.log(title.text); // yield: "Hello world! <span class="highlight">Isn't this wonderful</span> really?"
```

As you can see, the `span` tag and its content were treated as plain text and displayed exactly as they appear in the `title` element, rather than being processed as HTML.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
