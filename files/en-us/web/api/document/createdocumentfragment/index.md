---
title: "Document: createDocumentFragment() method"
short-title: createDocumentFragment()
slug: Web/API/Document/createDocumentFragment
page-type: web-api-instance-method
browser-compat: api.Document.createDocumentFragment
---

{{APIRef("DOM WHATWG")}}

Creates a new empty {{domxref("DocumentFragment")}} into which
DOM nodes can be added to build an offscreen DOM tree.

## Syntax

```js-nolint
createDocumentFragment()
```

### Parameters

None.

### Return value

A newly created, empty, {{domxref("DocumentFragment")}} object, which is ready to have
nodes inserted into it.

## Usage notes

`DocumentFragment`s are DOM {{domxref("Node")}} objects which are never part
of the main DOM tree. The usual use case is to create the document fragment, append
elements to the document fragment and then append the document fragment to the DOM tree.
In the DOM tree, the document fragment is replaced by all its children.

Since the document fragment is _in memory_ and not part of the main DOM tree,
using document fragments could result in [better performance](https://johnresig.com/blog/dom-documentfragments/)
in some older engines.

You can also use the `DocumentFragment` constructor to create a new
fragment:

```js
const fragment = new DocumentFragment();
```

## Examples

This example creates a list of major web browsers in a `DocumentFragment`,
then adds the new DOM subtree to the document to be displayed.

### HTML

```html
<ul id="ul"></ul>
```

### JavaScript

```js
const element = document.getElementById("ul"); // assuming ul exists
const fragment = document.createDocumentFragment();
const browsers = ["Firefox", "Chrome", "Opera", "Safari"];

browsers.forEach((browser) => {
  const li = document.createElement("li");
  li.textContent = browser;
  fragment.appendChild(li);
});

element.appendChild(fragment);
```

### Result

{{EmbedLiveSample("Examples", 600, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMImplementation.createDocument", "document.implementation.createDocument()")}}
- {{domxref("documentFragment")}}
