---
title: ':focus-visible'
slug: Web/CSS/:focus-visible
tags:
  - ':focus'
  - ':focus-visible'
  - CSS
  - Layout
  - Pseudo-class
  - Reference
  - Selector
  - Web
browser-compat: css.selectors.focus-visible
---
{{CSSRef}}

The **`:focus-visible`** pseudo-class applies while an element matches the {{CSSxRef(":focus")}} pseudo-class and the UA ({{glossary("User Agent")}}) determines via heuristics that the focus should be made evident on the element. (Many browsers show a “focus ring” by default in this case.)

This selector is useful to provide a different focus indicator based on the user’s input modality (mouse vs. keyboard).

## Syntax

{{CSSSyntax}}

## Examples

### Basic example

In this example, the `:focus-visible` selector uses the UA's behavior to determine when to match. Compare what happens when you click on the different controls with a mouse, versus when you tab through them using a keyboard. Note the difference in behavior from elements styled with `:focus`.

```html
<input value="Default styles"><br>
<button>Default styles</button><br>
<input class="focus-only" value=":focus only"><br>
<button class="focus-only">:focus only</button><br>
<input class="focus-visible-only" value=":focus-visible only"><br>
<button class="focus-visible-only">:focus-visible only</button>
```

```css
input, button {
  margin: 10px;
}

.focus-only:focus {
  outline: 2px solid black;
}

.focus-visible-only:focus-visible {
  outline: 4px dashed darkorange;
}
```

{{EmbedLiveSample("Basic_example", "100%", 300)}}

### Selectively showing the focus indicator

A custom control, such as a custom element button, can use `:focus-visible` to selectively apply a focus indicator only on keyboard-focus. This matches the native focus behavior for controls like {{htmlelement("button")}}.

```html
<custom-button tabindex="0" role="button">Click Me</custom-button>
```

```css
custom-button {
  display: inline-block;
  margin: 10px;
}

custom-button:focus {
  /* Provide a fallback style for browsers
     that don't support :focus-visible */
  outline: 2px solid red;
  background: lightgrey;
}

custom-button:focus:not(:focus-visible) {
  /* Remove the focus indicator on mouse-focus for browsers
     that do support :focus-visible */
  background: transparent;
}

custom-button:focus-visible {
  /* Draw a very noticeable focus style for
     keyboard-focus on browsers that do support
     :focus-visible */
  outline: 4px dashed darkorange;
  background: transparent;
}
```

{{EmbedLiveSample("Selectively_showing_the_focus_indicator", "100%", 60)}}

## Polyfill

You can polyfill `:focus-visible` using [focus-visible.js](https://github.com/WICG/focus-visible).

## Accessibility concerns

### Low vision

Make sure the visual focus indicator can be seen by people with low vision. This will also benefit anyone use a screen in a brightly lit space (like outside in the sun). [WCAG 2.1 SC 1.4.11 Non-Text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) requires that the visual focus indicator be at least 3 to 1.

- Accessible Visual Focus Indicators: [Give Your Site Some Focus! Tips for Designing Useful and Usable Focus Indicators](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)

### Cognition

It may not be obvious as to why the focus indicator is appearing and disappearing if a person is using mixed forms of input. For users with cognitive concerns, or who are less technologically literate, this lack of consistent behavior for interactive elements may be confusing.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef(":focus")}}
- {{CSSxRef(":focus-within")}}
