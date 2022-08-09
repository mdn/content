---
title: A cool-looking box
slug: Learn/CSS/Building_blocks/A_cool_looking_box
tags:
  - Assessment
  - Beginner
  - CSS
  - Learn
  - backgrounds
  - borders
  - box
  - box model
  - effects
---
{{LearnSidebar}}
{{PreviousMenu("Learn/CSS/Building_blocks/Creating_fancy_letterheaded_paper", "Learn/CSS/Building_blocks")}}

In this assessment, you'll get some more practice in creating cool-looking boxes by trying to create an eye-catching box.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Before attempting this assessment you should have already worked
        through all the articles in this module.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To test comprehension of the CSS box model and other box-related
        features such as borders and backgrounds.
      </td>
    </tr>
  </tbody>
</table>

## Starting point

To get this assessment started, you should:

- Make local copies of the starting [HTML](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/cool-information-box-start/index.html) and [CSS](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/cool-information-box-start/style.css) — save them as `index.html` and `style.css` in a new directory.

Alternatively, you could use a site like [JSBin](https://jsbin.com/) or [Glitch](https://glitch.com/) to do your assessment. You could paste the HTML and fill in the CSS into one of these online editors. If the online editor you are using doesn't have a separate CSS panel, feel free to put it in a `<style>` element in the head of the document.

> **Note:** If you get stuck, then ask us for help — see the [Assessment or further help](#assessment_or_further_help) section at the bottom of this page.

## Project brief

Your task is to create a cool, fancy box and explore the fun we can have with CSS.

### General tasks

- Apply the CSS to the HTML.

### Styling the box

We'd like you to style the provided {{htmlelement("div")}}, giving it the following:

- A reasonable width for a large box, say around 200 pixels.
- A reasonable height for a large box, centering the text vertically in the process.
- Center the box horizontally.
- Center the text within the box.
- A slight increase in font size, to around 17-18 pixel computed style. Use rems. Write a comment about how you worked out the value.
- A base color for the design. Give the box this color as its background color.
- A contrasting color for the text and a black text shadow.
- A fairly subtle border radius.
- A 1-pixel solid border with a color similar to the base color, but a slightly darker shade.
- A linear semi-transparent black gradient that goes toward the bottom right corner. Make it completely transparent at the start, grading to around 0.2 opacity by 30% along, and remaining at the same color until the end.
- Multiple box shadows. Give it one standard box shadow to make the box look slightly raised off the page. The other two should be inset box shadows — a semi-transparent white shadow near the top left and a semi-transparent black shadow near the bottom right — to add to the nice raised 3D look of the box.

## Hints and tips

- Use the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) to catch and fix mistakes in your CSS.

## Example

The following screenshot shows an example of what the finished design could look like:

![A big red box with rounded corners. White text with drop shadow reads 'this is a cool box'.](fancy-box2.png)

## Assessment or further help

If you would like your work assessed or are stuck and want to ask for help:

1. Put your work into an online shareable editor such as [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/).
2. Write a post asking for assessment and/or help at the [MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn/250). Your post should include:

    - A descriptive title such as "Assessment wanted for A cool-looking box".
    - Details of what you have already tried and what you would like us to do; for example, tell us if you're stuck and need help or want an assessment.
    - A link to the example you want assessed or need help with, in an online shareable editor (as mentioned in step 1 above). This is a good practice to get into — it's very hard to help someone with a coding problem if you can't see their code.
    - A link to the actual task or assessment page, so we can find the question you want help with.

{{PreviousMenu("Learn/CSS/Building_blocks/Creating_fancy_letterheaded_paper", "Learn/CSS/Building_blocks")}}

## In this module

- [Cascade and inheritance](/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- [CSS selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors)

  - [Type, class, and ID selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)
  - [Attribute selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)
  - [Pseudo-classes and pseudo-elements](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
  - [Combinators](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators)

- [The box model](/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
- [Backgrounds and borders](/en-US/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
- [Handling different text directions](/en-US/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)
- [Overflowing content](/en-US/docs/Learn/CSS/Building_blocks/Overflowing_content)
- [Values and units](/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
- [Sizing items in CSS](/en-US/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
- [Images, media, and form elements](/en-US/docs/Learn/CSS/Building_blocks/Images_media_form_elements)
- [Styling tables](/en-US/docs/Learn/CSS/Building_blocks/Styling_tables)
- [Debugging CSS](/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS)
- [Organizing your CSS](/en-US/docs/Learn/CSS/Building_blocks/Organizing)
- [Fundamental CSS comprehension](/en-US/docs/Learn/CSS/Building_blocks/Fundamental_CSS_comprehension)
- [Creating fancy letterheaded paper](/en-US/docs/Learn/CSS/Building_blocks/Creating_fancy_letterheaded_paper)
- [A cool-looking box](/en-US/docs/Learn/CSS/Building_blocks/A_cool_looking_box)
