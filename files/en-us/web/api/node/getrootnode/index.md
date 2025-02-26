---
title: "Node: getRootNode() method"
short-title: getRootNode()
slug: Web/API/Node/getRootNode
page-type: web-api-instance-method
browser-compat: api.Node.getRootNode
---

{{APIRef("DOM")}}

The **`getRootNode()`** method of the {{domxref("Node")}} interface
returns the context object's root,
which optionally includes the shadow root if it is available.

## Syntax

```js-nolint
getRootNode()
getRootNode(options)
```

### Parameters

- `options` {{optional_inline}}

  - : An object that sets options for getting the root node. The available options are:

    - `composed`: A boolean value that indicates whether the shadow
      root should be returned (`false`, the default), or a root node beyond
      shadow root (`true`).

### Return value

An object inheriting from {{domxref('Node')}}. This will differ in exact form depending
on where you call `getRootNode()`; for example:

- Calling it on an element inside a standard web page will return an
  {{domxref("HTMLDocument")}} object representing the entire page (or {{HTMLElement("iframe")}}).
- Calling it on an element inside a shadow DOM will return the associated
  {{domxref("ShadowRoot")}}.
- Calling it on an element that is not attached to a document or a shadow tree will return
  the root of the DOM tree it belongs to.

## Examples

### Example 1

The first simple example returns a reference to the HTML/document node:

```js
const rootNode = node.getRootNode();
```

### Example 2

This more complex example shows the difference between returning a normal root, and a
root including the shadow root:

```html
<div class="parent">
  <div class="child"></div>
</div>
<div class="shadowHost">shadowHost</div>
<pre id="output">Output: </pre>
```

```js
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const shadowHost = document.querySelector(".shadowHost");
const output = document.getElementById("output");

output.innerText += `\nparent's root: ${parent.getRootNode().nodeName}\n`; // #document
output.innerText += `child's  root: ${child.getRootNode().nodeName}\n\n`; // #document

// create a ShadowRoot
const shadowRoot = shadowHost.attachShadow({ mode: "open" });
shadowRoot.innerHTML =
  '<style>div{background:#2bb8aa;}</style><div class="shadowChild">shadowChild</div>';
const shadowChild = shadowRoot.querySelector(".shadowChild");

// The default value of composed is false
output.innerText += `shadowChild.getRootNode() === shadowRoot : ${
  shadowChild.getRootNode() === shadowRoot
}\n`; // true
output.innerText += `shadowChild.getRootNode({ composed:false }) === shadowRoot : ${
  shadowChild.getRootNode({ composed: false }) === shadowRoot
}\n`; // true
output.innerText += `shadowChild.getRootNode({ composed:true }).nodeName : ${
  shadowChild.getRootNode({ composed: true }).nodeName
}\n`; // #document
```

{{ EmbedLiveSample('Example 2', '100%', '200px') }}

### Example 3

This example returns the root of the unmounted tree.
Note `element` here is the root of the tree (as it has no parent), so by definition its root is itself:

```js
const element = document.createElement("p");
const child = document.createElement("span");

element.append(child);

const rootNode = child.getRootNode(); // <p><span></span></p>

element === rootNode; // true
element === element.getRootNode(); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
