---
title: ARIA Test Cases
slug: Web/Accessibility/ARIA/ARIA_Test_Cases
tags:
  - ARIA
  - Accessibility
---
## Introduction

> **Warning:** The information on this page is out of date: It was last updated November 2010. However, the information might still be useful for some readers.
>
> For more up-to-date examples, see the WAI-ARIA Authoring Practices [Index of ARIA Design Pattern Examples](https://w3c.github.io/aria-practices/examples/).

For each example we test the "Expected" results with assistive technologies, for each browser that AT supports WAI-ARIA in. Where a failure occurs we will test the browser for API incorrectness, using tools such as MSAA Inspect. This must be done in order to determine where to file a bug (browser or AT).

There are several purposes for providing this information:

1. Help browser vendors provide correct implementations
2. Help AT vendors provide correct implementations
3. Inform authors as to what actually works reliably

In general we're testing with the latest public releases. However, where things don't work we may test with nightly builds if they are available, in order to show what is already fixed in upcoming releases.

We can add more screen readers if people are willing to step up and provide test results for them.

Tested UA/AT Combinations:

- Dragon 10 with Firefox 3 and IE 8 beta 2
- JAWS 9 & 10 with Firefox 3
- JAWS 9 & 10 with IE beta 2
- NVDA 0.6p2 with Firefox 3
- Orca with Firefox 3
- Window-Eyes 7 with IE 8 beta 2 and Firefox 3
- Voiceover (Leopard) with Safari 4.0.2
- Zoom (Leopard) with Safari 4.0.2, Firefox 3.x and Opera 9.x
- ZoomText 9.1 with Firefox 3 and IE 8 beta 2

#### Test Case Structure

Test cases are organized as follows:

- Test Case Links
- Test Details

  - Expected AT Behavior
  - Markup
  - Notes

- Results Table

| AT                  | Firefox | IE              | Opera | Safari |
| ------------------- | ------- | --------------- | ----- | ------ |
| JAWS 9              | -       | -               | -     | -      |
| JAWS 10             | -       | 1. pass 2. fail | -     | -      |
| VoiceOver (Leopard) | n/a     | n/a             | -     | fail   |
| Window-Eyes         | -       | -               | -     | -      |
| NVDA                | -       | -               | -     | -      |
| Zoom (Leopard)      | pass    | n/a             | pass  | pass   |
| ZoomText            | -       | -               | -     | -      |
| Orca                | -       | -               | -     | -      |

##### Table Legend

| Value | Meaning                                    |
| ----- | ------------------------------------------ |
| -     | no info/test yet                           |
| n/a   | not applicable (not supported technically) |
| pass  | expected behavior met                      |
| fail  | expected behavior not met                  |
| 1. 2. | reference to link example                  |

#### Note Regarding Dojo/Dijit Test Files

The main purpose of Dojo's Dijit test files are for Dojo developers to exercise and debug the code. As such, they are used to test a variety of features, such as styling, behavior, mouse, and keyboard interactions, to name few. These test files are not specifically for testing ARIA. Still, Dojo's widgets implement ARIA, and the noted test files could be used as an "ARIA test file".

#### New Tests for Internet Explorer 8 RC1

On [this MSDN page](http://samples.msdn.microsoft.com/ietestcenter/Aria/AriaTestPage.htm) the ARIA state/role mapping in IE8 to MSAA Roles can be directly checked. Also, as a clever feature for AT testing, the firing of events (like EVENT_OBJECT_STATECHANGE) can be invoked from the examples. Finally, a list of currently non-mapped ARIA roles is given.

### Documenting and Filing Bugs

Review the information on [how to file a bug on an ARIA implementation](/en-US/docs/Web/Accessibility/ARIA/How_to_file_ARIA-related_bugs). When documenting an issue, please also list it in the relevant compatibility table below. When possible provide a link to the bug in the database so that its status can be reviewed.

## Widget Test Cases

### Alert

1. [Simple alert](https://codetalks.org/source/widgets/alert/alert.html)
2. [Complex Alert](https://codetalks.org/source/widgets/alert/alert1.html)
3. [Real alert example with aria-required and aria-invalid](https://codetalks.org/source/enhanced-html-forms/client-form-validation-invalid-and-alert.html)

    \-- type in a email address without an at sign to test the alert

**Expected AT Behavior:**

- A screen reader or screen magnifier must speak an alert when it becomes visible.
- A screen magnifier should move the current view to the alert or open a new panel with the alert information
- Optional, but desired: if there are widgets within the alert, their role and any keyboard mnemonic (accesskey) should be spoken. For example, "Options, button, Alt+Shift+T" should be spoken if there is an options button in the alert with Alt+Shift+T as an accesskey.

**Markup used:**

- role="alert"

**Notes:**

**Results:**

| AT                  | Firefox                          | IE   | Opera | Safari |
| ------------------- | -------------------------------- | ---- | ----- | ------ |
| JAWS 9              | Passed                           | Fail | n/a   | n/a    |
| JAWS 10             | Passed                           | Fail | -     | -      |
| VoiceOver (Leopard) | n/a                              | n/a  | -     | fail   |
| Window-Eyes         | Passed- not announced as "alert" | Fail | -     | -      |
| NVDA                | Passed                           | n/a  | -     | -      |
| Zoom (Leopard)      | pass                             | n/a  | pass  | pass   |
| ZoomText            | -                                | -    | -     | -      |
| Orca                | -                                | -    | -     | -      |

- FFD - An interesting thing to note is that, when focus moves to an alert, JAWS loses its place on the page, so that, when the alert disappears, JAWS Virtual Cursor is at the bottom of the page.

### Alertdialog

1. [Alert Dialog](http://test.cita.uiuc.edu/aria/alertdialog/alertdialog1.php)
2. [YUI alert dialog (3rd button in this page)](https://developer.yahoo.com/yui/examples/container/container-ariaplugin_clean.html)

**Expected AT Behavior:**

- AT should speak the fact that this is an alert, the title and contents of the dialog, then place virtual focus or the real focus on the desired control (like a button).
- Screen magnifier should show the focused button or emulate any other standard behavior found in notification dialogs in Windows or respective operating systems.

**Markup used:**

- role="alert"
- aria-labelledby

**Notes:**

In the UIUC test example, the 'close' button cannot receive focus.

**Results:**

| AT                  | Firefox                                                      | IE   | Opera | Safari |
| ------------------- | ------------------------------------------------------------ | ---- | ----- | ------ |
| JAWS 9              | -                                                            | -    | n/a   | n/a    |
| JAWS 10             | 2 PASS, 1 PASS with known focus of the Close button problem.FFD - I concur | -    | -     | -      |
| Voiceover (Leopard) | n/a                                                          | n/a  | -     | fail   |
| VoiceOver (Leopard) | n/a                                                          | n/a  | -     | fail   |
| Window-Eyes         | -                                                            | -    | -     | -      |
| NVDA                | -                                                            | n/a  | -     | -      |
| Zoom (Leopard)      | pass                                                         | n/a  | pass  | pass   |
| Zoom (Leopard)      | pass                                                         | n/a  | pass  | pass   |
| ZoomText            | Fail- announced as 'alert'                                   | Pass | -     | -      |
| Orca                | -                                                            | -    | -     | -      |

### Button

#### Basic Button

1. [Button with description](https://codetalks.org/source/widgets/button/button.html)
2. [dojo nightly build](https://archive.dojotoolkit.org/nightly/dojotoolkit/dijit/tests/form/test_Button.html)

    \-- lots of other types of buttons there as well.

**Expected AT Behavior:**

- When focus falls on a button, a screen reader speaks the text of the button plus alternative text of any images within the button (the accessible name of the button). The word "button" is also spoken before or after the accessible name.

**Markup used:**

**Notes:**

**Results:**

| AT                  | Firefox                                                                                                     | IE  | Opera | Safari |
| ------------------- | ----------------------------------------------------------------------------------------------------------- | --- | ----- | ------ |
| JAWS 9              | -                                                                                                           | -   | n/a   | n/a    |
| JAWS 10             | Pass in non-V-PC mode, pass in V-PC-mode also if the button's text is not provided via labelledby or label. | -   | -     | -      |
| VoiceOver (Leopard) | n/a                                                                                                         | n/a | -     | fail   |
| Window-Eyes         | -                                                                                                           | -   | -     | -      |
| NVDA                | -                                                                                                           | n/a | -     | -      |
| Zoom (Leopard)      | pass                                                                                                        | n/a | pass  | pass   |
| ZoomText            | -                                                                                                           | -   | -     | -      |
| Orca                | -                                                                                                           | -   | -     | -      |

#### Toggle Button

1. [Buttons with Icons and without Text](https://codetalks.org/source/widgets/button/togglebuttonhtml)

    \-- under construction. Only the bold/italic buttons should be toggle buttons, and they aren't currently toggleable.

**Expected AT Behavior:**

- Same as basic button above, plus if the state is pressed, AT should indicate that when focus lands on the button and when toggling.
- AT should indicate that it is a toggle button (not a regular button)

**Markup used:**

- role="button" aria-pressed="false" (or true)

**Notes:**

**Results:**

| AT                  | Firefox                                                                                                                                                                                                         | IE  | Opera | Safari |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | ----- | ------ |
| JAWS 9              | -                                                                                                                                                                                                               | -   | n/a   | n/a    |
| JAWS 10             | Pass in non-V-PC-mode, button's state is announced when pressed, or when toggling it to pressed. Fail in V PC mode. No indication is given that a button is pressed, or that it is pressed after activating it. | -   | -     | -      |
| VoiceOver (Leopard) | n/a                                                                                                                                                                                                             | n/a | -     | fail   |
| Window-Eyes         | -                                                                                                                                                                                                               | -   | -     | -      |
| NVDA                | -                                                                                                                                                                                                               | n/a | -     | -      |
| Zoom (Leopard)      | pass                                                                                                                                                                                                            | n/a | pass  | pass   |
| ZoomText            | -                                                                                                                                                                                                               | -   | -     | -      |
| Orca                | -                                                                                                                                                                                                               | -   | -     | -      |

#### Menu Button

1. [dojo nightly build](https://archive.dojotoolkit.org/nightly/dojotoolkit/dijit/tests/form/test_Button.html)

**Expected AT Behavior:**

- Screen readers should indicate that this button has an associated menu.
- Screen magnifiers should give indication (if this is not done visually anyway).
- When the button is pressed, the menu should be tracked like any other menu.
- When closing the menu, this should be indicated, and focus should be repeated for the menu button the menu was opened from, or the new focus location if the activated menu item results in that.

**Markup used:**

**Notes:**

**Results:**

| AT                  | Firefox                                                                                                                                                                                                                                                                                                   | IE  | Opera | Safari |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | ----- | ------ |
| JAWS 9              | -                                                                                                                                                                                                                                                                                                         | -   | n/a   | n/a    |
| JAWS 10             | Pass in Non-V-PC-mode. Buttons are indicated as menu buttons. Menus are tracked, closing menus also results in correct focus tracking. Partial fail in V-PC-Mode. The fact that a button is a menu button is not indicated with the virtual cursor. Menus and focus are properly tracked upon activation. | -   | -     | -      |
| VoiceOver (Leopard) | n/a                                                                                                                                                                                                                                                                                                       | n/a | -     | fail   |
| Window-Eyes         | -                                                                                                                                                                                                                                                                                                         | -   | -     | -      |
| NVDA                | -                                                                                                                                                                                                                                                                                                         | n/a | -     | -      |
| Zoom (Leopard)      | pass                                                                                                                                                                                                                                                                                                      | n/a | pass  | pass   |
| ZoomText            | -                                                                                                                                                                                                                                                                                                         | -   | -     | -      |
| Orca                | -                                                                                                                                                                                                                                                                                                         | -   | -     | -      |

### Checkbox

#### Simple Checkbox

**Test cases:**

1. [Set aria-checked="false" for unchecked](https://codetalks.org/source/widgets/checkbox/checkbox2.html)
2. [Both remove or set attribute for unchecked case](https://codetalks.org/source/widgets/checkbox/checkbox.html)

    \-- also includes an invalid and required checkbox

3. [Hierarchical](http://test.cita.uiuc.edu/aria/checkbox/checkbox5.php)

    (newly added test not in test results yet)

4. [dojo nightly build](https://archive.dojotoolkit.org/nightly/dojotoolkit/dijit/tests/form/test_CheckBox.html)

**Expected AT Behavior:**

- Screen reader should speak the accessible name followed by both the type being checkbox and the state (checked, unchecked). When pressing Space, new state should be announced automatically.

**Markup used:**

- role="checkbox"
- aria-checked="true" or "false"

**Notes:**

Need testcase where aria-checked attribute is removed instead of set to false

**Results:**

| AT                  | Firefox                                                      | IE                                                           | Opera | Safari |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ----- | ------ |
| JAWS 9              | -                                                            | -                                                            | n/a   | n/a    |
| JAWS 10             | Pass                                                         | Fail (changes not spoken)                                    | Fail  | Fail   |
| VoiceOver (Leopard) | n/a                                                          | n/a                                                          | -     | fail   |
| Window-Eyes         | Pass                                                         | PassFail (unchecked presented as checked, IE exposing incorrect state for no aria-checked attribute) | Fail  | Fail   |
| NVDA                | Fail on #2 -- repetitive text spoken, first checkbox toggle speaks incorrect state | n/a                                                          | Fail  | Fail   |
| Zoom (Leopard)      | pass                                                         | n/a                                                          | pass  | pass   |
| ZoomText            | Pass                                                         | -                                                            | Fail  | Fail   |
| Orca                | Pass                                                         | n/a                                                          | -     | -      |

#### Tristate Checkbox

**Test cases:**

1. [Both remove or unset for unchecked case](https://codetalks.org/source/widgets/checkbox/checkbox-tristate.html)

**Expected AT Behavior:**

- Screen reader should announce accessible name, role and state. When toggling, new state should be announced (not checked, partially checked, checked).

**Markup used:**

- role="checkbox"
- aria-checked="true" | "false" | "mixed"

**Notes:**

**Results:**

| AT                  | Firefox                                                                                                                 | IE                                                                                               | Opera | Safari |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ----- | ------ |
| JAWS 9              | -                                                                                                                       | -                                                                                                | n/a   | n/a    |
| JAWS 10             | Partial pass. The state of tristate checkboxes is not announced when initially focusing. It is announced when toggling. | Fail - changes not spoken                                                                        | Fail  | Fail   |
| VoiceOver (Leopard) | n/a                                                                                                                     | n/a                                                                                              | -     | fail   |
| Window-Eyes         | Pass                                                                                                                    | Fail (unchecked presented as checked, IE exposing incorrect state for no aria-checked attribute) | Fail  | Fail   |
| NVDA                | Fail -- for change from mixed to fully checked, nothing spoken                                                          | n/a                                                                                              | Fail  | Fail   |
| Zoom (Leopard)      | pass                                                                                                                    | n/a                                                                                              | pass  | pass   |
| ZoomText            | Pass                                                                                                                    | -                                                                                                | Fail  | Fail   |
| Orca                | -                                                                                                                       | n/a                                                                                              | -     | -      |

### Combobox

**Test cases:**

1. [editable combo 2](https://codetalks.org/source/widgets/combobox/combo-editable.html)
2. [dojo nightly build (combobox)](https://archive.dojotoolkit.org/nightly/dojotoolkit/dijit/tests/form/test_ComboBox.html)
3. [dojo nightly build (combobox with auto complete)](https://archive.dojotoolkit.org/nightly/dojotoolkit/dijit/tests/form/test_FilteringSelect.html)

**Expected AT Behavior:**

- On focus, screen reader announces the label, the role and the current content of the combobox.
- If the currently selected option is changed the new option should be spoken whether the list is open or closed.
- When the combo box is opened or closed, the new open/closed state should be spoken.

**Markup used:**

**Notes:**

**Results:**

| AT                  | Firefox                                                                                                                                                                                                                                                                                                                                     | IE  | Opera | Safari |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | ----- | ------ |
| JAWS 9              | -                                                                                                                                                                                                                                                                                                                                           | -   | n/a   | n/a    |
| JAWS 10             | Fail. Label and current content as well as role are spoken, also when typing in a new value, that gets reflected. But when dropping down the lists of states in either example, after the second or so list item, JAWS turns off Forms Mode, and the user has to turn off V Cursor to be able to make selections or tab to anything useful. | -   | -     | -      |
| VoiceOver (Leopard) | n/a                                                                                                                                                                                                                                                                                                                                         | n/a | -     | fail   |
| Window-Eyes         | -                                                                                                                                                                                                                                                                                                                                           | -   | -     | -      |
| NVDA                | -                                                                                                                                                                                                                                                                                                                                           | n/a | -     | -      |
| Zoom (Leopard)      | pass                                                                                                                                                                                                                                                                                                                                        | n/a | pass  | pass   |
| ZoomText            | -                                                                                                                                                                                                                                                                                                                                           | -   | -     | -      |
| Orca                | -                                                                                                                                                                                                                                                                                                                                           | -   | -     | -      |

### Datepicker

**Test cases:**

1. [Datepicker Example](https://codetalks.org/source/widgets/datepicker/datepicker.sample.html)

**Expected AT Behavior:**

**Markup used:**

**Notes:**

**Results:**

| AT                  | Firefox | IE  | Opera | Safari |
| ------------------- | ------- | --- | ----- | ------ |
| JAWS 9              | -       | -   | n/a   | n/a    |
| JAWS 10             |         | -   | -     | -      |
| VoiceOver (Leopard) | n/a     | n/a | -     | fail   |
| Window-Eyes         | -       | -   | -     | -      |
| NVDA                | -       | n/a | -     | -      |
| Zoom (Leopard)      | pass    | n/a | pass  | pass   |
| ZoomText            | -       | -   | -     | -      |
| Orca                | -       | -   | -     | -      |

### Description

1. [Description for groupbox and for button](https://codetalks.org/source/widgets/button/button.html)

(AL) Note: the description role is no longer necessary as long as aria-describedby is used; however, this test case is still useful for testing aria-describedby.

**Expected AT Behavior:**

- When any control is focused inside the groupbox, where focus was previously outside of the groupbox, the description for the entire groupbox should be read by a screen reader.
- When the button is focused, the description of the button should be read after the button's label and role are read by the screen reader.
- Regression testers should test both tabbing forward and back, to make sure that the groupbox description and button description are both read when the button is the first item focused in the groupbox.
- (AL) Alternatively, description are not read automatically but may be accessible from a hotkey. However, if the screen reader does not at least indicate that the description exists, users are likely to miss important information.

**Markup used:**

- role="description" and aria-describedby

**Notes:**

**Results:**

| AT                  | Firefox | IE  | Opera | Safari |
| ------------------- | ------- | --- | ----- | ------ |
| JAWS 9              | -       | -   | n/a   | n/a    |
| JAWS 10             | -       | -   | -     | -      |
| VoiceOver (Leopard) | n/a     | n/a | -     | fail   |
| Window-Eyes         | -       | -   | -     | -      |
| NVDA                | -       | n/a | -     | -      |
| Zoom (Leopard)      | pass    | n/a | pass  | pass   |
| ZoomText            | -       | -   | -     | -      |
| Orca                | -       | -   | -     | -      |

### Dialog

1. [dojo nightly build](https://archive.dojotoolkit.org/nightly/dojotoolkit/dijit/tests/test_Dialog.html)

    \- Note that this may not always work

2. [Dojo 1.2.3 Release](https://download.dojotoolkit.org/release-1.2.3/dojo-release-1.2.3/dijit/tests/test_Dialog.html)
3. [YUI dialogs -- use first two dialog buttons](https://developer.yahoo.com/yui/examples/container/container-ariaplugin_clean.html)

**Expected AT Behavior:**

- (MZ) When the dialog opens, the dialog caption (or title), role, and if present, description should be read by screen readers, followed by the focused widget.

**Markup used:**

**Notes:**

**Results:**

| AT                  | Firefox | IE   | Opera | Safari |
| ------------------- | ------- | ---- | ----- | ------ |
| JAWS 9              | -       | -    | n/a   | n/a    |
| JAWS 10             | pass    | fail | -     | -      |
| VoiceOver (Leopard) | n/a     | n/a  | -     | fail   |
| Window-Eyes         | -       | -    | -     | -      |
| NVDA                | -       | n/a  | -     | -      |
| Zoom (Leopard)      | pass    | n/a  | pass  | pass   |
| ZoomText            | -       | -    | -     | -      |
| Orca                | -       | -    | -     | -      |

### Drag and Drop

1. [Tic tac toe](https://codetalks.org/source/widgets/draganddrop/draganddrop1.html)
2. [Slide show](https://codetalks.org/source/widgets/draganddrop/draganddrop2.html)

**Expected AT Behavior:**

- (MZ) Once focusing or arrowing onto the draggable item, screen reader should indicate that item can be an object that can be dragged.
- Once marked for drag and drop, screen reader should announce that this item has been picked up, to distinguish it from others that may be draggable, but are currently not selected for the operation. (AL) I'm not sure if there is a way for the screen reader to know when something has been marked for drag & drop.
- Target nodes where the item can be dropped should be indicated from now on when they receive focus or arrowing onto them with the virtual cursor.
- After drag and drop operation has completed, the new location of the item should be indicated in the virtual buffer representation. If the drag and drop operation caused a menu to open, focus should be tracked in that menu, and the user should be able to complete further interaction via the keyboard as usual.
- Optional but desired: AT should provide simple method to navigate only among the current drop targets.

**Markup used:**

- aria-grab
- aria-dropeffect

**Notes:**

- (MZ) There is no equivalent place in any of the known operating systems where draggable items are denoted and targets being indicated as such. All drag and drop operations screen readers traditionally perform within the operating system are hit and miss games that are performed on pixel locations. The above is a suggested series of behaviors I as an end user would want to experience when dealing with ARIA drag and drop, but it has no basis to go on, unlike common controls, for example.

**Results:**

| AT                  | Firefox | IE  | Opera | Safari |
| ------------------- | ------- | --- | ----- | ------ |
| JAWS 9              | -       | -   | n/a   | n/a    |
| JAWS 10             | -       | -   | -     | -      |
| VoiceOver (Leopard) | n/a     | n/a | -     | fail   |
| Window-Eyes         | -       | -   | -     | -      |
| NVDA                | -       | n/a | -     | -      |
| Zoom (Leopard)      | pass    | n/a | pass  | pass   |
| ZoomText            | -       | -   | -     | -      |
| Orca                | -       | -   | -     | -      |

### Grid

See various grid and table examples on the **[example page for grid variants](http://wiki.codetalks.org/wiki/index.php/Complex_Grid_Examples)**.

1. [Basic Grid](https://codetalks.org/source/widgets/grid/grid.sample.html)

    \-- single select

2. [Grid in an application](https://codetalks.org/source/widgets/grid/grid.html)

    \-- single select

3. [Illinois Grid Example](http://test.cita.uiuc.edu/aria/grid/grid1.php)

    \-- multi select

**Expected AT Behavior:**

- Screen reader should read column and row headers as the grid is traversed with arrow keys (in forms mode). Screen readers should continue to respect any special table reading modes while the user traverses the grid. For example, while in the grid in forms mode, the user should be able to configure the screen reader to read row headers only.

<!---->

- **JAWS -**

  - Virtual Cursor - JAWS treats a grid as if it were an HTML table. All table keys are active. Header behavior is not yet defined.
  - PC Cursor - TBD.

<!---->

- **Window-Eyes**

  - Window-Eyes should allow the user to change row/col header reading modes with Ctrl+Shift+H, whether the user is in browse or forms mode.

**Markup used:**

- role="grid", "gridcell", "rowheader", "columnheader"
- aria-selected, aria-readonly

**Notes:**

**Results:**

| AT                  | Firefox | IE  | Opera | Safari |
| ------------------- | ------- | --- | ----- | ------ |
| JAWS 9              | -       | -   | n/a   | n/a    |
| JAWS 10             | -       | -   | -     | -      |
| VoiceOver (Leopard) | n/a     | n/a | -     | fail   |
| Window-Eyes         | -       | -   | -     | -      |
| NVDA                | -       | n/a | -     | -      |
| Zoom (Leopard)      | pass    | n/a | pass  | pass   |
| ZoomText            | -       | -   | -     | -      |
| Orca                | -       | -   | -     | -      |

### Treegrid

Examples:

1. [Grid with expandable rows](https://codetalks.org/source/widgets/treegrid/treegrid.sample2.html)

**Expected AT Behavior:**

- (MZ) Screen readers should announce the current cell or row depending on the default behavior of the AT in other similar situations (e. g. ListViews in Windows, Tree Tables in Linux). If the current row is expandable, screen reader should indicate current state (expanded or collapsed). When the user changes the state, the new state should be spoken immediately. When navigating cells horizontally, the column header should be spoken for each cell.

**Markup used:**

**Notes:**

**Results:**

| AT                  | Firefox | IE  | Opera | Safari |
| ------------------- | ------- | --- | ----- | ------ |
| JAWS 9              | -       | -   | n/a   | n/a    |
| JAWS 10             | -       | -   | -     | -      |
| VoiceOver (Leopard) | n/a     | n/a | -     | fail   |
| Window-Eyes         | -       | -   | -     | -      |
| NVDA                | -       | n/a | -     | -      |
| Zoom (Leopard)      | pass    | n/a | pass  | pass   |
| ZoomText            | -       | -   | -     | -      |
| Orca                | -       | -   | -     | -      |

### Group

(no examples yet)

**Expected AT Behavior:**

- (MZ) When focus first lands on a control inside the group, the name should be spoken. Role may or may not be spoken, screen reader should use same handling as for regular group boxes. If describedby is present, the description should be spoken. Following all that, the focused control should be spoken.
- **JAWS -**

  - JAWS speaks the group name when focus is placed on a control within the group for the first time.
  - If described by is used on a fieldset (group box), JAWS speaks the description when focus is placed on a control within the group box for the first time.

**Markup used:**

**Notes:**

**Results:**

| AT                  | Firefox | IE  | Opera | Safari |
| ------------------- | ------- | --- | ----- | ------ |
| JAWS 9              | -       | -   | n/a   | n/a    |
| JAWS 10             | -       | -   | -     | -      |
| VoiceOver (Leopard) | n/a     | n/a | -     | fail   |
| Window-Eyes         | -       | -   | -     | -      |
| NVDA                | -       | n/a | -     | -      |
| Zoom (Leopard)      | pass    | n/a | pass  | pass   |
| ZoomText            | -       | -   | -     | -      |
| Orca                | -       | -   | -     | -      |

### Img

1. [Tiled image](https://codetalks.org/source/widgets/img/tiled.html)

**Expected AT Behavior:**

- Screen readers should announce the image is a single graphic element along with its associated label, even though it is built from numerous sub-images.

**Markup used:**

- role="img"

**Notes:**

If the screen reader does not provide the required behavior, then most likely it is a browser issue, for not respecting "Children Presentational: true" for that role. The accessible hierarchy should contain no children for the img.

**Results:**

| AT                  | Firefox | IE  | Opera | Safari |
| ------------------- | ------- | --- | ----- | ------ |
| JAWS 9              | -       | -   | n/a   | n/a    |
| JAWS 10             | -       | -   | -     | -      |
| VoiceOver (Leopard) | n/a     | n/a | -     | fail   |
| Window-Eyes         | -       | -   | -     | -      |
| NVDA                | -       | n/a | -     | -      |
| Zoom (Leopard)      | pass    | n/a | pass  | pass   |
| ZoomText            | -       | -   | -     | -      |
| Orca                | -       | -   | -     | -      |

### List

[Simple List](https://codetalks.org/source/enhanced-html-forms/list.html)

**Expected AT Behavior:**

- (MZ) Screen reader should indicate an ARIA list like any other static HTML list. Normally, the number of items contained within the list, and the nesting level (if this is not the outermost list) is announced upon entering. Upon leaving the list, screen reader should give an indication. List items should be read as they appear. As the user navigates, any level changes should be read.

**Markup used:**

**Notes:**

**Results:**

| AT                  | Firefox | IE  | Opera | Safari |
| ------------------- | ------- | --- | ----- | ------ |
| JAWS 9              | -       | -   | n/a   | n/a    |
| JAWS 10             | -       | -   | -     | -      |
| VoiceOver (Leopard) | n/a     | n/a | -     | fail   |
| Window-Eyes         | -       | -   | -     | -      |
| NVDA                | -       | n/a | -     | -      |
| Zoom (Leopard)      | pass    | n/a | pass  | pass   |
| ZoomText            | -       | -   | -     | -      |
| Orca                | -       | -   | -     | -      |

### Link

- [Basic Link Example](https://codetalks.org/source/widgets/link/link.html)
- [Link Variants](https://codetalks.org/source/widgets/link/link.sample.html)

**Expected AT Behavior:**

- Screen reader should announce the text or label for the link when it is focused, and the fact that it's a link. ARIA links should be included in the screen reader's List Links function just like ordinary links. Actions in this dialog or list such as "Activate Link" or "Move to Link" should perform the same as they do with regular links.

**Markup used:**

**Notes:**

**Results:**

| AT                  | Firefox | IE  | Opera | Safari |
| ------------------- | ------- | --- | ----- | ------ |
| JAWS 9              | -       | -   | n/a   | n/a    |
| JAWS 10             | -       | -   | -     | -      |
| VoiceOver (Leopard) | n/a     | n/a | -     | fail   |
| Window-Eyes         | -       | -   | -     | -      |
| NVDA                | -       | n/a | -     | -      |
| Zoom (Leopard)      | pass    | n/a | pass  | pass   |
| ZoomText            | -       | -   | -     | -      |
| Orca                | -       | -   | -     | -      |

### Listbox and Option

1. [dojo nightly build](https://archive.dojotoolkit.org/nightly/dojotoolkit/dijit/tests/form/test_MultiSelect.html)
2. [Single select listbox](https://codetalks.org/source/widgets/listbox/listbox.html)

    using aria-activedescendant

3. [Listbox in an iframe](https://codetalks.org/source/widgets/listbox/listbox-owner.html)

    \-- this is an important case as it's an example of how a mashup widget can be built (the widget source comes from another url, and is tied in using an iframe)

4. [YUI "Carousel" listbox](https://developer.yahoo.com/yui/examples/carousel/carousel-ariaplugin_source.html)

    \-- a more advanced test case

**Expected AT Behavior:**

- (MZ) Screen reader should announce the label and role of the listbox when it gains focus. If an item is focused within the list, this should be announced next, followed by an indication of this item's position within the list if the screen reader supports this in other lists as well. As focus moves within the list, the screen reader should announce the relevant list items.
- (AL) What about multiple selection? What should happen as the user selects or unselects the current item, does a select all, uses shift+arrow to select, etc.?

**Markup used:**

- role="listbox", "option" (listitem should only be used with list, which is for static document structures, could someone please make sure our examples follow this rule)
- aria-activedescendant

**Notes:**

**Results:**

| AT                  | Firefox | IE  | Opera | Safari |
| ------------------- | ------- | --- | ----- | ------ |
| JAWS 9              | -       | -   | n/a   | n/a    |
| JAWS 10             | -       | -   | -     | -      |
| VoiceOver (Leopard) | n/a     | n/a | -     | fail   |
| Window-Eyes         | -       | -   | -     | -      |
| NVDA                | -       | n/a | -     | -      |
| Zoom (Leopard)      | pass    | n/a | pass  | pass   |
| ZoomText            | -       | -   | -     | -      |
| Orca                | -       | -   | -     | -      |

### Menubar and Menu

1. [YUI menubar](https://developer.yahoo.com/yui/examples/menu/menuwaiaria_source.html)
2. [Menubar 1](https://codetalks.org/source/widgets/grid/grid.html)
3. [dojo nightly build - popup menu](https://archive.dojotoolkit.org/nightly/dojotoolkit/dijit/tests/test_Menu.html)

**Expected AT Behavior:**

- (MZ) As focus is placed inside a menu or menubar, a screen reader should announce the name (if any) of the menu, the role of the menu, and then read the current menu item.
- (AL) As focus moves within the menu, the screen reader should read the current menuitem.
- (AL) To read a menu item, the screen reader should announce the name. If it is a radio or checkbox menu item, the screen reader should indicate that it's checkable. If it has a submenu (aria-haspopup), the screen reader should indicate that as well.
- (MZ) If a menu is dropped down, the activation of the new menu should be indicated and the focus tracked as it moves through the items.
- (MZ) When the menu is closed, screen reader should indicate this along with the newly focused item.
- (MZ) This may be the menu bar or higher level menu item, or a control that gains focus after the menu was closed after executing a command.
- (MZ) If the menu caused a dialog to open, the dialog context should be given, just as with regular desktop applications.

**Markup used:**

- role="menubar", role="menu", role="menuitem", role="menuitemcheckbox", role="menuitemradio"
- aria-haspopup="true"
- aria-disabled="true"

**Notes:**

**Results:**

| AT                  | Firefox | IE  | Opera | Safari |
| ------------------- | ------- | --- | ----- | ------ |
| JAWS 9              | -       | -   | n/a   | n/a    |
| JAWS 10             | -       | -   | -     | -      |
| VoiceOver (Leopard) | n/a     | n/a | -     | fail   |
| Window-Eyes         | -       | -   | -     | -      |
| NVDA                | -       | n/a | -     | -      |
| Zoom (Leopard)      | pass    | n/a | pass  | pass   |
| ZoomText            | -       | -   | -     | -      |
| Orca                | -       | -   | -     | -      |

### Progressbar

1. [dojo nightly build](https://archive.dojotoolkit.org/nightly/dojotoolkit/dijit/tests/test_ProgressBar.html)
2. [Progress bar in "off" live region](https://codetalks.org/source/widgets/progressbar/progressbar.html)
3. [Progressbar in "assertive" live region](https://codetalks.org/source/widgets/progressbar/progressbar-with-assertive.html)

**Expected AT Behavior:**

- The progress updates should be treated as the screen reader treats any progress updates. The live region markup should not affect how the progress updates are presented.
- (AL) If the screen reader provides a keystroke to announce the current progress, this should work with an ARIA progressbar as well.
- **JAWS -** JAWS announces the level of progress at each time interval the user selects in JAWS configuration.

**Markup used:**

- role="progressbar", aria-valuemin, aria-valuenow, aria-valuemax

**Notes:**

**Results:**

| AT                  | Firefox | IE  | Opera | Safari |
| ------------------- | ------- | --- | ----- | ------ |
| JAWS 9              | -       | -   | n/a   | n/a    |
| JAWS 10             | -       | -   | -     | -      |
| VoiceOver (Leopard) | n/a     | n/a | -     | fail   |
| Window-Eyes         | -       | -   | -     | -      |
| NVDA                | -       | n/a | -     | -      |
| Zoom (Leopard)      | pass    | n/a | pass  | pass   |
| ZoomText            | -       | -   | -     | -      |
| Orca                | -       | -   | -     | -      |

### Radiogroup and Radiobutton

1. [Radio Example using CSS Background Images](https://codetalks.org/source/widgets/radio/radio1.html)
2. [Radio Example using IMG Element](https://codetalks.org/source/widgets/radio/radio2.html)
3. [Radio Example using aria-activedescendant Property](https://codetalks.org/source/widgets/radio/radio3.html)
4. [dojo nightly build](https://archive.dojotoolkit.org/nightly/dojotoolkit/dijit/tests/form/test_CheckBox.html)

**Expected AT Behavior:**

- On initial focus, the screen reader should announce the label of the radio group and the focused radio button, whether it is selected or not, and its position. As focus moves among the radio buttons, the newly focused radio button's label, state and position should be indicated.

**Markup used:**

**Notes:**

**Results:**

| AT                  | Firefox | IE  | Opera | Safari |
| ------------------- | ------- | --- | ----- | ------ |
| JAWS 9              | -       | -   | n/a   | n/a    |
| JAWS 10             | -       | -   | -     | -      |
| VoiceOver (Leopard) | n/a     | n/a | -     | fail   |
| Window-Eyes         | -       | -   | -     | -      |
| NVDA                | -       | n/a | -     | -      |
| Zoom (Leopard)      | pass    | n/a | pass  | pass   |
| ZoomText            | -       | -   | -     | -      |
| Orca                | -       | -   | -     | -      |

### Separator

(no examples yet)

**Expected AT Behavior:**

- (MZ) The inclusion of this element should be controlled by the screen reader. If it does not indicate separators by default in the operating system, it should honor this for web applications, too. If it does support separators, the same symbolism should be used as for other separators in speech and braille.
- **JAWS -** TBD.

**Markup used:**

**Notes:**

**Results:**

| AT                  | Firefox | IE  | Opera | Safari |
| ------------------- | ------- | --- | ----- | ------ |
| JAWS 9              | -       | -   | n/a   | n/a    |
| JAWS 10             | -       | -   | -     | -      |
| VoiceOver (Leopard) | n/a     | n/a | -     | fail   |
| Window-Eyes         | -       | -   | -     | -      |
| NVDA                | -       | n/a | -     | -      |
| Zoom (Leopard)      | pass    | n/a | pass  | pass   |
| ZoomText            | -       | -   | -     | -      |
| Orca                | -       | -   | -     | -      |

### Slider

#### Single Slider

1. [Slider using in-line images for thumb](https://codetalks.org/source/widgets/slider/pretty-slider-inline-img.html)
2. [dojo nightly build](https://archive.dojotoolkit.org/nightly/dojotoolkit/dijit/tests/form/test_Slider.html)
3. [Simple slider](https://codetalks.org/source/widgets/slider/simple-slider.html)
4. [Pretty slider](https://codetalks.org/source/widgets/slider/pretty-slider-background-images.html)
5. [MINDTROVE Rating Widget](https://mindtrove.info/html/rating-tutorial.html)
6. [Paciello Group slider](https://www.paciellogroup.com/blog/misc/ARIA/slider/)

**Expected AT Behavior:**

- The user can navigate to the slider control in all modes. When the user navigates to the slider, the screen reader should announce the label, role and position of the slider.
- When not in a virtual buffer mode, the user can control the slider using keys such as the arrow keys, home and end.
- In virtual buffer mode, the slider exists in the virtual buffer as a single entity, and any images or text that create the sliders appearance are not presented to the user separately. Note: if this does not work, it means the browser is exposing the children instead of respecting the "Children Presentational: true" rule for sliders
- As the user moves the slider, the new value is spoken

**Markup used:**

- role="slider"
- aria-valuemin, aria-valuenow, aria-valuemax

**Notes:**

**Results:**

| AT                  | Firefox | IE  | Opera | Safari |
| ------------------- | ------- | --- | ----- | ------ |
| JAWS 9              | -       | -   | n/a   | n/a    |
| JAWS 10             | -       | -   | -     | -      |
| VoiceOver (Leopard) | n/a     | n/a | -     | fail   |
| Window-Eyes         | -       | -   | -     | -      |
| NVDA                | -       | n/a | -     | -      |
| Zoom (Leopard)      | pass    | n/a | pass  | pass   |
| ZoomText            | -       | -   | -     | -      |
| Orca                | -       | -   | -     | -      |

#### Multi-Thumb Slider

1. [Multi-Thumb Slider Example using inline images for thumbs](https://codetalks.org/source/widgets/slider/pretty-slider-dual-inline-img.html)
2. [TPG double slider](https://www.paciellogroup.com/blog/misc/samples/aria/slider/doubleslider.html)

**Expected AT Behavior:**

- **JAWS -** On focus JAWS announces the role and focus slider position. As the user moves the slider, JAWS announces the new position. The same is true for the second thumb (slider).

**Markup used:**

**Notes:**

**Results:**

| AT                  | Firefox | IE  | Opera | Safari |
| ------------------- | ------- | --- | ----- | ------ |
| JAWS 9              | -       | -   | n/a   | n/a    |
| JAWS 10             | -       | -   | -     | -      |
| VoiceOver (Leopard) | n/a     | n/a | -     | fail   |
| Window-Eyes         | -       | -   | -     | -      |
| NVDA                | -       | n/a | -     | -      |
| Zoom (Leopard)      | pass    | n/a | pass  | pass   |
| ZoomText            | -       | -   | -     | -      |
| Orca                | -       | -   | -     | -      |

### Spinner

#### Spin Button

1. [dojo nightly build](https://archive.dojotoolkit.org/nightly/dojotoolkit/dijit/tests/form/test_Spinner.html)

**Expected AT Behavior:**

- (MZ) As focus first lands on the spinner, the screen reader should announce the label, role and current value. As the value is changed, the new value should be announced without repeating label or role.

**Markup used:**

**Notes:**

**Results:**

| AT                  | Firefox | IE  | Opera | Safari |
| ------------------- | ------- | --- | ----- | ------ |
| JAWS 9              | -       | -   | n/a   | n/a    |
| JAWS 10             | -       | -   | -     | -      |
| VoiceOver (Leopard) | n/a     | n/a | -     | fail   |
| Window-Eyes         | -       | -   | -     | -      |
| NVDA                | -       | n/a | -     | -      |
| Zoom (Leopard)      | pass    | n/a | pass  | pass   |
| ZoomText            | -       | -   | -     | -      |
| Orca                | -       | -   | -     | -      |

### Tabpanel

1. [Simple Tabpanel Example](https://codetalks.org/source/widgets/tabpanel/tabpanel1.html)
2. [dojo nightly build](https://archive.dojotoolkit.org/nightly/dojotoolkit/dijit/tests/test_Dialog.html)
3. [Another tab panel example](https://codetalks.org/source/widgets/tabpanel/tabpanel.html)
4. [Just another tab panel example](https://codetalks.org/source/widgets/tabpanel/tablist.sample.html)
5. [YUI Tab Panel example with live regions (using YUI ARIA plug-in)](https://developer.yahoo.com/yui/examples/tabview/tabview-ariaplugin_clean.html)

    .

6. [MS IE8 Tab Control example](http://samples.msdn.microsoft.com/ietestcenter/Aria/samples/TabControl.html)

**Expected AT Behavior:**

- As focus first lands on the tabs, screen reader announces the label and role of the focused tab item, and whether it is selected.
- As the user presses left and right arrows to change the tabs, the newly focused tab should be announced. When navigating over the currently selected tab, the fact that this is the tab currently being active should be indicated. Note that for tabs with AJAX content, for performance reasons it is optional that they only load the panel only once the user presses Space on the new tab. However, if there is no perf issues they can show the new content when the tab gets focus.
- If a new tab is selected via Space, the now selected state should be indicated.
- As the user tabs into the panel, its name, role, and if present, description should be read, followed by the newly focused item.
- Subsequent navigation within the same tab panel should not repeat name, role, or description of the tab panel.

**Markup used:**

**Notes:**

**Results:**

| AT                  | Firefox | IE  | Opera | Safari |
| ------------------- | ------- | --- | ----- | ------ |
| JAWS 9              | -       | -   | n/a   | n/a    |
| JAWS 10             | -       | -   | -     | -      |
| VoiceOver (Leopard) | n/a     | n/a | -     | fail   |
| Window-Eyes         | -       | -   | -     | -      |
| NVDA                | -       | n/a | -     | -      |
| Zoom (Leopard)      | pass    | n/a | pass  | pass   |
| ZoomText            | -       | -   | -     | -      |
| Orca                | -       | -   | -     | -      |

### Textbox

1. [dojo nightly build](https://archive.dojotoolkit.org/nightly/dojotoolkit/dijit/tests/test_Editor.html)

**Expected AT Behavior:**

- (MZ) When focus first lands on the textbox, its label and role should be indicated. If it also contains content, an indication should be given as for regular textboxes. If the text is automatically selected on focus, this should be indicated.
- Arrow keys should read by character or line as usual.
- (AL) I think we need more here. For example, what about reading the line number if the user requests that info?

**Markup used:**

**Notes:**

**Results:**

| AT                  | Firefox | IE  | Opera | Safari |
| ------------------- | ------- | --- | ----- | ------ |
| JAWS 9              | -       | -   | n/a   | n/a    |
| JAWS 10             | -       | -   | -     | -      |
| VoiceOver (Leopard) | n/a     | n/a | -     | fail   |
| Window-Eyes         | -       | -   | -     | -      |
| NVDA                | -       | n/a | -     | -      |
| Zoom (Leopard)      | pass    | n/a | pass  | pass   |
| ZoomText            | -       | -   | -     | -      |
| Orca                | -       | -   | -     | -      |

### Toolbar

1. [Example](https://www.thosedamntwins.com/aria/toolbar/)

    to test ARIA live region and toolbar

2. [dojo nightly build](https://archive.dojotoolkit.org/nightly/dojotoolkit/dijit/tests/test_Toolbar.html)

**Expected AT Behavior:**

- (MZ) Upon initial focus, if the toolbar has a label, screen reader should speak it, followed by the role and the label and role of the current toolbar item.
- As the controls within the toolbar are navigated, the newly focused item should be announced, but the label or role of the toolbar itself should not be repeated.

**Markup used:**

**Notes:**

**Results:**

| AT                  | Firefox | IE  | Opera | Safari |
| ------------------- | ------- | --- | ----- | ------ |
| JAWS 9              | -       | -   | n/a   | n/a    |
| JAWS 10             | -       | -   | -     | -      |
| VoiceOver (Leopard) | n/a     | n/a | -     | fail   |
| Window-Eyes         | -       | -   | -     | -      |
| NVDA                | -       | n/a | -     | -      |
| Zoom (Leopard)      | pass    | n/a | pass  | pass   |
| ZoomText            | -       | -   | -     | -      |
| Orca                | -       | -   | -     | -      |

### Tooltip

1. [dojo nightly build (tooltip)](https://archive.dojotoolkit.org/nightly/dojotoolkit/dijit/tests/test_Tooltip.html)
2. [Simple tooltip](https://codetalks.org/source/widgets/tooltip/tooltip.html)

    \-- the tooltip for the link contains the text "Some tooltip"

**Expected AT Behavior:**

- The tooltip text should be spoken as the user navigates to the widget with the tooltip.
- **JAWS -** JAWS announces tooltips as they appear. This is dependent on the user's JAWS configuration setting.
- **ZoomText -** (AL) should ensure that tooltip is visible (not scrolled off) when it appears, and should read it aloud

**Markup used:**

- role="tooltip"
- aria-describedby
- aria-hidden

**Notes:**

**Results:**

| AT                  | Firefox | IE  | Opera | Safari |
| ------------------- | ------- | --- | ----- | ------ |
| JAWS 9              | -       | -   | n/a   | n/a    |
| JAWS 10             | -       | -   | -     | -      |
| VoiceOver (Leopard) | n/a     | n/a | -     | fail   |
| Window-Eyes         | -       | -   | -     | -      |
| NVDA                | -       | n/a | -     | -      |
| Zoom (Leopard)      | pass    | n/a | pass  | pass   |
| ZoomText            | -       | -   | -     | -      |
| Orca                | -       | -   | -     | -      |

### Tree

1. [dojo nightly build](https://archive.dojotoolkit.org/nightly/dojotoolkit/dijit/tests/test_Tree.html)
2. [Simple tree](https://codetalks.org/source/widgets/tree/tree.html)

    \-- uses document structure to create hierarchy

3. [Tree](https://codetalks.org/source/widgets/tree/tree3.html)

    \- Subtrees are encapsulated in treeitems

4. [MS IE8 Tree example](http://samples.msdn.microsoft.com/ietestcenter/Aria/samples/tree/ariatree.htm)
5. We need an example that uses aria-level, aria-setsize and aria-posinset to create the hierarchy
6. We also need one that uses aria-owns to create the hierarchy / structure
7. We need one that uses the document to create structure, but uses nested ULs with links inside, and role="presentation"

**Expected AT Behavior:**

- If navigated to in a screen reader's virtual buffer, the label, role and previously active item of the tree should be read.
- Upon initial focus, the label (if present), and role of the tree itself should be spoken, followed by the current tree item's information.
- When a tree item is read, the screen reader should announce its label, role, state and "Item n of m" positional information. The state includes whether it is expandable and expanded/open.
- As focus is moved, output should be identical to desktop tree widgets like in e.g. Windows Explorer: the tree item should be read as described above, and the level should be announced if it changes.
- As expandable items are opened and closed, the state change should be announced immediately. Optionally, when opening an item, announce the number of sub items that just became available.

**Markup used:**

- role="tree", "treeitem", "group", "presentation"
- aria-level, aria-setsize, aria-posinset
- aria-expanded

**Notes:**

**Results:**

| AT                  | Firefox | IE  | Opera | Safari |
| ------------------- | ------- | --- | ----- | ------ |
| JAWS 9              | -       | -   | n/a   | n/a    |
| JAWS 10             | -       | -   | -     | -      |
| VoiceOver (Leopard) | n/a     | n/a | -     | fail   |
| Window-Eyes         | -       | -   | -     | -      |
| NVDA                | -       | n/a | -     | -      |
| Zoom (Leopard)      | pass    | n/a | pass  | pass   |
| ZoomText            | -       | -   | -     | -      |
| Orca                | -       | -   | -     | -      |

## Other Test Cases

### Application

1. [Simple application with inner document](https://codetalks.org/source/landmarks/application-with-inner-document.html)
2. [With grid and menubar](https://codetalks.org/source/widgets/grid/grid.html)

**Expected AT Behavior:**

- If AT supports virtual buffers (probably all Windows screen readers), this should be automatically turned off and the user should interact via the keyboard commands built into the web app.
- It should still be possible to the document/browse/virtual mode back on

**Markup used:**

- role="application"

**Notes:**

**Results:**

| AT                  | Firefox                                                                                                                                                                  | IE   | Opera | Safari |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---- | ----- | ------ |
| JAWS 9              | Fail                                                                                                                                                                     | Fail | n/a   | n/a    |
| JAWS 10             | Pass with slight problems in the menu bar (wrong order of events or missing ones, sometimes making JAWS believe it is still in a menu when the menu has actually closed) | Fail | -     | -      |
| VoiceOver (Leopard) | n/a                                                                                                                                                                      | n/a  | -     | fail   |
| Window-Eyes         | Fail                                                                                                                                                                     | Fail | -     | -      |
| NVDA                | Fail                                                                                                                                                                     | n/a  | -     | -      |
| Zoom (Leopard)      | pass                                                                                                                                                                     | n/a  | pass  | pass   |
| ZoomText            | -                                                                                                                                                                        | -    | -     | -      |
| Orca                | -                                                                                                                                                                        | -    | -     | -      |

### Document

- [Application with inner document](https://codetalks.org/source/landmarks/application-with-inner-document.html)

**Expected AT Behavior:**

- If a document/browser/virtual reading mode exists, switch to that mode when the document or descendant of the document receives focus
- Document is also treated as a

  [landmark](http://wiki.codetalks.org/wiki/index.php/Set_of_ARIA_Test_Cases#Landmarks)

**Markup used:**

**Notes:**

**Results:**

| AT                  | Firefox | IE  | Opera | Safari |
| ------------------- | ------- | --- | ----- | ------ |
| JAWS 9              | -       | -   | n/a   | n/a    |
| JAWS 10             | -       | -   | -     | -      |
| VoiceOver (Leopard) | n/a     | n/a | -     | fail   |
| Window-Eyes         | -       | -   | -     | -      |
| NVDA                | -       | n/a | -     | -      |
| Zoom (Leopard)      | pass    | n/a | pass  | pass   |
| ZoomText            | -       | -   | -     | -      |
| Orca                | -       | -   | -     | -      |

### Landmarks

1. [Real world Yahoo! news page with landmarks](https://news.yahoo.com/)
2. [Illinois Navigation Example](http://test.cita.uiuc.edu/aria/nav/nav1.php)
3. [Test all landmarks](https://codetalks.org/source/landmarks/test-all-minimal.html)

    \-- very minimal test, not a real world case. The page includes some nested landmarks as well.

4. [Juicy Studio](https://juicystudio.com/article/examining-wai-aria-document-andmark-roles.php)

    \-- real world example

5. [This site](https://codetalks.org/)

    \-- another real world example

6. [Application with inner document](https://codetalks.org/source/landmarks/application-with-inner-document.html)

    \-- the only landmark here is the document, since role="application" as at the root

**Expected AT Behavior:**

- Screen readers should not include the root accessible object in a page in the list of landmarks
- Screen readers should provide keys to allow users to traverse a list of landmarks or next/prev landmark keys
- Screen readers should support nested landmarks, and multiple landmarks of the same time
- Screen readers should announce the number of landmarks at page load, if they exist on the page
- Screen readers should announce landmarks as users navigate into them (test in all screen reader modes)
- 8 (JG) Are their any landmark role equivalents with HTML headers like role=main\~h1??

<!---->

- **JAWS -**

  - JAWS announces landmarks as they are encountered in the virtual page.
  - JAWSKey+Ctrl+SemiColon keystroke displays a list of landmarks in the current page.
  - SemiColon and SHift+SemiColon move to Next Landmark and Move to Previous Landmark respectively.

**Markup used:**

- role = (one of the following): "application", "article", "banner", "complementary", "contentinfo", "directory", "document", "log", "main", "note", "navigation", "region", "search", "status"

**Notes:**

- Screen readers may wish to provide some landmark-specific conveniences such as automatically starting at "main" when reading the page after page load, or providing a special key to get to the search bar, etc.

**Results:**

| AT                  | Firefox                                                      | IE                                  | Opera | Safari |
| ------------------- | ------------------------------------------------------------ | ----------------------------------- | ----- | ------ |
| JAWS 9              | -                                                            | -                                   | n/a   | n/a    |
| JAWS 10             | AL: Tested 2 and 4 with JAWS 10.0.512U on Nov 21, 20082. FAIL - No landmarks reported on page load but there are many in the source. Pressing ; does not visit any of them. 4. FAIL - JAWS says it has 5 landmarks, when page first loads, pressing ; only moves between 2 of the landmarks. Also, JAWSKey+Ctrl+SemiColon keystroke displays only 4 of the landmarks (it seems to be missing search) | Exact same failures as with Firefox | -     | -      |
| VoiceOver (Leopard) | n/a                                                          | n/a                                 | -     | fail   |
| Window-Eyes         | -                                                            | -                                   | -     | -      |
| NVDA                | -                                                            | n/a                                 | -     | -      |
| Zoom (Leopard)      | pass                                                         | n/a                                 | pass  | pass   |
| ZoomText            | -                                                            | -                                   | -     | -      |
| Orca                | -                                                            | -                                   | -     | -      |

### Live Regions

Thank you to Charles Chen for developing the [live region examples](http://accessibleajax.clcworld.net/).

#### aria-live

1. [aria-live="off"](https://codetalks.org/source/live/live_off.html)
2. [aria-live="polite"](https://codetalks.org/source/live/live_polite.html)
3. [aria-live="assertive"](https://codetalks.org/source/live/live_assertive.html)
4. [aria-live="rude"](https://codetalks.org/source/live/live_rude.html)
5. [aria-live attribute is missing](https://codetalks.org/source/live/live_missing.html)
6. [nested live regions: "assertive" inside "off"](https://codetalks.org/source/live/live_nested-regions.html)
7. [MS IE8 Chat Example](http://samples.msdn.microsoft.com/ietestcenter/Aria/samples/liveRegion.htm)

**Expected AT Behavior:**

- **JAWS -** Announces updates to live regions.

**Markup used:**

- aria-live

**Notes:**

**Results:**

| AT                  | Firefox | IE  | Opera | Safari |
| ------------------- | ------- | --- | ----- | ------ |
| JAWS 9              | -       | -   | n/a   | n/a    |
| JAWS 10             | -       | -   | -     | -      |
| VoiceOver (Leopard) | n/a     | n/a | -     | fail   |
| Window-Eyes         | -       | -   | -     | -      |
| NVDA                | -       | n/a | -     | -      |
| Zoom (Leopard)      | pass    | n/a | pass  | pass   |
| ZoomText            | -       | -   | -     | -      |
| Orca                | -       | -   | -     | -      |

#### Labelled or Described Live Region

1. [aria-labelledby="(id)" aria-live="polite"](https://codetalks.org/source/live/labelledby.html)
2. [aria-describedby="(id)" aria-live="polite"](https://codetalks.org/source/live/describedby.html)

**Expected AT Behavior:**

- **JAWS -** Announces updates to live regions.

**Markup used:**

- aria-live, aria-labelledby, aria-describedby

**Notes:**

**Results:**

| AT                  | Firefox | IE  | Opera | Safari |
| ------------------- | ------- | --- | ----- | ------ |
| JAWS 9              | -       | -   | n/a   | n/a    |
| JAWS 10             | -       | -   | -     | -      |
| VoiceOver (Leopard) | n/a     | n/a | -     | fail   |
| Window-Eyes         | -       | -   | -     | -      |
| NVDA                | -       | n/a | -     | -      |
| Zoom (Leopard)      | pass    | n/a | pass  | pass   |
| ZoomText            | -       | -   | -     | -      |
| Orca                | -       | -   | -     | -      |

#### aria-atomic="true"

1. [aria-atomic="true" aria-live="polite"](https://codetalks.org/source/live/atomic_true.html)

**Expected AT Behavior:**

- (AL) For any changed text within an atomic live region, the screen reader should read the entire atomic region.
- (AL) If two or more changes occur before the screen reader gets a chance to read the region, the screen reader should still only read the entire region once.
- (AL) The screen reader should try to concatenate several sequential changes to the same region. If two changes occur almost at the same time (say within .05 seconds for example), the screen reader should make sure to read the entire region only once.

**Markup used:**

- aria-atomic="true" aria-live="polite"

**Notes:**

**Results:**

| AT                  | Firefox | IE  | Opera | Safari |
| ------------------- | ------- | --- | ----- | ------ |
| JAWS 9              | -       | -   | n/a   | n/a    |
| JAWS 10             | -       | -   | -     | -      |
| VoiceOver (Leopard) | n/a     | n/a | -     | fail   |
| Window-Eyes         | -       | -   | -     | -      |
| NVDA                | -       | n/a | -     | -      |
| Zoom (Leopard)      | pass    | n/a | pass  | pass   |
| ZoomText            | -       | -   | -     | -      |
| Orca                | -       | -   | -     | -      |

#### aria-controls

1. [aria-controls](https://codetalks.org/source/live/controls.html)

    \-- activating button makes live region change

2. [aria-controls and live="polite" changes](https://codetalks.org/source/live/live_controls-and-politeness.html)

    \-- live region with a combination of polite real world changes and button-controlled changes

**Expected AT Behavior:**

- (AL) Minimal: the screen reader should utilize the politeness level to read changes that occur.
- (AL) Optional but desired: the screen reader should announce updates to a live region where the region changes are the result of a user action. This should even if the user does not set aria-live, and for any value other than aria-live="off". It turns out that using aria-controls is actually not the best way to determine this in all browsers. There is often a way to determine if a change was caused by user input.

**Markup used:**

- aria-controls, aria-live="polite"

**Notes:**

**Results:**

| AT                  | Firefox | IE  | Opera | Safari |
| ------------------- | ------- | --- | ----- | ------ |
| JAWS 9              | -       | -   | n/a   | n/a    |
| JAWS 10             | -       | -   | -     | -      |
| VoiceOver (Leopard) | n/a     | n/a | -     | fail   |
| Window-Eyes         | -       | -   | -     | -      |
| NVDA                | -       | n/a | -     | -      |
| Zoom (Leopard)      | pass    | n/a | pass  | pass   |
| ZoomText            | -       | -   | -     | -      |
| Orca                | -       | -   | -     | -      |

#### aria-relevant tests

1. [aria-relevant="additions" aria-live="polite"](https://codetalks.org/source/live/relevant_additons.html)
2. [aria-relevant="removals" aria-live="polite"](https://codetalks.org/source/live/relevant_removals.html)
3. [aria-relevant="text" aria-live="polite"](https://codetalks.org/source/live/relevant_text.html)
4. [aria-relevant="all" aria-live="polite"](https://codetalks.org/source/live/relevant_all.html)
5. [aria-relevant="additions removals text" aria-live="polite](https://codetalks.org/source/live/relevant_additons_removals_text.html)

    \-- should have same behavior as "all"

6. [aria-relevant="additions text" aria-live="polite"](https://codetalks.org/source/live/relevant_additions_text.html)
7. [aria-live="polite"](https://codetalks.org/source/live/relevant_default.html)

    \-- aria-relevant is not set, so should act the same as "additions text"

**Expected AT Behavior:**

- (AL) If aria-relevant is not specified, the screen reader should read only live node additions and text changes
- (AL) If aria-relevant is specified, the screen reader should read all the changes specified by aria-relevant and no more.

**Markup used:**

- aria-relevant, aria-live="polite"

**Notes:**

**Results:**

| AT                  | Firefox | IE  | Opera | Safari |
| ------------------- | ------- | --- | ----- | ------ |
| JAWS 9              | -       | -   | n/a   | n/a    |
| JAWS 10             | -       | -   | -     | -      |
| VoiceOver (Leopard) | n/a     | n/a | -     | fail   |
| Window-Eyes         | -       | -   | -     | -      |
| NVDA                | -       | n/a | -     | -      |
| Zoom (Leopard)      | pass    | n/a | pass  | pass   |
| ZoomText            | -       | -   | -     | -      |
| Orca                | -       | -   | -     | -      |

#### Live roles: Log + Timer

1. [Illinois Log and Timer example](http://test.cita.uiuc.edu/aria/live/live1.php)
2. [CLC Chat](https://codetalks.org/source/live/chat.html)

    \-- see the

    [accompanying notes](https://codetalks.org/source/live/chat_notes.html)

3. [Chatzilla](https://addons.mozilla.org/en-US/firefox/addon/16)

    (this is a real app but uses ARIA in an HTML area for chat)

**Expected AT Behavior:**

- (AL) A screen reader should announce changes inside a log as if they are marked with aria-live="polite", unless the author overrides that with a specific aria-live property on an ancestor of the node that changes.
- (AL) A screen reader should not announce any changes within a timer unless the author overrides that with a specific aria-live property on an ancestor of the change.

**Markup used:**

- role="log", "timer"
- aria-relevant="additions removals text" (for Chatzilla buddy list)

**Notes:**

**Results:**

| AT                  | Firefox | IE  | Opera | Safari |
| ------------------- | ------- | --- | ----- | ------ |
| JAWS 9              | -       | -   | n/a   | n/a    |
| JAWS 10             | -       | -   | -     | -      |
| VoiceOver (Leopard) | n/a     | n/a | -     | fail   |
| Window-Eyes         | -       | -   | -     | -      |
| NVDA                | -       | n/a | -     | -      |
| Zoom (Leopard)      | pass    | n/a | pass  | pass   |
| ZoomText            | -       | -   | -     | -      |
| Orca                | -       | -   | -     | -      |

#### Live role: Marquee

(no examples yet)

**Expected AT Behavior:**

- (AL) A screen reader should not announce any changes within a marquee unless the author overrides that with a specific aria-live property on an ancestor of the change.

**Markup used:**

- role="marquee"

**Notes:**

**Results:**

| AT                  | Firefox | IE  | Opera | Safari |
| ------------------- | ------- | --- | ----- | ------ |
| JAWS 9              | -       | -   | n/a   | n/a    |
| JAWS 10             | -       | -   | -     | -      |
| VoiceOver (Leopard) | n/a     | n/a | -     | fail   |
| Window-Eyes         | -       | -   | -     | -      |
| NVDA                | -       | n/a | -     | -      |
| Zoom (Leopard)      | pass    | n/a | pass  | pass   |
| ZoomText            | -       | -   | -     | -      |
| Orca                | -       | -   | -     | -      |

#### Live role: Status

(no examples yet)

**Expected AT Behavior:**

- Screen readers often provide a special key to announce the current status. This key should present the contents of any "status" region.
- (AL) A screen reader should announce changes inside a status as if they are marked with aria-live="polite", unless the author overrides that with a specific aria-live property on an ancestor of the node that changes.
- (AL) Strongly preferred, but not currently required: screen readers should read the status when any hotkey associated with status reading is pressed. The known keys are as follows:

  - JAWS: Insert+PageDown
  - Window-Eyes: Ctrl+Shift+Insert
  - System Access To Go: Modifier+PageDown

**Markup used:**

- role="status"

**Notes:**

**Results:**

| AT                  | Firefox | IE  | Opera | Safari |
| ------------------- | ------- | --- | ----- | ------ |
| JAWS 9              | -       | -   | n/a   | n/a    |
| JAWS 10             | -       | -   | -     | -      |
| VoiceOver (Leopard) | n/a     | n/a | -     | fail   |
| Window-Eyes         | -       | -   | -     | -      |
| NVDA                | -       | n/a | -     | -      |
| Zoom (Leopard)      | pass    | n/a | pass  | pass   |
| ZoomText            | -       | -   | -     | -      |
| Orca                | -       | -   | -     | -      |

#### Live HTML table

1. [Live game scores](http://accessibleajax.clcworld.net/scoreboard/scoreboard.htm)

**Expected AT Behavior:**

- A screen reader should read changes within the table as well as provide sufficient contextual clues (row and column header info) so that the user can determine what the changes actually mean.

**Markup used:**

- \<table>
- aria-live="polite"

**Notes:**

[Scoreboard notes](http://accessibleajax.clcworld.net/scoreboard/scoreboard_notes.html)

**Results:**

| AT                  | Firefox | IE  | Opera | Safari |
| ------------------- | ------- | --- | ----- | ------ |
| JAWS 9              | -       | -   | n/a   | n/a    |
| JAWS 10             | -       | -   | -     | -      |
| VoiceOver (Leopard) | n/a     | n/a | -     | fail   |
| Window-Eyes         | -       | -   | -     | -      |
| NVDA                | -       | n/a | -     | -      |
| Zoom (Leopard)      | pass    | n/a | pass  | pass   |
| ZoomText            | -       | -   | -     | -      |
| Orca                | -       | -   | -     | -      |

## Property-Only Test Cases

These test cases involve ARIA properties used to enhance HTML controls (as opposed to JavaScript-built widgets).

### autocomplete

1. [Dojo autocomplete](https://archive.dojotoolkit.org/nightly/dojotoolkit/dijit/tests/form/_autoComplete.html)

**Expected AT Behavior:**

- Screen reader should announce the fact that this is a control supporting autocomplete. When suggestions appear, if the AT supports it elsewhere in the operating system (e. g. the Run dialog), suggestions should be supported inside the web app as well.
- Screen magnifiers should indicate AutoCompletes as they do elsewhere in the operating system.
- Optional: for each character typed, screen readers may choose to indicate how many options are remaining in the autocomplete list (if that number has changed). Alternatively, screen readers could make a sound when there is only 1 autocomplete option remaining.

**Markup used:**

- aria-autocomplete

**Notes:**

**Results:**

| AT                  | Firefox                                                                                                                                                                                   | IE   | Opera | Safari |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- | ----- | ------ |
| JAWS 9              | Fail                                                                                                                                                                                      | Fail | n/a   | n/a    |
| JAWS 10             | Fail - Does not announce the presence of AutoComplete possibilities, does not do this anywhere in Windows. Reads autocomplete suggestions through its ordinary highlight color mechanism. | Fail | -     | -      |
| VoiceOver (Leopard) | n/a                                                                                                                                                                                       | n/a  | -     | fail   |
| Window-Eyes         | Fail                                                                                                                                                                                      | Fail | -     | -      |
| NVDA                | Pass                                                                                                                                                                                      | n/a  | -     | -      |
| Zoom (Leopard)      | pass                                                                                                                                                                                      | n/a  | pass  | pass   |
| ZoomText            | -                                                                                                                                                                                         | -    | -     | -      |
| Orca                | -                                                                                                                                                                                         | -    | -     | -      |

### describedby

1. [aria-describedby](https://codetalks.org/source/enhanced-html-forms/describedby.html)
2. [aria-describedby with display: none](https://codetalks.org/source/enhanced-html-forms/describedby-display-none.html)
3. [aria-describedby with visibility: hidden](https://codetalks.org/source/enhanced-html-forms/describedby-hidden.html)
4. [aria-describedby on img's with role="button"](https://codetalks.org/source/enhanced-html-forms/img-description.html)

**Expected AT Behavior:**

- When the textfield is focused, this description should be spoken after the label "Minutes": "Allows you to specify the number of minutes of inactivity after which your computer should shut down." (AL) The describedby text should be spoken whether it is hidden or not.
- (AL) Alternatively, the description could be accessible from a hotkey. However, if the screen reader does not at least indicate that the description exists, users are likely to miss important information.
- **JAWS -**

  - If described by is used on a fieldset (group box), JAWS speaks the description when focus is placed on a control within the group box for the first time.
  - If described by is used on a control, JAWS displays the description when the user presses JAWSKey+F1.

**Markup used:**

- aria-describedby

**Notes:**

**Results:**

| AT                  | Firefox | IE  | Opera | Safari |
| ------------------- | ------- | --- | ----- | ------ |
| JAWS 9              | -       | -   | n/a   | n/a    |
| JAWS 10             | -       | -   | -     | -      |
| VoiceOver (Leopard) | n/a     | n/a | -     | fail   |
| Window-Eyes         | -       | -   | -     | -      |
| NVDA                | -       | n/a | -     | -      |
| Zoom (Leopard)      | pass    | n/a | pass  | pass   |
| ZoomText            | -       | -   | -     | -      |
| Orca                | -       | -   | -     | -      |

### label

1. [aria-label](https://codetalks.org/source/enhanced-html-forms/label.html)

**Expected AT Behavior:**

- Screen reader should prefer aria-label information above anything else, including screen text or aria-labelledby.

**Markup used:**

- aria-label="My something-or-other"

**Notes:**

- If the screen reader uses the accessible name property it should get the correct text to speak, even if several methods (aria-label, aria-labelledby, alt, label for, descendant text, title, etc.) are used.

**Results:**

| AT                  | Firefox | IE  | Opera | Safari |
| ------------------- | ------- | --- | ----- | ------ |
| JAWS 9              | -       | -   | n/a   | n/a    |
| JAWS 10             | -       | -   | -     | -      |
| VoiceOver (Leopard) | n/a     | n/a | -     | fail   |
| Window-Eyes         | -       | -   | -     | -      |
| NVDA                | Fail    | n/a | -     | -      |
| Zoom (Leopard)      | pass    | n/a | pass  | pass   |
| ZoomText            | -       | -   | -     | -      |
| Orca                | -       | -   | -     | -      |

### labelledby

1. [aria-labelledby](https://codetalks.org/source/enhanced-html-forms/labelledby.html)

**Expected AT Behavior:**

- Screen reader should prefer this information over screen text or other attributes, excluding aria-label, which supersedes even this one.

**Markup used:**

- aria-labelledby

**Notes:**

- If the screen reader uses the accessible name property it should get the correct text to speak, even if several methods (aria-label, aria-labelledby, alt, label for, descendant text, title, etc.) are used.

**Results:**

| AT                  | Firefox | IE  | Opera | Safari |
| ------------------- | ------- | --- | ----- | ------ |
| JAWS 9              | -       | -   | n/a   | n/a    |
| JAWS 10             | -       | -   | -     | -      |
| VoiceOver (Leopard) | n/a     | n/a | -     | fail   |
| Window-Eyes         | -       | -   | -     | -      |
| NVDA                | -       | n/a | -     | -      |
| Zoom (Leopard)      | pass    | n/a | pass  | pass   |
| ZoomText            | -       | -   | -     | -      |
| Orca                | -       | -   | -     | -      |

### required

1. [aria-required="true"](https://codetalks.org/source/enhanced-html-forms/required.html)

**Expected AT Behavior:**

- Screen reader should give an indication (speech, sound, Braille, etc.) that this field is required to be filled.

**Markup used:**

- aria-required="true"

**Notes:**

**Results:**

| AT                  | Firefox | IE  | Opera | Safari |
| ------------------- | ------- | --- | ----- | ------ |
| JAWS 9              | -       | -   | n/a   | n/a    |
| JAWS 10             | -       | -   | -     | -      |
| VoiceOver (Leopard) | n/a     | n/a | -     | fail   |
| Window-Eyes         | -       | -   | -     | -      |
| NVDA                | -       | n/a | -     | -      |
| Zoom (Leopard)      | pass    | n/a | pass  | pass   |
| ZoomText            | -       | -   | -     | -      |
| Orca                | -       | -   | -     | -      |
