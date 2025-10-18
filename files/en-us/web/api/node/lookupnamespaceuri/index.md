---
title: "Node: lookupNamespaceURI() method"
short-title: lookupNamespaceURI()
slug: Web/API/Node/lookupNamespaceURI
page-type: web-api-instance-method
browser-compat: api.Node.lookupNamespaceURI
---

{{APIRef("DOM")}}

The **`lookupNamespaceURI()`** method of the {{domxref("Node")}} interface
takes a prefix as parameter and returns the namespace URI associated with it on the given node if found (and
`null` if not). This method's existence allows `Node` objects to be passed as a namespace resolver to {{domxref("XPathEvaluator.createExpression()")}} and {{domxref("XPathEvaluator.evaluate()")}}.

## Syntax

```js-nolint
lookupNamespaceURI(prefix)
```

### Parameters

- `prefix`
  - : The prefix to look for. The empty string is equivalent to `null`, meaning the default namespace.
    > [!NOTE]
    > This parameter is not optional, but can be set to `null`.

### Return value

A string containing the namespace URI corresponding to the prefix.

- Always returns `null` if the node is a {{domxref("DocumentFragment")}}, {{domxref("DocumentType")}}, {{domxref("Document")}} with no {{domxref("Document/documentElement", "documentElement")}}, or {{domxref("Attr")}} with no associated element.
- If `prefix` is `"xml"`, the return value is always `"http://www.w3.org/XML/1998/namespace"`.
- If `prefix` is `"xmlns"`, the return value is always `"http://www.w3.org/2000/xmlns/"`.
- If the `prefix` is `null`, the return value is the default namespace URI.
- If the prefix is not found, the return value is `null`.

## Example

> [!NOTE]
> This example runs in an HTML document, where `xmlns:` attributes are ignored (except `xmlns:xlink`). Firefox sets all elements' namespace URI to `null`, while Chrome and Safari appropriately set HTML, SVG, and MathML elements' default namespace URIs. If you want to conduct more meaningful tests, you can open a standalone [SVG](/en-US/docs/Web/SVG) document and execute scripts in its context.

```html
<div class="hidden">
  <div>Test HTML element</div>
  <svg>
    <text>Test SVG element</text>
  </svg>
  <svg xmlns:xlink="http://www.w3.org/1999/xlink" id="with-xlink">
    <text>Test SVG element with xlink</text>
  </svg>
  <math>Test MathML element</math>
</div>

<table>
  <thead>
    <tr>
      <th><code>prefix</code></th>
      <th><code>&lt;div&gt;</code></th>
      <th><code>&lt;svg&gt;</code></th>
      <th><code>&lt;svg xmlns:xlink&gt;</code></th>
      <th><code>&lt;math&gt;</code></th>
    </tr>
  </thead>
  <tbody></tbody>
</table>
```

```css hidden
.hidden {
  display: none;
}
```

```js
const htmlElt = document.querySelector("div");
const svgElt = document.querySelector("svg");
const svgEltXLink = document.querySelector("#with-xlink");
const mathElt = document.querySelector("math");

const tbody = document.querySelector("tbody");

for (const prefix of ["xmlns", "xml", "html", "svg", "xlink", "", null]) {
  const row = document.createElement("tr");
  tbody.appendChild(row);
  row.appendChild(document.createElement("td")).textContent =
    JSON.stringify(prefix);
  for (const el of [htmlElt, svgElt, svgEltXLink, mathElt]) {
    console.log(el, prefix, el.lookupNamespaceURI(prefix));
    row.appendChild(document.createElement("td")).textContent = String(
      el.lookupNamespaceURI(prefix),
    );
  }
}
```

{{ EmbedLiveSample('Example','100%',190) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Node.lookupPrefix")}}
- {{domxref("Node.isDefaultNameSpace")}}
