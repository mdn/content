---
title: "@scope"
slug: Web/CSS/@scope
page-type: css-at-rule
browser-compat: css.at-rules.scope
---

{{CSSRef}}

The **`@scope`** [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/At-rule) enables you to select elements in specific DOM subtrees, targetting elements precisely without writing overly specific selectors that are hard to override, and without coupling your selectors too tightly to the DOM structure.

In JavaScript, `@scope` can be accessed via the CSS object model interface {{DOMxRef("CSSScopeRule")}}.

## Syntax

The `@scope` at-rule contains one or more rulesets (termed **scoped style rules**) and defines a scope in which to apply them to selected elements. `@scope` can be used in two ways:

1. As a standalone block inside your CSS, in which case it includes a prelude section that includes **scope root** and optional **scope limit** selectors — these define the upper and lower bounds of the scope.

   ```css
   @scope (scope root) to (scope limit) {
     rulesets
   }
   ```

2. As inline styles included inside a {{htmlelement("style")}} element in your HTML, in which case the prelude is omitted, and the enclosed ruleset is automatically scoped to the `<style>` element's enclosing parent element.

   ```html
   <parent-element>
     <style>
       @scope {
         rulesets
       }
     </style>
   </parent-element>
   ```

## Description

A complex web document tends to include several distinct components — from headers, footers, and new articles, to maps, media players, and ads. As complexity increases, it becomes more important to manage the styling for these components effectively, and effective scoping of styles is a key consideration. Let's consider the following DOM tree:

```html
body ├─ article.feature ├─ section.article-hero │ ├─ h2 │ ├─ img │ ├─
section.article-body │ ├─ h3 │ ├─ p │ ├─ img │ ├─ p │ ├─ figure │ ├─ img │ ├─
figcaption │ ├─ footer ├─ p ├─ img
```

If we wanted to select just the {{htmlelement("img")}} element inside the {{htmlelement("section")}} with a class of `article-body`, we could:

- Write a selector like `.feature > .article-body > img`. However, that has high specificity so is hard to override, and is also tighly coupled to the DOM structure. If your markup structure changes in the future, you might need to rewrite your CSS.
- Write something less specific like `.article-body img`. However, that will select all images inside the `section`.

This is where `@scope` is useful. It allows you to define a precise scope inside which your selectors are allowed to target elements. For example, we could solve the above problem using a standalone `@scope` block like the following:

```css
@scope (.article-body) to (figure) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

The `.article-body` scope root selector defines the upper bound of the DOM tree scope in which the ruleset will be applied, and the `figure` scope limit selector defines the lower bound. As a result, only {{htmlelement("img")}} elements inside a `<section>` with a class of `article-body`, but not inside {{htmlelement("figure")}} elements, will be selected.

> **Note:** This kind of scoping — with an upper and lower bound — is commonly referred to as a **donut scope**.

If you want to select all images inside a `<section>` with a class of `article-body`, you can omit the scope limit:

```css
@scope (.article-body) {
  img {
    border: 5px solid black;
    background-color: goldenrod;
  }
}
```

Or you could include your `@scope` block inline inside a `<style>` element, which in turn is inside the `<section>` with a class of `article-body`:

```html
<section class="article-body">
  <style>
    @scope {
      img {
        border: 5px solid black;
        background-color: goldenrod;
      }
    }
  </style>

  <!-- ... -->
</section>
```

> **Note** It is important to understand that, while `@scope` allows you to isolate the application of selectors to specific DOM subtrees, it does not completely isolate the applied styles to within those subtrees. The most noticeable effect of this is inheritance — properties that are inherited by children (for example {{cssxref("color")}} or {{cssxref("font-family")}}) will still be inherited, beyond any set scope limit.

### The `:scope` pseudo-class

In the context of a `@scope` block, the {{cssxref(":scope")}} pseudo-class represents the scope root — it provides an easy way to apply styles to the scope root itself, from inside the scope:

```css
@scope (.feature) {
  :scope {
    background: rebeccapurple;
    color: antiquewhite;
    font-family: sans-serif;
  }
}
```

`:scope` is implicitly prepended to all scoped style rules. If you wish to, you can write it explicitly, or you could prepend the [nesting](/en-US/docs/Web/CSS/CSS_nesting) selector (`&`) to get the same effect. As such, the three lines in the following block are all equivalent:

```css
@scope (.feature) {
  img { ... }

  :scope img { ... }

  & img { ... }
}
```

### Notes on scoped selector usage

- A scoping limit can use `:scope` to specify a specific relationship requirement between the scope limit and root. For example:

  ```css
  /* figure is only a limit when it is a direct child of the :scope */
  @scope (.article-body) to (:scope > figure) { ... }
  ```

- A scope limit can reference elements outside the scope root using `:scope`. For example:

  ```css
  /* figure is only a limit when the :scope is inside .feature */
  @scope (.article-body) to (.feature :scope figure) { ... }
  ```

- Scoped style rules can't escape the subtree. Selections like `:scope + p` are invalid because that selection would be outside the subtree.

- It is perfectly valid to define the scope root and limit as a selector list, in which case multiple scopes will be defined. In the following example the styles are applied to any `<img>` inside a `<section>` with a class of `article-hero` or `article-body`, but not if it is nested inside a `<figure>`:

  ```css
  @scope (.article-hero, .article-body) to (figure) {
    img {
      border: 5px solid black;
      background-color: goldenrod;
    }
  }
  ```

### Specificity in scope

Including a ruleset inside a `@scope` block does not affect the specificity of its selector, regardless of the selectors used inside the scope root and limit.

The `:scope` pseudo-class has a specificity of 0-1-0; you'll need to factor this in when calculating the specificity of selectors inside `@scope` blocks. For example:

```css
@scope (.article-body) {
  /* here, img has a specificity of 0-1-1, as it has :scope implicitly prepended to it */
  img { ... }
}
```

When using the `&` selector inside a `@scope` block, `&` represents the scope root selector; it is internally rewritten to that selector wrapped inside an {{cssxref(":is()")}} selector. So for example:

```css
@scope (figure, .article-hero) {
  & img { ... }
}
```

Is equivalent to

```css
@scope (figure, .article-hero) {
  :is(figure, .article-hero) img { ... }
}
```

Since `:is()` takes the specificity of its most specific argument (`.article-hero`, in this case), The specificity of the scoped `& img` selector is therefore 0-0-2.

### The difference between `:scope` and `&` inside `@scope`

`:scope` represents the matched scoping root, whereas `&` represents the selector used to match the scoping root.

Because of this, it is possible to chain `&` multiple times, whereas you can only use `:scope` once; as you can't match a scoping root inside a scoping root.

```css
@scope (.feature) {
  /* Selects a `.feature` inside the matched root .feature */
  & & { ... }

  /* Doesn't work */
  :root :root { ... }
}
```

### How @scope conflicts are resolved

`@scope` adds a new criterion to the [CSS cascade](/en-US/docs/Web/CSS/CSS_cascade): **scoping proximity**. This states that when two scopes have conflicting styles, the style that has the least number of hops up the DOM tree hierarchy to the scope root wins. Let's look at an example to see what this means.

Take the following HTML snippet, where we are nesting different-themed cards inside one another:

```html
<div class="light">
  <p>Light theme text</p>
  <div class="dark">
    <p>Dark theme text</p>
    <div class="light">
      <p>Light theme text</p>
    </div>
  </div>
</div>
```

If we wrote the theme CSS like so, we'd run into trouble:

```css
.light {
  background: #ccc;
}

.dark {
  background: #333;
}

.light p {
  color: black;
}

.dark p {
  color: white;
}
```

The innermost paragraph is supposed to be colored black because it is in a light theme card. However, it is being targetted by both `.light p` and `.dark p` and, since the `.dark p` rule appears later in the source order, it wins and the paragraph ends up being wrongly colored white.

To fix this, we can use `@scope` as follows:

```css
@scope (.light) {
  :scope {
    background: #ccc;
  }
  p {
    color: black;
  }
}

@scope (.dark) {
  :scope {
    background: #333;
  }
  p {
    color: white;
  }
}
```

Now the innermost paragraph is correctly colored black. This is because it is only one DOM tree hierarchy level away from the `.light` scope root, but two levels away from the `.dark` scope root. Therefore, the light style wins.

> **Note:** Scoping proximity overrules source order but is itself overridden by other, higher-priority criteria such as [importance](/en-US/docs/Web/CSS/important), [layers](/en-US/docs/Learn/CSS/Building_blocks/Cascade_layers), and [specificity](/en-US/docs/Web/CSS/Specificity).

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
- [Limit the reach of your selectors with the CSS `@scope`` at-rule](https://developer.chrome.com/articles/at-scope/) on developer.chrome.com (2023)
