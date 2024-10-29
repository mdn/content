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
  - : The prefix to look for.
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

```html
<div style="display: none">
  <div>Test HTML element</div>
  <svg>
    <text>Test SVG element</text>
  </svg>
  <math>Test MathML element</math>
</div>

<table>
  <thead>
    <tr>
      <th><code>prefix</code></th>
      <th><code>&lt;div&gt;</code></th>
      <th><code>&lt;svg&gt;</code></th>
      <th><code>&lt;math&gt;</code></th>
    </tr>
  </thead>
  <tbody></tbody>
</table>
```

```js
const htmlElt = document.querySelector("div");
const svgElt = document.querySelector("svg");
const mathElt = document.querySelector("math");

const tbody = document.querySelector("tbody");

for (const prefix of ["xmlns", "xml", "html", "svg", "xlink", "", null]) {
  const row = document.createElement("tr");
  tbody.appendChild(row);
  row.appendChild(document.createElement("td")).textContent =
    JSON.stringify(prefix);
  for (const el of [htmlElt, svgElt, mathElt]) {
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
