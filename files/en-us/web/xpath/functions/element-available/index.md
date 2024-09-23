---
title: element-available
slug: Web/XPath/Functions/element-available
page-type: xpath-function
---

{{XsltSidebar}}

The `element-available` function determines if an element is available and returns true or false.

## Syntax

```plain
element-available( QName )
```

### Parameters

- `QName`
  - : Must evaluate to a valid QName. The QName is expanded into an expanded-name using the namespace declarations in scope for the expression.

### Return value

Returns true if and only if the expanded-name is the name of an instruction. If the expanded-name has a namespace URI equal to the XSLT namespace URI, then it refers to an element defined by XSLT. Otherwise, it refers to an extension element. If the expanded-name has a null namespace URI, the element-available function will return false.

## Specifications

[XSLT 1.0 15](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-element-available)

## Gecko support

Supported.
