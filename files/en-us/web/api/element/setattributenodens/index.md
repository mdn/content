---
title: Element.setAttributeNodeNS()
slug: Web/API/Element/setAttributeNodeNS
tags:
  - API
  - DOM
  - Element
  - Method
  - Reference
browser-compat: api.Element.setAttributeNodeNS
---
{{ APIRef("DOM") }}

`setAttributeNodeNS` adds a new namespaced attribute node to an element.

## Syntax

```js
replacedAttr = element.setAttributeNodeNS(attributeNode)
```

- `replacedAttr` is the replaced attribute node, if any, returned by this function.
- `attributeNode` is an `Attr` node.

## Example

```js
// <div id="one" xmlns:myNS="http://www.mozilla.org/ns/specialspace"
//            myNS:special-align="utterleft">one</div>
// <div id="two">two</div>

var myns = "http://www.mozilla.org/ns/specialspace";
var d1 = document.getElementById("one");
var d2 = document.getElementById("two");
var a = d1.getAttributeNodeNS(myns, "special-align");
d2.setAttributeNodeNS(a.cloneNode(true));
alert(d2.attributes[1].value) // returns: `utterleft'
```

## Notes

If the specified attribute already exists on the element, then that attribute is replaced with the new one and the replaced one is returned.

Note that if you try to set without cloning the node, Mozilla gives an NS_ERROR_DOM_INUSE_ATTRIBUTE_ERR "Attribute already in use" error, as the DOM requires cloning for Attr to be reused (unlike other Nodes which can be moved).

{{ DOMAttributeMethods() }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
