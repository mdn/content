---
title: "Challenge: Sizing and decorating a content panel"
short-title: "Challenge: Sizing and decorating"
slug: Learn_web_development/Core/Styling_basics/Size_decorate_content_panel
page-type: learn-module-assessment
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow", "Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics")}}

In this challenge you are provided with a lightly-styled page structure that renders a content panel containing text and images, with a heading at the top and a button bar at the bottom. We want you to follow the instructions to size and decorate it, producing an interesting layout as a result. Along the way, we'll test your knowledge of CSS values and units, sizing, overflow, and backgrounds and borders.

## Starting point

We are going to get you to solve this challenge on your local development environment; ideally, you'll want to view the example in a full browser window to make sure you are going in the right direction.

1. Create a new folder on your computer called `size-decorate-content-panel`.
2. Inside the folder, create an `index.html` file and paste the following content into it:

   ```html-nolint live-sample___content-pane-start live-sample___content-pane-finish
   <!doctype html>
   <html lang="en">
     <head>
       <meta charset="utf-8" />
       <title>Challenge: Content pane with button bar</title>
       <link href="style.css" rel="stylesheet" />
     </head>
     <body>
       <section class="pane">
         <h1>Content pane</h1>
         <div class="content">
           <h2>Some exciting content</h2>

           <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna
             aliqua. Proin tortor purus <a href="#">platea sit eu id</a>
             nisi litora libero. Neque vulputate consequat ac amet augue
             blandit maximus aliquet congue. Pharetra vestibulum posuere
             ornare <a href="#">faucibus fusce dictumst</a> orci aenean eu
             facilisis ut volutpat commodo senectus purus himenaeos fames
             primis convallis nisi.
           </p>
           <img
             src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg"
             alt="Closeup of a large wild cat's eyes and nose" />
           <p>
             Phasellus fermentum malesuada phasellus netus dictum aenean
             placerat egestas amet. <a href="#">Ornare taciti semper dolor
             tristique</a> morbi. Sem leo tincidunt aliquet semper eu lectus
             scelerisque quis. Sagittis vivamus mollis nisi mollis enim
             fermentum laoreet.
           </p>

           <h2>More exciting content</h2>

           <p>
             Curabitur semper venenatis lectus viverra ex dictumst nulla
             maximus. Primis iaculis elementum conubia feugiat venenatis
             dolor augue ac blandit nullam ac <a href="#">phasellus turpis</a>
             feugiat mollis. Duis lectus porta mattis imperdiet vivamus augue
             litora lectus arcu. Justo torquent pharetra volutpat ad blandit
             bibendum <a href="#">accumsan nec elit cras</a> luctus primis
             ipsum gravida class congue.
           </p>
           <img
             src="https://mdn.github.io/shared-assets/images/examples/balloons-landscape.jpg"
             alt="Three colorful hot air balloons floating across a blue, nearly cloudless sky" />
           <p>
             Vehicula etiam elementum finibus enim duis feugiat commodo
             adipiscing tortor <a href="#">tempor elit</a>. Et mollis
             consectetur habitant turpis tortor consectetur adipiscing
             vulputate dolor lectus iaculis convallis adipiscing. Nam
             hendrerit <a href="#">dignissim condimentum ullamcorper diam</a>
             morbi eget consectetur odio in sagittis.
           </p>
         </div>
         <div class="controls">
           <button>One</button>
           <button>Two</button>
           <button>Three</button>
           <button>Four</button>
         </div>
       </section>
     </body>
   </html>
   ```

3. Inside the folder, create a `style.css` file and paste the following content into it:

   ```css live-sample___content-pane-start
   /* Type and text */

   * {
     box-sizing: border-box;
   }

   html {
     height: 100%;
   }

   body {
     height: inherit;
     font: 1.2em / 1.5 system-ui;
     margin: 0 auto;
   }

   h1 {
     font-size: 2em;
   }

   h2 {
     font-size: 1.5em;
   }

   a {
     color: red;
   }

   a:hover,
   a:focus {
     text-decoration: none;
   }

   /* Styling the pane */

   .pane {
     height: 100%;
   }

   h1,
   .controls {
     margin: 0;
     display: flex;
     justify-content: center;
     align-items: center;
   }

   .content {
   }

   .controls {
     justify-content: space-around;
     gap: 20px;
     padding: 20px;
   }

   button {
     flex: 1;
   }
   ```

4. Save your files and load `index.html` in a browser ready to test.

## Project brief

Follow the steps below to complete the project, sizing the content pane appropriately and adding the required decorations.

### Headings

1. Use generated content to make a book emoji (📖) appear at the start of the top-level heading. Add `20px` of spacing in between the emoji and the heading text.
2. Currently, the headings are sized in `em`s. We'd like you to change the sizing so that it is responsive, changing based on the viewport width but also remaining zoomable. To achieve this, make each heading level's sizing equal to a suitable percentage of the viewport width plus a smaller `em` value.

### Container sizing

1. Make the width of the `<section>` wrapper element with a class of `pane` equal to `60%`, but give it a maximum width of `1000px` and minimum width of `480px`. See if you can find a CSS function that allows you to set this using a single declaration.
2. Center the `pane` `<section>` horizontally on the page using `auto` margins.
3. Set the `<h1>` and the `<div>` with a class of `controls` to both be `100px` high. Set the `<div>` with a class of `content` to be `100%` of the `<body>` height, minus the height of the `<h1>` and the `<div class="controls">`. This should give you a UI that always stretches to be the height of the viewport, with a flexible content container and a fixed height heading and button bar.
4. The buttons look a bit thin and hard to read. Give them a height of `100%` of their container, and a font size of `1.2em`.
5. Give the `pane` `<section>` and the `content` `<div>` vertical padding of `0` on both sides and horizontal padding of `20px` on both sides.

### Image placement

1. The images currently overflow the content container. Set a maximum width of `90%` on them to stop this happening.
2. Center the images horizontally using `auto` margins.

### Decoration

1. Apply a color gradient to the `pane` `<section>` that changes smoothly from `#9fb4c7` at the top to `#7f7caf` at the bottom.
2. Give the images a `1px solid` border and the `content` `<div>` a `2px solid` border. Give the borders a color of `#28587b`.
3. Give the `content` `<div>` a background color of `#eeeeff`, and a background image of `https://mdn.github.io/shared-assets/images/examples/big-star.png`. The background image should not repeat, should be sized at `40px` by `40px`, and should be placed `5px` from the top of the container and `15px` from the right.
4. Give the buttons a text color of `white` and a background color of `rgb(40 88 123 / 0.8)`. On hover or focus, the buttons should change to have a fully opaque version of the same background color.
5. Set a `10px` border radius on the `content` `<div>` and the buttons.

### Overflow

At this point, you should still notice a problem with the UI — the content contained in the `content` `<div>` overflows its container, and the whole page scrolls to allow you to access it all. We want the `content` `<div>` to scroll instead. How can you achieve this?

## Hints and tips

- Use the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) to catch unintended mistakes in your CSS — mistakes you might have otherwise missed — so that you can fix them.
- You don't need to alter the HTML in any way.

## Example

The starting state of the project will render like this:

{{EmbedLiveSample("content-pane-start", "100%", 500)}}

The finished project should look like this (we've rendered this at `90%` width, not `60%`, so it looks better in the narrow output pane):

{{EmbedLiveSample("content-pane-finish", "100%", 500)}}

<details>
<summary>Click here to show a possible solution</summary>

The finished CSS looks like so:

```css live-sample___content-pane-finish
/* Type and text */

* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  height: inherit;
  font: 1.2em / 1.5 system-ui;
  margin: 0 auto;
}

h1 {
  /* Responsive heading sizing, equal to vw value plus em value */
  font-size: calc(2vw + 1em);
}

/* Add book emoji as generated content, with spacing between
it and the heading content */
h1::before {
  content: "📖";
  margin-right: 20px;
}

h2 {
  /* Responsive heading sizing, equal to vw value plus em value */
  font-size: calc(1.5vw + 0.75em);
}

a {
  color: red;
}

a:hover,
a:focus {
  text-decoration: none;
}

/* Styling the pane */

.pane {
  height: 100%;
  /* clamp() function allows you to set a percentage width plus a maximum and minimum absolute width */
  width: clamp(480px, 60%, 1000px);
  /* Center using auto margins */
  margin: 0 auto;
  /* Set vertical padding of 0 on both sides and horizontal padding
  of 20px on both sides */
  padding: 0 20px;
  /* Apply linear gradient from top to bottom */
  background: linear-gradient(to bottom, #9fb4c7, #7f7caf);
}

img {
  /* Set 90% maximum width on the images */
  max-width: 90%;
  /* Center using auto margins */
  margin: 0 auto;
  display: block;
  /* Set border on the images */
  border: 1px solid #28587b;
}

h1,
.controls {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* Set the h1 and controls div to each be 100px high */
  height: 100px;
}

.content {
  /* Set background color and image on the content div, and size the image */
  background: url("https://mdn.github.io/shared-assets/images/examples/big-star.png")
    no-repeat top 5px right 15px / 40px #eeeeff;
  /* Set vertical padding of 0 on both sides and horizontal padding
  of 20px on both sides */
  padding: 0 20px;
  /* Set the content div to be 100% minus the h1 and
  controls div combined height (200px) */
  height: calc(100% - 200px);
  /* Set border on the content div */
  border: 2px solid #28587b;
  /* Stop the content from overflowing its container; make it scroll instead */
  overflow: auto;
}

.controls {
  justify-content: space-around;
  gap: 20px;
  padding: 20px;
}

button {
  flex: 1;
  /* Set button height to 100% and font size to 1.2em */
  height: 100%;
  font-size: 1.2em;
  /* Set white text color on the buttons */
  color: white;
  /* Set background color on the buttons */
  background-color: rgb(40 88 123 / 0.8);
}

/* Set fully-opaque background color on the
buttons on hover and focus */
button:hover,
button:focus {
  background-color: rgb(40 88 123 / 1);
}

/* Set border radius on content div and buttons */
.content,
button {
  border-radius: 10px;
}
```

```css hidden live-sample___content-pane-finish
.pane {
  width: clamp(480px, 90%, 1000px);
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow", "Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics")}}
