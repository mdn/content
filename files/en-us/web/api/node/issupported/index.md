---
title: Node.isSupported()
slug: Web/API/Node/isSupported
page-type: web-api-instance-method
tags:
  - Method
  - Deprecated
  - Reference
browser-compat: api.Node.isSupported
---
{{APIRef("DOM")}}{{deprecated_header}}

The **`isSupported()`** method of the {{domxref("Node")}} interface returns a boolean
flag containing the result of a test whether the DOM implementation implements a
specific feature and this feature is supported by the specific node.

## Syntax

```js
isSupported(feature, version);
```

### Parameters

- `feature`
  - : A string containing the name of the feature to test.
    This is the same name which can be passed to the method `hasFeature` on [DOMImplementation](/en-US/docs/Web/API/Document/implementation). Possible values are listed in [Conformance Section](https://www.w3.org/TR/DOM-Level-2-Core/introduction.html#ID-Conformance).
- `version`
  - : A string containing the version number of the feature to test.
    For DOM Level 2, version 1, this is the string `2.0`. If the version is not
    specified, supporting any version of the feature will cause the method to return true.

## Example

```html
<div id="doc">
</div>

<script>
 // Get an element and check to see if its supports the DOM2 HTML Module.
 const main = document.getElementById('doc');
 const output = main.isSupported('HTML', '2.0');
</script>
```

## Specifications

This feature is not part of any specification. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Node")}} interface it belongs to.
