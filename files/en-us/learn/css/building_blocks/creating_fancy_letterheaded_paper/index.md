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

Alternatively, you could use a site like [JSBin](https://jsbin.com/) or [Glitch](https://glitch.com/) to do your assessment. You could paste the HTML and fill in the CSS into one of these online editors. If the online editor you are using doesn't have a separate CSS panel, feel free to put it in a `<style>` element in the head of the document.

> **Note:** If you get stuck, then ask us for help — see the [Assessment or further help](#assessment_or_further_help) section at the bottom of this page.

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

## Assessment or further help

If you would like your work assessed or are stuck and want to ask for help:

1. Put your work into an online shareable editor such as [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/).
2. Write a post asking for assessment and/or help at the [MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn/250). Your post should include:

   - A descriptive title such as "Assessment wanted for Creating fancy letterheaded paper".
   - Details of what you have already tried and what you would like us to do; for example, tell us if you're stuck and need help or want an assessment.
   - A link to the example you want assessed or need help with, in an online shareable editor (as mentioned in step 1 above). This is a good practice to get into — it's very hard to help someone with a coding problem if you can't see their code.
   - A link to the actual task or assessment page, so we can find the question you want help with.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Fundamental_CSS_comprehension", "Learn/CSS/Building_blocks/A_cool_looking_box", "Learn/CSS/Building_blocks")}}
