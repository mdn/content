---
title: rule-list
slug: Web/CSS/Reference/Values/rule-list
page-type: css-keyword
spec-urls: https://drafts.csswg.org/css-syntax-3/#typedef-rule-list
sidebar: cssref
---

The **`<rule-list>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/Reference/Values/Data_types) represents a sequence of **zero or more CSS rules**. It is used to define places in CSS where multiple rules may appear, such as the top level of a stylesheet or inside grouping at-rules like `@media` or `@supports`.

A `<rule-list>` is not written directly. Instead, it describes how the CSS parser collects and interprets rules inside a block or stylesheet.

## Syntax

A `<rule-list>` is defined as a sequence of **zero or more**:

- **Style rules** (e.g., `p { color: red; }`).
- **Qualified at-rules** (e.g., `@media (width < 600px) { ... }`).
- **Ignored statements** (e.g., parse errors handled by the parser, which the parser automatically skips).

All whitespace, comments, and invalid or malformed constructs are handled according to the CSS parser rules.

## Description

The `<rule-list>` type appears in the specification anywhere CSS is defined to contain a "list of rules."

Examples include:

- The **top level** of a stylesheet.
- The body of **grouping at-rules** like `@media`, `@custom-media`, `@supports`, `@layer`, `@container`.
- The contents of **nesting selectors** (CSS Nesting).

Although authors cannot explicitly write `<rule-list>`, understanding it is crucial when interpreting how CSS parses nested structures, how invalid rules are dropped, and how the cascade forms within conditional blocks.

## Examples

### A `<rule-list>` in a stylesheet

The following stylesheet is treated as a `<rule-list>` containing two style rules and an at-rule.

```css
p {
  margin: 0;
}

h1 {
  font-size: 2rem;
}

@media (width < 600px) {
  body {
    background: lightgray;
  }
}
```

### A `<rule-list>` inside `@media` at-rule

The block contained inside an `@media` at-rule is a `<rule-list>` containing one or more style rules. The following example contains two style rules.

```css
@media (prefers-color-scheme: dark) {
  main {
    background: black;
    color: white;
  }

  a {
    color: skyblue;
  }
}
```

### Invalid rules inside a `<rule-list>`

The invalid token sequence (`!invalid-rule`) is ignored by the parser. The rest of the rules form a valid `<rule-list>`.

```plain
body {
  color: black;
}

!invalid-rule

@supports (display: grid) {
  section {
    display: grid;
  }
}
```

## Specifications

{{Specifications}}

## See also

- CSS {{cssxref("@supports")}} at-rule
- CSS {{cssxref("@media")}} at-rule
- CSS {{cssxref("@custom-media")}} at-rule
