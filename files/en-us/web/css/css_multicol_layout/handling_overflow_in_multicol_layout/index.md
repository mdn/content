---
title: Handling overflow in multi-column layout
slug: Web/CSS/CSS_multicol_layout/Handling_overflow_in_multicol_layout
page-type: guide
---

{{CSSRef}}

In this guide, we look at how to deal with overflow in a multi-column (_multicol_) layout, both inside the column boxes and in situations where there is more content than will fit into the container.

## Overflow inside column boxes

An overflow situation happens when an item's size is larger than the column box. For example, the situation could happen when an image in a column is wider than the `column-width` value or the width of the column based on the number of columns declared with `column-count`.

In this situation, the content should visibly overflow into the next column, rather than be clipped by the column box.

```html live-sample___image
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>

  <img alt="balloons" src="image.jpg" />

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>

  <p>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
    kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
    purslane kale. Celery potato scallion desert raisin horseradish spinach
    carrot soko.
  </p>
</div>
```

```css live-sample___image
.container {
  column-width: 150px;
}
```

{{EmbedLiveSample("image")}}

There are two columns of text. In the left column, there is a photo that is wider than the column. The image expands into that second column, appearing behind the text of the right column. The flow of text in the right column isn't affected by the protruding photo, but the appearance is.

If you want an image to fit the column box, setting `max-width: 100%` will prevent the image from growing beyond its container, in this case, the column box.

```html live-sample___image-max-width
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>

  <img alt="balloons" src="image.jpg" />

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>

  <p>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
    kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
    purslane kale. Celery potato scallion desert raisin horseradish spinach
    carrot soko.
  </p>
</div>
```

```css live-sample___image-max-width
.container {
  column-width: 150px;
}
img {
  max-width: 100%;
}
```

{{EmbedLiveSample("image-max-width")}}

## More columns than will fit

How overflowing columns are handled depends on whether the media context is fragmented, such as print, or is continuous, such as a web page.

In fragmented media, after a fragment (for example, a page) is filled with columns, the columns will move to a new page and fill that up with columns. In continuous media, columns will overflow in the inline direction. On the web, this means that you will get a horizontal scrollbar.

The example below shows this overflow behavior. The multicol container has a set {{CSSXref("height")}} and there is more text than space to create columns; therefore, we get columns created outside of the container.

```html live-sample___overflow-inline
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>

  <p>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
    kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
    purslane kale. Celery potato scallion desert raisin horseradish spinach
    carrot soko.
  </p>
</div>
```

```css live-sample___overflow-inline
.container {
  column-width: 200px;
  height: 180px;
}
```

{{EmbedLiveSample("overflow-inline")}}

## Using vertical media queries

One issue with multicol on the web is that if the columns are taller than the viewport, the reader will need to scroll the page up and down to read, which is not a good user experience. One way to avoid this is to only apply the column properties if you know there is enough vertical space.

In the example below, we used a {{CSSXref("min-height")}} [@media query](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) to ensure there is enough vertical space before applying the column properties.

```html live-sample___min-height
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>

  <p>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
    kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
    purslane kale. Celery potato scallion desert raisin horseradish spinach
    carrot soko.
  </p>
</div>
```

```css live-sample___min-height
@media (min-height: 300px) {
  .container {
    column-width: 200px;
  }
}
```

{{EmbedLiveSample("min-height")}}

## Next steps

In the final guide in this series, we will see [how fragmentation works with multicol layouts](/en-US/docs/Web/CSS/CSS_multicol_layout/Handling_content_breaks_in_multicol_layout) to give us control over how content breaks between columns.
