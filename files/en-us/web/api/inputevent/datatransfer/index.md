---
title: InputEvent.dataTransfer
slug: Web/API/InputEvent/dataTransfer
tags:
  - API
  - DOM Events
  - DataTransfer
  - Experimental
  - Input
  - InputEvent
  - Property
  - Reference
  - events
browser-compat: api.InputEvent.dataTransfer
---
{{APIRef("DOM Events")}}

The **`dataTransfer`** read-only property of the
{{domxref("InputEvent")}} interface returns a {{domxref("DataTransfer")}} object
containing information about richtext or plaintext data being added to or removed from
editable content.

## Syntax

```js
var dataTransfer = inputEvent.dataTransfer
```

### Value

A {{domxref("DataTransfer")}} object.

## Examples

In the following simple example we've set up an event listener on the [input](/en-US/docs/Web/API/HTMLElement/input_event) event so that when any
content is pasted into the contenteditable {{htmlelement("p")}} element, its HTML source
is retrieved via the
[`InputEvent.dataTransfer.getData()`](/en-US/docs/Web/API/DataTransfer/getData)
method and reported in the paragraph below the input.

Try copying and pasting some of the content provided to see the effects.

```html
<p><span style="font-weight: bold; color: blue">Whoa, bold blue text!</span></p>
<p><span style="font-style: italic; color: red">Exciting: italic red text!</span></p>
<p>Boring normal text ;-(</p>

<hr>

<p contenteditable="true">Go on, try pasting some content into this editable paragraph and see what happens!</p>

<p class="result"></p>
```

```js
var editable = document.querySelector('p[contenteditable]');
var result = document.querySelector('.result')
var dataTransferObj;

editable.addEventListener('input', (e) => {
  result.textContent = e.dataTransfer.getData('text/html');
});
```

{{EmbedLiveSample('Examples', '100%', 250)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
