---
title: "`ruby-overhang` CSS property"
short-title: ruby-overhang
slug: Web/CSS/Reference/Properties/ruby-overhang
page-type: css-property
browser-compat: css.properties.ruby-overhang
sidebar: cssref
---

The **`ruby-overhang`** [CSS](/en-US/docs/Web/CSS) property specifies whether or not a {{htmlelement("ruby")}} annotation is permitted to overhang any surrounding text.

{{InteractiveExample("CSS Demo: ruby-overhang")}}

```css interactive-example-choice
ruby-overhang: auto;
```

```css interactive-example-choice
ruby-overhang: spaces;
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

rt {
  font-size: 0.8em;
}
```

## Syntax

```css
/* Keyword values */
ruby-overhang: auto;
ruby-overhang: spaces;
ruby-overhang: none;

/* Global values */
ruby-overhang: inherit;
ruby-overhang: initial;
ruby-overhang: revert;
ruby-overhang: revert-layer;
ruby-overhang: unset;
```

### Values

This property is specified as one of the following keyword values:

- `auto`
  - : The default value. When a ruby annotation container is longer than its corresponding base container, the annotation may partially overlap adjacent text.
    Whether, and how much to overhang are determined by the user agent.
- `spaces`
  - : The ruby annotation text doesn't extend past adjacent base containers.
- `none`
  - : Behaves as `spaces`; a legacy alias kept for backwards compatibility.

## Description

The `ruby-overhang` property controls whether ruby annotation text boxes ({{htmlelement("rt")}}) may overlap adjacent text outside their {{htmlelement("ruby")}} container boxes.

When ruby annotation text is not allowed to overhang — due to a set `ruby-overhang` value of `spaces` or `none` — the `<ruby>` element behaves like an inline box, as if its {{cssxref("display")}} property were set to `inline` with only its own contents rendered within its boundaries and adjacent elements not crossing the boundary box.

When the default `auto` value is set, the content of `<rt>` elements is allowed to overhang, so they may overlap the `<ruby>` container box, partially rendering over or under surrounding inline-level content. Content will not overhang if doing so would overlap adjacent `<rt>` elements or elements with a `display` value resolving to `ruby-base` or `ruby-text`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Ruby overhanging base text

This example demonstrates the effect of the `ruby-overhang` value `spaces`.

#### HTML

We include two paragraphs with identical `<ruby>` content and structures, other than their class names.

```html
<h2><code>ruby-overhang: auto</code></h2>

<p class="auto">
  あの<ruby>表<rp>(</rp><rt>ひょう</rt><rp>)</rp></ruby
  ><ruby>現<rp>(</rp><rt>げん</rt><rp>)</rp></ruby>は面白い。
</p>

<h2><code>ruby-overhang: spaces</code></h2>

<p class="spaces">
  あの<ruby>表<rp>(</rp><rt>ひょう</rt><rp>)</rp></ruby
  ><ruby>現<rp>(</rp><rt>げん</rt><rp>)</rp></ruby>は面白い。
</p>
```

#### CSS

We set `ruby-overhang: auto` on the first paragraph, and `ruby-overhang: spaces` on the second. We also include a fallback value of `ruby-overhang: none` for browsers that don't support `spaces`:

```css hidden
p {
  font-size: 40px;
  display: block;
  margin: 0.5rem;
}

rt {
  font-size: 28px;
}

h2 {
  margin-bottom: 40px;
}
```

```css
.auto {
  ruby-overhang: auto;
}
.spaces {
  ruby-overhang: none;
  ruby-overhang: spaces;
}
```

We include a red `2px outline` on the {{htmlelement("rt")}} elements to highlight the text annotation:

```css
rt {
  outline: 2px solid red;
}
```

#### Results

{{EmbedLiveSample("ruby_overhanging_base_text", "100%", "350")}}

In the second paragraph, where `ruby-overhang` is set to `spaces`, the annotation text is not allowed to overlap the adjacent boxes of base ruby text. If you look closely, you will notice that there is no overlap between ruby content and non-associated ruby text.

By contrast, in the first paragraph, where `ruby-overhang` is set to the default `auto` value, the red box encasing the ruby text slightly overlaps parts of the non-`<ruby>` content.

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
