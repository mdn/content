---
title: inherit
slug: Web/CSS/Reference/Values/inherit
page-type: css-keyword
browser-compat: css.types.global_keywords.inherit
sidebar: cssref
---

The **`inherit`** [CSS](/en-US/docs/Web/CSS) keyword causes the element to take the [computed value](/en-US/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) of the property from its parent element. It can be applied to any CSS property, including the CSS shorthand property {{cssxref("all")}}.

For [inherited properties](/en-US/docs/Web/CSS/Guides/Cascade/Inheritance#inherited_properties), this reinforces the default behavior, and is only needed to override another rule.

> [!NOTE]
> Inheritance is always from the parent element in the document tree, even when the parent element is not the containing block.

## Examples

### Basic usage

In this example, we demonstrate the effect of the `inherit` keyword by comparing two paragraphs with nested elements: the inline elements in one use their browser default styles, while those in the other inherit individual property values from their parent.

#### HTML

We include two identical paragraphs with several inline elements.

```html
<p>
  This paragraph has <em>emphasized text</em>, <strong>strong text</strong>, and
  <a href="#">a link to top</a>.
</p>
<p>
  This paragraph has <em>emphasized text</em>, <strong>strong text</strong>, and
  <a href="#">a link to top</a>.
</p>
```

#### CSS

We don't style the inline elements in the first paragraph, so they use their default browser styles.
In the second paragraph, we set properties on each inline element to `inherit`, so they get the computed styles from the parent {{htmlelement("p")}} element.

```css
p:nth-of-type(2) {
  a {
    text-decoration: inherit;
    color: inherit;
  }
  em {
    font-style: inherit;
  }
  strong {
    font-weight: inherit;
  }
}
```

#### Result

{{EmbedLiveSample("Basic usage", "100%", 100)}}

### Inheriting all property values

In this example, we use the same HTML as in the previous example to demonstrate the issues that can occur when the `inherit` keyword is applied to all properties.

```html hidden
<p>
  This paragraph has <em>emphasized text</em>, <strong>strong text</strong>, and
  <a href="#">a link to top</a>.
</p>
<p>
  This paragraph has <em>emphasized text</em>, <strong>strong text</strong>, and
  <a href="#">a link to top</a>.
</p>
```

#### CSS

In the second paragraph, instead of setting individual properties to `inherit`, we set the {{cssxref("all")}} property on all inline elements to `inherit`, so they all get computed styles from their parent {{htmlelement("p")}}.

```css
p:nth-of-type(2) > * {
  all: inherit;
}
```

#### Result

{{EmbedLiveSample("Inheriting all property values", "100%", 270)}}

Notice how the inline element inherit all the properties of the parent `<p>`, including the paragraph's block-level {{cssxref("display")}} value. This is likely not the effect you would want.

### Excluding selected elements from a rule

This example demonstrates how the `inherit` keyword can be used to exclude selected elements from a color rule, allowing them to use their parent's color instead.

#### HTML

We include some semantically structured content.

```html
<header>
  <h1>This is my blog</h1>
  <h2>This is the subtitle of my blog in the HEADER</h2>
  <p>My blog is not very interesting</p>
</header>
<main>
  <h2>This first blog post in MAIN</h2>
  <p>I really have nothing to say.</p>
  <section>
    <h2>This second blog post is in a SECTION within MAIN</h2>
    <p>
      It is in a section because it is important even though it isn't the least
      bit interesting.
    </p>
  </section>
</main>
<footer>
  <h2>Contact in FOOTER</h2>
  <p>Find me on Mastodon</p>
  <section>
    <h2>Copyright in SECTION within FOOTER</h2>
    <p>1996</p>
  </section>
</footer>
```

#### CSS

We set the text color of the `<main>` element to `blue` and all `<h2>` elements to `green` in `monospace` font. The `<h2>` elements inside a `<section>` are set to `inherit` their parent's text color.

```css
main {
  color: blue;
}

h2 {
  color: green;
  font-family: monospace;
}

section h2 {
  color: inherit;
}
```

#### Result

{{EmbedLiveSample("Exclude selected elements from a rule", "100%", 470)}}

The `<h2>` elements are all `green`. However, if they are nested in a {{htmlelement("section")}} element, they inherit their color from their parent, which is `blue` within {{htmlelement("main")}}. The default text color is black otherwise.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}, and {{cssxref("unset")}} keywords
- [Inheritance](/en-US/docs/Web/CSS/Guides/Cascade/Inheritance)
