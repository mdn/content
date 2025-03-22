---
title: Handling content breaks in multi-column layout
slug: Web/CSS/CSS_multicol_layout/Handling_content_breaks_in_multicol_layout
page-type: guide
---

{{CSSRef}}

Content between column boxes in a multicol layout breaks in the same way that it breaks between pages in paged media. In both contexts, you can control where and how content breaks by using properties of the [CSS fragmentation](/en-US/docs/Web/CSS/CSS_fragmentation) module. In this guide, we see how fragmentation works in a _multi-column container_ or _multicol container_ for short.

## Fragmentation basics

The CSS fragmentation module provides details on how content breaks between the fragmentation containers or _fragmentainers_. The [multi-column layout](/en-US/docs/Web/CSS/CSS_multicol_layout) module, on the other hand, defines the {{cssxref("break-after")}}, {{cssxref("break-before")}}, and {{cssxref("break-inside")}} properties that provide some control within and between columns. In multicol layout, a column box is a fragment container.

A column box can contain other markup and there are many places where a break would not be ideal. For example, we would generally prefer that the caption of an image not be separated into a new column away from the image it refers to. Also, ending a column with a heading looks strange. The multicol fragmentation properties give us ways to exercise some control over this.

There are various places we might want to control our breaks:

- Breaks inside boxes, for example inside a figure element.
- Breaks before and after boxes, which would include our heading example above.
- Breaks between lines.

## Breaks inside boxes

To control breaks inside boxes use the {{cssxref("break-inside")}} property. This property takes values of:

- `auto`
- `avoid`
- `avoid-page`
- `avoid-column`
- `avoid-region`

In the example below, we have applied break-inside to the figure element to prevent the caption from becoming separated from the image.

```html live-sample___break-inside
<div class="container">
  <figure>
    <img
      alt="Multiple hot air balloons in a clear sky, a crowd of spectators gather in the foreground."
      src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg" />
    <figcaption>Balloons</figcaption>
  </figure>
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
  </p>
</div>
```

```css live-sample___break-inside
body {
  font: 1.2em / 1.5 sans-serif;
}

img {
  max-width: 100%;
}
figure {
  margin: 0;
  break-inside: avoid;
}
figcaption {
  font-weight: bold;
  border-bottom: 2px solid #999;
}
.container {
  column-width: 200px;
}
```

{{EmbedLiveSample("break-inside", "", "230px")}}

## Breaks before and after boxes

The {{cssxref("break-before")}} and {{cssxref("break-after")}} properties are used to control breaks before and after elements. They take the following values when in a multicol context:

- auto
- avoid
- avoid-column
- column

In this next example, we are forcing a column break before an `h2` element.

```html live-sample___break-before
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon.
  </p>
  <h2>My heading</h2>
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
  <p>Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce.</p>
</div>
```

```css live-sample___break-before
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  column-width: 250px;
}

h2 {
  break-before: column;
}
```

{{EmbedLiveSample("break-before", "", "250px")}}

## Breaks between lines

The {{cssxref("orphans")}} and {{cssxref("widows")}} properties, part of the CSS fragmentation module, are also useful and worth mentioning. The `orphans` property controls the number of lines left on their own at the end of a fragment. The `widows` property controls the number left on their own at the start of a fragment.

The `orphans` and `widows` properties take an {{CSSXref("integer")}} as a value, which represents the number of lines to keep together at the end and start of a fragment, respectively. Note that these properties only work inside a block container, such as a paragraph. If the block has fewer lines in it than the number that you specify as a value, all lines will be kept together.

In the example below, we are using the `orphans` property to control the number of lines left at the bottom of a column. You can change that value to see the effect on the breaking of the content.

```html live-sample___orphans
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon.
  </p>
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
  <p>Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce.</p>
</div>
```

```css live-sample___orphans
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  column-width: 250px;
  orphans: 3;
}
```

{{EmbedLiveSample("orphans", "", "240px")}}

## When things don't work as expected

If you have small amounts of content and are trying to control breaks on several elements, your content needs to break somewhere, so you may not always get the result you intended. To some extent, your use of fragmentation is always a suggestion to the browser, to control breaks in this way if it is possible. If the content doesn't break where you intended, the result may be untidy, but the content is still available for your users.
