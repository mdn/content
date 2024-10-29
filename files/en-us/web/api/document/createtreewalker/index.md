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

  - : A {{domxref("Node")}} representing the root of the `TreeWalker` object, which is the initial value of {{domxref("TreeWalker.currentNode")}}.

- `whatToShow` {{optional_inline}}

  - : An `unsigned long` representing a bitmask created by combining the constant properties of [`NodeFilter`](https://dom.spec.whatwg.org/#interface-nodefilter). It is a convenient way of filtering for certain types of node. It defaults to `0xFFFFFFFF`, representing the `NodeFilter.SHOW_ALL` constant.

    | Constant                                                 | Numerical value | Description                                       |
    | -------------------------------------------------------- | --------------- | ------------------------------------------------- |
    | `NodeFilter.SHOW_ALL`                                    | `0xFFFFFFFF`    | Shows all nodes.                                  |
    | `NodeFilter.SHOW_ATTRIBUTE`                              | `0x2`           | Shows {{domxref("Attr")}} nodes.                  |
    | `NodeFilter.SHOW_CDATA_SECTION`                          | `0x8`           | Shows {{domxref("CDATASection")}} nodes.          |
    | `NodeFilter.SHOW_COMMENT`                                | `0x80`          | Shows {{domxref("Comment")}} nodes.               |
    | `NodeFilter.SHOW_DOCUMENT`                               | `0x100`         | Shows {{domxref("Document")}} nodes.              |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                      | `0x400`         | Shows {{domxref("DocumentFragment")}} nodes.      |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                          | `0x200`         | Shows {{domxref("DocumentType")}} nodes.          |
    | `NodeFilter.SHOW_ELEMENT`                                | `0x1`           | Shows {{domxref("Element")}} nodes.               |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}           | `0x20`          | Legacy, no longer effective.                      |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}} | `0x10`          | Legacy, no longer effective.                      |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}         | `0x800`         | Legacy, no longer effective.                      |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                 | `0x40`          | Shows {{domxref("ProcessingInstruction")}} nodes. |
    | `NodeFilter.SHOW_TEXT`                                   | `0x4`           | Shows {{domxref("Text")}} nodes.                  |

    > [!NOTE]
    > Since the parent of any `Attr` node is always `null`, {{DOMXref("TreeWalker.nextNode()")}} and {{DOMXref("TreeWalker.previousNode()")}} will never return an `Attr` node. To traverse `Attr` nodes, use {{DOMXref("Element.attributes")}} instead.

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

#### CSS

```css
span {
  background-color: aqua;
}
```

#### JavaScript

```js
const treeWalker = document.createTreeWalker(
  document.querySelector("#root"),
  NodeFilter.SHOW_TEXT,
);

while (treeWalker.nextNode()) {
  const node = treeWalker.currentNode;
  node.data = node.data.toUpperCase();
}
```

#### Result

{{EmbedLiveSample("using_whattoshow", "100%", 100)}}

### Using filter

This example uses `filter` to escape text contents. For any text node, its content will be escaped using {{JSXref("encodeURI()")}} if it is a descendant of an `.escape` element but not of any `.no-escape` element.

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

while (treeWalker.nextNode()) {
  for (const node of treeWalker.currentNode.childNodes) {
    if (node.nodeType === Node.TEXT_NODE && /\S/.test(node.data)) {
      // Exclude whitespace-only text nodes
      node.data = encodeURI(node.data.replace(/\s+/g, " "));
    }
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
