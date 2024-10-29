---
title: CustomStateSet
slug: Web/API/CustomStateSet
page-type: web-api-interface
browser-compat: api.CustomStateSet
---

{{APIRef("Web Components")}}

The **`CustomStateSet`** interface of the [Document Object Model](/en-US/docs/Web/API/Document_Object_Model) stores a list of states for an [autonomous custom element](/en-US/docs/Web/API/Web_components/Using_custom_elements#types_of_custom_element), and allows states to be added and removed from the set.

The interface can be used to expose the internal states of a custom element, allowing them to be used in CSS selectors by code that uses the element.

## Instance properties

- {{domxref("CustomStateSet.size")}}
  - : Returns the number of values in the `CustomStateSet`.

## Instance methods

- {{domxref("CustomStateSet.add()")}}
  - : Adds a value to the set.
- {{domxref("CustomStateSet.clear()")}}
  - : Removes all elements from the `CustomStateSet` object.
- {{domxref("CustomStateSet.delete()")}}
  - : Removes one value from the `CustomStateSet` object.
- {{domxref("CustomStateSet.entries()")}}
  - : Returns a new iterator with the values for each element in the `CustomStateSet` in insertion order.
- {{domxref("CustomStateSet.forEach()")}}
  - : Executes a provided function for each value in the `CustomStateSet` object.
- {{domxref("CustomStateSet.has()")}}
  - : Returns a {{jsxref("Boolean")}} asserting whether an element is present with the given value.
- {{domxref("CustomStateSet.keys()")}}
  - : An alias for {{domxref("CustomStateSet.values()")}}.
- {{domxref("CustomStateSet.values()")}}
  - : Returns a new iterator object that yields the values for each element in the `CustomStateSet` object in insertion order.

## Description

Built in HTML elements can have different _states_, such as "enabled" and "disabled, "checked" and "unchecked", "initial", "loading" and "ready".
Some of these states are public and can be set or queried using properties/attributes, while others are effectively internal, and cannot be directly set.
Whether external or internal, element states can generally be selected and styled using [CSS pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes) as selectors.

The `CustomStateSet` allows developers to add and delete states for autonomous custom elements (but not elements derived from built-in elements).
These states can then be used as custom state pseudo-class selectors in a similar way to the pseudo-classes for built-in elements.

### Setting custom element states

To make the `CustomStateSet` available, a custom element must first call {{domxref("HTMLElement.attachInternals()")}} in order to attach an {{domxref("ElementInternals")}} object.
`CustomStateSet` is then returned by {{domxref("ElementInternals.states")}}.
Note that `ElementInternals` cannot be attached to a custom element based on a built-in element, so this feature only works for autonomous custom elements (see [github.com/whatwg/html/issues/5166](https://github.com/whatwg/html/issues/5166)).

The `CustomStateSet` instance is a [`Set`-like object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis) that can hold an ordered set of state values.
Each value is a custom identifier.
Identifiers can be added to the set or deleted.
If an identifier is present in the set the particular state is `true`, while if it is removed the state is `false`.

Custom elements that have states with more than two values can represent them with multiple boolean states, only one of which is `true` (present in the `CustomStateSet`) at a time.

The states can be used within the custom element but are not directly accessible outside of the custom component.

### Interaction with CSS

You can select a custom element that is in a specific state using the [`:state()`](/en-US/docs/Web/CSS/:state) _custom state pseudo-class_.
The format of this pseudo-class is `:state(my-state-name)`, where `my-state-name` is the state as defined in the element.
The custom state pseudo-class matches the custom element only if the state is `true` (i.e., if `my-state-name` is present in the `CustomStateSet`).

For example, the following CSS matches a `labeled-checkbox` custom element when the element's `CustomStateSet` contains the `checked` state, and applies a `solid` border to the checkbox:

```css
labeled-checkbox:state(checked) {
  border: solid;
}
```

CSS can also be used to match a custom state [within a custom element's shadow DOM](/en-US/docs/Web/CSS/:state#matching_a_custom_state_in_a_custom_elements_shadow_dom) by specifying `:state()` within the [`:host()`](/en-US/docs/Web/CSS/:host_function) pseudo-class function.

Additionally, the `:state()` pseudo-class can be used after the [`::part()`](/en-US/docs/Web/CSS/::part) pseudo-element to match the [shadow parts](/en-US/docs/Web/CSS/CSS_shadow_parts) of a custom element that are in a particular state.

> [!WARNING]
> Browsers that do not yet support [`:state()`](/en-US/docs/Web/CSS/:state) will use a CSS `<dashed-ident>` for selecting custom states, which is now deprecated.
> For information about how to support both approaches see the [Compatibility with `<dashed-ident>` syntax](#compatibility_with_dashed-ident_syntax) section below.

## Examples

### Matching the custom state of a custom checkbox element

This example, which is adapted from the specification, demonstrates a custom checkbox element that has an internal "checked" state.
This is mapped to the `checked` custom state, allowing styling to be applied using the `:state(checked)` custom state pseudo class.

#### JavaScript

First we define our class `LabeledCheckbox` which extends from `HTMLElement`.
In the constructor we call the `super()` method, add a listener for the click event, and call {{domxref("HTMLElement.attachInternals()", "this.attachInternals()")}} to attach an {{domxref("ElementInternals", "ElementInternals")}} object.

Most of the rest of the "work" is then left to `connectedCallback()`, which is invoked when a custom element is added to the page.
The content of the element is defined using a `<style>` element to be the text `[]` or `[x]` followed by a label.
What's noteworthy here is that the custom state pseudo class is used to select the text to display: `:host(:state(checked))`.
After the example below, we'll cover what's happening in the snippet in more detail.

```js
class LabeledCheckbox extends HTMLElement {
  constructor() {
    super();
    this._boundOnClick = this._onClick.bind(this);
    this.addEventListener("click", this._boundOnClick);

    // Attach an ElementInternals to get states property
    this._internals = this.attachInternals();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `<style>
  :host {
    display: block;
  }
  :host::before {
    content: "[ ]";
    white-space: pre;
    font-family: monospace;
  }
  :host(:state(checked))::before {
    content: "[x]";
  }
</style>
<slot>Label</slot>
`;
  }

  get checked() {
    return this._internals.states.has("checked");
  }

  set checked(flag) {
    if (flag) {
      this._internals.states.add("checked");
    } else {
      this._internals.states.delete("checked");
    }
  }

  _onClick(event) {
    // Toggle the 'checked' property when the element is clicked
    this.checked = !this.checked;
  }

  static isStateSyntaxSupported() {
    return CSS.supports("selector(:state(checked))");
  }
}

customElements.define("labeled-checkbox", LabeledCheckbox);

// Display a warning to unsupported browsers
document.addEventListener("DOMContentLoaded", () => {
  if (!LabeledCheckbox.isStateSyntaxSupported()) {
    if (!document.getElementById("state-warning")) {
      const warning = document.createElement("div");
      warning.id = "state-warning";
      warning.style.color = "red";
      warning.textContent = "This feature is not supported by your browser.";
      document.body.insertBefore(warning, document.body.firstChild);
    }
  }
});
```

In the `LabeledCheckbox` class:

- In the `get checked()` and `set checked()` we use `ElementInternals.states` to get the `CustomStateSet`.
- The `set checked(flag)` method adds the `"checked"` identifier to the `CustomStateSet` if the flag is set and delete the identifier if the flag is `false`.
- The `get checked()` method just checks whether the `checked` property is defined in the set.
- The property value is toggled when the element is clicked.

We then call the {{domxref("CustomElementRegistry/define", "define()")}} method on the object returned by {{domxref("Window.customElements")}} in order to register the custom element:

```js
customElements.define("labeled-checkbox", LabeledCheckbox);
```

#### HTML

After registering the custom element we can use the element in HTML as shown:

```html
<labeled-checkbox>You need to check this</labeled-checkbox>
```

#### CSS

Finally we use the `:state(checked)` custom state pseudo class to select CSS for when the box is checked.

```css
labeled-checkbox {
  border: dashed red;
}
labeled-checkbox:state(checked) {
  border: solid;
}
```

#### Result

Click the element to see a different border being applied as the checkbox `checked` state is toggled.

{{EmbedLiveSample("Labeled Checkbox", "100%", 50)}}

### Matching a custom state in a shadow part of a custom element

This example, which is adapted from the specification, demonstrates that custom states can be used to target the [shadow parts](/en-US/docs/Web/CSS/CSS_shadow_parts) of a custom element for styling.
Shadow parts are sections of the shadow tree that are intentionally exposed to pages that use the custom element.

The example creates a `<question-box>` custom element that displays a question prompt along with a checkbox labeled "Yes".
The element uses the `<labeled-checkbox>` defined in the [previous example](#matching_the_custom_state_of_a_custom_checkbox_element) for the checkbox.

#### JavaScript

```js hidden
class LabeledCheckbox extends HTMLElement {
  constructor() {
    super();
    this._boundOnClick = this._onClick.bind(this);
    this.addEventListener("click", this._boundOnClick);

    // Attach an ElementInternals to get states property
    this._internals = this.attachInternals();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `<style>
  :host {
    display: block;
  }
  :host::before {
    content: "[ ]";
    white-space: pre;
    font-family: monospace;
  }
  :host(:state(checked))::before {
    content: "[x]";
  }
</style>
<slot>Label</slot>
`;
  }

  get checked() {
    return this._internals.states.has("checked");
  }

  set checked(flag) {
    if (flag) {
      this._internals.states.add("checked");
    } else {
      this._internals.states.delete("checked");
    }
  }

  _onClick(event) {
    // Toggle the 'checked' property when the element is clicked
    this.checked = !this.checked;
  }

  static isStateSyntaxSupported() {
    return CSS.supports("selector(:state(checked))");
  }
}

customElements.define("labeled-checkbox", LabeledCheckbox);

document.addEventListener("DOMContentLoaded", () => {
  if (!LabeledCheckbox.isStateSyntaxSupported()) {
    if (!document.getElementById("state-warning")) {
      const warning = document.createElement("div");
      warning.id = "state-warning";
      warning.style.color = "red";
      warning.textContent = "This feature is not supported by your browser.";
      document.body.insertBefore(warning, document.body.firstChild);
    }
  }
});
```

First, we define the custom element class `QuestionBox`, which extends `HTMLElement`.
As always, the constructor first calls the `super()` method.
Next, we attach a shadow DOM tree to the custom element by calling [`attachShadow()`](/en-US/docs/Web/API/Element/attachShadow).

```js
class QuestionBox extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `<div><slot>Question</slot></div>
<labeled-checkbox part="checkbox">Yes</labeled-checkbox>
`;
  }
}
```

The content of the shadow root is set using [`innerHTML`](/en-US/docs/Web/API/ShadowRoot/innerHTML).
This defines a {{HTMLElement("slot")}} element that contains the default prompt text "Question" for the element.
We then define a `<labeled-checkbox>` custom element with the default text `"Yes"`.
This checkbox is exposed as a shadow part of the question box with the name `checkbox` using the [`part`](/en-US/docs/Web/HTML/Global_attributes/part) attribute.

Note that the code and styling for the `<labeled-checkbox>` element are exactly the same as in the [previous example](#matching_the_custom_state_of_a_custom_checkbox_element), and are therefore not repeated here.

Next, we call the {{domxref("CustomElementRegistry/define", "define()")}} method on the object returned by {{domxref("Window.customElements")}} to register the custom element with the name `question-box`:

```js
customElements.define("question-box", QuestionBox);
```

#### HTML

After registering the custom element, we can use the element in HTML as shown below.

```html
<!-- Question box with default prompt "Question" -->
<question-box></question-box>

<!-- Question box with custom prompt "Continue?" -->
<question-box>Continue?</question-box>
```

#### CSS

The first block of CSS matches the exposed shadow part named `checkbox` using the [`::part()`](/en-US/docs/Web/CSS/::part) selector, styling it to be `red` by default.

```css
question-box::part(checkbox) {
  color: red;
}
```

The second block follows `::part()` with `:state()`, in order to match `checkbox` parts that are in the `checked` state:

```css
question-box::part(checkbox):state(checked) {
  color: green;
}
```

#### Result

Click either of the checkboxes to see the color change from `red` to `green` when the `checked` state toggles.

{{EmbedLiveSample("Question box", "100%", 100)}}

### Non-boolean internal states

This example shows how to handle the case where the custom element has an internal property with multiple possible value.

The custom element in this case has a `state` property with allowed values: "loading", "interactive" and "complete".
To make this work, we map each value to its custom state and create code to ensure that only the identifier corresponding to the internal state is set.
You can see this in the implementation of the `set state()` method: we set the internal state, add the identifier for the matching custom state to `CustomStateSet`, and remove the identifiers associated with all the other values.

Most of the remaining code is similar to the example that demonstrates a single boolean state (we show different text for each state as the user toggles through them).

#### JavaScript

```js
class ManyStateElement extends HTMLElement {
  constructor() {
    super();
    this._boundOnClick = this._onClick.bind(this);
    this.addEventListener("click", this._boundOnClick);
    // Attach an ElementInternals to get states property
    this._internals = this.attachInternals();
  }

  connectedCallback() {
    this.state = "loading";

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `<style>
  :host {
    display: block;
    font-family: monospace;
  }
  :host::before {
    content: "[ unknown ]";
    white-space: pre;
  }
  :host(:state(loading))::before {
    content: "[ loading ]";
  }
  :host(:state(interactive))::before {
    content: "[ interactive ]";
  }
  :host(:state(complete))::before {
    content: "[ complete ]";
  }
</style>
<slot>Click me</slot>
`;
  }

  get state() {
    return this._state;
  }

  set state(stateName) {
    // Set internal state to passed value
    // Add identifier matching state and delete others
    if (stateName === "loading") {
      this._state = "loading";
      this._internals.states.add("loading");
      this._internals.states.delete("interactive");
      this._internals.states.delete("complete");
    } else if (stateName === "interactive") {
      this._state = "interactive";
      this._internals.states.delete("loading");
      this._internals.states.add("interactive");
      this._internals.states.delete("complete");
    } else if (stateName === "complete") {
      this._state = "complete";
      this._internals.states.delete("loading");
      this._internals.states.delete("interactive");
      this._internals.states.add("complete");
    }
  }

  _onClick(event) {
    // Cycle the state when element clicked
    if (this.state === "loading") {
      this.state = "interactive";
    } else if (this.state === "interactive") {
      this.state = "complete";
    } else if (this.state === "complete") {
      this.state = "loading";
    }
  }

  static isStateSyntaxSupported() {
    return CSS.supports("selector(:state(loading))");
  }
}

customElements.define("many-state-element", ManyStateElement);

document.addEventListener("DOMContentLoaded", () => {
  if (!LabeledCheckbox.isStateSyntaxSupported()) {
    if (!document.getElementById("state-warning")) {
      const warning = document.createElement("div");
      warning.id = "state-warning";
      warning.style.color = "red";
      warning.textContent = "This feature is not supported by your browser.";
      document.body.insertBefore(warning, document.body.firstChild);
    }
  }
});
```

#### HTML

After registering the new element we add it to the HTML.
This is similar to the example that demonstrates a single boolean state, except we don't specify a value and use the default value from the slot (`<slot>Click me</slot>`).

```html
<many-state-element></many-state-element>
```

#### CSS

In the CSS we use the three custom state pseudo classes to select CSS for each of the internal state values: `:state(loading)`, `:state(interactive)`, `:state(complete)`.
Note that the custom element code ensures that only one of these custom states can be defined at a time.

```css
many-state-element:state(loading) {
  border: dotted grey;
}
many-state-element:state(interactive) {
  border: dashed blue;
}
many-state-element:state(complete) {
  border: solid green;
}
```

#### Results

Click the element to see a different border being applied as the state changes.

{{EmbedLiveSample("Non-boolean internal states", "100%", 50)}}

## Compatibility with `<dashed-ident>` syntax

Previously custom elements with custom states were selected using a `<dashed-ident>` instead of the [`:state()`](/en-US/docs/Web/CSS/:state) function.
Browser versions that don't support `:state()` will throw an error when supplied with an ident that is not prefixed with the double dash.
If support for these browsers is required, either use a [try...catch](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) block to support both syntaxes, or use a `<dashed-ident>` as the state's value and select it with both the `:--my-state` and `:state(--my-state)` CSS selector.

### Using a try...catch block

This code shows how you can use `try...catch` to attempt adding a state identifier that does not use a `<dashed-ident>`, and fall back to `<dashed-ident>` if an error is thrown.

#### JavaScript

```js
class CompatibleStateElement extends HTMLElement {
  constructor() {
    super();
    this._internals = this.attachInternals();
  }

  connectedCallback() {
    // The double dash is required in browsers with the
    // legacy syntax, not supplying it will throw
    try {
      this._internals.states.add("loaded");
    } catch {
      this._internals.states.add("--loaded");
    }
  }
}
```

#### CSS

```css
compatible-state-element:is(:--loaded, :state(loaded)) {
  border: solid green;
}
```

### Using double dash prefixed idents

An alternative solution can be to use the `<dashed-ident>` within JavaScript.
The downside to this approach is that the dashes must be included when using the CSS `:state()` syntax.

#### JavaScript

```js
class CompatibleStateElement extends HTMLElement {
  constructor() {
    super();
    this._internals = this.attachInternals();
  }
  connectedCallback() {
    // The double dash is required in browsers with the
    // legacy syntax, but works with the modern syntax
    this._internals.states.add("--loaded");
  }
}
```

#### CSS

```css
compatible-state-element:is(:--loaded, :state(--loaded)) {
  border: solid green;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

[Using custom elements](/en-US/docs/Web/API/Web_components/Using_custom_elements)
