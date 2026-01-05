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
  - : Returns the root {{domxref("Node")}} as specified when the `TreeWalker` was created.
- {{domxref("TreeWalker.whatToShow")}} {{ReadOnlyInline}}
  - : Returns an `unsigned long` which is a bitmask made of constants describing the types of {{domxref("Node")}} that must be presented. Non-matching nodes are skipped, but their children may be included, if relevant.
- {{domxref("TreeWalker.filter")}} {{ReadOnlyInline}}
  - : Returns the `NodeFilter` associated with this `TreeWalker` used to select the relevant nodes.
- {{domxref("TreeWalker.currentNode")}}
  - : Is the {{domxref("Node")}} on which the `TreeWalker` is currently pointing at.

## Instance methods

_This interface doesn't inherit any method._

> [!NOTE]
> In the context of a `TreeWalker`, a node is _visible_ if it exists in the logical view determined by the `whatToShow` and `filter` parameter arguments. (Whether or not the node is visible on the screen is irrelevant.)

- {{domxref("TreeWalker.parentNode()")}}
  - : Moves the current {{domxref("Node")}} to the first _visible_ ancestor node in the document order, and returns the found node. It also moves the current node to this one. If no such node exists, or if it is before that the _root node_ defined at the object construction, returns `null` and the current node is not changed.
- {{domxref("TreeWalker.firstChild()")}}
  - : Moves the current {{domxref("Node")}} to the first _visible_ child of the current node, and returns the found child. It also moves the current node to this child. If no such child exists, returns `null` and the current node is not changed. Note that the node returned by `firstChild()` is dependent on the value of `whatToShow` set during instantiation of the `TreeWalker` object. Assuming the following HTML tree, and if you set the `whatToShow` to `NodeFilter.SHOW_ALL` a call to `firstChild()` will return a `Text` node and not an `HTMLDivElement` object.

    ```html
    <!doctype html>
    <html lang="en">
      <head>
        <title>Demo</title>
      </head>
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
- Related interface: {{domxref("NodeIterator")}}.
