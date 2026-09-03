---
title: "`line-clamp` CSS property"
short-title: line-clamp
slug: Web/CSS/Reference/Properties/line-clamp
page-type: css-property
browser-compat: css.properties.line-clamp
sidebar: cssref
---

The **`line-clamp`** [CSS](/en-US/docs/Web/CSS) property allows limiting of the contents of a {{Glossary("block")}} to the specified number of lines. Optionally, it also allows inserting content into the last line to indicate that content was truncated.

> [!NOTE]
> For legacy support, the vendor-prefixed `-webkit-line-clamp` property only works in combination with the {{cssxref("display")}} property set to `-webkit-box` or `-webkit-inline-box` and the {{cssxref("box-orient", "-webkit-box-orient")}} property set to `vertical`. Despite these prefixed properties being deprecated, the co-dependency of these three properties is a fully specified behavior and will continue to be supported.

In most cases you will also want to set {{cssxref("overflow")}} to `hidden`, otherwise the contents won't be clipped but an ellipsis will still be shown after the specified number of lines.

When applied to anchor elements, the truncating can happen in the middle of the text, not necessarily at the end.

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
    - `auto`: An ellipsis character (U+2026) is rendered when the text is truncated due to the number of line specified.
    - {{cssxref("string")}}: A specified string is rendered at the end of the affected line box. The UA may truncate this string if it is absurdly long. When set to the empty string, the behavior is identical to the `no-ellipsis` value.

> [!NOTE]
> If only the `<’block-ellipsis’>` is declared without an `<integer>` value it will only display when the content is clamped by the height of the container.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### Truncating content with optional settings

In this example there are 3 _cards_ each with different settings:

- The first only has an `<integer>` set to restrict the number of lines.
- The second has an `<integer>` and the `no-ellipsis` value.
- The third has an `<integer>` and a custom `<string>` set.

#### HTML

```html
<section>
  <div class="card">
    <h2>number of lines</h2>
    <p class="integer">
      This example the <em>number of lines</em> is specified and content longer
      that this will be hidden by the line-clamp property. By default this will
      show an ellipsis.
    </p>
  </div>
  <div class="card">
    <h2>no ellipsis</h2>
    <p class="no-ellipsis">
      This example <em>no ellipsis</em> is specified and should not show. If you
      see this then your browser does not currently support this.
    </p>
  </div>
  <div class="card">
    <h2>custom string</h2>
    <p class="string">
      This example has a <em>String</em> at the end and this replaces the
      ellipsis
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

{{EmbedLiveSample("Truncating_content_with_optional_settings", "100%", "150")}}

### Truncating a paragraph with the legacy property

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
