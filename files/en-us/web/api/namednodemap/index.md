---
title: NamedNodeMap
slug: Web/API/NamedNodeMap
page-type: web-api-interface
browser-compat: api.NamedNodeMap
---

{{APIRef("DOM")}}

The **`NamedNodeMap`** interface represents a collection of {{domxref("Attr")}} objects. Objects inside a `NamedNodeMap` are not in any particular order, unlike {{domxref("NodeList")}}, although they may be accessed by an index as in an array.

A `NamedNodeMap` object is _live_ and will thus be auto-updated if changes are made to its contents internally or elsewhere.

> **Note:** Although called `NamedNodeMap`, this interface doesn't deal with {{domxref("Node")}} objects but with {{domxref("Attr")}} objects, which are a specialized class of {{domxref("Node")}} objects.

## Instance properties

_This interface doesn't inherit any property._

- {{domxref("NamedNodeMap.length")}} {{ReadOnlyInline}}
  - : Returns the amount of objects in the map.

## Instance methods

_This interface doesn't inherit any method._

- {{domxref("NamedNodeMap.getNamedItem()")}}
  - : Returns an {{domxref("Attr")}}, corresponding to the given name.
- {{domxref("NamedNodeMap.setNamedItem()")}}
  - : Replaces, or adds, the {{domxref("Attr")}} identified in the map by the given name.
- {{domxref("NamedNodeMap.removeNamedItem()")}}
  - : Removes the {{domxref("Attr")}} identified by the given map.
- {{domxref("NamedNodeMap.item()")}}
  - : Returns the {{domxref("Attr")}} at the given index, or `null` if the index is higher or equal to the number of nodes.
- {{domxref("NamedNodeMap.getNamedItemNS()")}}
  - : Returns an {{domxref("Attr")}} identified by a namespace and related local name.
- {{domxref("NamedNodeMap.setNamedItemNS()")}}
  - : Replaces, or adds, the {{domxref("Attr")}} identified in the map by the given namespace and related local name.
- {{domxref("NamedNodeMap.removeNamedItemNS()")}}
  - : Removes the {{domxref("Attr")}} identified by the given namespace and related local name.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.attributes")}}
