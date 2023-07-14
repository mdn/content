---
title: TreeWalker
slug: Web/API/TreeWalker
page-type: web-api-interface
browser-compat: api.TreeWalker
---

{{ APIRef("DOM") }}

The **`TreeWalker`** object represents the nodes of a document subtree and a position within them.

A `TreeWalker` can be created using the {{domxref("Document.createTreeWalker()")}} method.

## Instance properties

_This interface doesn't inherit any property._

- {{domxref("TreeWalker.root")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("Node")}} representing the root node as specified when the `TreeWalker` was created.
- {{domxref("TreeWalker.whatToShow")}} {{ReadOnlyInline}}

  - : Returns an `unsigned long` being a bitmask made of constants describing the types of {{domxref("Node")}} that must be presented. Non-matching nodes are skipped, but their children may be included, if relevant. The possible values are:

    | Constant                                                 | Numerical value                                         | Description                                                                                                                                                                                                                                                                                                                                                                                     |
    | -------------------------------------------------------- | ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `NodeFilter.SHOW_ALL`                                    | `4294967295` (that is the max value of `unsigned long`) | Shows all nodes.                                                                                                                                                                                                                                                                                                                                                                                |
    | `NodeFilter.SHOW_ATTRIBUTE` {{deprecated_inline}}        | `2`                                                     | Shows attribute {{ domxref("Attr") }} nodes. This is meaningful only when creating a {{ domxref("TreeWalker") }} with an {{ domxref("Attr") }} node as its root. In this case, it means that the attribute node will appear in the first position of the iteration or traversal. Since attributes are never children of other nodes, they do not appear when traversing over the document tree. |
    | `NodeFilter.SHOW_CDATA_SECTION` {{deprecated_inline}}    | `8`                                                     | Shows {{ domxref("CDATASection") }} nodes.                                                                                                                                                                                                                                                                                                                                                      |
    | `NodeFilter.SHOW_COMMENT`                                | `128`                                                   | Shows {{ domxref("Comment") }} nodes.                                                                                                                                                                                                                                                                                                                                                           |
    | `NodeFilter.SHOW_DOCUMENT`                               | `256`                                                   | Shows {{ domxref("Document") }} nodes.                                                                                                                                                                                                                                                                                                                                                          |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                      | `1024`                                                  | Shows {{ domxref("DocumentFragment") }} nodes.                                                                                                                                                                                                                                                                                                                                                  |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                          | `512`                                                   | Shows {{ domxref("DocumentType") }} nodes.                                                                                                                                                                                                                                                                                                                                                      |
    | `NodeFilter.SHOW_ELEMENT`                                | `1`                                                     | Shows {{ domxref("Element") }} nodes.                                                                                                                                                                                                                                                                                                                                                           |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}           | `32`                                                    | Legacy, no more usable.                                                                                                                                                                                                                                                                                                                                                                         |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}} | `16`                                                    | Legacy, no more usable.                                                                                                                                                                                                                                                                                                                                                                         |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}         | `2048`                                                  | Legacy, no more usable.                                                                                                                                                                                                                                                                                                                                                                         |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                 | `64`                                                    | Shows {{ domxref("ProcessingInstruction") }} nodes.                                                                                                                                                                                                                                                                                                                                             |
    | `NodeFilter.SHOW_TEXT`                                   | `4`                                                     | Shows {{ domxref("Text") }} nodes.                                                                                                                                                                                                                                                                                                                                                              |

- {{domxref("TreeWalker.filter")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("NodeFilter")}} used to select the relevant nodes.
- {{domxref("TreeWalker.currentNode")}}
  - : Is the {{domxref("Node")}} on which the `TreeWalker` is currently pointing at.

## Instance methods

_This interface doesn't inherit any method._

> **Note:** in the context of a `TreeWalker`, a node is _visible_ if it exists in the logical view determined by the `whatToShow` and `filter` parameter arguments. (Whether or not the node is visible on the screen is irrelevant.)

- {{domxref("TreeWalker.parentNode()")}}
  - : Moves the current {{domxref("Node")}} to the first _visible_ ancestor node in the document order, and returns the found node. It also moves the current node to this one. If no such node exists, or if it is before that the _root node_ defined at the object construction, returns `null` and the current node is not changed.
- {{domxref("TreeWalker.firstChild()")}}

  - : Moves the current {{domxref("Node")}} to the first _visible_ child of the current node, and returns the found child. It also moves the current node to this child. If no such child exists, returns `null` and the current node is not changed. Note that the node returned by `firstChild()` is dependent on the value of `whatToShow` set during instantiation of the `TreeWalker` object. Assuming the following HTML tree, and if you set the `whatToShow` to `NodeFilter.SHOW_ALL` a call to `firstChild()` will return a `Text` node and not an `HTMLDivElement` object.

    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head><title>Demo</title>
      <body>
        <div id="container"></div>
      </body>
    </html>
    ```

    ```js
    let walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ALL);
    let node = walker.firstChild(); // nodeName: "#text"
    ```

    But if we do:

    ```js
    let walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_ELEMENT,
    );
    let node = walker.firstChild(); // nodeName: "DIV"
    ```

    The same applies to `nextSibling()`, `previousSibling()`, `firstChild()` and `lastChild()`

- {{domxref("TreeWalker.lastChild()")}}
  - : Moves the current {{domxref("Node")}} to the last _visible_ child of the current node, and returns the found child. It also moves the current node to this child. If no such child exists, `null` is returned and the current node is not changed.
- {{domxref("TreeWalker.previousSibling()")}}
  - : Moves the current {{domxref("Node")}} to its previous sibling, if any, and returns the found sibling. If there is no such node, return `null` and the current node is not changed.
- {{domxref("TreeWalker.nextSibling()")}}
  - : Moves the current {{domxref("Node")}} to its next sibling, if any, and returns the found sibling. If there is no such node, `null` is returned and the current node is not changed.
- {{domxref("TreeWalker.previousNode()")}}
  - : Moves the current {{domxref("Node")}} to the previous _visible_ node in the document order, and returns the found node. It also moves the current node to this one. If no such node exists, or if it is before that the _root node_ defined at the object construction, returns `null` and the current node is not changed.
- {{domxref("TreeWalker.nextNode()")}}
  - : Moves the current {{domxref("Node")}} to the next _visible_ node in the document order, and returns the found node. It also moves the current node to this one. If no such node exists, returns `null` and the current node is not changed.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The creator method: {{domxref("Document.createTreeWalker()")}}.
- Related interfaces: {{domxref("NodeFilter")}}, {{domxref("NodeIterator")}}.
