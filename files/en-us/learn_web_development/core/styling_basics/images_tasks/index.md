---
title: "Test your skills: Images and form elements"
slug: Learn_web_development/Core/Styling_basics/Images_tasks
page-type: learn-module-assessment
---

{{LearnSidebar}}

The aim of this skill test is to assess whether you understand how special elements like [images, media and form elements are treated in CSS](/en-US/docs/Learn_web_development/Core/Styling_basics/Images_media_forms).

> [!NOTE]
> Click **"Play"** in the code blocks below to edit the examples in the MDN Playground.
> You can also copy the code (click the clipboard icon) and paste it into an online editor such as [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/).
> If you get stuck, you can reach out to us in one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## Task 1

In this task, you have an image that is overflowing the box. We want the image to scale down to fit inside the box without any extra white space, but we do not mind if some part of the image is cropped.

Your final result should look like the image below:

![An image in a box](mdn-images-object-fit.png)

Try to update the code below to recreate the finished example so that the image doesn't overflow the box:

```html live-sample___object-fit
<div class="box">
  <img
    alt="Hot air balloons flying in clear sky, and a crowd of people in the foreground"
    src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg" />
</div>
```

```css live-sample___object-fit
.box {
  border: 5px solid #000;
  width: 400px;
  height: 200px;
}

img {
  /* Add styles here */
}
```

{{EmbedLiveSample("object-fit", "", "400px")}}

<details>
<summary>Click here to show the solution</summary>

It is ok if some parts of the image are cropped.
Using `object-fit: cover` is the best choice, you also need to set the width and height to `100%`:

```css
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
```

</details>

## Task 2

In this task, you have a basic form. Your task is to make the following changes:

- Use attribute selectors to target the search field and button inside `.my-form`.
- Make the form field and button use the same text size as the rest of the form.
- Give the form field and button 10px of padding.
- Give the button a background of `rebeccapurple`, white foreground, no border and rounded corners of 5px.

Your final result should look like the image below:

![A single line form](mdn-images-form.png)

Try to update the code below to recreate the finished example:

```html live-sample___form
<form action="" class="my-form" method="post">
  <div>
    <label for="fldSearch">Keywords</label>
    <input id="fldSearch" name="keywords" type="search" />
    <input name="btnSubmit" type="submit" value="Search" />
  </div>
</form>
```

```css live-sample___form
body {
  font: 1.2em / 1.5 sans-serif;
}
.my-form {
  border: 2px solid #000;
  padding: 5px;
}
```

{{EmbedLiveSample("form")}}

<details>
<summary>Click here to show the solution</summary>

Here's an example solution for the task:

```css
.my-form {
  border: 2px solid #000;
  padding: 5px;
}

.my-form input[type="search"] {
  padding: 10px;
  font-size: inherit;
}

.my-form input[type="submit"] {
  padding: 10px;
  font-size: inherit;
  background-color: rebeccapurple;
  color: white;
  border: 0;
  border-radius: 5px;
}
```

</details>

## See also

- [CSS styling basics](/en-US/docs/Learn_web_development/Core/Styling_basics)
