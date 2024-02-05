---
title: "HTMLElement: innerText property"
short-title: innerText
slug: Web/API/HTMLElement/innerText
page-type: web-api-instance-property
browser-compat: api.HTMLElement.innerText
---

{{APIRef("HTML DOM")}}

The **`innerText`** property of the {{domxref("HTMLElement")}} interface represents the rendered text content of a node and its descendants.

As a getter, it approximates the text the user would get if they highlighted the contents of the element with the cursor and then copied it to the clipboard.
As a setter this will replace the element's children with the given value, converting any line breaks into {{HTMLElement("br")}} elements.

> **Note:** `innerText` is easily confused with {{domxref("Node.textContent")}}, but there are important differences between the two.
> Basically, `innerText` is aware of the rendered appearance of text, while `textContent` is not.

## Value

A string representing the rendered text content of an element.

If the element itself is not [being rendered](https://html.spec.whatwg.org/multipage/rendering.html#being-rendered) (for example, is detached from the document or is hidden from view), the returned value is the same as the {{domxref("Node.textContent")}} property.

> **Warning:** Setting `innerText` on a node removes _all_ of the node's children
> and replaces them with a single text node with the given string value.

## Examples

This example compares `innerText` with {{domxref("Node.textContent")}}.
Note how `innerText` is aware of things like {{htmlElement("br")}} elements, and ignores hidden elements.

### HTML

```html
<h3>Source element:</h3>
<p id="source">
  <style>
    #source {
      color: red;
    }
    #text {
      text-transform: uppercase;
    }
  </style>
  <span id="text">
    Take a look at<br />
    how this text<br />
    is interpreted below.
  </span>
  <span style="display:none">HIDDEN TEXT</span>
</p>
<h3>Result of textContent:</h3>
<textarea id="textContentOutput" rows="6" cols="30" readonly>…</textarea>
<h3>Result of innerText:</h3>
<textarea id="innerTextOutput" rows="6" cols="30" readonly>…</textarea>
```

### JavaScript

```js
const source = document.getElementById("source");
const textContentOutput = document.getElementById("textContentOutput");
const innerTextOutput = document.getElementById("innerTextOutput");

textContentOutput.value = source.textContent;
innerTextOutput.value = source.innerText;
```

### Result

{{EmbedLiveSample("Examples", 700, 450)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLElement.outerText")}}
- {{domxref("Element.innerHTML")}}
