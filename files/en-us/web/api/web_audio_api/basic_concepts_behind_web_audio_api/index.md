---
title: Basic concepts behind Web Audio API
slug: Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API
tags:
  - Audio
  - Beginner
  - Guide
  - Introduction
  - Media
  - Web Audio
  - Web Audio API
  - concepts
  - sound
---
This article explains some of the audio theory behind how the features of the Web Audio API work, to help you make informed decisions while designing how audio is routed through your app.

It won't turn you into a master sound engineer, but it will give you enough background to understand why the Web Audio API works like it does.

## Audio graphs

The [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) involves handling audio operations inside an [audio context](/en-US/docs/Web/API/AudioContext), and has been designed to allow **modular routing**. Basic audio operations are performed with **audio nodes**, which are linked together to form an **audio routing graph**. Several sources — with different types of channel layout — are supported even within a single context. This modular design provides the flexibility to create complex audio functions with dynamic effects.

Audio nodes are linked via their inputs and outputs, forming a chain that starts with one or more sources, goes through one or more nodes, then ends up at a destination. Although, you don't have to provide a destination if you, say, just want to visualize some audio data. A simple, typical workflow for web audio would look something like this:

1. Create the audio context.
2. Inside the context, create sources — such as {{HTMLElement("audio")}}, oscillator, or stream.
3. Create effects nodes, such as reverb, biquad filter, panner, or compressor.
4. Choose the final destination for the audio, such as the user's computer speakers.
5. Establish connections from the audio sources through zero or more effects, eventually ending at the chosen destination.

> **Note:** The number of audio channels available on a signal is frequently presented in a numeric format, such as 2.0 or 5.1. This is called {{interwiki("wikipedia", "Surround_sound#Channel_notation", "channel notation")}}. The first number is the number of full frequency range audio channels that the signal includes. The number after the period indicates the number of those channels which are reserved for low-frequency effect (LFE) outputs; these are often referred to as **subwoofers**.

![A simple box diagram with an outer box labeled Audio context, and three inner boxes labeled Sources, Effects and Destination. The three inner boxes have arrow between them pointing from left to right, indicating the flow of audio information.](webaudioapi_en.svg)

Each input or output is composed of one or more audio **channels,** which together represent a specific audio layout. Any discrete channel structure is supported, including _mono_, _stereo_, _quad_, _5.1_, and so on.

![Show the ability of AudioNodes to connect via their inputs and outputs and the channels inside these inputs/outputs.](mdn.png)

Audio sources can be obtained in a number of ways:

- Sound can be generated directly in JavaScript by an audio node (such as an oscillator).
- Created from raw PCM data (the audio context has methods to decode supported audio formats).
- Taken from HTML media elements (such as {{HTMLElement("video")}} or {{HTMLElement("audio")}}).
- Taken directly from a [WebRTC](/en-US/docs/Web/API/WebRTC_API) {{domxref("MediaStream")}} (such as a webcam or microphone).

## Audio data: what's in a sample

When an audio signal is processed, **sampling** means the conversion of a [continuous signal](https://en.wikipedia.org/wiki/Continuous_signal) to a [discrete signal](https://en.wikipedia.org/wiki/Discrete_signal); or put another way, a continuous sound wave, such as a band playing live, is converted to a sequence of samples (a discrete-time signal) that allow a computer to handle the audio in distinct blocks.

A lot more information can be found on the Wikipedia page [Sampling (signal processing)](https://en.wikipedia.org/wiki/Sampling_%28signal_processing%29).

## Audio buffers: frames, samples and channels

An {{ domxref("AudioBuffer") }} takes as its parameters a number of channels (1 for mono, 2 for stereo, etc), a length, meaning the number of sample frames inside the buffer, and a sample rate, which is the number of sample frames played per second.

A sample is a single float32 value that represents the value of the audio stream at each specific point in time, in a specific channel (left or right, if in the case of stereo). A frame, or sample frame, is the set of all values for all channels that will play at a specific point in time: all the samples of all the channels that play at the same time (two for a stereo sound, six for 5.1, etc.)

The sample rate is the number of those samples (or frames, since all samples of a frame play at the same time) that will play in one second, measured in Hz. The higher the sample rate, the better the sound quality.

Let's look at a Mono and a Stereo audio buffer, each is one second long, and playing at 44100Hz:

- The Mono buffer will have 44100 samples, and 44100 frames. The `length` property will be 44100.
- The Stereo buffer will have 88200 samples, but still 44100 frames. The `length` property will still be 44100 since it's equal to the number of frames.

![A diagram showing several frames in an audio buffer in a long line, each one containing two samples, as the buffer has two channels, it is stereo.](sampleframe-english.png)

When a buffer plays, you will hear the left most sample frame, and then the one right next to it, etc. In the case of stereo, you will hear both channels at the same time. Sample frames are very useful, because they are independent of the number of channels, and represent time, in a useful way for doing precise audio manipulation.

> **Note:** To get a time in seconds from a frame count, divide the number of frames by the sample rate. To get a number of frames from a number of samples, divide by the channel count.

Here's a couple of simple examples:

```js
var context = new AudioContext();
var buffer = context.createBuffer(2, 22050, 44100);
```

> **Note:** In [digital audio](https://en.wikipedia.org/wiki/Digital_audio), **44,100 [Hz](https://en.wikipedia.org/wiki/Hertz)** (alternately represented as **44.1 kHz**) is a common [sampling frequency](https://en.wikipedia.org/wiki/Sampling_frequency). Why 44.1kHz?
>
> Firstly, because the [hearing range](https://en.wikipedia.org/wiki/Hearing_range) of human ears is roughly 20 Hz to 20,000 Hz. Via the [Nyquist–Shannon sampling theorem](https://en.wikipedia.org/wiki/Nyquist%E2%80%93Shannon_sampling_theorem), the sampling frequency must be greater than twice the maximum frequency one wishes to reproduce. Therefore, the sampling rate has to be greater than 40 kHz.
>
> Secondly, signals must be [low-pass filtered](https://en.wikipedia.org/wiki/Low-pass_filter "Low-pass filter") before sampling, otherwise [aliasing](https://en.wikipedia.org/wiki/Aliasing) occurs. While an ideal low-pass filter would perfectly pass frequencies below 20 kHz (without attenuating them) and perfectly cut off frequencies above 20 kHz, in practice a [transition band](https://en.wikipedia.org/wiki/Transition_band) is necessary, where frequencies are partly attenuated. The wider this transition band is, the easier and more economical it is to make an [anti-aliasing filter](https://en.wikipedia.org/wiki/Anti-aliasing_filter). The 44.1 kHz sampling frequency allows for a 2.05 kHz transition band.

If you use this call above, you will get a stereo buffer with two channels, that when played back on an AudioContext running at 44100Hz (very common, most normal sound cards run at this rate), will last for 0.5 seconds: 22050 frames/44100Hz = 0.5 seconds.

```js
var context = new AudioContext();
var buffer = context.createBuffer(1, 22050, 22050);
```

If you use this call, you will get a mono buffer with just one channel), that when played back on an AudioContext running at 44100Hz, will be automatically _resampled_ to 44100Hz (and therefore yield 44100 frames), and last for 1.0 second: 44100 frames/44100Hz = 1 second.

> **Note:** Audio resampling is very similar to image resizing. Say you've got a 16 x 16 image, but you want it to fill a 32x32 area. You resize (or resample) it. The result has less quality (it can be blurry or edgy, depending on the resizing algorithm), but it works, with the resized image taking up less space. Resampled audio is exactly the same: you save space, but in practice you will be unable to properly reproduce high frequency content, or treble sound.

### Planar versus interleaved buffers

The Web Audio API uses a planar buffer format. The left and right channels are stored like this:

```
LLLLLLLLLLLLLLLLRRRRRRRRRRRRRRRR (for a buffer of 16 frames)
```

This is very common in audio processing: it makes it easy to process each channel independently.

The alternative is to use an interleaved buffer format:

```
LRLRLRLRLRLRLRLRLRLRLRLRLRLRLRLR (for a buffer of 16 frames)
```

This format is very common for storing and playing back audio without much processing, for example a decoded MP3 stream.

The Web Audio API exposes **only** planar buffers, because it's made for processing. It works with planar, but converts the audio to interleaved when it is sent to the sound card for playback. Conversely, when an MP3 is decoded, it starts off in interleaved format, but is converted to planar for processing.

## Audio channels

Different audio buffers contain different numbers of channels: from the more basic mono (only one channel) and stereo (left and right channels), to more complex sets like quad and 5.1, which have different sound samples contained in each channel, leading to a richer sound experience. The channels are usually represented by standard abbreviations detailed in the table below:

| Name     | Channels                                                                                           |
| -------- | -------------------------------------------------------------------------------------------------- |
| _Mono_   | `0: M: mono`                                                                                       |
| _Stereo_ | `0: L: left 1: R: right`                                                                           |
| _Quad_   | `0: L: left 1: R: right 2: SL: surround left 3: SR: surround right`                                |
| _5.1_    | `0: L: left 1: R: right 2: C: center 3: LFE: subwoofer 4: SL: surround left 5: SR: surround right` |

### Up-mixing and down-mixing

When the number of channels doesn't match between an input and an output, up- or down-mixing happens according the following rules. This can be somewhat controlled by setting the {{domxref("AudioNode.channelInterpretation")}} property to `speakers` or `discrete`:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Interpretation</th>
      <th scope="col">Input channels</th>
      <th scope="col">Output channels</th>
      <th scope="col">Mixing rules</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="13" scope="row"><code>speakers</code></th>
      <td><code>1</code> <em>(Mono)</em></td>
      <td><code>2</code> <em>(Stereo)</em></td>
      <td>
        <em>Up-mix from mono to stereo</em>.<br />The <code>M</code> input
        channel is used for both output channels (<code>L</code> and
        <code>R</code>).<br /><code
          >output.L = input.M<br />output.R = input.M</code
        >
      </td>
    </tr>
    <tr>
      <td><code>1</code> <em>(Mono)</em></td>
      <td><code>4</code> <em>(Quad)</em></td>
      <td>
        <em>Up-mix from mono to quad.</em><br />The <code>M</code> input channel
        is used for non-surround output channels (<code>L</code> and
        <code>R</code>). Surround output channels (<code>SL</code> and
        <code>SR</code>) are silent.<br /><code
          >output.L = input.M<br />output.R = input.M<br />output.SL = 0<br />output.SR
          = 0</code
        >
      </td>
    </tr>
    <tr>
      <td><code>1</code> <em>(Mono)</em></td>
      <td><code>6</code> <em>(5.1)</em></td>
      <td>
        <em>Up-mix from mono to 5.1.</em><br />The <code>M</code> input channel
        is used for the center output channel (<code>C</code>). All the others
        (<code>L</code>, <code>R</code>, <code>LFE</code>, <code>SL</code>, and
        <code>SR</code>) are silent.<br /><code
          >output.L = 0<br />output.R = 0</code
        ><br /><code
          >output.C = input.M<br />output.LFE = 0<br />output.SL = 0<br />output.SR
          = 0</code
        >
      </td>
    </tr>
    <tr>
      <td><code>2</code> <em>(Stereo)</em></td>
      <td><code>1</code> <em>(Mono)</em></td>
      <td>
        <em>Down-mix from stereo to mono</em>.<br />Both input channels (<code
          >L</code
        >
        and <code>R</code>) are equally combined to produce the unique output
        channel (<code>M</code>).<br /><code
          >output.M = 0.5 * (input.L + input.R)</code
        >
      </td>
    </tr>
    <tr>
      <td><code>2</code> <em>(Stereo)</em></td>
      <td><code>4</code> <em>(Quad)</em></td>
      <td>
        <em>Up-mix from stereo to quad.</em><br />The <code>L</code> and
        <code>R </code>input channels are used for their non-surround respective
        output channels (<code>L</code> and <code>R</code>). Surround output
        channels (<code>SL</code> and <code>SR</code>) are silent.<br /><code
          >output.L = input.L<br />output.R = input.R<br />output.SL = 0<br />output.SR
          = 0</code
        >
      </td>
    </tr>
    <tr>
      <td><code>2</code> <em>(Stereo)</em></td>
      <td><code>6</code> <em>(5.1)</em></td>
      <td>
        <em>Up-mix from stereo to 5.1.</em><br />The <code>L</code> and
        <code>R </code>input channels are used for their non-surround respective
        output channels (<code>L</code> and <code>R</code>). Surround output
        channels (<code>SL</code> and <code>SR</code>), as well as the center
        (<code>C</code>) and subwoofer (<code>LFE</code>) channels, are left
        silent.<br /><code
          >output.L = input.L<br />output.R = input.R<br />output.C = 0<br />output.LFE
          = 0<br />output.SL = 0<br />output.SR = 0</code
        >
      </td>
    </tr>
    <tr>
      <td><code>4</code> <em>(Quad)</em></td>
      <td><code>1</code> <em>(Mono)</em></td>
      <td>
        <em>Down-mix from quad to mono</em>.<br />All four input channels
        (<code>L</code>, <code>R</code>, <code>SL</code>, and <code>SR</code>)
        are equally combined to produce the unique output channel
        (<code>M</code>).<br /><code
          >output.M = 0.25 * (input.L + input.R + </code
        ><code>input.SL + input.SR</code><code>)</code>
      </td>
    </tr>
    <tr>
      <td><code>4</code> <em>(Quad)</em></td>
      <td><code>2</code> <em>(Stereo)</em></td>
      <td>
        <em>Down-mix from quad to stereo</em>.<br />Both left input channels
        (<code>L</code> and <code>SL</code>) are equally combined to produce the
        unique left output channel (<code>L</code>). And similarly, both right
        input channels (<code>R</code> and <code>SR</code>) are equally combined
        to produce the unique right output channel (<code>R</code>).<br /><code
          >output.L = 0.5 * (input.L + input.SL</code
        ><code>)</code><br /><code>output.R = 0.5 * (input.R + input.SR</code
        ><code>)</code>
      </td>
    </tr>
    <tr>
      <td><code>4</code> <em>(Quad)</em></td>
      <td><code>6</code> <em>(5.1)</em></td>
      <td>
        <em>Up-mix from quad to 5.1.</em><br />The <code>L</code>,
        <code>R</code>, <code>SL</code>, and <code>SR</code> input channels are
        used for their respective output channels (<code>L</code> and
        <code>R</code>). Center (<code>C</code>) and subwoofer
        (<code>LFE</code>) channels are left silent.<br /><code
          >output.L = input.L<br />output.R = input.R<br />output.C = 0<br />output.LFE
          = 0<br />output.SL = input.SL<br />output.SR = input.SR</code
        >
      </td>
    </tr>
    <tr>
      <td><code>6</code> <em>(5.1)</em></td>
      <td><code>1</code> <em>(Mono)</em></td>
      <td>
        <em>Down-mix from 5.1 to mono.</em><br />The left (<code>L</code> and
        <code>SL</code>), right (<code>R</code> and <code>SR</code>) and central
        channels are all mixed together. The surround channels are slightly
        attenuated and the regular lateral channels are power-compensated to
        make them count as a single channel by multiplying by <code>√2/2</code>.
        The subwoofer (<code>LFE</code>) channel is lost.<br /><code
          >output.M = 0.7071 * (input.L + input.R) + input.C + 0.5 * (input.SL +
          input.SR)</code
        >
      </td>
    </tr>
    <tr>
      <td><code>6</code> <em>(5.1)</em></td>
      <td><code>2</code> <em>(Stereo)</em></td>
      <td>
        <em>Down-mix from 5.1 to stereo.</em><br />The central channel
        (<code>C</code>) is summed with each lateral surround channel (<code
          >SL</code
        >
        or <code>SR</code>) and mixed to each lateral channel. As it is mixed
        down to two channels, it is mixed at a lower power: in each case it is
        multiplied by <code>√2/2</code>. The subwoofer (<code>LFE</code>)
        channel is lost.<br /><code
          >output.L = input.L + 0.7071 * (input.C + input.SL)<br />output.R =
          input.R </code
        ><code>+ 0.7071 * (input.C + input.SR)</code>
      </td>
    </tr>
    <tr>
      <td><code>6</code> <em>(5.1)</em></td>
      <td><code>4</code> <em>(Quad)</em></td>
      <td>
        <em>Down-mix from 5.1 to quad.</em><br />The central (<code>C</code>) is
        mixed with the lateral non-surround channels (<code>L</code> and
        <code>R</code>). As it is mixed down to two channels, it is mixed at a
        lower power: in each case it is multiplied by <code>√2/2</code>. The
        surround channels are passed unchanged. The subwoofer (<code>LFE</code>)
        channel is lost.<br /><code
          >output.L = input.L + 0.7071 * input.C<br />output.R = input.R +
          0.7071 * input.C<br />output.SL = input.SL<br />output.SR =
          input.SR</code
        >
      </td>
    </tr>
    <tr>
      <td colspan="2">Other, non-standard layouts</td>
      <td>
        Non-standard channel layouts are handled as if
        <code>channelInterpretation</code> is set to
        <code>discrete</code>.<br />The specification explicitly allows the
        future definition of new speaker layouts. This fallback is therefore not
        future proof as the behavior of the browsers for a specific number of
        channels may change in the future.
      </td>
    </tr>
    <tr>
      <th rowspan="2" scope="row"><code>discrete</code></th>
      <td>any (<code>x</code>)</td>
      <td>any (<code>y</code>) where <code>x&#x3C;y</code></td>
      <td>
        <em>Up-mix discrete channels.</em><br />Fill each output channel with
        its input counterpart, that is the input channel with the same index.
        Channels with no corresponding input channels are left silent.
      </td>
    </tr>
    <tr>
      <td>any (<code>x</code>)</td>
      <td>any (<code>y</code>) where <code>x>y</code></td>
      <td>
        <em>Down-mix discrete channels.</em><br />Fill each output channel with
        its input counterpart, that is the input channel with the same index.
        Input channels with no corresponding output channels are dropped.
      </td>
    </tr>
  </tbody>
</table>

## Visualizations

In general, audio visualizations are achieved by accessing an output of audio data over time, usually gain or frequency data, and then using a graphical technology to turn that into a visual output, such as a graph. The Web Audio API has an {{domxref("AnalyserNode")}} available that doesn't alter the audio signal passing through it. Instead it outputs audio data that can be passed to a visualization technology such as {{htmlelement("canvas")}}.

![Without modifying the audio stream, the node allows to get the frequency and time-domain data associated to it, using a FFT.](fttaudiodata_en.svg)

You can grab data using the following methods:

- {{domxref("AnalyserNode.getFloatFrequencyData()")}}
  - : Copies the current frequency data into a {{jsxref("Float32Array")}} array passed into it.
- {{domxref("AnalyserNode.getByteFrequencyData()")}}
  - : Copies the current frequency data into a {{jsxref("Uint8Array")}} (unsigned byte array) passed into it.
- {{domxref("AnalyserNode.getFloatTimeDomainData()")}}
  - : Copies the current waveform, or time-domain, data into a {{jsxref("Float32Array")}} array passed into it.
- {{domxref("AnalyserNode.getByteTimeDomainData()")}}
  - : Copies the current waveform, or time-domain, data into a {{jsxref("Uint8Array")}} (unsigned byte array) passed into it.

> **Note:** For more information, see our [Visualizations with Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API) article.

## Spatialisations

An audio spatialisation (handled by the {{domxref("PannerNode")}} and {{domxref("AudioListener")}} nodes in the Web Audio API) allows us to model the position and behavior of an audio signal at a certain point in space, and the listener hearing that audio.

The panner's position is described with right-hand Cartesian coordinates; its movement using a velocity vector, necessary for creating Doppler effects, and its directionality using a directionality cone.The cone can be very large, e.g. for omnidirectional sources.

![The PannerNode brings a spatial position and velocity and a directionality for a given signal.](pannernode_en.svg)

The listener's position is described using right-hand Cartesian coordinates; its movement using a velocity vector and the direction the listener's head is pointing using two direction vectors: up and front. These respectively define the direction of the top of the listener's head, and the direction the listener's nose is pointing, and are at right angles to one another.

![We see the position, up and front vectors of an AudioListener, with the up and front vectors at 90° from the other.](webaudiolistenerreduced.png)

> **Note:** For more information, see our [Web audio spatialization basics](/en-US/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics) article.

## Fan-in and Fan-out

In audio terms, **fan-in** describes the process by which a {{domxref("ChannelMergerNode")}} takes a series of mono input sources and outputs a single multi-channel signal:

![](fanin.svg)

**Fan-out** describes the opposite process, whereby a {{domxref("ChannelSplitterNode")}} takes a multi-channel input source and outputs multiple mono output signals:

![](fanout.svg)
