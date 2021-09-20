---
title: Document.createDocumentFragment()
slug: Web/API/Document/createDocumentFragment
tags:
  - API
  - DOM
  - Document
  - Method
  - Reference
  - createDocumentFragment
browser-compat: api.Document.createDocumentFragment
---
{{APIRef("DOM WHATWG")}}

Creates a new empty {{domxref("DocumentFragment")}} into which
DOM nodes can be added to build an offscreen DOM tree.

## Syntax

```js
var fragment = document.createDocumentFragment();
```

### Value

A newly created, empty, {{domxref("DocumentFragment")}} object, which is ready to have
nodes inserted into it.

## Usage notes

`DocumentFragment`s are DOM {{domxref("Node")}} objects which are never part
of the main DOM tree. The usual use case is to create the document fragment, append
elements to the document fragment and then append the document fragment to the DOM tree.
In the DOM tree, the document fragment is replaced by all its children.

Since the document fragment is _in memory_ and not part of the main DOM tree,
appending children to it does not cause page [reflow](https://developers.google.com/speed/articles/reflow?csw=1)
(computation of element's position and geometry). Historically, using document fragments
could result in [better
performance](http://ejohn.org/blog/dom-documentfragments/).

You can also use the `DocumentFragment` constructor to create a new
fragment:

```js
let fragment = new DocumentFragment();
```

## Example

This example creates a list of major web browsers in a `DocumentFragment`,
then adds the new DOM subtree to the document to be displayed.

### HTML

```html
<ul id="ul">
</ul>
```

### JavaScript

```js
var element  = document.getElementById('ul'); // assuming ul exists
var fragment = document.createDocumentFragment();
var browsers = ['Firefox', 'Chrome', 'Opera',
    'Safari', 'Internet Explorer'];

browsers.forEach(function(browser) {
    var li = document.createElement('li');
    li.textContent = browser;
    fragment.appendChild(li);
});

element.appendChild(fragment);
```

### Result

{{EmbedLiveSample("Example", 600, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMImplementation.createDocument",
    "document.implementation.createDocument()")}}
- {{domxref("documentFragment")}}
