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

The **`:focus-visible`** pseudo-class applies while an element matches the {{CSSxRef(":focus")}} pseudo-class and the UA ({{glossary("User Agent")}}) determines via heuristics that the focus should be made evident on the element. (Many browsers show a "focus ring" by default in this case.)

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-focus-visible.html", "tabbed-shorter")}}

This selector is useful to provide a different focus indicator based on the user's input modality (mouse vs. keyboard).

## Syntax

```
:focus-visible
```

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

### Providing a :focus fallback

If your code has to work in old browser versions that do not support `:focus-visible`, check supports of `:focus-visible` with {{cssxref("@supports")}} and repeat the same focus styling in it, but inside a `:focus` rule. Note that even if you do not specify anything at all for `:focus`, old browsers will simply display the native outline, which can be enough.

```html
<button class="button with-fallback" type="button">
  Button with fallback
</button>
<button class="button without-fallback" type="button">
  Button without fallback
</button>
```

```css
.button {
  margin: 10px;
  border: 2px solid darkgray;
  border-radius: 4px;
}

.button:focus-visible {
  /* Draw the focus when :focus-visible is supported */
  outline: 3px solid deepskyblue;
  outline-offset: 3px;
}

@supports not selector(:focus-visible) {
  .button.with-fallback:focus {
    /* Fallback for browsers without :focus-visible support */
    outline: 3px solid deepskyblue;
    outline-offset: 3px;
  }
}
```

{{EmbedLiveSample("Selectively_showing_the_focus_indicator", "100%", 72)}}

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
- [A polyfill for `:focus-visible`](https://github.com/WICG/focus-visible)
