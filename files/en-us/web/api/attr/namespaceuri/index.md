---
title: Attr.namespaceURI
slug: Web/API/Attr/namespaceURI
page-type: web-api-instance-property
tags:
  - Property
  - Reference
  - Read-only
browser-compat: api.Attr.namespaceURI
---
{{APIRef("DOM")}}

The read-only **`namespaceURI`** property of the {{domxref("Attr")}} interface returns the namespace URI of the attribute,
or `null` if the element is not in a namespace.

The namespace URI is set at the {{domxref("Attr")}} creation and cannot be changed.
An attribute with a namespace can be created using {{domxref("Element.setAttributeNS()")}}.

> **Note:** an attribute does not inherit its namespace from the element it is attached to.
> If an attribute is not explicitly given a namespace, it has no namespace.

The browser does not handle or enforce namespace validation per se. It is up to the JavaScript
application to do any necessary validation. Note, too, that the namespace prefix, once it
is associated with a particular attribute node, cannot be changed.

## Value

A string containing the URI of the namespace, or `null` if the attribute is not in a namespace.

## Example

The following example shows the results for a prefixed attribute in a case of an HTML element, and of a SVG element.
As HTML doesn't handle namespaces, it will always return `null` in that case.
In the case of the SVG element, it will return the URI of the XML namespace, `http://www.w3.org/XML/1998/namespace`.

### HTML Content

```html
<svg xml:lang="en-US" class="struct" height="1" width="1">Click me</svg>
<label xml:lang="en-US" class="struct"></label>

<p>
  <button>Show value for &lt;svg&gt;</button>
  <button>Show value for &lt;label&gt;</button>
</p>

<p>
  Namespace URI of the attribute <code>xml:lang</code>:
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
    outputEl.value = attribute.namespaceURI;
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

- The properties {{domxref("Attr.name")}}, returning the qualified name of the attribute, {{domxref("Attr.localName")}}, the local part of the name, and {{domxref("Attr.prefix")}}, the namespace prefix.
- The {{domxref("Element.namespaceURI")}} property, equivalent to this one but for an {{domxref("Element")}}.
- The {{domxref("Element.setAttributeNS()")}} method, creating an attribute with a given namespace.
