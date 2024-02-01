---
title: ":state()"
slug: Web/CSS/:state
page-type: css-pseudo-class
status:
  - experimental
browser-compat: css.selectors.state
---

{{CSSRef}}{{SeeCompatTable}}

The **`:state()`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) matches [custom elements](/en-US/docs/Web/API/Web_components/Using_custom_elements) that have the specified custom state.

<!-- {{EmbedInteractiveExample("pages/tabbed/pseudo-class-state.html", "tabbed-shorter")}} -->

## Syntax

The `:state()` pseudo-class takes as its argument a custom identifier that represents the state of the custom element to match.

```css-nolint
:state(<custom identifier>) {
  /* ... */
}
```

## Description

Elements can have states that change due to user interaction and other factors, such as "hover" when a user hovers over an element, or "visited" for links that the user has clicked.
Elements provided by user agents can be styled based on these states using CSS pseudo classes such as [`:hover`](/en-US/docs/Web/CSS/:hover) and [`:visited`](/en-US/docs/Web/CSS/:visited).
[Autonomous custom elements](/en-US/docs/Web/API/Web_components/Using_custom_elements#types_of_custom_element) (but not elements derived from built-in elements) can similarly expose their state, allowing the custom elements to be styled using the CSS `:state()` pseudo class.

The states of a custom element are represented by string values that are added to, or removed from, an attached [`CustomStateSet`](/en-US/docs/Web/API/CustomStateSet) object.
The CSS `:state()` pseudo-class matches an element when the identifier passed as an argument is present in the `CustomStateSet` of the element.

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

See [CustomStateSet](/en-US/docs/Web/API/CustomStateSet#labeled_checkbox) for a live example of this code in action.

### Styling with a custom state within a custom element

You can use `:state()` within the [`:host()`](/en-US/docs/Web/CSS/:host_function) pseudo-class function to match a state only within the shadow DOM of the current custom element.

For example, in the [`CustomStateSet` labeled checkbox example](/en-US/docs/Web/API/CustomStateSet#labeled_checkbox), the following CSS is used to inject a grey `[x]` before the element when it is in the "checked" state.

```css
:host(:state(checked))::before {
  content: "[x]";
  background: grey;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`CustomStateSet`](/en-US/docs/Web/API/CustomStateSet)
- [Pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes)
- [Pseudo-classes and pseudo-elements](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
- [Custom states and custom state pseudo-class CSS selectors](/en-US/docs/Web/API/Web_components/Using_custom_elements#custom_states_and_custom_state_pseudo-class_css_selectors) in [Using custom elements](/en-US/docs/Web/API/Web_components/Using_custom_elements)
