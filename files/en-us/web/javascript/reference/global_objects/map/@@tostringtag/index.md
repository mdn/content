---
title: Map.prototype[@@toStringTag]
slug: Web/JavaScript/Reference/Global_Objects/Map/@@toStringTag
tags:
  - ECMAScript 2015
  - JavaScript
  - Map
  - Property
  - Prototype
  - Reference
browser-compat: javascript.builtins.Map.@@toStringTag
---
{{JSRef}}

The **`Map[@@toStringTag]`** property has an initial value of "Map".

{{EmbedInteractiveExample("pages/js/map-prototype-@@tostringtag.html","shorter")}}{{js_property_attributes(0,0,1)}}

## Syntax

```js
Map[Symbol.toStringTag]
```

## Examples

### Using toStringTag

```js
Object.prototype.toString.call(new Map()) // "[object Map]"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Symbol.toStringTag")}}
