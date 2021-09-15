---
title: DOMTokenList
slug: Web/API/DOMTokenList
tags:
  - API
  - DOM
  - DOMTokenList
  - Interface
  - Reference
browser-compat: api.DOMTokenList
---
{{APIRef("DOM")}}

The **`DOMTokenList`** interface represents a set of space-separated tokens. Such a set is returned by {{domxref("Element.classList")}}, {{domxref("HTMLLinkElement.relList")}}, {{domxref("HTMLAnchorElement.relList")}}, {{domxref("HTMLAreaElement.relList")}}, {{domxref("HTMLIframeElement.sandbox")}}, or {{domxref("HTMLOutputElement.htmlFor")}}. It is indexed beginning with `0` as with JavaScript {{jsxref("Array")}} objects. `DOMTokenList` is always case-sensitive.

## Properties

- {{domxref("DOMTokenList.length")}} {{ReadOnlyInline}}
  - : Is an `integer` representing the number of objects stored in the object.
- {{domxref("DOMTokenList.value")}}
  - : A stringifier property that returns the value of the list as a {{domxref("DOMString")}}.

## Methods

- {{domxref("DOMTokenList.item()", "DOMTokenList.item(<var>index</var>)")}}
  - : Returns the item in the list by its `index`, or `undefined` if `index` is greater than or equal to the list's `length`.
- {{domxref("DOMTokenList.contains()", "DOMTokenList.contains(<var>token</var>)")}}
  - : Returns `true` if the list contains the given `token`, otherwise `false`.
- {{domxref("DOMTokenList.add()", "DOMTokenList.add(<var>token1</var>[, <var>token2</var>[, ...<var>tokenN</var>]])")}}
  - : Adds the specified `token`(s) to the list.
- {{domxref("DOMTokenList.remove()", "DOMTokenList.remove(<var>token1</var>[, <var>token2</var>[, ...<var>tokenN</var>]])")}}
  - : Removes the specified `token`(s) from the list.
- {{domxref("DOMTokenList.replace()", "DOMTokenList.replace(<var>oldToken</var>, <var>newToken</var>)")}}
  - : Replaces `token` with `newToken`.
- {{domxref("DOMTokenList.supports()", "DOMTokenList.supports(<var>token</var>)")}}
  - : Returns `true` if a given `token` is in the associated attribute's supported tokens.
- {{domxref("DOMTokenList.toggle()", "DOMTokenList.toggle(<var>token</var> [, <var>force</var>])")}}
  - : Removes `token` from the list if it exists, or adds `token` to the list if it doesn't. Returns a boolean indicating whether `token` is in the list after the operation.
- {{domxref("DOMTokenList.entries()")}}
  - : Returns an {{jsxref("Iteration_protocols", "iterator", "", 1)}}, allowing you to go through all key/value pairs contained in this object.
- {{domxref("DOMTokenList.forEach()", "DOMTokenList.forEach(<var>callback</var> [, <var>thisArg</var>])")}}
  - : Executes a provided `callback` function once per `DOMTokenList` element.
- {{domxref("DOMTokenList.keys()")}}
  - : Returns an {{jsxref("Iteration_protocols", "iterator", "", 1)}}, allowing you to go through all keys of the key/value pairs contained in this object.
- {{domxref("DOMTokenList.values()")}}
  - : Returns an {{jsxref("Iteration_protocols", "iterator", "", 1)}}, allowing you to go through all values of the key/value pairs contained in this object.

## Examples

In the following simple example, we retrieve the list of classes set on a {{htmlelement("p")}} element as a `DOMTokenList` using {{domxref("Element.classList")}}, add a class using {{domxref("DOMTokenList.add()")}}, and then update the {{domxref("Node.textContent")}} of the `<p>` to equal the `DOMTokenList`.

First, the HTML:

```html
<p class="a b c"></p>
```

Now the JavaScript:

```js
let para = document.querySelector("p");
let classes = para.classList;
para.classList.add("d");
para.textContent = `paragraph classList is "${classes}"`;
```

The output looks like this:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Trimming of whitespace and removal of duplicates

Methods that modify the `DOMTokenList` (such as {{domxref("DOMTokenList.add()")}}) automatically trim any excess {{Glossary("Whitespace")}} and remove duplicate values from the list. For example:

```html
<span class="    d   d e f"></span>
```

```js
let span = document.querySelector("span");
let classes = span.classList;
span.classList.add("x");
span.textContent = `span classList is "${classes}"`;
```

The output looks like this:

{{ EmbedLiveSample('Trimming_of_whitespace_and_removal_of_duplicates', '100%', 60) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
