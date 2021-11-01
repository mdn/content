---
title: CDATASection
slug: Web/API/CDATASection
tags:
  - API
  - CDATASection
  - DOM
  - Interface
  - Reference
browser-compat: api.CDATASection
---
{{APIRef("DOM")}}

The **`CDATASection`** interface represents a CDATA section
that can be used within XML to include extended portions of unescaped text. The symbols
`<` and `&` don’t need escaping as they normally do when
inside a CDATA section.

In XML, a CDATA section looks like:

```js
<![CDATA[ ... ]]>
```

For example:

```xml
<foo>Here is a CDATA section: <![CDATA[ < > & ]]> with all kinds of unescaped text.</foo>
```

The only sequence which is not allowed within a CDATA section is the closing sequence
of a CDATA section itself, `]]>`:

```xml
<![CDATA[ ]]> will cause an error ]]>
```

Note that CDATA sections should not be used within HTML; they only work in XML.

{{InheritanceDiagram(600, 120)}}

## Properties

_This interface has no specific properties and implements those of its parent
{{DOMxRef("Text")}}._

## Methods

_This interface has no specific methods and implements those of its parent
{{DOMxRef("Text")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
