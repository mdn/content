---
title: Document.getElementsByTagName()
slug: Web/API/Document/getElementsByTagName
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Method
  - Reference
browser-compat: api.Document.getElementsByTagName
---
{{APIRef("DOM")}}

The **`getElementsByTagName`** method of
{{domxref("Document")}} interface returns an
{{domxref("HTMLCollection")}} of elements with the given tag name.

The complete
document is searched, including the root node. The returned `HTMLCollection`
is live, meaning that it updates itself automatically to stay in sync with the DOM tree
without having to call `document.getElementsByTagName()` again.

## Syntax

```js
getElementsByTagName(name)
```

### Parameters

- `name`
  - : A string representing the name of the elements. The special
    string `*` represents all elements.

### Return value

A live {{domxref("HTMLCollection")}} of found elements in the order they appear in the tree.

> **Note:** [The latest W3C specification](https://dom.spec.whatwg.org/#interface-document) says returned value is an
> `HTMLCollection`; however, this method returns a {{domxref("NodeList")}} in
> WebKit browsers. See {{bug(14869)}} for details.

## Examples

In the following example, `getElementsByTagName()` starts from a particular
parent element and searches top-down recursively through the DOM from that parent
element, building a collection of all descendant elements which match the tag
`name` parameter. This demonstrates both
`document.getElementsByTagName()` and the functionally identical
{{domxref("Element.getElementsByTagName()")}}, which starts the search at a specific
element within the DOM tree.

Clicking the buttons uses `getElementsByTagName()` to count the descendant
paragraph elements of a particular parent (either the document itself or one of two
nested {{HTMLElement("div")}} elements).

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>getElementsByTagName example</title>
  <script>
    function getAllParaElems() {
      const allParas = document.getElementsByTagName('p');
      const num = allParas.length;
      alert('There are ' + num + ' paragraph in this document');
    }

    function div1ParaElems() {
      const div1 = document.getElementById('div1');
      const div1Paras = div1.getElementsByTagName('p');
      const num = div1Paras.length;
      alert('There are ' + num + ' paragraph in #div1');
    }

    function div2ParaElems() {
      const div2 = document.getElementById('div2');
      const div2Paras = div2.getElementsByTagName('p');
      const num = div2Paras.length;
      alert('There are ' + num + ' paragraph in #div2');
    }
  </script>
</head>
<body style="border: solid green 3px">
  <p>Some outer text</p>
  <p>Some outer text</p>

  <div id="div1" style="border: solid blue 3px">
    <p>Some div1 text</p>
    <p>Some div1 text</p>
    <p>Some div1 text</p>

    <div id="div2" style="border: solid red 3px">
      <p>Some div2 text</p>
      <p>Some div2 text</p>
    </div>
  </div>

  <p>Some outer text</p>
  <p>Some outer text</p>

  <button onclick="getAllParaElems();">
    show all p elements in document</button><br />

  <button onclick="div1ParaElems();">
    show all p elements in div1 element</button><br />

  <button onclick="div2ParaElems();">
    show all p elements in div2 element</button>

</body>
</html>
```

## Notes

When called on an HTML document, `getElementsByTagName()` lower-cases its
argument before proceeding. This is undesirable when trying to match camelCase SVG
elements in a subtree in an HTML document.
{{Domxref("document.getElementsByTagNameNS()")}} is useful in that case. See also
{{Bug(499656)}}.

`document.getElementsByTagName()` is similar to
{{domxref("Element.getElementsByTagName()")}}, except that its search encompasses the
whole document.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.getElementsByTagName()")}}
- {{domxref("document.getElementById()")}} to return a reference to an element by its
  `id`
- {{domxref("document.getElementsByName()")}} to return a reference to an element by
  its `name`
- {{domxref("document.querySelector()")}} for powerful selectors via queries like
  `'div.myclass'`
