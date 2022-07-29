---
title: Range.extractContents()
slug: Web/API/Range/extractContents
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Method
  - Range
browser-compat: api.Range.extractContents
---
{{ApiRef("DOM")}}

The **`Range.extractContents()`** method moves contents of the
{{ domxref("Range") }} from the document tree into a {{ domxref("DocumentFragment") }}.

Event listeners added using DOM Events are not retained during extraction. HTML
attribute events are retained or duplicated as they are for the
{{domxref("Node.cloneNode()")}} method. HTML `id` attributes are also cloned,
which can lead to an invalid document if a partially-selected node is extracted and
appended to the document.

Partially selected nodes are cloned to include the parent tags necessary to make the
document fragment valid.

## Syntax

```js
extractContents()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

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
  padding: .3em;
}

button {
  font-size: 1.2em;
  padding: .5em;
  pointer-events: auto;
}
```

#### JavaScript

```js
const list1 = document.getElementById('list1');
const list2 = document.getElementById('list2');
const button = document.getElementById('swap');

button.addEventListener('click', (e) => {
  selection = window.getSelection();

  for (let i = 0; i < selection.rangeCount; i++) {
    const range = selection.getRangeAt(i);

    if (range.commonAncestorContainer === list1 ||
        range.commonAncestorContainer.parentNode === list1) {
      const documentFragment = range.extractContents();
      list2.appendChild(documentFragment);
    } else if (range.commonAncestorContainer === list2 ||
        range.commonAncestorContainer.parentNode === list2) {
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
