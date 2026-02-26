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

````html interactive-example
<section id="default-example">
  <div id="example-element">
    <p>
      From there to here<br/>
      from here to there,<br/>
      Funny things<br/>
      Are everywhere.
    </p>
    <p>--Dr. Seuss</p>
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

We include an unordered list ({{htmlelement("ul")}}) with some list items (({{htmlelement("li")}}).

```html
<ul>
  <li>One fish</li>
  <li>Two fish</li>
  <li>Red fish</li>
  <li>Blue fish</li>
  <li>Black fish</li>
  <li>Blue fish</li>
  <li>Old fish</li>
  <li>New fish.</li>
  <li>This one has a little star.</li>
  <li>This one has a little car.</li>
  <li>Say! What a lot</li>
  <li>Of fish there are.</li>
</ul>
```

#### CSS

We define a {{cssxref("background-image")}} and set the `background-attachment` to `fixed`. We also include a {{cssxref("height")}}, {{cssxref("width")}}, and {{cssxref("overflow")}} to ensure the element scrolls.

```css
ul {
  background-image: url("star-solid.gif");
  background-attachment: fixed;

  width: 300px;
  height: 70px;
  overflow: scroll;
}
```

#### Result

{{EmbedLiveSample("Basic_example")}}

Note how the background remains fixed relative to the list's viewport when you scroll the overflowing text into view.

### Multiple background images

This property supports multiple background images. You can specify a different `<attachment>` for each background, separated by commas. Each image is matched with the corresponding `<attachment>` type, from first specified to last.

#### HTML

We include all of Dr. Suess's poem.

```html
<div>
<ul>
  <li>One fish</li>
  <li>Two fish</li>
  <li>Red fish</li>
  <li>Blue fish</li>
  <li>Black fish</li>
  <li>Blue fish</li>
  <li>Old fish</li>
  <li>New fish.</li>
  <li>This one has a little star.</li>
  <li>This one has a little car.</li>
  <li>Say! What a lot</li>
  <li>Of fish there are.</li>
  <li>Yes. Some are red. And some are blue.</li>
  <li>Some are old. And some are new.</li>
  <li>Some are sad.</li>
  <li>And some are glad.</li>
  <li>And some are very, very bad.</li>
  <li>Why are they</li>
  <li>Sad and glad and bad?</li>
  <li>I do not know.</li>
  <li>Go ask your dad.</li>
  <li>Some are thin.</li>
  <li>And some are fat.</li>
  <li>The fat one has</li>
  <li>A yellow hat.</li>
  <li>From there to here, from here to there,</li>
  <li>Funny things</li>
  <li>Are everywhere.</li>
</ul>
<p>--Dr. Seuss</p>
</div>
```

#### CSS

We include a {{cssxref("height")}}, {{cssxref("width")}}, and {{cssxref("overflow")}} on the parent {{htmlelement("div")}} to ensure the contents scroll.

We define two comma-separated background images on the list, and set the `background-attachment` to `fixed, scroll`, meaning the first background image will be `fixed` and the second will `scroll`. We set the {{cssxref("background-repeat")}} to make both background images repeat vertically, separating them with the {{cssxref("background-position")}} property.

```css
div {
  width: 300px;
  height: 200px;
  overflow: scroll;
}
ol {
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

Note how the first background image is fixed to the viewport while the the second background image is fixed relative to the list.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using multiple backgrounds](/en-US/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- [CSS backgrounds and borders](/en-US/docs/Web/CSS/Guides/Backgrounds_and_borders) module
