---
title: BiquadFilterNode
slug: Web/API/BiquadFilterNode
page-type: web-api-interface
browser-compat: api.BiquadFilterNode
---

{{APIRef("Web Audio API")}}

The `BiquadFilterNode` interface represents a simple low-order filter, and is created using the {{ domxref("BaseAudioContext/createBiquadFilter") }} method. It is an {{domxref("AudioNode")}} that can represent different kinds of filters, tone control devices, and graphic equalizers. A `BiquadFilterNode` always has exactly one input and one output.

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

- {{domxref("BiquadFilterNode.BiquadFilterNode", "BiquadFilterNode()")}}
  - : Creates a new instance of a `BiquadFilterNode` object.

## Instance properties

_Inherits properties from its parent, {{domxref("AudioNode")}}_.

> **Note:** Though the `AudioParam` objects returned are read-only, the values they represent are not.

- {{domxref("BiquadFilterNode.frequency")}} {{ReadOnlyInline}}
  - : An [a-rate](/en-US/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}}, a double representing a frequency in the current filtering algorithm measured in hertz (Hz).
- {{domxref("BiquadFilterNode.detune")}} {{ReadOnlyInline}}
  - : An [a-rate](/en-US/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}} representing detuning of the frequency in [cents](https://en.wikipedia.org/wiki/Cent_%28music%29).
- {{domxref("BiquadFilterNode.Q")}} {{ReadOnlyInline}}
  - : An [a-rate](/en-US/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}}, a double representing a [Q factor](https://en.wikipedia.org/wiki/Q_factor), or _quality factor_.
- {{domxref("BiquadFilterNode.gain")}} {{ReadOnlyInline}}
  - : An [a-rate](/en-US/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}}, a double representing the [gain](https://en.wikipedia.org/wiki/Gain) used in the current filtering algorithm.
- {{domxref("BiquadFilterNode.type")}}

  - : A string value defining the kind of filtering algorithm the node is implementing.

    <table class="standard-table">
      <caption>
        The meaning of the different parameters depending on the type of the filter
        (detune has the same meaning regardless, so isn't listed below)
      </caption>
      <thead>
        <tr>
          <th scope="row"><code>type</code></th>
          <th scope="col">Description</th>
          <th scope="col"><code>frequency</code></th>
          <th scope="col"><code>Q</code></th>
          <th scope="col"><code>gain</code></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row"><code>lowpass</code></th>
          <td>
            Standard second-order resonant lowpass filter with 12dB/octave rolloff.
            Frequencies below the cutoff pass through; frequencies above it are
            attenuated.
          </td>
          <td>The cutoff frequency.</td>
          <td>
            Indicates how peaked the frequency is around the cutoff. The greater the
            value is, the greater is the peak.
          </td>
          <td><em>Not used</em></td>
        </tr>
        <tr>
          <th scope="row"><code>highpass</code></th>
          <td>
            Standard second-order resonant highpass filter with 12dB/octave rolloff.
            Frequencies below the cutoff are attenuated; frequencies above it pass
            through.
          </td>
          <td>The cutoff frequency.</td>
          <td>
            Indicates how peaked the frequency is around the cutoff. The greater the
            value, the greater the peak.
          </td>
          <td><em>Not used</em></td>
        </tr>
        <tr>
          <th scope="row"><code>bandpass</code></th>
          <td>
            Standard second-order bandpass filter. Frequencies outside the given
            range of frequencies are attenuated; the frequencies inside it pass
            through.
          </td>
          <td>The center of the range of frequencies.</td>
          <td>
            Controls the width of the frequency band. The greater the
            <code>Q</code> value, the smaller the frequency band.
          </td>
          <td><em>Not used</em></td>
        </tr>
        <tr>
          <th scope="row"><code>lowshelf</code></th>
          <td>
            Standard second-order lowshelf filter. Frequencies lower than the
            frequency get a boost, or an attenuation; frequencies over it are
            unchanged.
          </td>
          <td>
            The upper limit of the frequencies getting a boost or an attenuation.
          </td>
          <td><em>Not used</em></td>
          <td>
            The boost, in dB, to be applied; if negative, it will be an attenuation.
          </td>
        </tr>
        <tr>
          <th scope="row"><code>highshelf</code></th>
          <td>
            Standard second-order highshelf filter. Frequencies higher than the
            frequency get a boost or an attenuation; frequencies lower than it are
            unchanged.
          </td>
          <td>
            The lower limit of the frequencies getting a boost or an attenuation.
          </td>
          <td><em>Not used</em></td>
          <td>
            The boost, in dB, to be applied; if negative, it will be an attenuation.
          </td>
        </tr>
        <tr>
          <th scope="row"><code>peaking</code></th>
          <td>
            Frequencies inside the range get a boost or an attenuation; frequencies
            outside it are unchanged.
          </td>
          <td>
            The middle of the frequency range getting a boost or an attenuation.
          </td>
          <td>
            Controls the width of the frequency band. The greater the
            <code>Q</code> value, the smaller the frequency band.
          </td>
          <td>
            The boost, in dB, to be applied; if negative, it will be an attenuation.
          </td>
        </tr>
        <tr>
          <th scope="row"><code>notch</code></th>
          <td>
            Standard
            <a href="https://en.wikipedia.org/wiki/Band-stop_filter">notch</a>
            filter, also called a <em>band-stop</em> or
            <em>band-rejection</em> filter. It is the opposite of a bandpass filter:
            frequencies outside the give range of frequencies pass through;
            frequencies inside it are attenuated.
          </td>
          <td>The center of the range of frequencies.</td>
          <td>
            Controls the width of the frequency band. The greater the
            <code>Q</code> value, the smaller the frequency band.
          </td>
          <td><em>Not used</em></td>
        </tr>
        <tr>
          <th scope="row"><code>allpass</code></th>
          <td>
            Standard second-order
            <a
              href="https://en.wikipedia.org/wiki/All-pass_filter#Digital_Implementation"
              >allpass</a
            >
            filter. It lets all frequencies through, but changes the
            phase-relationship between the various frequencies.
          </td>
          <td>
            The frequency with the maximal
            <a href="https://en.wikipedia.org/wiki/Group_delay_and_phase_delay"
              >group delay</a
            >, that is, the frequency where the center of the phase transition
            occurs.
          </td>
          <td>
            Controls how sharp the transition is at the medium frequency. The larger
            this parameter is, the sharper and larger the transition will be.
          </td>
          <td><em>Not used</em></td>
        </tr>
      </tbody>
    </table>

## Instance methods

_Inherits methods from its parent, {{domxref("AudioNode")}}_.

- {{domxref("BiquadFilterNode.getFrequencyResponse()")}}
  - : From the current filter parameter settings this method calculates the frequency response for frequencies specified in the provided array of frequencies.

## Example

See [`AudioContext.createBiquadFilter`](/en-US/docs/Web/API/BaseAudioContext/createBiquadFilter#examples) for example code that shows how to use an `AudioContext` to create a Biquad filter node.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
