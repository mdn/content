---
title: ':lang()'
slug: Web/CSS/:lang
tags:
  - CSS
  - Layout
  - Pseudo-class
  - Reference
  - Selector
  - Web
browser-compat: css.selectors.lang
---
{{CSSRef}}

The **`:lang()`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) matches elements based on the language they are determined to be in.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-function-lang.html", "tabbed-shorter")}}

> **Note:** In HTML, the language is determined by a combination of the {{htmlattrxref("lang")}} attribute, the {{HTMLElement("meta")}} element, and possibly by information from the protocol (such as HTTP headers). For other document types there may be other document methods for determining the language.

## Syntax

### Formal syntax

```
:lang( <language-code> )
```

### Parameter

- `<language-code>`
  - : A {{cssxref("&lt;string&gt;")}} representing the language you want to target. Acceptable values are specified in the [HTML](/en-US/docs/Web/HTML) spec.

## Examples

In this example, the `:lang()` pseudo-class is used to match the parents of quote elements ({{htmlElement("q")}}) using [child combinators](/en-US/docs/Web/CSS/Child_combinator). Note that this doesn't illustrate the only way to do this, and that the best method to use depends on the type of document. Also note that {{glossary("Unicode")}} values are used to specify some of the special quote characters.

### HTML

```html
<div lang="en"><q>This English quote has a <q>nested</q> quote inside.</q></div>
<div lang="fr"><q>This French quote has a <q>nested</q> quote inside.</q></div>
<div lang="de"><q>This German quote has a <q>nested</q> quote inside.</q></div>
```

### CSS

```css
:lang(en) > q { quotes: '\201C' '\201D' '\2018' '\2019'; }
:lang(fr) > q { quotes: '« ' ' »'; }
:lang(de) > q { quotes: '»' '«' '\2039' '\203A'; }
```

### Result

{{EmbedLiveSample('Examples', 350)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Language-related pseudo-classes: {{cssxref(":lang")}}, {{cssxref(":dir")}}
- HTML {{htmlattrxref("lang")}} attribute
- HTML {{htmlattrxref("translate")}} attribute
- {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}
