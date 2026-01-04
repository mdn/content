---
title: "Test your skills: Images and form elements"
short-title: "Test: Images and forms"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Images
page-type: learn-module-assessment
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics")}}

The aim of this skill test is to assess whether you understand how special elements like [images, media and form elements are treated in CSS](/en-US/docs/Learn_web_development/Core/Styling_basics/Images_media_forms).

> [!NOTE]
> To get help, read our [Test your skills](/en-US/docs/Learn_web_development#test_your_skills) usage guide. You can also reach out to us using one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## Task 1

In this task, you have an image that is overflowing the box. We want the image to scale down to fit inside the box without any extra white space, but we do not mind if some part of the image is cropped. Update the CSS to achieve this.

Your final result should look like the image below:

![An image in a box](mdn-images-object-fit.png)

```html live-sample___object-fit
<div class="box">
  <img
    alt="Hot air balloons flying in clear sky, and a crowd of people in the foreground"
    src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg" />
</div>
```

```css live-sample___object-fit
.box {
  border: 5px solid black;
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

In this task, you have a basic form.

To complete the task:

1. Use attribute selectors to target the search field and button inside `.my-form`.
2. Make the form field and button use the same text size as the rest of the form.
3. Give the form field and button `10px` of padding.
4. Give the button a background of `rebeccapurple`, white foreground, no border and rounded corners of 5px.

Your final result should look like the image below:

![A single line form](mdn-images-form.png)

```html live-sample___forms-1
<form action="" class="my-form" method="post">
  <div>
    <label for="fldSearch">Keywords</label>
    <input id="fldSearch" name="keywords" type="search" />
    <input name="btnSubmit" type="submit" value="Search" />
  </div>
</form>
```

```css live-sample___forms-1
body {
  font: 1.2em / 1.5 sans-serif;
}
.my-form {
  border: 2px solid black;
  padding: 5px;
}
```

{{EmbedLiveSample("forms-1")}}

<details>
<summary>Click here to show the solution</summary>

Here's an example solution for the task:

```css
.my-form {
  border: 2px solid black;
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

## Task 3

Our second form styling assessment is fairly free-form, and you have a lot of flexibility over what you end up doing here. Your CSS needs to fulfill the requirements described below.

To complete the task:

1. Add some kind of lightweight "reset" to make fonts, padding, margin, and sizing more consistent to begin with, as described in [Normalizing form behavior](/en-US/docs/Learn_web_development/Core/Styling_basics/Images_media_forms#normalizing_form_behavior).
2. On top of that, add in some nice, consistent styling for the inputs and button.
3. Use some kind of layout technique to make the inputs and labels line up neatly.

```html hidden live-sample___forms-2
<form>
  <h2>Edit your preferences</h2>
  <ul>
    <li>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" />
    </li>
    <li>
      <label for="website">Website:</label>
      <input type="url" id="website" name="website" />
    </li>
    <li>
      <label for="phone">Phone number:</label>
      <input type="tel" id="phone" name="phone" />
    </li>
    <li>
      <label for="food">Favorite food:</label>
      <select name="food" id="food">
        <option>Salad</option>
        <option>Curry</option>
        <option>Pizza</option>
        <option>Fajitas</option>
      </select>
    </li>
    <li>
      <button>Update preferences</button>
    </li>
  </ul>
</form>
```

```css live-sample___forms-2
* {
  box-sizing: border-box;
}

body {
  background-color: white;
  color: #333333;
  font:
    1em / 1.4 "Helvetica Neue",
    "Helvetica",
    "Arial",
    sans-serif;
  padding: 1em;
  margin: 0;
  width: 500px;
}

/* Don't edit the code above here! */

/* Add your code here */
```

{{ EmbedLiveSample("forms-2", "100%", 250) }}

<details>
<summary>Click here to show the solution</summary>

Your finished CSS could look something like this:

```css
/* ... */
/* Don't edit the code above here! */

button,
input,
select {
  font-family: inherit;
  font-size: 100%;
  padding: 0;
  margin: 0;
}

li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

li:last-of-type {
  margin-top: 30px;
}

label {
  flex: 0 40%;
  text-align: right;
  padding-right: 10px;
}

input,
select {
  flex: auto;
  height: 2em;
}

input,
select,
button {
  display: block;
  padding: 5px 10px;
  border: 1px solid #cccccc;
  border-radius: 3px;
}

select {
  padding: 5px;
}

button {
  margin: 0 auto;
  padding: 5px 20px;
  line-height: 1.5;
  background: #eeeeee;
}

button:hover,
button:focus {
  background: #dddddd;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics")}}
