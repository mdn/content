---
title: "Test your skills: HTML images"
short-title: Images
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Images
page-type: learn-module-assessment
sidebar: learnsidebar
---

The aim of this skill test is to help you assess whether you understand [images and how to embed them in HTML](/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_images).

> [!NOTE]
> To get help, read our [Test your skills](/en-US/docs/Learn_web_development#test_your_skills) usage guide. You can also reach out to us using one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## Task 1

In this task, we want you to embed an image of some Blueberries into the page.

To complete the task:

1. Add the path to the image to an appropriate attribute to embed it on the page. The image is called `blueberries.jpg`, and it is available at a path of `https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/images/blueberries.jpg?raw=true`.
2. Add some alternative text to an appropriate attribute to describe the image, for people that cannot see it.
3. Give the `<img>` element an appropriate `width` so that it displays at the correct {{glossary("aspect ratio")}}, and enough space is left on the page to display it. The image's {{glossary("intrinsic size")}} is 615 x 419 pixels.

```html live-sample___images-1
<h1>Basic image embed</h1>

<img />
```

<!-- Shared/setup CSS code -->

```css hidden live-sample___images-1 live-sample___images-2 live-sample___images-3
body {
  background-color: white;
  color: #333333;
  font:
    1em / 1.4 Helvetica Neue,
    Helvetica,
    Arial,
    sans-serif;
  padding: 1em;
  margin: 0;
}

* {
  box-sizing: border-box;
}

img {
  border: 1px solid black;
}
```

{{ EmbedLiveSample('images-1', "100%", 150) }}

<details>
<summary>Click here to show the solution</summary>

Your finished HTML should look like this:

```html-nolint
<h1>Basic image embed</h1>

<img src="https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/images/blueberries.jpg?raw=true"
     alt="A pile of small blue berries"
     width="400" />
```

</details>

## Task 2

In this task, you already have a full-featured image, but we'd like you to add a tooltip that appears when the image is moused over. You should put some appropriate information into the tooltip.

```html live-sample___images-2
<h1>Basic image title</h1>

<img
  src="https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/larch.jpg?raw=true"
  alt="Several tall evergreen trees called larches" />
```

{{ EmbedLiveSample('images-2', "100%", 600) }}

<details>
<summary>Click here to show the solution</summary>

Your finished HTML should look like this:

```html-nolint
<h1>Basic image title</h1>

<img
  src="https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/larch.jpg?raw=true"
  alt="Several tall evergreen trees called larches"
  title="And now, Number 1, The Larch" />
```

</details>

## Task 3

In this task, you are provided with both a full-featured image and some caption text. What you need to do here is add elements that will associate the image with the caption.

```html live-sample___images-3
<h1>Image and caption</h1>

<img
  src="https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/firefox.png?raw=true"
  alt="An abstract flaming fox wrapping around a blue sphere"
  width="446"
  height="460" />
The 2019 Firefox logo
```

```css hidden live-sample___images-3
figcaption {
  font-style: italic;
}
```

{{ EmbedLiveSample('images-3', "100%", 600) }}

<details>
<summary>Click here to show the solution</summary>

Your finished HTML should look like this:

```html
<h1>Image and caption</h1>

<figure>
  <img
    src="https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/firefox.png?raw=true"
    alt="An abstract flaming fox wrapping around a blue sphere"
    width="446"
    height="460" />
  <figcaption>The 2019 Firefox logo</figcaption>
</figure>
```

</details>
