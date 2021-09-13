---
title: Node.isConnected
slug: Web/API/Node/isConnected
tags:
  - API
  - DOM
  - Node
  - Property
  - Reference
browser-compat: api.Node.isConnected
---
{{APIRef("DOM")}}

The **`isConnected`** read-only property of the
{{domxref("Node")}} interface returns a boolean indicating whether the node is connected
(directly or indirectly) to the context object, for example the {{domxref("Document")}}
object in the case of the normal DOM, or the {{domxref("ShadowRoot")}} in the case of a
shadow DOM.

## Syntax

```js
var isItConnected = nodeObjectInstance.isConnected
```

### Return value

`true` if the node is connected to its relevant context object, and `false` if not.

## Examples

### Standard DOM

A standard DOM example:

```js
let test = document.createElement('p');
console.log(test.isConnected); // Returns false
document.body.appendChild(test);
console.log(test.isConnected); // Returns true
```

### Shadow DOM

A shadow DOM example:

```js
// Create a shadow root
var shadow = this.attachShadow({mode: 'open'});

// Create some CSS to apply to the shadow dom
var style = document.createElement('style');
console.log(style.isConnected); // returns false

style.textContent = `
.wrapper {
  position: relative;
}

.info {
  font-size: 0.8rem;
  width: 200px;
  display: inline-block;
  border: 1px solid black;
  padding: 10px;
  background: white;
  border-radius: 10px;
  opacity: 0;
  transition: 0.6s all;
  positions: absolute;
  bottom: 20px;
  left: 10px;
  z-index: 3
}
`;

// Attach the created style element to the shadow dom

shadow.appendChild(style);
console.log(style.isConnected); // Returns true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Node.prototype.isConnected polyfill](https://gist.github.com/eligrey/f109a6d0bf4efe3461201c3d7b745e8f)
