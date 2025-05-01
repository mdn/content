---
title: Basic design theory
short-title: Basic theory
slug: Learn_web_development/Core/Design_for_developers/Basic_design_theory
page-type: tutorial-chapter
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core/Design_for_developers/User-centered_design", "Learn_web_development/Core/Design_for_developers")}}

This article helps you make a start on the fundamental design theory that it's useful to know when design web interfaces. You don't have to be a master design to make a difference — with a little bit of knowledge, you can create a much improved user experience through careful use of fonts, color, whitespace, alignment, images, etc.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Fundamental <a href="/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a> and <a href="/en-US/docs/Learn_web_development/Core/Styling_basics">CSS</a> basics.
      </td>
    </tr>
    <tr>
      <th scope="row">Learning outcomes:</th>
      <td>
        <ul>
          <li>UI design fundamentals.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## What is design, in brief?

If you read five different design books, you'll probably read five different definitions of **design**. There are many different aspects of design, including visual, usability and user experience, inclusivity/accessibility, communication, branding, and a lot more. We won't be able to cover anything close to the full spectrum of design knowledge in these three articles (we wouldn't if we had written thirty articles), but that's not the goal here.

The point of these articles is to give you a very basic introduction to design thinking, and impart some basic knowledge that you can use to make your web development output more effective. It is a primer of sorts, and you should find it helpful, even if you don't think of yourself as a designer at all. It might capture your interest and lead you down a path to finding out more about design — our main [See also section](/en-US/docs/Learn_web_development/Core/Design_for_developers#see_also) has plenty of nice resources for you to move on to!

Anyway, at its core, web design improves the experience of using websites. It makes sites more pleasent to look at, easier to read, more intuitive, and more effective at allowing users to do what they want to do (whether their goal is chatting to their friends, buying a birthday present, paying their taxes, etc.).

There are a whole host of different types of design work that go into creating a high-end professional website, the main ones being:

- Brand design and design systems work, which makes sure that the look and feel of a company's websites is consistent and provides templates, icons, and other resources to help enforce that look and feel across new websites and features.
- User experience design, which involves designing a website's workflow/experience so that the target audience's needs are met most effectively. This usually involves user research and creating wireframes/prototypes to communicate how a feature shouild work.
- Visual design, which involves designing the actual graphics for a website UI, taking a wireframe or prototype and producing a design from which a front-end developers can write the code for the final feature.

In this series of articles, we will mainly concentrate on visual design basics, and the techniques we can use to make websites look better. There's a lot of process and organization work involved is design, but we won't worry about that for now.

## Typography

Typography refers to the arrangement of text to create a pleasent and effective reading experience. This includes selecting the right font for the job, size and weight for the different pieces of text, line lengths, etc. In this section, we'll focus on a few typography fundamentals.

The mechanics of web typography — how to implement it using CSS — was covered in our [Fundamentals text and font styling](/en-US/docs/Learn_web_development/Core/Text_styling/Fundamentals) module. Refer back to that if you need to go over the basic code again.

### Choosing a font

Your choice of fonts has a major effect on the look and feel and pesonality of your website, so you need to choose something suitable:

- If you are creating a publication such as a online newspaper or encyclopedia, you should choose something that looks suitably serious and professional.
- If you are creating a children's website, you might want to use fonts that look a bit more fun and engaging.
- If you are creating an alternative music website, "grungy" or distressed fonts might be more suitable.

Also, as a general rule you should only use one, two, or maybe three fonts per website. Using lots of fonts will make your site look like a cluttered mess, and also cause it to take longer to download.

Let's look at an example that demonstrates the difference between such options:

```html hidden live-sample___font-choice
<h1>Amazing design choices</h1>
<p class="tagline">An exciting tagline to get you interested!</p>
<ul>
  <li><a href="#">Home</a></li>
  <li><a href="#">Products</a></li>
  <li><a href="#">Support</a></li>
  <li><a href="#">About</a></li>
</ul>

<h2>Subheading</h2>

<p>
  Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex
  sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis
  convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
  fringilla lacus nec metus bibendum egestas.
</p>

<p>
  Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper
  vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra
  inceptos himenaeos.
</p>

<h2>Another subheading</h2>

<p>
  Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex
  sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis
  convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
  fringilla lacus nec metus bibendum egestas.
</p>

<p>
  Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper
  vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra
  inceptos himenaeos.
</p>

<form id="font-selector-form">
  <label for="font-select">Choose a font style:</label>
  <select id="font-select">
    <option value="none">None</option>
    <option value="pro">Professional</option>
    <option value="fun">Fun</option>
    <option value="grunge">Grunge</option>
  </select>
</form>
```

```css hidden live-sample___font-choice
@import url("https://fonts.googleapis.com/css2?family=DynaPuff:wght@400..700&family=Fuzzy+Bubbles:wght@400;700&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Rubik+Glitch&family=Syne+Mono&display=swap");

* {
  box-sizing: border-box;
}

h1 {
  margin-bottom: 0;
}

ul {
  display: flex;
  justify-content: space-around;
  padding-left: 0;
}

li {
  list-style-type: none;
}

form {
  position: fixed;
  right: 15px;
  bottom: 5px;
  background-color: white;
  border: 1px solid rgb(0 0 0 / 0.4);
  padding: 10px;
}

.pro {
  font-family: "Newsreader", serif;
}

.fun {
  font-family: "Fuzzy Bubbles", sans-serif;
}

.fun h1,
.fun h2 {
  font-family: "DynaPuff", system-ui;
}

.grunge {
  font-family: "Syne Mono", monospace;
}

.grunge h1,
.grunge h2 {
  font-family: "Rubik Glitch", system-ui;
}
```

```js hidden live-sample___font-choice
const selectElem = document.querySelector("select");
selectElem.addEventListener("change", () => {
  document.body.className = selectElem.value;
});
```

{{EmbedLiveSample("font-choice", "100%", "400px")}}

Select the different options available in the {{htmlelement("select")}} element and note the difference in personality the different fonts give the text. What do they make you think of?

```html hidden live-sample___starter-files live-sample___font-size-weight live-sample___text-width live-sample___text-spacing
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Design starter file</title>
    <link href="style.css" rel="stylesheet" />
  </head>
  <body>
    <h1>Amazing design choices</h1>
    <p class="tagline">An exciting tagline to get you interested!</p>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">Support</a></li>
      <li><a href="#">About</a></li>
    </ul>

    <h2>Subheading</h2>

    <p>
      Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
      ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus
      duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar
      vivamus fringilla lacus nec metus bibendum egestas.
    </p>

    <p>
      Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit
      semper vel class aptent taciti sociosqu. Ad litora torquent per conubia
      nostra inceptos himenaeos.
    </p>

    <h2>Another subheading</h2>

    <p>
      Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
      ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus
      duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar
      vivamus fringilla lacus nec metus bibendum egestas.
    </p>

    <p>
      Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit
      semper vel class aptent taciti sociosqu. Ad litora torquent per conubia
      nostra inceptos himenaeos.
    </p>
  </body>
</html>
```

```css hidden live-sample___starter-files live-sample___font-size-weight live-sample___text-width live-sample___text-spacing live-sample___image-example live-sample___whitespace-example live-sample___color-example
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

h1 {
  margin-bottom: 0;
}

ul {
  display: flex;
  justify-content: space-around;
  padding-left: 0;
}

li {
  list-style-type: none;
}

form {
  position: fixed;
  right: 15px;
  bottom: 5px;
  background-color: white;
  border: 1px solid rgb(0 0 0 / 0.4);
  padding: 10px;
}

h1,
h2 {
  font-family: serif;
}
```

> [!CALLOUT]
>
> **Try it out**
>
> Now we'd like you to have a go at creating your own sample site to work through the design articles with! We'll also get you to choose some fonts and apply them to it.
>
> 1. Create a new folder in the same place as your other website projects called `design-work`. Inside it, create an `index.html` file and a `style.css` file.
> 2. Open the following live demo in the MDN Play editor by clicking the "Play" button in the top-right.
>    {{EmbedLiveSample("starter-files", "100%", "300px")}}
> 3. Copy all of the HTML into your `index.html` file, and all of the CSS into your `style.css` file.
> 4. Go to [Google Fonts](https://fonts.google.com/) and choose two fonts to use on your sample site, one for the general text font, and one for your headings. Think about the kind of style you want your site to have, and pick fonts that reflect this style and go together.
> 5. When you've chosen your two fonts, go to the [Selection](https://fonts.google.com/selection) page and click on the "Get embed code" button. It will give two different ways of embedding the Google fonts in your code — {{htmlelement("link")}} elements to put inside your HTML head, or an {{cssxref("@import")}} statement to put at the top of your CSS file (ignore the `<style></style>` tags). Use whichever one you'd prefer.
> 6. Using the {{cssxref("font-family")}} declarations provided by Google Fonts, apply your text font to the `<html>` element (`html { font-family: ... }`), and apply your heading font to your `<h1>` and `<h2>` elements (`h1, h2 { font-family: ... }`).
> 7. Save your code, open your HTML in a browser, and have a look at the results.

### Font size, style, and weight

With fonts chosen, the next thing to worry about is the {{cssxref("font-size")}} (how big the text is rendered), {{cssxref("font-style")}} (whether the text is italic or oblique), and {{cssxref("font-weight")}} (how heavy or "bold" the font is). Making good choices here helps improve the visual hierarchy of the page, drawing the user's attention to the main heading first, then the subheadings, then finally to the text they want to read. You might also want to make the navigation items stand out a bit, and increasing `font-size` is just one way to do this.

Without a good visual hierarchy in place, the page looks like one big unit of content, where nothing stands out, and it is hard for the user to decide what to look at first.

Taking into account what we've said above, the following CSS snippet makes the headings really bold and the paragraph text lighter (less bold) than normal. We've also made the tagline italic, and adjusted the font sizes so that the main heading is really big and an obvious initial focal point for the page, while the second-level headings are a bit bigger than normal text, and the navigation items are just slightly bigger.

```css live-sample___font-size-weight live-sample___text-width live-sample___text-spacing live-sample___image-example live-sample___whitespace-example live-sample___color-example
h1 {
  font-size: 3rem;
  font-weight: 800;
}

h2 {
  font-size: 1.5rem;
  font-weight: 800;
}

.tagline {
  font-style: italic;
}

p {
  font-weight: lighter;
}

li {
  font-size: 1.2rem;
}
```

This is the end result — note how there is more of an obvious visual hierarchy now.

{{EmbedLiveSample("font-size-weight", "100%", "300px")}}

> [!CALLOUT]
>
> **Try it out**
>
> It's your turn. Try adding the previous CSS to your example to see the difference it makes. You might want to adjust some of the values we provided to fit better with your choice of fonts.

### Line lengths

Another issue to tackle is that of line length — it is much harder to read long lines of text than short lines. The recommended line length for optimal reading is around 60–80 characters, depending on what articles you read on the subject. This is why newspapers and websites commonly split text content into multiple columns. In our case, we just have one simple line of text, so we'll just limit the width of our single column:

```css live-sample___text-width live-sample___text-spacing live-sample___image-example live-sample___whitespace-example live-sample___color-example
body {
  max-width: 550px;
  margin: 0 auto;
}
```

We've used {{cssxref("max-width")}} rather than {{cssxref("width")}} here, which has the advantage that the text will be limited to this width on wider screens, but will span `100%` of the width of narrow screens. We've also used a {{cssxref("margin")}} value of `0 auto` to make the `<body>` site in the center of the screen.

Adding the previous rule produces the following effect:

{{EmbedLiveSample("text-width", "100%", "300px")}}

> [!CALLOUT]
>
> **Try it out**
>
> Try adding the above rule to your own example, adjusting the width if you need to. Be careful not too make the width too narrow, otherwise your top-level heading will break across two lines, which is bad for readability.

### Line height

Another way to improve the readability of your body text is to add spacing between the lines (known as {{glossary("leading")}} in traditional print typography). In CSS, adding this spacing is achieved using the {{cssxref("line-height")}} property.

Try adding this rule to your CSS now:

```css live-sample___text-spacing live-sample___image-example live-sample___whitespace-example live-sample___color-example
p {
  line-height: 1.5;
}
```

Note the difference it makes in the readability of the text:

{{EmbedLiveSample("text-spacing", "100%", "300px")}}

## Use of images

If the web was just text, it would be very boring. Images are used everywhere on the web. Some images are content — they are part of the content the user is consuming. Other images are decorative — they can make the design look more fun or more informative (for example, icons), enhance brand recognition (with a recognizable company logo), or add texture (for example, background gradients or noise).

Too many images can make a site look cluttered and also make a website heavy to download, but just the right amount can greatly enhance a page's look and feel.

Let's add a couple of content images, a logo, and an icon to our site.

1. First, find a couple of content images that you want to add to your site, plus a logo and an icon (sites like [The Noun Project](https://thenounproject.com/) and [iconmonstr](https://iconmonstr.com/) are good places to find logos/icons). When you've found them, save them inside your `design-work` folder.
2. Next, add the content images to your HTML using {{htmlelement("img")}} elements, for example:

   ```html
   <img src="myImage.png" alt="a description of the image" />
   ```

   Add each one between a different pair of `<p>` elements. Make sure to include a description of your images in the `alt` attribute, so the content images are accessible to people using [assistive technology](/en-US/docs/Learn_web_development/Core/Accessibility/Tooling).

3. Add the following rule to the bottom of your CSS, to force the `<img>` elements to fit inside the `<body>`:

   ```css live-sample___image-example live-sample___whitespace-example live-sample___color-example
   img {
     max-width: 100%;
   }
   ```

4. Add the following rule to your CSS, to add the logo as a background image on your `<h1>` element:

   ```css live-sample___image-example live-sample___whitespace-example live-sample___color-example
   h1 {
     background: url("design-icon.png") no-repeat left 9px;
     background-size: 32px;
     padding-left: 44px;
   }
   ```

5. Add the following rule to your CSS, to add the icon as a background image on your `<h2>` elements:

   ```css live-sample___image-example live-sample___whitespace-example live-sample___color-example
   h2 {
     background: url("lightbulb-icon.png") no-repeat left top;
     background-size: 24px;
     padding-left: 32px;
   }
   ```

After following these steps, your page should render something like this:

```html hidden live-sample___image-example live-sample___whitespace-example live-sample___color-example
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Design starter file</title>
    <link href="style.css" rel="stylesheet" />
  </head>
  <body>
    <h1>Amazing design choices</h1>
    <p class="tagline">An exciting tagline to get you interested!</p>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">Support</a></li>
      <li><a href="#">About</a></li>
    </ul>

    <h2>Subheading</h2>

    <p>
      Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
      ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus
      duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar
      vivamus fringilla lacus nec metus bibendum egestas.
    </p>

    <img
      src="jungle-coast.jpg"
      alt="a view from a jungle to a coastal headland, with the ocean beyond" />

    <p>
      Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit
      semper vel class aptent taciti sociosqu. Ad litora torquent per conubia
      nostra inceptos himenaeos.
    </p>

    <h2>Another subheading</h2>

    <p>
      Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
      ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus
      duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar
      vivamus fringilla lacus nec metus bibendum egestas.
    </p>

    <img
      src="watery-view.jpg"
      alt="a view of a beach and some mountains across the sea" />

    <p>
      Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit
      semper vel class aptent taciti sociosqu. Ad litora torquent per conubia
      nostra inceptos himenaeos.
    </p>
  </body>
</html>
```

{{EmbedLiveSample("image-example", "100%", "300px")}}

> [!NOTE]
> Image credits:
>
> - [Design icon](https://thenounproject.com/icon/design-136378/) created by [Mon Aguilar](https://thenounproject.com/creator/themon/) and published on [The Noun Project](https://thenounproject.com/) under a [CC BY-3.0 Attribution License](https://creativecommons.org/licenses/by/3.0/).
> - [Lightbulb icon](https://thenounproject.com/icon/lightbulb-7518269/) created by [Asa Kharisma Dini](https://thenounproject.com/creator/diniasa528/) and published on [The Noun Project](https://thenounproject.com/) under a [CC BY-3.0 Attribution License](https://creativecommons.org/licenses/by/3.0/).

## Use of whitespace

Spacing out content makes it easier to read and more visually pleasing. It isn't something you think about when you browser the web, until you come across a website that doesn't employ good use of whitespace for content spacing. Such websites look cluttered and messy.

To get an idea of how important whitespace is for a website, try adding the following rule to your example website, which should get rid of most of the whitespace:

```css
* {
  padding: 0 !important;
  margin: 0 !important;
}
```

Remove it again before you move on.

> [!NOTE]
> As an extra exercise, you could try applying this rule to your favourite news or entertainment site using your [browser developer tools](/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools), to see how it looks!

Sensible use of whitespace is also good for separating out different groups of content. For example, the `<h1>` and the tagline are both parts of the page header, but they don't seem visually associated, while the navigation menu is a bit too close to the surrounding content.

Let's improve the layout by adding some whitespace. Add the following rules to bring the `<h1>` and tagline close together, and add a decent amount of space above and below the navigation menu, and increase the space above the `<h2>` and reduce the space below it, so that there is a more obvious separation between each document subsection.

```css live-sample___whitespace-example live-sample___color-example
.tagline {
  margin-top: 0;
}

ul {
  margin: 44px 0;
}

h2 {
  margin: 44px 0 8px;
}
```

Your updated site should now look like this:

{{EmbedLiveSample("whitespace-example", "100%", "300px")}}

## Using color

Effective use of color can make a big difference on websites — enhancing look and feel and brand recognition, and helping important content items to stand out (again, contributing to visual hierarchy).

There are a lot of articles out there on color theory, and we don't have space to provide a full treatment here; you can find a useful exploration of the most important color theory at [Color Theory 101: A Complete Color Guide](https://www.colorsexplained.com/color-theory/). See also [Using color wisely](/en-US/docs/Web/CSS/CSS_colors/Using_color_wisely).

Essentially, you should:

1. Choose a **base color** — the main color that is most important to your design.
2. Choose other colors that work well with this base color. There is a science to this — the other colors will sit at specific points around a [**color wheel**](https://www.colorsexplained.com/color-theory/#Color-Wheel-Theory), relative to the base color, depending on the [**color harmony**](https://www.colorsexplained.com/color-theory/#Color-Harmony) model you decide to use.
3. Use color sparingly, to highlight important parts of the content, or to enhance your visuals. Don't go to extremes with your paintbrush, otherwise you will end up with a site that looks garish, where nothing standards out because everything is colorful. This affects your visual hierarchy and makes the site harder to use.
4. Make sure that none of the colors you use result in your content having bad [contrast](/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast), which causes it to be harder to read, or completely inaccesible in the worst cases.

Let's make a few color adjustments to our design.

1. First of all, choose a couple of complementary colors.
   - If you have a base color in mind that you want to use, go to [Adobe Color](https://color.adobe.com/create/color-wheel), choose "Complementary" from the "Color Harmony" dropdown, then edit the first color swatch to equal your base color using its "Change Color" button. The other colors will change to equal colors that complement your base color.
   - If you don't have a base color in mind and just want to choose a couple of colors from a given palette, go to [coolors.co](https://coolors.co/) and use the palette generator to create a palette you like.
2. Copy the hex values for two complementary colors and save them somewhere safe.
3. Use the WebAIM [Color Contrast Checker](https://webaim.org/resources/contrastchecker/) to check whether your color choices have good contrast with white. For each color:

   1. Keep the background color as white (`FFFFFF`).
   2. Enter your color's hex code in the foreground color input field.
   3. Click or tab out of the field to run the test.
   4. Look at the results. If any of your colors fail the "WCAG AA" test for "Normal Text", then you should choose a different color.

4. Provided your colors are OK, go to your CSS file and add the following rule to give your headings a highlight color, substituting `<YOUR-FIRST-COLOR>` for the hex code of your first chosen color:

   ```css
   h1,
   h2 {
     color: #<YOUR-FIRST-COLOR>;
   }
   ```

5. Now we'll sort out the navigation items, once and for all. First, add the following rules, substituting `<YOUR-FIRST-COLOR>` for the hex code of your first chosen color and `<YOUR-SECOND-COLOR>` for the hex code of your second chosen color. Here we are giving the links a block of background color and removing their default underline so they look more like buttons, then setting the text to `white` so it is still readable. We also set {{cssxref(":hover")}}/{{cssxref(":focus")}} styles so that the links change color when hovered or tabbed to.

   ```css
   a {
     color: white;
     background-color: #<YOUR-SECOND-COLOR>;
     padding: 10px;
     display: block;
     text-align: center;
     text-decoration: none;
   }

   a:hover,
   a:focus {
     background-color: #<YOUR-FIRST-COLOR>;
   }
   ```

6. The last step we'll take is to make all the navigation items the same width and evenly spaced. Add the following rules to the bottom of your CSS. Your CSS already uses [flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout) to make the list items sit in a row; the {{cssxref("flex")}} property value of `1` makes them all take up the same amount of space, and the {{cssxref("gap")}} property puts a gap of `10px` in between each list item.

   ```css
   li {
     flex: 1;
   }

   ul {
     gap: 10px;
   }
   ```

Once you've saved your CSS and loaded the updated result in a browser, it should look something like this:

```css hidden live-sample___color-example
h1,
h2 {
  color: #9b5094;
}

a {
  color: white;
  background-color: #6a605c;
  padding: 10px;
  display: block;
  text-align: center;
  text-decoration: none;
}

a:hover,
a:focus {
  background-color: #9b5094;
}

li {
  flex: 1;
}

ul {
  gap: 10px;
}
```

{{EmbedLiveSample("color-example", "100%", "300px")}}

## Other concepts to explore

This article is long enough already, and there are other design concepts to explore! Some of these are implicitly covered in previous sections, and others have been covered elsewhere in the course, so we will provide a summary of these below. The aim here is to get you thinking about these concepts and how you might apply them to future website work.

- **Position**: You should position items in sensible places on the page so that they are easy to find, and effective. For example, a navigation menu should be near the top of the page, whereas a [Call to action](<https://en.wikipedia.org/wiki/Call_to_action_(marketing)>) such as a "Buy now!" button would be better placed at the bottom of the article or advert it is associated with.
- **Scale**: Consider the size of the different items on your page relative to one another, and adjust the sizes so that everything fits well together. In our example in this article, we made sure that the icons were not too big so that they overwhelmed the headings they are associated with, and we adjusted the heading size to make them stand out and improve the page's visual hierarchy.
- **Alignment**: In this article's example, one of the main reasons the design "works" is that all of the elements of the design — headings, navigation, paragraphs, images — are aligned to the edges of the vertical column, resulting in a layout that feels cohesive and neat. This is easy to achieve in a single column layout; in more complex layouts, there will be multiple columns and rows to align content to. Aligning to columns and rows is the basis of **grid design**, which you looked at in [CSS Grid Layout](/en-US/docs/Learn_web_development/Core/CSS_layout/Grids). When placing items on a grid, you should always think about setting their margins, padding, etc. consistently so that their content appears aligned. Otherwise the design will look messy and unprofessional.
- **Visual hierarchy**: We've mentioned this a few times above, so this point acts as a summary. Essentially, you should use position, alignment, scale, color, etc., to highlight the most important items you want to draw the user's eye to and create a hierarchy of importance as the user moves across and down the page.

## Summary

We've covered a lot in this article; you should now have a few design tools in your toolbelt to inform how you place and style items on a webpage, making everything look better in the process. You can always refer back to this article later on if you need to review anything.

## See also

- [Applying color to HTML elements using CSS](/en-US/docs/Web/CSS/CSS_colors/Applying_color)
- [Fundamentals text and font styling](/en-US/docs/Learn_web_development/Core/Text_styling/Fundamentals)

{{PreviousMenuNext("Learn_web_development/Core/Design_for_developers", "Learn_web_development/Core/Design_for_developers/User-centered_design", "Learn_web_development/Core/Design_for_developers")}}
