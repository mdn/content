---
title: XPathEvaluator
slug: Web/API/XPathEvaluator
page-type: web-api-interface
browser-compat: api.XPathEvaluator
---

{{APIRef("DOM XPath")}}

The `XPathEvaluator` interface allows to compile and evaluate {{Glossary("XPath")}} expressions.

## Constructor

- {{domxref("XPathEvaluator.XPathEvaluator", "XPathEvaluator()")}}
  - : Creates a new `XPathEvaluator` object.

## Instance methods

- {{DOMxRef("XPathEvaluator.createExpression()")}}
  - : Creates a parsed XPath expression with resolved namespaces.
- {{DOMxRef("XPathEvaluator.createNSResolver()")}}
  - : Adapts any DOM node to resolve namespaces allowing the XPath expression to be evaluated relative to the context of the node where it appeared within the document.
- {{DOMxRef("XPathEvaluator.evaluate()")}}
  - : Evaluates an XPath expression string and returns a result of the specified type if possible.

## Example

### Count the number of `<div>` elements

The following example shows the use of the `XPathEvaluator` interface.

#### HTML

```html
<div>XPath example</div>
<div>Number of &lt;div&gt; elements: <output></output></div>
```

#### JavaScript

```js
const xpath = "//div";
const evaluator = new XPathEvaluator();
const expression = evaluator.createExpression(xpath);
const result = expression.evaluate(
  document,
  XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
);
document.querySelector("output").textContent = result.snapshotLength;
```

#### Result

{{EmbedLiveSample("count_the_number_of_div_elements", "100%", "40")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("document.createExpression()")}}
- {{domxref("XPathExpression")}}
