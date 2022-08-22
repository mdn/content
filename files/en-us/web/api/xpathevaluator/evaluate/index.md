---
title: XPathEvaluator.evaluate()
slug: Web/API/XPathEvaluator/evaluate
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - DOM XPath API
  - Method
  - Reference
  - XPath
  - XPathEvaluator
browser-compat: api.XPathEvaluator.evaluate
---
{{APIRef("DOM XPath")}}

The `evaluate()` method of the {{domxref("XPathEvaluator")}} interface
executes an XPath expression on the given node or document and returns an
{{domxref("XPathResult")}}.

## Syntax

```js
evaluate(expression, contextNode)
evaluate(expression, contextNode, resolver)
evaluate(expression, contextNode, resolver, type)
evaluate(expression, contextNode, resolver, type, result)
```

### Parameters

- `expression`
  - : A string representing the XPath expression to be parsed and
    evaluated.
- `contextNode`
  - : A {{domxref("Node")}} representing the context to use for evaluating the expression.
- `resolver` {{optional_inline}}
  - : Permits translation of all prefixes, including the `xml` namespace
    prefix, within the XPath expression into appropriate namespace URIs.
- `type` {{optional_inline}}
  - : Specifies the type of result to be returned by evaluating the expression. This must
    be one of the {{domxref("XPathResult", "XPathResult", "Constants")}}.
- `result` {{optional_inline}}
  - : Allows to specify a result object which may be reused and returned by this method.
    If this is specified as `null` or the implementation does not reuse the
    specified result, a new result object will be returned.

### Return value

An {{domxref("XPathResult")}} object representing the result of evaluating the XPath
expression.

### Exceptions

#### INVALID_EXPRESSION_ERR

If the expression is not legal according to the rules of the
{{domxref("XPathEvaluator")}}, an {{domxref("XPathException")}} of type
`INVALID_EXPRESSION_ERR` is raised.

#### TYPE_ERR

In case result cannot be converted to the specified type, an
{{domxref("XPathException")}} of type `TYPE_ERR` is raised.

#### NAMESPACE_ERR

If the expression contains namespace prefixes which cannot be resolved by the specified
{{domxref("XPathNSResolver")}}, a {{domxref("DOMException")}} of type
`NAMESPACE_ERROR` is raised.

#### WRONG_DOCUMENT_ERR

If the provided context node is from a document that is not supported by the
{{domxref("XPathEvaluator")}}, a {{domxref("DOMException")}} of type
`WRONG_DOCUMENT_ERR` is raised.

#### NOT_SUPPORTED_ERR

If the provided context node is not a type permitted as an XPath context node or the
request type is not permitted by the {{domxref("XPathEvaluator")}}, a
{{domxref("DOMException")}} of type `NOT_SUPPORTED_ERR` is raised.

## Examples

The following example shows the use of the `evaluate()` method.

### HTML

```html
<div>XPath example</div>
<div>Number of &lt;div&gt;s: <output></output></div>
```

### JavaScript

```js
const evaluator = new XPathEvaluator();
const result = evaluator.evaluate("//div", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE);
document.querySelector("output").textContent = result.snapshotLength;
```

### Result

{{EmbedLiveSample('Examples')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
