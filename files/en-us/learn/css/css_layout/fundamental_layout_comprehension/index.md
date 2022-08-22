---
title: "Fundamental layout comprehension"
slug: Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension
tags:
  - Assessment
  - Beginner
  - CSS
  - Layout
  - Learn
---

{{LearnSidebar}}
{{PreviousMenu("Learn/CSS/CSS_layout/Supporting_Older_Browsers", "Learn/CSS/CSS_layout")}}

If you have worked through this module then you will have already covered the basics of what you need to know to do CSS layout today, and to work with older CSS as well. This task will test some of your knowledge by the way of developing a simple webpage layout using a variety of techniques.

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
        To test comprehension of CSS layout methods using Flexbox, Grid, Floating and Positioning.
      </td>
    </tr>
  </tbody>
</table>

## Starting point

You can download the HTML, CSS, and a set of six images [here](https://github.com/mdn/learning-area/tree/main/css/css-layout/fundamental-layout-comprehension).

Save the HTML document and stylesheet into a directory on your computer, and add the images into a folder named `images`. Opening the `index.html` file in a browser should give you a page with basic styling but no layout, which should look something like the image below.

![Starting point of the layout task. The elements are not laid out neatly. There is a website title, above a black nav bar with 5 links flush left, followed by the blog post title and post content. Between the blog title and blog content there is a photo that is flush left.](layout-task-start.png)

This starting point has all of the content of your layout as displayed by the browser in normal flow.

Alternatively, you could use a site like [Glitch](https://glitch.com/) to do your assessment, pasting in the HTML and CSS. Note that if you use an online editor you will need to upload the images and replace the values in the `src` attributes to point to the new image locations. If the online editor you are using doesn't have a separate CSS panel, feel free to put it in a `<style>` element in the head of the document.

> **Note:** If you get stuck, then ask us for help — see the [Assessment or further help](#assessment_or_further_help) section at the bottom of this page.

## Project brief

You have been provided with some raw HTML, basic CSS, and images — now you need to create a layout for the design.

### Your tasks

You now need to implement your layout. The tasks you need to achieve are:

1. To display the navigation items in a row, with an equal amount of space between the items.
2. The navigation bar should scroll with the content and then become stuck at the top of the viewport when it reaches it.
3. The image that is inside the article should have text wrapped around it.
4. The {{htmlelement("article")}} and {{htmlelement("aside")}} elements should display as a two column layout. The columns should be a flexible size so that if the browser window shrinks smaller the columns become narrower.
5. The photographs should display as a two column grid with a 1 pixel gap between the images.

## Hints and tips

You will not need to edit the HTML in order to achieve this layout and the techniques you should use are:

- Flexbox
- Grid
- Floating
- Positioning

There are a few ways in which you could achieve some of these tasks, and there often isn't a single right or wrong way to do things. Try a few different approaches and see which works best. Make notes as you experiment.

## Example

The following screenshot shows an example of what the finished layout for the design should look like:

![Finished layout task website. The elements are laid out neatly. There is a website title, above a black nav bar containing 5 equally spaced links. Below the nav bar, there are two sections. On the left there is a blog post: A blog post title followed by the post content. The blog content wraps around a photo that is flush left. On the right side there is a 'photography' title about a group of images laid out in a two-image wide grid.](layout-task-complete.png)

## Assessment or further help

If you would like your work assessed or are stuck and want to ask for help:

1. Put your work into an online shareable editor such as [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/).
2. Write a post asking for assessment and/or help at the [MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn/250). Your post should include:

    - A descriptive title such as "Assessment wanted for Fundamental layout comprehension".
    - Details of what you have already tried and what you would like us to do; for example, tell us if you're stuck and need help or want an assessment.
    - A link to the example you want assessed or need help with, in an online shareable editor (as mentioned in step 1 above). This is a good practice to get into — it's very hard to help someone with a coding problem if you can't see their code.
    - A link to the actual task or assessment page, so we can find the question you want help with.

{{PreviousMenu("Learn/CSS/CSS_layout/Supporting_Older_Browsers", "Learn/CSS/CSS_layout")}}

## In this module

- [Introduction to CSS layout](/en-US/docs/Learn/CSS/CSS_layout/Introduction)
- [Normal flow](/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow)
- [Flexbox](/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
- [Grid](/en-US/docs/Learn/CSS/CSS_layout/Grids)
- [Floats](/en-US/docs/Learn/CSS/CSS_layout/Floats)
- [Positioning](/en-US/docs/Learn/CSS/CSS_layout/Positioning)
- [Multiple-column layout](/en-US/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- [Responsive design](/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [Beginner's guide to media queries](/en-US/docs/Learn/CSS/CSS_layout/Media_queries)
- [Legacy layout methods](/en-US/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)
- [Supporting older browsers](/en-US/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers)
- [Fundamental layout comprehension](/en-US/docs/Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension)
