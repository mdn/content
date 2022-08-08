---
title: Attr.prefix
slug: Web/API/Attr/prefix
page-type: web-api-instance-property
tags:
  - Property
  - Reference
  - Read-only
browser-compat: api.Attr.prefix
---
{{APIRef("DOM")}}

The read-only **`prefix`** property of the {{domxref("Attr")}} returns the namespace prefix of the attribute, or `null` if no prefix is specified.

The prefix is always in lower case, whatever case is used at the attribute creation.

> **Note:** Only XML supports namespaces. HTML does not. That means that the prefix of an attribute of an HTML element will always be `null`.

Also, only the `xml` (for the `xml:lang` attribute), `xlink` (for the `xlink:href`, `xlink:show`, `xlink:target` and `xlink:title` attributes) and `xpath` namespaces are supported, and only on SVG and MathML elements.

## Value

A string containing the prefix of the namespace the attribute belongs too. If none, it returns `null`.

## Example

### HTML Content

```html
<svg xml:lang="en-US" class="struct" height="1" width="1">Click me</svg>
<label xml:lang="en-US" class="struct"></label>

<p>
  <button>Show value for &lt;svg&gt;</button>
  <button>Show value for &lt;label&gt;</button>
</p>

<p>
  Prefix of the attribute <code>xml:lang</code>:
  <output id="result">None.</output>
</p>
```

### JavaScript Content

```js
const elements = document.querySelectorAll(".struct");
const buttons = document.querySelectorAll("button");
const outputEl = document.querySelector("#result");

let i = 0;
for (const button of buttons) {
  const element = elements[i];
  button.addEventListener("click", () => {
    const attribute = element.attributes[0];
    outputEl.value = attribute.prefix;
  });
  i++;
}
```

{{ EmbedLiveSample('Example','100%',100) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The properties {{domxref("Attr.name")}}, returning the qualified name of the attribute, and {{domxref("Attr.localName")}}, its local name.
- The {{domxref("Element.prefix()")}} property, returning the namespace prefix of an {{domxref("Element")}}.
