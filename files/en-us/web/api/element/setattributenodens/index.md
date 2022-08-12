---
title: Element.setAttributeNodeNS()
slug: Web/API/Element/setAttributeNodeNS
page-type: web-api-instance-method
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
setAttributeNodeNS(attributeNode)
```

### Parameters

- `attributeNode` is an `Attr` node.

### Return value

The replaced attribute node, if any, returned by this function.

## Examples

```js
// <div id="one" xmlns:myNS="http://www.mozilla.org/ns/specialspace"
//            myNS:special-align="utterleft">one</div>
// <div id="two">two</div>

const myns = "http://www.mozilla.org/ns/specialspace";
const d1 = document.getElementById("one");
const d2 = document.getElementById("two");
const a = d1.getAttributeNodeNS(myns, "special-align");
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

## See also

- {{domxref("Document.createAttribute()")}}
- {{domxref("Document.createAttributeNS()")}}
