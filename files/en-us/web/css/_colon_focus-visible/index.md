---
title: ":focus-visible"
slug: Web/CSS/:focus-visible
page-type: css-pseudo-class
browser-compat: css.selectors.focus-visible
---

{{CSSRef}}

The **`:focus-visible`** pseudo-class applies while an element matches the {{CSSxRef(":focus")}} pseudo-class and the UA ({{glossary("User Agent")}}) determines via heuristics that the focus should be made evident on the element. (Many browsers show a "focus ring" by default in this case.)

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-focus-visible.html", "tabbed-shorter")}}

This selector is useful to provide a different focus indicator based on the user's input modality (mouse vs. keyboard).

## Syntax

```css
:focus-visible {
  /* ... */
}
```

## :focus vs :focus-visible

Originally, user-agent CSS set focus styles based only on the `:focus` pseudo-class, styling most focused elements with a focus ring outline. This meant all elements, including all links and buttons, had a focus ring applied when focused, which many found ugly. Because of the appearance, some authors removed the user-agent outline focus styles. Changing focus style can negatively impact usability, while removing focus styles makes keyboard navigation inaccessible for sighted users.

Browser no longer visibly indicate focus (such as by drawing a "focus ring"), around each element when it has focus. Instead, they use a variety of heuristics to provide focus indicators only when it would be most helpful to the user. For instance, when a button is clicked using a pointing device, the focus is generally not visually indicated, but when a text box needing user input has focus, focus is indicated. While focus styles are always required when users are navigating the page with the keyboard or when focus is managed via scripts, focus styles are not required when the user knows where they are putting focus, such as when they use a pointing device such as a mouse or finger to physically set focus on an element, unless that element continues to need user attention.

The `:focus` pseudo-class always matches the currently-focused element. The `:focus-visible` pseudo-class also matches the focused element, but only if the user needs to be informed where the focus currently is. Because the `:focus-visible` pseudo-class matches the focused element when needed, using the `:focus-visible` (instead of the `:focus` pseudo-class) allows authors to change the appearance of the focus indicator without changing when the focus indicator appears.

When the [`:focus`](/en-US/docs/Web/CSS/:focus) pseudo-class is used, it always targets the currently focused element. This means that when a user employs a pointing device, a visible focus ring appears around the focused element, which some consider obtrusive. The `:focus-visible` pseudo-class respects user agents' selective focus indication behavior while still allowing focus indicator customization.

## Examples

### Basic example

In this example, the `:focus-visible` selector uses the UA's behavior to determine when to match. Compare what happens when you click on the different controls with a mouse, versus when you tab through them using a keyboard. Note the difference in behavior from elements styled with `:focus`.

```html
<input value="Default styles" /><br />
<button>Default styles</button><br />
<input class="focus-only" value=":focus only" /><br />
<button class="focus-only">:focus only</button><br />
<input class="focus-visible-only" value=":focus-visible only" /><br />
<button class="focus-visible-only">:focus-visible only</button>
```

```css
input,
button {
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
<button class="button with-fallback" type="button">Button with fallback</button>
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
