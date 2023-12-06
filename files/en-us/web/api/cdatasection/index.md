---
title: CDATASection
slug: Web/API/CDATASection
page-type: web-api-interface
browser-compat: api.CDATASection
---

{{APIRef("DOM")}}

The **`CDATASection`** interface represents a CDATA section
that can be used within XML to include extended portions of unescaped text.
When inside a CDATA section, the symbols `<` and `&` don't need escaping
as they normally do.

In XML, a CDATA section looks like:

```xml
<![CDATA[ … ]]>
```

For example:

```html
<foo>
  Here is a CDATA section: <![CDATA[ < > & ]]> with all kinds of unescaped text.
</foo>
```

The only sequence which is not allowed within a CDATA section is the closing sequence
of a CDATA section itself, `]]>`.

> **Note:** CDATA sections should not be used within HTML they are considered as comments and not displayed.

{{InheritanceDiagram}}

## Instance properties

_This interface has no specific properties and implements those of its parent
{{DOMxRef("Text")}}._

## Instance methods

_This interface has no specific methods and implements those of its parent
{{DOMxRef("Text")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.createCDATASection()")}}
