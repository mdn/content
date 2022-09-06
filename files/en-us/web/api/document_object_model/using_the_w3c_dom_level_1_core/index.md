---
title: Using the W3C DOM Level 1 Core
slug: Web/API/Document_object_model/Using_the_W3C_DOM_Level_1_Core
page-type: guide
tags:
  - DOM
  - NeedsUpdate
---
{{DefaultAPISidebar("DOM")}}

The W3C's [DOM Level 1 Core](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html) is an API for manipulating the DOM trees of HTML and XML documents (among other tree-like types of documents). Due to the ubiquity of the DOM, this API is supported in all major browsers, including Mozilla Firefox and Microsoft Internet Explorer, and serves as a base for scripting on the web.

## What is a DOM tree?

A [DOM](https://www.w3.org/TR/REC-DOM-Level-1/introduction.html) tree is a kind of [tree](https://en.wikipedia.org/wiki/Tree_structure) whose nodes represent an HTML or XML document's contents. Each HTML or XML document has a unique DOM tree representation. For example, the following document

```html
<html lang="en">
  <head>
    <title>My Document</title>
  </head>
  <body>
    <h1>Header</h1>
    <p>Paragraph</p>
  </body>
</html>
```

has a DOM tree that looks like this:

![](using_the_w3c_dom_level_1_core-doctree.jpg)

(Note that, although the above tree is similar to the above document's DOM tree, it's not identical, as [the actual DOM tree preserves whitespace](/en-US/docs/Web/API/Document_Object_Model/Whitespace).)

When a web browser parses an HTML document, it builds a DOM tree and then uses it to display the document.

## What does the DOM Level 1 Core let me do?

The W3C DOM Level 1 Core allows you to change a DOM tree in _any way you want_. This implies the ability to create any HTML or XML document from scratch, or to change any contents of a given HTML or XML document. The easiest way for web page authors to edit the DOM of a document is to use JavaScript to access the `document` property of the global object. This `document` object implements the [Document interface](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#i-Document) from the W3C's DOM Level 1 spec.

## A simple example

Suppose the author wants to change the header of the above document and write two paragraphs instead of one. The following script would do the job:

### HTML Content

```html
<body>
  <input type="button" value="Change this document." onclick="change()">
  <h2>Header</h2>
  <p>Paragraph</p>
</body>
```

### JavaScript Content

```js
function change() {
  // document.getElementsByTagName("h2") returns a NodeList of the <h2>
  // elements in the document, and the first is number 0:

  const header = document.getElementsByTagName("h2").item(0);
  // the firstChild of the header is a Text node:
  header.firstChild.data = "A dynamic document";
  // now the header is "A dynamic document".

  const para = document.getElementsByTagName("p").item(0);
  para.firstChild.data = "This is the first paragraph.";

  // create a new Text node for the second paragraph
  const newText = document.createTextNode("This is the second paragraph.");
  // create a new Element to be the second paragraph
  const newElement = document.createElement("p");
  // put the text in the paragraph
  newElement.appendChild(newText);
  // and put the paragraph on the end of the document by appending it to
  // the body (which is the parent of para)
  para.parentNode.appendChild(newElement);
}
```

{{ EmbedLiveSample('A_simple_example', 800, 300) }}

You can see this script as [a complete example](/en-US/docs/Web/API/Document_object_model/Using_the_W3C_DOM_Level_1_Core/using_the_w3c_dom_level_1_core-doctree.jpg).

## How can I learn more?

Now that you are familiar with the basic concepts of the DOM, you may want to learn about the [DOM Level 1 fundamental methods](/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces).

See also the [DOM Level 1 Core specification](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html) from the W3C. It's a reasonably clear spec, although it is formal. The main thing that's useful to authors is the description of the different DOM objects and all their properties and methods. Also see our [other DOM documentation](/en-US/docs/Web/API/Document_Object_Model).

**Original Document Information**

- Author(s): L. David Baron \<dbaron at dbaron dot org>
- Copyright Information: © 1998-2005 by individual mozilla.org contributors; content available under a [Creative Commons license](https://www.mozilla.org/en-US/foundation/licensing/website-content/)
