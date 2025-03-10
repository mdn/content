---
title: "Document: getElementsByClassName() method"
short-title: getElementsByClassName()
slug: Web/API/Document/getElementsByClassName
page-type: web-api-instance-method
browser-compat: api.Document.getElementsByClassName
---

{{APIRef("DOM")}}

The **`getElementsByClassName`** method of
{{domxref("Document")}} interface returns an array-like object
of all child elements which have all of the given class name(s).

When called on
the {{domxref("document")}} object, the complete document is searched, including the
root node. You may also call {{domxref("Element.getElementsByClassName", "getElementsByClassName()")}} on any element; it will return only elements which are descendants of the specified root element with the given class name(s).

> [!WARNING]
> This is a live {{domxref("HTMLCollection")}}. Changes in the DOM will
> reflect in the array as the changes occur. If an element selected by this array no
> longer qualifies for the selector, it will automatically be removed. Be aware of this
> for iteration purposes.

## Syntax

```js-nolint
getElementsByClassName(names)
```

### Parameters

- `names`
  - : A string representing the class name(s) to match; multiple class names are separated by whitespace.

### Return value

A live {{domxref("HTMLCollection")}} of found elements.

## Examples

Get all elements that have a class of 'test':

```js
document.getElementsByClassName("test");
```

Get all elements that have both the 'red' and 'test' classes:

```js
document.getElementsByClassName("red test");
```

Get all elements that have a class of 'test', inside of an element that has the ID of
'main':

```js
document.getElementById("main").getElementsByClassName("test");
```

Get the first element with a class of 'test', or `undefined` if there is no
matching element:

```js
document.getElementsByClassName("test")[0];
```

We can also use methods of Array.prototype on any {{domxref("HTMLCollection")}} by
passing the `HTMLCollection` as the method's _this_ value. Here
we'll find all div elements that have a class of 'test':

```js
const testElements = document.getElementsByClassName("test");
const testDivs = Array.prototype.filter.call(
  testElements,
  (testElement) => testElement.nodeName === "DIV",
);
```

### Get the first element whose class is 'test'

This is the most commonly used method of operation.

```html
<html lang="en">
  <body>
    <div id="parent-id">
      <p>hello world 1</p>
      <p class="test">hello world 2</p>
      <p>hello world 3</p>
      <p>hello world 4</p>
    </div>

    <script>
      const parentDOM = document.getElementById("parent-id");

      const test = parentDOM.getElementsByClassName("test"); // a list of matching elements, *not* the element itself
      console.log(test); // HTMLCollection[1]

      const testTarget = parentDOM.getElementsByClassName("test")[0]; // the first element, as we wanted
      console.log(testTarget); // <p class="test">hello world 2</p>
    </script>
  </body>
</html>
```

### Multiple Classes Example

`document.getElementsByClassName` works very similarly to
`document.querySelector` and `document.querySelectorAll`. Only
elements with ALL of the classNames specified are selected.

#### HTML

```html
<span class="orange fruit">Orange Fruit</span>
<span class="orange juice">Orange Juice</span>
<span class="apple juice">Apple Juice</span>
<span class="foo bar">Something Random</span>
<textarea id="resultArea" style="width:98%;height:7em"></textarea>
```

#### JavaScript

```js
// getElementsByClassName only selects elements that have both given classes
const allOrangeJuiceByClass = document.getElementsByClassName("orange juice");
let result = "document.getElementsByClassName('orange juice')";
for (let i = 0; i < allOrangeJuiceByClass.length; i++) {
  result += `\n  ${allOrangeJuiceByClass[i].textContent}`;
}

// querySelector only selects full complete matches
const allOrangeJuiceQuery = document.querySelectorAll(".orange.juice");
result += "\n\ndocument.querySelectorAll('.orange.juice')";
for (let i = 0; i < allOrangeJuiceQuery.length; i++) {
  result += `\n  ${allOrangeJuiceQuery[i].textContent}`;
}

document.getElementById("resultArea").value = result;
```

#### Result

{{EmbedLiveSample('Multiple_Classes_Example', '100%', 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
