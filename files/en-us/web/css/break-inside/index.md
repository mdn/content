---
title: break-inside
slug: Web/CSS/break-inside
page-type: css-property
browser-compat: css.properties.break-inside
---

{{CSSRef}}

The **`break-inside`** [CSS](/en-US/docs/Web/CSS) property sets how page, column, or region breaks should behave inside a generated box. If there is no generated box, the property is ignored.

{{EmbedInteractiveExample("pages/css/break-inside.html")}}

## Syntax

```css
/* Keyword values */
break-inside: auto;
break-inside: avoid;
break-inside: avoid-page;
break-inside: avoid-column;
break-inside: avoid-region;

/* Global values */
break-inside: inherit;
break-inside: initial;
break-inside: revert;
break-inside: revert-layer;
break-inside: unset;
```

Each possible break point (in other words, each element boundary) is affected by three properties: the {{cssxref("break-after")}} value of the previous element, the {{cssxref("break-before")}} value of the next element, and the `break-inside` value of the containing element.

To determine if a break must be done, the following rules are applied:

1. If any of the three concerned values is a _forced break value_ (`always`, `left`, `right`, `page`, `column`, or `region`), it has precedence. If more than one of them are such a break, the value of the element that appears the latest in the flow is used. Thus, the `break-before` value has precedence over the `break-after` value, which in turn has precedence over the `break-inside` value.
2. If any of the three concerned values is an _avoid break value_ (`avoid`, `avoid-page`, `avoid-region`, or `avoid-column`), no such break will be applied at that point.

Once forced breaks have been applied, soft breaks may be added if needed, but not on element boundaries that resolve in a corresponding `avoid` value.

### Values

- `auto`
  - : Allows, but does not force, any break (page, column, or region) to be inserted within the principal box.
- `avoid`
  - : Avoids any break (page, column, or region) from being inserted within the principal box.
- `avoid-page`
  - : Avoids any page break within the principal box.
- `avoid-column`
  - : Avoids any column break within the principal box.
- `avoid-region`
  - : Avoids any region break within the principal box.

## Page break aliases

For compatibility reasons, the legacy {{cssxref("page-break-inside")}} property should be treated by browsers as an alias of `break-inside`. This ensures that sites using `page-break-inside` continue to work as designed. A subset of values should be aliased as follows:

| page-break-inside | break-inside |
| ----------------- | ------------ |
| `auto`            | `auto`       |
| `avoid`           | `avoid`      |

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Avoiding breaking inside a figure

In the following example we have a container that contains an `<h1>` spanning all columns (achieved using `column-span: all`) and a series of paragraphs laid out in multiple columns using `column-width: 200px`. We also have a `<figure>` containing an image and a caption.

By default, it is possible for you to get a break between the image and its caption, which is not what we want. To avoid this, we have set `break-inside: avoid` on the `<figure>`, which causes them to always stay together.

#### HTML

```html
<article>
  <h1>Main heading</h1>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
    fringilla mauris. Quisque commodo eget nisi sed pretium. Mauris luctus nec
    lacus in ultricies. Mauris vitae hendrerit arcu, ac scelerisque lacus.
    Aliquam lobortis in lacus sit amet posuere. Fusce iaculis urna id neque
    dapibus, eu lacinia lectus dictum.
  </p>

  <figure>
    <img
      src="https://mdn.dev/archives/media/attachments/2020/07/29/17350/3b4892b7e820122ac6dd7678891d4507/firefox.png" />
    <figcaption>The Firefox logo — fox wrapped around the world</figcaption>
  </figure>

  <p>
    Praesent condimentum dui dui, sit amet rutrum diam tincidunt eu. Cras
    suscipit porta leo sit amet rutrum. Sed vehicula ornare tincidunt. Curabitur
    a ipsum ac diam mattis volutpat ac ut elit. Nullam luctus justo non
    vestibulum gravida. Morbi metus libero, pharetra non porttitor a, molestie
    nec nisi.
  </p>

  <p>
    In finibus viverra enim vel suscipit. Quisque consequat velit eu orci
    malesuada, ut interdum tortor molestie. Proin sed pellentesque augue. Nam
    risus justo, faucibus non porta a, congue vel massa. Cras luctus lacus nisl,
    sed tincidunt velit pharetra ac. Duis suscipit faucibus dui sed ultricies.
  </p>
</article>
```

#### CSS

```css
html {
  font-family: helvetica, arial, sans-serif;
}

body {
  width: 80%;
  margin: 0 auto;
}

h1 {
  font-size: 3rem;
  letter-spacing: 2px;
  column-span: all;
}

h1 + p {
  margin-top: 0;
}

p {
  line-height: 1.5;
  break-after: column;
}

figure {
  break-inside: avoid;
}

img {
  max-width: 70%;
  display: block;
  margin: 0 auto;
}

figcaption {
  font-style: italic;
  font-size: 0.8rem;
  width: 70%;
}

article {
  column-width: 200px;
  gap: 20px;
}
```

### Result

{{EmbedLiveSample('Avoiding_breaking_inside_a_figure', '100%', 600)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Learn: Multiple-column Layout](/en-US/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- [Breaking Boxes With CSS Fragmentation](https://www.smashingmagazine.com/2019/02/css-fragmentation/)
