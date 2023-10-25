---
title: Creating fancy letterheaded paper
slug: Learn/CSS/Building_blocks/Creating_fancy_letterheaded_paper
page-type: learn-module-assessment
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/CSS/Building_blocks/Fundamental_CSS_comprehension", "Learn/CSS/Building_blocks/A_cool_looking_box", "Learn/CSS/Building_blocks")}}

If you want to make the right impression, writing a letter on nice letterheaded paper can be a really good start. In this assessment we'll challenge you to create an online template to achieve such a look.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Before attempting this assessment you should have already worked through
        all the articles in this module.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To test comprehension of CSS box model, and other box-related features
        such as implementing backgrounds.
      </td>
    </tr>
  </tbody>
</table>

## Starting point

To get this assessment started, you should:

- Make local copies of the [HTML](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/letterheaded-paper-start/index.html) and [CSS](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/letterheaded-paper-start/style.css) — save them as `index.html` and `style.css` in a new directory.
- Save local copies of the [top](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/top-image.png), [bottom](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/bottom-image.png) and [logo](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/logo.png) images in the same directory as your code files.

Alternatively, you could use an online editor such as [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/).
You could paste the HTML and fill in the CSS into one of these online editors.

> **Note:** If you get stuck, you can reach out to us in one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## Project brief

You have been given the files needed to create a letterheaded paper template. You just need to put the files together. To get there, you need to:

### The main letter

- Apply the CSS to the HTML.
- Add a background declaration to the letter that:

  - Fixes the top image to the top of the letter
  - Fixes the bottom image to the bottom of the letter
  - Adds a semi-transparent gradient over the top of both of the previous backgrounds that gives the letter a bit of texture. Make it slightly dark right near the top and bottom, but completely transparent for a large part of the center.

- Add another background declaration that just adds the top image to the top of the letter, as a fallback for browsers that don't support the previous declaration.
- Add a white background color to the letter.
- Add a 1mm top and bottom solid border to the letter, in a color that is in keeping with the rest of the color scheme.

### The logo

- To the {{htmlelement("Heading_Elements", "h1")}}, add the logo as a background image.
- Add a filter to the logo to give it a subtle drop shadow.
- Now comment out the filter and implement the drop shadow in a different (slightly more cross-browser compatible) way, which still follows the shape of the round image.

## Hints and tips

- Remember that you can create a fallback for older browsers by putting the fallback version of a declaration first, followed by the version that works across newer browsers only. Older browsers will apply the first declaration and ignore the second one, whereas newer browsers will apply the first one, then override it with the second one.
- Feel free to create your own graphics for the assessment if you wish.

## Example

The following screenshot shows an example of what the finished design could look like:

![Full A4 page composed of at the top left two triangular shapes, first one is green, second one is red, at the top right darker red trapezoid shape. Below the green triangular, a red circle filled with a green star with white text on it: Awesome company. At the bottom left of the page, darker red trapezoid shape, follow by the two triangular shapes: the red one, then the green one. Above the green triangular shape, black text displaying a postal address.](letterhead.png)

{{PreviousMenuNext("Learn/CSS/Building_blocks/Fundamental_CSS_comprehension", "Learn/CSS/Building_blocks/A_cool_looking_box", "Learn/CSS/Building_blocks")}}
