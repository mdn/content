---
title: Keyboard-navigable JavaScript widgets
slug: Web/Accessibility/Keyboard-navigable_JavaScript_widgets
tags:
  - Accessibility
  - DOM
  - NeedsUpdate
---
<h3 id="Overview">Overview</h3>

<p>Web applications often use JavaScript to mimic desktop widgets such as menus, tree views, rich text fields, and tab panels. These widgets are typically composed of {{ HTMLElement("div") }} and {{ HTMLElement("span") }} elements that do not, by nature, offer the same keyboard functionality that their desktop counterparts do. This document describes techniques to make JavaScript widgets accessible with the keyboard.</p>

<h3 id="Using_tabindex">Using tabindex</h3>

<p>By default, when people use the tab key to browse a webpage, only interactive elements (like links, form controls) get focused. With the <code>tabindex</code> <a href="/en-US/docs/Web/HTML/Global_attributes">global attribute</a>, authors can make other elements focusable, too. When set to <code>0</code>, the element becomes focusable by keyboard and script. When set to <code>-1</code>, the element becomes focusable by script, but it does not become part of the keyboard focus order.</p>

<p>The order in which elements gain focus when using a keyboard, is the source order by default. In exceptional circumstances, authors may want to redefine the order. To do this, authors can set <code>tabindex</code> to any positive number.</p>

<div class="warning">
<p><strong>Warning:</strong> avoid using positive values for <code>tabindex</code>.  Elements with a positive <code>tabindex</code> are put before the default interactive elements on the page, which means page authors will have to set (and maintain) <code>tabindex</code> values for all focusable elements on the page whenever they use one or more positive values for <code>tabindex</code>.</p>
</div>

<p>The following table describes <code>tabindex</code> behavior in modern browsers:</p>

<table class="fullwidth-table" style="width: 75% !important;">
 <tbody>
  <tr>
   <th><code>tabindex</code> attribute</th>
   <th>Focusable with mouse or JavaScript via <code>element.focus()</code></th>
   <th>Tab navigable</th>
  </tr>
  <tr>
   <td>not present</td>
   <td>Follows the platform convention of the element (yes for form controls, links, etc.).</td>
   <td>Follows the platform convention of the element.</td>
  </tr>
  <tr>
   <td>Negative (i.e. <code>tabindex="-1"</code>)</td>
   <td>Yes</td>
   <td>No; author must focus the element with <code><a class="external text" href="../../../../En/DOM/Element.focus" rel="nofollow">focus()</a></code> in response to arrow or other key presses.</td>
  </tr>
  <tr>
   <td>Zero (i.e. <code>tabindex="0"</code>)</td>
   <td>Yes</td>
   <td>In tab order relative to element's position in document (note that interactive elements like {{ HTMLElement("a") }} have this behavior by default, they don't need the attribute).</td>
  </tr>
  <tr>
   <td>Positive (e.g. <code>tabindex="33"</code>)</td>
   <td>Yes</td>
   <td><code>tabindex</code> value determines where this element is positioned in the tab order: smaller values will position elements earlier in the tab order than larger values (for example, <code>tabindex="7"</code> will be positioned before <code>tabindex="11"</code>).</td>
  </tr>
 </tbody>
</table>

<h4 id="Non-native_controls">Non-native controls</h4>

<p>Native HTML elements that are interactive, like {{ HTMLElement("a") }}, {{ HTMLElement("input") }} and {{ HTMLElement("select") }}, are already accessible by keyboards, so to use one of them is the fastest path to make components work with keyboards.</p>

<p>Authors can also make a {{ HTMLElement("div") }} or {{ HTMLElement("span") }} keyboard accessible by adding a <code>tabindex</code> of <code>0</code>. This is particularly useful for components that use interactive elements that do not exist in HTML.</p>

<h4 id="Grouping_controls">Grouping controls</h4>

<p>For grouping widgets such as menus, tablists, grids, or tree views, the parent element should be in the tab order (<code>tabindex="0"</code>), and each descendent choice/tab/cell/row should be removed from the tab order (<code>tabindex="-1"</code>). Users should be able to navigate the descendent elements using arrow keys. (For a full description of the keyboard support that is normally expected for typical widgets, see the <a class="external text" href="https://www.w3.org/TR/wai-aria-practices-1.1/" rel="nofollow">WAI-ARIA Authoring Practices</a>.)</p>

<p>The example below shows this technique used with a nested menu control. Once keyboard focus lands on the containing {{ HTMLElement("ul") }} element, the JavaScript developer must programmatically manage focus and respond to arrow keys. For techniques for managing focus within widgets, see "Managing focus inside groups" below.</p>

<p><em>Example 2: A menu control using tabindex to control keyboard access</em></p>

<pre class="brush: html">&lt;ul id="mb1" tabindex="0"&gt;
  &lt;li id="mb1_menu1" tabindex="-1"&gt; Font
    &lt;ul id="fontMenu" title="Font" tabindex="-1"&gt;
      &lt;li id="sans-serif" tabindex="-1"&gt;Sans-serif&lt;/li&gt;
      &lt;li id="serif" tabindex="-1"&gt;Serif&lt;/li&gt;
      &lt;li id="monospace" tabindex="-1"&gt;Monospace&lt;/li&gt;
      &lt;li id="fantasy" tabindex="-1"&gt;Fantasy&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
  &lt;li id="mb1_menu2" tabindex="-1"&gt; Style
    &lt;ul id="styleMenu" title="Style" tabindex="-1"&gt;
      &lt;li id="italic" tabindex="-1"&gt;Italics&lt;/li&gt;
      &lt;li id="bold" tabindex="-1"&gt;Bold&lt;/li&gt;
      &lt;li id="underline" tabindex="-1"&gt;Underlined&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
  &lt;li id="mb1_menu3" tabindex="-1"&gt; Justification
    &lt;ul id="justificationMenu" title="Justification" tabindex="-1"&gt;
      &lt;li id="left" tabindex="-1"&gt;Left&lt;/li&gt;
      &lt;li id="center" tabindex="-1"&gt;Centered&lt;/li&gt;
      &lt;li id="right" tabindex="-1"&gt;Right&lt;/li&gt;
      &lt;li id="justify" tabindex="-1"&gt;Justify&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
&lt;/ul&gt;</pre>

<h4 id="Disabled_controls">Disabled controls</h4>

<p>When a custom control becomes disabled, remove it from the tab order by setting <code>tabindex="-1"</code>. Note that disabled items within a grouped widget (such as menu items in a menu) should remain navigable using arrow keys.</p>

<h3 id="Managing_focus_inside_groups">Managing focus inside groups</h3>

<p>When a user tabs away from a widget and returns, focus should return to the specific element that had focus, for example, the tree item or grid cell. There are two techniques for accomplishing this:</p>

<ol>
 <li>Roving <code>tabindex</code>: programmatically moving focus</li>
 <li><code>aria-activedescendant</code>: managing a 'virtual' focus</li>
</ol>

<h4 id="Technique_1_Roving_tabindex">Technique 1: Roving tabindex</h4>

<p>Setting the <code>tabindex</code> of the focused element to "0" ensures that if the user tabs away from the widget and then returns, the selected item within the group retains focus. Note that updating the <code>tabindex</code> to "0" requires also updating the previously selected item to <code>tabindex="-1"</code>. This technique involves programmatically moving focus in response to key events and updating the <code>tabindex</code> to reflect the currently focused item. To do this:</p>

<p>Bind a key down handler to each element in the group, and when an arrow key is used to move to another element:</p>

<ol>
 <li>programmatically apply focus to the new element,</li>
 <li>update the <code>tabindex</code> of the focused element to "0", and</li>
 <li>update the <code>tabindex</code> of the previously focused element to "-1".</li>
</ol>

<p>Here's an example of a <a class="external text" href="https://files.paciellogroup.com/training/WWW2012/samples/Samples/aria/tree/index.html" rel="nofollow">WAI-ARIA tree view</a> using this technique.</p>

<h5 id="Tips">Tips</h5>

<h6 id="Use_element.focus()_to_set_focus">Use element.focus() to set focus</h6>

<p>Do not use <code>createEvent()</code>, <code>initEvent()</code> and <code>dispatchEvent()</code> to send focus to an element. DOM focus events are considered informational only: generated by the system after something is focused, but not actually used to set focus. Use <code>element.focus()</code> instead.</p>

<h6 id="Use_onfocus_to_track_the_current_focus">Use onfocus to track the current focus</h6>

<p>Don't assume that all focus changes will come via key and mouse events: assistive technologies such as screen readers can set the focus to any focusable element. Track focus using <code>onfocus</code> and <code>onblur</code> instead.</p>

<p><code>onfocus</code> and <code>onblur</code> can now be used with every element. There is no standard DOM interface to get the current document focus. If you want to track the focus status, you can use the <a href="/en-US/docs/Web/API/Document/activeElement">document.activeElement</a> to get the active element. You can also use <a href="/en-US/docs/Web/API/Document/hasFocus">document.hasFocus</a> to make sure if the current document focus. </p>

<h4 id="Technique_2_aria-activedescendant">Technique 2: aria-activedescendant</h4>

<p>This technique involves binding a single event handler to the container widget and using the <code>aria-activedescendant</code> to track a "virtual" focus. (For more information about ARIA, see this <a class="external text" href="/en-US/docs/Web/Accessibility/An_overview_of_accessible_web_applications_and_widgets" rel="nofollow">overview of accessible web applications and widgets</a>.)</p>

<p>The <code>aria-activedescendant</code> property identifies the ID of the descendent element that currently has the virtual focus. The event handler on the container must respond to key and mouse events by updating the value of <code>aria-activedescendant</code> and ensuring that the current item is styled appropriately (for example, with a border or background color).</p>

<h3 id="General_Guidelines">General Guidelines</h3>

<h4 id="Use_onkeydown_to_trap_key_events_not_onkeypress">Use onkeydown to trap key events, not onkeypress</h4>

<p>IE will not fire <code>keypress</code> events for non-alphanumeric keys. Use <code>onkeydown</code> instead.</p>

<h4 id="Ensure_that_keyboard_and_mouse_produce_the_same_experience">Ensure that keyboard and mouse produce the same experience</h4>

<p>To ensure that the user experience is consistent regardless of input device, keyboard and mouse event handlers should share code where appropriate. For example, the code that updates the <code>tabindex</code> or the styling when users navigate using the arrow keys should also be used by mouse click handlers to produce the same changes.</p>

<h4 id="Ensure_that_the_keyboard_can_be_used_to_activate_element">Ensure that the keyboard can be used to activate element</h4>

<p>To ensure that the keyboard can be used to activate elements, any handlers bound to mouse events should also be bound to keyboard events. For example, to ensure that the Enter key will activate an element, if you have an <code>onclick="doSomething()"</code>, you should bind <code>doSomething()</code> to the key down event as well: <code>onkeydown="return event.keyCode != 13 || doSomething();"</code>.</p>

<h4 id="Always_draw_the_focus_for_tabindex-1_items_and_elements_that_receive_focus_programmatically">Always draw the focus for tabindex="-1" items and elements that receive focus programmatically</h4>

<p>IE will not automatically draw the focus outline for items that programmatically receive focus. Choose between changing the background color via something like <code>this.style.backgroundColor = "gray";</code> or add a dotted border via <code>this.style.border = "1px dotted invert"</code>. In the dotted border case you will need to make sure those elements have an invisible 1px border to start with, so that the element doesn't grow when the border style is applied (borders take up space, and IE doesn't implement CSS outlines).</p>

<h4 id="Prevent_used_key_events_from_performing_browser_functions">Prevent used key events from performing browser functions</h4>

<p>If your widget handles a key event, prevent the browser from also handling it (for example, scrolling in response to the arrow keys) by using your event handler's return code. If your event handler returns <code>false</code>, the event will not be propagated beyond your handler.</p>

<p>For example:</p>

<pre class="brush: html">&lt;span tabindex="-1" onkeydown="return handleKeyDown();"&gt;</pre>

<p>If <code>handleKeyDown()</code> returns <code>false</code>, the event will be consumed, preventing the browser from performing any action based on the keystroke.</p>

<h4 id="Don't_rely_on_consistent_behavior_for_key_repeat_at_this_point">Don't rely on consistent behavior for key repeat, at this point</h4>

<p>Unfortunately <code>onkeydown</code> may or may not repeat depending on what browser and OS you're running on.</p>
