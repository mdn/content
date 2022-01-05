---
title: Mapping the width and height attributes of media container elements to their
  aspect-ratio
slug: Web/Media/images/aspect_ratio_mapping
tags:
  - CSS
  - Images
  - aspect ratio
  - height
  - jank
  - responsive
  - width
---
This article explains a change that has occurred in the way sizes are worked out on web documents when width and height attributes are set on them.

This change means that the aspect ratio of the image is calculated by the browser early on and can then be used to correct the size needed to display the image before it has loaded, if CSS has been applied that causes problems with its display size. Read on to find out more.

## Jank problems when loading images

In the olden days of web development, it was always seen as a good practice to add `width` and `height` attributes to your HTML {{htmlelement("img")}} elements, so that when browsers first loaded the page, they could put a correctly-sized placeholder box in the layout for each image to appear in when it finally loads.

![Two screenshots the first without an image but with space reserved, the second showing the image loaded into the reserved space.](ar-guide.jpg)

Without the `width` and `height` attributes, no placeholder space would be created, and when the image finally loaded you would get a noticeable jank in the page layout. This wasn't an attractive thing for your users to see, and could also result in performance issues due to the repainting required after each image loads, hence adding the attributes being a good idea.

Let’s move forward a few years to the era of responsive design. To keep images from breaking out of their containers when the container becomes narrower than the image, developers started using CSS like the following:

```css
img {
  max-width: 100%;
  height: auto;
}
```

This is really useful for responsive layouts, but unfortunately it causes the jank problem to return — the above CSS overrides the width and height attribute information, meaning that if the image has not loaded for some reason, its height will be set to 0. When the image finally loads, the same jank will occur as the page layout is shifted to make space for it.

## A new way of sizing images before loading completes

Recognizing the problem, a WICG community group formed to propose an [`intrinsicsize`](https://github.com/WICG/intrinsicsize-attribute) attribute. Folks from Mozilla then expanded on this thinking, working on a proposal in the CSS [Box Sizing Level 4](https://drafts.csswg.org/css-sizing-4/) draft to define an `aspect-ratio` property and propose the idea of using the `width` and `height` attributes to compute layout. Fantasai & Jen Simmons collaborated with Emilio, who worked on an experimental implementation to prove it would work.

Mozilla then [brought the idea up in the WICG community group](https://github.com/WICG/intrinsicsize-attribute/issues/16) and discussed it further until representatives from Chrome were onboard with the idea.

Due to this work, browsers have implemented a mechanism for sizing images before the actual image is loaded.
The {{cssxref("aspect-ratio")}} property that applies to replaced elements, and other related elements that accept `width` and `height` attributes.
This appears in the browser's internal UA stylesheet, similar to the following:

```css
img, input[type="image"], video, embed, iframe, marquee, object, table {
  aspect-ratio: attr(width) / attr(height);
}
```

This actually affects any element that acts as a container for complex or mixed visual media — {{htmlelement("embed")}}, {{htmlelement("iframe")}}, {{htmlelement("marquee")}}, {{htmlelement("object")}}, {{htmlelement("table")}}, and {{htmlelement("video")}}, in addition to actual images ({{htmlelement("img")}} and `<input type="image">`). When such an element has `width` and `height` attributes set on it, its aspect ratio will be calculated before load time, and be available to the browser.

> **Note:** Currently on Firefox this effect is being limited to actual `<img>` elements, as applying to other such elements may have undesirable results. See ({{bug(1583980)}}).

When the `width`/`height` of an `<img>` element — as set using HTML attributes — is overridden using CSS using something like this:

```css
img {
  max-width: 100%;
  height: auto;
}
```

The aspect ratio is then used to calculate the height and therefore the correct size is applied to the `<img>` element, meaning that the aforementioned jank will not occur when the image loads.

## It only works before the image loads

The new mechanism currently only works on `<img>` elements before the image is loaded.

Originally we were going to have the new mechanism apply the calculated sizing to `<img>` elements before and after the image has loaded. However, this caused a problem — a number of web sites actually use the `width` and `height` attributes incorrectly, setting an aspect ratio of something other than the image’s intrinsic aspect ratio.

Once such an image loads, if the internal aspect ratio is still applied it will result in the `<img>` not displaying the image correctly. Therefore, once the image is loaded, we start using the intrinsic aspect ratio of the loaded image rather than the aspect ratio from the attributes, so it displays at the correct aspect ratio.

## Summary

So there you have it — eliminating another piece of jank from web layout!
There is no need for a web developer to do anything special to their code to take advantage of this, besides returning to the habit of using `width` and `height` attributes in their HTML. They'll just get it for free.

## See also

- [Designing an aspect ratio unit for CSS](https://www.smashingmagazine.com/2019/03/aspect-ratio-unit-css/)
- [Setting Height And Width On Images Is Important Again](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/)
