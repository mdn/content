---
title: Create fancy boxes
slug: Learn/CSS/Howto/Create_fancy_boxes
page-type: learn-faq
---

{{LearnSidebar}}

CSS boxes are the building blocks of any web page styled with CSS. Making them nice looking is both fun and challenging. It's fun because it's all about turning a design idea into working code; it's challenging because of the constraints of CSS. Let's do some fancy boxes.

Before we start getting into the practical side of it, make sure you are familiar with [the CSS box model](/en-US/docs/Learn/CSS/Building_blocks/The_box_model). It's also a good idea, but not a prerequisite, to be familiar with some [CSS layout basics](/en-US/docs/Learn/CSS/CSS_layout/Introduction).

On the technical side, Creating fancy boxes are all about mastering CSS border and background properties and how to apply them to a given box. But beyond the technics it's also all about unleashing your creativity. It will not be done in one day, and some web developers spend their whole life having fun with it.

We are about to see many examples, but we will always work on the most simple piece of HTML possible, a simple element:

```html
<div class="fancy">Hi! I want to be fancy.</div>
```

Ok, that's a very small bit of HTML, what can we tweak on that element? All the following:

- Its box model properties: {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("border")}}, etc.
- Its background properties: {{cssxref("background")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-position")}}, {{cssxref("background-size")}}, etc.
- Its pseudo-element: {{cssxref("::before")}} and {{cssxref("::after")}}
- and some aside properties like: {{cssxref("box-shadow")}}, {{cssxref("rotate")}}, {{cssxref("outline")}}, etc.

So we have a very large playground. Let the fun begin.

## Box model tweak

The box model alone allows us to do some basic stuff, like adding simple borders, making squares, etc. It starts to get interesting when you push the properties to the limit by having negative `padding` and/or- `margin` by having `border-radius` larger than the actual size of the box.

### Making circles

```html hidden
<div class="fancy">Hi! I want to be fancy.</div>
```

This is something that is both very simple and very fun. The {{cssxref("border-radius")}} property is made to create a rounded corner applied to boxes, but what happens if the radius size is equal or larger than the actual width of the box?

```css
.fancy {
  /* Within a circle, centered text looks prettier. */
  text-align: center;

  /* Let's avoid our text touching the border. As
     our text will still flow in a square, it looks
     nicer that way, giving the feeling that it's a "real"
     circle. */
  padding: 1em;

  /* The border will make the circle visible.
     You could also use a background, as
     backgrounds are clipped by border radius */
  border: 0.5em solid black;

  /* Let's make sure we have a square.
     If it's not a square, we'll get an
     ellipsis rather than a circle */
  width: 4em;
  height: 4em;

  /* and let's turn the square into a circle */
  border-radius: 100%;
}
```

Yes, we get a circle:

{{ EmbedLiveSample('Making_circles', '100%', '120') }}

## Backgrounds

When we talk about a fancy box, the core properties to handle that are [background-\* properties](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders). When you start fiddling with backgrounds it's like your CSS box is turned into a blank canvas you'll fill.

Before we jump to some practical examples, let's step back a bit as there are two things you should know about backgrounds.

- It's possible to set [several backgrounds](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds) on a single box. They are stacked on top of each other like layers.
- Backgrounds can be either solid colors or images: solid color always fills the whole surface but images can be scaled and positioned.

```html hidden
<div class="fancy">Hi! I want to be fancy.</div>
```

Okay, let's have fun with backgrounds:

```css-nolint
.fancy {
  padding: 1em;
  width: 100%;
  height: 200px;
  box-sizing: border-box;

  /* At the bottom of our background stack,
     let's have a misty grey solid color */
  background-color: #e4e4d9;

  /* We stack linear gradients on top of each
     other to create our color strip effect.
     As you will notice, color gradients are
     considered to be images and can be
     manipulated as such */
  background-image: linear-gradient(175deg, rgba(0,0,0,0) 95%, #8da389 95%),
                    linear-gradient( 85deg, rgba(0,0,0,0) 95%, #8da389 95%),
                    linear-gradient(175deg, rgba(0,0,0,0) 90%, #b4b07f 90%),
                    linear-gradient( 85deg, rgba(0,0,0,0) 92%, #b4b07f 92%),
                    linear-gradient(175deg, rgba(0,0,0,0) 85%, #c5a68e 85%),
                    linear-gradient( 85deg, rgba(0,0,0,0) 89%, #c5a68e 89%),
                    linear-gradient(175deg, rgba(0,0,0,0) 80%, #ba9499 80%),
                    linear-gradient( 85deg, rgba(0,0,0,0) 86%, #ba9499 86%),
                    linear-gradient(175deg, rgba(0,0,0,0) 75%, #9f8fa4 75%),
                    linear-gradient( 85deg, rgba(0,0,0,0) 83%, #9f8fa4 83%),
                    linear-gradient(175deg, rgba(0,0,0,0) 70%, #74a6ae 70%),
                    linear-gradient( 85deg, rgba(0,0,0,0) 80%, #74a6ae 80%);
}
```

{{ EmbedLiveSample('Backgrounds', '100%', '200') }}

> **Note:** Gradients can be used in some very creative ways. If you want to see some creative examples, take a look at [Lea Verou's CSS patterns](https://projects.verou.me/css3patterns/). If you want to learn more about gradients, feel free to get into [our dedicated article](/en-US/docs/Web/CSS/CSS_images/Using_CSS_gradients).

## Pseudo-elements

When styling a single box, you could find yourself limited and could wish to have more boxes to create even more amazing styles. Most of the time, that leads to polluting the DOM by adding extra HTML element for the unique purpose of style. Even if it is necessary, it's somewhat considered bad practice. One solution to avoid such pitfalls is to use [CSS pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements).

### A cloud

```html hidden
<div class="fancy">Hi! I want to be fancy.</div>
```

Let's have an example by turning our box into a cloud:

```css
.fancy {
  text-align: center;

  /* Same trick as previously used to make circles */
  box-sizing: border-box;
  width: 150px;
  height: 150px;
  padding: 80px 1em 0 1em;

  /* We make room for the "ears" of our cloud */
  margin: 0 100px;

  position: relative;

  background-color: #a4c9cf;

  /* Well, actually we are not making a full circle
     as we want the bottom of our cloud to be flat.
     Feel free to tweak this example to make a cloud
     that isn't flat at the bottom ;) */
  border-radius: 100% 100% 0 0;
}

/* Those are common style that apply to both our ::before
   and ::after pseudo elements. */
.fancy::before,
.fancy::after {
  /* This is required to be allowed to display the
     pseudo-elements, event if the value is an empty
     string */
  content: "";

  /* We position our pseudo-elements on the left and
     right sides of the box, but always at the bottom */
  position: absolute;
  bottom: 0;

  /* This makes sure our pseudo-elements will be below
     the box content whatever happens. */
  z-index: -1;

  background-color: #a4c9cf;
  border-radius: 100%;
}

.fancy::before {
  /* This is the size of the clouds left ear */
  width: 125px;
  height: 125px;

  /* We slightly move it to the left */
  left: -80px;

  /* To make sure that the bottom of the cloud
     remains flat, we must make the bottom right
     corner of the left ear square. */
  border-bottom-right-radius: 0;
}

.fancy::after {
  /* This is the size of the clouds left ear */
  width: 100px;
  height: 100px;

  /* We slightly move it to the right */
  right: -60px;

  /* To make sure that the bottom of the cloud
     remains flat, we must make the bottom left
     corner of the right ear square. */
  border-bottom-left-radius: 0;
}
```

{{ EmbedLiveSample('A_cloud', '100%', '160') }}

### Blockquote

A more practical example of using pseudo-elements is to build a nice formatting for HTML {{HTMLElement('blockquote')}} elements. So let's see an example with a slightly different HTML snippet (which provide us an opportunity to see how to also handle design localization):

```html
<blockquote>
  People who think they know everything are a great annoyance to those of us who
  do. <i>Isaac Asimov</i>
</blockquote>
<blockquote lang="fr">
  L'intelligence, c'est comme les parachutes, quand on n'en a pas, on s'écrase.
  <i>Pierre Desproges</i>
</blockquote>
```

So here comes our style:

```css
blockquote {
  min-height: 5em;
  padding: 1em 4em;
  font: 1em/150% sans-serif;
  position: relative;
  background-color: lightgoldenrodyellow;
}

blockquote::before,
blockquote::after {
  position: absolute;
  height: 3rem;
  font:
    6rem/100% Georgia,
    "Times New Roman",
    Times,
    serif;
}

blockquote::before {
  content: "“";
  top: 0.3rem;
  left: 0.9rem;
}

blockquote::after {
  content: "”";
  bottom: 0.3rem;
  right: 0.8rem;
}

blockquote:lang(fr)::before {
  content: "«";
  top: -1.5rem;
  left: 0.5rem;
}

blockquote:lang(fr)::after {
  content: "»";
  bottom: 2.6rem;
  right: 0.5rem;
}

blockquote i {
  display: block;
  font-size: 0.8em;
  margin-top: 1rem;
  text-align: right;
}
```

{{ EmbedLiveSample('Blockquote', '100%', '300') }}

## All together and more

So it's possible to create a wonderful effect when we mix all of this together. At some point, to accomplish such box embellishment is a matter of creativity, both in design and technical use of CSS properties. By doing such it's possible to create optical illusions that can bring your boxes alive like in this example:

```html hidden
<div class="fancy">Hi! I want to be fancy.</div>
```

Let's create some partial drop-shadow effects. The {{cssxref("box-shadow")}} property allow us to create inner light and a flat drop shadow effect, but with some little extra work it becomes possible to create a more natural geometry by using a pseudo-element and the {{cssxref("rotate")}} property, one of the three individual {{cssxref("transform")}} properties.

```css
.fancy {
  position: relative;
  background-color: #ffc;
  padding: 2rem;
  text-align: center;
  max-width: 200px;
}

.fancy::before {
  content: "";

  position: absolute;
  z-index: -1;
  bottom: 15px;
  right: 5px;
  width: 50%;
  top: 80%;
  max-width: 200px;

  box-shadow: 0px 13px 10px black;
  rotate: 4deg;
}
```

{{ EmbedLiveSample('All_together_and_more', '100%', '120') }}
