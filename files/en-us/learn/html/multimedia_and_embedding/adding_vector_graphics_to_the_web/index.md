---
title: Adding vector graphics to the web
slug: Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web
tags:
  - Beginner
  - Graphics
  - Guide
  - HTML
  - Images
  - Learn
  - Raster
  - SVG
  - Vector
  - iframe
  - img
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies", "Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}

Vector graphics are very useful in many circumstances — they have small file sizes and are highly scalable, so they don't pixelate when zoomed in or blown up to a large size. In this article we'll show you how to include one in your webpage.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        You should know the
        <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML">basics of HTML</a>
        and how to
        <a href="/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML"
          >insert an image into your document</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>Learn how to embed an SVG (vector) image into a webpage.</td>
    </tr>
  </tbody>
</table>

> **Note:** This article doesn't intend to teach you SVG; just what it is, and how to add it to web pages.

## What are vector graphics?

On the web, you'll work with two types of images — **raster images**, and **vector images**:

- **Raster images** are defined using a grid of pixels — a raster image file contains information showing exactly where each pixel is to be placed, and exactly what color it should be. Popular web raster formats include Bitmap (`.bmp`), PNG (`.png`), JPEG (`.jpg`), and GIF (`.gif`.)
- **Vector images** are defined using algorithms — a vector image file contains shape and path definitions that the computer can use to work out what the image should look like when rendered on the screen. The {{glossary("SVG")}} format allows us to create powerful vector graphics for use on the Web.

To give you an idea of the difference between the two, let's look at an example. You can find this example live on our GitHub repo as [vector-versus-raster.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) — it shows two seemingly identical images side by side, of a red star with a black drop shadow. The difference is that the left one is a PNG, and the right one is an SVG image.

The difference becomes apparent when you zoom in the page — the PNG image becomes pixelated as you zoom in because it contains information on where each pixel should be (and what color). When it is zoomed, each pixel is increased in size to fill multiple pixels on screen, so the image starts to look blocky. The vector image however continues to look nice and crisp, because no matter what size it is, the algorithms are used to work out the shapes in the image, with the values being scaled as it gets bigger.

![Two star images](raster-vector-default-size.png)

![Two star images zoomed in, one crisp and the other blurry](raster-vector-zoomed.png)

> **Note:** The images above are actually all PNGs — with the left-hand star in each case representing a raster image, and the right-hand star representing a vector image. Again, go to the [vector-versus-raster.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) demo for a real example!

Moreover, vector image files are much lighter than their raster equivalents, because they only need to hold a handful of algorithms, rather than information on every pixel in the image individually.

## What is SVG?

[SVG](/en-US/docs/Web/SVG) is an {{glossary("XML")}}-based language for describing vector images. It's basically markup, like HTML, except that you've got many different elements for defining the shapes you want to appear in your image, and the effects you want to apply to those shapes. SVG is for marking up graphics, not content. At the simplest end of the spectrum, you've got elements for creating simple shapes, like {{svgelement("circle")}} and {{svgelement("rect")}}. More advanced SVG features include {{svgelement("feColorMatrix")}} (transform colors using a transformation matrix,) {{svgelement("animate")}} (animate parts of your vector graphic,) and {{svgelement("mask")}} (apply a mask over the top of your image.)

As a simple example, the following code creates a circle and a rectangle:

```html
<svg version="1.1"
     baseProfile="full"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="black" />
  <circle cx="150" cy="100" r="90" fill="blue" />
</svg>
```

This creates the following output:

{{ EmbedLiveSample('What_is_SVG', 300, 240, "", "") }}

From the example above, you may get the impression that SVG is easy to handcode. Yes, you can handcode simple SVG in a text editor, but for a complex image this quickly starts to get very difficult. For creating SVG images, most people use a vector graphics editor like [Inkscape](https://inkscape.org/) or [Illustrator](https://en.wikipedia.org/wiki/Adobe_Illustrator). These packages allow you to create a variety of illustrations using various graphics tools, and create approximations of photos (for example Inkscape's Trace Bitmap feature.)

SVG has some additional advantages besides those described so far:

- Text in vector images remains accessible (which also benefits your {{glossary("SEO")}}).
- SVGs lend themselves well to styling/scripting, because each component of the image is an element that can be styled via CSS or scripted via JavaScript.

So why would anyone want to use raster graphics over SVG? Well, SVG does have some disadvantages:

- SVG can get complicated very quickly, meaning that file sizes can grow; complex SVGs can also take significant processing time in the browser.
- SVG can be harder to create than raster images, depending on what kind of image you are trying to create.
- SVG is not supported in older browsers, so may not be suitable if you need to support older versions of Internet Explorer with your web site (SVG started being supported as of IE9.)

Raster graphics are arguably better for complex precision images such as photos, for the reasons described above.

> **Note:** In Inkscape, save your files as Plain SVG to save space. Also, please refer to this [article describing how to prepare SVGs for the Web](http://tavmjong.free.fr/INKSCAPE/MANUAL/html/Web-Inkscape.html).

## Adding SVG to your pages

In this section we'll go through the different ways in which you can add SVG vector graphics to your web pages.

### The quick way: `img` element

To embed an SVG via an {{htmlelement("img")}} element, you just need to reference it in the src attribute as you'd expect. You will need a `height` or a `width` attribute (or both if your SVG has no inherent aspect ratio). If you have not already done so, please read [Images in HTML](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML).

```html
<img
    src="equilateral.svg"
    alt="triangle with all three sides equal"
    height="87"
    width="100" />
```

#### Pros

- Quick, familiar image syntax with built-in text equivalent available in the `alt` attribute.
- You can make the image into a hyperlink easily by nesting the `<img>` inside an {{htmlelement("a")}} element.
- The SVG file can be cached by the browser, resulting in faster loading times for any page that uses the image loaded in the future.

#### Cons

- You cannot manipulate the image with JavaScript.
- If you want to control the SVG content with CSS, you must include inline CSS styles in your SVG code. (External stylesheets invoked from the SVG file take no effect.)
- You cannot restyle the image with CSS pseudoclasses (like `:focus`).

### Troubleshooting and cross-browser support

For browsers that don't support SVG (IE 8 and below, Android 2.3 and below), you could reference a PNG or JPG from your `src` attribute and use a {{htmlattrxref("srcset", "img")}} attribute (which only recent browsers recognize) to reference the SVG. This being the case, only supporting browsers will load the SVG — older browsers will load the PNG instead:

```html
<img src="equilateral.png" alt="triangle with equal sides" srcset="equilateral.svg">
```

You can also use SVGs as CSS background images, as shown below. In the below code, older browsers will stick with the PNG that they understand, while newer browsers will load the SVG:

```css
background: url("fallback.png") no-repeat center;
background-image: url("image.svg");
background-size: contain;
```

Like the `<img>` method described above, inserting SVGs using CSS background images means that the SVG can't be manipulated with JavaScript, and is also subject to the same CSS limitations.

If your SVGs aren't showing up at all, it might be because your server isn't set up properly. If that's the problem, this [article will point you in the right direction](/en-US/docs/Web/SVG/Tutorial/Getting_Started#a_word_on_webservers).

### How to include SVG code inside your HTML

You can also open up the SVG file in a text editor, copy the SVG code, and paste it into your HTML document — this is sometimes called putting your **SVG inline**, or **inlining SVG**. Make sure your SVG code snippet begins with an `<svg>` start tag and ends with an `</svg>` end tag. Here's a very simple example of what you might paste into your document:

```html
<svg width="300" height="200">
    <rect width="100%" height="100%" fill="green" />
</svg>
```

#### Pros

- Putting your SVG inline saves an HTTP request, and therefore can reduce a bit your loading time.
- You can assign `class`es and `id`s to SVG elements and style them with CSS, either within the SVG or wherever you put the CSS style rules for your HTML document. In fact, you can use any [SVG presentation attribute](/en-US/docs/Web/SVG/Attribute#presentation_attributes) as a CSS property.
- Inlining SVG is the only approach that lets you use CSS interactions (like `:focus`) and CSS animations on your SVG image (even in your regular stylesheet.)
- You can make SVG markup into a hyperlink by wrapping it in an {{htmlelement("a")}} element.

#### Cons

- This method is only suitable if you're using the SVG in only one place. Duplication makes for resource-intensive maintenance.
- Extra SVG code increases the size of your HTML file.
- The browser cannot cache inline SVG as it would cache regular image assets, so pages that include the image will not load faster after the first page containing the image is loaded.
- You may include fallback in a {{svgelement("foreignObject")}} element, but browsers that support SVG still download any fallback images. You need to weigh whether the extra overhead is really worthwhile, just to support obsolescent browsers.

### How to embed an SVG with an `iframe`

You can open SVG images in your browser just like webpages. So embedding an SVG document with an `<iframe>` is done just like we studied in [From \<object> to \<iframe> — other embedding technologies](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies).

Here's a quick review:

```html
<iframe src="triangle.svg" width="500" height="500" sandbox>
    <img src="triangle.png" alt="Triangle with three unequal sides" />
</iframe>
```

This is definitely not the best method to choose:

#### Cons

- `iframe`s do have a fallback mechanism, as you can see, but browsers only display the fallback if they lack support for `iframe`s altogether.
- Moreover, unless the SVG and your current webpage have the same {{glossary('origin')}}, you cannot use JavaScript on your main webpage to manipulate the SVG.

## Active Learning: Playing with SVG

In this active learning section we'd like you to have a go at playing with some SVG for fun. In the _Input_ section below you'll see that we've already provided you with some samples to get you started. You can also go to the [SVG Element Reference](/en-US/docs/Web/SVG/Element), find out more details about other toys you can use in SVG, and try those out too. This section is all about practising your research skills, and having some fun.

If you get stuck and can't get your code working, you can always reset it using the _Reset_ button.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;">
</div>

<h2>Editable code</h2>
<p class="a11y-label">Press Esc to move focus away from the code area (Tab inserts a tab character).</p>

<textarea id="code" class="input" style="width: 95%;min-height: 200px;">
  <svg width="100%" height="100%">
    <rect width="100%" height="100%" fill="red" />
    <circle cx="100%" cy="100%" r="150" fill="blue" stroke="black" />
    <polygon points="120,0 240,225 0,225" fill="green"/>
    <text x="50" y="100" font-family="Verdana" font-size="55"
          fill="white" stroke="black" stroke-width="2">
            Hello!
    </text>
  </svg>
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset">
  <input id="solution" type="button" value="Show solution" disabled>
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
const textarea = document.getElementById('code');
const reset = document.getElementById('reset');
const solution = document.getElementById('solution');
const output = document.querySelector('.output');
let code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener('click', function() {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = 'Show solution';
  updateCode();
});

solution.addEventListener('click', function() {
  if (solution.value === 'Show solution') {
    textarea.value = solutionEntry;
    solution.value = 'Hide solution';
  } else {
    textarea.value = userEntry;
    solution.value = 'Show solution';
  }
  updateCode();
});

const htmlSolution = '';
let solutionEntry = htmlSolution;

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function(e){
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret('\t');
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;
  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(textarea.selectionEnd, textarea.value.length);

  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function(){
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === 'Show solution') {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_Learning_Playing_with_SVG', 700, 540) }}

## Summary

This article has provided you with a quick tour of what vector graphics and SVG are, why they are useful to know about, and how to include SVG inside your webpages. It was never intended to be a full guide to learning SVG, just a pointer so you know what SVG is if you meet it in your travels around the Web. So don't worry if you don't feel like you are an SVG expert yet. We've included some links below that might help you if you wish to go and find out more about how it works.

In the last article of this module, we'll explore [responsive images](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) in detail, looking at the tools HTML has to allow you to make your images work better across different devices.

## See also

- [SVG tutorial](/en-US/docs/Web/SVG/Tutorial/Getting_Started) on MDN
- [Quick tips for responsive SVGs](https://thenewcode.com/744/Making-SVG-Responsive)
- [Sara Soueidan's tutorial on responsive SVG images](https://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/)
- [Accessibility benefits of SVG](https://www.w3.org/TR/SVG-access/)
- [SVG Properties and CSS](https://css-tricks.com/svg-properties-and-css/)
- [How to scale SVGs](https://css-tricks.com/scale-svg/) (it's not as simple as raster graphics!)

{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies", "Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}

## In this module

- [Images in HTML](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
- [Video and audio content](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [From \<object> to \<iframe> — other embedding technologies](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)
- [Adding vector graphics to the Web](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)
- [Responsive images](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [Mozilla splash page](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page)
