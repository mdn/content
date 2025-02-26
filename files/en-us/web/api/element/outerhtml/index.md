---
title: "Element: outerHTML property"
short-title: outerHTML
slug: Web/API/Element/outerHTML
page-type: web-api-instance-property
browser-compat: api.Element.outerHTML
---

{{APIRef("DOM")}}

The **`outerHTML`** attribute of the {{ domxref("Element") }}
DOM interface gets the serialized HTML fragment describing the element including its
descendants. It can also be set to replace the element with nodes parsed from the given
string.

To only obtain the HTML representation of the contents of an element, or to replace the
contents of an element, use the {{domxref("Element.innerHTML", "innerHTML")}} property
instead.

## Value

Reading the value of `outerHTML` returns a string
containing an HTML serialization of the `element` and its descendants.
Setting the value of `outerHTML` replaces the element and all of its
descendants with a new DOM tree constructed by parsing the specified
`htmlString`.

When set to the `null` value, that `null` value is converted to the empty string (`""`), so `elt.outerHTML = null` is equivalent to `elt.outerHTML = ""`.

### Exceptions

- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if an attempt was made to set `outerHTML` using an HTML string which is not
    valid.
- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if an attempt was made to set `outerHTML` on an element which is a direct
    child of a {{domxref("Document")}}, such as {{domxref("Document.documentElement")}}.

## Examples

### Getting the value of an element's outerHTML property

#### HTML

```html
<div id="d">
  <p>Content</p>
  <p>Further Elaborated</p>
</div>
```

#### JavaScript

```js
const d = document.getElementById("d");
console.log(d.outerHTML);

// The string '<div id="d"><p>Content</p><p>Further Elaborated</p></div>'
// is written to the console window
```

### Replacing a node by setting the outerHTML property

#### HTML

```html
<div id="container">
  <div id="d">This is a div.</div>
</div>
```

#### JavaScript

```js
const container = document.getElementById("container");
const d = document.getElementById("d");

console.log(container.firstElementChild.nodeName); // logs "DIV"

d.outerHTML = "<p>This paragraph replaced the original div.</p>";

console.log(container.firstElementChild.nodeName); // logs "P"

// The #d div is no longer part of the document tree,
// the new paragraph replaced it.
```

## Notes

If the element has no parent node, setting its `outerHTML` property will not change it
or its descendants. For example:

```js
const div = document.createElement("div");
div.outerHTML = '<div class="test">test</div>';
console.log(div.outerHTML); // output: "<div></div>"
```

Also, while the element will be replaced in the document, the variable whose
`outerHTML` property was set will still hold a reference to the original
element:

```js
const p = document.querySelector("p");
console.log(p.nodeName); // shows: "P"
p.outerHTML = "<div>This div replaced a paragraph.</div>";
console.log(p.nodeName); // still "P";
```

The returned value will contain HTML escaped attributes:

```js
const anc = document.createElement("a");
anc.href = "https://developer.mozilla.org?a=b&c=d";
console.log(anc.outerHTML); // output: "<a href='https://developer.mozilla.org?a=b&amp;c=d'></a>"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Serializing DOM trees into XML strings: {{domxref("XMLSerializer")}}
- Parsing XML or HTML into DOM trees: {{domxref("DOMParser")}}
- {{domxref("HTMLElement.outerText")}}
