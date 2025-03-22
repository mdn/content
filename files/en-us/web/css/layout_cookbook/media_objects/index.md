---
title: "Recipe: Media objects"
slug: Web/CSS/Layout_cookbook/Media_objects
page-type: guide
---

{{CSSRef}}

The _Media Object_ is a pattern we see all over the web. It refers to a two-column box with an image on one side and descriptive text on the other, e.g. a social media post.

![Example of a media object with profile image on the left side and lorem ipsum text to the right filling up 80% of the space](media-object.png)

## Requirements

Media Object pattern needs some or all of the following characteristics:

- Stacked on Mobile, two columns on Desktop.
- The image can be on the left or right.
- The image might be small or large.
- Media Objects can be nested.
- The Media Object should clear the contents no matter which side is tallest.

## The recipe

Click "Play" in the code blocks below to edit the example in the MDN Playground:

```html live-sample___media-objects-example
<div class="media">
  <div class="img">
    <img
      src="https://mdn.github.io/shared-assets/images/examples/balloons_square.jpg"
      alt="Balloons" />
  </div>

  <div class="content">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula
      vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit
      lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque
      porta sit amet nulla vitae luctus. Praesent quis risus id dolor venenatis
      condimentum.
    </p>
  </div>
  <div class="footer">An optional footer goes here.</div>
</div>

<div class="media">
  <div class="img">
    <img
      src="https://mdn.github.io/shared-assets/images/examples/sharp-account_box-24px.svg"
      width="80px"
      alt="Account" />
  </div>
  <div class="content">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula
      vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit
      lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque
      porta sit amet nulla vitae luctus. Praesent quis risus id dolor venenatis
      condimentum.
    </p>
  </div>
  <div class="footer"></div>
</div>
```

```html hidden live-sample___media-objects-example
<div class="media media-flip">
  <div class="img">
    <img
      src="https://mdn.github.io/shared-assets/images/examples/balloons_square.jpg"
      alt="Balloons" />
  </div>

  <div class="content">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula
      vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit
      lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque
      porta sit amet nulla vitae luctus. Praesent quis risus id dolor venenatis
      condimentum.
    </p>
  </div>
  <div class="footer">An optional footer goes here.</div>
</div>

<div class="media">
  <a class="img">
    <img
      src="https://mdn.github.io/shared-assets/images/examples/balloons_square.jpg"
      alt="Balloons" />
  </a>

  <div class="content">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula
      vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit
      lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque
      porta sit amet nulla vitae luctus. Praesent quis risus id dolor venenatis
      condimentum.
    </p>
  </div>

  <div class="footer"></div>

  <div class="media">
    <a class="img">
      <img
        src="https://mdn.github.io/shared-assets/images/examples/balloons_square.jpg"
        alt="Balloons" />
    </a>

    <div class="content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula
        vitae ligula sit amet maximus.
      </p>
    </div>

    <div class="footer"></div>
  </div>
</div>
```

```css live-sample___media-objects-example
body {
  font: 1.2em sans-serif;
}

img {
  max-width: 100%;
}

p {
  margin: 0 0 1em 0;
}

@media (min-width: 500px) {
  .media {
    display: grid;
    grid-template-columns: fit-content(200px) 1fr;
    grid-template-rows: 1fr auto;
    grid-template-areas:
      "image content"
      "image footer";
    grid-gap: 20px;
    margin-bottom: 4em;
  }

  .media-flip {
    grid-template-columns: 1fr fit-content(250px);
    grid-template-areas:
      "content image"
      "footer image";
  }

  .img {
    grid-area: image;
  }

  .content {
    grid-area: content;
  }

  .footer {
    grid-area: footer;
  }
}
```

{{EmbedLiveSample("media-objects-example", "", "1500px")}}

## Choices made

I have chosen to use [grid layout](/en-US/docs/Web/CSS/CSS_grid_layout) for the media object as it allows me to control the layout in two dimensions when I need to. This means that when we have a footer, with short content above, the footer can be pushed down to the bottom of the media object.

Another reason to use grid layout is in order that I can use {{cssxref("fit-content")}} for the track sizing of the image. By using `fit-content` with a maximum size of 200 pixels, when we have a small image such as the icon, the track only gets as large as the size of that image — the `max-content` size. If the image is larger, the track stops growing at 200 pixels and as the image has a {{cssxref("max-width")}} of 100% applied, it scales down so that it continues to fit inside the column.

By using {{cssxref("grid-template-areas")}} to achieve the layout, I can see the pattern in the CSS. I define my grid once we have a max-width of 500 pixels, so on smaller devices the media object stacks.

An option for the pattern is to flip it to switch the image to the other side — this is done by adding the `media-flip` class, which defines a flipped grid template causing the layout to be mirrored.

When we nest one media object inside another we need to place it into the second track in the regular layout, and the first track when flipped.

## See also

- {{cssxref("fit-content")}} property
- [Using grid template areas](/en-US/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [CSS grid layout](/en-US/docs/Web/CSS/CSS_grid_layout) module
