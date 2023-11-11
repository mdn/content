---
title: "@starting-style"
slug: Web/CSS/@starting-style
page-type: css-at-rule
status:
  - experimental
browser-compat: css.at-rules.starting-style
---

{{CSSRef}}{{SeeCompatTable}}

The **`@starting-style`** [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/At-rule) let you start CSS transitions on first style update.

[Transitions](/en-US/docs/Web/CSS/CSS_transitions) start only during a style change event for elements which have a defined before-change style established by the previous style change event. That means a transition could not be started on an element that was not being rendered for the previous style change event. In some cases it makes sense to start transitions on newly inserted elements or elements that change from not being rendered to being rendered. Styles inside the `@starting-style` establish styles to transition from, if the previous style change event did not establish a before-change style for the element whose styles are being computed.

If there is no pre-existing style for an element, but there are selectors inside @starting-style rules that match the element, a style is computed with rules inside @starting-style matching, before the actual style is computed without @starting-style rules matching. Any differences in computed style for transitioned properties will trigger transitions between the styles with and without @starting-style rules applied.

## Syntax

The `@starting-style` at-rule consists of a _rule list_.

```css
@starting-style {
  <rule-list>
}
```

## Formal syntax

{{csssyntax}}

## Examples

### Changing starting colors

The `background-color` of an element can be transitioned from transparent to green when it is initially rendered:

```css
div {
  transition: background-color 1.5s;
  background-color: green;
}
@starting-style {
  div {
    background-color: transparent;
  }
}
```

Conditional rules can be used with [CSS Nesting](/en-US/docs/Web/CSS/CSS_nesting):

```css
div {
  transition: background-color 1.5s;
  background-color: green;
  @starting-style {
    background-color: transparent;
  }
}
```

### Changing initial opacity

The `opacity` of an element can be transitioned when the element changes to or from `display: none`:

```css
#target {
  transition-property: opacity, display;
  transition-duration: 0.5s;
  display: block;
  opacity: 1;
  @starting-style {
    opacity: 0;
  }
}
#target.hidden {
  display: none;
  opacity: 0;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS transitions](/en-US/docs/Web/CSS/CSS_transitions)
- [Using CSS transitions](/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- [TransitionEvent](/en-US/docs/Web/API/TransitionEvent)
