---
title: speak-as
slug: Web/CSS/speak-as
page-type: css-property
browser-compat: css.properties.speak-as
---

{{CSSRef}}

The **`speak-as`** property is a part of [CSS](/en-US/docs/Web/CSS) Speech, which is used to manipulate how the [HTML](/en-US/docs/Web/HTML) content is spoken by assistive technologies, especially screen readers. More specifically, **`speak-as`** specifies how elements (any HTML element if not paired with [@counter-style](/en-US/docs/Web/CSS/@counter-style/speak-as)) and/or their content are spoken.

## Syntax

```css
/* single value syntax */
speak-as: normal;
speak-as: spell-out;
speak-as: literal-punctuation;
speak-as: digits;
speak-as: no-punctuation;

/* multiple value syntax */
speak-as: spell-out literal-punctuation;
speak-as: spell-out no-punctuation;
speak-as: digits literal-punctuation;
speak-as: digits no-punctuation;
speak-as: spell-out digits literal-punctuation;
speak-as: spell-out digits no-punctuation;
```

### Values

- `normal`
  - : Default value, which uses normal pronunciation rules, but punctuation is replaced by pauses. For example, instead of "Hello, world!" it would be pronounced as "Hello (pause) world (pause)"
- `spell-out`
  - : Content is spelled out letter by letter. For example, "role" would be pronounced "r" "o" "l" "e".
- `literal-punctuation`
  - : Punctuation marks are spelled out literally. For example, instead of "Hello, world!" it would be pronounced as "Hello comma world exclamation mark.".
- `digits`
  - : Numbers are pronounced as individual digits. For example, 31 is pronounced as "three one".
- `no-punctuation`
  - : The content is pronounced normally without any punctuation. For example, instead of "Hello, world!" it would be pronounced as "Hello world".

> [!NOTE]
> The support of `speak-as` property is very limited or inconsistently implemented across different assistive technologies (such as screen readers or speech synthesizers). It's often recommended not to fully rely on it solely to deliver your critical information, to ensure it remains user friendly and accessible to a wide audience.

## Examples

### HTML

```HTML
  <p class="normal">Hello, world!</p>
  <p class="spell-out">Hello, world!</p>
  <p class="literal-punctuation">Hello, world!</p>
  <p class="no-punctuation">Hello, world!</p>
  <p class="digits">25</p>
```

### CSS

```CSS
  .normal {
    speak-as: normal;
  }

  .spell-out {
    speak-as: spell-out;
  }

  .literal-punctuation {
    speak-as: literal-punctuation;
  }

  .no-punctuation {
    speak-as: no-punctuation;
  }

  .digits {
    speak-as: digits;
  }
```

## Browser compatibility

{{Compat}}

## See also

- How to use [speak-as descriptor](/en-US/docs/Web/CSS/@counter-style/speak-as) as descriptor for {{cssxref("@counter-style")}} which is part of the `@counter-style` at-rule.
- More information on {{cssxref("@counter-style")}}.
- [CSS counter styles](/en-US/docs/Web/CSS/CSS_counter_styles)
- [CSS lists and counters](/en-US/docs/Web/CSS/CSS_lists)
