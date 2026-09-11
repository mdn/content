---
title: "Element: getAttributeNS() method"
short-title: getAttributeNS()
slug: Web/API/Element/getAttributeNS
page-type: web-api-instance-method
browser-compat: api.Element.getAttributeNS
---

{{APIRef("DOM")}}

The **`getAttributeNS()`** method of the {{domxref("Element")}} interface returns the string value of the specified namespaced attribute of the specified element. It returns `null` if the element doesn't have an attribute with the given name in the namespace.

If you are working with HTML documents and you don't need to specify the requested attribute as being part of a specific namespace, use the {{domxref("Element.getAttribute()", "getAttribute()")}} method instead.

## Syntax

```js-nolint
getAttributeNS(namespace, localName)
```

### Parameters

- `namespace`
  - : A string specifying the namespace of the attribute, or `null` for no explicit namespace.
- `localName`
  - : A string specifying the name of the attribute.

### Return value

A string containing the attribute's value, or `null` if the element doesn't have an attribute with the given name.

## Examples

The following SVG document reads the value of the `foo` attribute in a
custom namespace.

```xml
<svg xmlns="http://www.w3.org/2000/svg"
    xmlns:test="http://www.example.com/2014/test" width="40" height="40">

  <circle id="target" cx="12" cy="12" r="10" stroke="#444444"
      stroke-width="2" fill="none" test:foo="Hello namespaced attribute!"/>

  <script>
    const ns = 'http://www.example.com/2014/test';
    const circle = document.getElementById('target');

    console.log(`attribute test:foo: "${circle.getAttributeNS(ns, 'foo')}"`);
  </script>
</svg>
```

In an HTML document, the attribute has to be accessed with `test:foo` since
namespaces are not supported.

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:test="http://www.example.com/2014/test"
  width="40"
  height="40">
  <circle
    id="target"
    cx="12"
    cy="12"
    r="10"
    stroke="#444444"
    stroke-width="2"
    fill="none"
    test:foo="Foo value" />
</svg>
```

```js
const ns = "http://www.example.com/2014/test";
const circle = document.getElementById("target");
console.log(`Attribute value: ${circle.getAttribute("test:foo")}`);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.hasAttributeNS()")}}
- {{domxref("Element.setAttributeNS()")}}
- {{domxref("Element.removeAttributeNS()")}}
