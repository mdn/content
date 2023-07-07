---
title: "Element: getElementsByClassName() method"
short-title: getElementsByClassName()
slug: Web/API/Element/getElementsByClassName
page-type: web-api-instance-method
browser-compat: api.Element.getElementsByClassName
---

{{APIRef("DOM")}}

The {{domxref("Element")}} method
**`getElementsByClassName()`** returns a live
{{domxref("HTMLCollection")}} which contains every descendant element which has the
specified class name or names.

The method {{domxref("Document.getElementsByClassName", "getElementsByClassName()")}}
on the {{domxref("Document")}} interface works essentially the same way, except it acts
on the entire document, starting at the document root.

## Syntax

```js-nolint
getElementsByClassName(names)
```

### Parameters

- `names`
  - : A string containing one or more class names to match on, separated
    by whitespace.

### Return value

An {{domxref("HTMLCollection")}} providing a live-updating list of every element which
is a member of every class in `names`.

## Usage notes

As always, the returned collection is _live_, meaning that it always reflects
the current state of the DOM tree rooted at the element on which the function was
called. As new elements that match `names` are added to the subtree, they
immediately appear in the collection. Similarly, if an existing element that doesn't
match `names` has its set of classes adjusted so that it matches, it
immediately appears in the collection.

The opposite is also true; as elements no longer match the set of names, they are
immediately removed from the collection.

> **Note:** In [quirks mode](/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode), the
> class names are compared in a case-insensitive fashion. Otherwise, they're case
> sensitive.

## Examples

### Matching a single class

To look for elements that include among their classes a single specified class, we just
provide that class name when calling `getElementsByClassName()`:

```js
element.getElementsByClassName("test");
```

This example finds all elements that have a class of `test`, which are also
a descendant of the element that has the `id` of `main`:

```js
document.getElementById("main").getElementsByClassName("test");
```

### Matching multiple classes

To find elements whose class lists include both the `red` and
`test` classes:

```js
element.getElementsByClassName("red test");
```

### Examining the results

You can use either the {{domxref("HTMLCollection.item", "item()")}} method on the
returned `HTMLCollection` or standard array syntax to examine individual
elements in the collection. However, the following code will not
work as one might expect because `"matches"` will change as
soon as any `"colorbox"` class is removed.

```js
const matches = element.getElementsByClassName("colorbox");

for (let i = 0; i < matches.length; i++) {
  matches[i].classList.remove("colorbox");
  matches.item(i).classList.add("hueframe");
}
```

Instead, use another method, such as:

```js
const matches = element.getElementsByClassName("colorbox");

while (matches.length > 0) {
  matches.item(0).classList.add("hueframe");
  matches[0].classList.remove("colorbox");
}
```

This code finds descendant elements with the `"colorbox"` class, adds the
class `"hueframe"`, by calling `item(0)`, then removes
`"colorbox"` (using array notation). Another element (if any are left) will
then become `item(0)`.

### Filtering the results using array methods

We can also use {{jsxref("Array")}} methods on any {{domxref("HTMLCollection")}} by passing the {{domxref("HTMLCollection")}} as the method's `this` value. Here we'll find all {{HTMLElement("div")}} elements that have a class of `test`:

```js
const testElements = document.getElementsByClassName("test");
const testDivs = Array.prototype.filter.call(
  testElements,
  (testElement) => testElement.nodeName === "DIV",
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
