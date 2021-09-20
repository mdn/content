---
title: Attr.namespaceURI
slug: Web/API/Attr/namespaceURI
tags:
  - API
  - DOM
  - Property
  - Reference
browser-compat: api.Attr.namespaceURI
---
{{APIRef("DOM")}}

The **`Attr.namespaceURI`** read-only property returns the
namespace URI of the attribute, or `null` if the element is not in a
namespace.

## Syntax

```js
namespace = attribute.namespaceURI
```

## Example

In this snippet, an attribute is being examined for its {{domxref("localName")}} and
its `namespaceURI`. If the `namespaceURI` returns the XUL
namespace and the `localName` returns "browser", then the node is understood
to be a XUL `<browser/>`.

```js
if (attribute.localName == "value" &&
    attribute.namespaceURI == "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul") {
  // this is a XUL value
}
```

## Notes

This is not a computed value that is the result of a namespace lookup based on an
examination of the namespace declarations in scope. The namespace URI of an attribute is
frozen at the attribute creation time.

In Firefox 3.5 and earlier, the namespace URI for HTML attributes in HTML documents is
`null`. In later versions, in compliance with HTML5, it is
[`https://www.w3.org/1999/xhtml`](https://www.w3.org/1999/xhtml)
as in XHTML.

You can create an attribute with the specified `namespaceURI` using the DOM
Level 2 method {{domxref("Element.setAttributeNS")}}.

Per the [Namespaces in
XML](https://www.w3.org/TR/xml-names11/) specification, an attribute does not inherit its namespace from the element it
is attached to. If an attribute is not explicitly given a namespace, it has no
namespace.

The DOM does not handle or enforce namespace validation per se. It is up to the DOM
application to do any validation necessary. Note too that the namespace prefix, once it
is associated with a particular node, cannot be changed.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Attr.localName")}}
- {{domxref("Attr.prefix")}}
- {{domxref("Element.namespaceURI")}}
