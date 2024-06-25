---
title: ":not()"
slug: Web/CSS/:not
page-type: css-pseudo-class
browser-compat: css.selectors.not
---

{{CSSRef}}

The **`:not()`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents elements that do not match a list of selectors. Since it prevents specific items from being selected, it is known as the _negation pseudo-class_.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-not.html", "tabbed-shorter")}}

The `:not()` pseudo-class has a number of [quirks, tricks, and unexpected results](#description) that you should be aware of before using it.

## Syntax

The `:not()` pseudo-class requires a [selector list](/en-US/docs/Web/CSS/CSS_selectors/Selector_structure#selector_list), a comma-separated list of one or more selectors, as its argument. The list must not contain another negation selector or a [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements), but any other simple, compound, and complex selectors are allowed.

```css-nolint
:not(<complex-selector-list>) {
  /* ... */
}
```

## Description

There are several unusual effects and outcomes when using `:not()` that you should keep in mind when using it:

- Useless selectors can be written using this pseudo-class. For example, `:not(*)` matches any element which is not an element, which is obviously nonsense, so the accompanying rule will never be applied.
- This pseudo-class can increase the [specificity](/en-US/docs/Web/CSS/Specificity) of a rule. For example, `#foo:not(#bar)` will match the same element as the simpler `#foo`, but has the higher specificity of two `id` selectors.
- The specificity of the `:not()` pseudo-class is replaced by the specificity of the most specific selector in its comma-separated argument of selectors; providing the same specificity as if it had been written [`:not(:is(argument))`](/en-US/docs/Web/CSS/:is).
- `:not(.foo)` will match anything that isn't `.foo`, _including {{HTMLElement("html")}} and {{HTMLElement("body")}}._
- This selector will match everything that is "not an X". This may be surprising when used with [descendant combinators](/en-US/docs/Web/CSS/Descendant_combinator), since there are multiple paths to select a target element. For instance, `body :not(table) a` will still apply to links inside a {{HTMLElement("table")}}, since {{HTMLElement("tr")}}, {{HTMLElement("tbody")}}, {{HTMLElement("th")}}, {{HTMLElement("td")}}, {{HTMLElement("caption")}}, etc. can all match the `:not(table)` part of the selector. To avoid this, you can use `body a:not(table a)` instead, which will only apply to links that are not descendants of a table.
- You can negate several selectors at the same time. Example: `:not(.foo, .bar)` is equivalent to `:not(.foo):not(.bar)`.
- If any selector passed to the `:not()` pseudo-class is invalid or not supported by the browser, the whole rule will be invalidated. The effective way to overcome this behavior is to use [`:is()`](/en-US/docs/Web/CSS/:is) pseudo-class, which accepts a forgiving selector list. For example `:not(.foo, :invalid-pseudo-class)` will invalidate a whole rule, but `:not(:is(.foo, :invalid-pseudo-class))` will match any (_including {{HTMLElement("html")}} and {{HTMLElement("body")}}_) element that isn't `.foo`.

## Examples

### Using :not() with valid selectors

This example shows some simple cases of using `:not()`.

#### HTML

```html
<p>I am a paragraph.</p>
<p class="fancy">I am so very fancy!</p>
<div>I am NOT a paragraph.</div>
<h2>
  <span class="foo">foo inside h2</span>
  <span class="bar">bar inside h2</span>
</h2>
```

#### CSS

```css
.fancy {
  text-shadow: 2px 2px 3px gold;
}

/* <p> elements that don't have a class `.fancy` */
p:not(.fancy) {
  color: green;
}

/* Elements that are not <p> elements */
body :not(p) {
  text-decoration: underline;
}

/* Elements that are not <div>s or `.fancy` */
body :not(div):not(.fancy) {
  font-weight: bold;
}

/* Elements that are not <div>s or `.fancy` */
body :not(div, .fancy) {
  text-decoration: overline underline;
}

/* Elements inside an <h2> that aren't a <span> with a class of `.foo` */
h2 :not(span.foo) {
  color: red;
}
```

#### Result

{{EmbedLiveSample('Using_not_with_valid_selectors', '100%', 320)}}

### Using :not() with invalid selectors

This example shows the use of `:not()` with invalid selectors and how to prevent invalidation.

#### HTML

```html
<p class="foo">I am a paragraph with .foo</p>
<p class="bar">I am a paragraph with .bar</p>
<div>I am a div without a class</div>
<div class="foo">I am a div with .foo</div>
<div class="bar">I am a div with .bar</div>
<div class="foo bar">I am a div with .foo and .bar</div>
```

#### CSS

```css
/* Invalid rule, does nothing */
p:not(.foo, :invalid-pseudo-class) {
  color: red;
  font-style: italic;
}

/* Select all <p> elements without the `foo` class */
p:not(:is(.foo, :invalid-pseudo-class)) {
  color: green;
  border-top: dotted thin currentcolor;
}

/* Select all <div> elements without the `foo` or the `bar` class */
div:not(.foo, .bar) {
  color: red;
  font-style: italic;
}

/* Select all <div> elements without the `foo` or the `bar` class */
div:not(:is(.foo, .bar)) {
  border-bottom: dotted thin currentcolor;
}
```

#### Result

{{EmbedLiveSample('Using_not_with_invalid_selectors', '100%', 320)}}

The `p:not(.foo, :invalid-pseudo-class)` rule is invalid because it contains an invalid selector. The `:is()` pseudo-class accepts a forgiving selector list, so the `:is(.foo, :invalid-pseudo-class)` rule is valid and equivalent to `:is(.foo)`. Thus, the `p:not(:is(.foo, :invalid-pseudo-class))` rule is valid and equivalent to `p:not(.foo)`.

If `:invalid-pseudo-class` was a valid selector, the first two rules above would still be equivalent (the last two rules showcase that). The use of `:is()` makes the rule more robust.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes)
- [Pseudo-classes and pseudo-elements](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
- Other functional CSS pseudo-classes:

  - {{cssxref(":has", ":has()")}}
  - {{cssxref(":is", ":is()")}}
  - {{cssxref(":where", ":where()")}}

- [How :not() chains multiple selectors](/en-US/blog/css-not-pseudo-multiple-selectors/) on MDN blog (2023)
