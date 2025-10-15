---
title: "Challenge: Styling a home color scheme search app"
short-title: "Challenge: Styling color scheme search"
slug: Learn_web_development/Core/Styling_basics/Home_color_scheme_search
page-type: learn-module-assessment
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics")}}

The final challenge of our [styling basics](/en-US/docs/Learn_web_development/Core/Styling_basics) module features a mockup of a "Home color search app" UI, the idea being to let users input a color and retrieve a range of variations along with sample color scheme ideas. Your task is to style the provided form, table, and button controls, and make sure the images display as expected.

> [!NOTE]
> The tinted images used in this challenge have been adapted from the original available on Flickr: [Chic Living Room](https://flickr.com/photos/145464578@N08/28362250492/), published by [Houseology Interiors](https://flickr.com/photos/145464578@N08/) under [CC BY-NC 2.0](https://creativecommons.org/licenses/by-nc/2.0/deed.en).

## Starting point

To begin, click the **Play** button in one of the code panels below to open the provided example in the MDN Playground. You'll then follow the instructions in the [Project brief](#project_brief) section to style the page appropriately.

```html live-sample___app-start live-sample___app-finish
<section>
  <h1>Home color search</h1>
  <form>
    <div>
      <label for="color">Color to search for:</label>
      <input type="text" id="color" name="color" value="pink" />
    </div>
    <div>
      <label for="results-per-page">Results per page:</label>
      <input
        type="text"
        id="results-per-page"
        name="results-per-page"
        value="4" />
    </div>
    <div>
      <button type="button">Submit</button>
    </div>
  </form>
</section>
<hr />
<section>
  <h2>Search results</h2>
  <table>
    <caption>
      Sample colors and color schemes
    </caption>
    <thead>
      <tr>
        <th scope="col">Color</th>
        <th scope="col">Raw color</th>
        <th scope="col">Tags</th>
        <th scope="col">Sample color scheme</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Pink</td>
        <td><code>rgb(255 192 203)</code></td>
        <td>pink, pale, light</td>
        <td>
          <img
            src="https://mdn.github.io/shared-assets/images/examples/learn/home-color-schemes/living-room-pink.png"
            alt="Image of living room in a pink color scheme" />
        </td>
      </tr>
      <tr>
        <td>Baker-Miller pink</td>
        <td><code>rgb(255 145 175)</code></td>
        <td>pink, pale, bright</td>
        <td>
          <img
            src="https://mdn.github.io/shared-assets/images/examples/learn/home-color-schemes/living-room-baker-miller-pink.png"
            alt="Image of living room in a Baker-Miller pink color scheme" />
        </td>
      </tr>
      <tr>
        <td>Hotpink</td>
        <td><code>rgb(255 105 180)</code></td>
        <td>pink, bright, vivid</td>
        <td>
          <img
            src="https://mdn.github.io/shared-assets/images/examples/learn/home-color-schemes/living-room-hotpink.png"
            alt="Image of living room in a hotpink color scheme" />
        </td>
      </tr>
      <tr>
        <td>Fuchsia</td>
        <td><code>rgb(255 0 255)</code></td>
        <td>pink, medium, bright</td>
        <td>
          <img
            src="https://mdn.github.io/shared-assets/images/examples/learn/home-color-schemes/living-room-fuchsia.png"
            alt="Image of living room in a fuchsia color scheme" />
        </td>
      </tr>
    </tbody>
  </table>
  <div class="controls">
    <button disabled>Previous</button>
    <p>Showing page 1 of 20</p>
    <button>Next</button>
  </div>
</section>
```

```css live-sample___app-start
* {
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
}

body {
  margin: 0 10px;
}

hr {
  margin: 3em 0;
}

h2 {
  margin-top: 0;
}

/* Prev/next control layout */

.controls {
  display: flex;
  padding: 10px 0;
  justify-content: space-between;
  align-items: center;
}

/* Form and button styling */

form div {
  display: flex;
  align-items: center;
  gap: 2em;
  margin-bottom: 1em;
}

label {
  text-align: right;
  flex: 1;
}

input {
  flex: 3;
}

/* Table styling */

table img {
  width: 100%;
  height: 150px;
}
```

{{embedlivesample("app-start", "100%", 650)}}

## Project brief

Follow the steps below to complete the project, sizing the content pane appropriately and adding the required decorations.

### Add a form reset

First of all, add some "reset" styles to the `<button>` and `<input>` elements to give them a consistent starting state across browsers.

Specifically:

1. Make them inherit the font family set on the rest of the page.
2. Give them a font size of `100%`.
3. Remove all their padding and margin.

### Style the form inputs

Give the `<input>` elements:

1. A `2px` solid border with the color `#999999`.
2. `10px` of padding.
3. `5px` rounded corners.

### Style the buttons

Give the `<button>` elements:

1. No border.
2. A `black` background color and `white` text color.
3. `5px` rounded corners.
4. Vertical padding of `10px` and horizontal padding of `2em`.
5. A background color of `#666666` when hovered or focused.
6. A background color of `#aaaaaa` when disabled.

### Style the table

You should now add some best practice styling to the table, as learned earlier in the module, plus a few extras.

Specifically:

1. Give the table a fixed layout, a width of `100%`, and collapsed borders.
2. Make the table's top and bottom borders `1px` thick, solid, and colored `#999999`.
3. Give the table header cells and normal cells `0.6em` of padding, and make their content vertically aligned to the top of the cells.
4. Give the table header cells a bottom border that is `1px` thick, solid, and colored `#999999`.
5. Give all of the table rows a width of `20%`, except for the fourth row, which should have a width of `40%`.
6. Inside the table body, there are four rows. The second cell inside each of these rows contains text for an `rgb()` color. Give each one of these cells a background color that corresponds to its text.
7. Create zebra stripes: Give each odd-numbered row a background color of `#eeeeee`, inside the table body only.
8. Give the caption padding of `1em`, an italic font style, and letter spacing of `1px`.

### Fixing the image display

At this point, there is a problem with the images in the table — we've set each image to `100%` of the width of its table cell container, and a specific height of `150px`, as we didn't want the table rows to get too high. However, this has distorted the aspect ratio of the images, making them look a bit squashed.

We'd like you to style the images so that:

1. They are displayed at their intrinsic aspect ratio, but with a bit of the image cut off so they still fit inside the size of the `<img>` elements.
2. The bottom of the image is shown, but the top of the image is cut off.

## Hints and tips

- You don't need to alter the HTML in any way.

## Example

The finished project should look like this:

{{EmbedLiveSample("app-finish", "100%", 700)}}

<details>
<summary>Click here to show the solution</summary>

A possible solution could be:

```css live-sample___app-finish
* {
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
}

body {
  margin: 0 10px;
}

hr {
  margin: 3em 0;
}

h2 {
  margin-top: 0;
}

/* Prev/next control layout */

.controls {
  display: flex;
  padding: 10px 0;
  justify-content: space-between;
  align-items: center;
}

/* Form and button styling */

form div {
  display: flex;
  align-items: center;
  gap: 2em;
  margin-bottom: 1em;
}

label {
  text-align: right;
  flex: 1;
}

/* Solution: Add a form reset */

button,
input {
  font-family: inherit;
  font-size: 100%;
  padding: 0;
  margin: 0;
}

input {
  flex: 3;
  /* Solution: Style the form inputs */
  border: 2px solid #999999;
  padding: 10px;
  border-radius: 5px;
}

/* Solution: Style the buttons */

button {
  background-color: black;
  border: none;
  color: white;
  border-radius: 5px;
  padding: 10px 2em;
}

button:hover,
button:focus {
  background-color: #666666;
}

button:disabled {
  background-color: #aaaaaa;
}

/* Table styling */

table img {
  width: 100%;
  height: 150px;
  /* Solution: Fixing the image display */
  object-fit: cover;
  object-position: bottom;
}

/* Solution: Style the table */

table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border-top: 1px solid #999999;
  border-bottom: 1px solid #999999;
}

th,
td {
  vertical-align: top;
  padding: 0.6em;
}

th {
  border-bottom: 1px solid #999999;
}

tr {
  width: 20%;
}

tr :nth-of-type(4) {
  width: 40%;
}

/* Solution: Provide background colors for the "Raw color" cells */

tr:nth-of-type(1) td:nth-of-type(2) {
  background-color: rgb(255 192 203);
}

tr:nth-of-type(2) td:nth-of-type(2) {
  background-color: rgb(255 145 175);
}

tr:nth-of-type(3) td:nth-of-type(2) {
  background-color: rgb(255 105 180);
}

tr:nth-of-type(4) td:nth-of-type(2) {
  background-color: rgb(255 0 255);
}

tbody tr:nth-child(odd) {
  background-color: #eeeeee;
}

caption {
  padding: 1em;
  font-style: italic;
  letter-spacing: 1px;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics")}}
