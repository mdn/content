---
title: Mozilla splash page
slug: Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page
page-type: learn-module-assessment
---

{{LearnSidebar}}{{PreviousMenu("Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}

In this assessment, we'll test your knowledge of some of the techniques discussed in this module's articles, getting you to add some images and video to a funky splash page all about Mozilla!

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
        To test knowledge around embedding images and video in web pages,
        frames, and HTML responsive image techniques.
      </td>
    </tr>
  </tbody>
</table>

## Starting point

To start off this assessment, you need to grab the HTML and all the images available in the [mdn-splash-page-start](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/mdn-splash-page-start) directory on GitHub. Save the contents of [index.html](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/mdn-splash-page-start/index.html) in a file called `index.html` on your local drive, in a new directory. Then save [pattern.png](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/mdn-splash-page-start/pattern.png) in the same directory (right click on the image to get an option to save it.)

Access the different images in the [originals](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/mdn-splash-page-start/originals) directory and save them in the same way; you'll want to save them in a different directory for now, as you'll need to manipulate (some of) them using a graphics editor before they're ready to be used.

Alternatively, you could use an online tool such as [Glitch](https://glitch.com/) to create your example. This would also be useful if you want to get it assessed, or ask for help — see the [Assessment or further help](#assessment_or_further_help) section at the bottom of this page.

> **Note:** The example HTML file contains quite a lot of CSS, to style the page. You don't need to touch the CSS, just the HTML inside the {{htmlelement("body")}} element — as long as you insert the correct markup, the styling will make it look correct.

## Project brief

In this assessment we are presenting you with a mostly-finished Mozilla splash page, which aims to say something nice and interesting about what Mozilla stands for, and provide some links to further resources. Unfortunately, no images or video have been added yet — this is your job! You need to add some media to make the page look nice and make more sense. The following subsections detail what you need to do:

### Preparing images

Using your favorite image editor, create 400px wide and 120px wide versions of:

- `firefox_logo-only_RGB.png`
- `firefox-addons.jpg`
- `mozilla-dinosaur-head.png`

Call them something sensible, e.g. `firefoxlogo400.png` and `firefoxlogo120.png`.

Along with `mdn.svg`, these images will be your icons to link to further resources, inside the `further-info` area. You'll also link to the Firefox logo in the site header. Save copies of all these inside the same directory as `index.html`.

Next, create a 1200px wide landscape version of `red-panda.jpg`, and a 600px wide portrait version that shows the panda in more of a close up shot. Again, call them something sensible so you can easily identify them. Save a copy of both of these inside the same directory as `index.html`.

> **Note:** You should optimize your JPG and PNG images to make them as small as possible, while still looking OK. [tinypng.com](https://tinypng.com/) is a great service for doing this easily.

### Adding a logo to the header

Inside the {{htmlelement("header")}} element, add an {{htmlelement("img")}} element that will embed the small version of the Firefox logo in the header.

### Adding a video to the main article content

Just inside the {{htmlelement("article")}} element (right below the opening tag), embed the YouTube video found at <https://www.youtube.com/watch?v=ojcNcvb1olg>, using the appropriate YouTube tools to generate the code. The video should be 400px wide.

### Adding responsive images to the further info links

Inside the {{htmlelement("div")}} with the class of `further-info` you will find four {{htmlelement("a")}} elements — each one linking to an interesting Mozilla-related page. To complete this section you'll need to insert an {{htmlelement("img")}} element inside each one containing appropriate [`src`](/en-US/docs/Web/HTML/Element/img#src), [`alt`](/en-US/docs/Web/HTML/Element/img#alt), [`srcset`](/en-US/docs/Web/HTML/Element/img#srcset) and [`sizes`](/en-US/docs/Web/HTML/Element/img#sizes) attributes.

In each case (except one — which one is inherently responsive?) we want the browser to serve the 120px wide version when the viewport width is 500px wide or less, or the 400px wide version otherwise.

Make sure you match the correct images with the correct links!

> **Note:** To properly test the `srcset`/`sizes` examples, you'll need to upload your site to a server (using [GitHub pages](/en-US/docs/Learn/Common_questions/Tools_and_setup/Using_GitHub_pages) is an easy and free solution), then from there you can test whether they are working properly using browser developer tools such as the Firefox [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html).

### An art directed red panda

Inside the {{htmlelement("div")}} with the class of `red-panda`, we want to insert a {{htmlelement("picture")}} element that serves the small portrait panda image if the viewport is 600px wide or less, and the large landscape image otherwise.

## Hints and tips

- You can use the [W3C Nu HTML Checker](https://validator.w3.org/nu/) to catch mistakes in your HTML.
- You don't need to know any CSS to do this assessment; you just need the provided HTML file. The CSS part is already done for you.
- The provided HTML (including the CSS styling) already does most of the work for you, so you can just focus on the media embedding.

## Example

The following screenshots show what the splash page should look like after being correctly marked up, on a wide and narrow screen display.

![A wide shot of our example splash page](wide-shot.png)

![A narrow shot of our example splash page](narrow-shot.png)

## Assessment or further help

If you would like your work assessed or are stuck and want to ask for help:

1. Put your work into an online shareable editor such as [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/). Glitch is probably better for this example, as it allows you upload assets like images, whereas some of the other tools don't.
2. Write a post asking for assessment and/or help at the [MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn/250). Your post should include:

   - A descriptive title such as "Assessment wanted for Mozilla splash page".
   - Details of what you have already tried and what you would like us to do; for example, tell us if you're stuck and need help or want an assessment.
   - A link to the example you want assessed or need help with, in an online shareable editor (as mentioned in step 1 above). This is a good practice to get into — it's very hard to help someone with a coding problem if you can't see their code.
   - A link to the actual task or assessment page, so we can find the question you want help with.

{{PreviousMenu("Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}
