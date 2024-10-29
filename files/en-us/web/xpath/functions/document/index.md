---
title: document
slug: Web/XPath/Functions/document
page-type: xpath-function
---

{{XsltSidebar}}

The `document` finds a node-set in an external document, or multiple external documents, and returns the resulting node-set.

## Syntax

```plain
document( URI [,node-set] )
```

### Parameters

- `URI`
  - : An absolute or relative URI of the document to be retrieved. The URI may also include a fragment identifier.
- `node-set` (optional)
  - : An expression pointing to a node-set in the external document that should be returned.

### Return value

A node-set.

## Description

- If the URI contains a fragment identifier and that fragment can be identified in the external document, that fragment will be treated as the root in the `node-set` argument's expression. If the `node-set` argument is omitted, the entire fragment will be returned.
- If the `URI` argument is a node-set, and the second argument is present, each node in the node-set will be evaluated as a separate URI, and the returned node-set will be as if the `document` function has been called multiple times (each time with the same second argument just as given in the function call) and the resulting node-sets had been concatenated into a single node-set.
- Other specific conditions exist with specified behaviors. See the XSLT 1.0 documentation for details.
- Since the URI is relative to the XSL document, `document("")` would return the root node of the current document.

This function is an XSLT-specific addition to XPath. It is not a part of the core XPath function library.

## Specifications

[XSLT 1.0 12.1](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-document)

## Gecko support

Supported.
