---
title: Attr.name
slug: Web/API/Attr/name
tags:
  - Property
  - Reference
  - Read-only
browser-compat: api.Attr.name
---
{{APIRef("DOM")}}

The read-only **`name`** property of the {{domxref("Attr")}} interface returns the _qualified name_ of an attribute, that is the name of the attribute, with the namespace prefix, if any, in front of it. For example, if the local name is `lang` and the namespace prefix is `xml`, the returned qualified name is `xml:lang`.

The qualified name is always in lower case, whatever case at the attribute creation.

### Value

A {{jsxref("String")}} representing the attribute's qualified name.

## Example

The following example displays the qualified name of the first attribute of the two first elements, when we click on the appropriate button.

### HTML Content

```html
<svg xml:lang="en-US" class="struct" height="1" width="1">Click me</svg>
<label xml:lang="en-US" class="struct"></label>

<button>Click me for &lt;svg&gt;…</button>
<button>Click me for &lt;label&gt;…</button>
<br><br>
Qualified name of the attribute <code>xml:lang</code>: <output id="result"><i>None.</i></output>
```

### JavaScript Content

```js
const elements = document.getElementsByClassName("struct");
const buttons = document.getElementsByTagName("button");
const result  = document.querySelector("#result");

function handleEvent(element) {
  return function(e) {
    attribute = element.attributes[0];
    result.value = attribute.name;
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

## See also

- The properties {{domxref("Attr.localName")}}, returning the local part of the qualified name of the attribute, and {{domxref("Attr.prefix")}}, the namespace prefix.
- The {{domxref("Element.tagName()")}} property, returning the qualified name of an {{domxref("Element")}}.
