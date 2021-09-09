---
title: Presentation API
slug: Web/API/Presentation_API
tags:
  - API
  - Experimental
  - NeedsContent
  - Presentation API
  - Reference
---
<p>{{securecontext_header}}{{SeeCompatTable}}{{APIRef("Presentation API")}}</p>

<p>The Presentation API lets a {{Glossary("user agent")}} (such as a Web browser) effectively display web content through large presentation devices such as projectors and network-connected televisions. Supported types of multimedia devices include both displays which are wired using HDMI, DVI, or the like, or wireless, using <a href="https://www.dlna.org/">DLNA</a>, <a href="https://developers.google.com/cast/">Chromecast</a>, <a href="https://developer.apple.com/airplay/">AirPlay</a>, or <a href="https://www.wi-fi.org/discover-wi-fi/miracast">Miracast</a>.</p>

<p><img alt="" src="presentation_mode_illustration.png"></p>

<p>In general, a web page uses the Presentation Controller API to specify the web content to be rendered on presentation device and initiate the presentation session. With Presentation Receiver API, the presenting web content obtains the session status. With providing both the controller page and the receiver one with a messaged-based channel, a Web developer can implement the interaction between these two pages.</p>

<p>Depending on the connection mechanism provided by the presentation device, any controller- and receiver page can be rendered by the same user agent, or by separated user agents.</p>

<ul>
 <li>For 1-UA mode devices, both pages are loaded by the same user agent. However, rendering result of the receiver page will be sent to the presentation device via supported remote rendering protocol.</li>
 <li>For 2-UAs mode device, the receiver page is loaded directly on the presentation device. Controlling user agent communicates with presentation device via supported presentation control protocol, to control the presentation session and to transmit the message between two pages.</li>
</ul>

<h2 id="Interfaces">Interfaces</h2>

<dl>
 <dt>{{domxref("Presentation")}}</dt>
 <dd>In controlling browsing context, the <code>Presentation</code> interface provides a mechanism to override the browser default behavior of launching presentation to external screen. In receiving browsing context, <code>Presentation</code> interface provides the access to the available presentation connections.</dd>
 <dt>{{domxref("PresentationRequest")}}</dt>
 <dd>Initiates or reconnects to a presentation made by a controlling browsing context.</dd>
 <dt>{{domxref("PresentationAvailability")}}</dt>
 <dd>A <a href="/en-US/docs/Web/API/PresentationAvailability">PresentationAvailability</a> object is associated with available presentation displays and represents the <dfn>presentation display availability</dfn> for a presentation request.</dd>
 <dt>{{domxref("PresentationConnectionAvailableEvent")}}</dt>
 <dd>The <code>PresentationConnectionAvailableEvent</code> is fired on a <a href="/en-US/docs/Web/API/PresentationRequest" title="The PresentationRequest interface of the Presentation API provides methods for starting a new presentation or joining an active one."><code>PresentationRequest</code></a> when a connection associated with the object is created.</dd>
 <dt>{{domxref("PresentationConnection")}}</dt>
 <dd>Each presentation connection is represented by a <a href="/en-US/docs/Web/API/PresentationConnection">PresentationConnection</a> object.</dd>
 <dt>{{domxref("PresentationConnectionCloseEvent")}}</dt>
 <dd>A <code>PresentationConnectionCloseEvent</code> is fired when a presentation connection enters a <code>closed</code> state.</dd>
 <dt>{{domxref("PresentationReceiver")}}</dt>
 <dd>The <a href="/en-US/docs/Web/API/PresentationReceiver">PresentationReceiver</a> allows a receiving browsing context to access the controlling browsing contexts and communicate with them.</dd>
 <dt>{{domxref("PresentationConnectionList")}}</dt>
 <dd><code>PresentationConnectionList</code> represents the collection of non-terminated presentation connections. It is also a monitor for the event of new available presentation connection.</dd>
</dl>

<h2 id="Example">Example</h2>

<p>Example codes below highlight the usage of main features of the Presentation API: <code>controller.html</code> implements the controller and <code>presentation.html</code> implements the presentation. Both pages are served from the domain <code>http://example.org</code> (<code>http://example.org/controller.html</code> and <code>http://example.org/presentation.html</code>). These examples assume that the controlling page is managing one presentation at a time. Please refer to the comments in the code examples for further details.</p>

<h3 id="Monitor_availability_of_presentation_displays">Monitor availability of presentation displays</h3>

<pre class="brush: html">
&lt;!-- controller.html --&gt;
&lt;button id="presentBtn" style="display: none;"&gt;Present&lt;/button&gt;
&lt;script&gt;
  // The Present button is visible if at least one presentation display is available
  var presentBtn = document.getElementById("presentBtn");
  // It is also possible to use relative presentation URL e.g. "presentation.html"
  var presUrls = ["http://example.com/presentation.html",
                  "http://example.net/alternate.html"];
  // show or hide present button depending on display availability
  var handleAvailabilityChange = function(available) {
    presentBtn.style.display = available ? "inline" : "none";
  };
  // Promise is resolved as soon as the presentation display availability is
  // known.
  var request = new PresentationRequest(presUrls);
  request.getAvailability().then(function(availability) {
    // availability.value may be kept up-to-date by the controlling UA as long
    // as the availability object is alive. It is advised for the web developers
    // to discard the object as soon as it's not needed.
    handleAvailabilityChange(availability.value);
    availability.onchange = function() { handleAvailabilityChange(this.value); };
  }).catch(function() {
    // Availability monitoring is not supported by the platform, so discovery of
    // presentation displays will happen only after request.start() is called.
    // Pretend the devices are available for simplicity; or, one could implement
    // a third state for the button.
    handleAvailabilityChange(true);
  });
&lt;/script&gt;
</pre>

<h3 id="Starting_a_new_presentation">Starting a new presentation</h3>

<pre class="brush: html">
&lt;!-- controller.html --&gt;
&lt;script&gt;
  presentBtn.onclick = function () {
    // Start new presentation.
    request.start()
      // The connection to the presentation will be passed to setConnection on
      // success.
      .then(setConnection);
      // Otherwise, the user canceled the selection dialog or no screens were
      // found.
  };
&lt;/script&gt;
</pre>

<h3 id="Reconnect_to_a_presentation">Reconnect to a presentation</h3>

<pre class="brush: html">
&lt;!-- controller.html --&gt;
&lt;button id="reconnectBtn" style="display: none;"&gt;Reconnect&lt;/button&gt;
&lt;script&gt;
  var reconnect = function () {
    // read presId from localStorage if exists
    var presId = localStorage["presId"];
    // presId is mandatory when reconnecting to a presentation.
    if (!!presId) {
      request.reconnect(presId)
        // The new connection to the presentation will be passed to
        // setConnection on success.
        .then(setConnection);
        // No connection found for presUrl and presId, or an error occurred.
    }
  };
  // On navigation of the controller, reconnect automatically.
  document.addEventListener("DOMContentLoaded", reconnect);
  // Or allow manual reconnection.
  reconnectBtn.onclick = reconnect;
&lt;/script&gt;
</pre>

<h3 id="Presentation_initiation_by_the_controlling_UA">Presentation initiation by the controlling UA</h3>

<pre class="brush: html">
&lt;!-- controller.html --&gt;
&lt;!-- Setting presentation.defaultRequest allows the page to specify the
     PresentationRequest to use when the controlling UA initiates a
     presentation. --&gt;
&lt;script&gt;
  navigator.presentation.defaultRequest = new PresentationRequest(presUrls);
  navigator.presentation.defaultRequest.onconnectionavailable = function(evt) {
    setConnection(evt.connection);
  };
&lt;/script&gt;
</pre>

<h3 id="Monitor_connections_state_and_exchange_data">Monitor connection's state and exchange data</h3>

<pre class="brush: html">
&lt;!-- controller.html --&gt;
&lt;button id="disconnectBtn" style="display: none;"&gt;Disconnect&lt;/button&gt;
&lt;button id="stopBtn" style="display: none;"&gt;Stop&lt;/button&gt;
&lt;button id="reconnectBtn" style="display: none;"&gt;Reconnect&lt;/button&gt;
&lt;script&gt;
  let connection;

  // The Disconnect and Stop buttons are visible if there is a connected presentation
  const stopBtn = document.querySelector("#stopBtn");
  const reconnectBtn = document.querySelector("#reconnectBtn");
  const disconnectBtn = document.querySelector("#disconnectBtn");

  stopBtn.onclick = _ =&gt; {
    connection && connection.terminate();
  };

  disconnectBtn.onclick = _ =&gt; {
    connection && connection.close();
  };

  function setConnection(newConnection) {
    // Disconnect from existing presentation, if not attempting to reconnect
    if (connection && connection != newConnection && connection.state != 'closed') {
      connection.onclosed = undefined;
      connection.close();
    }

    // Set the new connection and save the presentation ID
    connection = newConnection;
    localStorage["presId"] = connection.id;

    function showConnectedUI() {
      // Allow the user to disconnect from or terminate the presentation
      stopBtn.style.display = "inline";
      disconnectBtn.style.display = "inline";
      reconnectBtn.style.display = "none";
    }

    function showDisconnectedUI() {
      disconnectBtn.style.display = "none";
      stopBtn.style.display = "none";
      reconnectBtn.style.display = localStorage["presId"] ? "inline" : "none";
    }

    // Monitor the connection state
    connection.onconnect = _ =&gt; {
      showConnectedUI();

      // Register message handler
      connection.onmessage = message =&gt; {
        console.log(`Received message: ${message.data}`);
      };

      // Send initial message to presentation page
      connection.send("Say hello");
    };

    connection.onclose = _ =&gt; {
      connection = null;
      showDisconnectedUI();
    };

    connection.onterminate = _ =&gt; {
      // Remove presId from localStorage if exists
      delete localStorage["presId"];
      connection = null;
      showDisconnectedUI();
    };
  };
&lt;/script&gt;</pre>

<h3 id="Monitor_available_connections_and_say_hello">Monitor available connection(s) and say hello</h3>

<pre class="brush: html">
&lt;!-- presentation.html --&gt;
&lt;script&gt;
  var addConnection = function(connection) {
    this.onmessage = function (message) {
      if (message.data == "say hello")
        this.send("hello");
    };
  };

  navigator.presentation.receiver.connectionList.then(function (list) {
    list.connections.map(function (connection) {
      addConnection(connection);
    });
    list.onconnectionavailable = function (evt) {
      addConnection(evt.connection);
    };
  });
&lt;/script&gt;
</pre>

<h3 id="Passing_locale_information_with_a_message">Passing locale information with a message</h3>

<pre class="brush: html">
&lt;!-- controller.html --&gt;
&lt;script&gt;
  connection.send("{string: '你好，世界!', lang: 'zh-CN'}");
  connection.send("{string: 'こんにちは、世界!', lang: 'ja'}");
  connection.send("{string: '안녕하세요, 세계!', lang: 'ko'}");
  connection.send("{string: 'Hello, world!', lang: 'en-US'}");
&lt;/script&gt;

&lt;!-- presentation.html --&gt;
&lt;script&gt;
  connection.onmessage = function (message) {
    var messageObj = JSON.parse(message.data);
    var spanElt = document.createElement("SPAN");
    spanElt.lang = messageObj.lang;
    spanElt.textContent = messageObj.string;
    document.appendChild(spanElt);
  };
&lt;/script&gt;
</pre>

<h2 id="Specifications">Specifications</h2>

<table>
 <tbody>
  <tr>
   <th>Specification</th>
  </tr>
  <tr>
   <td><a href="https://w3c.github.io/presentation-api/">Presentation API</a></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<h3 id="Presentation"><code>Presentation</code></h3>


<p>{{Compat("api.Presentation")}}</p>

<h2 id="See_also">See also</h2>

<p><a href="https://mediascape.github.io/presentation-api-polyfill/">Presentation API polyfill</a> contains a JavaScript polyfill of the <a href="https://w3c.github.io/presentation-api/">Presentation API</a> specification under standardisation within the <a href="https://www.w3.org/2014/secondscreen/">Second Screen Working Group</a> at W3C. The polyfill is mostly intended for exploring how the Presentation API may be implemented on top of different presentation mechanisms.</p>
