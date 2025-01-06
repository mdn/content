---
title: Operable
slug: Web/Accessibility/Understanding_WCAG/Operable
page-type: guide
---

{{AccessibilitySidebar}}

This article provides practical advice on how to write your web content so that it conforms to the success criteria outlined in the **Operable** principle of the Web Content Accessibility Guidelines (WCAG) 2.0 and 2.1. Operable states that user interface components and navigation must be operable.

> [!NOTE]
> To read the W3C definitions for Operable and its guidelines and success criteria, see [Principle 2: Operable — User interface components and navigation must be operable.](https://www.w3.org/TR/WCAG21/#operable)

## Guideline 2.1 — Keyboard Accessible: Make all functionality available from a keyboard

This guideline covers the necessity of making core website functionality available via a keyboard in addition to other means (e.g. mouse), so that users that rely on keyboard controls can access them.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Success criteria</th>
      <th scope="col">How to conform to the criteria</th>
      <th scope="col">Practical resource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.1.1 Keyboard (A)</td>
      <td>
        All functionality should be accessible using keyboard controls, unless
        it cannot be done using the keyboard (e.g. freehand drawing). Built-in
        controls should be used where possible (e.g. tabbing through form
        controls), and you should only build in custom functionality where
        needed.
      </td>
      <td>
        See
        <a href="/en-US/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls"
          >UI controls</a
        >
        and
        <a
          href="/en-US/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in"
          >Building keyboard accessibility back in</a
        >
      </td>
    </tr>
    <tr>
      <td>2.1.2 No keyboard trap (A)</td>
      <td>
        <p>
          When entering a section of functionality using the keyboard, you
          should be able to get out of that section again using <em>only</em> the
          keyboard. For example, if you press <kbd>Enter</kbd>/<kbd>Return</kbd>
          on a focused button to open an options window, you should be able to
          close that window again and return to the main content using the
          keyboard.
        </p>
        <p>
          This is very important so that keyboard users do not get trapped on
          specific sections of your apps.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.1.3 Keyboard — all functionality (AAA)</td>
      <td>
        This is a further step beyond criterion 2.1.1. To achieve AAA
        conformance, all functionality should be accessible using keyboard
        controls — with no exceptions.
      </td>
      <td>
        See
        <a href="/en-US/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls"
          >UI controls</a
        >
        and
        <a
          href="/en-US/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in"
          >Building keyboard accessibility back in</a
        >
      </td>
    </tr>
    <tr>
      <td>
        2.1.4 Character Key Shortcuts (A)
        <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >added in 2.1</a
          ></em
        >
      </td>
      <td>
        If a single character key shortcut exists, then at least one of the
        following is true: single character key shortcuts can be turned off,
        remapped or are only active when the relevant user interface component
        is in focus.
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html"
          >Understanding Character Key Shortcuts</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Also see the WCAG description for [Guideline 2.1 Keyboard Accessible: Make all functionality available from a keyboard](https://www.w3.org/TR/WCAG21/#keyboard-accessible).

## Guideline 2.2 — Enough Time: Provide users enough time to read and use content

This guideline covers situations in which functionality may have a time limit. For example, purchases sometimes need to be completed within a time limit for security reasons.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Success criteria</th>
      <th scope="col">How to conform to the criteria</th>
      <th scope="col">Practical resource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.2.1 Timing is adjustable (A)</td>
      <td>
        <p>
          For functionality with time limits (e.g. completing a hotel or flight
          booking often has a time limit), the user should be given controls to
          allow them to adjust, extend or turn off the time limit.
        </p>
        <p>
          Exceptions to this are activities with time limits longer than 20
          hours, real time events (e.g. live multiplayer games), and any other
          activity that requires a time limit and would be invalidated if it
          were turned off.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.2 Pausing, stopping, hiding (A)</td>
      <td>
        <p>
          For moving/blinking content that starts automatically, lasts longer
          than 5 seconds, and is shown alongside other content, controls should
          be provided to pause, stop, or hide it. This does not apply to
          moving/blinking content that is essential to the experience. Examples
          include scrolling text and videos.
        </p>
        <p>
          For auto-updating information that starts automatically and is shown
          alongside other content, controls should be provided to pause, stop,
          or hide it, or to control the frequency of updates. This does not
          apply to auto-updating content that is essential to the experience.
          Examples include carousels or rotating announcements.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.3 No time limits (AAA)</td>
      <td>
        This builds on criteria 2.2.1, stating that content that wants to pass
        AAA conformance should have no time limits.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.4 Suppress interruptions (AAA)</td>
      <td>
        Any interruptions such as alerts or interstitial adverts should have
        functionality available to suppress or postpone them, unless it is an
        emergency alert.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.5 Re-authenticating (AAA)</td>
      <td>
        If an authentication session expires during usage of a web app, the user
        can re-authenticate and continue their usage without losing any data.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        2.2.6 Timeouts (AAA)
        <em
          ><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1"
            >added in 2.1</a
          ></em
        >
      </td>
      <td>
        <p>
          If there is a timeout (caused by user inactivity) warn users at the
          start of a process so they will not be surprised that a timeout exists
          (or only allow the timeout to occur after 20 hours of inactivity).
        </p>
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/timeouts.html"
          >Understanding Timeouts</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Also see the WCAG description for [Guideline 2.2 Enough Time: Provide users enough time to read and use content](https://www.w3.org/TR/WCAG21/#enough-time).

## Guideline 2.3 — Seizures and Physical Reactions: Do not design content in a way that is known to cause seizures or physical reactions

This refers to content that, if not changed, could cause seizures in users with conditions such as epilepsy OR could cause physical reactions (like dizziness) for users with conditions such as vestibular disorders.

<table>
  <thead>
    <tr>
    <th scope="col">Success criteria</th>
    <th scope="col">How to conform to the criteria</th>
    <th scope="col">Practical resource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.3.1 Three flashes, or below threshold (A)</td>
      <td>Content doesn't contain any aspect that Flashes more than three times per second, or flashing content is below acceptable <a href="https://www.w3.org/TR/WCAG20/#general-thresholddef">flash and red flash thresholds</a>.</td>
      <td></td>
    </tr>
    <tr>
      <td>2.3.2 Three flashes (AAA)</td>
      <td>Content doesn't contain any aspect that Flashes more than three times per second.</td>
      <td></td>
    </tr>
    <tr>
      <td>2.3.3 Animations from Interactions (AAA) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">added in 2.1</a></em></td>
      <td>Allow users to disable animations from interactions (unless the animation is essential).</td>
      <td><a href="https://www.w3.org/TR/WCAG21/#animation-from-interactions">Understanding Animations from Interactions</a></td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Also see the WCAG description for [Guideline 2.3 Seizures and Physical Reactions: Do not design content in a way that is known to cause seizures or physical reactions.](https://www.w3.org/TR/WCAG21/#seizures-and-physical-reactions)

## Guideline 2.4 — Navigable: Provide ways to help users navigate, find content, and determine where they are

The conformance criteria under this guideline relate to ways in which users can be expected to orientate themselves, and find the content and functionality they are looking for on the current page or other pages of the site.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Success criteria</th>
      <th scope="col">How to conform to the criteria</th>
      <th scope="col">Practical resource</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.4.1 Bypass blocks (A)</td>
      <td>
        <p>
          A mechanism should be provided that allows the user to skip straight
          to the main content or functionality available on the page, past the
          repeated features (such as the company logo or navigation). This is
          often achieved using "skip links" — links put at the top of the page
          source that link to the main content and are hidden by CSS.
        </p>
        <p>
          If a proper structure of headings and semantic containers is provided
          to navigate with (for example {{htmlelement("section")}},
          {{htmlelement("aside")}}, etc.), then an added "skip link" is
          not needed.
        </p>
      </td>
      <td><em>Need to add a section on "skip links".</em></td>
    </tr>
    <tr>
      <td>2.4.2 Include page title (A)</td>
      <td>
        Each web page should include an informative
        {{htmlelement("title")}}, the content of which describes the
        page's content/purpose.
      </td>
      <td>
        See
        <a
          href="/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_a_title"
          >Adding a title</a
        >.
      </td>
    </tr>
    <tr>
      <td>2.4.3 Logical focus order (A)</td>
      <td>
        The "tabbing order" of focusable page features (e.g. links, buttons,
        form inputs) makes logical sense, meaning that the page is still usable
        by non-sighted/keyboard users.
      </td>
      <td>
        See
        <a href="/en-US/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls"
          >UI controls</a
        >
        for general advice on tabbing to controls. If you need to place elements
        in an unusual layout, it is better to make sure the source order is
        sensible, then use CSS features like
        <a href="/en-US/docs/Learn_web_development/Core/CSS_layout/Positioning">positioning</a>
        to handle the layout.
      </td>
    </tr>
    <tr>
      <td>2.4.4 Link purpose (in context) (A)</td>
      <td>
        The purpose/destination of a link can be determined from the link text,
        or from its surroundings (e.g. the surrounding text). Exceptions are
        where the link purpose is ambiguous to <em>all</em> users (see
        <a href="https://www.w3.org/TR/WCAG20/#ambiguouslinkdef"
          >ambiguous to users in general</a
        >
        for a useful explanation of this).
      </td>
      <td>
        See
        <a href="/en-US/docs/Learn_web_development/Core/Accessibility/HTML#meaningful_text_labels"
          >Meaningful text labels</a
        >. Also note that you should minimize instances where multiple copies of
        the same text are linked to different places. This can cause problems
        for screen reader users, who will often bring up a list of the links out
        of context — several links all labelled "click here", "click here",
        "click here" would be confusing.
      </td>
    </tr>
    <tr>
      <td>2.4.5 Multiple navigation mechanisms (AA)</td>
      <td>
        <p>
          You should provide at least two general navigation mechanisms to find
          pages on your website, for example navigation menu, breadcrumb trail,
          site search, site map, list of related links, etc.
        </p>
        <p>
          The only exception to this is where a page is one step in a process,
          so should only logically have links to the previous and next steps.
        </p>
      </td>
      <td>
        Most of these mechanisms can be created using simple HTML features, for
        example see
        <a
          href="/en-US/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#search_field"
          >Search field</a
        >,
        <a
          href="/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links#active_learning_creating_a_navigation_menu"
          >Creating a navigation menu</a
        >,
        <a
          href="/en-US/docs/Learn_web_development/Core/Text_styling/Styling_links#styling_links_as_buttons"
          >Styling links as buttons</a
        >.
      </td>
    </tr>
    <tr>
      <td>2.4.6 Headings and labels (AA)</td>
      <td>
        Heading (e.g. {{htmlelement("Heading_Elements", "&lt;h2&gt;")}}) and
        {{htmlelement("label")}} elements clearly describe the purpose
        of the content and form elements they are supposed to be describing.
      </td>
      <td>
        <p>
          See
          <a href="/en-US/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls"
            >UI controls</a
          >,
          <a href="/en-US/docs/Learn_web_development/Core/Accessibility/HTML#meaningful_text_labels"
            >Meaningful text labels</a
          >,
          <a
            href="/en-US/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
            >The basics of headings and paragraphs</a
          >,
          <a
            href="/en-US/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form#the_label_element"
            >The &#x3C;label> element</a
          >.
        </p>
        <p>
          Note that you should avoid duplicating headings or labels (e.g.
          multiple instances of "Further information"), unless the structure
          allows you to differentiate between them easily.
        </p>
      </td>
    </tr>
    <tr>
      <td>2.4.7 Visible focus for focusable elements (AA)</td>
      <td>
        When tabbing through focusable elements such as links or form inputs,
        there should be a visual indicator to show you which element currently
        has focus. This is usually a dotted or blue outline by default
        (depending on browser, platform, etc.), but this can be overridden by
        CSS.
      </td>
      <td>
        See
        <a
          href="/en-US/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls"
          >UI controls</a
        >.
      </td>
    </tr>
    <tr>
      <td>2.4.8 Location within site (AAA)</td>
      <td>
        When on a page inside a complex site or set of steps, the user should be
        given an indicator of where they are in the site, for example a
        breadcrumb trail, sitemap or text such as "Form page 2 of 10".
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.4.9 Link purpose (link only) (AAA)</td>
      <td>
        This criterion builds on 2.4.4, stating that to conform to AAA, the
        purpose/destination of a link should be determinable from the link text
        alone, even if out of context.
      </td>
      <td>
        See
        <a href="/en-US/docs/Learn_web_development/Core/Accessibility/HTML#meaningful_text_labels"
          >Meaningful text labels</a
        >. Also note that you should minimize instances where multiple copies of
        the same text are linked to different places. This can cause problems
        for screen reader users, who will often bring up a list of the links out
        of context — several links all labelled "click here", "click here",
        "click here" would be confusing.
      </td>
    </tr>
    <tr>
      <td>2.4.10 Section headings (AAA)</td>
      <td>
        <p>
          As well as creating a useful document structure, headings should also
          accurately describe and break up content areas into logical sections.
        </p>
        <p>
          Note that this criterion refers to headings and titles in general web
          content (e.g. headings within text content). Headings and titles for
          user interfaces are a special case covered in criterion 4.1.2.
        </p>
      </td>
      <td>
        <p>
          See
          <a
            href="/en-US/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
            >The basics of headings and paragraphs</a
          >.
        </p>
      </td>
    </tr>
    <tr>
    <td> 2.4.11 Focus not obscured (Minimum) (AA)</td>
    <td>
    <p> When a user interface component receives keyboard focus, the component is not entirely hidden due to containing author-created content.</p>
    <p> <strong>Note:</strong> If the interface's content can be repositioned by the user, then only the initial position of the user-movable content is considered for testing to conform to this standard. Also, content opened by the user may obscure the component receiving focus. Furthermore, if the user can reveal the focused component without changing keyboard focus, the component with focus is not considered hidden for conformance and testing purposes.</p>
    </td>
    <td>
    <p> Check out <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum">Understanding focus not obscured (Minimum)</a> to learn more about this standard.</p>
    </td>
    </tr>
    <tr>
    <td> 2.4.12 Focus not obscured (Enhanced) (AAA) </td>
    <td>
    <p> Follows the rules as 2.4.11 except when a user interface component receives focus, no part of the component can be hidden by author-created content. If the interface is configurable, only the initial positions of user-movable content are considered for testing and meeting of this standard.</p>
    </td>
    <td>
    <p> Check out <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced">Understanding focus not obscured (Enhanced) (Level AAA)</a> to learn more about this standard.</p> </td>
    </td>
    </tr>
<tr>
  <td> 2.4.13 Focus appearance (AAA)</td>
  <td>
    <p>When the keyboard focus indicator is visible, the area of the focus indicator meets all the following:</p>
    <ul>
      <li>Must be at least as large as the area of a <code>2px</code> thick perimeter of the unfocused component or sub-component, which includes component's content, border, and background, excluding outer shadows or glow effects.</li>
      <li>Needs to have a contrast ratio of at least 3:1 between the same pixels in the focused and unfocused states</li>
    </ul>
    <p> The exceptions to this are:</p>
    <ul>
      <li>The focus indicator is determined by the user and cannot be adjusted by the author.</li>
      <li>The focus indicator and the indicator's background color are not modified by the author.</li>
    </ul>
  </td>
  <td>
    <p> Check out <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html">Understanding focus appearance (Level AAA)</a> to learn more about this standard.</p>
  </td>
</tr>
  </tbody>
</table>

> [!NOTE]
> Also see the WCAG description for [Guideline 2.4 Navigable: Provide ways to help users navigate, find content, and determine where they are.](https://www.w3.org/TR/WCAG21/#navigable)

## Guideline 2.5 Input Modalities: Make it easier for users to operate functionality through various inputs beyond keyboard

The conformance criteria under this guideline ensures that users are able to interact with digital technology using different input methods beyond a keyboard or mouse (including touchscreen, voice, device motion, or alternative input devices).

<table>
 <thead>
  <tr>
   <th scope="col">Success criteria</th>
   <th scope="col">How to conform to the criteria</th>
   <th scope="col">Practical resource</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>2.5.1 Pointer Gestures (A) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">added in 2.1</a></em></td>
   <td>All functionality that can be operated with a pointer can be operated with single-point actions. Path-based or multi-point gestures are not required to operate any functionality. Exceptions exist.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html">Understanding Pointer Gestures</a></td>
  </tr>
  <tr>
   <td>2.5.2 Pointer Cancellation (A) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">added in 2.1</a></em></td>
   <td>For functionality that can be operated using a single-pointer at least one of the following is true: no down-event, abort/undo, up reversal or essential.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html">Understanding Pointer Cancellation</a></td>
  </tr>
  <tr>
   <td>2.5.3 Label in Name (A) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">added in 2.1</a></em></td>
   <td>For each user interface component that includes a visible text label, make sure the accessible name matches (or includes) the visible text in the label.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html">Understanding Label in Name</a></td>
  </tr>
  <tr>
   <td>2.5.4 Motion Actuation (A) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">added in 2.1</a></em></td>
   <td>Ensure that for functionality that can be triggered by a) device motion (like shaking, tilting) or b) user gestures detected by device sensors (including a camera) that both of the following are true: 1) motion actuation can be disabled, and 2) the functionality can be operated without using device motion or user gestures. Exceptions exist.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html">Understanding Motion Actuation</a></td>
  </tr>
  <tr>
   <td>2.5.5 Target Size (AAA) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">added in 2.1</a></em></td>
   <td>The size of an actionable item's touch target must be at least 44 CSS pixels in both width and height. Exceptions exist.</td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/target-size.html">Understanding Target Size</a></td>
  </tr>
  <tr>
   <td>2.5.6 Concurrent Input Mechanisms (AAA) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">added in 2.1</a></em></td>
   <td>Make sure people can use and switch between different modes of input when interacting with digital content including touchscreen, keyboard, mouse, voice commands, or alternative input devices. An essential exception exists. </td>
   <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/concurrent-input-mechanisms.html">Understanding Concurrent Input Mechanism</a></td>
 </tr>
 <tr>
 <td> 2.5.8 Target size minimum (AA)</td>
 <td> Target size for pointer inputs should be at least <code>24px</code> wide by <code>24px</code> tall except for the following areas:
 <ul>
  <li> <strong>Spacing:</strong>Targets that are less than <code>24px x 24px</code> are positioned so that if a <code>24px</code> diameter circle is centered on each target's bounding box, the circles do not intersect with any other target or the circle for another undersized target.</li>
  <li> <strong>Equivalent:</strong> A separate control that achieves the same function that meets this standard is available on the same page.</li>
  <li> <strong>Inline:</strong> The target is located within a line of text with its size constrained by the line height or surrounding non-target text.</li>
  <li> <strong>User agent control:</strong> The target's size is determined by the user agent and has not been modified by the author.</li>
  <li> <strong>Essential:</strong> A particular presentation of the target is essential or legally required for the information being conveyed.</li>
 </ul>
 <td> Check out <a href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html">Understanding target size minimum</a> </td>
</tr>
  </tr>
 </tbody>
</table>

> [!NOTE]
> Also see the WCAG description for [Guideline 2.5: Input Modalities: Make it easier for users to operate functionality through various inputs beyond keyboard.](https://www.w3.org/TR/WCAG21/#input-modalities)

## See also

- [WCAG](/en-US/docs/Web/Accessibility/Understanding_WCAG)

  1. [Perceivable](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable)
  2. Operable
  3. [Understandable](/en-US/docs/Web/Accessibility/Understanding_WCAG/Understandable)
  4. [Robust](/en-US/docs/Web/Accessibility/Understanding_WCAG/Robust)
