---
title: Attr.ownerElement
slug: Web/API/Attr/ownerElement
tags:
  - Property
  - Reference
  - Read-only
browser-compat: api.Attr.ownerElement
---
{{APIRef("DOM")}}

The read-only **`ownerElement`** property of the {{domxref("Attr")}} interface returns the {{domxref("Element")}} the attribute belongs to.

### Value

The {{domxref("Element")}} the attribute belongs to, or `null` if the attribute is not linked to an element.

## Example

The following example displays the qualified name of the element of the two first elements, when we click on the appropriate button.

### HTML Content

```html
<svg xml:lang="en-US" class="struct" height="1" width="1">Click me</svg>
<label xml:lang="en-US" class="struct"></label>

<button>Click me for &lt;svg&gt;…</button>
<button>Click me for &lt;label&gt;…</button>
<br><br>
Qualified name of the owner element of the attribute <code>xml:lang</code>: <output id="result"><i>None.</i></output>
```

### JavaScript Content

```js
const elements = document.getElementsByClassName("struct");
const buttons = document.getElementsByTagName("button");
const result  = document.querySelector("#result");

function handleEvent(element) {
  return function(e) {
    attribute = element.attributes[0];
    result.value = attribute.ownerElement.tagName.toLowerCase();
  }
}

let i=0;
for (let button of buttons) {
  button.addEventListener('click', handleEvent(elements[i]));
  i++;
}
```

{{ EmbedLiveSample('Example','100%',100) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
