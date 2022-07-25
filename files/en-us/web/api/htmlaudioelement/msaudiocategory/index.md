---
title: HTMLAudioElement.msAudioCategory
slug: Web/API/HTMLAudioElement/msAudioCategory
page-type: web-api-instance-property
---
{{APIRef("Audio element")}}

{{Non-standard_header()}}

The **`msAudioCategory`** property of the HTML [\<audio>](/en-US/docs/Web/HTML/Element/audio) element, is a read/write proprietary attribute, specific to Internet Explorer and Microsoft Edge.

**`msAudioCategory`** specifies the purpose of the audio or video media, such as background audio or alerts.

## Syntax

```html
<audio controls="controls" msaudiocategory="BackgroundCapableMedia">  </audio>
```

The `msAudioCategory` property offers a variety of values that can enhance the behavior of your audio-aware app.

Note that you must set the `msAudioCategory` before setting the [`src`](/en-US/docs/Web/HTML/Element/audio) property in code.

## Value

Include a description of the property's value, including data type and what it represents.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Value</th>
      <th scope="col">Description</th>
      <th scope="col">Background Capable?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alert</td>
      <td>
        Looping or longer running alert sounds:
        <ul>
          <li>Alarms</li>
          <li>Ring tones</li>
          <li>Ringing notification</li>
          <li>Sounds that need to attenuate existing audio</li>
        </ul>
      </td>
      <td>No</td>
    </tr>
    <tr>
      <td>BackgroundCapableMedia</td>
      <td>
        For audio that needs to continue playing in the background. Examples
        include the following local media playback scenarios:
        <ul>
          <li>Local playlist</li>
          <li>Streaming radio</li>
          <li>Streaming playlist</li>
          <li>Music videos</li>
          <li>Streaming audio/radio, YouTube, Netflix, etc.</li>
        </ul>
      </td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Communications</td>
      <td>
        For streaming communication audio such as the following:
        <ul>
          <li>VOIP</li>
          <li>Real time chat or other type of phone calls</li>
        </ul>
        Should not be used in non-real-time or non-communication scenarios, such
        as audio and/or video playback, as playback startup latency is affected.
        *Note that if <code>msAudioCategory</code> is set to
        <em>Communications</em>,
        <a href="/en-US/docs/Web/API/MsRealTime">msRealtime</a> is automatically
        set to true.
      </td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>ForeGroundOnlyMedia</td>
      <td>
        <ul>
          <li>
            Games or other sounds designed only to work in the foreground, but
            will mute existing background media sounds.
          </li>
          <li>
            Game audio needed for the game experience (dancing games, music
            games)
          </li>
          <li>
            Feature films (designed to pause when they go to the background)
          </li>
        </ul>
      </td>
      <td>No</td>
    </tr>
    <tr>
      <td>GameEffects</td>
      <td>
        <ul>
          <li>Game sound effects designed to mix with existing audio</li>
          <li>Characters talking</li>
          <li>All non-music sounds</li>
        </ul>
      </td>
      <td>No</td>
    </tr>
    <tr>
      <td>GameMedia</td>
      <td>Background music played by a game</td>
      <td>No</td>
    </tr>
    <tr>
      <td>SoundEffects</td>
      <td>
        <ul>
          <li>
            Game or other sound effects designed to mix with existing audio:
          </li>
          <li>Characters talking</li>
          <li>Beeps, dings, brief sounds</li>
        </ul>
      </td>
      <td>No</td>
    </tr>
    <tr>
      <td>Other</td>
      <td>
        Default audio type, and recommended for all audio media that does not
        need to continue playing in the background.
      </td>
      <td>No</td>
    </tr>
  </tbody>
</table>

If [`msAudioDeviceType`](/en-US/docs/Web/API/HTMLAudioElement/msAudioDeviceType) is not explicitly set, `msAudioDeviceType` will be set to _Communications_.

For hardware audio offload to be automatically applied, the audio category must be set to _ForegroundOnlyMedia_ or _BackgroundCapableMedia_. Hardware audio offload optimizes audio rendering which can improve functionality and battery life.

## Example

```html
<audio msAudioCategory="BackgroundCapableMedia" controls="controls">
  <source src="song.mp3"/>
</audio>
```
