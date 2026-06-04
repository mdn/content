---
title: "Document: customElementRegistry property"
short-title: customElementRegistry
slug: Web/API/Document/customElementRegistry
page-type: web-api-instance-property
browser-compat: api.Document.customElementRegistry
---

{{APIRef("Web Components")}}

The **`customElementRegistry`** read-only property of the {{domxref("Document")}} interface returns the {{domxref("CustomElementRegistry")}} object associated with this document, or `null` if one has not been set.

For documents associated with a {{domxref("Window")}} (such as the main document of a page), this is the global `CustomElementRegistry` that is also accessible through the {{domxref("window.customElements")}} property. Documents created programmatically (for example, via {{domxref("DOMImplementation.createHTMLDocument()")}}) have a `null` custom element registry by default.

This property is also available on {{domxref("ShadowRoot")}} objects via the same {{domxref("ShadowRoot/customElementRegistry","customElementRegistry")}} property name.

## Value

A {{domxref("CustomElementRegistry")}} object, or `null`.

## Examples

### Accessing a document's custom element registry

This example shows that the main document's `customElementRegistry` is the same global registry available through {{domxref("window.customElements")}}, while documents created programmatically via {{domxref("DOMImplementation.createHTMLDocument()")}} have a `null` registry by default.

```js
// The main document's registry is the global one:
console.log(document.customElementRegistry === window.customElements); // true (for Window-associated documents)

// Documents created programmatically have a null registry:
const newDoc = document.implementation.createHTMLDocument("New document");
console.log(newDoc.customElementRegistry); // null
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ShadowRoot.customElementRegistry")}}
- {{domxref("Element.customElementRegistry")}}
- {{domxref("CustomElementRegistry")}}
- {{domxref("window.customElements")}}
- [Using custom elements](/en-US/docs/Web/API/Web_components/Using_custom_elements)
