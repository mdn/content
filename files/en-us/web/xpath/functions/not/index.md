---
title: not
slug: Web/XPath/Functions/not
tags:
  - XSLT
  - XSLT_Reference
---
{{ XsltRef() }}

The `not` function evaluates a boolean expression and returns the opposite value.

### Syntax

```
not( expression )
```

### Arguments

- `expression`
  - : The expression is evaluated exactly as if it were passed as an argument to the [boolean()](/en-US/docs/Web/XPath/Functions/boolean) function.

### Returns

True for an expression that evaluates to false; false for an expression that evaluates to true.

### Notes

- This function should behave similarly to the [boolean()](/en-US/docs/Web/XPath/Functions/boolean) function except that it returns the opposite value.
- You can test if an element doesn't have some attribute.

  ```xml
  <xsl:for-each match="//a[not(@name and @name = 'badname')]">
    <!-- iterates over any <a> element in the document, that
          either has no 'name' attribute at all, or it has one,
          but its value is not "badname". -->
  </xsl:template>
  ```

### Defined

[XPath 1.0 4.3](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-not)

### Gecko support

Supported.
