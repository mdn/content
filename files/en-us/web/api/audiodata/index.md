---
title: AudioData
slug: Web/API/AudioData
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - AudioData
  - Experimental
browser-compat: api.AudioData
---
{{APIRef("WebCodecs API")}}{{SeeCompatTable}}

The **`AudioData`** interface of the [WebCodecs API](/en-US/docs/Web/API/WebCodecs_API) represents an audio sample.

`AudioData` is a {{glossary("Transferable objects","transferable object")}}.

## Description

An audio track consists of a stream of audio samples, each sample representing a captured moment of sound. An `AudioData` object is a representation of such a sample. Working alongside the interfaces of the [Insertable Streams API](/en-US/docs/Web/API/Insertable_Streams_for_MediaStreamTrack_API), you can break a stream into individual `AudioData` objects with {{domxref("MediaStreamTrackProcessor")}}, or construct an audio track from a stream of frames with {{domxref("MediaStreamTrackGenerator")}}.

> **Note:** Find out more about audio on the web in [Digital audio concepts](/en-US/docs/Web/Media/Formats/Audio_concepts).

### The media resource

An `AudioData` object contains a reference to an attached **media resource**. This media resource contains the actual audio sample data described by the object. A media resource is maintained by the user agent until it is no longer referenced by an `AudioData` object, for example when {{domxref("AudioData.close()")}} is called.

### Planes and audio format

To return the sample format of an `AudioData` use the {{domxref("AudioData.format")}} property. The format may be described as **interleaved** or **planar**. In interleaved formats, the audio samples from the different channels are laid out in a single buffer, described as a **plane**. This plane contains a number of elements equal to {{domxref("AudioData.numberOfFrames")}} * {{domxref("AudioData.numberOfChannels")}}.

In planar format, the number of planes is equal to {{domxref("AudioData.numberOfChannels")}}, and each plane is a buffer containing a number of elements equal to {{domxref("AudioData.numberOfFrames")}}.

## Constructor

- {{domxref("AudioData.AudioData", "AudioData()")}} {{Experimental_Inline}}
  - : Creates a new `AudioData` object.

## Properties

- {{domxref("AudioData.format")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the sample format of the audio.
- {{domxref("AudioData.sampleRate")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the sample rate of the audio in Hz.
- {{domxref("AudioData.numberOfFrames")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the number of frames.
- {{domxref("AudioData.numberOfChannels")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the number of audio channels.
- {{domxref("AudioData.duration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the duration of the audio in microseconds.
- {{domxref("AudioData.timestamp")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the timestamp of the audio in microseconds.

## Methods

- {{domxref("AudioData.allocationSize()")}} {{Experimental_Inline}}
  - : Returns the number of bytes required to hold the sample as filtered by options passed into the method.
- {{domxref("AudioData.copyTo()")}} {{Experimental_Inline}}
  - : Copies the samples from the specified plane of the `AudioData` object to the destination.
- {{domxref("AudioData.clone()")}} {{Experimental_Inline}}
  - : Creates a new `AudioData` object with reference to the same media resource as the original.
- {{domxref("AudioData.close()")}} {{Experimental_Inline}}
  - : Clears all states and releases the reference to the media resource.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
