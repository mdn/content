---
title: :state()
slug: Web/CSS/:state
page-type: css-pseudo-class
browser-compat: css.selectors.state
---

{{CSSRef}}

The **`:state()`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) matches [custom elements](/en-US/docs/Web/API/Web_components/Using_custom_elements) that have the specified custom state.

## Syntax

The `:state()` pseudo-class takes as its argument a custom identifier that represents the state of the custom element to match.

```css-nolint
:state(<custom identifier>) {
  /* ... */
}
```

## Description

Elements can transition between states due to user interaction and other factors.
For instance, an element can be in the "hover" state when a user hovers over the element, or a link can be in the "visited" state after a user clicks on it.
Elements provided by browsers can be styled based on these states using CSS pseudo-classes such as [`:hover`](/en-US/docs/Web/CSS/:hover) and [`:visited`](/en-US/docs/Web/CSS/:visited).
Similarly, [autonomous custom elements](/en-US/docs/Web/API/Web_components/Using_custom_elements#types_of_custom_element) (custom elements that are not derived from built-in elements) can expose their states, allowing pages that use the elements to style them using the CSS `:state()` pseudo-class.

The states of a custom element are represented by string values.
These values are added to or removed from a [`CustomStateSet`](/en-US/docs/Web/API/CustomStateSet) object associated with the element.
The CSS `:state()` pseudo-class matches an element when the identifier, passed as an argument, is present in the `CustomStateSet` of the element.

The `:state()` pseudo-class can also be used to match custom states within the implementation of a custom element.
This is achieved by using `:state()` within the [`:host()`](/en-US/docs/Web/CSS/:host_function) pseudo-class function, which matches a state only within the shadow DOM of the current custom element.

Additionally, the [`::part()`](/en-US/docs/Web/CSS/::part) pseudo-element followed by the `:state()` pseudo-class allows matching on the [shadow parts](/en-US/docs/Web/CSS/CSS_shadow_parts) of a custom element that are in a particular state. (**Shadow parts** are parts of a custom element's shadow tree that are explicitly exposed to a containing page for styling purposes.)

## Examples

### Matching a custom state

This CSS shows how to change the border of the autonomous custom element `<labeled-checkbox>` to `red` when it is in the "checked" state.

```css
labeled-checkbox {
  border: dashed red;
}
labeled-checkbox:state(checked) {
  border: solid;
}
```

For a live example of this code in action, see the [Matching the custom state of a custom checkbox element](/en-US/docs/Web/API/CustomStateSet#matching_the_custom_state_of_a_custom_checkbox_element) example on the `CustomStateSet` page.

### Matching a custom state in a custom element's shadow DOM

This example shows how the `:state()` pseudo-class can be used within the [`:host()`](/en-US/docs/Web/CSS/:host_function) pseudo-class function to match custom states within the implementation of a custom element.

The following CSS injects a grey `[x]` before the element when it is in the "checked" state.

```css
:host(:state(checked))::before {
  content: "[x]";
}
```

For a live example of this code in action, see the [Matching the custom state of a custom checkbox element](/en-US/docs/Web/API/CustomStateSet#matching_the_custom_state_of_a_custom_checkbox_element) example on the `CustomStateSet` page.

### Matching a custom state in a shadow part

This example shows how the `:state()` pseudo-class can be used to target the [shadow parts](/en-US/docs/Web/CSS/CSS_shadow_parts) of a custom element.

Shadow parts are defined and named using the [`part`](/en-US/docs/Web/HTML/Global_attributes/part) attribute.
For example, consider a custom element named `<question-box>` that uses a `<labeled-checkbox>` custom element as a shadow part named `checkbox`:

```js
shadowRoot.innerHTML = `<labeled-checkbox part='checkbox'>Yes</labeled-checkbox>`;
```

The CSS below shows how the [`::part()`](/en-US/docs/Web/CSS/::part) pseudo-element can be used to match against the `'checkbox'` shadow part.
It then shows how the `::part()` pseudo-element followed by the `:state()` pseudo-class can be used to match against the same part when it is in the `checked` state.

```css
question-box::part(checkbox) {
  color: red;
}

question-box::part(checkbox):state(checked) {
  color: green;
}
```

For a live example of this code in action, see the [Matching a custom state in a shadow part of a custom element](/en-US/docs/Web/API/CustomStateSet#matching_a_custom_state_in_a_shadow_part_of_a_custom_element) example on the `CustomStateSet` page.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`CustomStateSet`](/en-US/docs/Web/API/CustomStateSet)
- [Pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes)
- [Learn: Pseudo-classes and pseudo-elements](/en-US/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
- [Custom states and custom state pseudo-class CSS selectors](/en-US/docs/Web/API/Web_components/Using_custom_elements#custom_states_and_custom_state_pseudo-class_css_selectors) in [Using custom elements](/en-US/docs/Web/API/Web_components/Using_custom_elements)
