---
title: Attr.localName
slug: Web/API/Attr/localName
tags:
  - Property
  - Reference
  - Read-only
browser-compat: api.Attr.localName
---
{{APIRef("DOM")}}

The read-only **`localName`** property of the {{domxref("Attr")}} interface returns the _local part_ of the _qualified name_ of an attribute, that is the name of the attribute, stripped from any namespace in front of it. For example, if the qualified name is `xml:lang`, the returned local name is `lang`, if the element supports that namespace.

The local name is always in lower case, whatever case at the attribute creation.

> **Note:** HTML only supports a fixed set of namespaces on SVG and MathML elements. These are `xml` (for the `xml:lang` attribute), `xlink` (for the `xlink:href`, `xlink:show`, `xlink:target` and `xlink:title` attributes) and `xpath`.
>
> That means that the local name of an attribute of an HTML element is always be equal to its qualified name: Colons are treated as regular characters. In XML, like in SVG or MathML, the colon denotes the end of the prefix and what is before is the namespace; the local name may be different from the qualified name.

### Value

A {{jsxref("String")}} representing the local part of the attribute's qualified name.

## Example

The following example displays the local name of the first attribute of the two first elements, when we click on the appropriate button. The {{SVGElement("svg")}} element is XML and supports namespaces leading to the local name (`lang`) to be different from the qualified name `xml:lang`. The {{HTMLElement("label")}} element is HTML, that doesn't support namespaces, leading to a local name and the qualified name to be both `xml:lang`.

### HTML Content

```html
<svg xml:lang="en-US" class="struct" height="1" width="1">Click me</svg>
<label xml:lang="en-US" class="struct"></label>

<button>Click me for &lt;svg&gt;…</button>
<button>Click me for &lt;label&gt;…</button>
<br><br>
Local part of the attribute <code>xml:lang</code>: <output id="result"><i>None.</i></output>
```

### JavaScript Content

```js
const elements = document.getElementsByClassName("struct");
const buttons = document.getElementsByTagName("button");
const result  = document.querySelector("#result");

function handleEvent(element) {
  return function(e) {
    attribute = element.attributes[0];
    result.value = attribute.localName;
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

- The properties {{domxref("Attr.name")}}, returning the qualified name of the attribute, and {{domxref("Attr.prefix")}}, the namespace prefix.
- The {{domxref("Element.localName()")}} property, returning the local name of an {{domxref("Element")}}.
