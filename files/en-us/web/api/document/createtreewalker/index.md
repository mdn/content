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
  This is a text node.
  <span>And this is a <code>span</code> element.</span>
</div>
```

#### JavaScript

```js
const treeWalker = document.createTreeWalker(
  document.querySelector("#root"),
  NodeFilter.SHOW_TEXT,
);

let currentNode;
while ((currentNode = treeWalker.nextNode())) {
  currentNode.data = currentNode.data.toUpperCase();
}
```

#### Result

{{EmbedLiveSample("using_whattoshow", "100%", 100)}}

### Using filter

This example uses `filter` to escape text contents. For any `.escape` element, the text contents of all its descendants will be escaped using {{JSXref("encodeURI()")}}, unless a descendant is also a descendant of a `.no-escape` element.

#### HTML

```html
<div>
  <div>
    This is not escaped. <span class="escape">But this is escaped.</span>
  </div>
  <div class="escape">This is escaped.</div>
  <div class="no-escape">This is not escaped.</div>
</div>
<hr />
<div class="escape">
  <div>
    This is escaped. <span class="no-escape">But this is not escaped.</span>
  </div>
  <div class="no-escape">This is not escaped.</div>
</div>
<hr />
<div class="no-escape">
  <div>This is not escaped.</div>
  <div class="escape">This is not escaped.</div>
</div>
```

#### CSS

```css hidden
div {
  margin: 0.25em 0;
  padding: 0.25em;
}
span {
  display: inline-block;
}
```

```css
.escape {
  border: dashed;
}
.no-escape {
  border: solid;
}
```

#### JavaScript

```js
const treeWalker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  (node) =>
    node.classList.contains("no-escape")
      ? NodeFilter.FILTER_REJECT
      : node.closest(".escape")
      ? NodeFilter.FILTER_ACCEPT
      : NodeFilter.FILTER_SKIP,
);

let currentNode;
while ((currentNode = treeWalker.nextNode())) {
  const textTreeWalker = document.createTreeWalker(
    currentNode,
    NodeFilter.SHOW_ALL,
    (node) =>
      node.nodeName === "#text" && !/^\s*$/.test(node.data)
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT,
  );

  let currentTextNode;
  while ((currentTextNode = textTreeWalker.nextNode())) {
    currentTextNode.data = encodeURI(currentTextNode.data.replace(/\s+/g, " "));
  }
}
```

#### Result

{{EmbedLiveSample("using_filter", "100%", 400)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("TreeWalker")}}: Related interface
