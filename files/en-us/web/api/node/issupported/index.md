---
title: Node.isSupported()
slug: Web/API/Node/isSupported
tags:
  - API
  - DOM
  - Method
  - NeedsBrowserCompatibility
  - NeedsMobileBrowserCompatibility
  - Node
  - Deprecated
  - Reference
browser-compat: api.Node.isSupported
---
{{APIRef("DOM")}}{{deprecated_header}}

The **`Node.isSupported()`** method returns a boolean
flag containing the result of a test whether the DOM implementation implements a
specific feature and this feature is supported by the specific node.

## Syntax

```js
boolValue = element.isSupported(feature, version)
```

### Parameters

- _feature_
  - : Is a {{domxref("DOMString")}} containing the name of the feature to test. This is
    the same name which can be passed to the method `hasFeature` on [DOMImplementation](/en-US/docs/Web/API/Document/implementation). Possible
    values defined within the core DOM specification are listed on the DOM Level 2 [Conformance
    Section](https://www.w3.org/TR/DOM-Level-2-Core/introduction.html#ID-Conformance).
- _version_
  - : Is a {{domxref("DOMString")}} containing the version number of the feature to test.
    In DOM Level 2, version 1, this is the string `2.0`. If the version is not
    specified, supporting any version of the feature will cause the method to return true.

## Example

```html
<div id="doc">
</div>

<script>
 // Get an element and check to see if its supports the DOM2 HTML Module.
 var main = document.getElementById('doc');
 var output = main.isSupported('HTML', '2.0');
</script>
```

## Specifications

This feature is not part of any specification. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Node")}} interface it belongs to.
