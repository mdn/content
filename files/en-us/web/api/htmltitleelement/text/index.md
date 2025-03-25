---
title: "HTMLTitleElement: text property"
short-title: text
slug: Web/API/HTMLTitleElement/text
page-type: web-api-instance-property
browser-compat: api.HTMLTitleElement.text
---

{{APIRef("HTML DOM")}}

The **`text`** property of the {{domxref("HTMLTitleElement")}} interface represents the child text content of the document's title as a string. It contains the {{HTMLelement("title")}} element's content as text; if HTML tags are included within the `<title>` element, they are included as part of the string value rather than being parsed as HTML.

Setting a value for the `text` property replaces the entire text contents of the `<title>`.

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
console.log(title.text); // "Hello world! <span class="highlight">Isn't this wonderful</span> really?"
title.text = "Update the title";
```

As you can see, the `span` tag remained unparsed; the `<title>` element's contents were treated as plain text and returned exactly as they appear in the `title` element.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
