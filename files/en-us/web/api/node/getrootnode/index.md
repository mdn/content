---
title: Node.getRootNode()
slug: Web/API/Node/getRootNode
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

    - `composed`: A {{jsxref('Boolean')}} that indicates whether the shadow
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

The first simple example returns a reference to the HTML/document node:

```js
rootNode = node.getRootNode();
```

This more complex example shows the difference between returning a normal root, and a
root including the shadow root.
(See the [full source code](<https://github.com/jserz/js_piece/blob/master/DOM/Node/getRootNode()/demo/getRootNode.html>)):

```html
<!-- source: https://github.com/jserz/js_piece/blob/master/DOM/Node/getRootNode()/demo/getRootNode.html -->
<div class="js-parent">
  <div class="js-child"></div>
</div>
<div class="js-shadowHost"></div>
<script>
  // works on Chrome 54+, Opera 41+

  const parent = document.querySelector('.js-parent'),
      child = document.querySelector('.js-child'),
      shadowHost = document.querySelector('.js-shadowHost');

  console.log(parent.getRootNode().nodeName); // #document
  console.log(child.getRootNode().nodeName); // #document

  // create a ShadowRoot
  const shadowRoot = shadowHost.attachShadow({mode:'open'});
  shadowRoot.innerHTML = '<style>div{background:#2bb8aa;}</style>'
      + '<div class="js-shadowChild">content</div>';
  const shadowChild = shadowRoot.querySelector('.js-shadowChild');

  // The default value of composed is false
  console.log(shadowChild.getRootNode() === shadowRoot); // true
  console.log(shadowChild.getRootNode({composed:false}) === shadowRoot); // true
  console.log(shadowChild.getRootNode({composed:true}).nodeName); // #document
</script>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
