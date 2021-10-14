---
title: Using images in HTML
slug: Web/Media/images
tags:
  - HTML
  - Images
  - Landing
  - Media
---
The {{Glossary("HTML")}} {{HTMLElement("img")}} element lets you embed images into an HTML document, while the {{HTMLElement("picture")}} element enables [responsive images](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images). In this guide you'll find links to resources that deal with adding images to websites.

## References

These articles cover some of the HTML elements and CSS properties that are used to control how images are displayed on the web.

### HTML

- {{HTMLElement("img")}}
  - : The **HTML `<img>` element** is used to embed an image in a webpage. It supports a wide range of attributes that control how the image behaves and allows you to add important information like {{htmlattrxref("alt", "img")}} text for people who don't see the image.
- {{HTMLElement("picture")}}
  - : The **HTML `<picture>` element** contains zero or more {{HTMLElement("source")}} elements and one {{HTMLElement("img")}} element which provides versions of an image for different display/device scenarios. The browser considers each child `<source>` element and chooses the best match among them.

### CSS

- {{cssxref("object-fit")}}
  - : The **`object-fit`** [CSS](/en-US/docs/Web/CSS) property sets how the content of a [replaced element](/en-US/docs/Web/CSS/Replaced_element), such as an [`<img>`](/en-US/docs/Web/HTML/Element/img "The HTML <img> element embeds an image into the document.") or [`<video>`](/en-US/docs/Web/HTML/Element/video "The HTML Video element (<video>) embeds a media player which supports video playback into the document. You can use <video> for audio content as well, but the <audio> element may provide a more appropriate user experience."), should be resized to fit its container.
- {{cssxref("object-position")}}
  - : The **`object-position`** [CSS](/en-US/docs/Web/CSS) property specifies the alignment of content in a selected [replaced element](/en-US/docs/Web/CSS/Replaced_element) within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.
- {{cssxref("background-image")}}
  - : The **`background-image`** [CSS](/en-US/docs/Web/CSS) property sets one or more background images for an element.

## Guides

These articles provide guidance on selecting and configuring image types.

- [Image file type and format guide](/en-US/docs/Web/Media/Formats/Image_types)
  - : A guide to the various image file types commonly supported by web browsers including details about their individual use cases, capabilities, and compatibility factors. Additionally, this article provides guidance for selecting the best image file type for a given situation.
- [Mapping the width and height attributes of media container elements to their aspect-ratio](/en-US/docs/Web/Media/images/aspect_ratio_mapping)
  - : This changes how browsers load images so their aspect ratios are calculated by the browser early on and can later be used to correct the display size of an image before it's loaded.

## Other topics

Related topics that may be of interest.

- [Learn HTML: Responsive Images](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
  - : In this article, we'll learn about the concept of responsive images — images that work well on devices with widely differing screen sizes, resolutions, and other such features — and look at what tools HTML provides to help implement them.
