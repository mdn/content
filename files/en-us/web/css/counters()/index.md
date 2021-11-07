---
title: counters()
slug: Web/CSS/counters()
tags:
  - CSS
  - CSS Counter
  - CSS Function
  - Function
  - Reference
browser-compat: css.types.counters
---
{{CSSRef}}

The **`counters()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) enables nested counters, returning a concatenated string representing the current values of the named counters, if there are any. The `counters()` function has two forms: `counters(name, string)` or `counters(name, string, style)`. It is generally used with [pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements), but can be used, theoretically, anywhere a [`<string>`](/en-US/docs/Web/CSS/string) value is supported. The generated text is the value of all counters with the given name, from outermost to innermost, separated by the specified string. The counters are rendered in the style indicated, defaulting to `decimal` if no style is specified.

```css
/* Simple usage  - style defaults to decimal */
counters(countername, '-');

/* changing the counter display */
counters(countername, '.', upper-roman)
```

A [counter](/en-US/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters) has no visible effect by itself. The `counters()` function (and {{cssxref("counter", "counter()")}} function) is what makes it useful by returning developer defined content.

> **Note:** The `counters()` function can be used with any CSS property, but support for properties other than {{CSSxRef("content")}} is experimental, and support for the type-or-unit parameter is sparse.
>
> Check the [Browser compatibility table](#browser_compatibility) carefully before using this in production.

## Syntax

### Values

- {{cssxref("&lt;custom-ident&gt;")}}
  - : A name identifying the counters, which is the same case-sensitive name used for the {{cssxref("counter-reset")}} and {{cssxref("counter-increment")}}. The name cannot start with two dashes and can't be `none`, `unset`, `initial`, or `inherit`.
- `<counter-style>`
  - : A counter style name or [`symbols()`](/en-US/docs/Web/CSS/symbols) function, where a counter style name is a numeric, alphabetic, or symbolic simple predefined counter style, a complex longhand east Asian or Ethiopic predefined counter style, or other [predefined counter style](/en-US/docs/Web/CSS/CSS_Counter_Styles). If omitted, the counter-style defaults to decimal
- {{cssxref("&lt;string&gt;")}}
  - : Any number of text characters. Non-Latin characters must be encoded using their Unicode escape sequences: for example, `\000A9` represents the copyright symbol.

### Formal syntax

{{CSSSyntax}}

## Examples

### default value compared to upper Roman

#### HTML

```html
<ol>
  <li>
     <ol>
        <li></li>
        <li></li>
        <li></li>
      </ol>
  </li>
  <li></li>
  <li></li>
  <li>
     <ol>
        <li></li>
        <li>
           <ol>
              <li></li>
              <li></li>
              <li></li>
           </ol>
        </li>
      </ol>
  </li>
</ol>
```

#### CSS

```css
ol {
  counter-reset: listCounter;
}
li {
  counter-increment: listCounter;
}
li::marker {
   content:  counters(listCounter, '.', upper-roman) ') ';
}
li::before {
  content:  counters(listCounter, ".") " == " counters(listCounter, ".", lower-roman) ;
}
```

#### Result

{{EmbedLiveSample("default_value_compared_to_upper_Roman", "100%", 150)}}

### decimal-leading-zero compared to lower-alpha

#### HTML

```html
<ol>
  <li>
     <ol>
        <li></li>
        <li></li>
        <li></li>
      </ol>
  </li>
  <li></li>
  <li></li>
  <li>
     <ol>
        <li></li>
        <li>
           <ol>
              <li></li>
              <li></li>
              <li></li>
           </ol>
        </li>
      </ol>
  </li>
</ol>
```

#### CSS

```css
ol {
  counter-reset: count;
}
li {
  counter-increment: count;
}
li::marker {
   content: counters(count, '.', upper-alpha) ') ';
}
li::before {
  content: counters(count, ".", decimal-leading-zero) " == " counters(count, ".", lower-alpha);
}
```

#### Result

{{EmbedLiveSample("decimal-leading-zero_compared_to_lower-alpha", "100%", 150)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS Counters](/en-US/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters)
- {{cssxref("counter-set")}}
- {{cssxref("counter-reset")}}
- {{cssxref("counter-increment")}}
- {{cssxref("@counter-style")}}
- CSS [`counter()`](/en-US/docs/Web/CSS/counter_function) function
- {{cssxref("::marker")}}
