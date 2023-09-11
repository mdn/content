---
title: ":where()"
slug: Web/CSS/:where
page-type: css-pseudo-class
browser-compat: css.selectors.where
---

{{CSSRef}}

The **`:where()`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) function takes a selector list as its argument, and selects any element that can be selected by one of the selectors in that list.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-where.html", "tabbed-shorter")}}

The difference between `:where()` and {{CSSxRef(":is", ":is()")}} is that `:where()` always has 0 [specificity](/en-US/docs/Web/CSS/Specificity), whereas `:is()` takes on the specificity of the most specific selector in its arguments.

### Forgiving Selector Parsing

The specification defines `:is()` and `:where()` as accepting a [forgiving selector list](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list).

In CSS when using a selector list, if any of the selectors are invalid then the whole list is deemed invalid. When using `:is()` or `:where()` instead of the whole list of selectors being deemed invalid if one fails to parse, the incorrect or unsupported selector will be ignored and the others used.

```css
:where(:valid, :unsupported) {
  /* … */
}
```

Will still parse correctly and match `:valid` even in browsers which don't support `:unsupported`, whereas:

```css
:valid,
:unsupported {
  /* … */
}
```

Will be ignored in browsers which don't support `:unsupported` even if they support `:valid`.

## Examples

### Comparing :where() and :is()

This example shows how `:where()` works, and also illustrates the difference between `:where()` and `:is()`.

Take the following HTML:

```html
<article>
  <h2>:is()-styled links</h2>
  <section class="is-styling">
    <p>
      Here is my main content. This
      <a href="https://mozilla.org">contains a link</a>.
    </p>
  </section>

  <aside class="is-styling">
    <p>
      Here is my aside content. This
      <a href="https://developer.mozilla.org">also contains a link</a>.
    </p>
  </aside>

  <footer class="is-styling">
    <p>
      This is my footer, also containing
      <a href="https://github.com/mdn">a link</a>.
    </p>
  </footer>
</article>

<article>
  <h2>:where()-styled links</h2>
  <section class="where-styling">
    <p>
      Here is my main content. This
      <a href="https://mozilla.org">contains a link</a>.
    </p>
  </section>

  <aside class="where-styling">
    <p>
      Here is my aside content. This
      <a href="https://developer.mozilla.org">also contains a link</a>.
    </p>
  </aside>

  <footer class="where-styling">
    <p>
      This is my footer, also containing
      <a href="https://github.com/mdn">a link</a>.
    </p>
  </footer>
</article>
```

In this somewhat-contrived example, we have two articles that each contain a section, an aside, and a footer. They differ by the classes used to mark the child elements.

To make selecting the links inside them simpler, but still distinct, we _could_ use `:is()` or `:where()`, in the following manner:

```css
html {
  font-family: sans-serif;
  font-size: 150%;
}

:is(section.is-styling, aside.is-styling, footer.is-styling) a {
  color: red;
}

:where(section.where-styling, aside.where-styling, footer.where-styling) a {
  color: orange;
}
```

However, what if we later want to override the color of links in the footers using a simple selector?

```css
footer a {
  color: blue;
}
```

This won't work for the red links, because the selectors inside `:is()` count towards the specificity of the overall selector, and class selectors have a higher specificity than element selectors.

However, selectors inside `:where()` have specificity 0, so the orange footer link will be overridden by our simple selector.

> **Note:** You can also find this example on GitHub; see [is-where](https://mdn.github.io/css-examples/is-where/).

{{EmbedLiveSample('Examples', '100%', 600)}}

## Syntax

```css-nolint
:where(<complex-selector-list>) {
  /* ... */
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef(":is", ":is()")}}
- [Selector list](/en-US/docs/Web/CSS/Selector_list)
- [Web components](/en-US/docs/Web/API/Web_components)
