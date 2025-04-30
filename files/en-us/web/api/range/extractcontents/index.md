---
title: "Range: extractContents() method"
short-title: extractContents()
slug: Web/API/Range/extractContents
page-type: web-api-instance-method
browser-compat: api.Range.extractContents
---

{{ApiRef("DOM")}}

The **`extractContents()`** method of the {{domxref("Range")}} interface is similar to a combination of {{domxref("Range.cloneContents()")}} and {{domxref("Range.deleteContents()")}}. It removes the child {{domxref("Node")}}s of the range from the document, clones them, and returns them as a new {{domxref("DocumentFragment")}} object. For partially selected nodes, only the selected text is deleted, but all containing parent nodes up to the common ancestor are cloned as well, resulting in two copies of these nodes, one in the original document and one in the extracted fragment.

## Syntax

```js-nolint
extractContents()
```

### Parameters

None.

### Return value

A {{ domxref("DocumentFragment") }} object.

## Examples

### Basic example

```js
const range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
const documentFragment = range.extractContents();
document.body.appendChild(documentFragment);
```

### Moving items between containers

This example lets you move items between two containers. Select one or more item, and
then click "swap" to move them to the opposite container.

#### HTML

```html
<p id="list1">123456</p>
<button id="swap">Swap selected item(s)</button>
<p id="list2">abcdef</p>
```

#### CSS

```css
body {
  pointer-events: none;
}

p {
  border: 1px solid;
  font-size: 2em;
  padding: 0.3em;
}

button {
  font-size: 1.2em;
  padding: 0.5em;
  pointer-events: auto;
}
```

#### JavaScript

```js
const list1 = document.getElementById("list1");
const list2 = document.getElementById("list2");
const button = document.getElementById("swap");

button.addEventListener("click", (e) => {
  const selection = window.getSelection();

  for (let i = 0; i < selection.rangeCount; i++) {
    const range = selection.getRangeAt(i);

    if (
      range.commonAncestorContainer === list1 ||
      range.commonAncestorContainer.parentNode === list1
    ) {
      const documentFragment = range.extractContents();
      list2.appendChild(documentFragment);
    } else if (
      range.commonAncestorContainer === list2 ||
      range.commonAncestorContainer.parentNode === list2
    ) {
      const documentFragment = range.extractContents();
      list1.appendChild(documentFragment);
    }
  }
});
```

#### Result

{{EmbedLiveSample("Moving_items_between_containers", 700, 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)
