---
title: container-name
slug: Web/CSS/container-name
page-type: css-property
browser-compat: css.properties.container-name
---

{{CSSRef}}

The **container-name** [CSS](/en-US/docs/Web/CSS) property specifies a list of query container names used by the [@container](/en-US/docs/Web/CSS/@container) at-rule in a [container query](/en-US/docs/Web/CSS/CSS_containment/Container_queries).
A container query will apply styles to elements based on the size of the nearest ancestor with a containment context.
When a containment context is given a name, it can be specifically targeted using the {{Cssxref("@container")}} at-rule instead of the nearest ancestor with containment.

> [!NOTE]
> When using the {{cssxref("container-type")}} and `container-name` properties, the `style` and `layout` values of the {{cssxref("contain")}} property are automatically applied.

## Syntax

```css
container-name: none;

/* A single name */
container-name: myLayout;

/* Multiple names */
container-name: myPageLayout myComponentLibrary;

/* Global Values */
container-name: inherit;
container-name: initial;
container-name: revert;
container-name: revert-layer;
container-name: unset;
```

### Values

- `none`

  - : Default value. The query container has no name.

- {{cssxref("custom-ident")}}

  - : A case-sensitive string that is used to identify the container.
    The following conditions apply:

    - The name must not equal `or`, `and`, `not`, or `default`.
    - The name value must not be in quotes.
    - The dashed ident intended to denote author-defined identifiers (e.g., `--container-name`) is permitted.
    - A list of multiple names separated by a space is allowed.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### Using a container name

Given the following HTML example which is a card component with a title and some text:

```html
<div class="card">
  <div class="post-meta">
    <h2>Card title</h2>
    <p>My post details.</p>
  </div>
  <div class="post-excerpt">
    <p>
      A preview of my <a href="https://example.com">blog post</a> about cats.
    </p>
  </div>
</div>
```

To create a containment context, add the `container-type` property to an element in CSS.
The following example creates two containment contexts, one for the card meta information and one for the post excerpt:

> [!NOTE]
> A shorthand syntax for these declarations are described in the {{cssxref("container")}} page.

```css
.post-meta {
  container-type: inline-size;
}

.post-excerpt {
  container-type: inline-size;
  container-name: excerpt;
}
```

Writing a container query via the {{Cssxref("@container")}} at-rule will apply styles to the elements of the container when the query evaluates to true.
The following example has two container queries, one that will apply only to the contents of the `.post-excerpt` element and one that will apply to both the `.post-meta` and `.post-excerpt` contents:

```css
@container excerpt (min-width: 400px) {
  p {
    visibility: hidden;
  }
}

@container (min-width: 400px) {
  p {
    font-size: 2rem;
  }
}
```

For more information on writing container queries, see the [CSS Container Queries](/en-US/docs/Web/CSS/CSS_containment/Container_queries) page.

### Using multiple container names

You can also provide multiple names to a container context separated by a space:

```css
.post-meta {
  container-type: inline-size;
  container-name: meta card;
}
```

This will allow you to target the container using either name in the {{cssxref("@container")}} at-rule.
This is useful if you want to target the same container with multiple container queries where either condition could be true:

```css
@container meta (max-width: 500px) {
  p {
    visibility: hidden;
  }
}

@container card (max-height: 200px) {
  h2 {
    font-size: 1.5em;
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS container queries](/en-US/docs/Web/CSS/CSS_containment/Container_queries)
- [Using container size and style queries](/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- {{Cssxref("@container")}} at-rule
- CSS {{Cssxref("container")}} shorthand property
- CSS {{Cssxref("container-type")}} property
- CSS {{cssxref("content-visibility")}} property
