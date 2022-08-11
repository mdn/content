---
title: What HTML features promote accessibility?
slug: Learn/Common_questions/HTML_features_for_accessibility
tags:
  - Accessibility
  - Beginner
  - HTML
  - Learn
---


The following content describes specific features of HTML that should be used to make a web page more accessible to people with different disabilities.

## Link text

If you have a link that isn't self-descriptive, or the link destination could benefit from being explained in more detail, you can add information to a link using the [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) or [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) attributes.

```html
<p>I'm really bad at writing link text. <a href="inept.html" aria-label="Why I'm rubbish at writing link text: An explanation and an apology.">Click here</a> to find out more.</p>
<p>I'm really <span id="incompetence">bad at writing link text</span>. <a href="inept.html" aria-labelledby="incompetence">Click here</a> to find out more.</p>
```

Note that, most of the time, it is better to instead write useful link text:

```html
<p>I wrote a <a href="capable.html">blog post about how good I am at writing link text</a>.</p>
```

## Skip Links

To aid tabbing, you can supply links that allow users to jump over chunks of your web page. You might want to allow someone to jump over a plethora of navigation links that are found on every page. This enables keyboard users to quickly tab over repeated content and go directly to the page's main content:

```html
<header>
  <h1>The Heading</h1>
  <a href="#content">Skip to content</a>
</header>

<nav>
  <!-- navigation stuff -->
</nav>

<section id="content">
  <!--your content -->
</section>
```

## Alt attribute for image

Every image should have an `alt` attribute. If the image is purely decoration and adds no meaning to the content or context of the document, the alt attribute should be present, but empty. You can optionally also add [`role="presentation"`](/en-US/docs/Web/Accessibility/ARIA/Role/Presentation/). All other images should include an `alt` attribute providing alternative text describing the image in a way that is helpful to users who can read the rest of the content but can't see the image. Think about how you would describe the image to someone who can't load your image: that's the information you should include as the value of the `alt` attribute.

```html
<!-- decorative image -->
<img alt="" src="blueswish.png" role="presentation"/>
<img alt="The Open Web Docs logo: Carle the inch worm smiling" src="carle.svg" role="img"/>
```

The `alt` attribute for the same content may vary depending on the context. In the following example, an animated gif is used instead of a progress bar to show the page load progress for a document teaching developers how to use the HTML [`<progress>`](/en-US/docs/Web/HTML/Element/progress) element:

```html
<img alt="20% complete" src="load-progress.gif">
<img alt="The progress bar is a thick green square to the left of the thumb and a thin grey line to the right. The thumb is a circle with a diameter the height of the green area." src="screenshot-progressbar.png"/>
```

## ARIA role attribute

By default, all semantic elements in HTML have a `role`; for example, `<input type="radio">` has the `radio` role. Non-semantic elements in HTML do not have a role. ARIA roles can be used to describe elements that don't natively exist in HTML, such as a [`tablist`](/en-US/docs/Web/Accessibility/ARIA/Roles/tablist_role) widget. Roles are also helpful for newer elements that exist but don't yet have full browser support. For example, when using SVG images, add  `role="img"` to the opening tag, as there is an [SVG VoiceOver bug](https://bugs.webkit.org/show_bug.cgi?id=216364) whereby VoiceOver does not correctly announce SVG images.

```html
 <img src="mdn.svg" alt="MDN logo" role="img">
```
