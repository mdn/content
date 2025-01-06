---
title: "Challenge: Image gallery"
slug: Learn_web_development/Core/Scripting/Image_gallery
page-type: learn-module-assessment
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Event_bubbling","Learn_web_development/Core/Scripting/Object_basics", "Learn_web_development/Core/Scripting")}}

Now that we've looked at the fundamental building blocks of JavaScript, we'll test your knowledge of loops, functions, conditionals and events by getting you to build a fairly common item you'll see on a lot of websites — a JavaScript-powered image gallery.

## Starting point

To start this challenge, you should go and [grab the ZIP](https://raw.githubusercontent.com/mdn/learning-area/main/javascript/building-blocks/gallery/gallery-start.zip) file for the example, unzip it somewhere on your computer, and do the exercise locally to begin with.

Alternatively, you could use an online editor such as [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/).

> [!NOTE]
> If you get stuck, you can reach out to us in one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## Project brief

You have been provided with some HTML, CSS and image assets and a few lines of JavaScript code; you need to write the necessary JavaScript to turn this into a working program. The HTML body looks like this:

```html
<h1>Image gallery example</h1>

<div class="full-img">
  <img
    class="displayed-img"
    src="images/pic1.jpg"
    alt="Closeup of a blue human eye" />
  <div class="overlay"></div>
  <button class="dark">Darken</button>
</div>

<div class="thumb-bar"></div>
```

The example looks like this:

![An image gallery with a large image on top and five thumbnails below](gallery.png)

The most interesting parts of the example's CSS file:

- It absolutely positions the three elements inside the `full-img <div>` — the `<img>` in which the full-sized image is displayed, an empty `<div>` that is sized to be the same size as the `<img>` and put right over the top of it (this is used to apply a darkening effect to the image via a semi-transparent background color), and a `<button>` that is used to control the darkening effect.
- It sets the width of any images inside the `thumb-bar <div>` (so-called "thumbnail" images) to 20%, and floats them to the left so they sit next to one another on a line.

Your JavaScript needs to:

- Declare a `const` array listing the filenames of each image, such as `'pic1.jpg'`.
- Declare a `const` object listing the alternative text for each image.
- Loop through the array of filenames, and for each one, insert an `<img>` element inside the `thumb-bar <div>` that embeds that image in the page along with its alternative text.
- Add a click event listener to each `<img>` inside the `thumb-bar <div>` so that, when they are clicked, the corresponding image and alternative text are displayed in the `displayed-img <img>` element.
- Add a click event listener to the `<button>` so that when it is clicked, a darken effect is applied to the full-size image. When it is clicked again, the darken effect is removed again.

To give you more of an idea, have a look at the [finished example](https://mdn.github.io/learning-area/javascript/building-blocks/gallery/) (no peeking at the source code!)

## Steps to complete

The following sections describe what you need to do.

## Declare an array of image filenames

You need to create an array listing the filenames of all the images to include in the gallery. The array should be declared as a constant.

### Looping through the images

We've already provided you with lines that store a reference to the `thumb-bar <div>` inside a constant called `thumbBar`, create a new `<img>` element, set its `src` and `alt` attributes to a placeholder value `xxx`, and append this new `<img>` element inside `thumbBar`.

You need to:

1. Put the section of code below the "Looping through images" comment inside a loop that loops through all the filenames in the array.
2. In each loop iteration, replace the `xxx` placeholder values with a string that will equal the path to the image and alt attributes in each case. Set the value of the `src` and `alt` attributes to these values in each case. Remember that the image is inside the images directory, and its name is `pic1.jpg`, `pic2.jpg`, etc.

### Adding a click event listener to each thumbnail image

In each loop iteration, you need to add a click event listener to the current `newImage` — this listener should find the value of the `src` attribute of the current image. Set the `src` attribute value of the `displayed-img <img>` to the `src` value passed in as a parameter. Then do the same for the `alt` attribute.

Alternatively, you can add one event listener to the thumb bar.

### Writing a handler that runs the darken/lighten button

That just leaves our darken/lighten `<button>` — we've already provided a line that stores a reference to the `<button>` in a constant called `btn`. You need to add a click event listener that:

1. Checks the current class name set on the `<button>` — you can again achieve this by using `getAttribute()`.
2. If the class name is `"dark"`, changes the `<button>` class to `"light"` (using [`setAttribute()`](/en-US/docs/Web/API/Element/setAttribute)), its text content to "Lighten", and the {{cssxref("background-color")}} of the overlay `<div>` to `"rgb(0 0 0 / 50%)"`.
3. If the class name is not `"dark"`, changes the `<button>` class to `"dark"`, its text content back to "Darken", and the {{cssxref("background-color")}} of the overlay `<div>` to `"rgb(0 0 0 / 0%)"`.

The following lines provide a basis for achieving the changes stipulated in points 2 and 3 above.

```js
btn.setAttribute("class", xxx);
btn.textContent = xxx;
overlay.style.backgroundColor = xxx;
```

## Hints and tips

- You don't need to edit the HTML or CSS in any way.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Event_bubbling","Learn_web_development/Core/Scripting/Object_basics", "Learn_web_development/Core/Scripting")}}
