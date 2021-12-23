---
title: Document.getElementsByTagNameNS()
slug: Web/API/Document/getElementsByTagNameNS
tags:
  - API
  - DOM
  - Method
  - NeedsMarkupWork
  - NeedsSpecTable
  - Reference
  - getElementsByTagNameNS
browser-compat: api.Document.getElementsByTagNameNS
---
{{APIRef("DOM")}}

Returns a list of elements with the given tag name belonging to the given namespace.
The complete document is searched, including the root node.

## Syntax

```js
elements = document.getElementsByTagNameNS(namespace, name)
```

- _elements_ is a live {{DOMxRef("NodeList")}} (but see the note below) of
  found elements in the order they appear in the tree.
- _namespace_ is the namespace URI of elements to look for (see
  {{domxref("Element.namespaceURI", "element.namespaceURI")}}).
- _name_ is either the local name of elements to look for or the special
  value `*`, which matches all elements (see {{domxref("Element.localName",
    "element.localName")}}).

> **Note:** While the W3C specification says `elements` is a `NodeList`, this method returns a {{DOMxRef("HTMLCollection")}} both in Gecko and Internet Explorer.
> Opera returns a `NodeList`, but with a `namedItem` method implemented, which makes it similar to a `HTMLCollection`. As of January 2012, only in WebKit browsers is the returned value a pure `NodeList`.
> See [bug 14869](https://bugzilla.mozilla.org/show_bug.cgi?id=14869) for details.

> **Note:** Currently parameters in this method are case-sensitive, but they were case-insensitive in Firefox 3.5 and before.
> See the [developer release note for Firefox 3.6](/en-US/docs/Mozilla/Firefox/Releases/3.6#dom) and a note in Browser compatibility section in {{domxref("Element.getElementsByTagNameNS")}} for details.

## Example

In the following example `getElementsByTagNameNS` starts from a particular
parent element, and searches topdown recursively through the DOM from that parent
element, looking for child elements matching the tag `name` parameter.

Note that when the node on which `getElementsByTagName` is invoked is not
the `document` node, in fact the
{{domxref("element.getElementsByTagNameNS")}} method is used.

To use the following example, just copy/paste it into a new file saved with the .xhtml
extension.

```html
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<title>getElementsByTagNameNS example</title>

<script type="text/javascript">

function getAllParaElems()
{
  var allParas = document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "p");

  var num = allParas.length;

  alert("There are " + num + " &lt;p&gt; elements in this document");
}

function div1ParaElems()
{
  var div1 = document.getElementById("div1")
  var div1Paras = div1.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "p");

  var num = div1Paras.length;

  alert("There are " + num + " &lt;p&gt; elements in div1 element");
}

function div2ParaElems()
{
  var div2 = document.getElementById("div2")
  var div2Paras = div2.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "p");

  var num = div2Paras.length;

  alert("There are " + num + " &lt;p&gt; elements in div2 element");
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Element.getElementsByTagNameNS()")}}
