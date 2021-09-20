---
title: Attr.localName
slug: Web/API/Attr/localName
tags:
  - API
  - DOM
  - Property
  - Reference
browser-compat: api.Attr.localName
---
{{APIRef("DOM")}}

The **`Attr.localName`** read-only property returns the local
part of the qualified name of an attribute.

## Syntax

```js
name = attribute.localName
```

### Return value

A {{domxref("DOMString")}} representing the local part of the attribute's qualified
name.

## Example

The following example shows "id" in an alert dialog.

### HTML Content

```html
<button id="example">Click me</button>
```

### JavaScript Content

```js
const element = document.querySelector("#example");
element.addEventListener("click", function() {
  const attribute = element.attributes[0];
  alert(attribute.localName);
});
```

{{ EmbedLiveSample('Example','100%',30) }}

## Notes

The local name of an attribute is the part of the attribute's qualified name that comes
after the colon. Qualified names are typically used in XML as part of the namespace(s)
of the particular XML documents.

> **Note:** In {{Gecko("1.9.2")}} and earlier, the property returns the
> upper-cased version of the local name for HTML attributes in HTML DOMs (as opposed to
> XHTML attributes in XML DOMs). In later versions, in compliance with HTML5, the
> property returns in the case of the internal DOM storage, which is lower case for both
> HTML attributes in HTML DOMs and XHTML attributes in XML DOMs.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Attr.namespaceURI")}}
- {{domxref("Attr.prefix")}}
- {{domxref("Element.localName")}}
