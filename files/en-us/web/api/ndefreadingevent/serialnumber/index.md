---
title: NDEFReadingEvent.serialNumber
slug: Web/API/NDEFReadingEvent/serialNumber
tags:
  - API
  - Property
  - Reference
  - serialNumber
  - NDEFReadingEvent
browser-compat: api.NDEFReadingEvent.serialNumber
---
<div>{{securecontext_header}}{{DefaultAPISidebar("")}}</div>

<p>The <strong><code>serialNumber</code></strong> property of the {{domxref("NDEFReadingEvent")}} interface returns the serial number of the device, which is used for anti-collision and identification, or an empty string if no serial number is available. </p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">let aserialNumber = NDEFReadingEvent.serialNumber;</pre>

<h3>Value</h3>
<p>A string containing the device's serial number.</p>

<h2 id="Examples">Examples</h2>

<p>This example shows how to create a convenience function that reads a single tag and then stops polling, saving battery life by cutting unneeded work. The example could easily be extended to time out after a given amount of milliseconds.</p>

<pre class="brush: js">const ndefReader = new NDEFReader();

  function read() {
    return new Promise((resolve, reject) => {
      const ctlr = new AbortController();
      ctlr.signal.onabort = reject;
      ndefReader.addEventListener("reading", event => {
        ctlr.abort();
        resolve(event);
      }, { once: true });
      ndefReader.scan({ signal: ctlr.signal }).catch(err => reject(err));
    });
  }

  read().then(({ serialNumber }) => {
    console.log(serialNumber);
  });</pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>


