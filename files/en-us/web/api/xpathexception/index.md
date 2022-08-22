---
title: XPathException
slug: Web/API/XPathException
page-type: web-api-interface
tags:
  - API
  - DOM
  - DOM XPath API
  - Exception
  - Reference
  - XPath
browser-compat: api.XPathException
---
{{APIRef("DOM XPath")}}{{Deprecated_Header}}

In the [DOM XPath API](/en-US/docs/Web/XPath) the **`XPathException`** interface represents exception conditions that can be encountered while performing XPath operations.

## Properties

- {{domxref("XPathException.code")}} {{ReadOnlyInline}}
  - : Returns a `short` that contains one of the [error code constants](#error_codes).

## Constants

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Constant</th>
      <th scope="col">Value</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>INVALID_EXPRESSION_ERR</code></td>
      <td><code>51</code></td>
      <td>
        If the expression has a syntax error or otherwise is not a legal
        expression according to the rules of the specific
        {{domxref("XPathEvaluator")}} or contains specialized
        extension functions or variables not supported by this implementation.
      </td>
    </tr>
    <tr>
      <td><code>TYPE_ERR</code></td>
      <td><code>52</code></td>
      <td>
        If the expression cannot be converted to return the specified type.
      </td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Document.createExpression()")}}
- {{DOMxRef("XPathExpression")}}
