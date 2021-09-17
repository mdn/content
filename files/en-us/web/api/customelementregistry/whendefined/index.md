---
title: CustomElementRegistry.whenDefined()
slug: Web/API/CustomElementRegistry/whenDefined
tags:
  - API
  - CustomElementRegistry
  - Method
  - Reference
  - Web Components
  - custom elements
  - whenDefined
browser-compat: api.CustomElementRegistry.whenDefined
---
{{APIRef("CustomElementRegistry")}}

The **`whenDefined()`** method of the
{{domxref("CustomElementRegistry")}} interface returns a {{jsxref("Promise")}} that
resolves when the named element is defined.

## Syntax

```js
customElements.whenDefined(name): Promise<CustomElementConstructor>;
```

### Parameters

- name
  - : Custom element name.

### Return value

A {{jsxref("Promise")}} that will be fulfilled with the [custom element](/en-US/docs/Web/API/Window/customElements)'s constructor when a [custom element](/en-US/docs/Web/API/Window/customElements) becomes defined with the
given name. (If such a [custom element](/en-US/docs/Web/API/Window/customElements) is already defined, the
returned promise will be immediately fulfilled.)

### Exceptions

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Exception</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>SyntaxError</code></td>
      <td>
        If the provided name is not a
        <a
          href="https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name"
          >valid custom element name</a
        >, the promise rejects with a <code>SyntaxError</code>.
      </td>
    </tr>
  </tbody>
</table>

## Examples

This example uses `whenDefined()` to detect when the custom elements that
make up a menu are defined. The menu displays placeholder content until the actual menu
content is ready to display.

```html
<nav id="menu-container">
  <div class="menu-placeholder">Loading...</div>
  <nav-menu>
    <menu-item>Item 1</menu-item>
    <menu-item>Item 2</menu-item>
     ...
    <menu-item>Item N</menu-item>
  </nav-menu>
</nav>
```

```js
const container = document.getElementById('menu-container');
const placeholder = container.querySelector('.menu-placeholder');
// Fetch all the children of menu that are not yet defined.
const undefinedElements = container.querySelectorAll(':not(:defined)');

async function removePlaceholder(){
  const promises = [...undefinedElements].map(
    button => customElements.whenDefined(button.localName)
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
