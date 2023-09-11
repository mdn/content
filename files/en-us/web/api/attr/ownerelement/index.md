---
title: "Attr: ownerElement property"
short-title: ownerElement
slug: Web/API/Attr/ownerElement
page-type: web-api-instance-property
browser-compat: api.Attr.ownerElement
---

{{APIRef("DOM")}}

The read-only **`ownerElement`** property of the {{domxref("Attr")}} interface returns the {{domxref("Element")}} the attribute belongs to.

## Value

The {{domxref("Element")}} the attribute belongs to, or `null` if the attribute is not linked to an element.

## Example

The following example displays the qualified name of the element of the two first elements, when we click on the appropriate button.

### HTML

```html
<svg xml:lang="en-US" class="struct" height="1" width="1">Click me</svg>
<label xml:lang="en-US" class="struct"></label>

<p>
  <button>Show value for &lt;svg&gt;</button>
  <button>Show value for &lt;label&gt;</button>
</p>

<p>
  Qualified name of the owner element of the attribute <code>xml:lang</code>:
  <output id="result">None.</output>
</p>
```

### JavaScript

```js
const elements = document.querySelectorAll(".struct");
const buttons = document.querySelectorAll("button");
const outputEl = document.querySelector("#result");

let i = 0;
for (const button of buttons) {
  const element = elements[i];
  button.addEventListener("click", () => {
    const attribute = element.attributes[0];
    outputEl.value = attribute.ownerElement.tagName.toLowerCase();
  });
  i++;
}
```

{{ EmbedLiveSample('Example','100%',100) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
