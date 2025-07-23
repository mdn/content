---
title: CSS text decoration
slug: Web/CSS/CSS_text_decoration
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-text-decor/
  - https://drafts.csswg.org/css-text-decor-4/
sidebar: cssref
---

The **CSS text decoration** module defines features relating to text decoration, such as underlines, text shadows, and emphasis marks. Text decoration features can provide visual cues for spelling errors, grammar issues, and links. These features can help improve the usability, accessibility, functionality, and aesthetics of your text.

By varying the color, style, and thickness of text decoration using pseudo-classes and pseudo-elements, you can highlight the emphasis in text in ways that don't rely on color alone.

Several features can help improve text readability:

- {{cssxref("text-decoration-skip-ink")}} can increase legibility by skipping descenders.
- {{cssxref("text-underline-offset")}} enables you to fine-tune the underline placement to better match font metrics or design aesthetics, which can be especially useful for unique [typefaces](/en-US/docs/Web/CSS/CSS_fonts).
- {{cssxref("text-shadow")}} colors that contrast with text {{cssxref("color")}} can make the text visually pop when placed on a background with insufficient contrast.

These features all help improve legibility, and therefore, accessibility. Reducing visual noise and improving text clarity is especially helpful for users with [dyslexia](https://en.wikipedia.org/wiki/Dyslexia) or low vision.

In the writing systems of some languages, [overlines](/en-US/docs/Web/CSS/text-decoration-line#overline) and [underlines](/en-US/docs/Web/CSS/text-decoration-line#underline) carry semantic meaning. CSS lets you adapt styling to cultural norms. Text decoration features are especially useful for languages that do not use Latin-based scripts and instead follow different underline placements, such as Japanese and Korean.

Text decoration features also enable you to follow editorial and localization standards that come from print media. For example, with a strikethrough (line-through), you can indicate the status of content. Use it to inform users that content has been removed or that prices have been halved. This feature lets you present both the original and the updated content. Overlines or double underlines are commonly used for academic and editorial annotations.

## Text decoration in action

```css hidden
p {
  margin: 1em 0;
}
.under {
  text-decoration: underline red;
}

.over {
  text-decoration: wavy overline lime;
}

.line {
  text-decoration: line-through;
}

.underover {
  text-decoration: dashed underline overline;
}

.thick {
  text-decoration: solid underline purple 4px;
  text-underline-offset: -5px;
}
.shadow {
  text-shadow: red 4px 4px 0;
}
.emphasis {
  text-emphasis: triangle red;
}
```

```html hidden
        <p class="under">A red underline</p>
        <p class="over">A wavy lime overlines</p>
        <p class="line">This has a line-through it</p>
        <p class="underover">This has a dashed underline and overline</p>
        <p class="thick">An offset solid purple underline</p>
        <p class="shadow">This has a red shadow</p>
        <p class="emphasis">Emphasised with red triangles</p>
  >
</p>
```

{{EmbedLiveSample('Text decoration in action','auto','320')}}

## Reference

### Properties

- {{cssxref("text-decoration")}}
- {{cssxref("text-decoration-color")}}
- {{cssxref("text-decoration-line")}}
- {{cssxref("text-decoration-skip")}}
- {{cssxref("text-decoration-skip-ink")}}
- {{cssxref("text-decoration-style")}}
- {{cssxref("text-decoration-thickness")}}
- {{cssxref("text-emphasis")}}
- {{cssxref("text-emphasis-color")}}
- {{cssxref("text-emphasis-position")}}
- {{cssxref("text-emphasis-style")}}
- {{cssxref("text-shadow")}}
- {{cssxref("text-underline-offset")}}
- {{cssxref("text-underline-position")}}

The specification also defines the `text-decoration-skip-box`, `text-decoration-skip-self`, `text-decoration-skip-spaces`, `text-decoration-trim`, and `text-emphasis-skip` properties, which are not yet supported by any browser.

## Guides

- [Introduction to text shadows](/en-US/docs/Web/CSS/CSS_text_decoration/Text_shadows)
  - : Overview of the components of the {{cssxref("text-shadow")}} property and creating multiple text shadows

## Related concepts

- {{cssxref("::spelling-error")}}
- {{cssxref("::grammar-error")}}
- {{cssxref("::first-letter")}}
- {{cssxref("::first-line")}}
- {{cssxref("box-shadow")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("box-decoration-break")}}
- {{cssxref("line-style")}}
- {{cssxref("letter-spacing")}}
- {{cssxref("word-spacing")}}
- {{cssxref("font-size")}}
- {{cssxref("font-variant-position")}}
- {{cssxref("font-kerning")}}
- {{cssxref("ruby-overhang")}}
- {{HTMLElement("ruby")}}
- {{HTMLElement("rt")}}
- {{HTMLElement("rp")}}
- {{HTMLElement("sup")}}
- {{HTMLElement("sub")}}
- [Inline formatting context](/en-US/docs/Web/CSS/CSS_inline_layout/Inline_formatting_context)
- [Introduction to formatting contexts](/en-US/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts#inline_formatting_contexts)

## Specifications

{{Specifications}}

## See also

- [CSS fonts](/en-US/docs/Web/CSS/CSS_fonts) module
- [CSS ruby layout](/en-US/docs/Web/CSS/CSS_ruby_layout) module
- [CSS text](/en-US/docs/Web/CSS/CSS_text) module
- [CSS writing modes](/en-US/docs/Web/CSS/CSS_writing_modes) module
- [CSS overflow](/en-US/docs/Web/CSS/CSS_overflow) module
- [CSS fonts](/en-US/docs/Web/CSS/CSS_fonts) module
