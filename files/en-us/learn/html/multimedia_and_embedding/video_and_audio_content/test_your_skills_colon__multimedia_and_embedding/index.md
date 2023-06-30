---
title: "Test your skills: Multimedia and embedding"
slug: Learn/HTML/Multimedia_and_embedding/Video_and_audio_content/Test_your_skills:_Multimedia_and_embedding
page-type: learn-module-assessment
---

{{learnsidebar}}

The aim of this skill test is to assess whether you understand how to [embed video and audio content in HTML](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content), also using [object, iframe and other embedding technologies](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies).

> **Note:** You can try out solutions in the interactive editors below. However, it may be helpful to download the code and use an online tool such as [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/) to work on the tasks.
>
> If you get stuck, then ask us for help — see the [Assessment or further help](#assessment_or_further_help) section at the bottom of this page.

## Task 1

In this task, we want you to embed a simple audio file onto the page. You need to:

- Add the path to the audio file to an appropriate attribute to embed it on the page. The audio is called `audio.mp3`, and it is in a folder inside the current folder called `media`.
- Add an attribute to make browsers display some default controls.
- Add some appropriate fallback text for browsers that don't support `<audio>`.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/tasks/media-embed/mediaembed1.html", '100%', 700)}}

> **Callout:**
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

> **Callout:**
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/media-embed/mediaembed2-download.html) to work in your own editor or in an online editor.

## Task 3

In this task, we want you to:

- Embed a PDF into the page. The PDF is called `mypdf.pdf`, and is contained in the `media` folder.
- Go to a sharing site like YouTube or Google Maps, and embed a video or other media item into the page.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/html/multimedia-and-embedding/tasks/media-embed/mediaembed3.html", '100%', 700)}}

> **Callout:**
>
> [Download the starting point for this task](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/media-embed/mediaembed3-download.html) to work in your own editor or in an online editor.

## Assessment or further help

You can practice these examples in the Interactive Editors mentioned above.

If you would like your work assessed or are stuck and want to ask for help:

1. Put your work into an online shareable editor such as [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/). You can write the code yourself or use the starting point files linked to in the above sections.
2. Write a post asking for assessment and/or help at the [MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn/250). Your post should include:

   - A descriptive title such as "Assessment wanted for multimedia and embedding skill test 1".
   - Details of what you have already tried and what you would like us to do; for example, tell us if you're stuck and need help or want an assessment.
   - A link to the example you want assessed or need help with, in an online shareable editor (as mentioned in step 1 above). This is a good practice to get into — it's very hard to help someone with a coding problem if you can't see their code.
   - A link to the actual task or assessment page, so we can find the question you want help with.
