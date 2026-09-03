---
title: "`line-clamp` CSS property"
short-title: line-clamp
slug: Web/CSS/Reference/Properties/line-clamp
page-type: css-property
browser-compat: css.properties.line-clamp
sidebar: cssref
---

The **`line-clamp`** [CSS](/en-US/docs/Web/CSS) property allows limiting of the contents of a {{Glossary("block")}} to the specified number of lines. Optionally, it also allows inserting content into the last line to indicate that content was truncated.

## Syntax

```css
/* Keyword value */
line-clamp: none;

/* <integer> value only */
line-clamp: 3;
line-clamp: 10;

/* <integer> and <'block-ellipsis'> values */
line-clamp: 3 no-ellipsis;
line-clamp: 10 "… (there is extra content)";

/* <'block-ellipsis'> values only - for height-based clamping */
line-clamp: no-ellipsis;
line-clamp: "… (there is extra content)";

/* Global values */
line-clamp: inherit;
line-clamp: initial;
line-clamp: revert;
line-clamp: revert-layer;
line-clamp: unset;
```

### Values

This property is specified as one or two space-separated values from the following list:

- `none`
  - : Specifies that content is not clamped. This keyword cannot be combined with the other values. This is the default.
- {{cssxref("integer")}} {{optional_inline}}
  - : This value specifies the number of lines after which the content will be clamped. It must be greater than 0.
- `<’block-ellipsis’>` {{optional_inline}}
  - : The optional values have the following meanings:
    - `no-ellipsis`: No ellipsis (character U+2026) is added if the text is truncated due to the number of line specified.
    - `auto`: Renders an ellipsis character (U+2026) if the text is truncated.
    - {{cssxref("string")}}: Renders the specified string at the end of the affected line. Browsers may truncate this string if it is very long. An empty string behaves like the `no-ellipsis` value.

> [!NOTE]
> If only the `<’block-ellipsis’>` is declared without an `<integer>` value it will only display when the content is clamped by the height of the container.

## Description

In most cases you will also want to set {{cssxref("overflow")}} to `hidden`, otherwise the contents won't be clipped but an ellipsis will still be shown after the specified number of lines.

When applied to anchor elements, the truncating can happen in the middle of the text, not necessarily at the end.

> [!NOTE]
> For legacy support, the vendor-prefixed `-webkit-line-clamp` property only works in combination with the {{cssxref("display")}} property set to `-webkit-box` or `-webkit-inline-box` and the {{cssxref("box-orient", "-webkit-box-orient")}} property set to `vertical`. Despite these prefixed properties being deprecated, the co-dependency of these three properties is a fully specified behavior and will continue to be supported.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### Truncating content with an ellipsis or a custom string

In this example, there are three cards, each with a different `line-clamp` value:

- The first has only an `<integer>` to restrict the number of lines.
- The second has an `<integer>` and the `no-ellipsis` value.
- The third has an `<integer>` and a custom `<string>`.

#### HTML

```html
<section>
  <div class="card">
    <h2>number of lines</h2>
    <p class="integer">
      This card the <em>number of lines</em> is specified by an <code>&lt;integer&gt;</code> and any content that does not fit in that number of lines is truncated and an ellipsis is shown.
    </p>
  </div>
  <div class="card">
    <h2>no ellipsis</h2>
    <p class="no-ellipsis">
      This card, as well as an <code>&lt;integer&gt;</code>, a <em>no-ellipsis</em> value is specified  and any content that does not fit in that number of lines is truncated and no ellipsis is shown.
    </p>
  </div>
  <div class="card">
    <h2>custom string</h2>
    <p class="string">
      This card, as well as an <code>&lt;integer&gt;</code>, a <em>String</em>  value is specified  and any content that does not fit in that number of lines is truncated and the custom string is shown instead of an ellipsis.
    </p>
  </div>
</section>
```

#### CSS

```css hidden
/* layout for the cards */
section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
  justify-content: space-between;
}
em {
  color: tomato;
}
.card {
  padding: 0.2rem;
  border: 1px solid tomato;
  border-radius: 0.2rem;
  max-width: 250px;
}
```

```css
.integer {
  line-clamp: 2;
  overflow: hidden;
}
.no-ellipsis {
  line-clamp: 2 no-ellipsis;
  overflow: hidden;
}
.string {
  line-clamp: 2 "… (my custom text)";
  overflow: hidden;
}
```

#### Result

{{EmbedLiveSample("truncating_content_with_an_ellipsis_or_a_custom_string", "100%", "150")}}

### Truncating a paragraph with the legacy property

This example uses the legacy `-webkit-line-clamp` property with `display` set to `-webkit-box`.

#### HTML

```html
<p>
  In this example the <code>-webkit-line-clamp</code> property is set to
  <code>3</code>, which means the text is clamped after three lines. An ellipsis
  will be shown at the point where the text is clamped.
</p>
```

#### CSS

```css
p {
  width: 300px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
```

#### Result

{{EmbedLiveSample("Truncating_a_paragraph_with_the_legacy_property", "100%", "130")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Line Clampin' (Truncating Multiple Line Text)](https://css-tricks.com/line-clampin/)
