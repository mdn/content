---
title: "Test your skills: Audio and video"
short-title: "Test: Audio and video"
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Audio_and_video
page-type: learn-module-assessment
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content")}}

The aim of this skill test is to help you assess whether you understand how to [embed video and audio content in HTML](/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio).

> [!NOTE]
> To get help, read our [Test your skills](/en-US/docs/Learn_web_development#test_your_skills) usage guide. You can also reach out to us using one of our [communication channels](/en-US/docs/MDN/Community/Communication_channels).

## Task 1

In this task, we want you to embed an audio file onto the page.

To complete this task:

1. Add the path to the audio file to an appropriate attribute to embed it on the page. The audio is called `audio.mp3`, and it available at a path of `https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/audio.mp3`.
2. Add an attribute to make browsers display some default controls.

```html live-sample___audio-1
<h1>Basic audio embed</h1>

<audio></audio>
```

<!-- Shared styles -->

```css hidden live-sample___video-1 live-sample___audio-1
body {
  background-color: white;
  color: #333333;
  font:
    1em / 1.4 Helvetica Neue,
    Helvetica,
    Arial,
    sans-serif;
  padding: 1em;
  margin: 0;
}

* {
  box-sizing: border-box;
}

audio,
video {
  border: 1px solid black;
}
```

{{ EmbedLiveSample('audio-1', "100%", 150) }}

<details>
<summary>Click here to show the solution</summary>

Your finished HTML should look like this:

```html
<h1>Basic audio embed</h1>

<audio
  controls
  src="https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/audio.mp3"></audio>
```

</details>

## Task 2

In this task, we want you to mark up a slightly more complex video player, with multiple sources, subtitles, and other features besides.

To complete this task:

1. Add an attribute to make browsers display some default controls.
2. Add multiple sources, containing the paths to the video files. The files are called `video.mp4` and `video.webm`, and are available at the following paths:
   1. `https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/video.mp4`
   2. `https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/video.webm`
3. Let the browser know in advance what video formats the sources point to, so it can make an informed choice of which one to download ahead of time.
4. Give the `<video>` a width and height equal to its intrinsic size (320 by 240 pixels).
5. Make the video muted by default.
6. Display the text tracks contained in the `media` folder, in a file called `https://raw.githubusercontent.com/mdn/learning-area/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/subtitles_en.vtt`, when the video is playing. You must explicitly set the type as subtitles, and the subtitle language to English.
7. Make sure the readers can identify the subtitle language when they use the default controls.

```html live-sample___video-1
<h1>Video embed</h1>

<video></video>
```

{{EmbedLiveSample('video-1', "100%", 300)}}

<details>
<summary>Click here to show the solution</summary>

Your finished HTML should look like this:

```html
<h1>Video embed</h1>

<video controls width="320" height="240" muted>
  <source
    src="https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/video.mp4"
    type="video/mp4" />
  <source
    src="https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/video.webm"
    type="video/webm" />
  <track
    kind="subtitles"
    src="https://raw.githubusercontent.com/mdn/learning-area/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/subtitles_en.vtt"
    srclang="en"
    label="English" />
</video>
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_video_and_audio", "Learn_web_development/Core/Structuring_content/Splash_page", "Learn_web_development/Core/Structuring_content")}}
