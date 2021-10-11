---
title: exsl:object-type()
slug: Web/EXSLT/exsl/object-type
tags:
  - EXSLT
  - NeedsSpecTable
  - Reference
---
{{XSLTRef}}{{QuickLinksWithSubpages("/en-US/docs/Web/EXSLT")}}

`exsl:object-type()` returns a string that indicates the type of the specified object.

> **Note:** Most [XSLT](/en-US/docs/Web/XSLTT) object types can be coerced into each other safely; however, certain coercions to raise error conditions. In particular, treating something that\\'s not a node-set as a node-set will do so. This function lets authors of named templates and extension functions easily provide flexibility in parameter values.

## Syntax

```js
exsl:object-type(object)
```

### Parameters

- `object`
  - : The object whose type is to be returned.

### Returns

The object's type, which will be one of the following:

- `string`
- `number`
- `boolean`
- `node-set`
- `RTF`
- `external`

## Specifications

[EXSLT - EXSL:OBJECT-TYPE](http://www.exslt.org/exsl/functions/object-type/index.html)
