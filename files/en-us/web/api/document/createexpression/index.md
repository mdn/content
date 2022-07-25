---
title: Document.createExpression()
slug: Web/API/Document/createExpression
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Method
  - Reference
  - XPath
  - createExpression
browser-compat: api.Document.createExpression
---
{{APIRef("DOM")}}

This method compiles an {{DOMxRef("XPathExpression")}} which can then be used for
(repeated) evaluations.

## Syntax

```js
createExpression(xpathText, namespaceURLMapper)
```

### Parameters

- `xpathText`
  - : A string which is the XPath expression to be compiled.
- `namespaceURLMapper`
  - : A function which maps a namespace prefix to a
    namespace URL (or null if none needed).

{{Fx_MinVersion_Note(3, "Prior to Firefox 3, you could call this method on documents
other than the one you planned to run the XPath against. Under Firefox 3, you must call
it on the same document.")}}

### Return value

{{DOMxRef("XPathExpression")}}

## Examples

```js
let xpathExpr = document.createExpression('//div');
let xpathResult = xpathExpr.evaluate(document); // returns an XPathResult object
let nodeContext = document.getElementsByTagName('nav')[0];
// Re-using the XPathExpression "xpathExpr"
let otherResult = xpathExpr.evaluate(nodeContext); // returns an XPathResult object
```

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Document.evaluate()")}}
- {{DOMxRef("XPathExpression")}}
