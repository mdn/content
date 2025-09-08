---
title: text-autospace
slug: Web/CSS/text-autospace
page-type: css-property
browser-compat: css.properties.text-autospace
sidebar: cssref
---

The **`text-autospace`** [CSS](/en-US/docs/Web/CSS) property allows you to specify the space applied between Chinese/Japanese/Korean (CJK) and non-CJK characters.

## Syntax

```css
text-autospace: normal;
text-autospace: no-autospace;
text-autospace: ideograph-alpha;
text-autospace: ideograph-numeric;
text-autospace: punctuation;
text-autospace: insert;
text-autospace: replace;
text-autospace: ideograph-alpha ideograph-numeric punctuation;
text-autospace: ideograph-alpha ideograph-numeric;
text-autospace: ideograph-alpha ideograph-numeric insert;
text-autospace: auto;

/* Global values */
text-autospace: inherit;
text-autospace: initial;
text-autospace: revert;
text-autospace: revert-layer;
text-autospace: unset;
```

### Values

- `normal`
  - : Creates the default behavior to automatically apply spacing between CJK and non-CJK characters and around punctuation. This value has the same effect as applying both [`ideograph-alpha`](#ideograph-alpha) and [`ideograph-numeric`](#ideograph-numeric).
- `<autospace>`
  - : Provides more control over spacing behaviors. It accepts:
    - the keyword `no-autospace`, or
    - a combination of one or more of `ideograph-alpha`, `ideograph-numeric`, and `punctuation`, optionally followed by `insert` or `replace`.
    - `no-autospace`
      - : Disables automatic spacing between CJK and non-CJK characters.
    - `ideograph-alpha`
      - : Adds spacing only between ideographic characters (such as Katakana and Han) and non-ideographic letters (such as Latin). It does not add spacing between ideographic characters and non-ideographic numbers.
    - `ideograph-numeric`
      - : Adds spacing only between ideographic characters (such as Katakana and Han) and non-ideographic numbers (such as Latin). It does not add spacing between ideographic characters and non-ideographic letters.
    - `punctuation`
      - : Adds non-breaking spacing around punctuation as required by language-specific typographic conventions.
    - `insert`
      - : Adds the specified spacing only if there are no existing spaces between the ideographic and non-ideographic scripts.
    - `replace`
      - : Replaces existing spacing (such as [U+0020](/en-US/docs/Glossary/Whitespace)) between ideographic and non-ideographic characters with the specified spacing.
- `auto`
  - : Lets the browser choose typographically appropriate spacing. The spacing may vary across browsers and platforms.

> [!NOTE]
> If neither `insert` nor `replace` are specified, the behavior is the same as `insert`.

> [!NOTE]
> This property is additive with the {{CSSXRef("word-spacing")}} and {{CSSXRef("letter-spacing")}} properties. The amount of spacing contributed by the `letter-spacing` setting is added to the spacing created by `text-autospace`. The same applies to `word-spacing`.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

This example shows the difference between various values of `text-autospace`. Try selecting a value from the drop-down box to see how it affects the spacing in the text.

```html hidden
<form>
  <label for="autospace">Choose value for <code>text-autospace:</code></label>
  <select name="autospace" id="autospace">
    <option selected value="no-autospace">no-autospace</option>
    <option value="normal">normal</option>
    <option value="ideograph-alpha">ideograph-alpha</option>
    <option value="ideograph-numeric">ideograph-numeric</option>
  </select>
</form>
<div class="unsupported">
  <code>text-autospace</code> is not supported in your browser.
</div>
```

```html
<main>
  <figure class="no-autospace">
    <figcaption>
      <code>
        text-autospace: <span id="autospace-value">no-autospace</span>;
      </code>
    </figcaption>
    <div>
      <p>HTML超文本标记语言</p>
      <p>42四十二</p>
    </div>
  </figure>
</main>
```

```css
.no-autospace {
  text-autospace: no-autospace;
}
.auto {
  text-autospace: auto;
}
.normal {
  text-autospace: normal;
}
.ideograph-alpha {
  text-autospace: ideograph-alpha;
}
.ideograph-numeric {
  text-autospace: ideograph-numeric;
}
```

```css hidden
figure {
  margin: 1rem;
  div {
    font-size: 2rem;
    padding: 1rem;
    font-family: sans-serif;
    border: tomato solid 1px;
  }
  p {
    margin: 0;
  }
}
main {
  max-width: max-content;
}
@supports not (text-autospace: normal) {
  form {
    display: none;
  }
  .unsupported {
    color: red;
  }
}
@supports (text-autospace: normal) {
  .unsupported {
    display: none;
  }
}
```

```js hidden
const chose = document.querySelector("#autospace");
const fig = document.querySelector("figure");
const codeValue = document.querySelector("#autospace-value");
chose.addEventListener("change", (e) => {
  fig.className = e.target.value;
  codeValue.innerText = e.target.value;
});
```

{{EmbedLiveSample("Example", 200, 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref('text-spacing-trim')}}
- [`ic`](/en-US/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#local_font-relative_lengths) and [`ric`](/en-US/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#root_font-relative_lengths) units
- [CSS Text](/en-US/docs/Web/CSS/CSS_text) module
