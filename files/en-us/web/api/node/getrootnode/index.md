---
title: Node.getRootNode()
slug: Web/API/Node/getRootNode
page-type: web-api-instance-method
tags:
  - Method
  - Reference
browser-compat: api.Node.getRootNode
---
{{APIRef("DOM")}}

The **`getRootNode()`** method of the {{domxref("Node")}} interface
returns the context object's root,
which optionally includes the shadow root if it is available.

## Syntax

```js
getRootNode();
getRootNode(options);
```

### Parameters

- `options` {{optional_inline}}

  - : An object that sets options for getting the root node. The available options are:

    - `composed`: A boolean value that indicates whether the shadow
      root should be returned (`false`, the default), or a root node beyond
      shadow root (`true`).

### Return value

An object inheriting from {{domxref('Node')}}. This will differ in exact form depending
on where you called `getRootNode()`; for example:

- Calling it on an element inside a standard web page will return an
  {{domxref("HTMLDocument")}} object representing the entire page.
- Calling it on an element inside a shadow DOM will return the associated
  {{domxref("ShadowRoot")}}.

## Examples

### Example 1

The first simple example returns a reference to the HTML/document node:

```js
const rootNode = node.getRootNode();
```

### Example 2

This more complex example shows the difference between returning a normal root, and a
root including the shadow root.

```html
<div class="parent">
  <div class="child"></div>
</div>
<div class="shadowHost">shadowHost</div>
<pre id="output">Output: </pre>
```

```js
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');
const shadowHost = document.querySelector('.shadowHost');
const output = document.getElementById('output');

output.textContent += `\nparent's root: ${parent.getRootNode().nodeName} \n`; // #document
output.textContent += `child's  root: ${child.getRootNode().nodeName} \n\n`;  // #document

// create a ShadowRoot
const shadowRoot = shadowHost.attachShadow({mode:'open'});
shadowRoot.innerHTML = '<style>div{background:#2bb8aa;}</style><div class="shadowChild">shadowChild</div>';
const shadowChild = shadowRoot.querySelector('.shadowChild');

// The default value of composed is false
output.textContent += `shadowChild.getRootNode() === shadowRoot : ${shadowChild.getRootNode() === shadowRoot} \n`; // true
output.textContent += `shadowChild.getRootNode({composed:false}) === shadowRoot : ${shadowChild.getRootNode({composed:false}) === shadowRoot} \n`; // true
output.textContent += `shadowChild.getRootNode({composed:true}).nodeName : ${shadowChild.getRootNode({composed:true}).nodeName} \n`; // #document
```

{{ EmbedLiveSample('Example 2', '100%', '200px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
