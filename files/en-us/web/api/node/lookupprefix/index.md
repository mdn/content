---
title: "Node: lookupPrefix() method"
short-title: lookupPrefix()
slug: Web/API/Node/lookupPrefix
page-type: web-api-instance-method
browser-compat: api.Node.lookupPrefix
---

{{APIRef("DOM")}}

The **`lookupPrefix()`** method of the {{domxref("Node")}} interface
returns a string containing the prefix for a given namespace URI, if present,
and `null` if not.
When multiple prefixes are possible, the first prefix is returned.

## Syntax

```js-nolint
lookupPrefix(namespace)
```

### Parameters

- `namespace`
  - : A string containing the namespace to look the prefix up. The empty string is equivalent to `null`, both causing `null` to be returned.
    > [!NOTE]
    > This parameter is not optional but can be set to `null`.

### Return value

A string containing the corresponding prefix, or `null` if none has been found.
If `namespace` is null, or the empty string, `lookupPrefix()` returns `null`.

If the node is a {{domxref("DocumentType")}} or a {{domxref("DocumentFragment")}},
`lookupPrefix()` always returns `null`.

## Example

> [!NOTE]
> This example runs in an HTML document, where `xmlns:` attributes are ignored (except `xmlns:xlink`). Firefox sets all elements' namespace URIs to `null`, while Chrome and Safari appropriately set HTML, SVG, and MathML elements' default namespace URIs. If you want to conduct more meaningful tests, you can open a standalone [SVG](/en-US/docs/Web/SVG) document and execute scripts in its context.

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
      <th><code>namespaceURI</code></th>
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

for (const uri of [
  "http://www.w3.org/2000/xmlns/",
  "http://www.w3.org/XML/1998/namespace",
  "http://www.w3.org/1999/xhtml",
  "http://www.w3.org/2000/svg",
  "http://www.w3.org/1999/xlink",
  "http://www.w3.org/1998/Math/MathML",
  "",
  null,
]) {
  const row = document.createElement("tr");
  tbody.appendChild(row);
  row.appendChild(document.createElement("td")).textContent =
    JSON.stringify(uri);
  for (const el of [htmlElt, svgElt, svgEltXLink, mathElt]) {
    console.log(el, uri, el.lookupPrefix(uri));
    row.appendChild(document.createElement("td")).textContent = String(
      el.lookupPrefix(uri),
    );
  }
}
```

{{ EmbedLiveSample('Example','100%',190) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
