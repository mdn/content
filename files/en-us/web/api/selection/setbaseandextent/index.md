---
title: Selection.setBaseAndExtent()
slug: Web/API/Selection/setBaseAndExtent
tags:
  - API
  - Experimental
  - Method
  - Reference
  - Selection
  - setBaseAndExtent
browser-compat: api.Selection.setBaseAndExtent
---
{{ ApiRef("DOM") }}{{SeeCompatTable}}

The **`setBaseAndExtent()`** method of the
{{domxref("Selection")}} interface sets the selection to be a range including all or
parts of two specified DOM nodes, and any content located between them.

## Syntax

```js
sel.setBaseAndExtent(anchorNode,anchorOffset,focusNode,focusOffset)
```

### Parameters

- _`anchorNode`_
  - : The node at the start of the selection.
- _`anchorOffset`_
  - : The number of child nodes from the start of the anchor node that should be excluded
    from the selection. So for example, if the value is 0 the whole node is included. If
    the value is 1, the whole node minus the first child node is included. And so on.
- _`focusNode`_
  - : The node at the end of the selection.
- `focusOffset`
  - : The number of child nodes from the start of the focus node that should be included
    in the selection. So for example, if the value is 0 the whole node is excluded. If the
    value is 1, the first child node is included. And so on.

> **Note:** If the focus position appears before the anchor position in
> the document, the direction of the selection is reversed — the caret is placed at the
> beginning of the text rather the end, which matters for any keyboard command that
> might follow. For example, <kbd>Shift</kbd> + <kbd>➡︎</kbd> would cause the selection
> to narrow from the beginning rather than grow at the end.

### Return Value

Void.

### Exceptions

If `anchorOffset` is larger than the number of child nodes inside
`anchorNode`, or if `focusOffset` is larger than the number of
child nodes inside `focusNode`, an {{domxref("IndexSizeError")}} exception is
thrown.

## Examples

In this example, we have two paragraphs containing spans, each one containing a single
word. The first one is set as the `anchorNode` and the second is set as the
`focusNode`. We also have an additional paragraph that sits in between the
two nodes.

Next, we have two form inputs that allow you to set the `anchorOffset` and
`focusOffset` — they both have a default value of 0.

We also have a button that when pressed invokes a function that runs the
`setBaseAndExtent()` method with the specified offsets, and copies the
selection into the output paragraph at the very bottom of the HTML.

```html
<h1>setBaseAndExtent example</h1>
<div>
  <p class="one"><span>Fish</span><span>Dog</span><span>Cat</span><span>Bird</span></p>
  <p>MIDDLE</p>
  <p class="two"><span>Car</span><span>Bike</span><span>Boat</span><span>Plane</span></p>
</div>

<div>
  <p>
    <label for="aOffset">Anchor offset</label>
    <input id="aOffset" name="aOffset" type="number" value="0">
  </p>
  <p>
    <label for="fOffset">Focus offset</label>
    <input id="fOffset" name="fOffset" type="number" value="0">
  </p>
  <p><button>Capture selection</button></p>
</div>

<p><strong>Output</strong>: <span class="output"></span></p>
```

The JavaScript looks like so:

```js
var one = document.querySelector('.one');
var two = document.querySelector('.two');

var aOffset = document.getElementById('aOffset');
var fOffset = document.getElementById('fOffset');

var button = document.querySelector('button');

var output = document.querySelector('.output');

var selection;

button.onclick = function() {
  try {
    selection = document.getSelection();
    selection.setBaseAndExtent(one, aOffset.value, two, fOffset.value);
    var text = selection.toString();
    output.textContent = text;
  } catch(e) {
    output.textContent = e.message;
  }
}
```

Play with the live example below, setting different offset values to see how this
affects the selection.

{{ EmbedLiveSample('Examples', '100%', 370) }}

> **Note:** You can find this [example
> on GitHub](https://github.com/chrisdavidmills/selection-api-examples/blob/master/setBaseAndExtent.html) ([see
> it live also](https://chrisdavidmills.github.io/selection-api-examples/setBaseAndExtent.html).)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Selection")}}
