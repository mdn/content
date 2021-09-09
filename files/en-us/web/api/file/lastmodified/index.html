---
title: File.lastModified
slug: Web/API/File/lastModified
tags:
- API
- File API
- Files
- Property
- Reference
browser-compat: api.File.lastModified
---
<div>{{APIRef("File")}}</div>

<p>The <code><strong>File.lastModified</strong></code> read-only property provides the
  last modified date of the file as the number of milliseconds since the Unix
  epoch (January 1, 1970 at midnight). Files without a known last modified date return the
  current date.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">const <em>time</em> = <var>instanceOfFile</var>.lastModified;
</pre>

<h3 id="Value">Value</h3>

<p>A number that represents the number of milliseconds since the Unix epoch.</p>

<h2 id="Example">Example</h2>

<h3 id="Reading_from_file_input">Reading from file input</h3>

<pre class="brush: html">&lt;input type="file" multiple id="fileInput"&gt;
</pre>

<pre class="brush:js">const fileInput = document.querySelector('#fileInput');
fileInput.addEventListener('change', (event) =&gt; {
  // files is a FileList object (similar to NodeList)
  const files = event.target.files;

  for (let file of files) {
    const date = new Date(file.lastModified);
    console.log(`${file.name} has a last modified date of ${date}`);
  }
});
</pre>

<p>Try the results out below:</p>

<p>{{ EmbedLiveSample('Reading_from_file_input', 300, 50) }}</p>

<h3 id="Dynamically_created_files">Dynamically created files</h3>

<p>If a File is created dynamically, the last modified time can be supplied in the
  {{domxref("File.File()", "new File()")}} constructor function. If it is missing,
  <code>lastModified</code> inherits the current time from {{jsxref("Date.now()")}} at the
  moment the <code>File</code> object gets created.</p>

<pre class="brush:js">const fileWithDate = new File([], 'file.bin', {
  lastModified: new Date(2017, 1, 1),
});
console.log(fileWithDate.lastModified); //returns 1485903600000

const fileWithoutDate = new File([], 'file.bin');
console.log(fileWithoutDate.lastModified); //returns current time
</pre>

<h2 id="Reduced_time_precision">Reduced time precision</h2>

<p>To offer protection against timing attacks and fingerprinting, the precision of
  <code>someFile.lastModified</code> might get rounded depending on browser settings.<br>
  In Firefox, the <code>privacy.reduceTimerPrecision</code>  preference is enabled by
  default and defaults to 20us in Firefox 59; in 60 it will be 2ms.</p>

<pre class="brush: js">// reduced time precision (2ms) in Firefox 60
someFile.lastModified;
// 1519211809934
// 1519211810362
// 1519211811670
// ...

// reduced time precision with `privacy.resistFingerprinting` enabled
someFile.lastModified;
// 1519129853500
// 1519129858900
// 1519129864400
// ...
</pre>

<p>In Firefox, you can also enabled <code>privacy.resistFingerprinting</code>, the
  precision will be 100ms or the value of
  <code>privacy.resistFingerprinting.reduceTimerPrecision.microseconds</code>, whichever
  is larger.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("File")}}</li>
</ul>
