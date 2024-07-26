---
title: "Node: textContent property"
short-title: textContent
slug: Web/API/Node/textContent
page-type: web-api-instance-property
browser-compat: api.Node.textContent
---

{{APIRef("DOM")}}

The **`textContent`** property of the {{domxref("Node")}}
interface represents the text content of the node and its descendants.

> **Note:** `textContent` and {{domxref("HTMLElement.innerText")}} are easily confused,
> but the two properties are [different in important ways](#differences_from_innertext).

## Value

A string, or [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null). Its value depends on the situation:

- If the node is a {{domxref("document")}} or a {{glossary("doctype")}},
  `textContent` returns [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null).

  > [!NOTE]
  > To get _all_ of the text and [CDATA data](/en-US/docs/Web/API/CDATASection) for the whole
  > document, use `document.documentElement.textContent`.

- If the node is a [CDATA section](/en-US/docs/Web/API/CDATASection),
  a comment, a [processing instruction](/en-US/docs/Web/API/ProcessingInstruction),
  or a [text node](/en-US/docs/Web/API/Text),
  `textContent` returns, or sets, the text inside the node,
  i.e., the {{domxref("Node.nodeValue")}}.
- For other node types, `textContent` returns the concatenation of the
  `textContent` of every child node, excluding comments and processing
  instructions. (This is an empty string if the node has no children.)

> [!WARNING]
> Setting `textContent` on a node removes _all_ of the node's children
> and replaces them with a single text node with the given string value.

### Differences from innerText

Don't get confused by the differences between `Node.textContent` and
{{domxref("HTMLElement.innerText")}}. Although the names seem similar, there are
important differences:

- `textContent` gets the content of _all_ elements, including
  {{HTMLElement("script")}} and {{HTMLElement("style")}} elements. In contrast,
  `innerText` only shows "human-readable" elements.
- `textContent` returns every element in the node. In contrast,
  `innerText` is aware of styling and won't return the text of "hidden"
  elements.

  - Moreover, since `innerText` takes CSS styles into account,
    reading the value of `innerText` triggers a
    {{glossary("reflow")}} to ensure up-to-date computed styles. (Reflows can
    be computationally expensive, and thus should be avoided when possible.)

### Differences from innerHTML

{{domxref("Element.innerHTML")}} returns HTML, as its name indicates. Sometimes people
use `innerHTML` to retrieve or write text inside an element, but
`textContent` has better performance because its value is not parsed as
HTML.

Moreover, using `textContent` can prevent {{glossary("Cross-site_scripting", "XSS attacks")}}.

## Examples

Start with this HTML fragment.

```html
<div id="divA">This is <span>some</span> text!</div>
```

You can use `textContent` to get the element's text content:

```js
let text = document.getElementById("divA").textContent;
// The text variable is now: 'This is some text!'
```

If you prefer to set the element's text content, you can do:

```js
document.getElementById("divA").textContent = "This text is different!";
// The HTML for divA is now:
// <div id="divA">This text is different!</div>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLElement.innerText")}}
- {{domxref("Element.innerHTML")}}
- [More on differences between `innerText` and `textContent`](http://perfectionkills.com/the-poor-misunderstood-innerText/)
  (blog post)
