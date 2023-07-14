---
title: Handling media support issues in web content
slug: Web/Media/Formats/Support_issues
page-type: guide
---

One of the realities of working with audio and video presentation and manipulation on the web is that there are a number of media formats available, of varying degrees of popularity and with a variety of capabilities. The availability of choices is good for the user, in that they can choose the format that suits their needs best. There is a drawback, however: because there are so many to choose from, with so many different kinds of licenses and design principles involved, each web browser developer is left to its own devices when deciding which media file types and codecs to support.

This places a small, but reasonably easily overcome, burden on the web developer: to properly handle the situation when the user's browser can't handle a particular type of media. This guide covers techniques you can use to develop web content that meets your media needs while providing the most broadly compatible experience possible. Topics we will examine fallbacks, baseline media formats, and error handling practices that will let your content work in as many situations as possible.

## Using poster frames

A **poster frame** is a still image that's representative of the content of a video. This may be the first frame of video; however, in many cases, the first frame is blank, or contains nothing but the logo of a business, or some other image that doesn't give the reader any context for the video's contents.

A good poster frame is one which is either a representative of the video's contents, or is an image which isn't even from the video itself but contains imagery and/or text which gives the reader a useful idea of the video's contents. In the case of an action movie, for example, the poster frame might be an iconic exemplar image from one of the film's best-known scenes.

A similar concept can be applied to still images; if an image you wish to present is very large and may take time to download (especially for slower devices or connections), you can offer a lower-resolution or alternate version that will be displayed until the full-quality version is available to be displayed.

We'll look at both of these scenarios and how to implement them.

### Poster frames for video

### Progressive images

Images—whether embedded using {{HTMLElement("img")}} or {{HTMLElement("picture")}}—don't support a concept similar to poster frames. However, there are ways to present an image in low quality while it's still loading. This requires creating your images using **progressive** formats, such as progressive {{Glossary("JPEG")}} or interlaced {{Glossary("PNG")}}.

Once your image has been converted to progressive form, you can use it as usual.

```html
<img
  src="/images/staff-photo-huge-progressive.jpg"
  alt="Staff Photo, taken in January of 1972" />
```

When using a progressive image, the data is stored in such a way that the browser is able to render a low-quality representation of the image as soon as possible, then update the image as it loads—or after it's finished loading—to present it in full quality.

> **Note:** Progressive (or interlaced) images are inherently slightly larger than the non-progressive versions of the same images. Whether the interlacing will benefit your users is up to you to determine.

## Specifying multiple sources

## Checking compatibility in JavaScript

{{domxref("HTMLMediaElement.canPlayType")}} and {{domxref("MediaSource.isTypeSupported")}}…

## Detecting playback errors

## Adapting presentation with CSS

## Memory management
