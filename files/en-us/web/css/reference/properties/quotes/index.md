---
title: "`quotes` CSS property"
short-title: quotes
slug: Web/CSS/Reference/Properties/quotes
page-type: css-property
browser-compat: css.properties.quotes
sidebar: cssref
---

The [CSS](/en-US/docs/Web/CSS) **`quotes`** property sets how the browser should render quotation marks that are automatically added to the HTML {{HTMLElement("q")}} element or added using the `open-quote` or `close-quote` (or omitted using the `no-open-quote` and `no-close-quote`) values of the CSS {{cssxref("content")}} property.

{{InteractiveExample("CSS Demo: quotes")}}

```css interactive-example-choice
quotes: none;
```

```css interactive-example-choice
quotes: initial;
```

```css interactive-example-choice
quotes: "'" "'";
```

```css interactive-example-choice
quotes: "„" "“" "‚" "‘";
```

```css interactive-example-choice
quotes: "«" "»" "‹" "›";
```

```html interactive-example
<section id="default-example">
  <q id="example-element"
    >Show us the wonder-working <q>Brothers,</q> let them come out publicly—and
    we will believe in them!</q
  >
</section>
```

```css interactive-example
q {
  font-size: 1.2rem;
}
```

## Syntax

```css
/* Keyword values */
quotes: none;
quotes: auto;
quotes: match-parent;

/* <string> values */
quotes: "«" "»"; /* Set open-quote and close-quote to use French quotation marks */
quotes: "«" "»" "‹" "›"; /* Set two levels of quotation marks */

/* Global values */
quotes: inherit;
quotes: initial;
quotes: revert;
quotes: revert-layer;
quotes: unset;
```

### Values

- `none`
  - : The `open-quote` and `close-quote` values of the {{cssxref("content")}} property produce no quotation marks, as if `no-open-quote` and `no-close-quote` were set, respectively.
- `auto`
  - : Quotation marks that are typographically appropriate for the inherited language (i.e., via the [`lang`](/en-US/docs/Web/HTML/Reference/Global_attributes/lang) attribute set on the parent or other ancestor).
- `match-parent`
  - : A matched element uses quotation marks from the same set of quotation-mark pairs as its parent element. If the parent's `quotes` value is `auto`, the set is the one for the parent element's language (set by its `lang` attribute or inherited from an ancestor). Quotations nested inside the matched element inherit the same set, even if they are written in a different language. The specific pair of opening and closing quotation marks used depends on the nesting level of the quote.
- {{cssxref("&lt;string&gt;")}}
  - : Defines one or more pairs of quotation marks, as a space-separated list of strings, such as `"«" "»" "‹" "›"`. Each quotation mark is a string wrapped in double (`"`) or single (`'`) quotes, and can be empty (`""`). In each pair, the first string is used as the `open-quote` value and the second as the `close-quote` value. The list must contain an even number of strings and can't include keywords; otherwise, the declaration is invalid.

    The first pair represents the quotation's outer level. The second pair, if present, represents the first nested level. The next pair is used for doubly nested levels, and so on. If the depth of quote nesting is greater than the number of pairs, the last pair in the `quotes` value is repeated.

    Which pair of quotes is used depends on the depth, or nesting level, of quotes: the number of occurrences of `<q>` quotes or `open-quote` (or `no-open-quote`) in all generated text before the current occurrence, minus the number of occurrences of closing quotes, either as `</q>`, `close-quote`, or `no-close-quote`. If the depth is 0, the first pair is used; if the depth is 1, the second pair is used, and so on.

## Description

The quotation marks typically used for quotations depend on the language. Each language has a set of pairs of quotation marks: the first pair is used around a quotation, the next pair around a quotation nested inside it, and so on. Quotations nested more deeply than the number of pairs use the last pair.

Most languages have only two pairs. For example, English uses `“` and `”` around a quotation, and `‘` and `’` around all more deeply nested quotations. German uses `„` and `“`, then `‚` and `‘`, and Japanese uses `「` and `」`, then `『` and `』`.

### Language-based quotation marks

When `quotes` is `auto` (the initial value), a quotation gets quotation marks for the language of its parent element. This language is set by the parent's [`lang`](/en-US/docs/Web/HTML/Reference/Global_attributes/lang) attribute or inherited from an ancestor. The quotation's own `lang` attribute isn't used, because it is customary to quote text with the quotation marks of the surrounding text, not those of the language being quoted. This is why, for example, French text quoted in an English paragraph usually has English quotation marks.

Each nested quotation also gets quotation marks for its parent's language, using the pair for its nesting level. So if a German quotation is nested inside a Japanese quotation (with `lang="ja"`), it gets the Japanese second-level quotation marks (`『` and `』`).

### Using one set of quotation marks for nested quotations

The `match-parent` value makes a quotation and every quotation nested inside it use the same set of quotation marks, whatever their languages. If the parent's `quotes` value is `auto`, the quotation gets the set for the parent's language, and the quotations nested inside it inherit that set. For example, if a Japanese quotation in an English paragraph is set to `match-parent`, a German quotation inside it gets the English second-level quotation marks (`‘` and `’`). If the parent has custom quotation marks, the quotation uses the same set.

Each element has its own `quotes` value, so you can set a different value on a more deeply nested quotation to change the quotation marks from that level down. For example, `q q q { quotes: auto; }` switches the third and deeper levels back to language-based quotation marks.

### Custom quotation marks

The `<string>` value defines your own set of quotation marks, with as many pairs as you like. You might do this to use one style of quotation marks across a site in several languages, to define different marks for more levels of nesting, or to insert text that isn't a quotation mark (see [Text as quotes and empty quotes](#text_as_quotes_and_empty_quotes)).

If you want a quotation to use the quotation marks of its own language, set them as custom quotation marks, using the {{cssxref(":lang()")}} pseudo-class to select quotations in that language:

```css
q:lang(fr) {
  quotes: "«" "»";
}
```

### Removing quotation marks

The `none` value stops the browser from inserting quotation marks, which is useful if the quotation marks are already in the text, or if quotations are shown in another way, such as in italics. It makes `open-quote` and `close-quote` behave like `no-open-quote` and `no-close-quote`, which don't insert quotation marks but still change the nesting level. So a quotation with `quotes: none` still counts as a nesting level, and a quotation inside it that has quotation marks gets the second-level pair.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Default quotes and overrides

This example compares the default quotes provided by the semantic HTML `<q>` element to those we define using the CSS `quotes` property.

The initial value of `quotes` is [`auto`](#auto). In this example, the first list item has `quotes: auto` set, so it gets the default quotes for the language specified; the same as if no `quotes` property was set. The second list item defines which quotation marks to use for quotes and nested quotes; these quotation marks will be used for descendants of an element with `specialQuotes` class regardless of the language (like any [`lang`](/en-US/docs/Web/HTML/Reference/Global_attributes/lang) attribute values set).

#### HTML

```html
<ul>
  <li>
    Default quotes:
    <p lang="ru">
      <q
        >Митч Макконнелл - это человек, который знает о России и ее влиянии
        меньше, чем даже Дональд Трамп, и <q>я ничего не знаю</q>, сказал
        Трамп</q
      >, - писал Раджу.
    </p>
  </li>
  <li class="specialQuotes">
    Defined by <code>quotes</code> property:
    <p lang="ru">
      <q
        >Митч Макконнелл - это человек, который знает о России и ее влиянии
        меньше, чем даже Дональд Трамп, и <q>я ничего не знаю</q>, сказал
        Трамп</q
      >, - писал Раджу.
    </p>
  </li>
</ul>
```

#### CSS

```css
li {
  quotes: auto;
}

.specialQuotes {
  quotes: "“" "”" "‘" "’";
}
```

#### Result

{{EmbedLiveSample('default_quotes_and_overrides', "100%", 200)}}

By default, browsers provide language-specific quotation marks when the `<q>` element is used. If the `quotes` property is defined, the values provided override the browser defaults. Note the `quotes` property is inherited. The `quotes` property is set on the `<li>` with the `specialQuotes` class, but the quotes are applied to the `<q>` elements.

Note that each open-quote and close-quote is replaced by one of the strings from the value of quotes, based on the depth of nesting.

### Auto quotes

The initial value of `quotes` is `auto`. This example works without it being explicitly set.

#### HTML

```html
<ul>
  <li lang="fr">
    <q>Ceci est une citation française.</q>
  </li>
  <li lang="ru">
    <q>Это русская цитата</q>
  </li>
  <li lang="de">
    <q>Dies ist ein deutsches Zitat</q>
  </li>
  <li lang="en">
    <q>This is an English quote.</q>
  </li>
</ul>
```

#### CSS

```css
q {
  quotes: auto;
}
li:not(:last-of-type) {
  border-bottom: 1px solid;
}
```

```css hidden
li {
  padding: 0.5em 0;
}
```

#### Result

{{EmbedLiveSample('Auto_quotes', "100%", 200)}}

Note that the [`lang`](/en-US/docs/Web/HTML/Reference/Global_attributes/lang) attribute was placed on an ancestor of the `<q>`, not the `<q>` itself. If a quotation is in a different language than the surrounding text, it is customary to quote the text with the quote marks of the language of the surrounding text, not the language of the quotation itself.

### With generated content

In this example, instead of using the `<q>` element, we are adding quotation marks to the {{cssxref("::before")}} and {{cssxref("::after")}} pseudo-elements before and after the content of each element with a specific class name.

#### HTML

```html
<p>
  <span class="quote">I should be using quotes</span>, I thought,
  <span class="quote"
    >But why use semantic HTML elements when I can add classes to
    <span class="quote">ALL THE THINGS!</span>?
  </span>
</p>
```

#### CSS

```css
.quote {
  quotes: '"' '"' "'" "'";
}
.quote::before {
  content: open-quote;
}
.quote::after {
  content: close-quote;
}
```

#### Result

{{EmbedLiveSample('With generated content', "100%", 80)}}

### Text as quotes and empty quotes

This example demonstrates using something other than quotation marks as the `<string>` values. The open-quote indicates the speaker and, as there is no opening quotation mark, the close-quote is empty. We set `auto` for the nested quotes. These nested quotes will be book-ended by whatever the language dictates is normal for nested quotes.

#### HTML

```html
<ul>
  <li><q data-speaker="karen">Hello</q></li>
  <li><q data-speaker="chad">Hi</q></li>
  <li><q data-speaker="karen">this conversation is not interesting</q></li>
  <li>
    <q data-speaker="pat"
      >OMG! <q>Hi</q>? Seriously? at least <q>hello</q> is five letters long.</q
    >
  </li>
</ul>
```

#### CSS

```css
[data-speaker="karen" i] {
  quotes: "She said: " "";
}
[data-speaker="chad" i] {
  quotes: "He said: " "";
}
[data-speaker="pat" i] {
  quotes: "They said: " "";
}
[data-speaker] q {
  quotes: auto;
}
```

```css hidden
li {
  padding: 0.5em 0;
}
```

#### Result

{{EmbedLiveSample('Text as quotes and empty quotes', "100%", 200)}}

### Nested quotes in a different language

This example compares `auto` and `match-parent` for quotations nested inside other quotations that are in a different language. Each list item contains an English paragraph that quotes Japanese text, which quotes German text, which quotes French text. The text of each quotation names its language, so you can see which quotation marks it gets.

#### HTML

The first two list items use the default quotation marks for the outer quotation. The last two have a `custom` class, which sets custom quotation marks.

```html
<ul>
  <li class="auto">
    <code>auto</code>:
    <p lang="en">
      English
      <q lang="ja"
        >日本語 <q lang="de">Deutsch <q lang="fr">français</q></q></q
      >
    </p>
  </li>
  <li class="match-parent">
    <code>match-parent</code>:
    <p lang="en">
      English
      <q lang="ja"
        >日本語 <q lang="de">Deutsch <q lang="fr">français</q></q></q
      >
    </p>
  </li>
  <li class="custom auto">
    Custom quotes, <code>auto</code>:
    <p lang="en">
      English
      <q lang="ja"
        >日本語 <q lang="de">Deutsch <q lang="fr">français</q></q></q
      >
    </p>
  </li>
  <li class="custom match-parent">
    Custom quotes, <code>match-parent</code>:
    <p lang="en">
      English
      <q lang="ja"
        >日本語 <q lang="de">Deutsch <q lang="fr">français</q></q></q
      >
    </p>
  </li>
</ul>
```

#### CSS

The `custom` class sets two levels of quotation marks, which the outer quotation inherits. The `auto` rule uses the `q q` selector, which matches only `<q>` elements that are inside another `<q>` (so the outer quotation keeps the quotation marks it inherits). The `match-parent` rule applies to all quotations, so the outer quotation gets its set of quotation marks from the paragraph, and the quotations inside it inherit that set.

```css
.custom {
  quotes: "$" "&" "#" "@";
}

.auto q q {
  quotes: auto;
}

.match-parent q {
  quotes: match-parent;
}
```

```css hidden
li {
  padding: 0.5em 0;
}

p {
  margin: 0.25em 0 0;
}

@supports not (quotes: match-parent) {
  body::before {
    content: "Your browser doesn't support the 'match-parent' value of the 'quotes' property.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

#### Result

With `auto`, each quotation gets quotation marks for its parent's language. With `match-parent`, the nested quotations use the same set as the outer quotation:

- **`auto`**:
  - The Japanese quotation is inside a paragraph with `lang="en"` (English), so it gets English quotation marks (`“` and `”`): `“日本語 …”`.
  - The German quotation is inside the Japanese quotation (`lang="ja"`), so it gets Japanese second-level quotation marks (`『` and `』`): `『Deutsch …』`.
  - The French quotation is inside the German quotation (`lang="de"`), so it gets German second-level quotation marks (`‚` and `‘`): `‚français‘`.
- **`match-parent`**:
  - The Japanese quotation is inside a paragraph with `lang="en"` (English), so it uses the English set. It's the outer quotation, so it gets the first pair (`“` and `”`): `“日本語 …”`.
  - The German and French quotations inherit the English set, even though their `lang` attributes are different, so they get English second-level quotation marks (`‘` and `’`): `‘Deutsch …’` and `‘français’`.
- **Custom quotes, `auto`**:
  - The Japanese quotation uses the first pair of custom quotation marks (`$` and `&`), which it inherits from the list item: `$日本語 …&`.
  - The `auto` value on the German and French quotations replaces the custom quotation marks with language-based ones, so they get the same quotation marks as in the first list item: `『Deutsch …』` and `‚français‘`.
- **Custom quotes, `match-parent`**:
  - The Japanese quotation's parent paragraph has the custom quotation marks (inherited from the list item), so it uses that set, and gets the first pair (`$` and `&`): `$日本語 …&`.
  - The German quotation inherits the custom set and uses its second pair (`#` and `@`): `#Deutsch …@`.
  - The French quotation is nested more deeply than the number of pairs, so it reuses the last pair (`#` and `@`): `#français@`.

{{EmbedLiveSample("Nested quotes in a different language", "100%", 380)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS generated content](/en-US/docs/Web/CSS/Guides/Generated_content) module
- {{ Cssxref("contain") }}
- {{ Cssxref("content") }}
