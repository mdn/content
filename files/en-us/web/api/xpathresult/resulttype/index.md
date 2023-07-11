---
title: "XPathResult: resultType property"
short-title: resultType
slug: Web/API/XPathResult/resultType
page-type: web-api-instance-property
browser-compat: api.XPathResult.resultType
---

{{APIRef("DOM XPath")}}

The read-only **`resultType`** property of the
{{domxref("XPathResult")}} interface represents the type of the result, as defined by
the type constants.

{{AvailableInWorkers}}

## Value

An integer value representing the type of the result, as defined by the type constants.

## Constants

<table class="no-markdown">
  <thead>
    <tr>
      <th>Result Type Defined Constant</th>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ANY_TYPE</code></td>
      <td><code>0</code></td>
      <td>
        A result set containing whatever type naturally results from evaluation
        of the expression. Note that if the result is a node-set then
        <code>UNORDERED_NODE_ITERATOR_TYPE</code> is always the resulting type.
      </td>
    </tr>
    <tr>
      <td><code>NUMBER_TYPE</code></td>
      <td><code>1</code></td>
      <td>
        A result containing a single number. This is useful for example, in an
        XPath expression using the <code>count()</code> function.
      </td>
    </tr>
    <tr>
      <td><code>STRING_TYPE</code></td>
      <td><code>2</code></td>
      <td>A result containing a single string.</td>
    </tr>
    <tr>
      <td><code>BOOLEAN_TYPE</code></td>
      <td><code>3</code></td>
      <td>
        A result containing a single boolean value. This is useful for example,
        in an XPath expression using the <code>not()</code> function.
      </td>
    </tr>
    <tr>
      <td><code>UNORDERED_NODE_ITERATOR_TYPE</code></td>
      <td><code>4</code></td>
      <td>
        A result node-set containing all the nodes matching the expression. The
        nodes may not necessarily be in the same order that they appear in the
        document.
      </td>
    </tr>
    <tr>
      <td><code>ORDERED_NODE_ITERATOR_TYPE</code></td>
      <td><code>5</code></td>
      <td>
        A result node-set containing all the nodes matching the expression. The
        nodes in the result set are in the same order that they appear in the
        document.
      </td>
    </tr>
    <tr>
      <td><code>UNORDERED_NODE_SNAPSHOT_TYPE</code></td>
      <td><code>6</code></td>
      <td>
        A result node-set containing snapshots of all the nodes matching the
        expression. The nodes may not necessarily be in the same order that they
        appear in the document.
      </td>
    </tr>
    <tr>
      <td><code>ORDERED_NODE_SNAPSHOT_TYPE</code></td>
      <td><code>7</code></td>
      <td>
        A result node-set containing snapshots of all the nodes matching the
        expression. The nodes in the result set are in the same order that they
        appear in the document.
      </td>
    </tr>
    <tr>
      <td><code>ANY_UNORDERED_NODE_TYPE</code></td>
      <td><code>8</code></td>
      <td>
        A result node-set containing any single node that matches the
        expression. The node is not necessarily the first node in the document
        that matches the expression.
      </td>
    </tr>
    <tr>
      <td><code>FIRST_ORDERED_NODE_TYPE</code></td>
      <td><code>9</code></td>
      <td>
        A result node-set containing the first node in the document that matches
        the expression.
      </td>
    </tr>
  </tbody>
</table>

## Examples

The following example shows the use of the `resultType` property.

### HTML

```html
<div>XPath example</div>
<div>Is XPath result a node set: <output></output></div>
```

### JavaScript

```js
const xpath = "//div";
const result = document.evaluate(
  xpath,
  document,
  null,
  XPathResult.ANY_TYPE,
  null,
);
document.querySelector("output").textContent =
  result.resultType >= XPathResult.UNORDERED_NODE_ITERATOR_TYPE &&
  result.resultType <= XPathResult.FIRST_ORDERED_NODE_TYPE;
```

### Result

{{EmbedLiveSample('Examples', 400, 70)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
