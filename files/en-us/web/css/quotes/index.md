---
title: quotes
slug: Web/CSS/quotes
page-type: css-property
browser-compat: css.properties.quotes
---

{{CSSRef}}

The [CSS](/en-US/docs/Web/CSS) **`quotes`** property sets how the browser should render quotation marks that are automatically added to the HTML {{HTMLElement("q")}} element or added using the `open-quotes` or `close-quotes` (or omitted using the `no-open-quote` and `no-close-quote`) values of the of the CSS [`content`](/en-US/docs/Web/CSS/content) property.

{{EmbedInteractiveExample("pages/css/quotes.html")}}

Browsers insert quotation marks at the opening and closing of `<q>` elements and for the `open-quote` and `close-quote` values of the `content` property. Each opening or closing quote is replaced by one of the strings from the value of `quotes`, based on the depth of nesting, or, if `quotes` is explicitly set to or otherwise resolves to `auto`, the quotation marks used are language dependent.

## Syntax

```css
/* Keyword value */
quotes: none;
quotes: auto;

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
  - : Quotation marks that are typographically appropriate for the inherited language (i.e. via the [`lang`](/en-US/docs/Web/HTML/Global_attributes/lang) attribute set on the parent or other ancestor).
- `[{{cssxref("&lt;string&gt;")}} <string>]+`

  - : Defines one or more pairs of quotation mark values for opening and closing quotes. In each pair, the first of each pair of quotes are used as the values for the `open-quote` and the second of each pair is the `close-quote`.

    The first pair represents the quotation's outer level. The second pair, if present, represents the first nested level. The next pair is used for doubly nested levels, and so on. If the depth of quote nesting is greater than the number of pairs, the last pair in the `quotes` value is repeated.

    Which pair of quotes is used depends on the depth, or nesting level, of quotes: the number of occurrences of `<q>` quotes or `open-quote` (or `no-open-quote`) in all generated text before the current occurrence, minus the number of occurrences of closing quotes, either as `</q>`, `close-quote`, or `no-close-quote`. If the depth is 0, the first pair is used, if the depth is 1, the second pair is used, etc.

> [!NOTE]
> The CSS `content` property value `open-quote` increments and `no-close-quote` decrements the quoting level, but does not insert a quotation marks.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Default quotes and overrides

This examples compares the default quotes provided by the semantic HTML `<q>` element to those we define using the CSS `quotes` property.

The default value of `quotes` is [`auto`](#auto). In this example, the first list item has `quotes: auto` set, so gets the default quotes for the language specified; the same as if no `quotes` property was set. The second list item defines which quotation marks to use for quotes and nested quotes; these quotation marks will be used for descendants of an element with `specialQuotes` class regardless of the language (like any [`lang`](/en-US/docs/Web/HTML/Global_attributes/lang) attribute values set).

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
    Defined by <code>quotes</code> property :
    <p lang="ru">
      <q
        >Митч Макконнелл - это человек, который знает о России и ее влиянии
        меньше, чем даже Дональд Трамп, и <q>я ничего не знаю</q>, сказал
        Трамп</q
      >, - писал Раджу.
    </p>
  </li>
  <ul></ul>
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

{{EmbedLiveSample('Overriding default quotes', "100%", 200)}}

By default, browser provide language specific quotation marks when the `<q>` element is used. If the `quotes` property is defined, the values provided override the browser defaults. Note the `quotes` property is inherited. The `quotes` property is set on the `<li>` with the `specialQuotes` class, but the quotes are applied the `<q>` elements.

Note that each open-quote and close-quote is replaced by one of the strings from the value of quotes, based on the depth of nesting.

### Auto quotes

The default value of `quotes` is `auto`. This example works without it being explicitly being set.

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

Note that the [`lang`](/en-US/docs/Web/HTML/Global_attributes/lang) attribute was placed on an ancestor of the `<q>`, not the `<q>` itself. If a quotation is in a different language than the surrounding text, it is customary to quote the text with the quote marks of the language of the surrounding text, not the language of the quotation itself.

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

This example demonstrates using something other than quotation marks as the `<string>` values. The open-quote indicates the speaker and, as there is not opening quotation mark, the close-quote is the empty. (Mixing a `<string>` with an enumerated keyword to create a pair is not supported). We set `auto` for the nested quotes. These nested quotes will be book-ended by whatever the language dictates is normal for nested quotes.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS generated content](/en-US/docs/Web/CSS/CSS_generated_content) module
- {{ Cssxref("contain") }}
- {{ Cssxref("content") }}
