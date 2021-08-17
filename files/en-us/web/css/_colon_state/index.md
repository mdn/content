---
title: ':state()'
slug: Web/CSS/:state
tags:
  - ':state'
  - CSS
  - Draft
  - Experimental
  - NeedsBrowserCompatibility
  - NeedsExample
  - Pseudo-class
  - Reference
  - Selector
browser-compat: css.selectors.state
---
{{CSSRef}}{{Draft}}{{SeeCompatTable}}

The **`:state`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents any [custom element](/en-US/docs/Web/Web_Components/Using_custom_elements) with the specified custom state in {{DOMxRef("ElementInternals.states")}}.

```css
custom-element:state(foo) {
  /* Styles to apply when `custom-element` is in the `foo` state */
}
```

## Syntax

{{CSSSyntax}}

## Examples

Fill in a simple example that nicely shows a typical usage of the selector, then perhaps some more complex examples (see our guide on how to add [code examples](/en-US/docs/MDN/Structures/Code_examples) for more information).

```css
my code block
```

And/or include a list of links to useful code samples that live elsewhere:

- x
- y
- z

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("ElementInternals.states")}} property - {{DOMxRef("DOMTokenList")}} used to configure which custom states a custom element is in.
