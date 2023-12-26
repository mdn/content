---
title: "HTMLTitleElement: text property"
short-title: text
slug: Web/API/HTMLTitleElement/text
page-type: web-api-instance-property
browser-compat: api.HTMLTitleElement.text
---

{{APIRef("HTML DOM")}}

The **`text`** property of the {{domxref("HTMLTitleElement")}} interface representing the text of the document's title, and only the text part, tags within the element are ignored.

## Value

A string.

## Examples

Consider this:

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
