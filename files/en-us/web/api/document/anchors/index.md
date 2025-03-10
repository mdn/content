---
title: "Document: anchors property"
short-title: anchors
slug: Web/API/Document/anchors
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.Document.anchors
---

{{APIRef("DOM")}} {{Deprecated_Header}}

The **`anchors`** read-only property of the
{{domxref("Document")}} interface returns a list of all of the anchors in the document.

## Value

An {{domxref("HTMLCollection")}}.

## Examples

```js
if (document.anchors.length >= 5) {
  console.log("found too many anchors");
}
```

The following is an example that auto populates a Table of Contents with every anchor
on the page:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Test</title>
    <script>
      function init() {
        const toc = document.getElementById("toc");
        for (const anchor of document.anchors) {
          const li = document.createElement("li");
          const newAnchor = document.createElement("a");
          newAnchor.href = "#" + anchor.name;
          newAnchor.textContent = anchor.text;
          li.appendChild(newAnchor);
          toc.appendChild(li);
        }
      }
    </script>
  </head>
  <body onload="init()">
    <h1>Title</h1>
    <h2><a name="contents">Contents</a></h2>
    <ul id="toc"></ul>

    <h2><a name="plants">Plants</a></h2>
    <ol>
      <li>Apples</li>
      <li>Oranges</li>
      <li>Pears</li>
    </ol>

    <h2><a name="veggies">Veggies</a></h2>
    <ol>
      <li>Carrots</li>
      <li>Celery</li>
      <li>Beats</li>
    </ol>
  </body>
</html>
```

[View on JSFiddle](https://jsfiddle.net/S4yNp)

## Notes

For reasons of backwards compatibility, the returned set of anchors only contains those
anchors created with the `name` attribute, not those created with the
`id` attribute.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
