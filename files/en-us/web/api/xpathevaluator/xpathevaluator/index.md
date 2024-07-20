---
title: "XPathEvaluator: XPathEvaluator() constructor"
short-title: XPathEvaluator()
slug: Web/API/XPathEvaluator/XPathEvaluator
page-type: web-api-constructor
browser-compat: api.XPathEvaluator.XPathEvaluator
---

{{APIRef('DOM XPath')}}

The **`XPathEvaluator()`** constructor creates a new {{domxref("XPathEvaluator")}}.

## Syntax

```js-nolint
new XPathEvaluator()
```

### Parameters

None.

### Return value

A new {{domxref("XPathEvaluator")}} object.

## Examples

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

{{EmbedLiveSample("count_the_number_of_div_elements", "100%", "50")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
