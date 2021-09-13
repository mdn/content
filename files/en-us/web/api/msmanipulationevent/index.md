---
title: MSManipulationEvent
slug: Web/API/MSManipulationEvent
tags:
  - API
  - API:Microsoft Extensions
  - Event
  - Event:Microsoft Extensions
  - Interface
  - MSManipulationEvent
  - Non-standard
  - Reference
---
<div>{{APIRef("Microsoft Extensions")}}{{Non-standard_Header}}</div>

<p><code><strong>MSManipulationEvent</strong></code> provides contextual information when contact is made to the screen and an element is manipulated.</p>

<p>This proprietary method is specific to Internet Explorer.</p>

<h3 id="Events">Events</h3>

<p>{{Event("MSManipulationStateChanged")}}: Event fires when the state of an element being manipulated has changed.</p>

<h3 id="Methods">Methods</h3>

<p>{{DOMxRef("MSManipulationEvent.initMSManipulationEvent()")}}: Used to create a manipulation event that can be called from JavaScript.</p>

<h3 id="Properties">Properties</h3>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Property</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>currentState</code>{{ReadOnlyInline}}</td>
   <td>Returns the current state of a manipulation event.</td>
  </tr>
  <tr>
   <td><code>inertiaDestinationX</code>{{ReadOnlyInline}}</td>
   <td>Represents the predicted horizontal scroll offset after the inertia phase completes.</td>
  </tr>
  <tr>
   <td><code>inertiaDestinationY</code>{{ReadOnlyInline}}</td>
   <td>Represents the predicted vertical scroll offset after the inertia phase completes.</td>
  </tr>
  <tr>
   <td><code>lastState</code>{{ReadOnlyInline}}</td>
   <td>Returns the last state after a manipulation change event.</td>
  </tr>
 </tbody>
</table>

<h2 id="Example">Example</h2>

<pre class="brush: js">interface MSManipulationEvent extends UIEvent {
    readonly currentState: number;
    readonly inertiaDestinationX: number;
    readonly inertiaDestinationY: number;
    readonly lastState: number;
    initMSManipulationEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, lastState: number, currentState: number): void;
    readonly MS_MANIPULATION_STATE_ACTIVE: number;
    readonly MS_MANIPULATION_STATE_CANCELLED: number;
    readonly MS_MANIPULATION_STATE_COMMITTED: number;
    readonly MS_MANIPULATION_STATE_DRAGGING: number;
    readonly MS_MANIPULATION_STATE_INERTIA: number;
    readonly MS_MANIPULATION_STATE_PRESELECT: number;
    readonly MS_MANIPULATION_STATE_SELECTING: number;
    readonly MS_MANIPULATION_STATE_STOPPED: number;
}
</pre>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{DOMxRef("TouchEvent")}}</li>
 <li>{{Event("MSManipulationStateChanged")}}</li>
 <li><a href="/en-US/docs/Web/API/Microsoft_Extensions">Microsoft API extensions </a></li>
</ul>
