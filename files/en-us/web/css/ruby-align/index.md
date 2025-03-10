---
title: ruby-align
slug: Web/CSS/ruby-align
page-type: css-property
browser-compat: css.properties.ruby-align
---

{{CSSRef}}

The **`ruby-align`** [CSS](/en-US/docs/Web/CSS) property defines the distribution of the different ruby elements over the base.

## Syntax

```css
/* Keyword values */
ruby-align: start;
ruby-align: center;
ruby-align: space-between;
ruby-align: space-around;

/* Global values */
ruby-align: inherit;
ruby-align: initial;
ruby-align: revert;
ruby-align: revert-layer;
ruby-align: unset;
```

### Values

- `start`
  - : Is a keyword indicating that the ruby will be aligned with the start of the base text.
- `center`
  - : Is a keyword indicating that the ruby will be aligned at the middle of the base text.
- `space-between`
  - : Is a keyword indicating that the extra space will be distributed between the elements of the ruby.
- `space-around`
  - : Is a keyword indicating that the extra space will be distributed between the elements of the ruby, and around it.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Ruby aligned at the start of the base text

#### HTML

```html
<ruby>
  <rb>This is a long text to check</rb>
  <rp>（</rp><rt>short ruby</rt><rp>）</rp>
</ruby>
```

#### CSS

```css
ruby {
  ruby-align: start;
}
```

#### Result

{{EmbedLiveSample("Ruby_aligned_at_the_start_of_the_base_text", 180, 40)}}

### Ruby aligned at the center of the base text

#### HTML

```html
<ruby>
  <rb>This is a long text to check</rb>
  <rp>（</rp><rt>short ruby</rt><rp>）</rp>
</ruby>
```

#### CSS

```css
ruby {
  ruby-align: center;
}
```

#### Result

{{EmbedLiveSample("Ruby_aligned_at_the_center_of_the_base_text", 180, 40)}}

### Extra space distributed between ruby elements

#### HTML

```html
<ruby>
  <rb>This is a long text to check</rb>
  <rp>（</rp><rt>short ruby</rt><rp>）</rp>
</ruby>
```

#### CSS

```css
ruby {
  ruby-align: space-between;
}
```

#### Result

{{EmbedLiveSample("Extra_space_distributed_between_ruby_elements", 180, 40)}}

### Extra space distributed between and around ruby elements

#### HTML

```html
<ruby>
  <rb>This is a long text to check</rb>
  <rp>（</rp><rt>short ruby</rt><rp>）</rp>
</ruby>
```

#### CSS

```css
ruby {
  ruby-align: space-around;
}
```

#### Result

{{EmbedLiveSample("Extra_space_distributed_between_and_around_ruby_elements", 180, 40)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML Ruby elements: {{HTMLElement("ruby")}}, {{HTMLElement("rt")}}, {{HTMLElement("rp")}}, and {{HTMLElement("rtc")}}.
- CSS Ruby properties: {{cssxref("ruby-position")}}, {{cssxref("ruby-merge")}}.
