---
title: speak-as
slug: Web/CSS/@counter-style/speak-as
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.counter-style.speak-as
---

{{CSSRef}}

The **`speak-as`** descriptor specifies how a counter symbol constructed with a given {{cssxref('@counter-style')}} will be represented in the spoken form. For example, an author can specify a counter symbol to be either spoken as its numerical value or just represented with an audio cue.

## Syntax

```css
/* Keyword values */
speak-as: auto;
speak-as: bullets;
speak-as: numbers;
speak-as: words;
speak-as: spell-out;

/* @counter-style name value */
speak-as: <counter-style-name>;
```

### Values

- `auto`

  - : If the value of `speak-as` is specified as `auto`, then the effective value of `speak-as` will be determined based on the value of the {{cssxref("@counter-style/system", "system")}} descriptor:

    - If the value of `system` is `alphabetic`, the effective value of `speak-as` will be `spell-out`.
    - If `system` is `cyclic`, the effective value of `speak-as` will be `bullets`.
    - If `system` is `extends`, the value of `speak-as` will be the same as if `speak-as: auto` is specified on the extended style.
    - For all other cases, specifying `auto` has the same effect as specifying `speak-as: numbers`.

- `bullets`
  - : A phrase or an audio cue defined by the {{Glossary("user agent")}} for representing an unordered list item will be read out.
- `numbers`
  - : The numerical value of the counter will be read out in the document language.
- `words`
  - : The user agent will generate a counter value as normal and read it out as a word in the document language.
- `spell-out`
  - : The user agent will generate a counter representation as normal and would read it out letter by letter. If the user agent doesn't know how to read out a particular counter symbol, the user agent might read it out as if the value of `speak-as` was `numbers`.
- `<counter-style-name>`
  - : The name of another counter style, specified as a {{cssxref("&lt;custom-ident&gt;")}}. If included, the counter will be spoken out in the form specified in that counter style, kind of like specifying the {{cssxref("@counter-style/fallback", "fallback")}} descriptor. If the specified style does not exist, `speak-as` defaults to `auto`.

## Accessibility concerns

Assistive technology support is very limited for the `speak-as` property. Do not rely on it to convey information critical to understanding the page's purpose.

[Let's Talk About Speech CSS | CSS Tricks](https://css-tricks.com/lets-talk-speech-css/)

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting the spoken form for a counter

#### HTML

```html
<ul class="list">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
</ul>
```

#### CSS

```css
@counter-style speak-as-example {
  system: fixed;
  symbols:     ;
  suffix: " ";
  speak-as: numbers;
}

.list {
  list-style: speak-as-example;
}
```

#### Result

{{ EmbedLiveSample('Setting_the_spoken_form_for_a_counter') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}, the functional notation creating anonymous counter styles.
