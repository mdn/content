---
title: ruby-overhang
slug: Web/CSS/ruby-overhang
page-type: css-property
browser-compat: css.properties.ruby-overhang
---

{{CSSRef}}

The **`ruby-overhang`** [CSS](/en-US/docs/Web/CSS) property specifies whether or not ruby text overhangs any surrounding base text.

{{InteractiveExample("CSS Demo: ruby-overhang")}}

```css interactive-example-choice
ruby-overhang: auto;
```

```css interactive-example-choice
ruby-overhang: none;
```

```html interactive-example
<section id="default-example">
  <p>
    AB<ruby id="example-element">C<rp>(</rp><rt>1234</rt><rp>)</rp></ruby>DEF
  </p>
</section>
```

```css interactive-example
#default-example {
  font-size: 2em;
}
```

## Syntax

```css
/* Keyword values */
ruby-overhang: auto;
ruby-overhang: none;

/* Global values */
ruby-overhang: inherit;
ruby-overhang: initial;
ruby-overhang: revert;
ruby-overhang: revert-layer;
ruby-overhang: unset;
```

### Values

- `auto`
  - : When a ruby container is longer than its corresponding base container, the ruby may partially overlap adjacent boxes.
    Whether, how much, and under which conditions to overhang are determined by the user agent.
- `none`
  - : A keyword indicating that the ruby is never allowed to extend past the ruby annotation container.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Ruby overhanging base text

The following example shows two paragraphs, the first has `ruby-overhang: auto` and the second has `ruby-overhang: none`.
For the paragraph with `none`, no overlapping is allowed with rubies and the adjacent boxes of base text:

```html
<p class="auto">
  AB<ruby>C<rp>(</rp><rt>1234</rt><rp>)</rp></ruby>DEF<ruby>
</p>

<p class="none">
  AB<ruby>C<rp>(</rp><rt>1234</rt><rp>)</rp></ruby>DEF<ruby>
</p>
```

```css
p {
  font-family: sans-serif;
  font-size: 50px;
  display: inline-block;
  margin: 0.5rem;
}
.auto {
  ruby-overhang: auto;
}
.none {
  ruby-overhang: none;
}
```

{{EmbedLiveSample("ruby_overhanging_base_text", , "250")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("ruby")}}, {{HTMLElement("rt")}}, {{HTMLElement("rp")}}, and {{HTMLElement("rtc")}} HTML elements
- {{cssxref("ruby-align")}}
