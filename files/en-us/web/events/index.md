---
title: Event reference
slug: Web/Events
spec-urls: https://html.spec.whatwg.org/multipage/indices.html#events-2
---

[Events](/en-US/docs/Learn/JavaScript/Building_blocks/Events) are fired to notify code of "interesting changes" that may affect code execution. These can arise from user interactions such as using a mouse or resizing a window, changes in the state of the underlying environment (e.g. low battery or media events from the operating system), and other causes.

Each event is represented by an object that is based on the {{domxref("Event")}} interface, and may have additional custom fields and/or functions to provide information about what happened. The documentation for every event has a table (near the top) that includes a link to the associated event interface, and other relevant information. A full list of the different event types is given in [Event > Interfaces based on Event](/en-US/docs/Web/API/Event#introduction).

This topic provides an index to the main _sorts_ of events you might be interested in (animation, clipboard, workers etc.) along with the main classes that implement those sorts of events. At the end is a flat list of all documented events.

> **Note:** This page lists many of the most common events you'll come across on the web. If you are searching for an event that isn't listed here, try searching for its name, topic area, or associated specification on the rest of MDN.

## Event index

<table class="standard-table">
  <tbody>
    <tr>
      <th>Event type</th>
      <th style="width: 50%">Description</th>
      <th>Documentation</th>
    </tr>
    <tr>
      <td>Animation</td>
      <td>
        <p>
          Events related to the
          <a href="/en-US/docs/Web/API/Web_Animations_API">Web Animation API</a
          >.
        </p>
        <p>
          Used to respond to changes in animation status (e.g. when an animation
          starts or ends).
        </p>
      </td>
      <td>
        Animation events fired on
        <a href="/en-US/docs/Web/API/Document#animation_events"
          ><code>Document</code></a
        >,
        <a href="/en-US/docs/Web/API/Window#animation_events"
          ><code>Window</code></a
        >,
        <a href="/en-US/docs/Web/API/HTMLElement#animation_events"
          ><code>HTMLElement</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Asynchronous data fetching</td>
      <td><p>Events related to the fetching data.</p></td>
      <td>
        Events fired on
        <a href="/en-US/docs/Web/API/AbortSignal#events"
          ><code>AbortSignal</code></a
        >,
        <a href="/en-US/docs/Web/API/XMLHttpRequest#events"
          ><code>XMLHttpRequest</code></a
        >,
        <a href="/en-US/docs/Web/API/FileReader#events"
          ><code>FileReader</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Clipboard</td>
      <td>
        <p>
          Events related to the
          <a href="/en-US/docs/Web/API/Clipboard_API">Clipboard API</a>.
        </p>
        <p>Used to notify when content is cut, copied, or pasted.</p>
      </td>
      <td>
        Events fired on
        <a href="/en-US/docs/Web/API/Document#clipboard_events"
          ><code>Document</code></a
        >,
        <a href="/en-US/docs/Web/API/Element#clipboard_events"
          ><code>Element</code></a
        >,
        <a href="/en-US/docs/Web/API/Window#clipboard_events"
          ><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Composition</td>
      <td>
        <p>
          Events related to composition; entering text "indirectly" (rather than
          using normal keyboard presses).
        </p>
        <p>
          For example, text entered via a speech to text engine, or using
          special key combinations that modify keyboard presses to represent new
          characters in another language.
        </p>
      </td>
      <td>
        Events fired on
        <a href="/en-US/docs/Web/API/Element#composition_events"
          ><code>Element</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>CSS transition</td>
      <td>
        <p>
          Events related to
          <a href="/en-US/docs/Web/CSS/CSS_Transitions">CSS Transitions</a>.
        </p>
        <p>
          Provides notification events when CSS transitions start, stop, are
          cancelled, etc.
        </p>
      </td>
      <td>
        Events fired on
        <a href="/en-US/docs/Web/API/Document#transition_events"
          ><code>Document</code></a
        >,
        <a href="/en-US/docs/Web/API/HTMLElement#transition_events"
          ><code>HTMLElement</code></a
        >,
        <a href="/en-US/docs/Web/API/Window#transition_events"
          ><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Database</td>
      <td>
        <p>
          Events related to database operations: opening, closing, transactions,
          errors, etc.
        </p>
      </td>
      <td>
        Events fired on
        <a href="/en-US/docs/Web/API/IDBDatabase#events"
          ><code>IDBDatabase</code></a
        >,
        <a href="/en-US/docs/Web/API/IDBOpenDBRequest#events"
          ><code>IDBOpenDBRequest</code></a
        >,
        <a href="/en-US/docs/Web/API/IDBRequest#events"
          ><code>IDBRequest</code></a
        >,
        <a href="/en-US/docs/Web/API/IDBTransaction#events"
          ><code>IDBTransaction</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>DOM mutation</td>
      <td>
        <p>
          Events related to modifications to the Document Object Model (DOM)
          hierarchy and nodes.
        </p>
      </td>
      <td>
        <div class="notecard warning">
          <p>
            <strong>Warning:</strong>
            <a href="/en-US/docs/Web/API/MutationEvent">Mutation Events</a> are
            deprecated.
            <a href="/en-US/docs/Web/API/MutationObserver"
              >Mutation Observers</a
            >
            should be used instead.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>Drag'n'drop, Wheel</td>
      <td>
        <p>
          Events related to using the
          <a href="/en-US/docs/Web/API/HTML_Drag_and_Drop_API"
            >HTML Drag and Drop API</a
          >
          and <a href="/en-US/docs/Web/API/WheelEvent">wheel events</a>.
        </p>
        <p>
          Drag and Wheel events are derived from mouse events. While they are
          fired when using mouse wheel or drag/drop, they may also be used with
          other appropriate hardware.
        </p>
      </td>
      <td>
        <p>
          Drag events fired on
          <a href="/en-US/docs/Web/API/Document#drag_drop_events"
            ><code>Document</code></a
          >
        </p>
        <p>
          Wheel events fired on
          <a href="/en-US/docs/Web/API/Document/wheel_event"
            ><code>Document</code></a
          >
          and
          <a href="/en-US/docs/Web/API/Element/wheel_event"
            ><code>Element</code></a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td>Focus</td>
      <td><p>Events related to elements gaining and losing focus.</p></td>
      <td>
        Events fired on
        <a href="/en-US/docs/Web/API/Element#focus_events"
          ><code>Element</code></a
        >,
        <a href="/en-US/docs/Web/API/Window#focus_events"><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Form</td>
      <td>
        <p>Events related to forms being constructed, reset and submitted.</p>
      </td>
      <td>
        Events fired on
        <a href="/en-US/docs/Web/API/HTMLFormElement#events"
          ><code>HTMLFormElement</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Fullscreen</td>
      <td>
        <p>
          Events related to the
          <a href="/en-US/docs/Web/API/Fullscreen_API">Fullscreen API</a>.
        </p>
        <p>
          Used to notify when the transitioning between full screen and windowed
          modes, and also of errors occurring during this transition.
        </p>
      </td>
      <td>
        Events fired on
        <a href="/en-US/docs/Web/API/Document#fullscreen_events"
          ><code>Document</code></a
        >,
        <a href="/en-US/docs/Web/API/Element#fullscreen_events"
          ><code>Element</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Gamepad</td>
      <td>
        <p>
          Events related to the
          <a href="/en-US/docs/Web/API/Gamepad_API">Gamepad API</a>.
        </p>
      </td>
      <td>
        Events fired on
        <a href="/en-US/docs/Web/API/Window#gamepad_events"
          ><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Gestures</td>
      <td>
        <p>
          <a href="/en-US/docs/Web/API/Touch_events">Touch events</a> are
          recommended for implementing gestures.
        </p>
      </td>
      <td>
        <p>
          Events fired on
          <a href="/en-US/docs/Web/API/Document#touch_events"
            ><code>Document</code></a
          >,
          <a href="/en-US/docs/Web/API/Element#touch_events"
            ><code>Element</code></a
          >.
        </p>
        <p>In addition there are a number of non-standard gesture events:</p>
        <ul>
          <li>
            Non-standard WebKit specific events on
            <a href="/en-US/docs/Web/API/Element#touch_events"
              ><code>Element</code></a
            >:
            <a href="/en-US/docs/Web/API/Element/gesturestart_event"
              ><code>gesturestart</code> event</a
            >,
            <a href="/en-US/docs/Web/API/Element/gesturechange_event"
              ><code>gesturechange</code> event</a
            >,
            <a href="/en-US/docs/Web/API/Element/gestureend_event"
              ><code>gestureend</code> event</a
            >.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>History</td>
      <td>
        <p>
          Events related to the
          <a href="/en-US/docs/Web/API/History_API">History API</a>.
        </p>
      </td>
      <td>
        Events fired on
        <a href="/en-US/docs/Web/API/Window#history_events"
          ><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>HTML element content display management</td>
      <td>
        <p>
          Events related to changing the state of a display or textual element.
        </p>
      </td>
      <td>
        Events fired on
        <a href="/en-US/docs/Web/API/HTMLDetailsElement#events"
          ><code>HTMLDetailsElement</code></a
        >,
        <a href="/en-US/docs/Web/API/HTMLDialogElement#events"
          ><code>HTMLDialogElement</code></a
        >,
        <a href="/en-US/docs/Web/API/HTMLSlotElement#events"
          ><code>HTMLSlotElement</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Inputs</td>
      <td>
        <p>
          Events related to HTML input elements e.g.
          {{HTMLElement("input")}}, {{HTMLElement("select")}}, or
          {{HTMLElement("textarea")}}.
        </p>
      </td>
      <td>
        Events fired on
        <a href="/en-US/docs/Web/API/HTMLElement#input_events"
          ><code>HTMLElement</code></a
        >,
        <a href="/en-US/docs/Web/API/HTMLInputElement#events"
          ><code>HTMLInputElement</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Keyboard</td>
      <td>
        <p>
          Events related to using a
          <a href="/en-US/docs/Web/API/KeyboardEvent">keyboard</a>.
        </p>
        <p>Used to notify when keys are moved up, down, or just pressed.</p>
      </td>
      <td>
        Events fired on
        <a href="/en-US/docs/Web/API/Document#keyboard_events"
          ><code>Document</code></a
        >,
        <a href="/en-US/docs/Web/API/Element#keyboard_events"
          ><code>Element</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Loading/unloading documents</td>
      <td><p>Events related to loading and unloading documents.</p></td>
      <td>
        <p>
          Events fired on
          <a href="/en-US/docs/Web/API/Document#load_unload_events"
            ><code>Document</code></a
          >
          and
          <a href="/en-US/docs/Web/API/Window#load_unload_events"
            ><code>Window</code></a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td>Manifests</td>
      <td>
        <p>
          Events related to installation of
          <a href="/en-US/docs/Web/Manifest">progressive web app manifests</a>.
        </p>
      </td>
      <td>
        Events fired on
        <a href="/en-US/docs/Web/API/Window#manifest_events"
          ><code>Window</code></a
        >.
      </td>
    </tr>
    <tr id="media">
      <td>Media</td>
      <td>
        <p>
          Events related to media usage (including the
          <a href="/en-US/docs/Web/API/Media_Capture_and_Streams_API#events"
            >Media Capture and Streams API</a
          >,
          <a href="/en-US/docs/Web/API/Web_Audio_API#events">Web Audio API</a>,
          <a href="/en-US/docs/Web/API/Picture-in-Picture_API#events"
            >Picture-in-Picture API</a
          >, etc.).
        </p>
      </td>
      <td>
        Events fired on
        <a href="/en-US/docs/Web/API/ScriptProcessorNode#events"
          ><code>ScriptProcessorNode</code></a
        >,
        <a href="/en-US/docs/Web/API/HTMLMediaElement#events"
          ><code>HTMLMediaElement</code></a
        >,
        <a href="/en-US/docs/Web/API/AudioTrackList#events"
          ><code>AudioTrackList</code></a
        >,
        <a href="/en-US/docs/Web/API/AudioScheduledSourceNode#events"
          ><code>AudioScheduledSourceNode</code></a
        >,
        <a href="/en-US/docs/Web/API/MediaRecorder#events"
          ><code>MediaRecorder</code></a
        >,
        <a href="/en-US/docs/Web/API/MediaStream#events"
          ><code>MediaStream</code></a
        >,
        <a href="/en-US/docs/Web/API/MediaStreamTrack"
          ><code>MediaStreamTrack</code></a
        >,
        <a href="/en-US/docs/Web/API/VideoTrackList#events"
          ><code>VideoTrackList</code></a
        >,
        <a href="/en-US/docs/Web/API/HTMLTrackElement#events"
          ><code>HTMLTrackElement</code></a
        >,
        <a href="/en-US/docs/Web/API/OfflineAudioContext#events"
          ><code>OfflineAudioContext</code></a
        >,
        <a href="/en-US/docs/Web/API/TextTrack#events"><code>TextTrack</code></a
        >,
        <a href="/en-US/docs/Web/API/TextTrackList#events"
          ><code>TextTrackList</code></a
        >,
        <a href="/en-US/docs/Web/HTML/Element/audio#events">Element/audio</a>,
        <a href="/en-US/docs/Web/HTML/Element/video#events">Element/video</a>.
      </td>
    </tr>
    <tr>
      <td>Messaging</td>
      <td>
        <p>
          Events related to a window receiving a message from another browsing
          context.
        </p>
      </td>
      <td>
        Events fired on
        <a href="/en-US/docs/Web/API/Window#messaging_events"
          ><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Mouse</td>
      <td>
        <p>
          Events related to using a
          <a href="/en-US/docs/Web/API/MouseEvent">computer mouse</a>.
        </p>
        <p>
          Used to notify when the mouse is clicked, doubleclicked, up and down
          events, right-click, movement in and out of an element, text
          selection, etc.
        </p>
        <p>
          Pointer events provide a hardware-agnostic alternative to mouse
          events. Drag and Wheel events are derived from mouse events.
        </p>
      </td>
      <td>
        Mouse events fired on
        <a href="/en-US/docs/Web/API/Element#mouse_events"
          ><code>Element</code></a
        >
      </td>
    </tr>
    <tr>
      <td>Network/Connection</td>
      <td><p>Events related to gaining and losing network connection.</p></td>
      <td>
        <p>
          Events fired on
          <a href="/en-US/docs/Web/API/Window#connection_events"
            ><code>Window</code></a
          >.
        </p>
        <p>
          Events fired on
          <a href="/en-US/docs/Web/API/NetworkInformation#event_handler"
            ><code>NetworkInformation</code></a
          >
          (<a href="/en-US/docs/Web/API/Network_Information_API"
            >Network Information API</a
          >).
        </p>
      </td>
    </tr>
    <tr>
      <td>Payments</td>
      <td>
        <p>
          Events related to the
          <a href="/en-US/docs/Web/API/Payment_Request_API"
            >Payment Request API</a
          >.
        </p>
      </td>
      <td>
        <p>
          Events fired on
          <a href="/en-US/docs/Web/API/PaymentRequest#events"
            ><code>PaymentRequest</code></a
          >,
          <a href="/en-US/docs/Web/API/PaymentResponse#events"
            ><code>PaymentResponse</code></a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td>Performance</td>
      <td>
        <p>
          Events related to
          <a href="/en-US/docs/Web/API/Performance_API"
            >High Resolution Time API</a
          >,
          <a href="/en-US/docs/Web/API/Performance_Timeline"
            >Performance Timeline API</a
          >,
          <a href="/en-US/docs/Web/API/Navigation_timing_API"
            >Navigation Timing API</a
          >, <a href="/en-US/docs/Web/API/User_Timing_API">User Timing API</a>,
          and
          <a href="/en-US/docs/Web/API/Resource_Timing_API"
            >Resource Timing API</a
          >.
        </p>
      </td>
      <td>
        <p>
          Events fired on
          <a href="/en-US/docs/Web/API/Performance#events"
            ><code>Performance</code></a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td>Pointer</td>
      <td>
        <p>
          Events related to the
          <a href="/en-US/docs/Web/API/Pointer_events">Pointer Events API</a>.
        </p>
        <p>
          Provides hardware-agnostic notification from pointing devices
          including Mouse, Touch, pen/stylus.
        </p>
      </td>
      <td>
        Events fired on
        <a href="/en-US/docs/Web/API/Document#pointer_events"
          ><code>Document</code></a
        >,
        <a href="/en-US/docs/Web/API/HTMLElement#pointer_events"
          ><code>HTMLElement</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Print</td>
      <td><p>Events related to printing.</p></td>
      <td>
        Events fired on
        <a href="/en-US/docs/Web/API/Window#print_events"><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Promise rejection</td>
      <td>
        <p>
          Events sent to the global script context when any JavaScript promise
          is rejected.
        </p>
      </td>
      <td>
        Events fired on
        <a href="/en-US/docs/Web/API/Window#promise_rejection_events"
          ><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Sockets</td>
      <td>
        <p>
          Events related to the
          <a href="/en-US/docs/Web/API/WebSockets_API">WebSockets API</a>.
        </p>
      </td>
      <td>
        Events fired on
        <a href="/en-US/docs/Web/API/WebSocket#events"><code>Websocket</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>SVG</td>
      <td><p>Events related to SVG images.</p></td>
      <td>
        <p>
          Events fired on
          <a href="/en-US/docs/Web/API/SVGElement#events"
            ><code>SVGElement</code></a
          >,
          <a href="/en-US/docs/Web/API/SVGAnimationElement#events"
            ><code>SVGAnimationElement</code></a
          >,
          <a href="/en-US/docs/Web/API/SVGGraphicsElement#events"
            ><code>SVGGraphicsElement</code></a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td>Text selection</td>
      <td>
        <p>
          <a href="/en-US/docs/Web/API/Selection">Selection API</a> events
          related to selecting text.
        </p>
      </td>
      <td>
        <p>
          Event (<code>selectionchange</code>) fired on
          {{domxref("HTMLTextAreaElement/selectionchange_event", "HTMLTextAreaElement")}},
          {{domxref("HTMLInputElement/selectionchange_event", "HTMLInputElement")}}.
        </p>
      </td>
    </tr>
    <tr>
      <td>Touch</td>
      <td>
        <p>
          Events related to the
          <a href="/en-US/docs/Web/API/Touch_events">Touch Events API</a>.
        </p>
        <p>
          Provides notification events from interacting with a touch sensitive
          screen (i.e. using a finger or stylus). Not related to the
          <a href="/en-US/docs/Web/API/Force_Touch_events#events"
            >Force Touch API</a
          >.
        </p>
      </td>
      <td>
        Events fired on
        <a href="/en-US/docs/Web/API/Document#touch_events"
          ><code>Document</code></a
        >,
        <a href="/en-US/docs/Web/API/Element#touch_events"
          ><code>Element</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Virtual reality</td>
      <td>
        <p>
          Events related to the
          <a href="/en-US/docs/Web/API/WebXR_Device_API">WebXR Device API</a>.
        </p>
        <div class="notecard warning">
          <p>
            <strong>Warning:</strong> The
            <a href="/en-US/docs/Web/API/WebVR_API">WebVR API</a> (and
            associated
            <a href="/en-US/docs/Web/API/Window#webvr_events"
              ><code>Window</code> events</a
            >) are deprecated.
          </p>
        </div>
      </td>
      <td>
        Events fired on
        <a href="/en-US/docs/Web/API/XRSystem#events"><code>XRSystem</code></a
        >,
        <a href="/en-US/docs/Web/API/XRSession#events"><code>XRSession</code></a
        >,
        <a href="/en-US/docs/Web/API/XRReferenceSpace#events"
          ><code>XRReferenceSpace</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>RTC (real time communication)</td>
      <td>
        <p>
          Events related to the
          <a href="/en-US/docs/Web/API/WebRTC_API">WebRTC API</a>.
        </p>
      </td>
      <td>
        Events fired on
        <a href="/en-US/docs/Web/API/RTCDataChannel#events"
          ><code>RTCDataChannel</code></a
        >,
        <a href="/en-US/docs/Web/API/RTCDTMFSender#events"
          ><code>RTCDTMFSender</code></a
        >,
        <a href="/en-US/docs/Web/API/RTCIceTransport#events"
          ><code>RTCIceTransport</code></a
        >,
        <a href="/en-US/docs/Web/API/RTCPeerConnection#events"
          ><code>RTCPeerConnection</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Server-sent events</td>
      <td>
        <p>
          Events related to the
          <a href="/en-US/docs/Web/API/Server-sent_events"
            >server sent events API</a
          >.
        </p>
      </td>
      <td>
        Events fired on
        <a href="/en-US/docs/Web/API/EventSource#events"
          ><code>EventSource</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Speech</td>
      <td>
        <p>
          Events related to the
          <a href="/en-US/docs/Web/API/Web_Speech_API">Web Speech API</a>.
        </p>
      </td>
      <td>
        Events fired on
        <a href="/en-US/docs/Web/API/SpeechSynthesisUtterance#events"
          ><code>SpeechSynthesisUtterance</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Workers</td>
      <td>
        <p>
          Events related to the
          <a href="/en-US/docs/Web/API/Web_Workers_API">Web Workers API</a>,
          <a href="/en-US/docs/Web/API/Service_Worker_API">Service Worker API</a
          >,
          <a href="/en-US/docs/Web/API/Broadcast_Channel_API"
            >Broadcast Channel API</a
          >, and
          <a href="/en-US/docs/Web/API/Channel_Messaging_API"
            >Channel Messaging API</a
          >.
        </p>
        <p>
          Used to respond to new messages and message sending errors. Service
          workers can also be notified of other events, including push
          notifications, users clicking on displayed notifications, that push
          subscription has been invalidated, deletion of items from the content
          index, etc.
        </p>
      </td>
      <td>
        Events fired on
        <a href="/en-US/docs/Web/API/ServiceWorkerGlobalScope#events"
          ><code>ServiceWorkerGlobalScope</code></a
        >,
        <a href="/en-US/docs/Web/API/DedicatedWorkerGlobalScope#events"
          ><code>DedicatedWorkerGlobalScope</code></a
        >,
        <a href="/en-US/docs/Web/API/SharedWorkerGlobalScope#events"
          ><code>SharedWorkerGlobalScope</code></a
        >,
        <a href="/en-US/docs/Web/API/WorkerGlobalScope#events"
          ><code>WorkerGlobalScope</code></a
        >, <a href="/en-US/docs/Web/API/Worker#events"><code>Worker</code></a
        >,
        <a href="/en-US/docs/Web/API/WorkerGlobalScope#events"
          ><code>WorkerGlobalScope</code></a
        >,
        <a href="/en-US/docs/Web/API/BroadcastChannel#events"
          ><code>BroadcastChannel</code></a
        >,
        <a href="/en-US/docs/Web/API/MessagePort#events"
          ><code>MessagePort</code></a
        >.
      </td>
    </tr>
  </tbody>
</table>

## Event listing

This section lists events that have _their own_ reference pages on MDN. If you are interested in an event that isn't listed here, try searching for its name, topic area, or associated specification on the rest of MDN.

- {{DOMxRef("AbortSignal")}}

  - [abort event](/en-US/docs/Web/API/AbortSignal/abort_event)

- {{DOMxRef("AudioScheduledSourceNode")}}

  - [ended event](/en-US/docs/Web/API/AudioScheduledSourceNode/ended_event)

- {{DOMxRef("AudioTrackList")}}

  - [addtrack event](/en-US/docs/Web/API/AudioTrackList/addtrack_event)
  - [change event](/en-US/docs/Web/API/AudioTrackList/change_event)
  - [removetrack event](/en-US/docs/Web/API/AudioTrackList/removetrack_event)

- {{DOMxRef("BroadcastChannel")}}

  - [messageerror event](/en-US/docs/Web/API/BroadcastChannel/messageerror_event)
  - [message event](/en-US/docs/Web/API/BroadcastChannel/message_event)

- {{DOMxRef("DedicatedWorkerGlobalScope")}}

  - [messageerror event](/en-US/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event)
  - [message event](/en-US/docs/Web/API/DedicatedWorkerGlobalScope/message_event)

- {{DOMxRef("Document")}}

  - [animationcancel event](/en-US/docs/Web/API/Document/animationcancel_event)
  - [animationend event](/en-US/docs/Web/API/Document/animationend_event)
  - [animationiteration event](/en-US/docs/Web/API/Document/animationiteration_event)
  - [animationstart event](/en-US/docs/Web/API/Document/animationstart_event)
  - [copy event](/en-US/docs/Web/API/Document/copy_event)
  - [cut event](/en-US/docs/Web/API/Document/cut_event)
  - [DOMContentLoaded event](/en-US/docs/Web/API/Document/DOMContentLoaded_event)
  - [dragend event](/en-US/docs/Web/API/Document/dragend_event)
  - [dragenter event](/en-US/docs/Web/API/Document/dragenter_event)
  - [dragleave event](/en-US/docs/Web/API/Document/dragleave_event)
  - [dragover event](/en-US/docs/Web/API/Document/dragover_event)
  - [dragstart event](/en-US/docs/Web/API/Document/dragstart_event)
  - [drag event](/en-US/docs/Web/API/Document/drag_event)
  - [drop event](/en-US/docs/Web/API/Document/drop_event)
  - [fullscreenchange event](/en-US/docs/Web/API/Document/fullscreenchange_event)
  - [fullscreenerror event](/en-US/docs/Web/API/Document/fullscreenerror_event)
  - [gotpointercapture event](/en-US/docs/Web/API/Document/gotpointercapture_event)
  - [keydown event](/en-US/docs/Web/API/Document/keydown_event)
  - [keypress event](/en-US/docs/Web/API/Document/keypress_event)
  - [keyup event](/en-US/docs/Web/API/Document/keyup_event)
  - [lostpointercapture event](/en-US/docs/Web/API/Document/lostpointercapture_event)
  - [paste event](/en-US/docs/Web/API/Document/paste_event)
  - [pointercancel event](/en-US/docs/Web/API/Document/pointercancel_event)
  - [pointerdown event](/en-US/docs/Web/API/Document/pointerdown_event)
  - [pointerenter event](/en-US/docs/Web/API/Document/pointerenter_event)
  - [pointerleave event](/en-US/docs/Web/API/Document/pointerleave_event)
  - [pointerlockchange event](/en-US/docs/Web/API/Document/pointerlockchange_event)
  - [pointerlockerror event](/en-US/docs/Web/API/Document/pointerlockerror_event)
  - [pointermove event](/en-US/docs/Web/API/Document/pointermove_event)
  - [pointerout event](/en-US/docs/Web/API/Document/pointerout_event)
  - [pointerover event](/en-US/docs/Web/API/Document/pointerover_event)
  - [pointerup event](/en-US/docs/Web/API/Document/pointerup_event)
  - [readystatechange event](/en-US/docs/Web/API/Document/readystatechange_event)
  - [scroll event](/en-US/docs/Web/API/Document/scroll_event)
  - [selectionchange event](/en-US/docs/Web/API/Document/selectionchange_event)
  - [touchcancel event](/en-US/docs/Web/API/Document/touchcancel_event)
  - [touchend event](/en-US/docs/Web/API/Document/touchend_event)
  - [touchmove event](/en-US/docs/Web/API/Document/touchmove_event)
  - [touchstart event](/en-US/docs/Web/API/Document/touchstart_event)
  - [transitioncancel event](/en-US/docs/Web/API/Document/transitioncancel_event)
  - [transitionend event](/en-US/docs/Web/API/Document/transitionend_event)
  - [transitionrun event](/en-US/docs/Web/API/Document/transitionrun_event)
  - [transitionstart event](/en-US/docs/Web/API/Document/transitionstart_event)
  - [visibilitychange event](/en-US/docs/Web/API/Document/visibilitychange_event)
  - [wheel event](/en-US/docs/Web/API/Document/wheel_event)

- {{DOMxRef("Element")}}

  - [animationcancel event](/en-US/docs/Web/API/Element/animationcancel_event)
  - [animationend event](/en-US/docs/Web/API/Element/animationend_event)
  - [animationiteration event](/en-US/docs/Web/API/Element/animationiteration_event)
  - [animationstart event](/en-US/docs/Web/API/Element/animationstart_event)
  - [afterscriptexecute event](/en-US/docs/Web/API/Element/afterscriptexecute_event)
  - [auxclick event](/en-US/docs/Web/API/Element/auxclick_event)
  - [beforescriptexecute event](/en-US/docs/Web/API/Element/beforescriptexecute_event)
  - [blur event](/en-US/docs/Web/API/Element/blur_event)
  - [click event](/en-US/docs/Web/API/Element/click_event)
  - [compositionend event](/en-US/docs/Web/API/Element/compositionend_event)
  - [compositionstart event](/en-US/docs/Web/API/Element/compositionstart_event)
  - [compositionupdate event](/en-US/docs/Web/API/Element/compositionupdate_event)
  - [contextmenu event](/en-US/docs/Web/API/Element/contextmenu_event)
  - [copy event](/en-US/docs/Web/API/Element/copy_event)
  - [cut event](/en-US/docs/Web/API/Element/cut_event)
  - [dblclick event](/en-US/docs/Web/API/Element/dblclick_event)
  - [DOMActivate event](/en-US/docs/Web/API/Element/DOMActivate_event)
  - [DOMMouseScroll event](/en-US/docs/Web/API/Element/DOMMouseScroll_event)
  - [error event](/en-US/docs/Web/API/Element/error_event)
  - [focusin event](/en-US/docs/Web/API/Element/focusin_event)
  - [focusout event](/en-US/docs/Web/API/Element/focusout_event)
  - [focus event](/en-US/docs/Web/API/Element/focus_event)
  - [fullscreenchange event](/en-US/docs/Web/API/Element/fullscreenchange_event)
  - [fullscreenerror event](/en-US/docs/Web/API/Element/fullscreenerror_event)
  - [gesturechange event](/en-US/docs/Web/API/Element/gesturechange_event)
  - [gestureend event](/en-US/docs/Web/API/Element/gestureend_event)
  - [gesturestart event](/en-US/docs/Web/API/Element/gesturestart_event)
  - [gotpointercapture event](/en-US/docs/Web/API/Element/gotpointercapture_event)
  - [keydown event](/en-US/docs/Web/API/Element/keydown_event)
  - [keypress event](/en-US/docs/Web/API/Element/keypress_event)
  - [keyup event](/en-US/docs/Web/API/Element/keyup_event)
  - [lostpointercapture event](/en-US/docs/Web/API/Element/lostpointercapture_event)
  - [mousedown event](/en-US/docs/Web/API/Element/mousedown_event)
  - [mouseenter event](/en-US/docs/Web/API/Element/mouseenter_event)
  - [mouseleave event](/en-US/docs/Web/API/Element/mouseleave_event)
  - [mousemove event](/en-US/docs/Web/API/Element/mousemove_event)
  - [mouseout event](/en-US/docs/Web/API/Element/mouseout_event)
  - [mouseover event](/en-US/docs/Web/API/Element/mouseover_event)
  - [mouseup event](/en-US/docs/Web/API/Element/mouseup_event)
  - [mousewheel event](/en-US/docs/Web/API/Element/mousewheel_event)
  - [paste event](/en-US/docs/Web/API/Element/paste_event)
  - [pointercancel event](/en-US/docs/Web/API/Element/pointercancel_event)
  - [pointerdown event](/en-US/docs/Web/API/Element/pointerdown_event)
  - [pointerenter event](/en-US/docs/Web/API/Element/pointerenter_event)
  - [pointerleave event](/en-US/docs/Web/API/Element/pointerleave_event)
  - [pointermove event](/en-US/docs/Web/API/Element/pointermove_event)
  - [pointerout event](/en-US/docs/Web/API/Element/pointerout_event)
  - [pointerover event](/en-US/docs/Web/API/Element/pointerover_event)
  - [pointerup event](/en-US/docs/Web/API/Element/pointerup_event)
  - [scroll event](/en-US/docs/Web/API/Element/scroll_event)
  - [select event](/en-US/docs/Web/API/Element/select_event)
  - [touchcancel event](/en-US/docs/Web/API/Element/touchcancel_event)
  - [touchend event](/en-US/docs/Web/API/Element/touchend_event)
  - [touchmove event](/en-US/docs/Web/API/Element/touchmove_event)
  - [touchstart event](/en-US/docs/Web/API/Element/touchstart_event)
  - [transitioncancel event](/en-US/docs/Web/API/Element/transitioncancel_event)
  - [transitionend event](/en-US/docs/Web/API/Element/transitionend_event)
  - [transitionrun event](/en-US/docs/Web/API/Element/transitionrun_event)
  - [transitionstart event](/en-US/docs/Web/API/Element/transitionstart_event)
  - [webkitmouseforcechanged event](/en-US/docs/Web/API/Element/webkitmouseforcechanged_event)
  - [webkitmouseforcedown event](/en-US/docs/Web/API/Element/webkitmouseforcedown_event)
  - [webkitmouseforceup event](/en-US/docs/Web/API/Element/webkitmouseforceup_event)
  - [webkitmouseforcewillbegin event](/en-US/docs/Web/API/Element/webkitmouseforcewillbegin_event)
  - [wheel event](/en-US/docs/Web/API/Element/wheel_event)

- {{DOMxRef("EventSource")}}

  - [error event](/en-US/docs/Web/API/EventSource/error_event)
  - [message event](/en-US/docs/Web/API/EventSource/message_event)
  - [open event](/en-US/docs/Web/API/EventSource/open_event)

- {{DOMxRef("FileReader")}}

  - [abort event](/en-US/docs/Web/API/FileReader/abort_event)
  - [error event](/en-US/docs/Web/API/FileReader/error_event)
  - [loadend event](/en-US/docs/Web/API/FileReader/loadend_event)
  - [loadstart event](/en-US/docs/Web/API/FileReader/loadstart_event)
  - [load event](/en-US/docs/Web/API/FileReader/load_event)
  - [progress event](/en-US/docs/Web/API/FileReader/progress_event)

- {{DOMxRef("HTMLCanvasElement")}}

  - [webglcontextcreationerror event](/en-US/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)
  - [webglcontextlost event](/en-US/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)
  - [webglcontextrestored event](/en-US/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event)

- {{DOMxRef("HTMLDetailsElement")}}

  - [toggle event](/en-US/docs/Web/API/HTMLDetailsElement/toggle_event)

- {{DOMxRef("HTMLDialogElement")}}

  - [cancel event](/en-US/docs/Web/API/HTMLDialogElement/cancel_event)
  - [close event](/en-US/docs/Web/API/HTMLDialogElement/close_event)

- {{DOMxRef("HTMLElement")}}

  - [beforeinput event](/en-US/docs/Web/API/HTMLElement/beforeinput_event)
  - [change event](/en-US/docs/Web/API/HTMLElement/change_event)
  - [input event](/en-US/docs/Web/API/HTMLElement/input_event)

- {{DOMxRef("HTMLFormElement")}}

  - [formdata event](/en-US/docs/Web/API/HTMLFormElement/formdata_event)
  - [reset event](/en-US/docs/Web/API/HTMLFormElement/reset_event)
  - [submit event](/en-US/docs/Web/API/HTMLFormElement/submit_event)

- {{DOMxRef("HTMLInputElement")}}

  - [invalid event](/en-US/docs/Web/API/HTMLInputElement/invalid_event)
  - [search event](/en-US/docs/Web/API/HTMLInputElement/search_event)

- {{DOMxRef("HTMLMediaElement")}}

  - [abort event](/en-US/docs/Web/API/HTMLMediaElement/abort_event)
  - [canplaythrough event](/en-US/docs/Web/API/HTMLMediaElement/canplaythrough_event)
  - [canplay event](/en-US/docs/Web/API/HTMLMediaElement/canplay_event)
  - [durationchange event](/en-US/docs/Web/API/HTMLMediaElement/durationchange_event)
  - [emptied event](/en-US/docs/Web/API/HTMLMediaElement/emptied_event)
  - [ended event](/en-US/docs/Web/API/HTMLMediaElement/ended_event)
  - [error event](/en-US/docs/Web/API/HTMLMediaElement/error_event)
  - [loadeddata event](/en-US/docs/Web/API/HTMLMediaElement/loadeddata_event)
  - [loadedmetadata event](/en-US/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
  - [loadstart event](/en-US/docs/Web/API/HTMLMediaElement/loadstart_event)
  - [pause event](/en-US/docs/Web/API/HTMLMediaElement/pause_event)
  - [playing event](/en-US/docs/Web/API/HTMLMediaElement/playing_event)
  - [play event](/en-US/docs/Web/API/HTMLMediaElement/play_event)
  - [progress event](/en-US/docs/Web/API/HTMLMediaElement/progress_event)
  - [ratechange event](/en-US/docs/Web/API/HTMLMediaElement/ratechange_event)
  - [seeked event](/en-US/docs/Web/API/HTMLMediaElement/seeked_event)
  - [seeking event](/en-US/docs/Web/API/HTMLMediaElement/seeking_event)
  - [stalled event](/en-US/docs/Web/API/HTMLMediaElement/stalled_event)
  - [suspend event](/en-US/docs/Web/API/HTMLMediaElement/suspend_event)
  - [timeupdate event](/en-US/docs/Web/API/HTMLMediaElement/timeupdate_event)
  - [volumechange event](/en-US/docs/Web/API/HTMLMediaElement/volumechange_event)
  - [waiting event](/en-US/docs/Web/API/HTMLMediaElement/waiting_event)

- {{DOMxRef("HTMLSlotElement")}}

  - [slotchange event](/en-US/docs/Web/API/HTMLSlotElement/slotchange_event)

- {{DOMxRef("HTMLTrackElement")}}

  - [cuechange event](/en-US/docs/Web/API/HTMLTrackElement/cuechange_event)

- {{DOMxRef("HTMLVideoElement")}}

  - [enterpictureinpicture event](/en-US/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event)
  - [leavepictureinpicture event](/en-US/docs/Web/API/HTMLVideoElement/leavepictureinpicture_event)

- {{DOMxRef("IDBDatabase")}}

  - [abort event](/en-US/docs/Web/API/IDBTransaction/abort_event)
  - [close event](/en-US/docs/Web/API/IDBDatabase/close_event)
  - [error event](/en-US/docs/Web/API/IDBTransaction/error_event)
  - [versionchange event](/en-US/docs/Web/API/IDBDatabase/versionchange_event)

- {{DOMxRef("IDBOpenDBRequest")}}

  - [blocked event](/en-US/docs/Web/API/IDBOpenDBRequest/blocked_event)
  - [upgradeneeded event](/en-US/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event)

- {{DOMxRef("IDBRequest")}}

  - [error event](/en-US/docs/Web/API/IDBRequest/error_event)
  - [success event](/en-US/docs/Web/API/IDBRequest/success_event)

- {{DOMxRef("IDBTransaction")}}

  - [abort event](/en-US/docs/Web/API/IDBTransaction/abort_event)
  - [complete event](/en-US/docs/Web/API/IDBTransaction/complete_event)
  - [error event](/en-US/docs/Web/API/IDBTransaction/error_event)

- {{DOMxRef("MediaDevices")}}

  - [devicechange event](/en-US/docs/Web/API/MediaDevices/devicechange_event)

- {{DOMxRef("MediaRecorder")}}

  - [error event](/en-US/docs/Web/API/MediaRecorder/error_event)

- {{DOMxRef("MediaStream")}}

  - [addtrack event](/en-US/docs/Web/API/MediaStream/addtrack_event)
  - [removetrack event](/en-US/docs/Web/API/MediaStream/removetrack_event)

- {{DOMxRef("MediaStreamTrack")}}

  - [ended event](/en-US/docs/Web/API/MediaStreamTrack/ended_event)
  - [mute event](/en-US/docs/Web/API/MediaStreamTrack/mute_event)
  - [unmute event](/en-US/docs/Web/API/MediaStreamTrack/unmute_event)

- {{DOMxRef("MediaQueryList")}}

  - [change event](/en-US/docs/Web/API/MediaQueryList/change_event)

- {{DOMxRef("MessagePort")}}

  - [messageerror event](/en-US/docs/Web/API/MessagePort/messageerror_event)
  - [message event](/en-US/docs/Web/API/MessagePort/message_event)

- {{DOMxRef("OfflineAudioContext")}}

  - [complete event](/en-US/docs/Web/API/OfflineAudioContext/complete_event)

- {{DOMxRef("PaymentRequest")}}

  - [merchantvalidation event](/en-US/docs/Web/API/PaymentRequest/merchantvalidation_event)
  - [paymentmethodchange event](/en-US/docs/Web/API/PaymentRequest/paymentmethodchange_event)
  - [shippingaddresschange event](/en-US/docs/Web/API/PaymentRequest/shippingaddresschange_event)
  - [shippingoptionchange event](/en-US/docs/Web/API/PaymentRequest/shippingoptionchange_event)

- {{DOMxRef("PaymentResponse")}}

  - [payerdetailchange event](/en-US/docs/Web/API/PaymentResponse/payerdetailchange_event)

- {{DOMxRef("Performance")}}

  - [resourcetimingbufferfull event](/en-US/docs/Web/API/Performance/resourcetimingbufferfull_event)

- {{DOMxRef("PictureInPictureWindow")}}

  - [resize event](/en-US/docs/Web/API/PictureInPictureWindow/resize_event)

- {{DOMxRef("RTCDataChannel")}}

  - [bufferedamountlow event](/en-US/docs/Web/API/RTCDataChannel/bufferedamountlow_event)
  - [close event](/en-US/docs/Web/API/RTCDataChannel/close_event)
  - [closing event](/en-US/docs/Web/API/RTCDataChannel/closing_event)
  - [error event](/en-US/docs/Web/API/RTCDataChannel/error_event)
  - [message event](/en-US/docs/Web/API/RTCDataChannel/message_event)
  - [open event](/en-US/docs/Web/API/RTCDataChannel/open_event)

- {{DOMxRef("RTCDtlsTransport")}}

  - [error event](/en-US/docs/Web/API/RTCDtlsTransport/error_event)

- {{DOMxRef("RTCDTMFSender")}}

  - [tonechange event](/en-US/docs/Web/API/RTCDTMFSender/tonechange_event)

- {{DOMxRef("RTCIceTransport")}}

  - [gatheringstatechange event](/en-US/docs/Web/API/RTCIceTransport/gatheringstatechange_event)
  - [selectedcandidatepairchange event](/en-US/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event)
  - [statechange event](/en-US/docs/Web/API/RTCIceTransport/statechange_event)

- {{DOMxRef("RTCPeerConnection")}}

  - [addstream event](/en-US/docs/Web/API/RTCPeerConnection/addstream_event)
  - [connectionstatechange event](/en-US/docs/Web/API/RTCPeerConnection/connectionstatechange_event)
  - [datachannel event](/en-US/docs/Web/API/RTCPeerConnection/datachannel_event)
  - [icecandidateerror event](/en-US/docs/Web/API/RTCPeerConnection/icecandidateerror_event)
  - [icecandidate event](/en-US/docs/Web/API/RTCPeerConnection/icecandidate_event)
  - [iceconnectionstatechange event](/en-US/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)
  - [icegatheringstatechange event](/en-US/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)
  - [negotiationneeded event](/en-US/docs/Web/API/RTCPeerConnection/negotiationneeded_event)
  - [removestream event](/en-US/docs/Web/API/RTCPeerConnection/removestream_event)
  - [signalingstatechange event](/en-US/docs/Web/API/RTCPeerConnection/signalingstatechange_event)
  - [track event](/en-US/docs/Web/API/RTCPeerConnection/track_event)

- {{DOMxRef("ScriptProcessorNode")}}

  - [audioprocess event](/en-US/docs/Web/API/ScriptProcessorNode/audioprocess_event)

- {{DOMxRef("ServiceWorkerContainer")}}

  - [message event](/en-US/docs/Web/API/ServiceWorkerContainer/message_event)

- {{DOMxRef("ServiceWorkerGlobalScope")}}

  - [activate event](/en-US/docs/Web/API/ServiceWorkerGlobalScope/activate_event)
  - [contentdelete event](/en-US/docs/Web/API/ServiceWorkerGlobalScope/contentdelete_event)
  - [install event](/en-US/docs/Web/API/ServiceWorkerGlobalScope/install_event)
  - [message event](/en-US/docs/Web/API/ServiceWorkerGlobalScope/message_event)
  - [notificationclick event](/en-US/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event)
  - [pushsubscriptionchange event](/en-US/docs/Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event)
  - [push event](/en-US/docs/Web/API/ServiceWorkerGlobalScope/push_event)

- {{DOMxRef("SharedWorkerGlobalScope")}}

  - [connect event](/en-US/docs/Web/API/SharedWorkerGlobalScope/connect_event)

- {{DOMxRef("SpeechRecognition")}}

  - [audioend event](/en-US/docs/Web/API/SpeechRecognition/audioend_event)
  - [audiostart event](/en-US/docs/Web/API/SpeechRecognition/audiostart_event)
  - [end event](/en-US/docs/Web/API/SpeechRecognition/end_event)
  - [error event](/en-US/docs/Web/API/SpeechRecognition/error_event)
  - [nomatch event](/en-US/docs/Web/API/SpeechRecognition/nomatch_event)
  - [result event](/en-US/docs/Web/API/SpeechRecognition/result_event)
  - [soundend event](/en-US/docs/Web/API/SpeechRecognition/soundend_event)
  - [soundstart event](/en-US/docs/Web/API/SpeechRecognition/soundstart_event)
  - [speechend event](/en-US/docs/Web/API/SpeechRecognition/speechend_event)
  - [speechstart event](/en-US/docs/Web/API/SpeechRecognition/speechstart_event)
  - [start event](/en-US/docs/Web/API/SpeechRecognition/start_event)

- {{DOMxRef("SpeechSynthesis")}}

  - [voiceschanged event](/en-US/docs/Web/API/SpeechSynthesis/voiceschanged_event)

- {{DOMxRef("SpeechSynthesisUtterance")}}

  - [boundary event](/en-US/docs/Web/API/SpeechSynthesisUtterance/boundary_event)
  - [end event](/en-US/docs/Web/API/SpeechSynthesisUtterance/end_event)
  - [error event](/en-US/docs/Web/API/SpeechSynthesisUtterance/error_event)
  - [mark event](/en-US/docs/Web/API/SpeechSynthesisUtterance/mark_event)
  - [pause event](/en-US/docs/Web/API/SpeechSynthesisUtterance/pause_event)
  - [resume event](/en-US/docs/Web/API/SpeechSynthesisUtterance/resume_event)
  - [start event](/en-US/docs/Web/API/SpeechSynthesisUtterance/start_event)

- {{DOMxRef("SVGAnimationElement")}}

  - [beginEvent event](/en-US/docs/Web/API/SVGAnimationElement/beginEvent_event)
  - [endEvent event](/en-US/docs/Web/API/SVGAnimationElement/endEvent_event)
  - [repeatEvent event](/en-US/docs/Web/API/SVGAnimationElement/repeatEvent_event)

- {{DOMxRef("SVGElement")}}

  - [abort event](/en-US/docs/Web/API/SVGElement/abort_event)
  - [error event](/en-US/docs/Web/API/SVGElement/error_event)
  - [load event](/en-US/docs/Web/API/SVGElement/load_event)
  - [resize event](/en-US/docs/Web/API/SVGElement/resize_event)
  - [scroll event](/en-US/docs/Web/API/SVGElement/scroll_event)
  - [unload event](/en-US/docs/Web/API/SVGElement/unload_event)

- {{DOMxRef("SVGGraphicsElement")}}

  - [copy event](/en-US/docs/Web/API/SVGGraphicsElement/copy_event)
  - [cut event](/en-US/docs/Web/API/SVGGraphicsElement/cut_event)
  - [paste event](/en-US/docs/Web/API/SVGGraphicsElement/paste_event)

- {{DOMxRef("TextTrack")}}

  - [cuechange event](/en-US/docs/Web/API/TextTrack/cuechange_event)

- {{DOMxRef("TextTrackList")}}

  - [addtrack event](/en-US/docs/Web/API/TextTrackList/addtrack_event)
  - [change event](/en-US/docs/Web/API/TextTrackList/change_event)
  - [removeTrack event](/en-US/docs/Web/API/TextTrackList/removeTrack_event)

- {{DOMxRef("VideoTrackList")}}

  - [addtrack event](/en-US/docs/Web/API/VideoTrackList/addtrack_event)
  - [change event](/en-US/docs/Web/API/VideoTrackList/change_event)
  - [removetrack event](/en-US/docs/Web/API/VideoTrackList/removetrack_event)

- {{DOMxRef("VisualViewport")}}

  - [resize event](/en-US/docs/Web/API/VisualViewport/resize_event)
  - [scroll event](/en-US/docs/Web/API/VisualViewport/scroll_event)

- {{DOMxRef("WebSocket")}}

  - [close event](/en-US/docs/Web/API/WebSocket/close_event)
  - [error event](/en-US/docs/Web/API/WebSocket/error_event)
  - [message event](/en-US/docs/Web/API/WebSocket/message_event)
  - [open event](/en-US/docs/Web/API/WebSocket/open_event)

- {{DOMxRef("Window")}}

  - [afterprint event](/en-US/docs/Web/API/Window/afterprint_event)
  - [animationcancel event](/en-US/docs/Web/API/Window/animationcancel_event)
  - [animationend event](/en-US/docs/Web/API/Window/animationend_event)
  - [animationiteration event](/en-US/docs/Web/API/Window/animationiteration_event)
  - [animationstart event](/en-US/docs/Web/API/Window/animationstart_event)
  - [appinstalled event](/en-US/docs/Web/API/Window/appinstalled_event)
  - [beforeprint event](/en-US/docs/Web/API/Window/beforeprint_event)
  - [beforeunload event](/en-US/docs/Web/API/Window/beforeunload_event)
  - [blur event](/en-US/docs/Web/API/Window/blur_event)
  - [copy event](/en-US/docs/Web/API/Window/copy_event)
  - [cut event](/en-US/docs/Web/API/Window/cut_event)
  - [devicemotion event](/en-US/docs/Web/API/Window.devicemotion_event)
  - [deviceorientation event](/en-US/docs/Web/API/Window.deviceorientation_event)
  - [DOMContentLoaded event](/en-US/docs/Web/API/Window/DOMContentLoaded_event)
  - [error event](/en-US/docs/Web/API/Window/error_event)
  - [focus event](/en-US/docs/Web/API/Window/focus_event)
  - [gamepadconnected event](/en-US/docs/Web/API/Window/gamepadconnected_event)
  - [gamepaddisconnected event](/en-US/docs/Web/API/Window/gamepaddisconnected_event)
  - [hashchange event](/en-US/docs/Web/API/Window/hashchange_event)
  - [languagechange event](/en-US/docs/Web/API/Window/languagechange_event)
  - [load event](/en-US/docs/Web/API/Window/load_event)
  - [messageerror event](/en-US/docs/Web/API/Window/messageerror_event)
  - [message event](/en-US/docs/Web/API/Window/message_event)
  - [offline event](/en-US/docs/Web/API/Window/offline_event)
  - [online event](/en-US/docs/Web/API/Window/online_event)
  - [orientationchange event](/en-US/docs/Web/API/Window/orientationchange_event)
  - [pagehide event](/en-US/docs/Web/API/Window/pagehide_event)
  - [pageshow event](/en-US/docs/Web/API/Window/pageshow_event)
  - [paste event](/en-US/docs/Web/API/Window/paste_event)
  - [popstate event](/en-US/docs/Web/API/Window/popstate_event)
  - [rejectionhandled event](/en-US/docs/Web/API/Window/rejectionhandled_event)
  - [resize event](/en-US/docs/Web/API/Window/resize_event)
  - [storage event](/en-US/docs/Web/API/Window/storage_event)
  - [transitioncancel event](/en-US/docs/Web/API/Window/transitioncancel_event)
  - [transitionend event](/en-US/docs/Web/API/Window/transitionend_event)
  - [transitionrun event](/en-US/docs/Web/API/Window/transitionrun_event)
  - [transitionstart event](/en-US/docs/Web/API/Window/transitionstart_event)
  - [unhandledrejection event](/en-US/docs/Web/API/Window/unhandledrejection_event)
  - [unload event](/en-US/docs/Web/API/Window/unload_event)
  - [vrdisplayactivate event](/en-US/docs/Web/API/Window/vrdisplayactivate_event)
  - [vrdisplayblur event](/en-US/docs/Web/API/Window/vrdisplayblur_event)
  - [vrdisplayconnect event](/en-US/docs/Web/API/Window/vrdisplayconnect_event)
  - [vrdisplaydeactivate event](/en-US/docs/Web/API/Window/vrdisplaydeactivate_event)
  - [vrdisplaydisconnect event](/en-US/docs/Web/API/Window/vrdisplaydisconnect_event)
  - [vrdisplayfocus event](/en-US/docs/Web/API/Window/vrdisplayfocus_event)
  - [vrdisplaypointerrestricted event](/en-US/docs/Web/API/Window/vrdisplaypointerrestricted_event)
  - [vrdisplaypointerunrestricted event](/en-US/docs/Web/API/Window/vrdisplaypointerunrestricted_event)
  - [vrdisplaypresentchange event](/en-US/docs/Web/API/Window/vrdisplaypresentchange_event)

- {{DOMxRef("Worker")}}

  - [messageerror event](/en-US/docs/Web/API/Worker/messageerror_event)
  - [message event](/en-US/docs/Web/API/Worker/message_event)

- {{DOMxRef("WorkerGlobalScope")}}

  - [languagechange event](/en-US/docs/Web/API/WorkerGlobalScope/languagechange_event)

- {{DOMxRef("XMLHttpRequest")}}

  - [abort event](/en-US/docs/Web/API/XMLHttpRequest/abort_event)
  - [error event](/en-US/docs/Web/API/XMLHttpRequest/error_event)
  - [loadend event](/en-US/docs/Web/API/XMLHttpRequest/loadend_event)
  - [loadstart event](/en-US/docs/Web/API/XMLHttpRequest/loadstart_event)
  - [load event](/en-US/docs/Web/API/XMLHttpRequest/load_event)
  - [progress event](/en-US/docs/Web/API/XMLHttpRequest/progress_event)
  - [timeout event](/en-US/docs/Web/API/XMLHttpRequest/timeout_event)

- {{DOMxRef("XRReferenceSpace")}}

  - [reset event](/en-US/docs/Web/API/XRReferenceSpace/reset_event)

- {{DOMxRef("XRSession")}}

  - [end event](/en-US/docs/Web/API/XRSession/end_event)
  - [inputsourceschange event](/en-US/docs/Web/API/XRSession/inputsourceschange_event)
  - [selectend event](/en-US/docs/Web/API/XRSession/selectend_event)
  - [selectstart event](/en-US/docs/Web/API/XRSession/selectstart_event)
  - [select event](/en-US/docs/Web/API/XRSession/select_event)
  - [squeezeend event](/en-US/docs/Web/API/XRSession/squeezeend_event)
  - [squeezestart event](/en-US/docs/Web/API/XRSession/squeezestart_event)
  - [squeeze event](/en-US/docs/Web/API/XRSession/squeeze_event)
  - [visibilitychange event](/en-US/docs/Web/API/XRSession/visibilitychange_event)

- {{DOMxRef("XRSystem")}}

  - [devicechange event](/en-US/docs/Web/API/XRSystem/devicechange_event)

## Specifications

{{Specifications}}

<section id="Quick_links">
  <ol>
    <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Events">Introduction to events</a></li>
  </ol>{{ListSubpages}}
</section>
