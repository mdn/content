---
title: DocumentFragment
slug: Web/API/DocumentFragment
page-type: web-api-interface
tags:
  - API
  - DOM
  - DocumentFragment
  - Interface
  - Reference
  - Web Components
browser-compat: api.DocumentFragment
---
{{ APIRef("DOM") }}

The **`DocumentFragment`** interface represents a minimal document object that has no parent.

It is used as a lightweight version of {{domxref("Document")}} that stores a segment of a document structure comprised of nodes just like a standard document. The key difference is due to the fact that the document fragment isn't part of the active document tree structure. Changes made to the fragment don't affect the document.

{{InheritanceDiagram}}

## Constructor

- {{ domxref("DocumentFragment.DocumentFragment()", "DocumentFragment()") }}
  - : Creates and returns a new `DocumentFragment` object.

## Properties

_This interface has no specific properties, but inherits those of its parent, {{domxref("Node")}}._

- {{ domxref("DocumentFragment.childElementCount") }} {{ReadOnlyInline}}
  - : Returns the amount of child {{domxref("Element","elements")}} the `DocumentFragment` has.
- {{ domxref("DocumentFragment.children") }} {{ReadOnlyInline}}
  - : Returns a live {{domxref("HTMLCollection")}} containing all objects of type {{domxref("Element")}} that are children of the `DocumentFragment` object.
- {{ domxref("DocumentFragment.firstElementChild") }} {{ReadOnlyInline}}
  - : Returns the {{domxref("Element")}} that is the first child of the `DocumentFragment` object, or `null` if there is none.
- {{ domxref("DocumentFragment.lastElementChild") }} {{ReadOnlyInline}}
  - : Returns the {{domxref("Element")}} that is the last child of the `DocumentFragment` object, or `null` if there is none.

## Methods

_This interface inherits the methods of its parent, {{domxref("Node")}}._

- {{DOMxRef("DocumentFragment.append()")}}
  - : Inserts a set of {{domxref("Node")}} objects or string objects after the last child of the document fragment.
- {{DOMxRef("DocumentFragment.prepend()")}}
  - : Inserts a set of {{domxref("Node")}} objects or string objects before the first child of the document fragment.
- {{domxref("DocumentFragment.querySelector()")}}
  - : Returns the first {{domxref("Element")}} node within the `DocumentFragment`, in document order, that matches the specified selectors.
- {{domxref("DocumentFragment.querySelectorAll()")}}
  - : Returns a {{domxref("NodeList")}} of all the {{domxref("Element")}} nodes within the `DocumentFragment` that match the specified selectors.
- {{DOMxRef("DocumentFragment.replaceChildren()")}}
  - : Replaces the existing children of a `DocumentFragment` with a specified new set of children.
- {{domxref("DocumentFragment.getElementById()")}}
  - : Returns the first {{domxref("Element")}} node within the `DocumentFragment`, in document order, that matches the specified ID. Functionally equivalent to {{domxref("Document.getElementById()")}}.

## Usage notes

A common use for `DocumentFragment` is to create one, assemble a DOM subtree within it, then append or insert the fragment into the DOM using {{domxref("Node")}} interface methods such as {{domxref("Node.appendChild", "appendChild()")}}, {{domxref("Element.append", "append()")}}, or {{domxref("Node.insertBefore", "insertBefore()")}}. Doing this moves the fragment's nodes into the DOM, leaving behind an empty `DocumentFragment`.

This interface is also of great use with Web components: {{HTMLElement("template")}} elements contain a `DocumentFragment` in their {{domxref("HTMLTemplateElement.content")}} property.

An empty `DocumentFragment` can be created using the {{domxref("document.createDocumentFragment()")}} method or the constructor.

## Performance

The performance benefit of `DocumentFragment` is often overstated. In fact, in some engines, using a `DocumentFragment` is slower than appending to the document in a loop as demonstrated in [this benchmark](https://jsbench.me/02l63eic9j/1). However, the difference between these examples is so marginal that it's better to optimize for readability than performance.

## Example

### HTML

```html
<ul></ul>
```

### JavaScript

```js
const ul = document.querySelector('ul');
const fruits = ['Apple', 'Orange', 'Banana', 'Melon'];

const fragment = new DocumentFragment();

for (const fruit of fruits) {
  const li = document.createElement('li');
  li.textContent = fruit;
  fragment.append(li);
}

ul.append(fragment);
```

### Result

{{EmbedLiveSample('Example')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
