---
title: Introduction to the DOM
slug: Web/API/Document_Object_Model/Introduction
page-type: guide
spec-urls: https://dom.spec.whatwg.org/
---

{{DefaultAPISidebar("DOM")}}

The **Document Object Model** (_DOM_) is the data representation of the objects
that comprise the structure and content of a document on the web.
This guide will introduce the DOM,
look at how the DOM represents an {{Glossary("HTML")}} document in memory
and how to use APIs to create web content and applications.

## What is the DOM?

The Document Object Model (DOM) is a programming interface for web documents.
It represents the page so that programs can change the document structure, style, and content.
The DOM represents the document as nodes and objects;
that way, programming languages can interact with the page.

A web page is a document that can be either displayed in the browser window or as the HTML source. In both cases, it is the same document but the Document Object Model (DOM) representation allows it to be manipulated. As an object-oriented representation of the web page, it can be modified with a scripting language such as JavaScript.

For example, the DOM specifies that the `querySelectorAll` method in this code snippet must return a list of all the {{HTMLElement("p")}} elements in the document:

```js
const paragraphs = document.querySelectorAll("p");
// paragraphs[0] is the first <p> element
// paragraphs[1] is the second <p> element, etc.
alert(paragraphs[0].nodeName);
```

All of the properties, methods, and events available for manipulating and creating web pages are organized into objects. For example, the `document` object that represents the document itself, any `table` objects that implement the {{domxref("HTMLTableElement")}} DOM interface for accessing HTML tables, and so forth, are all objects.

The DOM is built using multiple APIs that work together.
The core [DOM](/en-US/docs/Web/API/Document_Object_Model) defines the entities
describing any document and the objects within it.
This is expanded upon as needed by other APIs that add new features and capabilities to the DOM.
For example, the [HTML DOM API](/en-US/docs/Web/API/HTML_DOM_API) adds support for representing HTML documents to the core DOM,
and the SVG API adds support for representing SVG documents.

## DOM and JavaScript

The previous short example, like nearly all examples, is {{glossary("JavaScript")}}. That is to say, it is _written_ in JavaScript, but _uses_ the DOM to access the document and its elements. The DOM is not a programming language, but without it, the JavaScript language wouldn't have any model or notion of web pages, HTML documents, SVG documents, and their component parts. The document as a whole, the head, tables within the document, table headers, text within the table cells, and all other elements in a document are parts of the document object model for that document. They can all be accessed and manipulated using the DOM and a scripting language like JavaScript.

The DOM is not part of the JavaScript language,
but is instead a Web API used to build websites.
JavaScript can also be used in other contexts.
For example, Node.js runs JavaScript programs on a computer,
but provides a different set of APIs,
and the DOM API is not a core part of the Node.js runtime.

The DOM was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API.
Even if most web developers will only use the DOM through JavaScript, implementations of the DOM can be built for any language, as this Python example demonstrates:

```python
# Python DOM example
import xml.dom.minidom as m
doc = m.parse(r"C:\Projects\Py\chap1.xml")
doc.nodeName # DOM property of document object
p_list = doc.getElementsByTagName("para")
```

For more information on what technologies are involved in writing JavaScript on the web, see [JavaScript technologies overview](/en-US/docs/Web/JavaScript/JavaScript_technologies_overview).

## Accessing the DOM

You don't have to do anything special to begin using the DOM.
You use the API directly in JavaScript from within what is called a _script_, a program run by a browser.

When you create a script, whether inline in a `<script>` element or included in the web page, you can immediately begin using the API for the {{domxref("document")}} or {{domxref("Window", "window")}} objects to manipulate the document itself, or any of the various elements in the web page (the descendant elements of the document). Your DOM programming may be something as simple as the following example, which displays a message on the console by using the {{domxref("console.log()")}} function:

```html
<body onload="console.log('Welcome to my home page!');">
  …
</body>
```

As it is generally not recommended to mix the structure of the page (written in HTML)
and manipulation of the DOM (written in JavaScript),
the JavaScript parts will be grouped together here,
and separated from the HTML.

For example, the following function creates a new {{HTMLElement("Heading_Elements", "h1")}} element,
adds text to that element,
and then adds it to the tree for the document:

```html
<html lang="en">
  <head>
    <script>
      // run this function when the document is loaded
      window.onload = () => {
        // create a couple of elements in an otherwise empty HTML page
        const heading = document.createElement("h1");
        const headingText = document.createTextNode("Big Head!");
        heading.appendChild(headingText);
        document.body.appendChild(heading);
      };
    </script>
  </head>
  <body></body>
</html>
```

## Fundamental data types

This page tries to describe the various objects and types in simple terms. But there are a number of different data types being passed around the API that you should be aware of.

> **Note:** Because the vast majority of code that uses the DOM revolves around manipulating HTML documents, it's common to refer to the nodes in the DOM as **elements**, although strictly speaking not every node is an element.

The following table briefly describes these data types.

<table class="standard-table">
  <thead>
    <tr>
      <th>Data type (Interface)</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{domxref("Document")}}</td>
      <td>
        When a member returns an object of type <code>document</code> (e.g., the
        <code>ownerDocument</code> property of an element returns the
        <code>document</code> to which it belongs), this object is the root
        <code>document</code> object itself. The
        <a href="/en-US/docs/Web/API/Document">DOM <code>document</code> Reference</a>
        chapter describes the <code>document</code> object.
      </td>
    </tr>
    <tr>
      <td>{{domxref("Node")}}</td>
      <td>
        Every object located within a document is a node of some kind. In an
        HTML document, an object can be an element node but also a text node or
        attribute node.
      </td>
    </tr>
    <tr>
      <td>{{domxref("Element")}}</td>
      <td>
        The <code>element</code> type is based on <code>node</code>. It refers
        to an element or a node of type <code>element</code> returned by a
        member of the DOM API. Rather than saying, for example, that the
        {{domxref("document.createElement()")}} method returns an
        object reference to a <code>node</code>, we just say that this method
        returns the <code>element</code> that has just been created in the DOM.
        <code>element</code> objects implement the DOM
        <code>Element</code> interface and also the more basic
        <code>Node</code> interface, both of which are included together in this
        reference. In an HTML document, elements are further enhanced by the
        HTML DOM API's {{domxref("HTMLElement")}} interface as well as
        other interfaces describing capabilities of specific kinds of elements
        (for instance, {{domxref("HTMLTableElement")}} for
        {{HTMLElement("table")}} elements).
      </td>
    </tr>
    <tr>
      <td>{{domxref("NodeList")}}</td>
      <td>
        A <code>nodeList</code> is an array of elements, like the kind that is
        returned by the method
        {{domxref("document.querySelectorAll()")}}. Items in a
        <code>nodeList</code> are accessed by index in either of two ways:
        <ul>
          <li>list.item(1)</li>
          <li>list[1]</li>
        </ul>
        These two are equivalent. In the first, <code>item()</code> is the
        single method on the <code>nodeList</code> object. The latter uses the
        typical array syntax to fetch the second item in the list.
      </td>
    </tr>
    <tr>
      <td>{{domxref("Attr")}}</td>
      <td>
        When an <code>attribute</code> is returned by a member (e.g., by the
        <code>createAttribute()</code> method), it is an object reference that
        exposes a special (albeit small) interface for attributes. Attributes
        are nodes in the DOM just like elements are, though you may rarely use
        them as such.
      </td>
    </tr>
    <tr>
      <td>{{domxref("NamedNodeMap")}}</td>
      <td>
        A <code>namedNodeMap</code> is like an array, but the items are accessed
        by name or index, though this latter case is merely a convenience for
        enumeration, as they are in no particular order in the list. A
        <code>namedNodeMap</code> has an <code>item()</code> method for this
        purpose, and you can also add and remove items from a
        <code>namedNodeMap</code>.
      </td>
    </tr>
  </tbody>
</table>

There are also some common terminology considerations to keep in mind. It's common to refer to any {{domxref("Attr")}} node as an `attribute`, for example, and to refer to an array of DOM nodes as a `nodeList`. You'll find these terms and others to be introduced and used throughout the documentation.

## DOM interfaces

This guide is about the objects and the actual _things_ you can use to manipulate the DOM hierarchy. There are many points where understanding how these work can be confusing. For example, the object representing the HTML `form` element gets its `name` property from the `HTMLFormElement` interface but its `className` property from the `HTMLElement` interface. In both cases, the property you want is in that form object.

But the relationship between objects and the interfaces that they implement in the DOM can be confusing, and so this section attempts to say a little something about the actual interfaces in the DOM specification and how they are made available.

### Interfaces and objects

Many objects implement several different interfaces. The table object, for example, implements a specialized {{domxref("HTMLTableElement")}} interface, which includes such methods as `createCaption` and `insertRow`. But since it's also an HTML element, `table` implements the `Element` interface described in the DOM {{domxref("Element")}} Reference chapter. And finally, since an HTML element is also, as far as the DOM is concerned, a node in the tree of nodes that make up the object model for an HTML or XML page, the table object also implements the more basic `Node` interface, from which `Element` derives.

When you get a reference to a `table` object, as in the following example, you routinely use all three of these interfaces interchangeably on the object, perhaps without knowing it.

```js
const table = document.getElementById("table");
const tableAttrs = table.attributes; // Node/Element interface
for (let i = 0; i < tableAttrs.length; i++) {
  // HTMLTableElement interface: border attribute
  if (tableAttrs[i].nodeName.toLowerCase() === "border") {
    table.border = "1";
  }
}
// HTMLTableElement interface: summary attribute
table.summary = "note: increased border";
```

### Core interfaces in the DOM

This section lists some of the most commonly-used interfaces in the DOM. The idea is not to describe what these APIs do here but to give you an idea of the sorts of methods and properties you will see very often as you use the DOM. These common APIs are used in the longer examples in the [DOM Examples](/en-US/docs/Web/API/Document_Object_Model/Examples) chapter at the end of this book.

The `document` and `window` objects are the objects whose interfaces you generally use most often in DOM programming. In simple terms, the `window` object represents something like the browser, and the `document` object is the root of the document itself. `Element` inherits from the generic `Node` interface, and together these two interfaces provide many of the methods and properties you use on individual elements. These elements may also have specific interfaces for dealing with the kind of data those elements hold, as in the `table` object example in the previous section.

The following is a brief list of common APIs in web and XML page scripting using the DOM.

- {{domxref("document.querySelector()")}}
- {{domxref("document.querySelectorAll()")}}
- {{domxref("document.createElement()")}}
- {{domxref("Element.innerHTML")}}
- {{domxref("Element.setAttribute()")}}
- {{domxref("Element.getAttribute()")}}
- {{domxref("EventTarget.addEventListener()")}}
- {{domxref("HTMLElement.style")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Window.load_event", "window.onload")}}
- {{domxref("window.scrollTo()")}}

## Examples

### Setting text content

This example uses a {{HTMLElement("div")}} element containing a {{HTMLElement("textarea")}} and two {{HTMLElement("button")}} elements. When the user clicks the first button we set some text in the `<textarea>`. When the user clicks the second button we clear the text. We use:

- {{domxref("Document.querySelector()")}} to access the `<textarea>` and the button
- {{domxref("EventTarget.addEventListener()")}} to listen for button clicks
- {{domxref("Node.textContent")}} to set and clear the text.

#### HTML

```html
<div class="container">
  <textarea class="story"></textarea>
  <button id="set-text" type="button">Set text content</button>
  <button id="clear-text" type="button">Clear text content</button>
</div>
```

#### CSS

```css
.container {
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
}

button {
  width: 200px;
}
```

#### JavaScript

```js
const story = document.body.querySelector(".story");

const setText = document.body.querySelector("#set-text");
setText.addEventListener("click", () => {
  story.textContent = "It was a dark and stormy night...";
});

const clearText = document.body.querySelector("#clear-text");
clearText.addEventListener("click", () => {
  story.textContent = "";
});
```

#### Result

{{EmbedLiveSample("Setting text content", "", "150px")}}

### Adding a child element

This example uses a {{HTMLElement("div")}} element containing a {{HTMLElement("div")}} and two {{HTMLElement("button")}} elements. When the user clicks the first button we create a new element and add it as a child of the `<div>`. When the user clicks the second button we remove the child element. We use:

- {{domxref("Document.querySelector()")}} to access the `<div>` and the buttons
- {{domxref("EventTarget.addEventListener()")}} to listen for button clicks
- {{domxref("Document.createElement")}} to create the element
- {{domxref("Node.appendChild()")}} to add the child
- {{domxref("Node.removeChild()")}} to remove the child.

#### HTML

```html
<div class="container">
  <div class="parent">parent</div>
  <button id="add-child" type="button">Add a child</button>
  <button id="remove-child" type="button">Remove child</button>
</div>
```

#### CSS

```css
.container {
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
}

button {
  width: 100px;
}

div.parent {
  border: 1px solid black;
  padding: 5px;
  width: 100px;
  height: 100px;
}

div.child {
  border: 1px solid red;
  margin: 10px;
  padding: 5px;
  width: 80px;
  height: 60px;
  box-sizing: border-box;
}
```

#### JavaScript

```js
const parent = document.body.querySelector(".parent");

const addChild = document.body.querySelector("#add-child");
addChild.addEventListener("click", () => {
  // Only add a child if we don't already have one
  // in addition to the text node "parent"
  if (parent.childNodes.length > 1) {
    return;
  }
  const child = document.createElement("div");
  child.classList.add("child");
  child.textContent = "child";
  parent.appendChild(child);
});

const removeChild = document.body.querySelector("#remove-child");
removeChild.addEventListener("click", () => {
  const child = document.body.querySelector(".child");
  parent.removeChild(child);
});
```

#### Result

{{EmbedLiveSample("Adding a child element", "", "180px")}}

## Specifications

{{Specifications}}
