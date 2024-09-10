---
title: "Element: getAttributeNS() method"
short-title: getAttributeNS()
slug: Web/API/Element/getAttributeNS
page-type: web-api-instance-method
browser-compat: api.Element.getAttributeNS
---

{{APIRef("DOM")}}

The **`getAttributeNS()`** method of the {{domxref("Element")}}
interface returns the string value of the attribute with the specified namespace and
name. If the named attribute does not exist, the value returned will either be
`null` or `""` (the empty string); see [Notes](#notes) for
details.

If you are working with HTML documents and you don't need to specify the requested attribute as being part of a specific namespace, use the {{domxref("Element.getAttribute()", "getAttribute()")}} method instead.

## Syntax

```js-nolint
getAttributeNS(namespace, name)
```

### Parameters

- `namespace`
  - : The namespace in which to look for the specified attribute.
- `name`
  - : The name of the attribute to look for.

### Return value

The string value of the specified attribute. If the attribute doesn't exist, the result
is `null`.

> [!NOTE]
> Earlier versions of the DOM specification had
> this method described as returning an empty string for non-existent attributes, but it
> was not typically implemented this way since null makes more sense. The DOM4
> specification now says this method should return null for non-existent attributes.

## Examples

The following SVG document reads the value of the `foo` attribute in a
custom namespace.

```xml
<svg xmlns="http://www.w3.org/2000/svg"
    xmlns:test="http://www.example.com/2014/test" width="40" height="40">

  <circle id="target" cx="12" cy="12" r="10" stroke="#444"
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
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>getAttributeNS() test page</title>
  </head>
  <body>
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
        stroke="#444"
        stroke-width="2"
        fill="none"
        test:foo="Foo value" />
    </svg>

    <script>
      const ns = "http://www.example.com/2014/test";
      const circle = document.getElementById("target");
      console.log(`Attribute value: ${circle.getAttribute("test:foo")}`);
    </script>
  </body>
</html>
```

## Notes

`getAttributeNS()` differs from {{domxref("element.getAttribute()", "getAttribute()")}}
in that it allows you to further specify the requested attribute as
being part of a particular namespace, as in the example above, where the attribute is
part of the fictional "test" namespace.

Prior to the DOM4 specification, this method was specified to return an empty string
rather than null for non-existent attributes. However, most browsers instead returned
null. Starting with DOM4, the specification now says to return null. However, some older
browsers return an empty string. For that reason, you should use
{{domxref("element.hasAttributeNS()", "hasAttributeNS()")}} to check for an attribute's
existence prior to calling `getAttributeNS()` if it is possible that the
requested attribute does not exist on the specified element.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.hasAttributeNS()")}}
- {{domxref("Element.setAttributeNS()")}}
- {{domxref("Element.removeAttributeNS()")}}
