---
title: CSS text decoration
slug: Web/CSS/CSS_text_decoration
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-text-decor/
  - https://drafts.csswg.org/css-text-decor-4/
sidebar: cssref
---

{{CSSRef}}

The **CSS text decoration** module defines features relating to text decoration, such as underlines, text shadows, and emphasis marks. text decoration features can provide visual cue for spelling errors, grammar issues, and links. These module's features can help improve the usability, accessibility, functionality, and aesthetics of your text. Text decoration features are especially useful for writing in languages like Japanese or Korean, where underline placement may differ from Latin-based text.

Varying text decoration colors, styles, and thicknesses based on pseudo-classes and pseudo-elements can help differentiate emphasis without relying on color alone.

Features enable mimicing editorial and localization standards inherited from print media. Overlines or double underlines are commonly used for academic and editorial annotations. In the writing systems of some languages, overlines or underlines carry semantic meaning. CSS lets you adapt styling to cultural norms.

A line-through can be used to indicate content status; informing users that content has been removed, or prices have been halved, enabling you to present both the original and updated content.

Features like {{cssxref("text-decoration-skip-ink")}} can increase legibility by skipping descenders, {{cssxref("text-underline-offset")}} enables fine-tuning underline placement to match font metrics or design aesthetics, which can be especially useful for unique [typefaces](/en-US/docs/Web/CSS/CSS_fonts), while {{cssxref("text-shadow")}} colors that contrast with text {{cssxref("color")}} can make text visually pop when placed on a background with insufficient contrast. These features all help improve legibility and therefore accessibility; reducing visual noise and improving text clarity is especially helpful for users with dyslexia or low vision.

## Text decoration in action

```css hidden
p {
  font-family: monospace;
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

.plain {
  text-decoration: none;
}

.underover {
  text-decoration: dashed underline overline;
}

.thick {
  text-decoration: solid underline purple 4px;
}
.offset {
  text-underline-offset: -5px;
}
.position {
  text-underline-position: under;
}
.shadow {
  text-shadow: red 4px 4px 0;
}
.emphasis {
  text-emphasis: triangle red;
}
```

```html hidden
<p class="initial">
  text-decoration: initial; (applied to a
  <a href="#" class="initial">Pretty link</a>)
</p>
<p>
  <a class="offset"
    >text-underline-offset: -5px; (applied to a
    <a href="#" class="offset">Pretty link</a>)
    <p>
      <a class="position"
        >text-underline-position: under; (applied to a
        <a href="#" class="position">Pretty link</a>)
        <p class="plain">
          text-decoration: none; (applied to a
          <a class="plain" href="#">Pretty link</a>)
        </p>
        <p class="under">text-decoration: underline red;</p>
        <p class="over">text-decoration: wavy overline lime;</p>
        <p class="line">text-decoration: line-through;</p>
        <p class="underover">text-decoration: dashed underline overline;</p>
        <p class="thick">text-decoration: solid underline purple 4px;</p>
        <p class="shadow">text-shadow: red 4px 4px 0;</p>
        <p class="emphasis">text-emphasis: triangle red;</p></a
      >
    </p></a
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
- [CSS inline](/en-US/docs/Web/CSS/CSS_inline) module
- [CSS ruby layout](/en-US/docs/Web/CSS/CSS_ruby_layout) module
- [CSS text](/en-US/docs/Web/CSS/CSS_text) module
- [CSS writing modes](/en-US/docs/Web/CSS/CSS_writing_modes) module
- [CSS overflow](/en-US/docs/Web/CSS/CSS_overflow) module
- [CSS fonts](/en-US/docs/Web/CSS/CSS_fonts) module
