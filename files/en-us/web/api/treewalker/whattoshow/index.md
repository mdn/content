---
title: "TreeWalker: whatToShow property"
short-title: whatToShow
slug: Web/API/TreeWalker/whatToShow
page-type: web-api-instance-property
browser-compat: api.TreeWalker.whatToShow
---

{{ APIRef("DOM") }}

The **`TreeWalker.whatToShow`** read-only property returns a
bitmask that indicates the types of
[nodes](/en-US/docs/Web/API/Node) to show. Non-matching nodes are skipped, but their
children may be included, if relevant. The possible values are:

<table class="no-markdown">
  <thead>
    <tr>
      <th>Constant</th>
      <th>Numerical value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>NodeFilter.SHOW_ALL</code></td>
      <td>
        <code>4294967295</code> (that is the max value of <code>unsigned long</code>)
      </td>
      <td>Shows all nodes.</td>
    </tr>
    <tr>
      <td>
        <code>NodeFilter.SHOW_ATTRIBUTE</code> {{deprecated_inline}}
      </td>
      <td><code>2</code></td>
      <td>
        Shows attribute {{ domxref("Attr") }} nodes. This is meaningful
        only when creating a {{ domxref("TreeWalker") }} with an
        {{ domxref("Attr") }} node as its root; in this case, it means
        that the attribute node will appear in the first position of the
        iteration or traversal. Since attributes are never children of other
        nodes, they do not appear when traversing over the document tree.
      </td>
    </tr>
    <tr>
      <td>
        <code>NodeFilter.SHOW_CDATA_SECTION</code> {{deprecated_inline}}
      </td>
      <td><code>8</code></td>
      <td>Shows {{ domxref("CDATASection") }} nodes.</td>
    </tr>
    <tr>
      <td><code>NodeFilter.SHOW_COMMENT</code></td>
      <td><code>128</code></td>
      <td>Shows {{ domxref("Comment") }} nodes.</td>
    </tr>
    <tr>
      <td><code>NodeFilter.SHOW_DOCUMENT</code></td>
      <td><code>256</code></td>
      <td>Shows {{ domxref("Document") }} nodes.</td>
    </tr>
    <tr>
      <td><code>NodeFilter.SHOW_DOCUMENT_FRAGMENT</code></td>
      <td><code>1024</code></td>
      <td>Shows {{ domxref("DocumentFragment") }} nodes.</td>
    </tr>
    <tr>
      <td><code>NodeFilter.SHOW_DOCUMENT_TYPE</code></td>
      <td><code>512</code></td>
      <td>Shows {{ domxref("DocumentType") }} nodes.</td>
    </tr>
    <tr>
      <td><code>NodeFilter.SHOW_ELEMENT</code></td>
      <td><code>1</code></td>
      <td>Shows {{ domxref("Element") }} nodes.</td>
    </tr>
    <tr>
      <td><code>NodeFilter.SHOW_ENTITY</code> {{deprecated_inline}}</td>
      <td><code>32</code></td>
      <td>Legacy, no more used.</td>
    </tr>
    <tr>
      <td>
        <code>NodeFilter.SHOW_ENTITY_REFERENCE</code>
        {{deprecated_inline}}
      </td>
      <td><code>16</code></td>
      <td>Legacy, no more used.</td>
    </tr>
    <tr>
      <td>
        <code>NodeFilter.SHOW_NOTATION</code> {{deprecated_inline}}
      </td>
      <td><code>2048</code></td>
      <td>Legacy, no more used.</td>
    </tr>
    <tr>
      <td><code>NodeFilter.SHOW_PROCESSING_INSTRUCTION</code></td>
      <td><code>64</code></td>
      <td>Shows {{ domxref("ProcessingInstruction") }} nodes.</td>
    </tr>
    <tr>
      <td><code>NodeFilter.SHOW_TEXT</code></td>
      <td><code>4</code></td>
      <td>Shows {{ domxref("Text") }} nodes.</td>
    </tr>
  </tbody>
</table>

## Value

A bitmask.

## Examples

```js
const treeWalker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_ELEMENT + NodeFilter.SHOW_COMMENT + NodeFilter.SHOW_TEXT,
  { acceptNode: (node) => NodeFilter.FILTER_ACCEPT },
  false,
);
if (
  treeWalker.whatToShow === NodeFilter.SHOW_ALL ||
  treeWalker.whatToShow % (NodeFilter.SHOW_COMMENT * 2) >=
    NodeFilter.SHOW_COMMENT
) {
  // treeWalker will show comments
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("TreeWalker")}} interface.
