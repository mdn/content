---
title: Attr.name
slug: Web/API/Attr/name
page-type: web-api-instance-property
tags:
  - Property
  - Reference
  - Read-only
browser-compat: api.Attr.name
---
{{APIRef("DOM")}}

The read-only **`name`** property of the {{domxref("Attr")}} interface returns the _qualified name_ of an attribute, that is the name of the attribute, with the namespace prefix, if any, in front of it. For example, if the local name is `lang` and the namespace prefix is `xml`, the returned qualified name is `xml:lang`.

The qualified name is always in lower case, whatever case at the attribute creation.

## Value

A string representing the attribute's qualified name.

## Example

The following example displays the qualified name of the first attribute of the two first elements, when we click on the appropriate button.

### HTML Content

```html
<svg xml:lang="en-US" class="struct" height="1" width="1">Click me</svg>
<label xml:lang="en-US" class="struct"></label>

<p>
  <button>Show value for &lt;svg&gt;</button>
  <button>Show value for &lt;label&gt;</button>
</p>

<p>
  Qualified name of the attribute <code>xml:lang</code>:
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
    outputEl.value = attribute.name;
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

- The properties {{domxref("Attr.localName")}}, returning the local part of the qualified name of the attribute, and {{domxref("Attr.prefix")}}, the namespace prefix.
- The {{domxref("Element.tagName()")}} property, returning the qualified name of an {{domxref("Element")}}.
