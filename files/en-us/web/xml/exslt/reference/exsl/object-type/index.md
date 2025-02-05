---
title: exsl:object-type()
slug: Web/XML/EXSLT/Reference/exsl/object-type
page-type: exslt-function
sidebar: xmlsidebar
---

`exsl:object-type()` returns a string that indicates the type of the specified object.

> [!NOTE]
> Most [XSLT](/en-US/docs/Web/XML/XSLT) object types can be coerced into each other safely; however, certain coercions to raise error conditions. In particular, treating something that's not a node-set as a node-set will do so. This function lets authors of named templates and extension functions easily provide flexibility in parameter values.

## Syntax

```plain
exsl:object-type(object)
```

### Parameters

- `object`
  - : The object whose type is to be returned.

### Return value

The object's type, which will be one of the following:

- `string`
- `number`
- `boolean`
- `node-set`
- `RTF`
- `external`

## Specifications

[EXSLT - EXSL:OBJECT-TYPE](https://exslt.github.io/exsl/functions/object-type/index.html)
