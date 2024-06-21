---
title: Fundamental layout comprehension
slug: Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension
page-type: learn-module-assessment
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
        To test comprehension of CSS layout methods using flexbox, grid, floating and positioning.
      </td>
    </tr>
  </tbody>
</table>

## Starting point

You can download the HTML, CSS, and a set of six images [here](https://github.com/mdn/learning-area/tree/main/css/css-layout/fundamental-layout-comprehension).

Save the HTML document and stylesheet into a directory on your computer, and add the images into a folder named `images`. Opening the `index.html` file in a browser should give you a page with basic styling but no layout, which should look something like the image below.

![Starting point of the layout task. The elements are not laid out neatly. There is a website title, above a black nav bar with 5 links flush left, followed by the blog post title and post content. Between the blog title and blog content there is a photo that is flush left.](layout-task-start.png)

This starting point has all of the content of your layout as displayed by the browser in normal flow.

Alternatively, you could use an online editor such as [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/).
If you use an online editor, you will need to upload the images and replace the values in the `src` attributes to point to the new image locations.

> **Note:** If you get stuck, you can reach out to us in one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

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

{{PreviousMenu("Learn/CSS/CSS_layout/Supporting_Older_Browsers", "Learn/CSS/CSS_layout")}}
