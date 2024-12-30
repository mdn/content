---
title: Understandable
slug: Web/Accessibility/Understanding_WCAG/Understandable
page-type: guide
---

{{AccessibilitySidebar}}

This article provides practical advice on how to write your web content so that it conforms to the success criteria outlined in the **Understandable** principle of the Web Content Accessibility Guidelines (WCAG) 2.0 and 2.1. Understandable states that information and the operation of user interface must be understandable.

> [!NOTE]
> To read the W3C definitions for Understandable and its guidelines and success criteria, see [Principle 3: Understandable — Information and the operation of user interface must be understandable](https://www.w3.org/TR/WCAG21/#understandable).

## Guideline 3.1 — Readable: Make text content readable and understandable

This guideline focuses on making text content as understandable as possible.

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
      <td>3.1.1 Language of Page (A)</td>
      <td>
        The default human language of each web page should be detectable via
        code. This is essential for purposes like making sure the reader has
        arrived at a page written in a language suitable for them. The simplest
        way to achieve this is to set the <a href="/en-US/docs/Web/HTML/Global_attributes/lang">lang</a>
        attribute on the page's {{htmlelement("html")}} element, giving
        it a value equal to the language code that best represents the language
        the page is written in.
      </td>
      <td>
        See
        <a
          href="/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#setting_the_primary_language_of_the_document"
          >Setting the primary language of the document</a
        >.
      </td>
    </tr>
    <tr>
      <td>3.1.2 Language of Parts (AA)</td>
      <td>
        <p>
          In cases where the content of a page includes words or phrases that
          are in a different language to the primary language, use the
          <a href="/en-US/docs/Web/HTML/Global_attributes/lang">lang</a> attribute on an element wrapped
          around the term in question (e.g. a {{htmlelement("span")}}
          if no semantic element is available) to set an appropriate language
          for it.
        </p>
        <p>
          You don't need to set a different language for words or phrases that
          are the same regardless of language (for example proper names,
          technical terms that aren't part of a specific language).
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.3 Unusual Words (AAA)</td>
      <td>
        Where technical terms, jargon, or idioms/slang are used, definitions
        should be provided for such phrases/words. Your site should provide a
        glossary that contains definitions of such words/terms that you can then
        link to when they appear, or at the very least provide definitions
        somewhere in the surrounding text, or in a
        <a
          href="/en-US/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#description_lists"
          >description list</a
        >
        at the bottom of the page.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.4 Abbreviations (AAA)</td>
      <td>
        <p>
          Where abbreviations are used, you should provide an expansion of them,
          or a definition as required.
        </p>
        <p>
          The {{htmlelement("abbr")}} element is often thought of as
          the preferred way to provide an expansion for an abbreviation — it
          takes a <a href="/en-US/docs/Web/HTML/Global_attributes/title">title</a> attribute that contains the
          expansion, and this appears when the acronym is moused over. However,
          the title contents are not accessible via keyboard, nor are they
          reliably read out by screen readers. A better way to handle this is to
          again provide links to glossary pages containing the acronym expansion
          and explanation, or at the very least include them in the surrounding
          text in context.
        </p>
      </td>
      <td>
        See
        <a
          href="/en-US/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#abbreviations"
          >Abbreviations</a
        >.
      </td>
    </tr>
    <tr>
      <td>3.1.5 Reading Level (AAA)</td>
      <td>
        <p>
          If text is provided that requires a higher reading level that lower
          secondary education level (typically children around 11-14 years old),
          provide supplementary explainer material to help people who can't read
          it, or provide an alternative version that is written at lower
          secondary level.
        </p>
        <p>
          This doesn't mean that all subject matter should be understood by
          everyone, but that the style of writing should be accessible by
          everyone. It is better to just write all content at lower secondary
          level, even technical documentation like programming tutorials, unless
          there is a good reason not to (e.g. an alternative style for poetic
          effect), or they have to be written in a strict style (e.g. W3C
          specs).
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.6 Pronunciation (AAA)</td>
      <td>
        <p>
          A mechanism should be provided to give users access to pronunciation
          of words where they are is needed to understand the content fully.
        </p>
        <p>
          The HTML {{htmlelement("audio")}} element can be used to
          create a control that allows the reader to play back an audio file
          containing the correct pronunciation, and it also makes sense to
          include a textual pronunciation guide after difficult words, in the
          same way that you find in dictionary entries.
        </p>
      </td>
      <td>
        See
        <a
          href="/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio"
          >Video and audio content</a
        >, and
        <a
          href="https://www.oxfordlearnersdictionaries.com/us/about/pronunciation_english.html"
          >Pronunciation Guide for English Dictionary</a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Also see the WCAG description for [Guideline 3.1 Readable: Make text content readable and understandable](https://www.w3.org/TR/WCAG21/#readable).

## Guideline 3.2 — Predictable: Make Web pages appear and operate in predictable ways

This guideline focuses on making user interfaces intuitive and understandable.

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
      <td>3.2.1 On Focus (A)</td>
      <td>
        <p>
          When a control or other page feature receives focus, it should not
          change the context in a way that may confuse or disorientate the user.
        </p>
        <p>
          This is a matter of sensible design — people don't want interfaces to
          surprise them; they want things to be intuitive and behave as
          expected. For example, focusing a navigation menu option should not
          change the displayed page — it should be activated before the display
          changes.
        </p>
      </td>
      <td>
        <code>Element</code>'s {{domxref("Element.focus_event", "focus")}} event contains some
        useful information. Also see
        <a
          href="/en-US/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in"
          >Building keyboard accessibility back in</a
        >
        for some useful implementation ideas.
      </td>
    </tr>
    <tr>
      <td>3.2.2 On Input (A)</td>
      <td>
        <p>
          When data is inputted into a control, or a setting is changed, context
          should not be changed unexpectedly. The user should be warned/advised
          of the impending change before it occurs.
        </p>
        <p>
          Again, sensible design should be implemented. For example, if pressing
          a button causes the application to exit the current view, the user
          should be asked to confirm this action, save their work if
          appropriate, etc.
        </p>
      </td>
      <td>
        The {{domxref("Element/input_event", "input")}} event is useful here.
      </td>
    </tr>
    <tr>
      <td>3.2.3 Consistent Navigation (AA)</td>
      <td>
        <p>
          Navigation menu/control style and positioning should be consistent
          between different pages or views of a web page, and the existing items
          should appear in the same order, even if for example new items are
          added. If the user has initiated a change, e.g. choosing a different
          color scheme or position for the navigation, their choice should be
          respected across all pages.
        </p>
        <p>
          Again, sensible design — make the navigation controls the same across
          all pages or views.
        </p>
      </td>
      <td>
        See
        <a href="/en-US/docs/Learn_web_development/Core/Accessibility/HTML#page_layouts"
          >Page layouts</a
        >
        for information on modern markup for layouts. See also
        <a
          href="/en-US/docs/Learn_web_development/Core/Text_styling/Styling_links#styling_links_as_buttons"
          >Styling links as buttons</a
        >
        for a useful accessible navigation menu example.
      </td>
    </tr>
    <tr>
      <td>3.2.4 Consistent Identification (AA)</td>
      <td>
        <p>
          Controls or components that have the same functionality should be
          identified in the same way across different pages or views. A currency
          converter appearing on every page of a world travel site for example
          should be exactly the same, semantically and in terms of labels.
        </p>
        <p>Again, sensible design!</p>
      </td>
      <td>
        "Labels" can refer to descriptive information in text content, or HTML
        form labels. See
        <a href="/en-US/docs/Learn_web_development/Core/Accessibility/HTML#meaningful_text_labels"
          >Meaningful text labels</a
        >
        for more information.
      </td>
    </tr>
    <tr>
      <td>3.2.5 Change on Request (AAA)</td>
      <td>
        <p>
          Changes in context that could possibly confuse or disorient users
          should only occur only when requested by the user, OR the user should
          be able to turn them off.
        </p>
        <p>
          If you need to have something that significantly changes the current
          view (e.g. content or controls), let the user control when they want
          that change to occur (e.g. what page to show, when to advance to the
          next photo in the gallery...)
        </p>
        <p>
          If you need to have something like a carousel on a page, provide an
          option to stop it automatically advancing. Better to avoid such
          functionality if possible.
        </p>
      </td>
 </tr>
      <tr>
      <td> 3.2.6 Consistent help (A)</td>
      <td> <p> Web pages that contain help mechanisms, including self-help options and human contact details, that are repeated on multiple web pages, need to place those mechanisms in the same order on all pages, unless a change is initiated by the user.</p>
      <td> <p> Check out the <a href="https://www.w3.org/WAI/WCAG22/Understanding/consistent-help">consistent help documentation</a> for this standard to learn more. </p>
      </td>
      </td>
      <tr>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Also see the WCAG description for [Guideline 3.2 Predictable: Make Web pages appear and operate in predictable ways](https://www.w3.org/TR/WCAG21/#predictable).

## Guideline 3.3 — Input Assistance: Help users avoid and correct mistakes

This guideline centers around helping users enter correct information when required with the minimum of mistakes.

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
      <td>3.3.1 Error Identification (A)</td>
      <td>
        <p>
          When a user is filling out a form or choosing between options, any
          error that is detected should be clearly reported to the user, along
          with the form control that the error relates to.
        </p>
        <p>
          It is advisable to implement client-side error detection and handling,
          via HTML form validation features, and/or JavaScript, whatever is
          best for your situation. When an error is detected, an intuitive error
          message should be shown next to the form input that is at fault to
          help the user correct their inputs. For screen reader users, you can
          use aria live regions to alert the user to a change on the page.
        </p>
        <div class="note notecard">
          <p>
            <strong>Note:</strong> Server-side validation should <em>always</em> be
            used alongside client-side validation. Client-side validation is too
            easy to turn off or otherwise get around, so it can't be relied on
            alone.
          </p>
        </div>
      </td>
      <td>
        See
        <a href="/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation"
          >Form data validation</a
        >
        for comprehensive validation information, and
        <a
          href="/en-US/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics#dynamic_content_updates"
          >WAI-ARIA: Dynamic content updates</a
        >
        for information on live regions.
      </td>
    </tr>
    <tr>
      <td>3.3.2 Labels or Instructions (A)</td>
      <td>
        <p>
          Clear instructions should be provided when data input is required.
          When a simple instruction or prompt is required, you can use
          {{htmlelement("label")}} elements for single inputs like name
          or age, a combination or {{htmlelement("label")}}s and
          {{htmlelement("fieldset")}}s/{{htmlelement("legend")}}s
          for multiple inputs that go together (like the elements of a date of
          birth or postal address).
        </p>
        <p>
          When more complex explanation is required, you can always include
          explanatory paragraphs too, or maybe you need to try to make your
          forms more intuitive.
        </p>
      </td>
      <td>
        <ul>
          <li>
            <a
              href="/en-US/docs/Learn_web_development/Core/Accessibility/HTML#meaningful_text_labels"
              >Meaningful text labels</a
            >
          </li>
          <li>
            <a href="/en-US/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form"
              >How to structure an HTML form</a
            >
          </li>
          <li>
            <a
              href="/en-US/docs/Web/Accessibility/Understanding_WCAG/Text_labels_and_names"
              >Text labels and names</a
            >
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>3.3.3 Error Suggestion (AA)</td>
      <td>
        <p>
          When an error is detected and suggestions for correction are known,
          provide these to the user (e.g. suggesting alternatives when the user
          is choosing a user name and has selected one that is already taken),
          unless doing so would cause a security issue (e.g. when entering a
          password) or context problem (e.g. they are trying to answer a
          question in a quiz app).
        </p>
        <p>
          In such cases, when this is appropriate, you'll probably use a
          combination of JavaScript and server-side functionality to check if
          the entry is correct, and if not, what viable suggestions can be given
          to the user. Such suggestions should be displayed usefully in context,
          just like error messages (see 3.3.1).
        </p>
      </td>
      <td>No tutorial suggestions yet.</td>
    </tr>
    <tr>
      <td>3.3.4 Error Prevention (Legal, Financial, Data) (AA)</td>
      <td>
        <p>
          In the case of forms involved with entry of sensitive data (such as
          legal agreements, e-commerce transactions, or personal data), at least
          one of the following should be true:
        </p>
        <ul>
          <li>Submissions are reversible.</li>
          <li>
            Data is checked for errors, and the user is given an opportunity to
            correct them.
          </li>
          <li>
            A mechanism is available for confirming and correcting information
            before final submission.
          </li>
        </ul>
      </td>
      <td>
        <p>
          <strong>Reversible</strong> — for any view where data can be entered,
          provide an equivalent view that allows you to edit or even delete an
          entry, as appropriate (for example, see
          <a href="/en-US/docs/Learn_web_development/Extensions/Server-side/Django">Django web framework</a
          >).
        </p>
        <p>
          <strong>Checking data</strong> — as covered in 3.3.1, a combination of
          client-side and server-side validation should be used to detect errors
          and display helpful messages to the user to allow them to correct
          their inputs.
        </p>
        <p>
          <strong>Confirm and correct</strong> — where appropriate, after
          filling in a series of form fields to perform a task (such as buying a
          product), the user should be shown a confirmation screen where they
          can review their inputs and correct anything that doesn't look right.
          This pattern is commonly used on e-commerce sites like Amazon.
        </p>
      </td>
    </tr>
    <tr>
      <td>3.3.5 Context-sensitive help is available (AAA)</td>
      <td>
        Provide instructions and other appropriate cues in context to aid form
        completion and submission.
      </td>
      <td>
        This really just builds on 3.3.1 and other similar criteria but requires
        more thorough contextual help information and services, e.g. providing a
        dedicated link to a help page or service on each page, providing
        examples showing what successful completion should look like.
      </td>
    </tr>
    <tr>
      <td>3.3.6 Error Prevention (All) (AAA)</td>
      <td>
        This principle builds on 3.3.4, extending its requirements to all user
        input situations, not just ones involving sensitive data.
      </td>
      <td>Again, see 3.3.4.</td>
      </tr>
      <tr>
      <td> 3.3.7 Redundant entry (A) </td>
      <td>
      Information that is required that was previously entered or provided by the user in the same process or user flow is either auto-populated or made selectable to the user from a list of options, unless re-entering the information is essential or required for security reasons, or if the information is no longer valid.
      </td>
      <td>Check out <a href="https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry">Understanding redundant entry</a> to learn more.</td>
      </tr>
      <tr>
      <td> 3.3.8 Accessible authentication (Minimum) (AA)
      </td>
      <td>
Cognitive function tests, like remembering a password, are not required for any step in an authentication process unless an alternative is provided, such as an object or personal content (e.g., images, videos, and audio) recognition, or a mechanism to assist (e.g., copy and paste and autosave passwords).
      </td>
      <td> Check out the <a href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum"> accessible authentication documentation</a> for this standard to learn more. </td>
    </tr>
    <tr>
 <td> 3.3.9 Accessible Authentication (Enhanced) (AAA) </td>
    <td>
A cognitive function test, like remembering a password, must not be required for any step in an authentication process without providing an alternative that does not rely on a cognitive function test or provides a mechanism to assist the user in completing the cognitive function test. Authentication tests that require the user to recognize objects or identify non-text content the user provided to the website are allowed.
    </td>
<td> Check out the <a href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-enhanced">enhanced accessible authentication documentation (AAA)</a> to learn more.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Also see the WCAG description for [Guideline 3.3 Input Assistance: Help users avoid and correct mistakes](https://www.w3.org/TR/WCAG21/#input-assistance).

## See also

- [WCAG](/en-US/docs/Web/Accessibility/Understanding_WCAG)

  1. [Perceivable](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable)
  2. [Operable](/en-US/docs/Web/Accessibility/Understanding_WCAG/Operable)
  3. Understandable
  4. [Robust](/en-US/docs/Web/Accessibility/Understanding_WCAG/Robust)
