---
title: "Document: getElementsByTagNameNS() method"
short-title: getElementsByTagNameNS()
slug: Web/API/Document/getElementsByTagNameNS
page-type: web-api-instance-method
browser-compat: api.Document.getElementsByTagNameNS
---

{{APIRef("DOM")}}

Returns a list of elements with the given tag name belonging to the given namespace.
The complete document is searched, including the root node.

## Syntax

```js-nolint
getElementsByTagNameNS(namespace, name)
```

### Parameters

- `namespace`
  - : The namespace URI of elements to look for (see {{domxref("Element.namespaceURI", "element.namespaceURI")}}).
- `name`

  - : Either the local name of elements to look for or the special value `*`, which matches all elements (see {{domxref("Element.localName", "element.localName")}}).

    > [!NOTE]
    > Unlike {{domxref("document.getElementsByTagName()")}}, the parameters for `getElementsByTagNameNS()` are case-sensitive.

### Return value

A live {{DOMxRef("HTMLCollection")}} of found elements in the order they appear in the tree.

## Examples

In the following example `getElementsByTagNameNS` starts from a particular
parent element, and searches top-down recursively through the DOM from that parent
element, looking for child elements matching the tag `name` parameter.

Note that when the node on which `getElementsByTagName` is invoked is not
the `document` node, in fact the
{{domxref("element.getElementsByTagNameNS")}} method is used.

To use the following example, just copy/paste it into a new file saved with the .xhtml
extension.

```html
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>getElementsByTagNameNS example</title>

    <script>
      function getAllParaElems() {
        const allParas = document.getElementsByTagNameNS(
          "http://www.w3.org/1999/xhtml",
          "p",
        );
        const num = allParas.length;
        alert(`There are ${num} &lt;p&gt; elements in this document`);
      }

      function div1ParaElems() {
        const div1 = document.getElementById("div1");
        const div1Paras = div1.getElementsByTagNameNS(
          "http://www.w3.org/1999/xhtml",
          "p",
        );
        const num = div1Paras.length;
        alert(`There are ${num} &lt;p&gt; elements in div1 element`);
      }

      function div2ParaElems() {
        const div2 = document.getElementById("div2");
        const div2Paras = div2.getElementsByTagNameNS(
          "http://www.w3.org/1999/xhtml",
          "p",
        );
        const num = div2Paras.length;
        alert(`There are ${num} &lt;p&gt; elements in div2 element`);
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
      Show all p elements in document
    </button>
    <br />

    <button onclick="div1ParaElems();">
      Show all p elements in div1 element
    </button>
    <br />

    <button onclick="div2ParaElems();">
      show all p elements in div2 element
    </button>
  </body>
</html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Element.getElementsByTagNameNS()")}}
