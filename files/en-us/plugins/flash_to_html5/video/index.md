---
title: Flash video to HTML5 video
slug: Plugins/Flash_to_HTML5/Video
tags:
  - Flash
  - HTML
  - Plugins
  - Video
---
This resource provides an outline of all the topics you need to know about to convert Flash video to native HTML, plus resources covering all the finer details.

## In a nutshell

HTML5 video is enabled through browser support for video and audio playback, Javascript extensions to control that playback, and ecosystem support for critical functions such as content protection and advertising.

> **Note:** Most of the processes described in the below articles talk about video, but audio content works in such a similar way that they are generally applicable to audio too.

## Planning

- [Planning your transition from Flash video to HTML5 video](/en-US/docs/Plugins/Flash_to_HTML5/Video/Planning)
  - : Transitioning from Flash to HTML can take several months and may require new skills and software. This guide shows you how to plan for that transition, and contains two main parts, [Content audit](/en-US/docs/Plugins/Flash_to_HTML5/Video/Planning#auditing_what_you_have) and [Decision points](/en-US/docs/Plugins/Flash_to_HTML5/Video/Planning#decision_points).

## Process

- [File format conversion](/en-US/docs/Plugins/Flash_to_HTML5/Video/File_format_conversion)
  - : Once you've planned out what you want to do, the first step is to convert your video files into formats compatible with HTML embedding.
- [DRM and authentication](/en-US/docs/Plugins/Flash_to_HTML5/Video/DRM_and_authentication)
  - : If your media requires authentication/rights to access, you'll need to work out how to hook up the necessary DRM and authentication mechanisms.
- [Video advertising](/en-US/docs/Plugins/Flash_to_HTML5/Video/Advertising)
  - : You may also want to incorporate advertising into your video delivery system, via an ad network.
- [Distribution](/en-US/docs/Plugins/Flash_to_HTML5/Video/Distribution)
  - : A CDN is a popular choice for effective delivery of media content.
- [Video and audio players](/en-US/docs/Plugins/Flash_to_HTML5/Video/Players)
  - : There are a number of ways to play back web media depending on the scale of your needs and whether you need ad integration and digital rights management.
- [Subtitles and closed captions](/en-US/docs/Plugins/Flash_to_HTML5/Video/Subtitles_captions)
  - : Just as audio and video may need transcoding for the web, subtitles and closed captions may also need to be converted and made available.

## API reference

- The {{htmlelement("video")}} and {{htmlelement("audio")}} elements
  - : The basic elements that allow embedding of media into web apps.
- {{domxref("HTMLMediaElement")}} API
  - : The `HTMLMediaElement` API provides all the functionality you'll need for implementing basic media controls, e.g. playing and pausing media, returning the current time elapsed, etc. See also {{domxref("HTMLVideoElement")}} and {{domxref("HTMLAudioElement")}}.
- [Encrypted Media Extensions API](/en-US/docs/Web/API/Encrypted_Media_Extensions_API)
  - : The Encrypted Media Extensions API provides interfaces for controlling the playback of content subject to a digital restrictions management scheme.
- [Media Source Extensions API](/en-US/docs/Web/API/Media_Source_Extensions_API)
  - : The Media Source Extensions API (MSE) provides functionality enabling plugin-free web-based streaming media. Using MSE, media streams can be created via JavaScript, and played using [`<audio>`](/en-US/docs/Web/HTML/Element/audio "The HTML <audio> element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element; the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream.") and [`<video>`](/en-US/docs/Web/HTML/Element/video "Use the HTML <video> element to embed video content in a document.") elements.
- [Credential Management API](/en-US/docs/Web/API/Credential_Management_API)
  - : The Credential Management API lets a website store and retrieve both user and federated credentials. These capabilities allow users to sign in without typing passwords, see the federated account they used to sign in to a site, and resume a session without the explicit sign-in flow of an expired session.

## Browser support

### Desktop

<table>
  <thead>
    <tr>
      <th>Browser</th>
      <th>MSE</th>
      <th> </th>
      <th>EME</th>
      <th> </th>
    </tr>
    <tr>
      <th> </th>
      <th>Browser Version</th>
      <th>Container Supported</th>
      <th>Browser Version</th>
      <th>DRM supported</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Chrome</td>
      <td>{{CompatChrome(23)}}</td>
      <td>mp4, WebM</td>
      <td>{{CompatChrome(42)}}</td>
      <td>Widevine</td>
    </tr>
    <tr>
      <td>Edge</td>
      <td>All versions</td>
      <td>mp4, m2ts</td>
      <td>All versions</td>
      <td>PlayReady (mp4 only)</td>
    </tr>
    <tr>
      <td>Firefox (Gecko)</td>
      <td>42</td>
      <td>mp4, WebM</td>
      <td>38 (Windows)</td>
      <td>Widevine</td>
    </tr>
    <tr>
      <td>Internet Explorer</td>
      <td>11</td>
      <td>mp4</td>
      <td>11 (Windows 8.1+)</td>
      <td>PlayReady</td>
    </tr>
    <tr>
      <td>Opera</td>
      <td>{{CompatOpera(30)}}</td>
      <td>WebM</td>
      <td>{{CompatOpera(32)}}</td>
      <td>Widevine</td>
    </tr>
    <tr>
      <td>Safari (Webkit)</td>
      <td>OS X Yosemite</td>
      <td>mp4, m2ts</td>
      <td>OS X Yosemite</td>
      <td>FairPlay (m2ts only)</td>
    </tr>
  </tbody>
</table>

### Mobile

<table>
  <thead>
    <tr>
      <th>Browser</th>
      <th>MSE</th>
      <th> </th>
      <th>EME</th>
      <th> </th>
    </tr>
    <tr>
      <th> </th>
      <th>Browser Version</th>
      <th>Container Supported</th>
      <th>Browser Version</th>
      <th>DRM supported</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Android Webview</td>
      <td>{{CompatNo}}</td>
      <td>{{CompatNo}}</td>
      <td>{{CompatNo}}</td>
      <td>{{CompatNo}}</td>
    </tr>
    <tr>
      <td>Chrome for Android</td>
      <td>{{CompatChrome(30)}}</td>
      <td>mp4, WebM</td>
      <td>{{CompatChrome(42)}}</td>
      <td>Widevine</td>
    </tr>
    <tr>
      <td>Edge Mobile</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Firefox Mobile (Gecko)</td>
      <td>41</td>
      <td>mp4, WebM</td>
      <td>{{CompatNo}}</td>
      <td>{{CompatNo}}</td>
    </tr>
    <tr>
      <td>IE Mobile</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Opera Mobile</td>
      <td>{{CompatOperaMobile(30)}}</td>
      <td>WebM</td>
      <td>{{CompatNo}}</td>
      <td>{{CompatNo}}</td>
    </tr>
    <tr>
      <td>Safari Mobile</td>
      <td>{{CompatNo}}</td>
      <td>{{CompatNo}}</td>
      <td>{{CompatNo}}</td>
      <td>{{CompatNo}}</td>
    </tr>
  </tbody>
</table>

## Getting help

If you find that our migration guide leaves you with any questions unanswered, please don't hesitate to visit our [MDN Discourse page](https://discourse.mozilla-community.org/c/mdn) and ask them there.
