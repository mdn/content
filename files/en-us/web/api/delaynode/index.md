---
title: DelayNode
slug: Web/API/DelayNode
page-type: web-api-interface
browser-compat: api.DelayNode
---

{{APIRef("Web Audio API")}}

The **`DelayNode`** interface represents a [delay-line](https://en.wikipedia.org/wiki/Digital_delay_line); an {{domxref("AudioNode")}} audio-processing module that causes a delay between the arrival of an input data and its propagation to the output.

A `DelayNode` always has exactly one input and one output, both with the same amount of channels.

![The DelayNode acts as a delay-line, here with a value of 1s.](webaudiodelaynode.png)

When creating a graph that has a cycle, it is mandatory to have at least one `DelayNode` in the cycle, or the nodes taking part in the cycle will be muted.

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Number of inputs</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Number of outputs</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count mode</th>
      <td><code>"max"</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count</th>
      <td><code>2</code> (not used in the default count mode)</td>
    </tr>
    <tr>
      <th scope="row">Channel interpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Constructor

- {{domxref("DelayNode.DelayNode", "DelayNode()")}}
  - : Creates a new instance of a DelayNode object instance. As an alternative, you can use the {{domxref("BaseAudioContext.createDelay()")}} factory method; see [Creating an AudioNode](/en-US/docs/Web/API/AudioNode#creating_an_audionode).

## Instance properties

_Inherits properties from its parent, {{domxref("AudioNode")}}._

- {{domxref("DelayNode.delayTime")}} {{ReadOnlyInline}}
  - : An [a-rate](/en-US/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}} representing the amount of delay to apply, specified in seconds.

## Instance methods

_No specific methods; inherits methods from its parent, {{domxref("AudioNode")}}._

## Examples

### Creating a simple delay effect

Create a delay node and apply it to an audio source:

```js
const audioContext = new AudioContext();

// Create a delay node
const delayNode = audioContext.createDelay(5.0); // max delay time of 5 seconds

// Set the delay time to 2 seconds
delayNode.delayTime.value = 2.0;

// Create an audio source
const source = audioContext.createMediaElementAudioSource(audioElement);

// Connect source -> delay -> destination
source.connect(delayNode);
delayNode.connect(audioContext.destination);
```

### Creating a feedback delay effect (echo)

Combine a delay with feedback to create an echo effect:

```js
const audioContext = new AudioContext();

const delayNode = audioContext.createDelay(0.5);
const feedbackGain = audioContext.createGain();
const dryGain = audioContext.createGain();
const wetGain = audioContext.createGain();

// Set up the delay parameters
delayNode.delayTime.value = 0.3; // 300ms delay
feedbackGain.gain.value = 0.4; // Amount of feedback

// Set up dry/wet mix
dryGain.gain.value = 0.7; // 70% original signal
wetGain.gain.value = 0.3; // 30% delayed signal

const source = audioContext.createMediaElementAudioSource(audioElement);

// Create the feedback loop
source.connect(delayNode);
delayNode.connect(feedbackGain);
feedbackGain.connect(delayNode); // Feedback loop

// Send to output
source.connect(dryGain);
delayNode.connect(wetGain);
dryGain.connect(audioContext.destination);
wetGain.connect(audioContext.destination);
```

### Automating delay time

Change the delay time over time to create dynamic effects:

```js
const audioContext = new AudioContext();
const delayNode = audioContext.createDelay(5.0);

// Start with a small delay
delayNode.delayTime.value = 0.1;

// Gradually increase the delay over 10 seconds
const startTime = audioContext.currentTime;
delayNode.delayTime.linearRampToValueAtTime(
  2.0, // target value
  startTime + 10, // time to reach target
);

const source = audioContext.createMediaElementAudioSource(audioElement);
source.connect(delayNode);
delayNode.connect(audioContext.destination);
```

### Breaking feedback loops with delay

When creating cycles in an audio graph, you must have at least one DelayNode:

```js
const audioContext = new AudioContext();

const source = audioContext.createOscillator();
const delayNode = audioContext.createDelay(0.5);
const feedbackGain = audioContext.createGain();

// This would cause an error without the delay node
// source -> feedbackGain -> source (cycle)

// But with the delay, the feedback loop works:
source.connect(feedbackGain);
feedbackGain.connect(delayNode);
delayNode.connect(feedbackGain); // Feedback is delayed, so it's safe
delayNode.connect(audioContext.destination);

source.start();
```

For more examples, see [`BaseAudioContext.createDelay()`](/en-US/docs/Web/API/BaseAudioContext/createDelay#examples).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
