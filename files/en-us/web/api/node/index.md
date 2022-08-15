---
title: Node
slug: Web/API/Node
page-type: web-api-interface
tags:
  - Interface
  - Reference
browser-compat: api.Node
---
{{APIRef("DOM")}}

The {{Glossary("DOM")}} **`Node`** interface is an abstract base
class upon which many other DOM API objects are based, thus letting those object types
to be used similarly and often interchangeably. As an abstract class, there is
no such thing as a plain `Node` object. All objects that implement
`Node` functionality are based on one of its subclasses. Most notable are
{{domxref("Document")}}, {{domxref("Element")}}, and {{domxref("DocumentFragment")}}.

In addition, every kind of DOM node is represented by an interface based on
`Node`. These include {{DOMxRef("Attr")}}, {{DOMxRef("CharacterData")}}
(which {{DOMxRef("Text")}}, {{DOMxRef("Comment")}}, {{DOMxRef("CDATASection")}} and
{{DOMxRef("ProcessingInstruction")}} are all based on), and {{DOMxRef("DocumentType")}}.

In some cases, a particular feature of the base `Node` interface may not
apply to one of its child interfaces; in that case, the inheriting node may
return `null` or throw an exception, depending on circumstances. For example,
attempting to add children to a node type that cannot have children will throw an
exception.

{{InheritanceDiagram}}

## Properties

_In addition to the properties below, `Node` inherits properties from its
parent, {{DOMxRef("EventTarget")}}_.

- {{DOMxRef("Node.baseURI")}} {{ReadOnlyInline}}
  - : Returns a string representing the base URL of the document
    containing the `Node`.
- {{DOMxRef("Node.childNodes")}} {{ReadOnlyInline}}
  - : Returns a live {{DOMxRef("NodeList")}} containing all the children of this node
    (including elements, text and comments). {{DOMxRef("NodeList")}} being live means that
    if the children of the `Node` change, the {{DOMxRef("NodeList")}} object is
    automatically updated.
- {{DOMxRef("Node.firstChild")}} {{ReadOnlyInline}}
  - : Returns a `Node` representing the first direct child node of the node,
    or `null` if the node has no child.
- {{DOMxRef("Node.isConnected")}} {{ReadOnlyInline}}
  - : A boolean indicating whether or not the Node is connected (directly or indirectly)
    to the context object, e.g. the {{DOMxRef("Document")}} object in the case of the
    normal DOM, or the {{DOMxRef("ShadowRoot")}} in the case of a shadow DOM.
- {{DOMxRef("Node.lastChild")}} {{ReadOnlyInline}}
  - : Returns a `Node` representing the last direct child node of the node,
    or `null` if the node has no child.
- {{DOMxRef("Node.nextSibling")}} {{ReadOnlyInline}}
  - : Returns a `Node` representing the next node in the tree, or
    `null` if there isn't such node.
- {{DOMxRef("Node.nodeName")}} {{ReadOnlyInline}}
  - : Returns a string containing the name of the `Node`. The
    structure of the name will differ with the node type. E.g. An
    {{DOMxRef("HTMLElement")}} will contain the name of the corresponding tag, like
    `'audio'` for an {{DOMxRef("HTMLAudioElement")}}, a {{DOMxRef("Text")}}
    node will have the `'#text'` string, or a {{DOMxRef("Document")}} node will
    have the `'#document'` string.
- {{DOMxRef("Node.nodeType")}} {{ReadOnlyInline}}
  - : Returns an `unsigned short` representing the type of the node. Possible
    values are:

    | Name                                                 | Value |
    | ---------------------------------------------------- | ----- |
    | `ELEMENT_NODE`                                       | `1`   |
    | `ATTRIBUTE_NODE`                                     | `2`   |
    | `TEXT_NODE`                                          | `3`   |
    | `CDATA_SECTION_NODE`                                 | `4`   |
    | `PROCESSING_INSTRUCTION_NODE`                        | `7`   |
    | `COMMENT_NODE`                                       | `8`   |
    | `DOCUMENT_NODE`                                      | `9`   |
    | `DOCUMENT_TYPE_NODE`                                 | `10`  |
    | `DOCUMENT_FRAGMENT_NODE`                             | `11`  |

- {{DOMxRef("Node.nodeValue")}}
  - : Returns / Sets the value of the current node.
- {{DOMxRef("Node.ownerDocument")}} {{ReadOnlyInline}}
  - : Returns the {{DOMxRef("Document")}} that this node belongs to. If the node is itself
    a document, returns `null`.
- {{DOMxRef("Node.parentNode")}} {{ReadOnlyInline}}
  - : Returns a `Node` that is the parent of this node. If there is no such
    node, like if this node is the top of the tree or if doesn't participate in a tree,
    this property returns `null`.
- {{DOMxRef("Node.parentElement")}} {{ReadOnlyInline}}
  - : Returns an {{DOMxRef("Element")}} that is the parent of this node. If the node has
    no parent, or if that parent is not an {{DOMxRef("Element")}}, this property returns
    `null`.
- {{DOMxRef("Node.previousSibling")}} {{ReadOnlyInline}}
  - : Returns a `Node` representing the previous node in the tree, or
    `null` if there isn't such node.
- {{DOMxRef("Node.textContent")}}
  - : Returns / Sets the textual content of an element and all its descendants.

## Methods

_In addition to the methods below, `Node` inherits methods from its
parent, {{DOMxRef("EventTarget")}}._

- {{DOMxRef("Node.appendChild()")}}
  - : Adds the specified `childNode` argument as the last child to
    the current node.
    If the argument referenced an existing node on the DOM tree, the node will be detached
    from its current position and attached at the new position.
- {{DOMxRef("Node.cloneNode()")}}
  - : Clone a `Node`, and optionally, all of its contents. By default, it
    clones the content of the node.
- {{DOMxRef("Node.compareDocumentPosition()")}}
  - : Compares the position of the current node against another node in any other
    document.
- {{DOMxRef("Node.contains()")}}
  - : Returns `true` or `false` value indicating whether or not a node is a
    descendant of the calling node.
- {{DOMxRef("Node.getRootNode()")}}
  - : Returns the context object's root which optionally includes the shadow root if it is
    available.
- {{DOMxRef("Node.hasChildNodes()")}}
  - : Returns a boolean value indicating whether or not the element has any child
    nodes.
- {{DOMxRef("Node.insertBefore()")}}
  - : Inserts a `Node` before the reference node as a child of a specified
    parent node.
- {{DOMxRef("Node.isDefaultNamespace()")}}
  - : Accepts a namespace URI as an argument and returns a boolean value with a
    value of `true` if the namespace is the default namespace on the given node
    or `false` if not.
- {{DOMxRef("Node.isEqualNode()")}}
  - : Returns a boolean value which indicates whether or not two nodes are of the
    same type and all their defining data points match.
- {{DOMxRef("Node.isSameNode()")}}
  - : Returns a boolean value indicating whether or not the two nodes are
    the same (that is, they reference the same object).
- {{DOMxRef("Node.lookupPrefix()")}}
  - : Returns a string containing the prefix for a given namespace URI,
    if present, and `null` if not. When multiple prefixes are possible, the
    result is implementation-dependent.
- {{DOMxRef("Node.lookupNamespaceURI()")}}
  - : Accepts a prefix and returns the namespace URI associated with it on the given node
    if found (and `null` if not). Supplying `null` for the prefix
    will return the default namespace.
- {{DOMxRef("Node.normalize()")}}
  - : Clean up all the text nodes under this element (merge adjacent, remove empty).
- {{DOMxRef("Node.removeChild()")}}
  - : Removes a child node from the current element, which must be a child of the current
    node.
- {{DOMxRef("Node.replaceChild()")}}
  - : Replaces one child `Node` of the current one with the second one given
    in parameter.

### Obsolete methods

- {{DOMxRef("Node.isSupported()")}} {{deprecated_inline}}
  - : Returns `true` or `false` containing the result of a test whether the DOM
    implementation implements a specific feature and this feature is supported by the
    specific node.

## Examples

### Remove all children nested within a node

This function remove each first child of an element, until there are none left.

```js
function removeAllChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
```

Using this function is a single call. Here we empty the body of the document:

```js
removeAllChildren(document.body);
```

An alternative could be to set the textContent to the empty string: `document.body.textContent = ""`.

### Recurse through child nodes

The following function recursively calls a callback function for each node contained by
a root node (including the root itself):

```js
function eachNode(rootNode, callback) {
  if (!callback) {
    const nodes = [];
    eachNode(rootNode, (node) => {
      nodes.push(node);
    })
    return nodes;
  }

  if (callback(rootNode) === false) {
    return false;
  }

  if (rootNode.hasChildNodes()) {
    for (const node of rootNode.childNodes) {
      if (eachNode(node, callback) === false) {
        return;
      }
    }
  }
}
```

The function recursively calls a function for each descendant node of
`rootNode` (including the root itself).

If `callback` is omitted, the function returns an
{{jsxref("Array")}} instead, which contains `rootNode` and all
nodes contained within.

If `callback` is provided, and it returns
`false` when called, the current recursion level is aborted, and the function
resumes execution at the last parent's level. This can be used to abort loops once a
node has been found (such as searching for a text node which contains a certain string).

The function has two parameters:

- `rootNode`
  - : The `Node` object whose descendants will be recursed through.
- `callback` {{optional_inline}}
  - : An optional callback [function](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) that
    receives a `Node` as its only argument. If omitted, `eachNode`
    returns an {{jsxref("Array")}} of every node contained within
    `rootNode` (including the root itself).

The following demonstrates a real-world use of the `eachNode()` function:
searching for text on a web-page.

We use a wrapper function named `grep` to do the searching:

```js
function grep(parentNode, pattern) {
  let matches = [];
  let endScan = false;

  eachNode(parentNode, (node) => {
    if (endScan) {
      return false;
    }

    // Ignore anything which isn't a text node
    if (node.nodeType !== Node.TEXT_NODE) {
      return;
    }

    if (typeof pattern === "string" && node.textContent.includes(pattern)) {
      matches.push(node)
    } else if (pattern.test(node.textContent)) {
      if (!pattern.global) {
        endScan = true;
        matches = node;
      } else {
        matches.push(node);
      }
    }
  })

  return matches;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
