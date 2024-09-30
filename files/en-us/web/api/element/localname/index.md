---
title: "Element: localName property"
short-title: localName
slug: Web/API/Element/localName
page-type: web-api-instance-property
browser-compat: api.Element.localName
---

{{APIRef("DOM")}}

The **`Element.localName`** read-only property returns the
local part of the qualified name of an element.

## Value

A string representing the local part of the element's qualified name.

## Examples

(Must be served with XML content type, such as `text/xml` or
`application/xhtml+xml`.)

```xml
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:svg="http://www.w3.org/2000/svg">
<head>
  <script type="application/javascript"><![CDATA[
  function test() {
    const text = document.getElementById('text');
    const circle = document.getElementById('circle');

    text.value = "<svg:circle> has:\n" +
                 "localName = '" + circle.localName + "'\n" +
                 "namespaceURI = '" + circle.namespaceURI + "'";
  }
  ]]></script>
</head>
<body onload="test()">
  <svg:svg version="1.1"
    width="100px" height="100px"
    viewBox="0 0 100 100">
    <svg:circle cx="50" cy="50" r="30" style="fill:#aaa" id="circle"/>
  </svg:svg>
  <textarea id="text" rows="4" cols="55"/>
</body>
</html>
```

## Notes

The local name of a node is that part of the node's qualified name that comes after the
colon. Qualified names are typically used in XML as part of the namespace(s) of the
particular XML documents. For example, in the qualified name
`ecomm:partners`, `partners` is the local name and
`ecomm` is the prefix:

```xml
<ecomm:business id="soda_shop" type="brick_n_mortar" xmlns:ecomm="http://example.com/ecomm">
  <ecomm:partners>
    <ecomm:partner id="1001">Tony's Syrup Warehouse
    </ecomm:partner>
  </ecomm:partner>
</ecomm:business>
```

> [!NOTE]
> While the property returns the case of the internal DOM storage, which is lower case, note that {{domxref("element.tagName","tagName")}} property returns upper case for HTML elements in HTML DOMs.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.tagName")}}
- {{domxref("Element.namespaceURI")}}
- {{domxref("Element.prefix")}}
- {{domxref("Attr.localName")}}
