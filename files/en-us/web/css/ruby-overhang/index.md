---
title: ruby-overhang
slug: Web/CSS/ruby-overhang
page-type: css-property
browser-compat: css.properties.ruby-overhang
---

{{CSSRef}}

The **`ruby-overhang`** [CSS](/en-US/docs/Web/CSS) property specifies whether or not a {{htmlelement("ruby")}} annotation overhangs any surrounding text.

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
    あの<ruby>表<rp>(</rp><rt>ひょう</rt><rp>)</rp></ruby
    ><ruby>現<rp>(</rp><rt>げん</rt><rp>)</rp></ruby>は面白い。
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
  - : When a ruby annotation container is longer than its corresponding base container, the annotation may partially overlap adjacent text.
    Whether, and how much to overhang are determined by the user agent.
- `none`
  - : A keyword indicating that the ruby is never allowed to extend past adjacent containers.

## Description

The `ruby-overhang` property controls whether the ruby annotation text box ({{htmlelement("rt")}}) may overlap adjacent text outside the `<ruby>` container box.

When ruby annotation text is not allowed to overhang &mdash; when `ruby-overhang: none` is set on the `<ruby>` element &mdash; that element behaves like an inline box, as if its {{cssxref("display")}} property were set to `inline` with only its own contents rendered within its boundaries and adjacent elements not crossing the boundary box.

By default, the content of an `<rt>` element is allowed to overhang, so content may overlap the `<ruby>` container box, partially rendering over or under surrounding inline-level content.
With `auto`, the default, content may overhang, but it will not overhang if doing so would overlap adjacent `<rt>` elements or elements with a `display` value resolving to `ruby-base` or `ruby-text`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Ruby overhanging base text

This examples demonstrates both values of the `ruby-overhang` property.

#### HTML

We include two paragraphs with identical `<ruby>` content and structures, other than their class names.

```html
<p class="auto">
  あの<ruby>表<rp>(</rp><rt>ひょう</rt><rp>)</rp></ruby
  ><ruby>現<rp>(</rp><rt>げん</rt><rp>)</rp></ruby>は面白い。
</p>

<p class="none">
  あの<ruby>表<rp>(</rp><rt>ひょう</rt><rp>)</rp></ruby
  ><ruby>現<rp>(</rp><rt>げん</rt><rp>)</rp></ruby>は面白い。
</p>
```

#### CSS

A red `outline` of `1px` helps highlight the text annotation of {{htmlelement("rt")}} elements.
The first paragraph has `ruby-overhang: auto` and the second has `ruby-overhang: none`.

```css
p {
  font-size: 40px;
  display: block;
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

#### Results

{{EmbedLiveSample("ruby_overhanging_base_text", , "350")}}

When `ruby-overhang` is set to `none`, the annotation text is not allowed to overlap the adjacent boxes of base ruby text. If you look closely, you may notice that in the first paragraph, the red box encasing the ruby text slightly overlaps parts of non-associated `<ruby>` content, whereas in the `none` example in supporting browsers, there is no overlap between ruby content and not-associated ruby text.

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
