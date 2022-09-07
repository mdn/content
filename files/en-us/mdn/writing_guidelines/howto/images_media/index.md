---
title: How to add images and media
slug: MDN/Writing_guidelines/Howto/Images_media
tags:
  - meta
  - writing-guide
page-type: mdn-writing-guide
---
{{MDNSidebar}}

MDN Web Docs is not a very video-heavy site, but there are certain places where video content makes sense to use as part of an article.
This article discusses when including videos in articles is appropriate and provides tips on how to create simple but effective videos on a budget.

## Using video content

There are several arguments against using video content for technical documentation, particularly for reference material and advanced level guides. Some of these are listed below:

- Video is linear.
  People don't tend to read online documentation in a linear fashion, starting at the start and reading through to the end.
  _They scan._
  Video is really hard to scan — it forces the user to consume the content start-to-finish.
- Video is less information-dense than text.
  It takes longer to consume a video explaining something than it does to read the equivalent instructions.
- Video is big in terms of file size, and therefore, more expensive and less performant than text.
- Video has accessibility problems: it's more expensive to produce generally than text, but especially to localize, or make usable by screen reader users.
- Following on from the last point, video is much harder to edit/update/maintain than text content.

> **Note:** It's worth keeping these problems in mind even when you are making videos, so you can try to alleviate some of them.

There are many popular video sites that provide a lot of video tutorials.
MDN Web Docs isn't a video-driven site, but video does have a place on MDN Web Docs in certain contexts.

We tend to most commonly use video when describing some kind of instruction sequence or multi-step workflow that would be hard to describe concisely in words: _"do this, then do that, then this will happen"_.
It is especially useful when trying to describe processes that cross over multiple applications or windows and that include GUI interactions that might not be simple to describe: _"now click on the button near the top-left that looks a bit like a duck"_.

In such cases, it is often more effective to just **show** what you mean.
<!-- We most commonly use videos when explaining features of the [Firefox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/index.html).-->

## Guidelines for video content

Video content for MDN Web Docs should be:

- **Short**: Try to keep videos under 30 seconds, ideally under 20 seconds.
  This is short enough not to make big demands on readers' attention spans.
- **Simple**: Try to make the workflow simple, 2-4 distinct pieces.
  This makes them easier to follow.
- **Silent**: Audio makes videos much more engaging, but they are much more time-consuming to make.
  Also, having to explain what you're doing makes the videos much longer and adds to the costs (both financial and in terms of time) of localization.

To explain something more complex, you can use a blend of short videos and screenshots, interspersed with text.
The text can help reinforce the points made in the video, and the user can rely on the text or the video as they choose.
See [Working with the Animation Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#animation-inspector) for a good example.

In addition, you should consider the following tips:

- The video will end up being uploaded to YouTube before embedding.
  We recommend a 16:9 aspect ratio for this use, so that it fills up the entire viewing frame and you don't end up with ugly black bars on the top and bottom (or left and right) of your video.
  So for example, you might choose a resolution of 1024×576, 1152×648, or 1280×720.
- Record the video in HD, so that it looks better when uploaded.
- For DevTools videos, it is often a good idea to choose a contrasting theme to the page content. For example, choose the dark theme if the example webpage is light-themed. It is easier to see what is going on and where the DevTools start and the page ends.
- For DevTools videos, zoom in the DevTools as much as you can while still showing everything you want to show and making it look OK.
- Make sure the thing you are trying to demonstrate isn't covered up by the mouse cursor.
- Consider whether or not it would be useful to configure the screen recording tool to add a visual indicator of mouse clicks.

## Guidelines for video tools

You'll need a tool for recording the video.
These range from free to expensive and simple to complex.
If you are already experienced in creating video content, then great.
If not, then we'd recommend that you start with a simple tool and then work up to something more complex if you start to enjoy creating video content and want to create more interesting productions.

The following table provides some recommendations for good starter tools:

| Tool                      | OS                    | Cost   | Post-production features available? |
| ------------------------- | --------------------- | ------ | ----------------------------------- |
| Open Broadcaster Software | macOS, Windows, Linux | Free   | Yes                                 |
| CamStudio                 | Windows               | Free   | Limited                             |
| Camtasia                  | Windows, macOS        | High   | Yes                                 |
| QuickTime Player          | macOS                 | Free   | No, just allows simple recording    |
| ScreenFlow                | macOS                 | Medium | Yes                                 |
| Kazam                     | Linux                 | Free   | Minimal                             |

### QuickTime Player tips

If you are using macOS, you should have QuickTime Player available.
The recording steps using this tool are pretty simple:

1. Choose _File_ > _New Screen Recording_ from the main menu.
2. In the _Screen Recording_ box, hit the record button (the red round button).
3. Drag a rectangle round the area of the screen you want to record.
4. Press the _Start Recording_ button.
5. Perform whatever actions you want to record.
6. Press the _Stop_ button.
7. Choose _File_ > _Export As..._ > _1080p_ from the main menu to save as hi definition.

### Other resources

- [How to Add Custom Callouts to Screencast Videos in Screenflow](https://photography.tutsplus.com/tutorials/how-to-add-custom-callouts-to-screencast-videos-in-screenflow--cms-27122)

## Workflow for creating videos

The following subsections describe the general steps you'd want to follow to create a video and add it to an MDN Web Docs article.

### Preparing

First, plan the flow you want to capture: consider the best points to start and end.

Make sure the desktop background and your browser profile are clean.
Plan the size and positioning of browser windows, especially if you will be using multiple windows.

Plan carefully what you are actually going to record, and practice the steps a few times before recording them:

- Don't start a video in the middle of a process — consider whether the viewer will have enough context for your actions to make sense of them.
  In a short DevTools video for example, it is a good idea to start by opening the DevTools to allow the viewer to get oriented.
- Consider what your actions are, slow down, and make them obvious.
  Whenever you have to perform an action (say, click an icon), take it slow and make it obvious. So, for example:

  - Move the mouse over the icon.
  - Highlight or zoom (not always, depending on whether it feels needed).
  - Pause for a beat.
  - Click the icon.

- Plan zoom levels for the parts of the UI that you're going to show.
  Not everyone will be able to view your video in high definition.
  You will be able to zoom particular parts in post-production, but it's a good idea to zoom the app beforehand as well.

> **Note:** Don't zoom so far that the UIs you are showing start to look unfamiliar or ugly.

### Recording

When recording the workflow you want to show, go through the flow smoothly and steadily.
Pause for a second or two when you are at key moments — for example, when you're about to click a button.
Make sure the mouse pointer doesn't obscure any icons or text that are important to what you are trying to demonstrate.

Remember to pause for a second or two at the end to show the result of the flow.

> **Note:** If you are using a really simple tool like QuickTime Player and post production is not an option for some reason, you should get your windows set up in the right size to show the area you want to show. In the Firefox DevTools, you can use the [Rulers Tool](https://firefox-source-docs.mozilla.org/devtools-user/rulers/index.html) to make sure the viewport is at the right aspect ratio for the recording.

### Post-processing

You'll be able to highlight key moments in post-production.
A highlight can consist of a couple of things, which you'll often combine, like:

- Zoom in on parts of the screen.
- Fade the background.

Highlight key moments of the workflow, especially where the detail is hard to see: clicking on a particular icon or entering a particular URL, for example.
Aim for the highlight to last for 1-2 seconds.
It's a good idea to add a short transition (200-300 milliseconds) at the start and end of the highlights.

Use some restraint here: don't make the video a constant procession of zooming in and out, otherwise viewers will get seasick.

Crop the video to the desired aspect ratio, if required.

### Uploading

Videos currently have to be uploaded to YouTube to be displayed on MDN Web Docs, for example, to the [mozhacks](https://www.youtube.com/user/mozhacks/videos) channel.
Ask a member of MDN Web Docs team to upload the video if you don't have somewhere appropriate to put it.

> **Note:** Mark the video as "unlisted" if it doesn't make sense out of the context of the page (if it's a short video, then it probably doesn't).

### Embedding

Once uploaded, you can embed the video in the page using the [`EmbedYouTube`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedYouTube.ejs) macro.
This is used by inserting the following in your page at the position you want the video to appear:

```
\{{EmbedYouTube("you-tube-url-slug")}}
```

The single property taken by the macro call is the string of characters at the end of the video URL, not the whole URL.
For example, is the video URL is `https://www.youtube.com/watch?v=ELS2OOUvxIw`, the required macro call will be:

```
\{{EmbedYouTube("ELS2OOUvxIw")}}
```
