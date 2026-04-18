---
title: AudioPlaybackStats
slug: Web/API/AudioPlaybackStats
page-type: web-api-interface
browser-compat: api.AudioPlaybackStats
---

{{APIRef("Web Audio API")}}

The **`AudioPlaybackStats`** interface of the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) provides access to duration, underrun, and latency statistics for the associated {{domxref("AudioContext")}}. These statistics allow developers to measure audio delay and glitchiness.

An audio context's `AudioPlaybackStats` object can be accessed via its {{domxref("AudioContext.playbackStats")}} property. The returned `AudioPlaybackStats` object is live — the contained property values are updated once every second.

## Description

When audio is playing in an application, it is beneficial to measure {{glossary("latency")}} and **underrun** — both can contribute to a bad user experience:

- Audio latency
  - : A measure of the delay between the user activating a control (such as a play button) and the audio playing as expected. Significant latency can make an application feel unresponsive.
- Underrun
  - : Happens when the audio application runs out of buffered audio data to play before new data arrives to replace it — in other words, it can't provide audio frames fast enough. This occurs when audio is not delivered to the playback device in time due to audio graph complexity, CPU overload, or malfunctions in other audio programs. The result is an audible "glitch" — a click, pop, or audio dropout occurring because the application has nothing to play and fills the gap with silence or noise.

If underruns are detected, action should be taken to avoid future underruns, for example providing a larger buffer, or freeing up system resources. Larger buffers should be used carefully as they can also increase latency, so it is important to achieve a balance. Latency can be reduced by reducing buffer size, simplifying required processing, or reducing audio sample size.

Web audio performance varies greatly between high-end devices such as a modern desktop computer and low-end devices such as budget mobile phones. The `AudioPlaybackStats` object allows developers to collect telemetry data from their users to understand how their app performs in the "real world" with respect to latency and underrun and respond to problems as they arise.

For example, you could create an "adaptive" audio system in your app that detects when underrun or latency exceeds a certain threshold (where the audio starts glitching), and:

- Reduces computation load by cutting down the maximum number of voices in play at once or removing complex filters.
- Prompts the user to try closing other tabs or apps or switching their audio output device for better performance.

### Provided underrun stats

Underruns are defined in terms of **underrun frames** and **underrun events**:

- Underrun frame
  - : An audio frame, typically silence in the case of a web application, played by the output device in the absence of any "real" audio data from the audio context.
- Underrun event
  - : The playback of a continuous sequence of underrun frames. The duration of the underrun event is the total duration of the sequence of underrun frames.

The number of underrun events that have occurred since the audio context was first initialized is reported by the {{domxref("AudioPlaybackStats.underrunEvents")}} property, and the duration of those underrun events is reported by the {{domxref("AudioPlaybackStats.underrunDuration")}} property. This allows developers to find out exactly how often and for how long audio is cutting out due to underrun.

### Provided latency stats

The audio context's latency can be measured using the {{domxref("AudioPlaybackStats.averageLatency")}}, {{domxref("AudioPlaybackStats.minimumLatency")}}, and {{domxref("AudioPlaybackStats.maximumLatency")}} properties.

It is possible to retrieve the immediate playout latency of the context via the {{domxref("AudioContext.outputLatency")}} property, however this is an instantaneous value that fluctuates rapidly. `AudioPlaybackStats` provides average, minimum, and maximum latency over time, which is much more useful for identifying persistent performance issues.

## Instance properties

- {{domxref("AudioPlaybackStats.averageLatency")}} {{ReadOnlyInline}}
  - : A number indicating the average latency since the audio context was first initialized, or since {{domxref("AudioPlaybackStats.resetLatency()")}} was last called.
- {{domxref("AudioPlaybackStats.minimumLatency")}} {{ReadOnlyInline}}
  - : A number indicating the minimum latency since the audio context was first initialized, or since {{domxref("AudioPlaybackStats.resetLatency()")}} was last called.
- {{domxref("AudioPlaybackStats.maximumLatency")}} {{ReadOnlyInline}}
  - : A number indicating the maximum latency since the audio context was first initialized, or since {{domxref("AudioPlaybackStats.resetLatency()")}} was last called.
- {{domxref("AudioPlaybackStats.totalDuration")}} {{ReadOnlyInline}}
  - : A number indicating the total duration of all audio frames since the audio context was first initialized.
- {{domxref("AudioPlaybackStats.underrunDuration")}} {{ReadOnlyInline}}
  - : A number indicating the total duration of the underrun events that have occurred since the audio context was first initialized.
- {{domxref("AudioPlaybackStats.underrunEvents")}} {{ReadOnlyInline}}
  - : A number indicating the number of underrun events that have occurred since the audio context was first initialized.

## Instance methods

- {{domxref("AudioPlaybackStats.resetLatency()")}}
  - : Sets the interval over which the latency stats are measured to the current time onwards.
- {{domxref("AudioPlaybackStats.toJSON()")}}
  - : A {{Glossary("Serialization","serializer")}} that returns a JSON representation of the {{domxref("AudioPlaybackStats")}} object.

## Examples

### Reporting audio playback stats

This example demonstrates how to report audio stats accessed via the {{domxref("AudioPlaybackStats")}} object.

#### HTML

We include three {{htmlelement("button")}} elements — one to start the audio playing, one to retrieve and display a set of stats, and one to run the {{domxref("AudioPlaybackStats.resetLatency()")}} method. We also include a {{htmlelement("ul")}} element inside which stats will be displayed.

```html live-sample___playback-stats
<p>
  <button class="play">Play audio</button>
  <button class="stats">Display stats</button>
  <button class="reset">Reset latency</button>
</p>
<hr />
<ul class="output"></ul>
```

```css hidden live-sample___playback-stats
ul {
  width: 80%;
  margin: 0 auto;
}
li {
  margin-bottom: 10px;
}
```

#### JavaScript

In our JavaScript, we begin by grabbing references to the buttons and the output list. We also disable our stats and reset buttons, because they won't do anything initially. We'll enable them again once they have event listeners attached.

```js live-sample___playback-stats
const playBtn = document.querySelector(".play");
const statsBtn = document.querySelector(".stats");
const resetBtn = document.querySelector(".reset");
const output = document.querySelector(".output");

statsBtn.disabled = true;
resetBtn.disabled = true;
```

Next, we add a `click` event listener to the play button so that when it is clicked, we:

- Create a new {{domxref("AudioContext")}} and disable the play button so it can't be pressed again.
- Run some feature detection code that checks if the {{domxref("AudioContext.playbackStats")}} property exists. If it doesn't, we display a "Your browser doesn't support AudioPlaybackStats." message in a list item in the output list, and `return` out of the function.
- Create a basic audio graph consisting of of an {{domxref("OscillatorNode")}} and a {{domxref("GainNode")}} and start the oscillator playing.
- Enable the stats button and give it a `click` event listener so that when it is clicked, we write the different stats available in the audio context's {{domxref("AudioPlaybackStats")}} object into a text string and display it in a list item in the output list.
- Enable the reset button and give it a `click` event listener so that when it is clicked, we run the {{domxref("AudioPlaybackStats.resetLatency()")}} method.

```js live-sample___playback-stats
playBtn.addEventListener("click", () => {
  const audioCtx = new AudioContext();
  playBtn.disabled = true;

  if (!audioCtx.playbackStats) {
    const listItem = document.createElement("li");
    listItem.textContent = "Your browser doesn't support AudioPlaybackStats.";
    output.appendChild(listItem);
    return;
  }

  const oscillator = audioCtx.createOscillator();
  oscillator.type = "square";
  oscillator.frequency.setValueAtTime(100, audioCtx.currentTime);
  const gain = audioCtx.createGain();
  gain.gain.value = 0.006;

  oscillator.connect(gain);
  gain.connect(audioCtx.destination);
  oscillator.start();

  const stats = audioCtx.playbackStats;

  statsBtn.disabled = false;
  statsBtn.addEventListener("click", () => {
    const listItem = document.createElement("li");
    const statsText = `Underrun duration: ${stats.underrunDuration}
                       Underrun events: ${stats.underrunEvents}
                       Total duration: ${stats.totalDuration}
                       Average latency: ${stats.averageLatency}
                       Min latency: ${stats.minimumLatency}
                       Max latency: ${stats.maximumLatency}`;
    listItem.textContent = statsText;
    output.appendChild(listItem);
  });

  resetBtn.disabled = false;
  resetBtn.addEventListener("click", () => {
    stats.resetLatency();
  });
});
```

#### Result

The rendered output looks like this:

{{embedlivesample("playback-stats", "100%", "400")}}

Click the "Play audio" button to start the ocillator tone playing. Now when you click the "Display stats" button, you'll see the different stats available in the {{domxref("AudioPlaybackStats")}} object displayed in a list item.

If you click the "Reset latency" button, then click the "Display stats" button, you'll see new stats displayed, but the minimum latency will no longer be zero. This is because the latency stats will now only be measured from the time you clicked the "Reset latency" button, not from the start of the audio graph.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
