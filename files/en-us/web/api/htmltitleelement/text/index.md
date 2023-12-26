---
title: "HTMLTitleElement: text property"
short-title: text
slug: Web/API/HTMLTitleElement/text
page-type: web-api-instance-property
browser-compat: api.HTMLTitleElement.text
---

{{APIRef("HTML DOM")}}

The **`text`** property of the {{domxref("HTMLTitleElement")}} interface represents the text of the document's title. Only the text part is included; tags within the element and their content are stripped and ignored.

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
console.log(title.text); // yield: "Hello world!  really?"
```

As you can see, the tag `span` and its content were skipped.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
