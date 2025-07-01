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
  <p id="example-element">
    私は<ruby><rb>宮崎駿</rb><rt>みやざきはやお</rt></ruby
    >を尊敬しています
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
  - : When a ({{htmlelement("ruby")}}) container is longer than its corresponding base container, the ruby may partially overlap adjacent boxes.
    Whether, and how much to overhang are determined by the user agent.
- `none`
  - : A keyword indicating that the ruby is never allowed to extend past the ruby annotation container.

## Description

The `ruby-overhang` property controls whether the ruby annotation text box (`<rt>`) may overlap adjacent text outside the `<ruby>` container box.

When ruby annotation text is not allowed to overhang &mdash; when `ruby-overhang: none` is set on the `<ruby>` element &mdash; that element behaves like a traditional inline box, as if its {{cssxref("display")}} property were set to `inline` with only its own contents rendered within its boundaries and adjacent elements not crossing the boundary box.

By default, the content of the nested `<rt>` element is allowed to overhang, so content may overlap the `<ruby>` container box, partially rendering over and under surrounding inline-level content. With `auto`, the default, content may overhang, but it will not overhang if doing so would overlap adjacent `<rt>` elements or elements with a `display` value resolving to `ruby-base` or `ruby-text`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Ruby overhanging base text

This examples demonstrates both values of the `ruby-overhang` property.
We include two paragraphs with identical `<ruby>` content and structures, other than their class names.

```html
<p class="auto">
  私は<ruby><rb>宮崎駿</rb><rt>みやざきはやお</rt></ruby
  >を尊敬しています
</p>

<p class="none">
  私は<ruby><rb>宮崎駿</rb><rt>みやざきはやお</rt></ruby
  >を尊敬しています
</p>
```

A red `outline` of `1px` helps highlight the text annotation of {{htmlelement("rt")}} elements. The first paragraph has `ruby-overhang: auto` and the second has `ruby-overhang: none`.

```css
p {
  font-size: 40px;
  display: inline-block;
  margin: 0.5rem;
}
rt {
  font-size: 28px;
  outline: 1px solid red;
}
.auto {
  ruby-overhang: auto;
}
.none {
  ruby-overhang: none;
}
```

{{EmbedLiveSample("ruby_overhanging_base_text", , "250")}}

When `ruby-overhang` is set to `none`, the content of the `<ruby>` is not allowed to overlap the adjacent boxes of base text.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("ruby-align")}}
- {{CSSxRef("text-transform")}}: full-size-kana
- {{HTMLElement("ruby")}}
- {{HTMLElement("rt")}}
- {{HTMLElement("rp")}}
