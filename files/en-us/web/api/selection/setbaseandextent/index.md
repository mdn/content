---
title: "Selection: setBaseAndExtent() method"
short-title: setBaseAndExtent()
slug: Web/API/Selection/setBaseAndExtent
page-type: web-api-instance-method
browser-compat: api.Selection.setBaseAndExtent
---

{{ ApiRef("DOM") }}

The **`setBaseAndExtent()`** method of the {{domxref("Selection")}} interface sets the selection to be a range including all or parts of two specified DOM nodes, and any content located between them.

The anchor and focus nodes can be located in a {{glossary("shadow tree")}}, if supported by the browser.

## Syntax

```js-nolint
setBaseAndExtent(anchorNode, anchorOffset, focusNode, focusOffset)
```

### Parameters

- `anchorNode`
  - : The node at the start of the selection.
- `anchorOffset`

  - : The number of child nodes from the start of the anchor node that should be excluded from the selection.
    So for example, if the value is 0 the whole node is included.
    If the value is 1, the whole node minus the first child node is included.
    And so on.

    If `anchorNode` is a {{domxref("Text")}} node, the offset refers to the number of characters from the start of the {{domxref("Node.textContent")}} that should be excluded from the selection.

- `focusNode`
  - : The node at the end of the selection.
- `focusOffset`

  - : The number of child nodes from the start of the focus node that should be included in the selection.
    So for example, if the value is 0 the whole node is excluded.
    If the value is 1, the first child node is included. And so on.

    If `focusNode` is a {{domxref("Text")}} node, the offset refers to the number of characters from the start of the {{domxref("Node.textContent")}} that should be included in the selection.

> [!NOTE]
> If the focus position appears before the anchor position in the document, the direction of the selection is reversed — the caret is placed at the beginning of the text rather the end, which matters for any keyboard command that might follow.
> For example, <kbd>Shift</kbd> + <kbd>➡︎</kbd> would cause the selection to narrow from the beginning rather than grow at the end.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if `anchorOffset` is larger than the number of child nodes inside `anchorNode`, or if `focusOffset` is larger than the number of child nodes inside `focusNode`.

## Examples

In this example, we have two paragraphs containing spans, each one containing a single word.
The first one is set as the `anchorNode` and the second is set as the `focusNode`.
We also have an additional paragraph that sits in between the two nodes.

Next, we have two form inputs that allow you to set the `anchorOffset` and `focusOffset` — they both have a default value of 0.

We also have a button that when pressed invokes a function that runs the `setBaseAndExtent()` method with the specified offsets, and copies the selection into the output paragraph at the very bottom of the HTML.

```html
<h1>setBaseAndExtent example</h1>
<div>
  <p class="one">
    <span>Fish</span><span>Dog</span><span>Cat</span><span>Bird</span>
  </p>
  <p>MIDDLE</p>
  <p class="two">
    <span>Car</span><span>Bike</span><span>Boat</span><span>Plane</span>
  </p>
</div>

<div>
  <p>
    <label for="aOffset">Anchor offset</label>
    <input id="aOffset" name="aOffset" type="number" value="0" />
  </p>
  <p>
    <label for="fOffset">Focus offset</label>
    <input id="fOffset" name="fOffset" type="number" value="0" />
  </p>
  <p><button>Capture selection</button></p>
</div>

<p><strong>Output</strong>: <span class="output"></span></p>
```

> [!NOTE]
> There is intentionally no [whitespace](/en-US/docs/Web/API/Document_Object_Model/Whitespace) between the `<p class="one">` and `<p class="two">` start tags and the `<span>` start tags which follow them — to avoid the presence of text nodes that would affect the number of child nodes expected. (Even though those text nodes would be whitespace-only, they would still be additional child nodes; find out more from the [`Node.firstChild` example](/en-US/docs/Web/API/Node/firstChild#example)).

The JavaScript looks like so:

```js
const one = document.querySelector(".one");
const two = document.querySelector(".two");

const aOffset = document.getElementById("aOffset");
const fOffset = document.getElementById("fOffset");

const button = document.querySelector("button");

const output = document.querySelector(".output");

let selection;

button.onclick = () => {
  try {
    selection = document.getSelection();
    selection.setBaseAndExtent(one, aOffset.value, two, fOffset.value);
    const text = selection.toString();
    output.textContent = text;
  } catch (e) {
    output.textContent = e.message;
  }
};
```

Play with the live example below, setting different offset values to see how this affects the selection.

{{ EmbedLiveSample('Examples', '100%', 370) }}

> [!NOTE]
> You can find this [example on GitHub](https://github.com/chrisdavidmills/selection-api-examples/blob/master/setBaseAndExtent.html) ([see it live also](https://chrisdavidmills.github.io/selection-api-examples/setBaseAndExtent.html).)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Selection")}}
