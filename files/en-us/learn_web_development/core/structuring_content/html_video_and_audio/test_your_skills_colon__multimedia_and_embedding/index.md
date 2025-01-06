---
title: "Test your skills: Multimedia and embedding"
slug: Learn_web_development/Core/Structuring_content/HTML_video_and_audio/Test_your_skills:_Multimedia_and_embedding
page-type: learn-module-assessment
---

{{learnsidebar}}

The aim of this skill test is to assess whether you understand how to [embed video and audio content in HTML](/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio).

> [!NOTE]
> You can try solutions in the interactive editors on this page or in an online editor such as [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/).
>
> If you get stuck, you can reach out to us in one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## Task 1

In this task, we want you to embed an audio file onto the page. You need to:

- Add the path to the audio file to an appropriate attribute to embed it on the page. The audio is called `audio.mp3`, and it is in a folder inside the current folder called `media`.
- Add an attribute to make browsers display some default controls.
- Add some appropriate fallback text for browsers that don't support `<audio>`.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/tasks/media-embed/mediaembed1.html", '100%', 700)}}

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/media-embed/mediaembed1-download.html) to work in your own editor or in an online editor.

## Task 2

In this task, we want you to mark up a slightly more complex video player, with multiple sources, subtitles, and other features besides. You need to:

- Add an attribute to make browsers display some default controls.
- Add some appropriate fallback text for browsers that don't support `<video>`.
- Add multiple sources, containing the paths to the video files. The files are called `video.mp4` and `video.webm`, and are in a folder inside the current folder called `media`.
- Let the browser know in advance what video formats the sources point to, so it can make an informed choice of which one to download ahead of time.
- Give the `<video>` a width and height equal to its intrinsic size (320 by 240 pixels).
- Make the video muted by default.
- Display the text tracks contained in the `media` folder, in a file called `subtitles_en.vtt`, when the video is playing. You must explicitly set the type as subtitles, and the subtitle language to English.
- Make sure the readers can identify the subtitle language when they use the default controls.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/tasks/media-embed/mediaembed2.html", '100%', 700)}}

> [!CALLOUT]
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/media-embed/mediaembed2-download.html) to work in your own editor or in an online editor.
