---
title: XPathExpression
slug: Web/API/XPathExpression
page-type: web-api-interface
tags:
  - API
  - DOM
  - DOM XPath API
  - Document
  - Interface
  - Reference
  - XML
  - XPath
  - XPathExpression
browser-compat: api.XPathExpression
---
{{APIRef("DOM")}}

This interface is a compiled XPath expression that can be evaluated on a document or specific node to return information from its {{Glossary("DOM")}} tree.

This is useful when an expression will be reused in an application, because it is just compiled once and all namespace prefixes which occur within the expression are preresolved.

Objects of this type are created by calling {{domxref("XPathEvaluator.createExpression", "XPathEvaluator.createExpression()")}}.

## Methods

- {{DOMxRef("XPathExpression.evaluate()")}}
  - : Evaluates the XPath expression on the given node or document.

## Example

The following example shows the use of the `XPathExpression` interface.

### HTML

```html
<div>XPath example</div>
<div>Number of &lt;div&gt;s: <output></output></div>
```

### JavaScript

```js
const xpath = "//div";
const evaluator = new XPathEvaluator();
const expression = evaluator.createExpression(xpath);
const result = expression.evaluate(document, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE);
document.querySelector("output").textContent = result.snapshotLength;
```

### Result

{{EmbedLiveSample('Example', 400, 70)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("document.createExpression()")}}
- {{DOMxRef("XPathResult")}}
