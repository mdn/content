---
title: "DOMImplementation: createHTMLDocument() method"
short-title: createHTMLDocument()
slug: Web/API/DOMImplementation/createHTMLDocument
page-type: web-api-instance-method
browser-compat: api.DOMImplementation.createHTMLDocument
---

{{ApiRef("DOM")}}

The
**`DOMImplementation.createHTMLDocument()`** method creates a
new HTML {{ domxref("Document") }}.

## Syntax

```js-nolint
createHTMLDocument()
createHTMLDocument(title)
```

### Parameters

- `title` {{optional_inline}}
  - : A string containing the title to give the new HTML document.

### Return value

A new HTML {{domxref("Document")}} object.

## Examples

This example creates a new HTML document and inserts it into an {{HTMLElement("iframe")}} in the current document.

Here's the HTML for this example:

```html live-sample___new-doc
<button id="create-doc">Create new document</button>
<iframe id="theFrame" src="about:blank"></iframe>
```

The JavaScript implementation of `makeDocument()` follows:

```js live-sample___new-doc
function makeDocument() {
  const frame = document.getElementById("theFrame");

  const doc = document.implementation.createHTMLDocument("New Document");
  const p = doc.createElement("p");
  p.textContent = "This is a new paragraph.";

  try {
    doc.body.appendChild(p);
  } catch (e) {
    console.log(e);
  }

  // Copy the new HTML document into the frame

  const destDocument = frame.contentDocument;
  const srcNode = doc.documentElement;
  const newNode = destDocument.importNode(srcNode, true);

  destDocument.replaceChild(newNode, destDocument.documentElement);
}

document.getElementById("create-doc").addEventListener("click", makeDocument);
```

The code handles creating the new HTML document and inserting some content
into it. `createHTMLDocument()` constructs a new HTML document
whose {{ HTMLElement("title") }} is `"New Document"`. Then we create a
new paragraph element with some simple content, and then the new paragraph gets inserted
into the new document.

`destDocument` stores the `contentDocument` of the frame; this is the document into
which we'll be injecting the new content. The next two lines handle importing the
contents of our new document into the new document's context. Finally, `destDocument.replaceChild` actually
replaces the contents of the frame with the new document's contents.

{{EmbedLiveSample("new-doc", "", 200)}}

The returned document is pre-constructed with the following HTML:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>title</title>
  </head>
  <body>
    …
  </body>
</html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("DOMImplementation")}} interface it belongs to.
