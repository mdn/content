---
title: background-attachment
slug: Web/CSS/Reference/Properties/background-attachment
page-type: css-property
browser-compat: css.properties.background-attachment
sidebar: cssref
---

The **`background-attachment`** [CSS](/en-US/docs/Web/CSS) property sets whether a background image's position is fixed within the {{glossary("viewport")}}, or scrolls with its containing block.

{{InteractiveExample("CSS Demo: background-attachment")}}

```css interactive-example-choice
background-attachment: scroll;
```

```css interactive-example-choice
background-attachment: fixed;
```

```css interactive-example-choice
background-attachment: local;
```

```css interactive-example-choice
background-attachment: fixed, scroll;
```

```css interactive-example-choice
background-attachment: scroll, fixed;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
    <h1>A Lament for Confederation</h1>
    <p>&mdash;Chief Dan George, 1967</p>
    <p>
      How long have I known you, Oh Canada? A hundred years? Yes, a hundred
      years. And many, many tides more. And today, when you celebrate your
      hundred years, Oh Canada, I am sad for all the Indian people throughout
      the land.
    </p>
    <p>
      For I have known you when your forests were mine; when they gave me my
      meat and my clothing. I have known you in your fruits and rivers where
      your fish flashed and danced in the sun, where the waters said ‘come and
      eat of my abundance.’ I have known you in the freedom of your winds. And
      my spirit, like your winds, once roamed this good lands.
    </p>
  </div>
</section>
```

```css interactive-example
body {
  overflow: scroll;
}

#default-example {
  height: 600px;
}

#example-element {
  max-width: 20rem;
  height: 100%;
  background:
    url("/shared-assets/images/examples/lizard.png") right 3rem top 1rem / 15rem
      no-repeat,
    url("/shared-assets/images/examples/moon.jpg") center / 10rem;
  font-size: 1.2rem;
  font-weight: bolder;
  overflow: auto;
  padding: 20px;
  color: red;
  text-shadow:
    0 0 0.5rem black,
    0 0 0.5rem black;
}
```

## Syntax

```css
/* Keyword values */
background-attachment: scroll;
background-attachment: fixed;
background-attachment: local;

/* Global values */
background-attachment: inherit;
background-attachment: initial;
background-attachment: revert;
background-attachment: revert-layer;
background-attachment: unset;
```

The `background-attachment` property is specified as one of the keyword values from the list below.

### Values

- `fixed`
  - : The background is fixed relative to the viewport. Even if an element has a scrolling mechanism, the background doesn't move with the element.
- `local`
  - : The background is fixed relative to the element's contents. If the element has a scrolling mechanism, the background scrolls with the element's contents, and the background painting area and background positioning area are relative to the scrollable area of the element rather than to the border framing them.
- `scroll`
  - : The background is fixed relative to the element itself and does not scroll with its contents. (It is effectively attached to the element's border.)

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic example

#### HTML

We include a paragraph with some text.

```html
<p>
  When I fought to protect my home and my land, I was called a savage. When I
  neither understood nor welcomed this new way of life, I was called lazy. When
  I tried to rule my people, I was stripped of my authority.
</p>
```

#### CSS

We define a {{cssxref("background-image")}} and set the `background-attachment` to `fixed`. We also include a {{cssxref("height")}}, {{cssxref("width")}}, and {{cssxref("overflow")}} to ensure the element scrolls.

```css
p {
  background-image: url("star-solid.gif");
  background-attachment: fixed;

  width: 300px;
  height: 70px;
  overflow: scroll;
}
```

#### Result

{{EmbedLiveSample("Basic_example")}}

Note how the background remains fixed relative to the paragraphs viewport when you scroll the overflowing text into view.

### Multiple background images

This property supports multiple background images. You can specify a different `<attachment>` for each background, separated by commas. Each image is matched with the corresponding `<attachment>` type, from first specified to last.

#### HTML

We include two more paragraph from Chief Dan George's 1967 speech.

```html
<div>
  <p>
    My nation was ignored in your history textbooks – we were less important in
    the history of Canada than the buffalo that ranged the plains. I was
    ridiculed in your plays and motion pictures, and when I drank your
    fire-water, I got drunk – very, very drunk. And I forgot.
  </p>
  <p>
    Oh Canada, how can I celebrate with you this centenary, this hundred years?
    Shall I thank you for the reserves that are left me of my beautiful forests?
    Shall I thank you for the canned fish of my rivers? Shall I thank you for
    the loss of my pride and authority, even among my own people? For the lack
    of my will to fight back? No! I must forget what is past and gone.
  </p>
</div>
```

#### CSS

We include a {{cssxref("height")}}, {{cssxref("width")}}, and {{cssxref("overflow")}} on the parent {{htmlelement("div")}} to ensure the contents scroll.

We define two comma-separated background images on the paragraphs, and set the `background-attachment` to `fixed, scroll`, meaning the first background image will be `fixed` and the second will `scroll`. We set the {{cssxref("background-repeat")}} to make both background images repeat vertically, separating them with the {{cssxref("background-position")}} property.

```css
div {
  width: 300px;
  height: 200px;
  overflow: scroll;
}
p {
  background-image: url("star-solid.gif"), url("star-transparent.gif");
  background-attachment: fixed, scroll;
  background-repeat: repeat-y;
  background-position:
    0 0,
    100px 0;
}
```

#### Result

{{EmbedLiveSample("Multiple_background_images")}}

Note how the first background image is fixed to the viewport while the the second background image is fixed relative to the paragraph.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using multiple backgrounds](/en-US/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- [CSS backgrounds and borders](/en-US/docs/Web/CSS/Guides/Backgrounds_and_borders) module
