---
title: HTMLAudioElement.msAudioDeviceType
slug: Web/API/HTMLAudioElement/msAudioDeviceType
page-type: web-api-instance-property
tags:
  - msAudioDeviceType
---
{{APIRef("Audio element")}}

{{Non-standard_header()}}

The **`msAudioDeviceType`** property of the HTML [\<audio>](/en-US/docs/Web/HTML/Element/audio) element, is a read/write proprietary attribute, specific to Internet Explorer and Microsoft Edge.

**`msAudioDeviceType`** specifies the output device id that the audio will be sent to.

## Syntax

```html
<audio src="sound.mp3" msAudioDeviceType="Communications" />
```

By default, audio on your system will output to your default speakers and be considered a foreground element, meaning that the audio will play only when the element is active in the app. For real-time communications, you can use the `msAudioDeviceType` property with the value `Console`, `Multimedia`, or `Communications` to specify where the current audio should output.

## Value

Include a description of the property's value, including data type and what it represents.

| Value          | Description                                                                |
| -------------- | -------------------------------------------------------------------------- |
| Console        | Specifies that the audio output will be sent to the console device.        |
| Multimedia     | Specifies that the audio output will be sent to the multimedia device.     |
| Communications | Specifies that the audio output will be sent to the communications device. |

## See also

- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_Extensions)
