---
title: DOM events
short-title: Working with events
slug: Web/API/Document_Object_Model/Events
page-type: guide
spec-urls:
  - https://dom.spec.whatwg.org/#events
  - https://html.spec.whatwg.org/multipage/indices.html#events-2
---

{{DefaultAPISidebar("DOM")}}

[Events](/en-US/docs/Learn_web_development/Core/Scripting/Events) are fired to notify code of "interesting changes" that may affect code execution. These can arise from user interactions such as using a mouse or resizing a window, changes in the state of the underlying environment (e.g., low battery or media events from the operating system), and other causes.

Each event is represented by an object that is based on the {{domxref("Event")}} interface, and may have additional custom fields and/or functions to provide information about what happened. The documentation for every event has a table (near the top) that includes a link to the associated event interface, and other relevant information. A full list of the different event types is given in [Event > Interfaces based on Event](/en-US/docs/Web/API/Event#interfaces_based_on_event).

This topic provides an index to the main _sorts_ of events you might be interested in (animation, clipboard, workers etc.) along with the main classes that implement those sorts of events.

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
          Used to respond to changes in animation status (e.g., when an animation
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
          <a href="/en-US/docs/Web/CSS/CSS_transitions">CSS Transitions</a>.
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
          <a href="/en-US/docs/Web/Progressive_web_apps/Manifest">progressive web app manifests</a>.
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
        <a href="/en-US/docs/Web/HTML/Reference/Elements/audio#events">Element/audio</a>,
        <a href="/en-US/docs/Web/HTML/Reference/Elements/video#events">Element/video</a>.
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
          Used to notify when the mouse is clicked, double-clicked, up and down
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
          Events related to any performance-related spec grouped into
          <a href="/en-US/docs/Web/API/Performance_API"
            >Performance APIs</a
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
        <a href="/en-US/docs/Web/API/WebSocket#events"><code>WebSocket</code></a
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
          screen (i.e., using a finger or stylus). Not related to the
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
            <a href="/en-US/docs/Web/API/WebVR_API#window_events"
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
        >,
        <a href="/en-US/docs/Web/API/Worker#events"
          ><code>Worker</code></a
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

## Creating and dispatching events

In addition to the events fired by built-in interfaces, you can create and dispatch DOM events yourself. Such events are commonly called _synthetic events_, as opposed to the events fired by the browser.

### Creating custom events

Events can be created with the [`Event`](/en-US/docs/Web/API/Event) constructor as follows:

```js
const event = new Event("build");

// Listen for the event.
elem.addEventListener(
  "build",
  (e) => {
    /* … */
  },
  false,
);

// Dispatch the event.
elem.dispatchEvent(event);
```

This code example uses the [EventTarget.dispatchEvent()](/en-US/docs/Web/API/EventTarget/dispatchEvent) method.

### Adding custom data – CustomEvent()

To add more data to the event object, the [CustomEvent](/en-US/docs/Web/API/CustomEvent) interface exists and the **detail** property can be used to pass custom data.
For example, the event could be created as follows:

```js
const event = new CustomEvent("build", { detail: elem.dataset.time });
```

This will then allow you to access the additional data in the event listener:

```js
function eventHandler(e) {
  console.log(`The time is: ${e.detail}`);
}
```

### Adding custom data – subclassing Event

The [`Event`](/en-US/docs/Web/API/Event) interface can also be subclassed. This is particularly useful for reuse, or for more complex custom data, or even adding methods to the event.

```js
class BuildEvent extends Event {
  #buildTime;

  constructor(buildTime) {
    super("build");
    this.#buildTime = buildTime;
  }

  get buildTime() {
    return this.#buildTime;
  }
}
```

This code example defines a `BuildEvent` class with a read-only property and a fixed event type.

The event could then be created as follows:

```js
const event = new BuildEvent(elem.dataset.time);
```

The additional data can then be accessed in the event listeners using the custom properties:

```js
function eventHandler(e) {
  console.log(`The time is: ${e.buildTime}`);
}
```

### Event bubbling

It is often desirable to trigger an event from a child element and have an ancestor catch it; optionally, you can include data with the event:

```html
<form>
  <textarea></textarea>
</form>
```

```js
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");

// Create a new event, allow bubbling, and provide any data you want to pass to the "detail" property
const eventAwesome = new CustomEvent("awesome", {
  bubbles: true,
  detail: { text: () => textarea.value },
});

// The form element listens for the custom "awesome" event and then consoles the output of the passed text() method
form.addEventListener("awesome", (e) => console.log(e.detail.text()));

// As the user types, the textarea inside the form dispatches/triggers the event to fire, using itself as the starting point
textarea.addEventListener("input", (e) => e.target.dispatchEvent(eventAwesome));
```

### Creating and dispatching events dynamically

Elements can listen for events that haven't been created yet:

```html
<form>
  <textarea></textarea>
</form>
```

```js
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");

form.addEventListener("awesome", (e) => console.log(e.detail.text()));

textarea.addEventListener("input", function () {
  // Create and dispatch/trigger an event on the fly
  // Note: Optionally, we've also leveraged the "function expression" (instead of the "arrow function expression") so "this" will represent the element
  this.dispatchEvent(
    new CustomEvent("awesome", {
      bubbles: true,
      detail: { text: () => textarea.value },
    }),
  );
});
```

## Triggering built-in events

This example demonstrates simulating a click (that is programmatically generating a click event) on a checkbox using DOM methods. [View the example in action.](https://mdn.dev/archives/media/samples/domref/dispatchEvent.html)

```js
function simulateClick() {
  const event = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  const cb = document.getElementById("checkbox");
  const cancelled = !cb.dispatchEvent(event);

  if (cancelled) {
    // A handler called preventDefault.
    alert("cancelled");
  } else {
    // None of the handlers called preventDefault.
    alert("not cancelled");
  }
}
```

## Registering event handlers

There are two recommended approaches for registering handlers. Event handler code can be made to run when an event is triggered either by assigning it to the target element's corresponding _onevent_ property or by registering the handler as a listener for the element using the {{domxref("EventTarget.addEventListener", "addEventListener()")}} method. In either case, the handler will receive an object that conforms to the [`Event` interface](/en-US/docs/Web/API/Event) (or a [derived interface](/en-US/docs/Web/API/Event#interfaces_based_on_event)). The main difference is that multiple event handlers can be added (or removed) using the event listener methods.

> [!WARNING]
> A third approach for setting event handlers using HTML onevent attributes is not recommended! They inflate the markup and make it less readable and harder to debug. For more information, see [Inline event handlers](/en-US/docs/Learn_web_development/Core/Scripting/Events#inline_event_handlers_—_dont_use_these).

### Using onevent properties

By convention, JavaScript objects that fire events have corresponding "onevent" properties (named by prefixing "on" to the name of the event). These properties are called to run associated handler code when the event is fired, and may also be called directly by your own code.

To set event handler code, you can just assign it to the appropriate onevent property. Only one event handler can be assigned for every event in an element. If needed, the handler can be replaced by assigning another function to the same property.

The following example shows how to set a `greet()` function for the `click` event using the `onclick` property.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.onclick = greet;
```

Note that an object representing the event is passed as the first argument to the event handler. This event object either implements or is derived from the {{domxref("Event")}} interface.

### EventTarget.addEventListener

The most flexible way to set an event handler on an element is to use the {{domxref("EventTarget.addEventListener")}} method. This approach allows multiple listeners to be assigned to an element and enables listeners to be _removed_, if needed, using {{domxref("EventTarget.removeEventListener")}}.

> [!NOTE]
> The ability to add and remove event handlers allows you to, for example, have the same button performing different actions in different circumstances. In addition, in more complex programs, cleaning up old/unused event handlers can improve efficiency.

The following example shows how a `greet()` function can be set as a listener/event handler for the `click` event (you could use an anonymous function expression instead of a named function if desired). Note again that the event is passed as the first argument to the event handler.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.addEventListener("click", greet);
```

The method can also take additional arguments/options to control aspects of how the events are captured and removed. More information can be found on the {{domxref("EventTarget.addEventListener")}} reference page.

#### Using AbortSignal

A notable event listener feature is the ability to use an abort signal to clean up multiple event handlers at the same time.

This is done by passing the same {{domxref("AbortSignal")}} to the {{domxref("EventTarget/addEventListener()", "addEventListener()")}} call for all the event handlers that you want to be able to remove together. You can then call {{domxref("AbortController/abort()", "abort()")}} on the controller owning the `AbortSignal`, and it will remove all event handlers that were added with that signal. For example, to add an event handler that we can remove with an `AbortSignal`:

```js
const controller = new AbortController();

btn.addEventListener(
  "click",
  (event) => {
    console.log("greet:", event);
  },
  { signal: controller.signal },
); // pass an AbortSignal to this handler
```

This event handler can then be removed like this:

```js
controller.abort(); // removes any/all event handlers associated with this controller
```

### Interaction of multiple event handlers

The `onevent` IDL property (for example, `element.onclick = ...`) and the HTML `onevent` content attribute (for example, `<button onclick="...">`) both target the same single handler slot. HTML loads before JavaScript could access the same element, so usually JavaScript replaces what's specified in HTML. Handlers added with {{domxref("EventTarget.addEventListener", "addEventListener()")}} are independent. Using `onevent` does not remove or replace listeners added with `addEventListener()`, and vice versa.

When an event is dispatched, listeners are called in phases. There are two phases: _capture_ and _bubble_. In the capture phase, the event starts from the highest ancestor element and moves down the DOM tree until it reaches the target. In the bubble phase, the event moves in the opposite direction. Event listeners by default listen in the bubble phase, and they can listen in the capturing phase by specifying `capture: true` with `addEventListener()`. Within a phase, listeners run in the order they were registered. The `onevent` handler is registered the first time it becomes non-null; later reassignments change only its callback, not its position in the order.

Calling {{domxref("Event.stopPropagation()")}} prevents calling listeners on other elements later in the propagation chain. {{domxref("Event.stopImmediatePropagation()")}} also prevents calling remaining listeners on the same element.

## Specifications

{{Specifications}}

## See also

- [Introduction to events](/en-US/docs/Learn_web_development/Core/Scripting/Events)
- [Event bubbling](/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling)
