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

In this example, we demonstrated the effect of the `inherit` value by comparing nested elements that `inherit` individual property values with elements with their browser default styles.

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

In the second paragraph, we set individual properties on individual elements to `inherit` the default styles from the parent {{htmlelement("p")}} element instead of applying their default browser styles.

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

#### Results

{{EmbedLiveSample("Basic usage", "100%", 100)}}

### Inheriting all property values

In this example, we use the same HTML as in the previous example, to demonstrate the issues that can occur when the `inherit` value is applied to all properties.

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

In the second paragraph, instead of setting individual properties to `inherit`, we set {{cssxref("all")}} the nested elements to `inherit` all the default styles of their parent {{htmlelement("p")}}.

```css
p:nth-of-type(2) > * {
  all: inherit;
}
```

#### Results

{{EmbedLiveSample("Inheriting all property values", "100%", 270)}}

Note how the inline element inherited all the properties of the parent `<p>`, including the paragraphs block-level {{cssxref("display ")}} value. This is likely not the effect you would want.

### Exclude selected elements from a rule

This example demonstrates allowing elements to inherit normally inherited values, overriding colors set on their element type.

#### HTML

We include some semantically structured content.

```html
<heading>
  <h1>This is my blog</h1>
  <h2>This is the subtitle of my blog in the HEADER</h2>
  <p>My blog is not very interesting</p>
</heading>
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

We define the main section to have blue text, all second-level headers to have `green` text and be rendered in a `monospace` font, while setting second-level headers in a {{htmlelement("section")}} to inherit their parent's text color.

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

#### Results

{{EmbedLiveSample("Exclude selected elements from a rule", "100%", 470)}}

The `<h2>` elements are all set to be green, but if they are nested within a {{htmlelement("section")}} element, they inherit the color from their parent, which is `blue` within {{htmlelement("main")}}, generally black otherwise.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}, and {{cssxref("unset")}} keywords
- [Inheritance](/en-US/docs/Web/CSS/Guides/Cascade/Inheritance)
