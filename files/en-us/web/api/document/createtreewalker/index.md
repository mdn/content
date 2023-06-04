---
title: "Document: createTreeWalker() method"
short-title: createTreeWalker()
slug: Web/API/Document/createTreeWalker
page-type: web-api-instance-method
browser-compat: api.Document.createTreeWalker
---

{{ApiRef("Document")}}

The **`Document.createTreeWalker()`** creator method returns a newly created {{domxref("TreeWalker")}} object.

## Syntax

```js-nolint
createTreeWalker(root)
createTreeWalker(root, whatToShow)
createTreeWalker(root, whatToShow, filter)
```

### Parameters

- `root`

  - : A root {{domxref("Node")}} of this {{domxref("TreeWalker")}} traversal. Typically this will be an element owned by the document.

- `whatToShow` {{optional_inline}}

  - : An `unsigned long` representing a bitmask created by combining the constant properties of [`NodeFilter`](https://dom.spec.whatwg.org/#interface-nodefilter). It is a convenient way of filtering for certain types of node. It defaults to `0xFFFFFFFF`, representing the `SHOW_ALL` constant.

    | Constant                                                 | Numerical value                                         | Description                                                                                                                                                                                                                                                                                                                                                                               |
    | -------------------------------------------------------- | ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `NodeFilter.SHOW_ALL`                                    | `4294967295` (that is the max value of `unsigned long`) | Shows all nodes.                                                                                                                                                                                                                                                                                                                                                                          |
    | `NodeFilter.SHOW_ATTRIBUTE` {{deprecated_inline}}        | `2`                                                     | Shows attribute {{domxref("Attr")}} nodes. This is meaningful only when creating a {{domxref("TreeWalker")}} with an {{domxref("Attr")}} node as its root; in this case, it means that the attribute node will appear in the first position of the iteration or traversal. Since attributes are never children of other nodes, they do not appear when traversing over the document tree. |
    | `NodeFilter.SHOW_CDATA_SECTION` {{deprecated_inline}}    | `8`                                                     | Shows {{domxref("CDATASection")}} nodes.                                                                                                                                                                                                                                                                                                                                                  |
    | `NodeFilter.SHOW_COMMENT`                                | `128`                                                   | Shows {{domxref("Comment")}} nodes.                                                                                                                                                                                                                                                                                                                                                       |
    | `NodeFilter.SHOW_DOCUMENT`                               | `256`                                                   | Shows {{domxref("Document")}} nodes.                                                                                                                                                                                                                                                                                                                                                      |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                      | `1024`                                                  | Shows {{domxref("DocumentFragment")}} nodes.                                                                                                                                                                                                                                                                                                                                              |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                          | `512`                                                   | Shows {{domxref("DocumentType")}} nodes.                                                                                                                                                                                                                                                                                                                                                  |
    | `NodeFilter.SHOW_ELEMENT`                                | `1`                                                     | Shows {{domxref("Element")}} nodes.                                                                                                                                                                                                                                                                                                                                                       |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}           | `32`                                                    | Legacy, no longer usable.                                                                                                                                                                                                                                                                                                                                                                 |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}} | `16`                                                    | Legacy, no longer usable.                                                                                                                                                                                                                                                                                                                                                                 |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}         | `2048`                                                  | Legacy, no longer usable.                                                                                                                                                                                                                                                                                                                                                                 |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                 | `64`                                                    | Shows {{domxref("ProcessingInstruction")}} nodes.                                                                                                                                                                                                                                                                                                                                         |
    | `NodeFilter.SHOW_TEXT`                                   | `4`                                                     | Shows {{domxref("Text")}} nodes.                                                                                                                                                                                                                                                                                                                                                          |

- `filter` {{optional_inline}}

  - : A callback function or an object with an `acceptNode()` method, which returns `NodeFilter.FILTER_ACCEPT`, `NodeFilter.FILTER_REJECT`, or `NodeFilter.FILTER_SKIP`. The function or method will be called for each node in the subtree based at `root` which is accepted as included by the `whatToShow` flag to determine whether or not to include it in the list of iterable nodes:

    - If the return value is `NodeFilter.FILTER_ACCEPT`, this node is included.
    - If the return value is `NodeFilter.FILTER_REJECT`, any node in the subtree based at this node is not included.
    - If the return value is `NodeFilter.FILTER_SKIP`, this node is not included.

### Return value

A new {{domxref("TreeWalker")}} object.

## Examples

### Using whatToShow

This example uses `whatToShow` to transform text contents into upper case. Note that the text nodes of the descendants of the `#root` element are also traversed despite of the fact that they are not child nodes of the `#root` element.

#### HTML

```html
<div id="root">
  This is a text node. <span>This is a <code>span</code> element.</span>
<div>
```

#### Result

{{EmbedLiveSample("using_whattoshow", "100%", 100)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("TreeWalker")}}: Related interface
