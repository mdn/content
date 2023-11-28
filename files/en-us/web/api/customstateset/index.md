---
title: CustomStateSet
slug: Web/API/CustomStateSet
page-type: web-api-interface
status:
  - experimental
browser-compat: api.CustomStateSet
---

{{APIRef("Web Components")}}{{SeeCompatTable}}

The **`CustomStateSet`** interface of the [Document Object Model](/en-US/docs/Web/API/Document_Object_Model) stores a list of states for an [autonomous custom element](/en-US/docs/Web/API/Web_components/Using_custom_elements#types_of_custom_element), and allows states to be added and removed from the set.

The interface can be used to expose the internal states of a custom element, allowing them to be used in CSS selectors by code that uses the element.

## Instance properties

- {{domxref("CustomStateSet.size")}} {{Experimental_Inline}}
  - : Returns the number of values in the `CustomStateSet`.

## Instance methods

- {{domxref("CustomStateSet.add()")}} {{Experimental_Inline}}
  - : Adds a value to the set, first checking that the _value_ is a `<dashed-ident>`.
- {{domxref("CustomStateSet.clear()")}} {{Experimental_Inline}}
  - : Removes all elements from the `CustomStateSet` object.
- {{domxref("CustomStateSet.delete()")}} {{Experimental_Inline}}
  - : Removes one value from the `CustomStateSet` object.
- {{domxref("CustomStateSet.entries()")}} {{Experimental_Inline}}
  - : Returns a new iterator with the values for each element in the `CustomStateSet` in insertion order.
- {{domxref("CustomStateSet.forEach()")}} {{Experimental_Inline}}
  - : Executes a provided function for each value in the `CustomStateSet` object.
- {{domxref("CustomStateSet.has()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Boolean")}} asserting whether an element is present with the given value.
- {{domxref("CustomStateSet.keys()")}} {{Experimental_Inline}}
  - : An alias for {{domxref("CustomStateSet.values()")}}.
- {{domxref("CustomStateSet.values()")}} {{Experimental_Inline}}
  - : Returns a new iterator object that yields the values for each element in the `CustomStateSet` object in insertion order.

## Description

Built in HTML elements can have different _states_, such as "enabled" and "disabled, "checked" and "unchecked", "initial", "loading" and "ready".
Some of these states are public and can be set or queried using properties/attributes, while others are effectively internal, and cannot be directly set.
Whether external or internal, commonly elements states can be selected and styled using [CSS pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes) as selectors.

The `CustomStateSet` allows developers to add and delete states for autonomous custom elements (but not elements derived from built-in elements).
These states can then be used as as custom state pseudo-class selectors in a similar way to the pseudo-classes for built-in elements.

### Setting custom element states

To make the {{domxref("CustomStateSet")}} available, a custom element must first call {{domxref("HTMLElement.attachInternals()")}} in order to attach an {{domxref("ElementInternals")}} object.
`CustomStateSet` is then returned by {{domxref("ElementInternals.states")}}.
Note that `ElementInternals` cannot be attached to a custom element based on a built-in element, so this feature only works for autonomous custom elements. <!-- https://github.com/whatwg/html/issues/5166 -->

The `CustomStateSet` instance is a [`Set`-like object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis) that can hold an ordered set of state values.
Each value is a dashed identifier, with the format: `--mystatename`.
Identifiers can be added to the set or deleted.
If an identifier is present in the set the particular state is `true`, while if it is removed the state is `false`.

Custom elements that have states with more than two values can represent them with multiple boolean states, only one of which is `true` (present in the `CustomStateSet`) at a time.

The states can be used within the custom element but are not directly accessible outside of the custom component.

### Interaction with CSS

Developers can select a custom element with a specific state using its state _custom state pseudo-class_.
The format of this pseudo-class is `:--mystatename`, where `--mystatename` is the state as defined in the element.

The custom state pseudo-class matches the custom element only if the state is `true` (i.e. if `--mystatename` is present in the `CustomStateSet`).

## Examples

### Labeled Checkbox

This example, which is adapted from the specification, demonstrates a custom checkbox element that has an internal "checked" state.
This is mapped to the `--checked` custom state, allowing styling to be applied using the `:--checked` custom state pseudo class.

First we define our class `LabeledCheckbox` which extends from `HTMLElement`.
In the constructor we just call the `super()` method, leaving most of the "work" to `connectedCallback()`, which is invoked when a custom element is added to the page.
The content of the element is defined using a `<style>` element to be the text `[]` or `[x]` followed by a label.
What's interesting here is that the custom state pseudo class (that we'll be talking about below following code below) is used to select the text to display: `:host(:--checked)::`.

```js
class LabeledCheckbox extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Attach an ElementInternals to get states property
    this._internals = this.attachInternals();
    this.addEventListener("click", this._onClick.bind(this));

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `<style>
        :host {
          display: block;
        }
       :host::before {
         content: '[ ]';
         white-space: pre;
         font-family: monospace;
       }
       :host(:--checked)::before { content: '[x]'; background: grey; }
       </style>
       <slot>Label</slot>`;
  }

  get checked() {
    return this._internals.states.has("--checked");
  }

  set checked(flag) {
    if (flag) {
      this._internals.states.add("--checked");
    } else {
      this._internals.states.delete("--checked");
    }
  }

  _onClick(event) {
    // Toggle the 'checked' property when the element is clicked
    this.checked = !this.checked;
  }
}
```

The `connectedCallback()` method uses `this.attachInternals()` to attach an `ElementInternals` object, from which we use `ElementInternals.states` to get the `CustomStateSet`.
The `set checked(flag)` method adds the `"--checked"` dashed identifier to the `CustomStateSet` if the flag is set and delete the identifier if the flag is `false`.
The `get checked()` method just checks whether the `--checked` property is defined in the set.
The property value is toggled when the element is clicked.

We then call the {{domxref("CustomElementRegistry/define", "define()")}} method on the object returned by {{domxref("Window.customElements")}} in order to register the custom element:

```js
customElements.define("labeled-checkbox", LabeledCheckbox);
```

After registering the custom element we can use use the element in HTML as shown:

```html
<labeled-checkbox>You need to check this</labeled-checkbox>
```

Finally we use the `:--checked` custom state pseudo class to select CSS for when the box is checked.

```css
labeled-checkbox {
  border: dashed red;
}
labeled-checkbox:--checked {
  border: solid;
}
```

{{EmbedLiveSample("Labeled Checkbox", "100%", 50)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

[Using custom elements](/en-US/docs/Web/API/Web_components/Using_custom_elements)
