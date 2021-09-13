---
title: Document.evaluate()
slug: Web/API/Document/evaluate
tags:
  - API
  - DOM
  - Method
  - Reference
  - XPath
browser-compat: api.Document.evaluate
---
{{ ApiRef("DOM") }}

Returns an {{domxref("XPathResult")}} based on an [XPath](/en-US/docs/Web/XPath)
expression and other given parameters.

## Syntax

```js
var xpathResult = document.evaluate(
  xpathExpression,
  contextNode,
  namespaceResolver,
  resultType,
  result
);
```

- `xpathExpression` is a string representing the XPath to be evaluated.
- `contextNode` specifies the _context node_ for the query (see
  the [XPath
  specification](https://www.w3.org/TR/xpath)). It's common to pass `document` as the context
  node.
- `namespaceResolver` is a function that will be passed any namespace
  prefixes and should return a string representing the namespace URI associated with
  that prefix. It will be used to resolve prefixes within the XPath itself, so that
  they can be matched with the document. `null` is common for HTML
  documents or when no namespace prefixes are used.
- `resultType` is an integer that corresponds to the type of result
  `XPathResult` to return. Use [named constant
  properties](#result_types), such as `XPathResult.ANY_TYPE`, of the XPathResult
  constructor, which correspond to integers from 0 to 9.
- `result` is an existing `XPathResult` to use for the
  results. `null` is the most common and will create a new
  `XPathResult`

## Example

```js
var headings = document.evaluate("/html/body//h2", document, null, XPathResult.ANY_TYPE, null);
/* Search the document for all h2 elements.
 * The result will likely be an unordered node iterator. */
var thisHeading = headings.iterateNext();
var alertText = "Level 2 headings in this document are:\n";
while (thisHeading) {
  alertText += thisHeading.textContent + "\n";
  thisHeading = headings.iterateNext();
}
alert(alertText); // Alerts the text of all h2 elements
```

Note, in the above example, a more verbose XPath is preferred over common shortcuts
such as `//h2`. Generally, more specific XPath selectors as in the above
example usually gives a significant performance improvement, especially on very large
documents. This is because the evaluation of the query spends does not waste time
visiting unnecessary nodes. Using // is generally slow as it visits _every_
node from the root and all subnodes looking for possible matches.

Further optimization can be achieved by careful use of the context parameter. For
example, if you know the content you are looking for is somewhere inside the body tag,
you can use this:

```js
document.evaluate(".//h2", document.body, null, XPathResult.ANY_TYPE, null);
```

Notice in the above `document.body` has been used as the context instead of
`document` so the XPath starts from the body element. (In this example, the
`"."` is important to indicate that the querying should start from the
context node, document.body. If the "." was left out (leaving `//h2`) the
query would start from the root node (`html`) which would be more
wasteful.)

See [Introduction to using XPath in
JavaScript](/en-US/docs/Web/XPath/Introduction_to_using_XPath_in_JavaScript "Introduction to using XPath in JavaScript") for more information.

## Notes

- XPath expressions can be evaluated on HTML and XML documents.
- While using document.evaluate() works in FF2, in FF3 one must use
  someXMLDoc.evaluate() if evaluating against something other than the current
  document.

## Result types

These are supported values for the `resultType` parameter of the
`evaluate` method:

<table class="no-markdown">
  <thead>
    <tr>
      <th>Result Type</th>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ANY_TYPE</code></td>
      <td>0</td>
      <td>Whatever type naturally results from the given expression.</td>
    </tr>
    <tr>
      <td><code>NUMBER_TYPE</code></td>
      <td>1</td>
      <td>
        A result set containing a single number. Useful, for example, in an
        XPath expression using the <code>count()</code> function.
      </td>
    </tr>
    <tr>
      <td><code>STRING_TYPE</code></td>
      <td>2</td>
      <td>A result set containing a single string.</td>
    </tr>
    <tr>
      <td><code>BOOLEAN_TYPE</code></td>
      <td>3</td>
      <td>
        A result set containing a single boolean value. Useful, for example, an
        XPath expression using the <code>not()</code> function.
      </td>
    </tr>
    <tr>
      <td><code>UNORDERED_NODE_ITERATOR_TYPE</code></td>
      <td>4</td>
      <td>
        A result set containing all the nodes matching the expression. The nodes
        in the result set are not necessarily in the same order they appear in
        the document.
      </td>
    </tr>
    <tr>
      <td><code>ORDERED_NODE_ITERATOR_TYPE</code></td>
      <td>5</td>
      <td>
        A result set containing all the nodes matching the expression. The nodes
        in the result set are in the same order they appear in the document.
      </td>
    </tr>
    <tr>
      <td><code>UNORDERED_NODE_SNAPSHOT_TYPE</code></td>
      <td>6</td>
      <td>
        A result set containing snapshots of all the nodes matching the
        expression. The nodes in the result set are not necessarily in the same
        order they appear in the document.
      </td>
    </tr>
    <tr>
      <td><code>ORDERED_NODE_SNAPSHOT_TYPE</code></td>
      <td>7</td>
      <td>
        A result set containing snapshots of all the nodes matching the
        expression. The nodes in the result set are in the same order they
        appear in the document.
      </td>
    </tr>
    <tr>
      <td><code>ANY_UNORDERED_NODE_TYPE</code></td>
      <td>8</td>
      <td>
        A result set containing any single node that matches the expression. The
        node is not necessarily the first node in the document that matches the
        expression.
      </td>
    </tr>
    <tr>
      <td><code>FIRST_ORDERED_NODE_TYPE</code></td>
      <td>9</td>
      <td>
        A result set containing the first node in the document that matches the
        expression.
      </td>
    </tr>
  </tbody>
</table>

Results of `NODE_ITERATOR` types contain references to nodes in the
document. Modifying a node will invalidate the iterator. After modifying a node,
attempting to iterate through the results will result in an error.

Results of `NODE_SNAPSHOT` types are snapshots, which are essentially lists
of matched nodes. You can make changes to the document by altering snapshot nodes.
Modifying the document doesn't invalidate the snapshot; however, if the document is
changed, the snapshot may not correspond to the current state of the document, since
nodes may have moved, been changed, added, or removed.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.createExpression()")}}
- {{domxref("XPathResult")}}
- [XPath Code Snippets](/en-US/docs/Code_snippets/XPath)
- [Check for browser support](https://codepen.io/johan/full/ckFgn)
