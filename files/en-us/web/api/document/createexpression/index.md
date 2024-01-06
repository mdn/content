---
title: "Document: createExpression() method"
short-title: createExpression()
slug: Web/API/Document/createExpression
page-type: web-api-instance-method
browser-compat: api.Document.createExpression
---

{{APIRef("DOM")}}

This method compiles an {{DOMxRef("XPathExpression")}} which can then be used for (repeated) evaluations.

You must call this method on the same document that you run the expression against.

## Syntax

```js-nolint
createExpression(xpathText, namespaceURLMapper)
```

### Parameters

- `xpathText`
  - : A string which is the XPath expression to be compiled.
- `namespaceURLMapper`
  - : A function which maps a namespace prefix to a
    namespace URL (or null if none needed).

### Return value

{{DOMxRef("XPathExpression")}}

## Examples

```js
const xpathExpr = document.createExpression("//div");
const xpathResult = xpathExpr.evaluate(document); // returns an XPathResult object
const nodeContext = document.querySelector("nav");
// Re-using the XPathExpression "xpathExpr"
const otherResult = xpathExpr.evaluate(nodeContext); // returns an XPathResult object
```

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Document.evaluate()")}}
- {{DOMxRef("XPathExpression")}}
