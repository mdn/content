---
title: Element.setAttributeNS()
slug: Web/API/Element/setAttributeNS
tags:
  - API
  - DOM
  - Element
  - Method
  - Reference
browser-compat: api.Element.setAttributeNS
---
{{ APIRef("DOM") }}

`setAttributeNS` adds a new attribute or changes the value of an attribute
with the given namespace and name.

## Syntax

```js
element.setAttributeNS(namespace, name, value)
```

- `namespace` is a string specifying the namespace of the attribute.
- `name` is a string identifying the attribute by its qualified name;
  that is, a namespace prefix followed by a colon followed by a local name.
- `value` is the desired string value of the new attribute.

## Example

```js
let d = document.getElementById('d1');
d.setAttributeNS('http://www.mozilla.org/ns/specialspace', 'spec:align', 'center');
```

## Notes

{{ DOMAttributeMethods() }}

`setAttributeNS` is the only method for namespaced attributes which expects
the fully qualified name, i.e. `"namespace:localname"`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
