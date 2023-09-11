---
title: "CustomElementRegistry: whenDefined() method"
short-title: whenDefined()
slug: Web/API/CustomElementRegistry/whenDefined
page-type: web-api-instance-method
browser-compat: api.CustomElementRegistry.whenDefined
---

{{APIRef("CustomElementRegistry")}}

The **`whenDefined()`** method of the
{{domxref("CustomElementRegistry")}} interface returns a {{jsxref("Promise")}} that
resolves when the named element is defined.

## Syntax

```js-nolint
whenDefined(name)
```

### Parameters

- `name`
  - : The name of the custom element.

### Return value

A {{jsxref("Promise")}} that fulfills with the [custom element](/en-US/docs/Web/API/Web_components/Using_custom_elements)'s constructor when a custom element becomes defined with the given name. If a custom element has already been defined with the name, the promise will immediately fulfill.

The promise is rejected with a `SyntaxError` {{domxref("DOMException")}} if the name is not a [valid custom element name](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name).

## Examples

This example uses `whenDefined()` to detect when the custom elements that
make up a menu are defined. The menu displays placeholder content until the actual menu
content is ready to display.

```html
<nav id="menu-container">
  <div class="menu-placeholder">Loading…</div>
  <nav-menu>
    <menu-item>Item 1</menu-item>
    <menu-item>Item 2</menu-item>
    …
    <menu-item>Item N</menu-item>
  </nav-menu>
</nav>
```

```js
const container = document.getElementById("menu-container");
const placeholder = container.querySelector(".menu-placeholder");
// Fetch all the children of menu that are not yet defined.
const undefinedElements = container.querySelectorAll(":not(:defined)");

async function removePlaceholder() {
  const promises = [...undefinedElements].map((button) =>
    customElements.whenDefined(button.localName),
  );

  // Wait for all the children to be upgraded
  await Promise.all(promises);
  // then remove the placeholder
  container.removeChild(placeholder);
}

removePlaceholder();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
