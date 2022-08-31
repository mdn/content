---
title: CSS Text Decoration
slug: Web/CSS/CSS_Text_Decoration
tags:
  - CSS
  - CSS Text Decoration
  - Guide
  - Overview
  - Reference
spec-urls: https://drafts.csswg.org/css-text-decor/
---
{{CSSRef}}

**CSS Text Decoration** is a module of CSS that defines features relating to text decoration, such as underlines, text shadows, and emphasis marks.

## Reference

### Properties

- {{cssxref("text-decoration")}}
- {{cssxref("text-decoration-color")}}
- {{cssxref("text-decoration-line")}}
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

## Examples

```css
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

.blink {
  text-decoration: blink;
}
```

```html
<p class="under">This text has a line underneath it.</p>
<p class="over">This text has a line over it.</p>
<p class="line">This text has a line going through it.</p>
<p>This <a class="plain" href="#">link will not be underlined</a>,
    as links generally are by default. Be careful when removing
    the text decoration on anchors since users often depend on
    the underline to denote hyperlinks.</p>
<p class="underover">This text has lines above <em>and</em> below it.</p>
<p class="thick">This text has a really thick purple underline in supporting browsers.</p>
<p class="blink">This text might blink for you,
    depending on the browser you use.</p>
```

{{EmbedLiveSample('Examples','auto','320')}}

## Specifications

{{Specifications}}
