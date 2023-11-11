---
title: "@scope"
slug: Web/CSS/@scope
page-type: css-at-rule
status:
  - experimental
browser-compat: css.at-rules.scope
---

{{CSSRef}}{{SeeCompatTable}}

The **`@scope`** [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/At-rule) lets you specify CSS rules and assign values to a limited subtree of the DOM without adding extra specificity to selectors. This makes it easier to override the CSS.

In JavaScript, `@scope` can be accessed via the CSS object model interface {{DOMxRef("CSSScopeRule")}}.

## Syntax

The `@scope` at-rule consists of a block of statements with a _rule list_.

```css
@scope [(<scope-start>)]? [to (<scope-end>)]? {
  <rule-list>
}
```

## Formal syntax

{{csssyntax}}

## Examples

Match links only inside a `.light-scheme` class:

```css
@scope (.light-scheme) {
  a {
    color: darkmagenta;
  }
}
```

Match links only inside a `.dark-scheme` class:

```css
@scope (.dark-scheme) {
  a {
    color: plum;
  }
}
```

Match `.author-images` only inside a `.media-object` class.

```css
@scope (.media-object) {
  .author-image {
    border-radius: 50%;
  }
}
```

Match nested descendants with scoping limits. The `img` selector will only match image tags that are in a DOM fragment starting with any `.media-object`, and including all descendants up to any intervening children of the `.content` class.

```css
@scope (.media-object) to (.content > *) {
  img {
    border-radius: 50%;
  }
  .content {
    padding: 1em;
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef(":scope")}}
- {{DOMxRef("CSSScopeRule")}}
- [Limit the reach of your selectors with the CSS @scope at-rule](https://developer.chrome.com/articles/at-scope/)
