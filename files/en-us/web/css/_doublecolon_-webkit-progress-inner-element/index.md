---
title: ::-webkit-progress-inner-element
slug: Web/CSS/::-webkit-progress-inner-element
page-type: css-pseudo-element
status:
  - non-standard
browser-compat: css.selectors.-webkit-progress-inner-element
---

{{CSSRef}}{{Non-standard_header}}

The **`::-webkit-progress-inner-element`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) represents the outermost container of the {{HTMLElement("progress")}} element. It is the parent of the {{cssxref("::-webkit-progress-bar")}} pseudo-element.

> [!NOTE]
> In order to let `::-webkit-progress-value` take effect, {{cssxref("appearance")}} needs to be set to `none` on the `<progress>` element.

## Syntax

```css
::-webkit-progress-inner-element {
  /* ... */
}
```

## Examples

These examples work only on Blink and WebKit.

### Adding a black border around the progress bar

In this example, a 2px black border is added around the progress bar.

#### HTML

```html
<progress value="10" max="50"></progress>
```

#### CSS

```css
progress {
  -webkit-appearance: none;
}

::-webkit-progress-inner-element {
  border: 2px solid black;
}
```

#### Result

{{EmbedLiveSample("Adding_a_black_border_around_the_progress_bar", 200, 50)}}

#### Result screenshot

If you're not using a Blink or WebKit browser, the above code results in a progress bar looking like this:

![Progressbar is a long green and grey box with a black border. The left 20% of the box is green. The right 80% is grey.](-webkit-progress-inner-element_example.png)

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- The pseudo-elements used by WebKit/Blink to style other parts of a {{HTMLElement("progress")}} element:

  - {{cssxref("::-webkit-progress-bar")}}
  - {{cssxref("::-webkit-progress-value")}}

- {{cssxref("::-moz-progress-bar")}}
