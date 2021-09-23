---
title: XPathEvaluator.createExpression()
slug: Web/API/XPathEvaluator/createExpression
tags:
  - API
  - DOM
  - DOM XPath API
  - Method
  - Reference
  - XPath
  - XPathEvaluator
browser-compat: api.XPathEvaluator.createExpression
---
{{APIRef("DOM XPath")}}

This method compiles an {{domxref("XPathExpression")}} which can then be used for
(repeated) evaluations of the {{Glossary("XPath")}} expression.

## Syntax

```js
XPathExpression XPathEvaluator.createExpression(expression, resolver);
```

### Parameters

- expression
  - : A {{domxref("DOMString")}} representing the XPath expression to be created.
- resolver {{optional_inline}}
  - : Permits translation of all prefixes, including the `xml` namespace
    prefix, within the XPath expression into appropriate namespace URIs.

### Return value

A {{domxref("XPathExpression")}} representing the compiled form of the XPath
expression.

### Exceptions

#### INVALID_EXPRESSION_ERR

If the expression is not legal according to the rules of the
`XPathEvaluator`, an {{domxref("XPathException")}} of type
`INVALID_EXPRESSION_ERR` is raised.

#### NAMESPACE_ERR

If the expression contains namespace prefixes which cannot be resolved by the specified
{{domxref("XPathNSResolver")}}, a {{domxref("DOMException")}} of type
`NAMESPACE_ERROR` is raised.

## Example

The following example shows the use of the `evaluate()` method.

### HTML

```html
<div>XPath example</div>
<div>Number of &lt;div&gt;s: <output></output></div>
```

### JavaScript

```js
var xpath = "//div";
var evaluator = new XPathEvaluator();
var expression = evaluator.createExpression("//div");
var result = expression.evaluate(document, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE);
document.querySelector("output").textContent = result.snapshotLength;
```

### Result

{{EmbedLiveSample('Example', 400, 70)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Document.createExpression()")}}
- {{DOMxRef("XPathExpression")}}
