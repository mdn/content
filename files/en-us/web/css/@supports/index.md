---
title: '@supports'
slug: Web/CSS/@supports
tags:
  - At-rule
  - CSS
  - Layout
  - Reference
  - Web
  - supports
browser-compat: css.at-rules.supports
---
{{CSSRef}}

The **`@supports`** [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/At-rule) lets you specify declarations that depend on a browser's support for one or more specific CSS features. This is called a _feature query_. The rule may be placed at the top level of your code or nested inside any other [conditional group at-rule](/en-US/docs/Web/CSS/At-rule#conditional_group_rules).

```css
@supports (display: grid) {
  div {
    display: grid;
  }
}
```

```css
@supports not (display: grid) {
  div {
    float: right;
  }
}
```

In JavaScript, `@supports` can be accessed via the CSS object model interface {{DOMxRef("CSSSupportsRule")}}.

## Syntax

The `@supports` at-rule associates a block of statements with a _supports condition._ The supports condition consists of one or more name-value pairs combined by conjunctions (`and`), disjunctions (`or`), and/or negations (`not`). Precedence of operators can be defined with parentheses.

### Declaration syntax

The most basic supports condition is a simple declaration (a property name followed by a value, separated by a colon). The declaration must be surrounded by parentheses. The following example returns true if the browser's {{CSSxRef("transform-origin")}} property considers `5% 5%` valid:

```css
@supports (transform-origin: 5% 5%) {}
```

### Function syntax

The second basic supports condition is a supports function, the syntax for these is supported by all browsers, but the functions themselves are still being standardized.

#### `selector()` {{Experimental_Inline}}

Tests if the browser supports the tested selector syntax. The following example returns true if the browser supports the [child combinator](/en-US/docs/Web/CSS/Child_combinator):

```css
@supports selector(A > B) {}
```

### The not operator

The `not` operator can precede any expression to create a new expression, resulting in the negation of the original one. The following example returns true if the browser's {{CSSxRef("transform-origin")}} property **doesn't** consider `10em 10em 10em` valid:

```css
@supports not (transform-origin: 10em 10em 10em) {}
```

As with any operator, the `not` operator can be applied to a declaration of any complexity. The following examples are both valid:

```css
@supports not (not (transform-origin: 2px)) {}
@supports (display: grid) and (not (display: inline-grid)) {}
```

> **Note:** There is no need to enclose the `not` operator between two parentheses at the top level. To combine it with other operators, like `and` and `or`, the parentheses are required.

### The and operator

The `and` operator creates a new expression from the conjunction of two shorter expressions. It returns true only if **both** of the shorter expressions are also true. The following example returns true if and only if the two shorter expressions are simultaneously true:

```css
@supports (display: table-cell) and (display: list-item) {}
```

Multiple conjunctions can be juxtaposed without the need of more parentheses. The following are both equivalent:

```css
@supports (display: table-cell) and (display: list-item) and (display:contents) {}
@supports (display: table-cell) and ((display: list-item) and (display:contents)) {}
```

### The or operator

The `or` operator creates a new expression from the disjunction of two shorter expressions. It returns true if **one or both** of the shorter expressions is also true. The following example returns true if at least one of the two shorter expressions is true:

```css
@supports (transform-style: preserve) or (-moz-transform-style: preserve) {}
```

Multiple disjunctions can be juxtaposed without the need of more parentheses. The following are both equivalent:

```css
@supports (transform-style: preserve) or (-moz-transform-style: preserve) or (-webkit-transform-style: preserve) {}

@supports (transform-style: preserve-3d) or ((-moz-transform-style: preserve-3d) or (-webkit-transform-style: preserve-3d))) {}
```

> **Note:** When using both `and` and `or` operators, the parentheses must be used to define the order in which they apply. Otherwise, the condition is invalid and the whole rule is ignored.

## Formal syntax

```
@supports <supports-condition> {
  <stylesheet>
}
```

## Examples

### Testing for the support of a given CSS property

```css
@supports (animation-name: test) {
  /* CSS applied when animations are supported without a prefix */
  @keyframes {
    /* Other at-rules can be nested inside */
  }
}
```

### Testing for the support of a given CSS property or a prefixed version

```css
@supports ((perspective: 10px) or (-moz-perspective: 10px) or (-webkit-perspective: 10px) {
  /* CSS applied when 3D transforms, prefixed or not, are supported */
}
```

### Testing for the non-support of a specific CSS property

```css
@supports not ((text-align-last: justify) or (-moz-text-align-last: justify)) {
  /* CSS to provide fallback alternative for text-align-last: justify */
}
```

### Testing for the support of custom properties

```css
@supports (--foo: green) {
  body {
    color: var(--varName);
  }
}
```

### Testing for the support of a selector

The CSS Conditional Rules Level 4 specification adds the ability to test for support of a selector—for example {{cssxref(":is",":is()")}}.

```css
/* This rule won't be applied in browsers which don't support :is() */
:is(ul, ol) > li {
  /* CSS applied when the :is(…) selector is supported */
}

@supports not selector(:is(a, b)) {
  /* Fallback for when :is() is unsupported */
  ul > li,
  ol > li {
    /* The above expanded for browsers which don't support :is(…) */
  }
}

/* Note: So far, there's no browser that supports the `of` argument of :nth-child(…) */
@supports selector(:nth-child(1n of a, b)) {
  /* This rule needs to be inside the @supports block, otherwise
     it will be partially applied in browsers which don't support
     the `of` argument of :nth-child(…) */
  :is(:nth-child(1n of ul, ol) a, details > summary) {
    /* CSS applied when the :is(…) selector and
       the `of` argument of :nth-child(…) are both supported */
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using feature queries](/en-US/docs/Web/CSS/CSS_Conditional_Rules/Using_Feature_Queries)
- The CSSOM class {{DOMxRef("CSSSupportsRule")}}, and the {{DOMxRef("CSS.supports()")}} method that allows the same check to be performed via JavaScript.
