---
title: Key values for keyboard events
slug: Web/API/UI_Events/Keyboard_event_key_values
page-type: guide
---

{{DefaultAPISidebar("UI Events")}}

The tables below list the standard values for the [`KeyboardEvent.key`](/en-US/docs/Web/API/KeyboardEvent/key) property, with an explanation of what the key is typically used for. Corresponding virtual keycodes for common platforms are included where available.

## Special values

Values of `key` which have special meanings other than identifying a specific key or character.

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Value</th>
      <th rowspan="2" scope="col">Description</th>
      <th colspan="4" scope="col">Virtual Keycode</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"Unidentified"</code></td>
      <td>
        <p>
          The user agent wasn't able to map the event's virtual keycode to a
          specific key value.
        </p>
        <p>
          This can happen due to hardware or software constraints, or because of
          constraints around the platform on which the user agent is running.
        </p>
      </td>
      <td><em>varies</em></td>
      <td><em>varies</em></td>
      <td><em>varies</em></td>
      <td><em>varies</em></td>
    </tr>
  </tbody>
</table>

## Modifier keys

_Modifiers_ are special keys which are used to generate special characters or cause special actions when used in combination with other keys. Examples include the <kbd>Shift</kbd> and <kbd>Control</kbd> keys, and lock keys such as <kbd>Caps Lock</kbd> and <kbd>NumLock</kbd>.

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Value</th>
      <th rowspan="2" scope="col">Description</th>
      <th colspan="4" scope="col">Virtual Keycode</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"Alt"</code> [4]</td>
      <td>The <kbd>Alt</kbd> (Alternative) key.</td>
      <td>
        <code>VK_MENU</code> (0x12)<br /><code>VK_LMENU</code> (0xA4)<br /><code
          >VK_RMENU</code
        >
        (0xA5)
      </td>
      <td>
        <code>kVK_Option</code> (0x3A)<br /><code>kVK_RightOption</code> (0x3D)
      </td>
      <td>
        <code>GDK_KEY_Alt_L</code> (0xFFE9)<br /><code>GDK_KEY_Alt_R</code>
        (0xFFEA)<br /><code>Qt::Key_Alt</code> (0x01000023)
      </td>
      <td>
        <code>KEYCODE_ALT_LEFT</code> (57)<br /><code>KEYCODE_ALT_RIGHT</code>
        (58)
      </td>
    </tr>
    <tr>
      <td><code>"AltGraph"</code> [4]</td>
      <td>
        The <kbd>AltGr</kbd> or <kbd>AltGraph</kbd> (Alternate Graphics) key.
        Enables the ISO Level 3 shift modifier (where <kbd>Shift</kbd> is the
        level 2 modifier).
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Mode_switch</code> (0xFF7E)<br /><code
          >GDK_KEY_ISO_Level3_Shift</code
        >
        (0xFE03)<br /><code>GDK_KEY_ISO_Level3_Latch</code> (0xFE04)<br /><code
          >GDK_KEY_ISO_Level3_Lock</code
        >
        (0xFE05)<br /><code>GDK_KEY_ISO_Level5_Shift</code> (0xFE11)<br /><code
          >GDK_KEY_ISO_Level5_Latch</code
        >
        (0xFE12)<br /><code>GDK_KEY_ISO_Level5_Lock</code> (0xFE13)<br /><code
          >Qt::Key_AltGr</code
        >
        (0x01001103<br /><code>Qt::Key_Mode_switch</code> (0x0100117E)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"CapsLock"</code></td>
      <td>
        The <kbd>Caps Lock</kbd> key. Toggles the capital character lock on and
        off for subsequent input.
      </td>
      <td><code>VK_CAPITAL</code> (0x14)</td>
      <td><code>kVK_CapsLock</code> (0x39)</td>
      <td>
        <code>GDK_KEY_Caps_Lock</code> (0xFFE5)<br /><code
          >Qt::Key_CapsLock</code
        >
        (0x01000024)
      </td>
      <td><code>KEYCODE_CAPS_LOCK</code> (115)</td>
    </tr>
    <tr>
      <td><code>"Control"</code></td>
      <td>
        The <kbd>Control</kbd>, <kbd>Ctrl</kbd>, or <kbd>Ctl</kbd> key. Allows
        typing control characters.
      </td>
      <td>
        <code>VK_CONTROL</code> (0x11)<br /><code>VK_LCONTROL</code>
        (0xA2)<br /><code>VK_RCONTROL</code> (0xA3)
      </td>
      <td>
        <code>kVK_Control</code> (0x3B)<br /><code>kVK_RightControl</code>
        (0x3E)
      </td>
      <td>
        <code>GDK_KEY_Control_L</code> (0xFFE3)<br /><code
          >GDK_KEY_Control_R</code
        >
        (0xFFE4)<br /><code>Qt::Key_Control</code> (0x01000021)
      </td>
      <td>
        <code>KEYCODE_CTRL_LEFT</code> (113)<br /><code
          >KEYCODE_CTRL_RIGHT</code
        >
        (114)
      </td>
    </tr>
    <tr>
      <td><code>"Fn"</code></td>
      <td>
        The <kbd>Fn</kbd> (Function modifier) key. Used to allow generating
        function key (<kbd>F1</kbd>–<kbd>F15</kbd>, for instance) characters on
        keyboards without a dedicated function key area. Often handled in
        hardware so that events aren't generated for this key.
      </td>
      <td></td>
      <td><code>kVK_Function</code> (0x3F)</td>
      <td></td>
      <td><code>KEYCODE_FUNCTION</code> (119)</td>
    </tr>
    <tr>
      <td><code>"FnLock"</code></td>
      <td>
        The <kbd>FnLock</kbd> or <kbd>F-Lock</kbd> (Function Lock) key.Toggles
        the function key mode described by <code>"Fn"</code> on and off. Often
        handled in hardware so that events aren't generated for this key.
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Hyper"</code> [3]</td>
      <td>The <kbd>Hyper</kbd> key.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Hyper_L</code> (0xFFED)<br /><code>GDK_KEY_Hyper_R</code>
        (0xFFEE)<br /><code>Qt::Key_Hyper_L</code> (0x01000056)<br /><code
          >Qt::Key_Hyper_R</code
        >
        (0x01000057)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Meta"</code> [1]</td>
      <td>
        The <kbd>Meta</kbd> key. Allows issuing special command inputs. This is
        the <kbd>Windows</kbd> logo key, or the <kbd>Command</kbd> or
        <kbd>⌘</kbd> key on Mac keyboards.
      </td>
      <td><code>VK_LWIN</code> (0x5B)<br /><code>VK_RWIN</code> (0x5C)</td>
      <td>
        <code>kVK_Command</code> (0x37)<br /><code>kVK_RightCommand</code>
        (0x36)
      </td>
      <td>
        <code>GDK_KEY_Meta_L</code> (0xFFE7)<br /><code>GDK_KEY_Meta_R</code>
        (0xFFE8)<br /><code>Qt::Key_Meta</code> (0x01000022)
      </td>
      <td>
        <code>KEYCODE_META_LEFT</code> (117)<br /><code
          >KEYCODE_META_RIGHT</code
        >
        (118)
      </td>
    </tr>
    <tr>
      <td><code>"NumLock"</code></td>
      <td>
        The <kbd>NumLock</kbd> (Number Lock) key. Toggles the numeric keypad
        between number entry some other mode (often directional arrows).
      </td>
      <td><code>VK_NUMLOCK</code> (0x90)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Num_Lock</code> (0xFF7F)<br /><code>Qt::Key_NumLock</code>
        (0x01000025)
      </td>
      <td><code>KEYCODE_NUM_LOCK</code> (143)</td>
    </tr>
    <tr>
      <td><code>"ScrollLock"</code> [2]</td>
      <td>
        The <kbd>Scroll Lock</kbd> key. Toggles between scrolling and cursor
        movement modes.
      </td>
      <td><code>VK_SCROLL</code> (0x91)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Scroll_Lock</code> (0xFF14)<br /><code
          >Qt::Key_ScrollLock</code
        >
        (0x01000026)
      </td>
      <td><code>KEYCODE_SCROLL_LOCK</code> (116)</td>
    </tr>
    <tr>
      <td><code>"Shift"</code></td>
      <td>
        The <kbd>Shift</kbd> key. Modifies keystrokes to allow typing upper (or
        other) case letters, and to support typing punctuation and other special
        characters.
      </td>
      <td>
        <code>VK_SHIFT</code> (0x10)<br /><code>VK_LSHIFT</code>
        (0xA0)<br /><code>VK_RSHIFT</code> (0xA1)
      </td>
      <td>
        <code>kVK_Shift</code> (0x38)<br /><code>kVK_RightShift</code> (0x3C)
      </td>
      <td>
        <code>GDK_KEY_Shift_L</code> (0xFFE1)<br /><code>GDK_KEY_Shift_R</code>
        (0xFFE2)<br /><code>Qt::Key_Shift</code> (0x01000020)
      </td>
      <td>
        <code>KEYCODE_SHIFT_LEFT</code> (59)<br /><code
          >KEYCODE_SHIFT_RIGHT</code
        >
        (60)
      </td>
    </tr>
    <tr>
      <td><code>"Super"</code> [3]</td>
      <td>The <kbd>Super</kbd> key.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Super_L</code> (0xFFEB)<br /><code>GDK_KEY_Super_R</code>
        (0xFFEC)<br /><code>Qt::Key_Super_L</code> (0x01000053)<br /><code
          >Qt::Key_Super_R</code
        >
        (0x01000054)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Symbol"</code></td>
      <td>
        The <kbd>Symbol</kbd> modifier key (found on certain virtual keyboards).
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_SYM</code> (63) [2]</td>
    </tr>
    <tr>
      <td><code>"SymbolLock"</code></td>
      <td>The <kbd>Symbol Lock</kbd> key.</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

\[1] In Firefox, the <kbd>Windows</kbd> key is reported as `"OS"` instead of as `"Meta"`. This will be changed in Firefox per [Firefox bug 1232918](https://bugzil.la/1232918). Until that's fixed, these keys are returned as `"OS"` by Firefox: `VK_LWIN` (0x5B) and `VK_RWIN` (0x5C) on Windows, and `GDK_KEY_Super_L` (0xFFEB), `GDK_KEY_Super_R` (0xFFEC), `GDK_KEY_Hyper_L` (0xFFED), and `GDK_KEY_Hyper_R` (0xFFEE) on Linux.

\[2] Firefox did not add support for the <kbd>Symbol</kbd> key until Firefox 37.

\[3] Firefox generates the key value `"OS"` for the <kbd>Super</kbd> and <kbd>Hyper</kbd> keys, instead of `"Super"` and `"Hyper"`.

\[4] Chrome 67 and Firefox 63 now correctly interpret the right <kbd>Alt</kbd> key for keyboard layouts which map that key to <kbd>AltGr</kbd>. See Firefox bug [Firefox bug 900750](https://bugzil.la/900750) and [Chrome bug 25503](https://crbug.com/25503) for further details.

## Whitespace keys

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Value</th>
      <th rowspan="2" scope="col">Description</th>
      <th colspan="4" scope="col">Virtual Keycode</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"Enter"</code></td>
      <td>
        The <kbd>Enter</kbd> or <kbd>↵</kbd> key (sometimes labeled
        <kbd>Return</kbd>).
      </td>
      <td><code>VK_RETURN</code> (0x0D)</td>
      <td>
        <code>kVK_Return</code> (0x24)<br /><code>kVK_ANSI_KeypadEnter</code>
        (0x4C)<br /><code>kVK_Powerbook_KeypadEnter</code> (0x34)
      </td>
      <td>
        <code>GDK_KEY_Return</code> (0xFF0D)<br /><code>GDK_KEY_KP_Enter</code>
        (0xFF8D)<br /><code>GDK_KEY_ISO_Enter</code> (0xFE34)<br /><code
          >GDK_KEY_3270_Enter</code
        >
        (0xFD1E)<br /><code>Qt::Key_Return</code> (0x01000004)<br /><code
          >Qt::Key_Enter</code
        >
        (0x01000005)
      </td>
      <td>
        <code>KEYCODE_ENTER</code> (66)<br /><code>KEYCODE_NUMPAD_ENTER</code>
        (160)<br /><code>KEYCODE_DPAD_CENTER</code> (23)
      </td>
    </tr>
    <tr>
      <td><code>"Tab"</code></td>
      <td>The Horizontal Tab key, <kbd>Tab</kbd>.</td>
      <td><code>VK_TAB</code> (0x09)</td>
      <td><code>kVK_Tab</code> (0x30)</td>
      <td>
        <code>GDK_KEY_Tab</code> (0xFF09)<br /><code>GDK_KEY_KP_Tab</code>
        (0xFF89)<br /><code>GDK_KEY_ISO_Left_Tab</code> (0xFE20)<br /><code
          >Qt::Key_Tab</code
        >
        (0x01000001)
      </td>
      <td><code>KEYCODE_TAB</code> (61)</td>
    </tr>
    <tr>
      <td><code>" "</code> [1]</td>
      <td>The space key, <kbd>Space Bar</kbd>.</td>
      <td><code>VK_SPACE</code> (0x20)</td>
      <td><code>kVK_Space</code> (0x31)</td>
      <td>
        <p>
          <code>GDK_KEY_space</code> (0x20)<br /><code>GDK_KEY_KP_Space</code>
          (0xFF80)<br /><code>Qt::Key_Space</code> (0x20)
        </p>
      </td>
      <td><code>KEYCODE_SPACE</code> (62)</td>
    </tr>
  </tbody>
</table>

\[1] Older browsers may return `"Spacebar"` instead of `" "` for the <kbd>Space Bar</kbd> key. Firefox did so until version 37.

## Navigation keys

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Value</th>
      <th rowspan="2" scope="col">Description</th>
      <th colspan="4" scope="col">Virtual Keycode</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"ArrowDown"</code> [1]</td>
      <td>The down arrow key.</td>
      <td><code>VK_DOWN</code> (0x28)</td>
      <td><code>kVK_DownArrow</code> (0x7D)</td>
      <td>
        <code>GDK_KEY_Down</code> (0xFF54)<br /><code>GDK_KEY_KP_Down</code>
        (0xFF99)<br /><code>Qt::Key_Down</code> (0x01000015)
      </td>
      <td><code>KEYCODE_DPAD_DOWN</code> (20)</td>
    </tr>
    <tr>
      <td><code>"ArrowLeft"</code> [1]</td>
      <td>The left arrow key.</td>
      <td><code>VK_LEFT</code> (0x25)</td>
      <td><code>kVK_LeftArrow</code> (0x7B)</td>
      <td>
        <code>GDK_KEY_Left</code> (0xFF51)<br /><code>GDK_KEY_KP_Left</code>
        (0xFF96)<br /><code>Qt::Key_Left</code> (0x01000012)
      </td>
      <td><code>KEYCODE_DPAD_LEFT</code> (21)</td>
    </tr>
    <tr>
      <td><code>"ArrowRight"</code> [1]</td>
      <td>The right arrow key.</td>
      <td><code>VK_RIGHT</code> (0x27)</td>
      <td><code>kVK_RightArrow</code> (0x7C)</td>
      <td>
        <code>GDK_KEY_Right</code> (0xFF53)<br /><code>GDK_KEY_KP_Right</code>
        (0xFF98)<br /><code>Qt::Key_Right</code> (0x01000014)
      </td>
      <td><code>KEYCODE_DPAD_RIGHT</code> (22)</td>
    </tr>
    <tr>
      <td><code>"ArrowUp"</code> [1]</td>
      <td>The up arrow key.</td>
      <td><code>VK_UP</code> (0x26)</td>
      <td><code>kVK_UpArrow</code> (0x7E)</td>
      <td>
        <code>GDK_KEY_Up</code> (0xFF52)<br /><code>GDK_KEY_KP_Up</code>
        (0xFF97)<br /><code>Qt::Key_Up</code> (0x01000013)
      </td>
      <td><code>KEYCODE_DPAD_UP</code> (19)</td>
    </tr>
    <tr>
      <td><code>"End"</code></td>
      <td>The <kbd>End</kbd> key. Moves to the end of content.</td>
      <td><code>VK_END</code> (0x23)</td>
      <td><code>kVK_End</code> (0x77)</td>
      <td>
        <code>GDK_KEY_End</code> (0xFF57)<br /><code>GDK_KEY_KP_End</code>
        (0xFF9C)<br /><code>Qt::Key_End</code> (0x01000011)
      </td>
      <td><code>KEYCODE_MOVE_END</code> (123)</td>
    </tr>
    <tr>
      <td><code>"Home"</code></td>
      <td>The <kbd>Home</kbd> key. Moves to the start of content.</td>
      <td><code>VK_HOME</code> (0x24)</td>
      <td><code>kVK_Home</code> (0x73)</td>
      <td>
        <code>GDK_KEY_Home</code> (0xFF50)<br /><code>GDK_KEY_KP_Home</code>
        (0xFF95)<br /><code>Qt::Key_Home</code> (0x01000010)
      </td>
      <td><code>KEYCODE_MOVE_HOME</code> (122)</td>
    </tr>
    <tr>
      <td><code>"PageDown"</code></td>
      <td>
        The <kbd>Page Down</kbd> (or <kbd>PgDn</kbd>) key. Scrolls down or
        displays the next page of content.
      </td>
      <td><code>VK_NEXT</code> (0x22)</td>
      <td><code>kVK_PageDown</code> (0x79)</td>
      <td>
        <code>GDK_KEY_Page_Down</code> (0xFF56)<br /><code
          >GDK_KEY_KP_Page_Down</code
        >
        (0xFF9B)<br /><code>Qt::Key_PageDown</code> (0x01000017)
      </td>
      <td><code>KEYCODE_PAGE_DOWN</code> (93)</td>
    </tr>
    <tr>
      <td><code>"PageUp"</code></td>
      <td>
        The <kbd>Page Up</kbd> (or <kbd>PgUp</kbd>) key. Scrolls up or displays
        the previous page of content.
      </td>
      <td><code>VK_PRIOR</code> (0x21)</td>
      <td><code>kVK_PageUp</code> (0x74)</td>
      <td>
        <code>GDK_KEY_Page_Up</code> (0xFF55)<br /><code
          >GDK_KEY_KP_Page_Up</code
        >
        (0xFF9A)<br /><code>Qt::Key_PageUp</code> (0x01000016)
      </td>
      <td><code>KEYCODE_PAGE_UP</code> (92)</td>
    </tr>
  </tbody>
</table>

\[1] Edge (16 and earlier) and Firefox (36 and earlier) use `"Left"`, `"Right"`, `"Up"`, and `"Down"` instead of `"ArrowLeft"`, `"ArrowRight"`, `"ArrowUp"`, and `"ArrowDown"`.

## Editing keys

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Value</th>
      <th rowspan="2" scope="col">Description</th>
      <th colspan="4" scope="col">Virtual Keycode</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"Backspace"</code></td>
      <td>
        The <kbd>Backspace</kbd> key. This key is labeled <kbd>Delete</kbd> on
        Mac keyboards.
      </td>
      <td><code>VK_BACK</code> (0x08)</td>
      <td><code>kVK_Delete</code> (0x33)</td>
      <td>
        <code>GDK_KEY_BackSpace</code> (0xFF08)<br /><code
          >Qt::Key_Backspace</code
        >
        (0x01000003)
      </td>
      <td><code>KEYCODE_DEL</code> (67)</td>
    </tr>
    <tr>
      <td><code>"Clear"</code></td>
      <td>The <kbd>Clear</kbd> key. Removes the currently selected input.</td>
      <td>
        <code>VK_CLEAR</code> (0x0C)<br /><code>VK_OEM_CLEAR</code> (0xFE)
      </td>
      <td><code>kVK_ANSI_KeypadClear</code> (0x47)</td>
      <td>
        <code>GDK_KEY_Clear</code> (0xFF0B)<br /><code>Qt::Key_Clear</code>
        (0x0100000B)
      </td>
      <td><code>KEYCODE_CLEAR</code> (28)</td>
    </tr>
    <tr>
      <td><code>"Copy"</code></td>
      <td>The <kbd>Copy</kbd> key (on certain extended keyboards).</td>
      <td><code>APPCOMMAND_COPY</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_Copy</code> (0x1008FF57)<br /><code>Qt::Key_Copy</code>
        (0x010000CF)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"CrSel"</code> [3]</td>
      <td>The Cursor Select key, <kbd>CrSel</kbd>.</td>
      <td><code>VK_CRSEL</code> (0xF7)</td>
      <td></td>
      <td><code>GDK_KEY_3270_CursorSelect</code> (0xFD1C)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Cut"</code></td>
      <td>The <kbd>Cut</kbd> key (on certain extended keyboards).</td>
      <td><code>APPCOMMAND_CUT</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_Cut</code> (0x1008FF58)<br /><code>Qt::Key_Cut</code>
        (0x010000D0)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Delete"</code> [2]</td>
      <td>The Delete key, <kbd>Del</kbd>.</td>
      <td><code>VK_DELETE</code> (0x2E)</td>
      <td><code>kVK_ForwardDelete</code> (0x75) [1]</td>
      <td>
        <code>GDK_KEY_Delete</code> (0xFFFF)<br /><code>GDK_KEY_KP_Delete</code>
        (0xFF9F)<br /><code>Qt::Key_Delete</code> (0x01000007)
      </td>
      <td><code>KEYCODE_FORWARD_DEL</code> (112)</td>
    </tr>
    <tr>
      <td><code>"EraseEof"</code></td>
      <td>
        Erase to End of Field. Deletes all characters from the current cursor
        position to the end of the current field.
      </td>
      <td><code>VK_EREOF</code> (0xF9)</td>
      <td></td>
      <td><code>GDK_KEY_3270_ExSelect</code> (0xFD1B)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"ExSel"</code> [4]</td>
      <td>The <kbd>ExSel</kbd> (Extend Selection) key.</td>
      <td><code>VK_EXSEL</code> (0xF8)</td>
      <td></td>
      <td><code>GDK_KEY_3270_ExSelect</code> (0xFD1B)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Insert"</code></td>
      <td>
        The Insert key, <kbd>Ins</kbd>. Toggles between inserting and
        overwriting text.
      </td>
      <td><code>VK_INSERT</code> (0x2D)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Insert</code> (0xFF63)<br /><code>GDK_KEY_KP_Insert</code>
        (0xFF9E)<br /><code>Qt::Key_Insert</code> (0x01000006)
      </td>
      <td><code>KEYCODE_INSERT</code> (124)</td>
    </tr>
    <tr>
      <td><code>"Paste"</code></td>
      <td>Paste from the clipboard.</td>
      <td><code>APPCOMMAND_PASTE</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_Paste</code> (0x1008FF6D)<br /><code>Qt::Key_Paste</code>
        (0x010000E2)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Redo"</code></td>
      <td>Redo the last action.</td>
      <td><code>APPCOMMAND_REDO</code></td>
      <td></td>
      <td><code>GDK_KEY_Redo</code> (0xFF66)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Undo"</code></td>
      <td>Undo the last action.</td>
      <td><code>APPCOMMAND_UNDO</code></td>
      <td></td>
      <td><code>GDK_KEY_Undo</code> (0xFF65)</td>
      <td></td>
    </tr>
  </tbody>
</table>

\[1] On keyboards without a dedicated <kbd>Del</kbd> key, the Mac generates the `"Delete"` value when <kbd>Fn</kbd> is pressed in tandem with <kbd>Delete</kbd> (which is <kbd>Backspace</kbd> on other platforms).

\[2] Firefox 36 and earlier uses `"Del"` instead of `"Delete"` for the <kbd>Del</kbd> key.

\[3] Firefox 36 and earlier generates the value `"Crsel"` instead of `"CrSel"` when the <kbd>CrSel</kbd> key is pressed.

\[4] Firefox 36 and earlier generates the value `"Exsel"` instead of `"ExSel"` when the <kbd>ExSel</kbd> key is pressed.

## UI keys

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Value</th>
      <th rowspan="2" scope="col">Description</th>
      <th colspan="4" scope="col">Virtual Keycode</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"Accept"</code></td>
      <td>
        The <kbd>Accept</kbd>, <kbd>Commit</kbd>, or <kbd>OK</kbd> key or
        button. Accepts the currently selected option or input method sequence
        conversion.
      </td>
      <td><code>VK_ACCEPT</code> (0x1E)</td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_DPAD_CENTER</code> (23)</td>
    </tr>
    <tr>
      <td><code>"Again"</code></td>
      <td>The <kbd>Again</kbd> key. Redoes or repeats a previous action.</td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_Redo</code> (0xFF66)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Attn"</code> [4]</td>
      <td>The <kbd>Attn</kbd> (Attention) key.</td>
      <td><code>VK_OEM_ATTN</code> (0xF0)</td>
      <td></td>
      <td><code>GDK_KEY_3270_Attn</code> (0xFD0E)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Cancel"</code> [1]</td>
      <td>The <kbd>Cancel</kbd> key.</td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_Cancel</code> (0xFF69)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"ContextMenu"</code> [3]</td>
      <td>
        Shows the context menu. Typically found between the
        <kbd>Windows</kbd> (or <kbd>OS</kbd>) key and the <kbd>Control</kbd> key
        on the right side of the keyboard.
      </td>
      <td><code>VK_APPS</code> (0x5D)</td>
      <td><code>kVK_PC_ContextMenu</code> (0x6E)</td>
      <td>
        <code>GDK_KEY_Menu</code> (0xFF67)<br /><code>Qt::Key_Menu</code>
        (0x01000055)
      </td>
      <td><code>KEYCODE_MENU</code> (82)</td>
    </tr>
    <tr>
      <td><code>"Escape"</code> [2]</td>
      <td>
        The <kbd>Esc</kbd> (Escape) key. Typically used as an exit, cancel, or
        "escape this operation" button. Historically, the Escape character was
        used to signal the start of a special control sequence of characters
        called an "escape sequence."
      </td>
      <td><code>VK_ESCAPE</code> (0x1B)</td>
      <td><code>kVK_Escape</code> (0x35)</td>
      <td>
        <code>GDK_KEY_Escape</code> (0xFF1B)<br /><code>Qt::Key_Escape</code>
        (0x01000000)
      </td>
      <td><code>KEYCODE_ESCAPE</code> (111)</td>
    </tr>
    <tr>
      <td><code>"Execute"</code></td>
      <td>The <kbd>Execute</kbd> key.</td>
      <td><code>VK_EXECUTE</code> (0x2B)</td>
      <td></td>
      <td><code>Qt::Key_Execute</code> (0x01020003)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Find"</code></td>
      <td>
        The <kbd>Find</kbd> key. Opens an interface (typically a dialog box) for
        performing a find/search operation.
      </td>
      <td><code>APPCOMMAND_FIND</code></td>
      <td></td>
      <td><code>GDK_KEY_Find</code> (0xFF68)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Finish"</code> [5]</td>
      <td>The <kbd>Finish</kbd> key.</td>
      <td><code>VK_OEM_FINISH</code> (0xF1)</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Help"</code></td>
      <td>
        The <kbd>Help</kbd> key. Opens or toggles the display of help
        information.
      </td>
      <td><code>VK_HELP</code> (0x2F)<br /><code>APPCOMMAND_HELP</code></td>
      <td><code>kVK_Help</code> (0x72)</td>
      <td>
        <code>GDK_KEY_Help</code> (0xFF6A)<br /><code>Qt::Key_Help</code>
        (0x01000058)
      </td>
      <td><code>KEYCODE_HELP</code> (259)</td>
    </tr>
    <tr>
      <td><code>"Pause"</code></td>
      <td>
        The <kbd>Pause</kbd> key. Pauses the current application or state, if
        applicable.
        <div class="note">
          <p>
            <strong>Note:</strong> This shouldn't be confused with the
            <code>"MediaPause"</code> key value, which is used for media
            controllers, rather than to control applications and processes.
          </p>
        </div>
      </td>
      <td><code>VK_PAUSE</code> (0x13)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Pause</code> (0xFF13)<br /><code>GDK_KEY_Break</code>
        (0xFF6B)<br /><code>Qt::Key_Pause</code> (0x01000008)
      </td>
      <td><code>KEYCODE_BREAK</code> (121)</td>
    </tr>
    <tr>
      <td><code>"Play"</code></td>
      <td>
        The <kbd>Play</kbd> key. Resumes a previously paused application, if
        applicable.
        <div class="note">
          <p>
            <strong>Note:</strong> This shouldn't be confused with the
            <code>"MediaPlay"</code> key value, which is used for media
            controllers, rather than to control applications and processes.
          </p>
        </div>
      </td>
      <td><code>VK_PLAY</code> (0xFA)</td>
      <td></td>
      <td>
        <code>GDK_KEY_3270_Play</code> (0xFD16)<br /><code>Qt::Key_Play</code>
        (0x01020005)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Props"</code></td>
      <td>The <kbd>Props</kbd> (Properties) key.</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Select"</code></td>
      <td>The <kbd>Select</kbd> key.</td>
      <td><code>VK_SELECT</code> (0x29)</td>
      <td></td>
      <td><code>GDK_KEY_Select</code> (0xFF60)</td>
      <td><code>KEYCODE_BUTTON_SELECT</code> (109)</td>
    </tr>
    <tr>
      <td><code>"ZoomIn"</code> [6]</td>
      <td>The <kbd>ZoomIn</kbd> key.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_ZoomIn</code> (0x1008FF8B)<br /><code
          >Qt::Key_ZoomIn</code
        >
        (0x010000F6)
      </td>
      <td><code>KEYCODE_ZOOM_IN</code> (168)</td>
    </tr>
    <tr>
      <td><code>"ZoomOut"</code> [6]</td>
      <td>The <kbd>ZoomOut</kbd> key.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_ZoomOut</code> (0x1008FF8C)<br /><code
          >Qt::Key_ZoomOut</code
        >
        (0x010000F7)
      </td>
      <td><code>KEYCODE_ZOOM_OUT</code> (169)</td>
    </tr>
  </tbody>
</table>

\[1] In Google Chrome 52, the <kbd>Cancel</kbd> key incorrectly returns the key code `"Pause"`. This is fixed in Chrome 53. (See [Chrome bug 612749](https://crbug.com/612749) for details.)

\[2] In Firefox 36 and earlier, the <kbd>Esc</kbd> key returns `"Esc"` instead of `"Escape"`.

\[3] Firefox 36 and earlier reports `"Apps"` instead of `"ContextMenu"` for the context menu key.

\[4] The <kbd>Attn</kbd> key generates the key code `"Unidentified"` on Firefox and Google Chrome, unless the Japanese keyboard layout is in effect, in which case it generates `"KanaMode"` instead.

\[5] The <kbd>Finish</kbd> key generates the key code `"Unidentified"` on Firefox, unless the Japanese keyboard layout is in effect, in which case it generates `"Katakana"` instead.

\[6] Firefox didn't support the `"ZoomIn"` and `"ZoomOut"` keys until Firefox 37.

## Device keys

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Value</th>
      <th rowspan="2" scope="col">Description</th>
      <th colspan="4" scope="col">Virtual Keycode</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"BrightnessDown"</code></td>
      <td>
        The Brightness Down key. Typically used to reduce the brightness of the
        display.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_MonBrightnessDown</code> (0x1008FF03)<br /><code
          >Qt::Key_MonBrightnessDown</code
        >
        (0x010000B3)
      </td>
      <td><code>KEYCODE_BRIGHTNESS_DOWN</code> (220)</td>
    </tr>
    <tr>
      <td><code>"BrightnessUp"</code></td>
      <td>
        The Brightness Up key. Typically increases the brightness of the
        display.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_MonBrightnessUp</code> (0x1008FF02)<br /><code
          >Qt::Key_MonBrightnessUp</code
        >
        (0x010000B2)
      </td>
      <td><code>KEYCODE_BRIGHTNESS_UP</code> (221)</td>
    </tr>
    <tr>
      <td><code>"Eject"</code></td>
      <td>
        The <kbd>Eject</kbd> key. Ejects removable media (or toggles an optical
        storage device tray open and closed).
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Eject</code> (0x1008FF2C)<br /><code>Qt::Key_Eject</code>
        (0x010000B9)
      </td>
      <td><code>KEYCODE_MEDIA_EJECT</code> (129)</td>
    </tr>
    <tr>
      <td><code>"LogOff"</code> [2]</td>
      <td>The <kbd>LogOff</kbd> key.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_LogOff</code> (0x1008FF61)<br /><code
          >Qt::Key_LogOff</code
        >
        (0x010000D9)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Power"</code></td>
      <td>
        The <kbd>Power</kbd> button or key, to toggle power on and off.
        <div class="note">
          <p>
            <strong>Note:</strong> Not all systems pass this key through to the
            user agent.
          </p>
        </div>
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_POWER</code> (26)</td>
    </tr>
    <tr>
      <td><code>"PowerOff"</code></td>
      <td>
        The <kbd>PowerOff</kbd> or <kbd>PowerDown</kbd> key. Shuts off the
        system.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_PowerDown</code> (0x1008FF21)<br /><code
          >GDK_KEY_PowerOff</code
        >
        (0x1008FF2A)<br /><code>Qt::Key_PowerDown</code> (0x0100010B)<br /><code
          >Qt::Key_PowerOff</code
        >
        (0x010000B7)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"PrintScreen"</code></td>
      <td>
        The <kbd>PrintScreen</kbd> or <kbd>PrtScr</kbd> key. Sometimes
        <kbd>SnapShot</kbd>. Captures the screen and prints it or saves it to
        disk.
      </td>
      <td><code>VK_SNAPSHOT</code> (0x2C)</td>
      <td></td>
      <td>
        <code>GDK_KEY_3270_PrintScreen</code> (0xFD1D)<br /><code
          >GDK_KEY_Print</code
        >
        (0xFF61)<br /><code>GDK_KEY_Sys_Req</code> (0xFF15)<br /><code
          >Qt::Key_Print</code
        >
        (0x01000009)<br /><code>Qt::Key_SysReq</code> (0x0100000A)
      </td>
      <td><code>KEYCODE_SYSRQ</code> (120)</td>
    </tr>
    <tr>
      <td><code>"Hibernate"</code> [2]</td>
      <td>
        The <kbd>Hibernate</kbd> key. This saves the state of the computer to
        disk and then shuts down; the computer can be returned to its previous
        state by restoring the saved state information.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Hibernate</code> (0x1008FFA8)<br /><code
          >Qt::Key_Hibernate</code
        >
        (0x01000108)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Standby"</code> [1]</td>
      <td>
        The <kbd>Standby</kbd> key. (Also known as <kbd>Suspend</kbd> or
        <kbd>Sleep</kbd>.) This turns off the display and puts the computer in a
        low power consumption mode, without completely powering off.
      </td>
      <td><code>VK_SLEEP</code> (0x5F)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Standby</code> (0x1008FF10)<br /><code
          >GDK_KEY_Suspend</code
        >
        (0x1008FFA7)<br /><code>GDK_KEY_Sleep</code> (0x1008FF2F)<br /><code
          >Qt::Key_Standby</code
        >
        (0x01000093)<br /><code>Qt::Key_Suspend</code> (0x0100010C)<br /><code
          >Qt::Key_Sleep</code
        >
        (0x01020004)
      </td>
      <td><code>KEYCODE_SLEEP</code> (223)</td>
    </tr>
    <tr>
      <td><code>"WakeUp"</code> [2]</td>
      <td>
        The <kbd>WakeUp</kbd> key. Used to wake the computer from the
        hibernation or standby modes.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_WakeUp</code> (0x1008FF2B)<br /><code
          >Qt::Key_WakeUp</code
        >
        (0x010000B8)
      </td>
      <td><code>KEYCODE_WAKEUP</code> (224)</td>
    </tr>
  </tbody>
</table>

\[1] The <kbd>Standby</kbd> key is not supported by Firefox 36 and earlier, so it is reported as `"Unidentified"`.

\[2] Prior to Firefox 37, this key generated the value `"Unidentified"`.

## IME and composition keys

Keys used when using an {{glossary("Input Method Editor")}} (IME) to input text which can't readily be entered by simple keypresses, such as text in languages such as those which have more graphemes than there are character entry keys on the keyboard. Common examples include Chinese, Japanese, Korean, and Hindi.

Some keys are common across multiple languages, while others exist only on keyboards targeting specific languages. In addition, not all keyboards have all of these keys.

### Common IME keys

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Value</th>
      <th rowspan="2" scope="col">Description</th>
      <th colspan="4" scope="col">Virtual Keycode</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"AllCandidates"</code></td>
      <td>
        The <kbd>All Candidates</kbd> key, which starts multi-candidate mode, in
        which multiple candidates are displayed for the ongoing input.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_MultipleCandidate</code> (0xFF3D<br /><code
          >Qt::Key_MultipleCandidate</code
        >
        (0x0100113D)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Alphanumeric"</code></td>
      <td>The <kbd>Alphanumeric</kbd> key.</td>
      <td><code>VK_OEM_ATTN</code> (0xF0)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Eisu_Shift</code> (0xFF2F)<br /><code
          >GDK_KEY_Eisu_toggle</code
        >
        (0xFF30)<br /><code>Qt::Key_Eisu_Shift</code> (0x0100112f)<br /><code
          >Qt::Key_Eisu_toggle</code
        >
        (0x01001130)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"CodeInput"</code></td>
      <td>
        The <kbd>Code Input</kbd> key, which enables code input mode, which lets
        the user enter characters by typing their code points (their Unicode
        character numbers, typically).
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Codeinput</code> (0xFF37)<br /><code
          >Qt::Key_Codeinput</code
        >
        (0x01001137)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Compose"</code></td>
      <td>The <kbd>Compose</kbd> key.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Multi_key</code> (0xFF20) [1]<br /><code
          >Qt::Key_Multi_key</code
        >
        (0x01001120)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Convert"</code> [4]</td>
      <td>
        The <kbd>Convert</kbd> key, which instructs the IME to convert the
        current input method sequence into the resulting character.
      </td>
      <td><code>VK_CONVERT</code> (0x1C)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Henkan</code> (0xFF23)<br /><code>Qt::Key_Henkan</code>
        (0x01001123)
      </td>
      <td><code>KEYCODE_HENKAN</code> (214)</td>
    </tr>
    <tr>
      <td><code>"Dead"</code></td>
      <td>
        <p>
          A dead "combining" key; that is, a key which is used in tandem with
          other keys to generate accented and other modified characters. If
          pressed by itself, it doesn't generate a character.
        </p>
        <p>
          If you wish to identify which specific dead key was pressed (in cases
          where more than one exists), you can do so by examining the
          {{domxref("KeyboardEvent")}}'s associated
          {{domxref("Element/compositionupdate_event", "compositionupdate")}} event's
          {{domxref("CompositionEvent.data", "data")}} property.
        </p>
      </td>
      <td></td>
      <td></td>
      <td>See <a href="#dead_keycodes_for_linux">Dead keycodes for Linux</a> below</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FinalMode"</code></td>
      <td>
        The <kbd>Final</kbd> (Final Mode) key is used on some Asian keyboards to
        enter final mode when using IMEs.
      </td>
      <td><code>VK_FINAL</code> (0x18)</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"GroupFirst"</code></td>
      <td>
        Switches to the first character group on an
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_9995"
          >ISO/IEC 9995 keyboard</a
        >. Each key may have multiple groups of characters, each in its own
        column. Pressing this key instructs the device to interpret keypresses
        as coming from the first column on subsequent keystrokes.
      </td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_ISO_First_Group</code> (0xFE0C)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"GroupLast"</code></td>
      <td>
        Switches to the last character group on an
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_9995"
          >ISO/IEC 9995 keyboard</a
        >.
      </td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_ISO_Last_Group</code> (0xFE0E)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"GroupNext"</code> [4]</td>
      <td>
        Switches to the next character group on an
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_9995"
          >ISO/IEC 9995 keyboard</a
        >.
      </td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_ISO_Next_Group</code> (0xFE08)</td>
      <td><code>KEYCODE_LANGUAGE_SWITCH</code> (204)</td>
    </tr>
    <tr>
      <td><code>"GroupPrevious"</code></td>
      <td>
        Switches to the previous character group on an
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_9995"
          >ISO/IEC 9995 keyboard</a
        >.
      </td>
      <td></td>
      <td></td>
      <td><code>GDK_KEY_ISO_Prev_Group</code> (0xFE0A)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"ModeChange"</code> [5]</td>
      <td>The Mode Change key. Toggles or cycles among input modes of IMEs.</td>
      <td><code>VK_MODECHANGE</code> (0x1F)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Mode_switch</code> (0xFF7E)<br /><code
          >GDK_KEY_script_switch</code
        >
        (0xFF7E)<br /><code>Qt::Key_Mode_switch</code> (0x0100117E)
      </td>
      <td><code>KEYCODE_SWITCH_CHARSET</code> (95)</td>
    </tr>
    <tr>
      <td><code>"NextCandidate"</code></td>
      <td>
        The Next Candidate function key. Selects the next possible match for the
        ongoing input.
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"NonConvert"</code> [2]</td>
      <td>
        The <kbd>NonConvert</kbd> ("Don't convert") key. This accepts the
        current input method sequence without running conversion when using an
        IME.
      </td>
      <td><code>VK_NONCONVERT</code> (0x1D)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Muhenkan</code> (0xFF22)<br /><code
          >Qt::Key_Muhenkan</code
        >
        (0x01001122)<br />
      </td>
      <td><code>KEYCODE_MUHENKAN</code> (213)</td>
    </tr>
    <tr>
      <td><code>"PreviousCandidate"</code></td>
      <td>
        The Previous Candidate key. Selects the previous possible match for the
        ongoing input.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_PreviousCandidate</code> (0xFF3E)<br /><code
          >Qt::Key_PreviousCandidate</code
        >
        (0x0100113E)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Process"</code> [3]</td>
      <td>
        The <kbd>Process</kbd> key. Instructs the IME to process the conversion.
      </td>
      <td><code>VK_PROCESSKEY</code> (0xE5)</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"SingleCandidate"</code> [4]</td>
      <td>
        The Single Candidate key. Enables single candidate mode (as opposed to
        multi-candidate mode); in this mode, only one candidate is displayed at
        a time.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_SingleCandidate</code> (0xFF3C)<br /><code
          >Qt::Key_SingleCandidate</code
        >
        (0x0100113C)
      </td>
      <td></td>
    </tr>
  </tbody>
</table>

\[1] On the _X Window System_, the <kbd>Compose</kbd> key is called the <kbd>Multi</kbd> key.

<!-- cSpell:ignore Nonconvert -->

\[2] The <kbd>NonConvert</kbd> key is reported as `"Nonconvert"` instead of the correct `"NonConvert"` by Firefox versions 36 and earlier.

\[3] The <kbd>Process</kbd> key currently returns `"Unidentified"` in Firefox. Google Chrome returns the value of the key as if IME were not in use.

\[4] Prior to Firefox 37, these keys were `"Unidentified"`.

\[5] Firefox generates the key value `"AltGraph"` instead of `"ModeChange"`.

### Korean keyboards only

These keys are only available on Korean keyboards. There are other keys defined by various platforms for Korean keyboards, but these are the most common and are the ones identified by the UI Events specification.

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Value</th>
      <th rowspan="2" scope="col">Description</th>
      <th colspan="4" scope="col">Virtual Keycode</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"HangulMode"</code></td>
      <td>
        The <kbd>Hangul</kbd> (Korean character set) mode key, which toggles
        between Hangul and English entry modes.
      </td>
      <td><code>VK_HANGUL</code> (0x15) [1]</td>
      <td></td>
      <td>
        <code>GDK_KEY_Hangul</code> (0xFF31)<br /><code>Qt::Key_Hangul</code>
        (0x01001131)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"HanjaMode"</code></td>
      <td>
        Selects the Hanja mode, for converting Hangul characters to the more
        specific Hanja characters.
      </td>
      <td><code>VK_HANJA</code> (0x19) [1]</td>
      <td></td>
      <td>
        <code>GDK_KEY_Hangul_Hanja</code> (0xFF34)<br /><code
          >Qt::Key_Hangul_Hanja</code
        >
        (0x01001134)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"JunjaMode"</code></td>
      <td>
        Selects the Junja mode, in which Korean is represented using single-byte
        Latin characters.
      </td>
      <td><code>VK_JUNJA</code> (0x17)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Hangul_Jeonja</code> (0xFF38)<br /><code
          >Qt::Key_Hangul_Jeonja</code
        >
        (0x01001138)
      </td>
      <td></td>
    </tr>
  </tbody>
</table>

\[1] `VK_HANGUL` and `VK_KANA` share the same numeric key value on Windows, as do `VK_HANJA` and `VK_KANJI`.

### Japanese keyboards only

These keys are only available on Japanese keyboards.

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Value</th>
      <th rowspan="2" scope="col">Description</th>
      <th colspan="4" scope="col">Virtual Keycode</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"Eisu"</code> [1]</td>
      <td>
        The <kbd>Eisu</kbd> key. This key's purpose is defined by the IME, but
        may be used to close the IME.
      </td>
      <td></td>
      <td><code>kVK_JIS_Eisu</code> (0x66)</td>
      <td>
        <code>GDK_KEY_Eisu_toggle</code> (0xFF2F)<br /><code
          >Qt::Key_Eisu_toggle</code
        >
        (0x01001130)
      </td>
      <td><code>KEYCODE_EISU</code> (212)</td>
    </tr>
    <tr>
      <td><code>"Hankaku"</code> [3]</td>
      <td>The <kbd>Hankaku</kbd> (half-width characters) key.</td>
      <td><code>VK_OEM_AUTO</code> (0xF3)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Hankaku</code> (0xFF29)<br /><code>Qt::Key_Hankaku</code>
        (0x01001129)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Hiragana"</code></td>
      <td>The <kbd>Hiragana</kbd> key; selects Kana characters mode.</td>
      <td><code>VK_OEM_COPY</code> (0xF2)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Hiragana</code> (0xFF25)<br /><code
          >Qt::Key_Hiragana</code
        >
        (0x01001125)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"HiraganaKatakana"</code> [6]</td>
      <td>Toggles between the Hiragana and Katakana writing systems.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Hiragana_Katakana</code> (0xFF27)<br /><code
          >Qt::Key_Hiragana_Katakana</code
        >
        (0x01001127)
      </td>
      <td><code>KEYCODE_KATAKANA_HIRAGANA</code> (215)</td>
    </tr>
    <tr>
      <td><code>"KanaMode"</code></td>
      <td>The <kbd>Kana Mode</kbd> (Kana Lock) key.</td>
      <td><code>VK_KANA</code> (0x15) [2]<br /><code>VK_ATTN</code> (0xF6)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Kana_Lock</code> (0xFF2D)<br /><code
          >GDK_KEY_Kana_Shift</code
        >
        (0xFF2E)<br /><code>Qt::Key_Kana_Lock</code> (0x0100112D)<br /><code
          >Qt::Key_Kana_Shift</code
        >
        (0x0100112E)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"KanjiMode"</code></td>
      <td>
        The <kbd>Kanji Mode</kbd> key. Enables entering Japanese text using the
        ideographic characters of Chinese origin.
      </td>
      <td><code>VK_KANJI</code> [2]</td>
      <td><code>kVK_JIS_Kana</code> (0x68)</td>
      <td>
        <code>GDK_KEY_Kanji</code> (0xFF21)<br /><code>Qt::Key_Kanji</code>
        (0x01001121)
      </td>
      <td><code>KEYCODE_KANA</code> (218)</td>
    </tr>
    <tr>
      <td><code>"Katakana"</code></td>
      <td>The <kbd>Katakana</kbd> key.</td>
      <td><code>VK_OEM_FINISH</code> (0xF1)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Katakana</code> (0xFF26)<br /><code
          >Qt::Key_Katakana</code
        >
        (0x01001126)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Romaji"</code> [5]</td>
      <td>The <kbd>Romaji</kbd> key; selects the Roman character set.</td>
      <td><code>VK_OEM_BACKTAB</code> (0xF5)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Romaji</code> (0xFF24)<br /><code>Qt::Key_Romaji</code>
        (0x01001124)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Zenkaku"</code> [4]</td>
      <td>The <kbd>Zenkaku</kbd> (full width) characters key.</td>
      <td><code>VK_OEM_ENLW</code> (0xF4)</td>
      <td></td>
      <td>
        <code>GDK_KEY_Zenkaku</code> (0xFF28)<br /><code>Qt::Key_Zenkaku</code>
        (0x01001128)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"ZenkakuHankaku"</code> [6]</td>
      <td>
        The <kbd>Zenkaku/Hankaku</kbd> (full width/half width) toggle key.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Zenkaku_Hankaku</code> (0xFF2A)<br /><code
          >Qt::Zenkaku_Hankaku</code
        >
        (0x0100112A)
      </td>
      <td>
        <p><code>KEYCODE_ZENKAKU_HANKAKU</code> (211)</p>
      </td>
    </tr>
  </tbody>
</table>

\[1] Prior to Firefox 37, the <kbd>Eisu</kbd> key was mapped to `"RomanCharacters"` by mistake.

\[2] `VK_HANGUL` and `VK_KANA` share the same numeric key value on Windows, as do `VK_HANJA` and `VK_KANJI`.

\[3] Prior to Firefox 37, the <kbd>Hankaku</kbd> (half-width) key generated the key value `"HalfWidth"` on Firefox.

\[4] Firefox 36 and earlier identifies this key as `"FullWidth"` on Japanese keyboard layouts and `"Unidentified"` on all other keyboard layouts. Firefox 37 and later, and all versions of Google Chrome, correctly return `"Zenkaku"`.

\[5] Firefox 36 and earlier identifies the <kbd>Romaji</kbd> key as `"RomanCharacters"` on Japanese keyboards and `"Unidentified"` for other keyboards; this is corrected to return `"Romaji"` in Firefox 37 and later.

\[6] This key is reported as `"Unidentified"` prior to Firefox 37.

### Dead keycodes for Linux

Linux generates accented characters using special **dead keys**. _Dead keys_ are keys which are pressed in combination with character keys to generate accented forms of those characters. You can identify which specific dead key was used (if more than one exists) by examining the {{domxref("KeyboardEvent")}}'s associated {{domxref("Element/compositionupdate_event", "compositionupdate")}} event's {{domxref("CompositionEvent.data", "data")}} property.

You can find a table of the dead keys and the characters they can be used with to generate accented or otherwise special characters on Linux using GTK.

The value of {{domxref("CompositionEvent.data", "data")}} will be one of the following:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">
        <strong><code>CompositionEvent.data</code></strong> value
      </th>
      <th scope="col">Symbol</th>
      <th scope="col">Comments</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>GDK_KEY_dead_grave</code> (0xFE50)<br /><code
          >Qt::Key_Dead_Grave</code
        >
        (0x01001250)
      </td>
      <td>`</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_acute</code> (0xFE51)<br /><code
          >Qt::Key_Dead_Acute</code
        >
        (0x01001251)
      </td>
      <td>´</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_circumflex</code> (0xFE52)<br /><code
          >Qt::Key_Dead_Circumflex</code
        >
        (0x01001252)
      </td>
      <td>ˆ</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_tilde</code> (0xFE53)<br /><code
          >Qt::Key_Dead_Tilde</code
        >
        (0x01001253)
      </td>
      <td>˜</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_perispomeni</code> (0xFE53)</td>
      <td> ͂</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_macron</code> (0xFE54)<br /><code
          >Qt::Key_Dead_Macron</code
        >
        (0x01001254)
      </td>
      <td>¯</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_breve</code> (0xFE55)<br /><code
          >Qt::Key_Dead_Breve</code
        >
        (0x01001255)
      </td>
      <td>˘</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_abovedot</code> (0xFE56)<br /><code
          >Qt::Key_Dead_Abovedot</code
        >
        (0x01001256)
      </td>
      <td>˙</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_diaeresis</code> (0xFE57)<br /><code
          >Qt::Key_Dead_Diaeresis</code
        >
        (0x01001257)
      </td>
      <td>¨</td>
      <td>Also called an umlaut.</td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_abovering</code> (0xFE58)<br /><code
          >Qt::Key_Dead_Abovering</code
        >
        (0x01001258)
      </td>
      <td>˚</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_doubleacute</code> (0xFE59)<br /><code
          >Qt::Key_Dead_Doubleacute</code
        >
        (0x01001259)
      </td>
      <td>˝</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_caron</code> (0xFE5A)<br /><code
          >Qt::Key_Dead_Caron</code
        >
        (0x0100125A)
      </td>
      <td>ˇ</td>
      <td>Also called a háček; used in Czech among other languages.</td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_cedilla</code> (0xFE5B)<br /><code
          >Qt::Key_Dead_Cedilla</code
        >
        (0x0100125B)
      </td>
      <td>¸</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_ogonek</code> (0xFE5C)<br /><code
          >Qt::Key_Dead_Ogonek</code
        >
        (0x0100125C)
      </td>
      <td>˛</td>
      <td>Also called a nosinė; used in Polish and Old Irish.</td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_iota</code> (0xFE5D)<br /><code
          >Qt::Key_Dead_Iota</code
        >
        (0x0100125D)
      </td>
      <td> ͅ</td>
      <td>Iota subscript.</td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_voiced_sound</code> (0xFE5E)<br /><code
          >Qt::Key_Dead_Voiced_Sound</code
        >
        (0x0100125E)
      </td>
      <td>゙</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_semivoiced_sound</code> (0xFE5F)<br /><code
          >Qt::Key_Dead_Semivoiced_Sound</code
        >
        (0x0100125F)
      </td>
      <td>゚</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_belowdot</code> (0xFE60)<br /><code
          >Qt::Key_Dead_Belowdot</code
        >
        (0x01001260)
      </td>
      <td>̣̣</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_hook</code> (0xFE61)<br /><code
          >Qt::Key_Dead_Hook</code
        >
        (0x01001261)
      </td>
      <td>  ̡</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>GDK_KEY_dead_horn</code> (0xFE62)<br /><code
          >Qt::Key_Dead_Horn</code
        >
        (0x01001262)
      </td>
      <td> ̛</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_stroke</code> (0xFE63)</td>
      <td> ̶̶</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_abovecomma</code> (0xFE64)</td>
      <td> ̓̓</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_psili</code> (0xFE64)</td>
      <td> ᾿</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_abovereversedcomma</code> (0xFE65)</td>
      <td>ʽ</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_dasia</code> (0xFE65)</td>
      <td>῾</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_doublegrave</code> (0xFE66)</td>
      <td> ̏</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_belowring</code> (0xFE67)</td>
      <td>˳</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_belowmacron</code> (0xFE68)</td>
      <td> ̱</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_belowcircumflex</code> (0xFE69)</td>
      <td>ꞈ</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_belowtilde</code> (0xFE6A)</td>
      <td>̰</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_belowbreve</code> (0xFE6B)</td>
      <td>̮</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_belowdiaeresis</code> (0xFE6C)</td>
      <td> ̤</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_invertedbreve</code> (0xFE6D)</td>
      <td>̯</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_belowcomma</code> (0xFE6E)</td>
      <td>̦</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_currency</code> (0xFE6F)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_a</code> (0xFE80)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_A</code> (0xFE81)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_e</code> (0xFE82)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_E</code> (0xFE83)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_i</code> (0xFE84)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_I</code> (0xFE85)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_o</code> (0xFE86)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_O</code> (0xFE87)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_u</code> (0xFE88)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_U</code> (0xFE89)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_small_schwa</code> (0xFE8A)</td>
      <td>ə</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_capital_schwa</code> (0xFE8B)</td>
      <td>Ə</td>
      <td></td>
    </tr>
    <tr>
      <td><code>GDK_KEY_dead_greek</code> (0xFE8C)</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

## Function keys

While various platforms support different numbers of the general-purpose function keys, such as <kbd>F1</kbd>–<kbd>F12</kbd> (or <kbd>F1</kbd>–<kbd>F10</kbd>, or <kbd>F1</kbd>–<kbd>F15</kbd>, etc.), the first few are specifically defined as follows.

If more function keys are available, their names continue the pattern here by continuing to increment the numeric portion of each key's name, so that, for example, `"F24"` is a valid key value.

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> value</th>
      <th rowspan="2" scope="col">Description</th>
      <th colspan="4" scope="col">Virtual Keycode</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"F1"</code></td>
      <td>The first general-purpose function key, <kbd>F1</kbd>.</td>
      <td><code>VK_F1</code> (0x70)</td>
      <td><code>kVK_F1</code> (0x7A)</td>
      <td>
        <code>GDK_KEY_F1</code> (0xFFBE)<br /><code>GDK_KEY_KP_F1</code>
        (0xFF91)<br /><code>Qt::Key_F1</code> (0x01000030)
      </td>
      <td><code>KEYCODE_F1</code> (131)</td>
    </tr>
    <tr>
      <td><code>"F2"</code></td>
      <td>The <kbd>F2</kbd> key.</td>
      <td><code>VK_F2</code> (0x71)</td>
      <td><code>kVK_F2</code> (0x78)</td>
      <td>
        <code>GDK_KEY_F2</code> (0xFFBF)<br /><code>GDK_KEY_KP_F2</code>
        (0xFF92)<br /><code>Qt::Key_F2</code> (0x01000031)
      </td>
      <td><code>KEYCODE_F2</code> (132)</td>
    </tr>
    <tr>
      <td><code>"F3"</code></td>
      <td>The <kbd>F3</kbd> key.</td>
      <td><code>VK_F3</code> (0x72)</td>
      <td><code>kVK_F3</code> (0x63)</td>
      <td>
        <code>GDK_KEY_F3</code> (0xFFC0)<br /><code>GDK_KEY_KP_F3</code>
        (0xFF93)<br /><code>Qt::Key_F3</code> (0x01000032)
      </td>
      <td><code>KEYCODE_F3</code> (133)</td>
    </tr>
    <tr>
      <td><code>"F4"</code></td>
      <td>The <kbd>F4</kbd> key.</td>
      <td><code>VK_F4</code> (0x73)</td>
      <td><code>kVK_F4</code> (0x76)</td>
      <td>
        <code>GDK_KEY_F4</code> (0xFFC1)<br /><code>GDK_KEY_KP_F4</code>
        (0xFF94)<br /><code>Qt::Key_F4</code> (0x01000033)
      </td>
      <td><code>KEYCODE_F4</code> (134)</td>
    </tr>
    <tr>
      <td><code>"F5"</code></td>
      <td>The <kbd>F5</kbd> key.</td>
      <td><code>VK_F5</code> (0x74)</td>
      <td><code>kVK_F5</code> (0x60)</td>
      <td>
        <code>GDK_KEY_F5</code> (0xFFC2)<br /><code>Qt::Key_F5</code>
        (0x01000034)
      </td>
      <td><code>KEYCODE_F5</code> (135)</td>
    </tr>
    <tr>
      <td><code>"F6"</code></td>
      <td>The <kbd>F6</kbd> key.</td>
      <td><code>VK_F6</code> (0x75)</td>
      <td><code>kVK_F6</code> (0x61)</td>
      <td>
        <code>GDK_KEY_F6</code> (0xFFC3)<br /><code>Qt::Key_F6</code>
        (0x01000035)
      </td>
      <td><code>KEYCODE_F6</code> (136)</td>
    </tr>
    <tr>
      <td><code>"F7"</code></td>
      <td>The <kbd>F7</kbd> key.</td>
      <td><code>VK_F7</code> (0x76)</td>
      <td><code>kVK_F7</code> (0x62)</td>
      <td>
        <code>GDK_KEY_F7</code> (0xFFC4)<br /><code>Qt::Key_F7</code>
        (0x01000036)
      </td>
      <td><code>KEYCODE_F7</code> (137)</td>
    </tr>
    <tr>
      <td><code>"F8"</code></td>
      <td>The <kbd>F8</kbd> key.</td>
      <td><code>VK_F8</code> (0x77)</td>
      <td><code>kVK_F8</code> (0x64)</td>
      <td>
        <code>GDK_KEY_F8</code> (0xFFC5)<br /><code>Qt::Key_F8</code>
        (0x01000037)
      </td>
      <td><code>KEYCODE_F8</code> (138)</td>
    </tr>
    <tr>
      <td><code>"F9"</code></td>
      <td>The <kbd>F9</kbd> key.</td>
      <td><code>VK_F9</code> (0x78)</td>
      <td><code>kVK_F9</code> (0x65)</td>
      <td>
        <code>GDK_KEY_F9</code> (0xFFC6)<br /><code>Qt::Key_F9</code>
        (0x01000038)
      </td>
      <td><code>KEYCODE_F9</code> (139)</td>
    </tr>
    <tr>
      <td><code>"F10"</code></td>
      <td>The <kbd>F10</kbd> key.</td>
      <td><code>VK_F10</code> (0x79)</td>
      <td><code>kVK_F10</code> (0x6D)</td>
      <td>
        <code>GDK_KEY_F10</code> (0xFFC7)<br /><code>Qt::Key_F10</code>
        (0x01000039)
      </td>
      <td><code>KEYCODE_F10</code> (140)</td>
    </tr>
    <tr>
      <td><code>"F11"</code></td>
      <td>The <kbd>F11</kbd> key.</td>
      <td><code>VK_F11</code> (0x7A)</td>
      <td><code>kVK_F11</code> (0x67)</td>
      <td>
        <code>GDK_KEY_F11</code> (0xFFC8)<br /><code>Qt::Key_F11</code>
        (0x0100003A)
      </td>
      <td><code>KEYCODE_F11</code> (141)</td>
    </tr>
    <tr>
      <td><code>"F12"</code></td>
      <td>The <kbd>F12</kbd> key.</td>
      <td><code>VK_F12</code> (0x7B)</td>
      <td><code>kVK_F12</code> (0x6F)</td>
      <td>
        <code>GDK_KEY_F12</code> (0xFFC9)<br /><code>Qt::Key_F12</code>
        (0x0100003B)
      </td>
      <td><code>KEYCODE_F12</code> (142)</td>
    </tr>
    <tr>
      <td><code>"F13"</code></td>
      <td>The <kbd>F13</kbd> key.</td>
      <td><code>VK_F13</code> (0x7C)</td>
      <td><code>kVK_F13</code> (0x69)</td>
      <td>
        <code>GDK_KEY_F13</code> (0xFFCA)<br /><code>Qt::Key_F13</code>
        (0x0100003C)
      </td>
      <td><code>KEYCODE_F13</code></td>
    </tr>
    <tr>
      <td><code>"F14"</code></td>
      <td>The <kbd>F14</kbd> key.</td>
      <td><code>VK_F14</code> (0x7D)</td>
      <td><code>kVK_F14</code> (0x6B)</td>
      <td>
        <code>GDK_KEY_F14</code> (0xFFCB)<br /><code>Qt::Key_F14</code>
        (0x0100003D)
      </td>
      <td><code>KEYCODE_F14</code></td>
    </tr>
    <tr>
      <td><code>"F15"</code></td>
      <td>The <kbd>F15</kbd> key.</td>
      <td><code>VK_F15</code> (0x7E)</td>
      <td><code>kVK_F15</code> (0x71)</td>
      <td>
        <code>GDK_KEY_F15</code> (0xFFCC)<br /><code>Qt::Key_F15</code>
        (0x0100003E)
      </td>
      <td><code>KEYCODE_F15</code></td>
    </tr>
    <tr>
      <td><code>"F16"</code></td>
      <td>The <kbd>F16</kbd> key.</td>
      <td><code>VK_F16</code> (0x7F)</td>
      <td><code>kVK_F16</code> (0x6A)</td>
      <td>
        <code>GDK_KEY_F16</code> (0xFFCD)<br /><code>Qt::Key_F16</code>
        (0x0100003F)
      </td>
      <td><code>KEYCODE_F16</code></td>
    </tr>
    <tr>
      <td><code>"F17"</code></td>
      <td>The <kbd>F17</kbd> key.</td>
      <td><code>VK_F17</code> (0x80)</td>
      <td><code>kVK_F17</code> (0x40)</td>
      <td>
        <code>GDK_KEY_F17</code> (0xFFCE)<br /><code>Qt::Key_F17</code>
        (0x01000040)
      </td>
      <td><code>KEYCODE_F17</code></td>
    </tr>
    <tr>
      <td><code>"F18"</code></td>
      <td>The <kbd>F18</kbd> key.</td>
      <td><code>VK_F18</code> (0x81)</td>
      <td><code>kVK_F18</code> (0x4F)</td>
      <td>
        <code>GDK_KEY_F18</code> (0xFFCF)<br /><code>Qt::Key_F18</code>
        (0x01000041)
      </td>
      <td><code>KEYCODE_F18</code></td>
    </tr>
    <tr>
      <td><code>"F19"</code></td>
      <td>The <kbd>F19</kbd> key.</td>
      <td><code>VK_F19</code> (0x82)</td>
      <td><code>kVK_F19</code> (0x50)</td>
      <td>
        <code>GDK_KEY_F19</code> (0xFFD0)<br /><code>Qt::Key_F19</code>
        (0x01000042)
      </td>
      <td><code>KEYCODE_F19</code></td>
    </tr>
    <tr>
      <td><code>"F20"</code></td>
      <td>The <kbd>F20</kbd> key.</td>
      <td><code>VK_F20</code> (0x83)</td>
      <td><code>kVK_F20</code> (0x5A)</td>
      <td>
        <code>GDK_KEY_F20</code> (0xFFD1)<br /><code>Qt::Key_F20</code>
        (0x01000043)
      </td>
      <td><code>KEYCODE_F20</code></td>
    </tr>
    <tr>
      <td><code>"Soft1"</code></td>
      <td>The first general-purpose virtual function key.</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_Context1</code> (0x01100000)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Soft2"</code></td>
      <td>The second general-purpose virtual function key.</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_Context2</code> (0x01100001)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Soft3"</code></td>
      <td>The third general-purpose virtual function key.</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_Context3</code> (0x01100002)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Soft4"</code></td>
      <td>The fourth general-purpose virtual function key.</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_Context4</code> (0x01100003)</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Phone keys

These keys represent buttons which commonly exist on modern smartphones.

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Value</th>
      <th rowspan="2" scope="col">Description</th>
      <th colspan="4" scope="col">Virtual Keycode</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"AppSwitch"</code></td>
      <td>
        Presents a list of recently-used applications which lets the user change
        apps quickly.
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_APP_SWITCH</code> (181)</td>
    </tr>
    <tr>
      <td><code>"Call"</code></td>
      <td>The <kbd>Call</kbd> key. Dials the number which has been entered.</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_Call</code> (0x01100004)</td>
      <td><code>KEYCODE_CALL</code> (5)</td>
    </tr>
    <tr>
      <td><code>"Camera"</code></td>
      <td>The <kbd>Camera</kbd> key. Activates the camera.</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_Camera</code> (0x01100020)</td>
      <td><code>KEYCODE_CAMERA</code> (27)</td>
    </tr>
    <tr>
      <td><code>"CameraFocus"</code></td>
      <td>The <kbd>Focus</kbd> key. Focuses the camera.</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_CameraFocus</code> (0x01100021)</td>
      <td><code>KEYCODE_FOCUS</code> (80)</td>
    </tr>
    <tr>
      <td><code>"EndCall"</code></td>
      <td>The <kbd>End Call</kbd> or <kbd>Hang Up</kbd> button.</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_Hangup</code> (0x01100005)</td>
      <td><code>KEYCODE_ENDCALL</code> (6)</td>
    </tr>
    <tr>
      <td><code>"GoBack"</code></td>
      <td>The <kbd>Back</kbd> button.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_BACK</code> (4)</td>
    </tr>
    <tr>
      <td><code>"GoHome"</code> [1]</td>
      <td>
        The <kbd>Home</kbd> button. Returns the user to the phone's main screen
        (usually an application launcher).
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_HOME</code> (3)</td>
    </tr>
    <tr>
      <td><code>"HeadsetHook"</code></td>
      <td>
        The <kbd>Headset Hook</kbd> key. This is typically actually a button on
        the headset which is used to hang up calls and play or pause media.
      </td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_ToggleCallHangup</code> (0x01100007)</td>
      <td><code>KEYCODE_HEADSETHOOK</code> (79)</td>
    </tr>
    <tr>
      <td><code>"LastNumberRedial"</code></td>
      <td>The <kbd>Redial</kbd> button. Redials the last-called number.</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_LastNumberRedial</code> (0x01100009)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Notification"</code></td>
      <td>The <kbd>Notification</kbd> key.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_NOTIFICATION</code> (83)</td>
    </tr>
    <tr>
      <td><code>"MannerMode"</code></td>
      <td>
        A button which cycles among the notification modes: silent, vibrate,
        ring, and so forth.
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_MANNER_MODE</code> (205)</td>
    </tr>
    <tr>
      <td><code>"VoiceDial"</code></td>
      <td>The <kbd>Voice Dial</kbd> key. Initiates voice dialing.</td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_VoiceDial</code> (0x01100008)</td>
      <td><code>KEYCODE_VOICE_ASSIST</code> (231)</td>
    </tr>
  </tbody>
</table>

\[1] Prior to Firefox 37, the Home button generated a key code of `"Exit"`. Starting in Firefox 37, the button generates the key code `"MozHomeScreen"`.

## Multimedia keys

The multimedia keys are extra buttons or keys for controlling media devices, found on some keyboards.

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Value</th>
      <th rowspan="2" scope="col">Description</th>
      <th colspan="4" scope="col">Virtual Keycode</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"ChannelDown"</code></td>
      <td>Switches to the previous channel.</td>
      <td><code>APPCOMMAND_MEDIA_CHANNEL_DOWN</code></td>
      <td></td>
      <td><code>Qt::Key_ChannelDown</code> (0x01000119)</td>
      <td><code>KEYCODE_CHANNEL_DOWN</code> (167)</td>
    </tr>
    <tr>
      <td><code>"ChannelUp"</code></td>
      <td>Switches to the next channel.</td>
      <td><code>APPCOMMAND_MEDIA_CHANNEL_UP</code></td>
      <td></td>
      <td><code>Qt::Key_ChannelUp</code> (0x01000118)</td>
      <td><code>KEYCODE_CHANNEL_UP</code> (166)</td>
    </tr>
    <tr>
      <td><code>"MediaFastForward"</code> [2]</td>
      <td>
        Starts, continues, or increases the speed of fast forwarding the media.
      </td>
      <td><code>APPCOMMAND_MEDIA_FAST_FORWARD</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_AudioForward (0x1008FF97)<br />Qt:Key_AudioForward</code>
        (0x01000102)
      </td>
      <td><code>KEYCODE_MEDIA_FAST_FORWARD</code> (90)</td>
    </tr>
    <tr>
      <td><code>"MediaPause"</code></td>
      <td>
        <p>Pauses the currently playing media.</p>
        <div class="notecard note">
          <p>
            <strong>Note:</strong> Some older applications use
            <code>"Pause"</code>, but this is not correct.
          </p>
        </div>
      </td>
      <td><code>APPCOMMAND_MEDIA_PAUSE</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_AudioPause</code> (0x1008FF31)<br /><code
          >Qt::Key_MediaPause</code
        >
        (0x1000085)
      </td>
      <td><code>KEYCODE_MEDIA_PAUSE</code> (127)</td>
    </tr>
    <tr>
      <td><code>"MediaPlay"</code></td>
      <td>
        Starts or continues playing media at normal speed, if not already doing
        so. Has no effect otherwise.
      </td>
      <td><code>APPCOMMAND_MEDIA_PLAY</code></td>
      <td></td>
      <td><code>GDK_KEY_AudioPlay</code> (0x1008FF14)</td>
      <td><code>KEYCODE_MEDIA_PLAY</code> (126)</td>
    </tr>
    <tr>
      <td><code>"MediaPlayPause"</code></td>
      <td>Toggles between playing and pausing the current media.</td>
      <td>
        <code>VK_MEDIA_PLAY_PAUSE</code> (0xB3)<br /><code
          >APPCOMMAND_MEDIA_PLAY_PAUSE</code
        >
      </td>
      <td></td>
      <td><code>Qt::Key_MediaTogglePlayPause</code> (0x1000086)</td>
      <td><code>KEYCODE_MEDIA_PLAY_PAUSE</code> (85)</td>
    </tr>
    <tr>
      <td><code>"MediaRecord"</code></td>
      <td>Starts or resumes recording media.</td>
      <td><code>APPCOMMAND_MEDIA_RECORD</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_AudioRecord</code> (0x1008FF1C)<br /><code
          >Qt::Key_MediaRecord</code
        >
        (0x01000084)
      </td>
      <td><code>KEYCODE_MEDIA_RECORD</code> (130)</td>
    </tr>
    <tr>
      <td><code>"MediaRewind"</code></td>
      <td>Starts, continues, or increases the speed of rewinding the media.</td>
      <td><code>APPCOMMAND_MEDIA_REWIND</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_AudioRewind</code> (0x1008FF3E)<br /><code
          >Qt::Key_AudioRewind</code
        >
        (0x010000C5)
      </td>
      <td><code>KEYCODE_MEDIA_REWIND</code> (89)</td>
    </tr>
    <tr>
      <td><code>"MediaStop"</code></td>
      <td>
        Stops the current media activity (such as playing, recording, pausing,
        forwarding, or rewinding). Has no effect if the media is currently
        stopped already.
      </td>
      <td>
        <code>VK_MEDIA_STOP</code> (0xB2)<br /><code
          >APPCOMMAND_MEDIA_STOP</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_AudioStop</code> (0x1008FF15)<br /><code
          >Qt::Key_MediaStop</code
        >
        (0x01000081)
      </td>
      <td><code>KEYCODE_MEDIA_STOP</code> (86)</td>
    </tr>
    <tr>
      <td><code>"MediaTrackNext"</code> [1]</td>
      <td>Seeks to the next media or program track.</td>
      <td>
        <code>VK_MEDIA_NEXT_TRACK</code> (0xB0)<br /><code
          >APPCOMMAND_MEDIA_NEXTTRACK</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_AudioNext</code> (0x1008FF17)<br /><code
          >Qt::Key_MediaNext</code
        >
        (0x01000083)
      </td>
      <td><code>KEYCODE_MEDIA_NEXT</code> (87)</td>
    </tr>
    <tr>
      <td><code>"MediaTrackPrevious"</code> [1]</td>
      <td>Seeks to the previous media or program track.</td>
      <td>
        <code>VK_MEDIA_PREV_TRACK</code> (0xB1)<br /><code
          >APPCOMMAND_MEDIA_PREVIOUSTRACK</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_AudioPrev</code> (0x1008FF16)<br /><code
          >Qt::Key_MediaPrevious</code
        >
        (0x01000082)
      </td>
      <td><code>KEYCODE_MEDIA_PREVIOUS</code> (88)</td>
    </tr>
  </tbody>
</table>

\[1] Legacy Edge and Firefox (36 and earlier) use `"MediaNextTrack"` and `"MediaPreviousTrack"` instead of `"MediaTrackNext"` and `"MediaTrackPrevious"`.

\[2] Prior to Firefox 37, Firefox generated the key code `"FastFwd"` on some platforms and `"Unidentified"` on others instead of `"MediaFastForward"`.

## Audio control keys

These media keys are used specifically for controlling audio.

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Value</th>
      <th rowspan="2" scope="col">Description</th>
      <th colspan="4" scope="col">Virtual Keycode</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"AudioBalanceLeft"</code></td>
      <td>Adjusts audio balance toward the left.</td>
      <td><code>VK_AUDIO_BALANCE_LEFT</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioBalanceRight"</code></td>
      <td>Adjusts audio balance toward the right.</td>
      <td><code>VK_AUDIO_BALANCE_RIGHT</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioBassDown"</code></td>
      <td>Decreases the amount of bass.</td>
      <td><code>APPCOMMAND_BASS_DOWN</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioBassBoostDown"</code></td>
      <td>
        Reduces bass boosting or cycles downward through bass boost modes or
        states.
      </td>
      <td><code>VK_BASS_BOOST_DOWN</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioBassBoostToggle"</code></td>
      <td>Toggles bass boosting on and off.</td>
      <td><code>APPCOMMAND_BASS_BOOST</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioBassBoostUp"</code></td>
      <td>
        Increases the amount of bass boosting, or cycles upward through a set of
        bass boost modes or states.
      </td>
      <td><code>VK_BASS_BOOST_UP</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioBassUp"</code></td>
      <td>Increases the amount of bass.</td>
      <td><code>APPCOMMAND_BASS_UP</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioFaderFront"</code></td>
      <td>Adjusts the audio fader toward the front.</td>
      <td><code>VK_FADER_FRONT</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioFaderRear"</code></td>
      <td>Adjusts the audio fader toward the rear.</td>
      <td><code>VK_FADER_REAR</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioSurroundModeNext"</code></td>
      <td>Selects the next available surround sound mode.</td>
      <td><code>VK_SURROUND_MODE_NEXT</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioTrebleDown"</code></td>
      <td>Decreases the amount of treble.</td>
      <td><code>APPCOMMAND_TREBLE_DOWN</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioTrebleUp"</code></td>
      <td>Increases the amount of treble.</td>
      <td><code>APPCOMMAND_TREBLE_UP</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"AudioVolumeDown" [1]</code></td>
      <td>Decreases the audio volume.</td>
      <td>
        <code>VK_VOLUME_DOWN</code> (0xAE)<br /><code
          >APPCOMMAND_VOLUME_DOWN</code
        >
      </td>
      <td><code>kVK_VolumeDown</code> (0x49)</td>
      <td>
        <code>GDK_KEY_AudioLowerVolume</code> (0x1008FF11)<br /><code
          >Qt::Key_VolumeDown</code
        >
        (0x01000070)
      </td>
      <td><code>KEYCODE_VOLUME_DOWN</code> (25)</td>
    </tr>
    <tr>
      <td><code>"AudioVolumeMute" [1]</code></td>
      <td>Mutes the audio.</td>
      <td>
        <code>VK_VOLUME_MUTE</code> (0xAD)<br /><code
          >APPCOMMAND_VOLUME_MUTE</code
        >
      </td>
      <td><code>kVK_Mute</code> (0x4A)</td>
      <td>
        <code>GDK_KEY_AudioMute</code> (0x1008FF12)<br /><code
          >Qt::Key_VolumeMute</code
        >
        (0x01000071)
      </td>
      <td><code>KEYCODE_VOLUME_MUTE</code> (164)</td>
    </tr>
    <tr>
      <td><code>"AudioVolumeUp" [1]</code></td>
      <td>Increases the audio volume.</td>
      <td>
        <code>VK_VOLUME_UP</code> (0xAF)<br /><code>APPCOMMAND_VOLUME_UP</code>
      </td>
      <td><code>kVK_VolumeUp</code> (0x48)</td>
      <td>
        <code>GDK_KEY_AudioRaiseVolume</code> (0x1008FF13)<br /><code
          >Qt::Key_VolumeUp</code
        >
        (0x01000072)
      </td>
      <td><code>KEYCODE_VOLUME_UP</code> (24)</td>
    </tr>
    <tr>
      <td><code>"MicrophoneToggle"</code></td>
      <td>Toggles the microphone on and off.</td>
      <td><code>APPCOMMAND_MIC_ON_OFF_TOGGLE</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"MicrophoneVolumeDown"</code></td>
      <td>Decreases the microphone's input volume.</td>
      <td><code>APPCOMMAND_MICROPHONE_VOLUME_DOWN</code></td>
      <td></td>
      <td><code>Qt::Key_MicVolumeDown</code> (0x0100011E)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"MicrophoneVolumeMute"</code></td>
      <td>Mutes the microphone input.</td>
      <td><code>APPCOMMAND_MICROPHONE_VOLUME_MUTE</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_AudioMicMute</code> (0x1008FFB2)<br /><code
          >Qt::Key_MicMute</code
        >
        (0x01000113)
      </td>
      <td><code>KEYCODE_MUTE</code> (91)</td>
    </tr>
    <tr>
      <td><code>"MicrophoneVolumeUp"</code></td>
      <td>Increases the microphone's input volume.</td>
      <td><code>APPCOMMAND_MICROPHONE_VOLUME_UP</code></td>
      <td></td>
      <td><code>Qt::Key_MicVolumeUp</code> (0x0100011D)</td>
      <td></td>
    </tr>
  </tbody>
</table>

\[1] Legacy Edge and Firefox (48 and earlier) use `"VolumeUp"`, `"VolumeDown"`, and `"VolumeMute"` instead of `"AudioVolumeUp"`, `"AudioVolumeDown"`, and `"AudioVolumeMute"`. In Firefox 49 they were updated to match the latest specification.

## TV control keys

These key values represent buttons or keys present on television devices, or computers or phones which have TV support.

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Value</th>
      <th rowspan="2" scope="col">Description</th>
      <th colspan="4" scope="col">Virtual Keycode</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"TV"</code> [1]</td>
      <td>Switches into TV viewing mode.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV</code> (170)</td>
    </tr>
    <tr>
      <td><code>"TV3DMode"</code></td>
      <td>Toggles 3D TV mode on and off.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_3D_MODE</code> (206)</td>
    </tr>
    <tr>
      <td><code>"TVAntennaCable"</code></td>
      <td>Toggles between antenna and cable inputs.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_ANTENNA_CABLE</code> (242)</td>
    </tr>
    <tr>
      <td><code>"TVAudioDescription"</code></td>
      <td>Toggles audio description mode on and off.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_AUDIO_DESCRIPTION</code> (252)</td>
    </tr>
    <tr>
      <td><code>"TVAudioDescriptionMixDown"</code></td>
      <td>
        Decreases the audio description's mixing volume; reduces the volume of
        the audio descriptions relative to the program sound.
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_AUDIO_DESCRIPTION_MIX_DOWN</code> (254)</td>
    </tr>
    <tr>
      <td><code>"TVAudioDescriptionMixUp"</code></td>
      <td>
        Increases the audio description's mixing volume; increases the volume of
        the audio descriptions relative to the program sound.
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_AUDIO_DESCRIPTION_MIX_UP</code> (253)</td>
    </tr>
    <tr>
      <td><code>"TVContentsMenu"</code></td>
      <td>
        Displays or hides the media contents available for playback (this may be
        a channel guide showing the currently airing programs, or a list of
        media files to play).
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_CONTENTS_MENU</code> (256)</td>
    </tr>
    <tr>
      <td><code>"TVDataService"</code></td>
      <td>Displays or hides the TV's data service menu.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_DATA_SERVICE</code> (230)</td>
    </tr>
    <tr>
      <td><code>"TVInput"</code> [2]</td>
      <td>Cycles the input mode on an external TV.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT</code> (178)</td>
    </tr>
    <tr>
      <td><code>"TVInputComponent1"</code></td>
      <td>Switches to the input "Component 1."</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_COMPONENT_1</code> (249)</td>
    </tr>
    <tr>
      <td><code>"TVInputComponent2"</code></td>
      <td>Switches to the input "Component 2."</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_COMPONENT_2</code> (250)</td>
    </tr>
    <tr>
      <td><code>"TVInputComposite1"</code></td>
      <td>Switches to the input "Composite 1."</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_COMPOSITE_1</code> (247)</td>
    </tr>
    <tr>
      <td><code>"TVInputComposite2"</code></td>
      <td>Switches to the input "Composite 2."</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_COMPOSITE_2</code> (248)</td>
    </tr>
    <tr>
      <td><code>"TVInputHDMI1"</code></td>
      <td>Switches to the input "HDMI 1."</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_HDMI_1</code> (243)</td>
    </tr>
    <tr>
      <td><code>"TVInputHDMI2"</code></td>
      <td>Switches to the input "HDMI 2."</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_HDMI_2</code> (244)</td>
    </tr>
    <tr>
      <td><code>"TVInputHDMI3"</code></td>
      <td>Switches to the input "HDMI 3."</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_HDMI_3</code> (245)</td>
    </tr>
    <tr>
      <td><code>"TVInputHDMI4"</code></td>
      <td>Switches to the input "HDMI 4."</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_HDMI_4</code> (246)</td>
    </tr>
    <tr>
      <td><code>"TVInputVGA1"</code></td>
      <td>Switches to the input "VGA 1."</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_INPUT_VGA_1</code> (251)</td>
    </tr>
    <tr>
      <td><code>"TVMediaContext"</code></td>
      <td>The Media Context menu key.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_MEDIA_CONTEXT_MENU</code> (257)</td>
    </tr>
    <tr>
      <td><code>"TVNetwork"</code></td>
      <td>Toggle the TV's network connection on and off.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_NETWORK</code> (241)</td>
    </tr>
    <tr>
      <td><code>"TVNumberEntry"</code></td>
      <td>Put the TV into number entry mode.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_NUMBER_ENTRY</code> (234)</td>
    </tr>
    <tr>
      <td><code>"TVPower"</code> [2]</td>
      <td>The device's power button.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_POWER</code> (177)</td>
    </tr>
    <tr>
      <td><code>"TVRadioService"</code></td>
      <td>Radio button.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_RADIO_SERVICE</code> (232)</td>
    </tr>
    <tr>
      <td><code>"TVSatellite"</code></td>
      <td>Satellite button.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_SATELLITE</code> (237)</td>
    </tr>
    <tr>
      <td><code>"TVSatelliteBS"</code></td>
      <td>Broadcast Satellite button.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_SATELLITE_BS</code> (238)</td>
    </tr>
    <tr>
      <td><code>"TVSatelliteCS"</code></td>
      <td>Communication Satellite button.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_SATELLITE_CS</code> (239)</td>
    </tr>
    <tr>
      <td><code>"TVSatelliteToggle"</code></td>
      <td>Toggles among available satellites.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_SATELLITE_SERVICE</code> (240)</td>
    </tr>
    <tr>
      <td><code>"TVTerrestrialAnalog"</code></td>
      <td>
        Selects analog terrestrial television service (analog cable or antenna
        reception).
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_TERRESTRIAL_ANALOG</code> (235)</td>
    </tr>
    <tr>
      <td><code>"TVTerrestrialDigital"</code></td>
      <td>
        Selects digital terrestrial television service (digital cable or antenna
        reception).
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_TERRESTRIAL_DIGITAL</code> (236)</td>
    </tr>
    <tr>
      <td><code>"TVTimer"</code></td>
      <td>Timer programming button.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_TIMER_PROGRAMMING</code> (258)</td>
    </tr>
  </tbody>
</table>

\[1] Firefox added proper support for the `"TV"` key in Firefox 37; before that, this key generated the key code `"Live"`.

\[2] These keys were `"Unidentified"` until Firefox 37.

## Media controller keys

Because modern remote controls for media devices often include buttons beyond the basic controls covered elsewhere in this document, key values are defined for a broad array of these additional buttons.

The values below are derived in part from a number of consumer electronics technical specifications:

- [DTV Application Software Environment](https://www.atsc.org/atsc-documents/a100-dtv-application-software-environment-level-1-dase-1/) (part of the [ATSC](https://en.wikipedia.org/wiki/ATSC) specification)
- [Open Cable Application Platform](https://en.wikipedia.org/wiki/OpenCable_Application_Platform)
- [ANSI/CEA-2014-B](https://shop.cta.tech/products/web-based-protocol-and-framework-for-remote-user-interface-on-upnp-networks-and-the-internet): Web-based Protocol and Framework for Remote User Interface on UPnP™ Networks and the Internet
- [Android KeyEvent key code values](https://developer.android.com/reference/android/view/KeyEvent.html)

> [!NOTE]
> Remote controls typically include keys whose values are already defined elsewhere, such as under [Multimedia keys](#multimedia_keys) or [Audio control keys](#audio_control_keys). Those keys' values will match what's documented in those tables.

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Value</th>
      <th rowspan="2" scope="col">Description</th>
      <th colspan="4" scope="col">Virtual Keycode</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"AVRInput"</code> [3]</td>
      <td>
        Changes the input mode on an external audio/video receiver (AVR) unit.
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_AVR_INPUT</code> (182)</td>
    </tr>
    <tr>
      <td><code>"AVRPower"</code> [3]</td>
      <td>Toggles the power on an external AVR unit.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_AVR_POWER</code> (181)</td>
    </tr>
    <tr>
      <td><code>"ColorF0Red"</code> [3]</td>
      <td>
        General-purpose media function key, color-coded red. This has index
        <code>0</code> among the colored keys.
      </td>
      <td><code>VK_COLORED_KEY_0</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_PROG_RED</code> (183)</td>
    </tr>
    <tr>
      <td><code>"ColorF1Green"</code> [3]</td>
      <td>
        General-purpose media function key, color-coded green. This has index
        <code>1</code> among the colored keys.
      </td>
      <td><code>VK_COLORED_KEY_1</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_PROG_GREEN</code> (184)</td>
    </tr>
    <tr>
      <td><code>"ColorF2Yellow"</code> [3]</td>
      <td>
        General-purpose media function key, color-coded yellow. This has index
        <code>2</code> among the colored keys.
      </td>
      <td><code>VK_COLORED_KEY_2</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_PROG_YELLOW</code> (185)</td>
    </tr>
    <tr>
      <td><code>"ColorF3Blue"</code> [3]</td>
      <td>
        General-purpose media function key, color-coded blue. This has index
        <code>3</code> among the colored keys.
      </td>
      <td><code>VK_COLORED_KEY_3</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_PROG_BLUE</code> (186)</td>
    </tr>
    <tr>
      <td><code>"ColorF4Grey"</code></td>
      <td>
        General-purpose media function key, color-coded grey. This has index
        <code>4</code> among the colored keys.
      </td>
      <td><code>VK_COLORED_KEY_4</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_PROG_GREY</code></td>
    </tr>
    <tr>
      <td><code>"ColorF5Brown"</code></td>
      <td>
        General-purpose media function key, color-coded brown. This has index
        <code>5</code> among the colored keys.
      </td>
      <td><code>VK_COLORED_KEY_5</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_PROG_BROWN</code></td>
    </tr>
    <tr>
      <td><code>"ClosedCaptionToggle"</code></td>
      <td>Toggles closed captioning on and off.</td>
      <td><code>VK_CC</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_CAPTIONS</code> (175)</td>
    </tr>
    <tr>
      <td><code>"Dimmer"</code></td>
      <td>
        Adjusts the brightness of the device by toggling between two brightness
        levels <em>or</em> by cycling among multiple brightness levels.
      </td>
      <td><code>VK_DIMMER</code></td>
      <td></td>
      <td><code>GDK_KEY_BrightnessAdjust</code> (0x1008FF3B)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"DisplaySwap"</code></td>
      <td>Cycles among video sources.</td>
      <td><code>VK_DISPLAY_SWAP</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"DVR"</code></td>
      <td>Switches the input source to the Digital Video Recorder (DVR).</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_DVR</code> (173)</td>
    </tr>
    <tr>
      <td><code>"Exit"</code></td>
      <td>The Exit button, which exits the current application or menu.</td>
      <td><code>VK_EXIT</code></td>
      <td></td>
      <td><code>Qt::Key_Exit</code> (0x0102000a)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteClear0"</code></td>
      <td>
        Clears the program or content stored in the first favorites list slot.
      </td>
      <td><code>VK_CLEAR_FAVORITE_0</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteClear1"</code></td>
      <td>
        Clears the program or content stored in the second favorites list slot.
      </td>
      <td><code>VK_CLEAR_FAVORITE_1</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteClear2"</code></td>
      <td>
        Clears the program or content stored in the third favorites list slot.
      </td>
      <td><code>VK_CLEAR_FAVORITE_2</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteClear3"</code></td>
      <td>
        Clears the program or content stored in the fourth favorites list slot.
      </td>
      <td><code>VK_CLEAR_FAVORITE_3</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteRecall0"</code></td>
      <td>
        Selects (recalls) the program or content stored in the first favorites
        list slot.
      </td>
      <td><code>VK_RECALL_FAVORITE_0</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteRecall1"</code></td>
      <td>
        Selects (recalls) the program or content stored in the second favorites
        list slot.
      </td>
      <td><code>VK_RECALL_FAVORITE_1</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteRecall2"</code></td>
      <td>
        Selects (recalls) the program or content stored in the third favorites
        list slot.
      </td>
      <td><code>VK_RECALL_FAVORITE_2</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteRecall3"</code></td>
      <td>
        Selects (recalls) the program or content stored in the fourth favorites
        list slot.
      </td>
      <td><code>VK_RECALL_FAVORITE_3</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteStore0"</code></td>
      <td>
        Stores the current program or content into the first favorites list
        slot.
      </td>
      <td><code>VK_STORE_FAVORITE_0</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteStore1"</code></td>
      <td>
        Stores the current program or content into the second favorites list
        slot.
      </td>
      <td><code>VK_STORE_FAVORITE_1</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteStore2"</code></td>
      <td>
        Stores the current program or content into the third favorites list
        slot.
      </td>
      <td><code>VK_STORE_FAVORITE_2</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"FavoriteStore3"</code></td>
      <td>
        Stores the current program or content into the fourth favorites list
        slot.
      </td>
      <td><code>VK_STORE_FAVORITE_3</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Guide"</code></td>
      <td>Toggles the display of the program or content guide.</td>
      <td><code>VK_GUIDE</code></td>
      <td></td>
      <td><code>Qt::Key_Guide</code> (0x0100011A)</td>
      <td><code>KEYCODE_GUIDE</code> (172)</td>
    </tr>
    <tr>
      <td><code>"GuideNextDay"</code></td>
      <td>
        If the guide is currently displayed, this button tells the guide to
        display the next day's content.
      </td>
      <td><code>VK_NEXT_DAY</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"GuidePreviousDay"</code></td>
      <td>
        If the guide is currently displayed, this button tells the guide to
        display the previous day's content.
      </td>
      <td><code>VK_PREV_DAY</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Info"</code></td>
      <td>
        Toggles the display of information about the currently selected content,
        program, or media.
      </td>
      <td><code>VK_INFO</code></td>
      <td></td>
      <td><code>Qt::Key_Info</code> (0x0100011B)</td>
      <td><code>KEYCODE_INFO</code> (165)</td>
    </tr>
    <tr>
      <td><code>"InstantReplay"</code></td>
      <td>
        Tells the device to perform an instant replay (typically some form of
        jumping back a short amount of time then playing it again, possibly but
        not usually in slow motion).
      </td>
      <td><code>VK_INSTANT_REPLAY</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Link"</code></td>
      <td>
        Opens content linked to the current program, if available and possible.
      </td>
      <td><code>VK_LINK</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"ListProgram"</code></td>
      <td>Lists the current program.</td>
      <td><code>VK_LIST</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LiveContent"</code></td>
      <td>
        Toggles a display listing currently available live content or programs.
      </td>
      <td><code>VK_LIVE</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Lock"</code></td>
      <td>Locks or unlocks the currently selected content or program.</td>
      <td><code>VK_LOCK</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"MediaApps"</code></td>
      <td>
        Presents a list of media applications, such as photo viewers, audio and
        video players, and games. [1]
      </td>
      <td><code>VK_APPS</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"MediaAudioTrack"</code></td>
      <td>The Audio Track key.</td>
      <td></td>
      <td></td>
      <td>
        GDK_KEY_AudioCycleTrack (0x1008FF9B)<br /><code
          >Qt::Key_AudioCycleTrack</code
        >
        (0x01000106)
      </td>
      <td><code>KEYCODE_MEDIA_AUDIO_TRACK</code> (222)</td>
    </tr>
    <tr>
      <td><code>"MediaLast"</code></td>
      <td>Jumps back to the last-viewed content, program, or other media.</td>
      <td><code>VK_LAST</code></td>
      <td></td>
      <td><code>Qt::Key_MediaLast</code> (0x0100FFFF)</td>
      <td><code>KEYCODE_LAST_CHANNEL</code> (229)</td>
    </tr>
    <tr>
      <td><code>"MediaSkipBackward"</code></td>
      <td>Skips backward to the previous content or program.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_MEDIA_SKIP_BACKWARD</code></td>
    </tr>
    <tr>
      <td><code>"MediaSkipForward"</code></td>
      <td>Skips forward to the next content or program.</td>
      <td><code>VK_SKIP</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_MEDIA_SKIP_FORWARD</code></td>
    </tr>
    <tr>
      <td><code>"MediaStepBackward"</code></td>
      <td>Steps backward to the previous content or program.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_MEDIA_STEP_BACKWARD</code></td>
    </tr>
    <tr>
      <td><code>"MediaStepForward"</code></td>
      <td>Steps forward to the next content or program.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_MEDIA_SKIP_FORWARD</code></td>
    </tr>
    <tr>
      <td><code>"MediaTopMenu"</code></td>
      <td>
        Top Menu button. Opens the media's main menu (e.g., for a DVD or Blu-Ray
        disc).
      </td>
      <td></td>
      <td></td>
      <td><code>Qt::Key_TopMenu</code> (0x0100010A)</td>
      <td><code>KEYCODE_MEDIA_TOP_MENU</code></td>
    </tr>
    <tr>
      <td><code>"NavigateIn"</code></td>
      <td>Navigates into a submenu or option.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_NAVIGATE_IN</code></td>
    </tr>
    <tr>
      <td><code>"NavigateNext"</code></td>
      <td>Navigates to the next item.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_NAVIGATE_NEXT</code></td>
    </tr>
    <tr>
      <td><code>"NavigateOut"</code></td>
      <td>Navigates out of the current screen or menu.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_NAVIGATE_OUT</code></td>
    </tr>
    <tr>
      <td><code>"NavigatePrevious"</code></td>
      <td>Navigates to the previous item.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_NAVIGATE_PREVIOUS</code></td>
    </tr>
    <tr>
      <td><code>"NextFavoriteChannel"</code></td>
      <td>Cycles to the next channel in the favorites list.</td>
      <td><code>VK_NEXT_FAVORITE_CHANNEL</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"NextUserProfile"</code></td>
      <td>
        Cycles to the next saved user profile, if this feature is supported and
        multiple profiles exist.
      </td>
      <td><code>VK_USER</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"OnDemand"</code></td>
      <td>
        Opens the user interface for selecting on demand content or programs to
        watch.
      </td>
      <td><code>VK_ON_DEMAND</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Pairing"</code></td>
      <td>
        Starts the process of pairing the remote with a device to be controlled.
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_PAIRING</code> (225)</td>
    </tr>
    <tr>
      <td><code>"PinPDown"</code></td>
      <td>A button to move the picture-in-picture view downward.</td>
      <td><code>VK_PINP_DOWN</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"PinPMove"</code></td>
      <td>A button to control moving the picture-in-picture view.</td>
      <td><code>VK_PINP_MOVE</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"PinPToggle"</code></td>
      <td>Toggles display of the picture-in-picture view on and off.</td>
      <td><code>VK_PINP_TOGGLE</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"PinPUp"</code></td>
      <td>A button to move the picture-in-picture view upward.</td>
      <td><code>VK_PINP_UP</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"PlaySpeedDown"</code></td>
      <td>Decreases the media playback rate.</td>
      <td><code>VK_PLAY_SPEED_DOWN</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"PlaySpeedReset"</code></td>
      <td>Returns the media playback rate to normal.</td>
      <td><code>VK_PLAY_SPEED_RESET</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"PlaySpeedUp"</code></td>
      <td>Increases the media playback rate.</td>
      <td><code>VK_PLAY_SPEED_UP</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"RandomToggle"</code></td>
      <td>Toggles random media (also known as "shuffle mode") on and off.</td>
      <td><code>VK_RANDOM_TOGGLE</code></td>
      <td></td>
      <td><code>GDK_KEY_AudioRandomPlay</code> (0x1008FF99)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"RcLowBattery"</code></td>
      <td>
        A code sent when the remote control's battery is low. This doesn't
        actually correspond to a physical key at all.
      </td>
      <td><code>VK_RC_LOW_BATTERY</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"RecordSpeedNext"</code></td>
      <td>Cycles among the available media recording speeds.</td>
      <td><code>VK_RECORD_SPEED_NEXT</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"RfBypass"</code></td>
      <td>
        Toggles radio frequency (RF) input bypass mode on and off. RF bypass
        mode passes RF input directly to the RF output without any processing or
        filtering.
      </td>
      <td><code>VK_RF_BYPASS</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"ScanChannelsToggle"</code></td>
      <td>
        Toggles the channel scan mode on and off. This is a mode which flips
        through channels automatically until the user stops the scan.
      </td>
      <td><code>VK_SCAN_CHANNELS_TOGGLE</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"ScreenModeNext"</code></td>
      <td>Cycles through the available screen display modes.</td>
      <td><code>VK_SCREEN_MODE_NEXT</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Settings"</code></td>
      <td>Toggles display of the device's settings screen on and off.</td>
      <td><code>VK_SETTINGS</code></td>
      <td></td>
      <td><code>Qt::Key_Settings</code> (0x0100011C)</td>
      <td><code>KEYCODE_SETTINGS</code></td>
    </tr>
    <tr>
      <td><code>"SplitScreenToggle"</code></td>
      <td>Toggles split screen display mode on and off.</td>
      <td><code>VK_SPLIT_SCREEN_TOGGLE</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_SplitScreen</code> (0x1008FF7D)<br /><code
          >Qt::Key_SplitScreen</code
        >
        (0x010000ED)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"STBInput"</code> [3]</td>
      <td>Cycles among input modes on an external set-top box (STB).</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_STB_INPUT</code> (180)</td>
    </tr>
    <tr>
      <td><code>"STBPower"</code> [3]</td>
      <td>Toggles on and off an external STB.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_STB_POWER</code> (179)</td>
    </tr>
    <tr>
      <td><code>"Subtitle"</code></td>
      <td>Toggles the display of subtitles on and off if they're available.</td>
      <td><code>VK_SUBTITLE</code></td>
      <td></td>
      <td><code>GDK_KEY_Subtitle</code> (0x1008FF9A)</td>
      <td><code>KEYCODE_CAPTIONS</code> (175)</td>
    </tr>
    <tr>
      <td><code>"Teletext"</code></td>
      <td>
        Toggles display of <a href="https://en.wikipedia.org/wiki/Teletext">teletext</a>,
        if available.
      </td>
      <td><code>VK_TELETEXT</code></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_TV_TELETEXT</code> (233)</td>
    </tr>
    <tr>
      <td><code>"VideoModeNext"</code> [3]</td>
      <td>Cycles through the available video modes.</td>
      <td><code>VK_VIDEO_MODE_NEXT</code></td>
      <td></td>
      <td><code>GDK_KEY_Next_VMode</code> (0x1008FE22)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Wink"</code></td>
      <td>
        Causes the device to identify itself in some fashion, such as by
        flashing a light, briefly changing the brightness of indicator lights,
        or emitting a tone.
      </td>
      <td><code>VK_WINK</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"ZoomToggle"</code> [2]</td>
      <td>
        Toggles between fullscreen and scaled content display, or otherwise
        change the magnification level.
      </td>
      <td><code>VK_ZOOM</code> (0xFB)</td>
      <td></td>
      <td><code>Qt::Key_Zoom</code> (0x01020006)</td>
      <td><code>KEYCODE_TV_ZOOM_MODE</code> (255)</td>
    </tr>
  </tbody>
</table>

\[1] Don't confuse the media controller `VK_APPS` key with the Windows `VK_APPS` key, which is also known as `VK_CONTEXT_MENU`. That key is encoded as `"ContextMenu"`.

\[2] Firefox 36 and earlier identifies the zoom toggle button as `"Zoom"`. Firefox 37 corrects this to `"ZoomToggle"`.

\[3] These keys were `"Unidentified"` until Firefox 37.

## Speech recognition keys

These special multimedia keys are used to control speech recognition features.

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Value</th>
      <th rowspan="2" scope="col">Description</th>
      <th colspan="4" scope="col">Virtual Keycode</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"SpeechCorrectionList"</code> [1]</td>
      <td>
        Presents a list of possible corrections for a word which was incorrectly
        identified.
      </td>
      <td><code>APPCOMMAND_CORRECTION_LIST</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"SpeechInputToggle"</code> [2]</td>
      <td>
        Toggles between dictation mode and command/control mode. This lets the
        speech engine know whether to interpret spoken words as input text or as
        commands.
      </td>
      <td><code>APPCOMMAND_DICTATE_OR_COMMAND_CONTROL_TOGGLE</code></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

\[1] The `APPCOMMAND_CORRECTION_LIST` command on Windows generates `"Unidentified"` on Firefox.

\[2] The `APPCOMMAND_DICTATE_OR_COMMAND_CONTROL_TOGGLE` command on Windows generates `"Unidentified"` on Firefox.

## Document keys

These keys control documents. In the specification, they're included in other sets of keys (such as the media keys), but they are more sensibly considered to be their own category.

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Value</th>
      <th rowspan="2" scope="col">Description</th>
      <th colspan="4" scope="col">Virtual Keycode</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
    <tr>
      <td><code>"Close"</code> [1]</td>
      <td>
        Closes the current document or message. Must not exit the application.
      </td>
      <td><code>APPCOMMAND_CLOSE</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_Close</code> (0x1008FF56)<br /><code>Qt::Key_Close</code>
        (0x010000CE)
      </td>
      <td><code>KEYCODE_MEDIA_CLOSE</code> (128)</td>
    </tr>
    <tr>
      <td><code>"New"</code> [1]</td>
      <td>Creates a new document or message.</td>
      <td><code>APPCOMMAND_NEW</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_New</code> (0x1008FF68)<br /><code>Qt::Key_New</code>
        (0x01000120)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Open"</code> [1]</td>
      <td>Opens an existing document or message.</td>
      <td><code>APPCOMMAND_OPEN</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_Open</code> (0x1008FF6B)<br /><code>Qt::Key_Open</code>
        (0x01000121)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Print"</code></td>
      <td>Prints the current document or message.</td>
      <td><code>APPCOMMAND_PRINT</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_Print</code> (0xFF61)<br /><code>Qt::Print</code>
        (0x01000009)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Save"</code> [1]</td>
      <td>Saves the current document or message.</td>
      <td><code>APPCOMMAND_SAVE</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_Save</code> (0x1008FF77)<br /><code>Qt::Key_Save</code>
        (0x010000EA)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"SpellCheck"</code> [1]</td>
      <td>Starts spell checking the current document.</td>
      <td><code>APPCOMMAND_SPELL_CHECK</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_Spell</code> (0x1008FF7C)<br /><code>Qt::Key_Spell</code>
        (0x010000EC)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"MailForward"</code> [1]</td>
      <td>Opens the user interface to forward a message.</td>
      <td><code>APPCOMMAND_FORWARD_MAIL</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_MailForward</code> (0x1008FF90)<br /><code
          >Qt::Key_MailForward</code
        >
        (0x010000FB)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"MailReply"</code> [1]</td>
      <td>Opens the user interface to reply to a message.</td>
      <td><code>APPCOMMAND_REPLY_TO_MAIL</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_Reply</code> (0x1008FF72)<br /><code>Qt::Key_Reply</code>
        (0x010000E5)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"MailSend"</code> [1]</td>
      <td>Sends the current message.</td>
      <td><code>APPCOMMAND_SEND_MAIL</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_Send</code> (0x1008FF7B)<br /><code>Qt::Key_Send</code>
        (0x010000EB)
      </td>
      <td></td>
    </tr>
  </thead>
</table>

\[1] Prior to Firefox 37, this key generated the key value `"Unidentified"`.

## Application selector keys

Some keyboards offer special keys for launching or switching to certain common applications. Key values for those are listed here.

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Value</th>
      <th rowspan="2" scope="col">Description</th>
      <th colspan="4" scope="col">Virtual Keycode</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"LaunchCalculator"</code> [5]</td>
      <td>
        The <kbd>Calculator</kbd> key, often labeled with an icon. This is often
        used as a generic application launcher key
        (<code>APPCOMMAND_LAUNCH_APP2</code>).
      </td>
      <td><code>APPCOMMAND_LAUNCH_APP2</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_Calculator</code> (0x1008FF1D)<br /><code
          >Qt::Key_Calculator</code
        >
        (0x010000CB)
      </td>
      <td><code>KEYCODE_CALCULATOR</code> (210)</td>
    </tr>
    <tr>
      <td><code>"LaunchCalendar"</code> [5]</td>
      <td>The <kbd>Calendar</kbd> key. Often labeled with an icon.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Calendar</code> (0x1008FF20)<br /><code
          >Qt::Key_Calendar</code
        >
        (0x010000E4)
      </td>
      <td><code>KEYCODE_CALENDAR</code> (208)</td>
    </tr>
    <tr>
      <td><code>"LaunchContacts"</code></td>
      <td>The <kbd>Contacts</kbd> key.</td>
      <td></td>
      <td></td>
      <td></td>
      <td><code>KEYCODE_CONTACTS</code> (207)</td>
    </tr>
    <tr>
      <td><code>"LaunchMail"</code></td>
      <td>The <kbd>Mail</kbd> key. Often labeled with an icon.</td>
      <td>
        <code>VK_LAUNCH_MAIL</code> (0xB4)<br /><code
          >APPCOMMAND_LAUNCH_MAIL</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_Mail</code> (0x1008FF19)<br /><code
          >Qt::Key_LaunchMail</code
        >
        (0x010000A0)
      </td>
      <td><code>KEYCODE_ENVELOPE</code> (65)</td>
    </tr>
    <tr>
      <td><code>"LaunchMediaPlayer"</code> [1]</td>
      <td>The <kbd>Media Player</kbd> key.</td>
      <td>
        <code>VK_LAUNCH_MEDIA_SELECT</code> (0xB5)<br /><code
          >APPCOMMAND_LAUNCH_MEDIA_SELECT</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_CD</code> (0x1008FF53)<br /><code>GDK_KEY_Video</code>
        (0x1008FF87)<br /><code>GDK_KEY_AudioMedia</code>
        (0x1008FF32)<br /><code>Qt::Key_LaunchMedia</code> (0x010000A1)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchMusicPlayer"</code> [5]</td>
      <td>The <kbd>Music Player</kbd> key. Often labeled with an icon.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Music</code> (0x1008FF92)<br /><code>Qt::Key_Music</code>
        (0x010000FD)
      </td>
      <td><code>KEYCODE_MUSIC</code> (209)</td>
    </tr>
    <tr>
      <td><code>"LaunchMyComputer"</code> [5]</td>
      <td>
        The <kbd>My Computer</kbd> key on Windows keyboards. This is often used
        as a generic application launcher key
        (<code>APPCOMMAND_LAUNCH_APP1</code>).
      </td>
      <td><code>APPCOMMAND_LAUNCH_APP1</code></td>
      <td></td>
      <td>
        <code>GDK_KEY_MyComputer</code> (0x1008FF33)<br /><code
          >GDK_KEY_Explorer</code
        >
        (0x1008FF5D)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchPhone"</code></td>
      <td>
        The <kbd>Phone</kbd> key. Opens the phone dialer application (if one is
        present).
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Phone</code> (0x1008FF6E)<br /><code>Qt::Key_Phone</code>
        (0x010000E3)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchScreenSaver"</code> [5]</td>
      <td>The <kbd>Screen Saver</kbd> key.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_ScreenSaver</code> (0x1008FF2D)<br /><code
          >Qt::Key_ScreenSaver</code
        >
        (0x010000BA)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchSpreadsheet"</code> [4]</td>
      <td>
        The <kbd>Spreadsheet</kbd> key. This key may be labeled with an icon.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Excel</code> (0x1008FF5C)<br /><code>Qt::Key_Excel</code>
        (0x010000D4)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchWebBrowser"</code> [4]</td>
      <td>
        The <kbd>Web Browser</kbd> key. This key is frequently labeled with an
        icon.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_WWW</code> (0x1008FF2E)<br /><code>Qt::Key_WWW</code>
        (0x010000BB)
      </td>
      <td><code>KEYCODE_EXPLORER</code> (64)</td>
    </tr>
    <tr>
      <td><code>"LaunchWebCam"</code> [5]</td>
      <td>The <kbd>WebCam</kbd> key. Opens the webcam application.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_WebCam</code> (0x1008FF8F)<br /><code
          >Qt::Key_WebCam</code
        >
        (0x010000FA)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchWordProcessor"</code> [5]</td>
      <td>
        The <kbd>Word Processor</kbd> key. This may be an icon of a specific
        word processor application, or a generic document icon.
      </td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Word</code> (0x1008FF89)<br /><code>Qt::Key_Word</code>
        (0x010000F4)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication1"</code> [2]</td>
      <td>The first generic application launcher button.</td>
      <td>
        <code>VK_LAUNCH_APP1</code> (0xB6)<br /><code
          >APPCOMMAND_LAUNCH_APP1</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_Launch0</code> (0x1008FF40)<br /><code
          >Qt::Key_Launch0</code
        >
        (0x010000A2)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication2"</code> [3]</td>
      <td>The second generic application launcher button.</td>
      <td>
        <code>VK_LAUNCH_APP2</code> (0xB7)<br /><code
          >APPCOMMAND_LAUNCH_APP2</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_Launch1</code> (0x1008FF41)<br /><code
          >Qt::Key_Launch1</code
        >
        (0x010000A3)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication3"</code></td>
      <td>The third generic application launcher button.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Launch2</code> (0x1008FF42)<br /><code
          >Qt::Key_Launch2</code
        >
        (0x010000A4)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication4"</code></td>
      <td>The fourth generic application launcher button.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Launch3</code> (0x1008FF43)<br /><code
          >Qt::Key_Launch3</code
        >
        (0x010000A5)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication5"</code></td>
      <td>The fifth generic application launcher button.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Launch4</code> (0x1008FF44)<br /><code
          >Qt::Key_Launch4</code
        >
        (0x010000A6)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication6"</code></td>
      <td>The sixth generic application launcher button.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Launch5</code> (0x1008FF45)<br /><code
          >Qt::Key_Launch5</code
        >
        (0x010000A7)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication7"</code></td>
      <td>The seventh generic application launcher button.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Launch6</code> (0x1008FF46)<br /><code
          >Qt::Key_Launch6</code
        >
        (0x010000A8)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication8"</code></td>
      <td>The eighth generic application launcher button.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Launch7</code> (0x1008FF47)<br /><code
          >Qt::Key_Launch7</code
        >
        (0x010000A9)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication9"</code></td>
      <td>The ninth generic application launcher button.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Launch8</code> (0x1008FF48)<br /><code
          >Qt::Key_Launch8</code
        >
        (0x010000AA)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication10"</code></td>
      <td>The 10th generic application launcher button.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_Launch9</code> (0x1008FF49)<br /><code
          >Qt::Key_Launch9</code
        >
        (0x010000AB)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication11"</code></td>
      <td>The 11th generic application launcher button.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_LaunchA</code> (0x1008FF4A)<br /><code
          >Qt::Key_LaunchA</code
        >
        (0x010000AC)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication12"</code></td>
      <td>The 12th generic application launcher button.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_LaunchB</code> (0x1008FF4B)<br /><code
          >Qt::Key_LaunchB</code
        >
        (0x010000AD)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication13"</code></td>
      <td>The 13th generic application launcher button.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_LaunchC</code> (0x1008FF4C)<br /><code
          >Qt::Key_LaunchC</code
        >
        (0x010000AE)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication14"</code></td>
      <td>The 14th generic application launcher button.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_LaunchD</code> (0x1008FF4D)<br /><code
          >Qt::Key_LaunchD</code
        >
        (0x010000AF)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication15"</code></td>
      <td>The 15th generic application launcher button.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_LaunchE</code> (0x1008FF4E)<br /><code
          >Qt::Key_LaunchE</code
        >
        (0x010000B0)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"LaunchApplication16"</code></td>
      <td>The 16th generic application launcher button.</td>
      <td></td>
      <td></td>
      <td>
        <code>GDK_KEY_LaunchF</code> (0x1008FF4F)<br /><code
          >Qt::Key_LaunchF</code
        >
        (0x010000B1)
      </td>
      <td></td>
    </tr>
  </tbody>
</table>

\[1] Legacy Edge and Firefox (36 and earlier) use `"SelectMedia"` instead of `"LaunchMediaPlayer"`. Firefox 37 through Firefox 48 use `"MediaSelect"`. Firefox 49 has been updated to match the latest specification, and to return `"LaunchMediaPlayer"`.

\[2] Google Chrome 57 and earlier returned `"LaunchMyComputer"` instead of `"LaunchApplication1"`. See [Chrome Bug 612743](https://crbug.com/612743) for more information.

\[3] Google Chrome 57 and earlier returned `"LaunchCalculator"` instead of `"LaunchApplication2"`. See [Chrome Bug 612743](https://crbug.com/612743) for more information.

\[4] Prior to Firefox 37, Firefox returned the key code `"LaunchApplication1"` instead of `"LaunchWebBrowser"` for the Web browser key.

\[5] Firefox introduced support for this key in Firefox 37. Prior to that, this key was reported as `"Unidentified"`.

## Browser control keys

Some keyboards include special keys for controlling Web browsers. Those keys follow.

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Value</th>
      <th rowspan="2" scope="col">Description</th>
      <th colspan="4" scope="col">Virtual Keycode</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"BrowserBack"</code></td>
      <td>
        Navigates to the previous content or page in the current Web view's
        history.
      </td>
      <td>
        <code>VK_BROWSER_BACK</code> (0xA6)<br /><code
          >APPCOMMAND_BROWSER_BACKWARD</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_Back</code> (0x1008FF26)<br /><code>Qt::Key_Back</code>
        (0x01000061)
      </td>
      <td><code>KEYCODE_BACK</code> (4)</td>
    </tr>
    <tr>
      <td><code>"BrowserFavorites"</code> [1]</td>
      <td>Opens the user's list of bookmarks/favorites.</td>
      <td>
        <code>VK_BROWSER_FAVORITES</code> (0xAB)<br /><code
          >APPCOMMAND_BROWSER_FAVORITES</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_Favorites</code> (0x1008FF30)<br /><code
          >GDK_KEY_MySites</code
        >
        (0x1008FF67)<br /><code>Qt::Favorites</code> (0x01000091)
      </td>
      <td><code>KEYCODE_BOOKMARK</code> (174)</td>
    </tr>
    <tr>
      <td><code>"BrowserForward"</code></td>
      <td>
        Navigates to the next content or page in the current Web view's history.
      </td>
      <td>
        <code>VK_BROWSER_FORWARD</code> (0xA7)<br /><code
          >APPCOMMAND_BROWSER_FORWARD</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_Forward</code> (0x1008FF27)<br /><code
          >Qt::Key_Forward</code
        >
        (0x01000062)
      </td>
      <td><code>KEYCODE_FORWARD</code> (125)</td>
    </tr>
    <tr>
      <td><code>"BrowserHome"</code></td>
      <td>Navigates to the user's preferred home page.</td>
      <td>
        <code>VK_BROWSER_HOME</code> (0xAC)<br /><code
          >APPCOMMAND_BROWSER_HOME</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_HomePage</code> (0x1008FF18)<br /><code
          >Qt::Key_HomePage</code
        >
        (0x01000090)
      </td>
      <td><code>KEYCODE_HOME</code> (3)</td>
    </tr>
    <tr>
      <td><code>"BrowserRefresh"</code></td>
      <td>Refreshes the current page or content.</td>
      <td>
        <code>VK_BROWSER_REFRESH</code> (0xA8)<br /><code
          >APPCOMMAND_BROWSER_REFRESH</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_Refresh</code> (0x1008FF29)<br /><code
          >GDK_KEY_Reload</code
        >
        (0x1008FF73)
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>"BrowserSearch"</code></td>
      <td>
        Activates the user's preferred search engine or the search interface
        within their browser.
      </td>
      <td>
        <code>VK_BROWSER_SEARCH</code> (0xAA)<br /><code
          >APPCOMMAND_BROWSER_SEARCH</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_Search</code> (0x1008FF1B)<br /><code
          >Qt::Key_Search</code
        >
        (0x01000092)
      </td>
      <td><code>KEYCODE_SEARCH</code> (84)</td>
    </tr>
    <tr>
      <td><code>"BrowserStop"</code></td>
      <td>Stops loading the currently displayed Web view or content.</td>
      <td>
        <code>VK_BROWSER_STOP</code> (0xA9)<br /><code
          >APPCOMMAND_BROWSER_STOP</code
        >
      </td>
      <td></td>
      <td>
        <code>GDK_KEY_Stop</code> (0x1008FF28)<br /><code>Qt::Key_Search</code>
        (0x01000063)
      </td>
      <td></td>
    </tr>
  </tbody>
</table>

\[1] Prior to Firefox 37, this key's value was reported as `"Unidentified"`.

## Numeric keypad keys

These keys are found on the keyboard's numeric keypad. However, not all are present on every keyboard. Although typical numeric keypads have numeric keys from <kbd>0</kbd> to <kbd>9</kbd> (encoded as `"0"` through `"9"`), some multimedia keyboards include additional number keys for higher numbers.

> [!NOTE]
> The <kbd>10</kbd> key, if present, generates events with the `key` value of `"0"`.

<table class="no-markdown">
  <thead>
    <tr>
      <th rowspan="2" scope="col"><code>KeyboardEvent.key</code> Value</th>
      <th rowspan="2" scope="col">Description</th>
      <th colspan="4" scope="col">Virtual Keycode</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Mac</th>
      <th scope="col">Linux</th>
      <th scope="col">Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"Decimal"</code> [1] {{deprecated_inline}}</td>
      <td>
        <p>
          The decimal point key (typically <kbd>.</kbd> or
          <kbd>,</kbd> depending on the region).
        </p>
        <p>
          In newer browsers, this value to be the character generated by the
          decimal key (one of those two characters). [1]
        </p>
      </td>
      <td><code>VK_DECIMAL</code> (0x6E)</td>
      <td><code>kVK_ANSI_KeypadDecimal</code> (0x41)</td>
      <td><code>GDK_KEY_KP_Decimal</code> (0xFFAE)<br /> </td>
      <td><code>KEYCODE_NUMPAD_DOT</code> (158)</td>
    </tr>
    <tr>
      <td><code>"Key11"</code></td>
      <td>The <kbd>11</kbd> key found on certain media numeric keypads.</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Key12"</code></td>
      <td>The <kbd>12</kbd> key found on certain media numeric keypads.</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><code>"Multiply"</code> [1] {{deprecated_inline}}</td>
      <td>The numeric keypad's multiplication key, <kbd>*</kbd>.</td>
      <td><code>VK_MULTIPLY</code> (0x6A)</td>
      <td><code>kVK_ANSI_KeypadMultiply</code> (0x43)</td>
      <td>
        <code>GDK_KEY_KP_Multiply</code> (0xFFAA)<br /><code
          >Qt::Key_Multiply</code
        >
        (0x0D7)
      </td>
      <td><code>KEYCODE_NUMPAD_MULTIPLY</code> (155)</td>
    </tr>
    <tr>
      <td><code>"Add"</code> [1] {{deprecated_inline}}</td>
      <td>The numeric keypad's addition key, <kbd>+</kbd>.</td>
      <td><code>VK_ADD</code> (0x6B)</td>
      <td><code>kVK_ANSI_KeypadPlus</code> (0x45)</td>
      <td><code>GDK_KEY_KP_Add</code> (0xFFAB)</td>
      <td><code>KEYCODE_NUMPAD_ADD</code> (157)</td>
    </tr>
    <tr>
      <td><code>"Clear"</code></td>
      <td>The numeric keypad's <kbd>Clear</kbd> key.</td>
      <td></td>
      <td><code>kVK_ANSI_KeypadClear</code> (0x47)</td>
      <td>
        <code>GDK_KEY_Clear</code> (0xFF0B)<br /><code>Qt::Key_Clear</code>
        (0x0100000B)
      </td>
      <td><code>KEYCODE_CLEAR</code> (28)</td>
    </tr>
    <tr>
      <td><code>"Divide"</code> [1] {{deprecated_inline}}</td>
      <td>The numeric keypad's division key, <kbd>/</kbd>.</td>
      <td><code>VK_DIVIDE</code> (0x6F)</td>
      <td><code>kVK_ANSI_KeypadDivide</code> (0x4B)</td>
      <td>
        <code>GDK_KEY_KP_Divide</code> (0xFFAF)<br /><code>Qt::Key_Slash</code>
        (0x2F)
      </td>
      <td><code>KEYCODE_NUMPAD_DIVIDE</code> (154)</td>
    </tr>
    <tr>
      <td><code>"Subtract"</code> [1] {{deprecated_inline}}</td>
      <td>The numeric keypad's subtraction key, <kbd>-</kbd>.</td>
      <td><code>VK_SUBTRACT</code> (0x6D)</td>
      <td><code>kVK_ANSI_KeypadMinus</code> (0x4E)</td>
      <td><code>GDK_KEY_KP_Subtract</code> (0xFFAD)</td>
      <td><code>KEYCODE_NUMPAD_SUBTRACT</code> (156)</td>
    </tr>
    <tr>
      <td><code>"Separator"</code> [1]</td>
      <td>
        <p>The numeric keypad's places separator character.</p>
        <p>
          (In the United States this is a comma, but elsewhere it is frequently
          a period.)
        </p>
      </td>
      <td><code>VK_SEPARATOR</code> (0x6C)</td>
      <td><code>kVK_JIS_KeypadComma</code> (0x5F)</td>
      <td><code>GDK_KEY_KP_Separator</code> (0xFFAC)<br /> </td>
      <td><code>KEYCODE_NUMPAD_COMMA</code> (159)</td>
    </tr>
    <tr>
      <td><code>"0"</code> through <code>"9"</code></td>
      <td>The actual digit keys on the numeric keypad.</td>
      <td><code>VK_NUMPAD0</code> (0x60) - <code>VK_NUMPAD9</code> (0x69)</td>
      <td><code>kVK_Keypad0</code> (0x52) - <code>kVK_Keypad9</code> (0x5C)</td>
      <td>
        <code>GDK_KEY_KP_0</code> (0xFFB0) - <code>GDK_KEY_KP_9</code> (0xFFB9)
      </td>
      <td>
        <code>KEYCODE_NUMPAD_0</code> (144) -
        <code>KEYCODE_NUMPAD_9</code> (153)
      </td>
    </tr>
  </tbody>
</table>

\[1] While older browsers used words like `"Add"`, `"Decimal"`, `"Multiply"`, and so forth modern browsers identify these using the actual character (`"+"`, `"."`, `"*"`, and so forth).
