---
title: Document.createExpression()
slug: Web/API/Document/createExpression
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
xpathExpr = document.createExpression(xpathText, namespaceURLMapper);
```

## Example

```js
let xpathExpr = document.createExpression('//div');
let xpathResult = xpathExpr.evaluate(document); // returns an XPathResult object
let nodeContext = document.getElementsBytagName('nav')[0];
// Re-using the XPathExpression "xpathExpr"
let otherResult = xpathExpr.evaluate(nodeContext); // returns an XPathResult object
```

### Parameters

- _xpathText_ is a string which is the XPath expression to be compiled.
- _namespaceURLMapper_ is a function which maps a namespace prefix to a
  namespace URL (or null if none needed).

{{Fx_MinVersion_Note(3, "Prior to Firefox 3, you could call this method on documents
  other than the one you planned to run the XPath against. Under Firefox 3, you must call
  it on the same document.")}}

### Return value

{{DOMxRef("XPathExpression")}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Document.evaluate()")}}
- {{DOMxRef("XPathExpression")}}
