---
title: Code values for keyboard events
slug: Web/API/UI_Events/Keyboard_event_code_values
page-type: guide
---

{{DefaultAPISidebar("UI Events")}}

The following tables show what code values are used for each native scancode or virtual keycode on major platforms. The reason is that some browsers choose to interpret physical keys differently, there are some differences in which keys map to which codes. These tables show those variations when known.

## Code values on Windows

This table shows the Windows scan codes representing keys and the `KeyboardEvent.code` values which correspond to those hardware keys. Only keys which generate scan codes on Windows are listed.

In the cells, "(❌ Missing)" means that this code value cannot be detected on this browser;
"(⚠️ Not the same on xyz)" means that this string represents a different code value on the browser xyz and that special care has to be done
when using it.

| Code                                                               | Firefox                                              | Chrome                                                                                   |
| ------------------------------------------------------------------ | ---------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `0x0000`                                                           | `"Unidentified"`                                     | `""`                                                                                     |
| `0x0001`                                                           | `"Escape"`                                           | `"Escape"`                                                                               |
| `0x0002`                                                           | `"Digit1"`                                           | `"Digit1"`                                                                               |
| `0x0003`                                                           | `"Digit2"`                                           | `"Digit2"`                                                                               |
| `0x0004`                                                           | `"Digit3"`                                           | `"Digit3"`                                                                               |
| `0x0005`                                                           | `"Digit4"`                                           | `"Digit4"`                                                                               |
| `0x0006`                                                           | `"Digit5"`                                           | `"Digit5"`                                                                               |
| `0x0007`                                                           | `"Digit6"`                                           | `"Digit6"`                                                                               |
| `0x0008`                                                           | `"Digit7"`                                           | `"Digit7"`                                                                               |
| `0x0009`                                                           | `"Digit8"`                                           | `"Digit8"`                                                                               |
| `0x000A`                                                           | `"Digit9"`                                           | `"Digit9"`                                                                               |
| `0x000B`                                                           | `"Digit0"`                                           | `"Digit0"`                                                                               |
| `0x000C`                                                           | `"Minus"`                                            | `"Minus"`                                                                                |
| `0x000D`                                                           | `"Equal"`                                            | `"Equal"`                                                                                |
| `0x000E`                                                           | `"Backspace"`                                        | `"Backspace"`                                                                            |
| `0x000F`                                                           | `"Tab"`                                              | `"Tab"`                                                                                  |
| `0x0010`                                                           | `"KeyQ"`                                             | `"KeyQ"`                                                                                 |
| `0x0011`                                                           | `"KeyW"`                                             | `"KeyW"`                                                                                 |
| `0x0012`                                                           | `"KeyE"`                                             | `"KeyE"`                                                                                 |
| `0x0013`                                                           | `"KeyR"`                                             | `"KeyR"`                                                                                 |
| `0x0014`                                                           | `"KeyT"`                                             | `"KeyT"`                                                                                 |
| `0x0015`                                                           | `"KeyY"`                                             | `"KeyY"`                                                                                 |
| `0x0016`                                                           | `"KeyU"`                                             | `"KeyU"`                                                                                 |
| `0x0017`                                                           | `"KeyI"`                                             | `"KeyI"`                                                                                 |
| `0x0018`                                                           | `"KeyO"`                                             | `"KeyO"`                                                                                 |
| `0x0019`                                                           | `"KeyP"`                                             | `"KeyP"`                                                                                 |
| `0x001A`                                                           | `"BracketLeft"`                                      | `"BracketLeft"`                                                                          |
| `0x001B`                                                           | `"BracketRight"`                                     | `"BracketRight"`                                                                         |
| `0x001C`                                                           | `"Enter"`                                            | `"Enter"`                                                                                |
| `0x001D`                                                           | `"ControlLeft"`                                      | `"ControlLeft"`                                                                          |
| `0x001E`                                                           | `"KeyA"`                                             | `"KeyA"`                                                                                 |
| `0x001F`                                                           | `"KeyS"`                                             | `"KeyS"`                                                                                 |
| `0x0020`                                                           | `"KeyD"`                                             | `"KeyD"`                                                                                 |
| `0x0021`                                                           | `"KeyF"`                                             | `"KeyF"`                                                                                 |
| `0x0022`                                                           | `"KeyG"`                                             | `"KeyG"`                                                                                 |
| `0x0023`                                                           | `"KeyH"`                                             | `"KeyH"`                                                                                 |
| `0x0024`                                                           | `"KeyJ"`                                             | `"KeyJ"`                                                                                 |
| `0x0025`                                                           | `"KeyK"`                                             | `"KeyK"`                                                                                 |
| `0x0026`                                                           | `"KeyL"`                                             | `"KeyL"`                                                                                 |
| `0x0027`                                                           | `"Semicolon"`                                        | `"Semicolon"`                                                                            |
| `0x0028`                                                           | `"Quote"`                                            | `"Quote"`                                                                                |
| `0x0029`                                                           | `"Backquote"`                                        | `"Backquote"`                                                                            |
| `0x002A`                                                           | `"ShiftLeft"`                                        | `"ShiftLeft"`                                                                            |
| `0x002B`                                                           | `"Backslash"`                                        | `"Backslash"`                                                                            |
| `0x002C`                                                           | `"KeyZ"`                                             | `"KeyZ"`                                                                                 |
| `0x002D`                                                           | `"KeyX"`                                             | `"KeyX"`                                                                                 |
| `0x002E`                                                           | `"KeyC"`                                             | `"KeyC"`                                                                                 |
| `0x002F`                                                           | `"KeyV"`                                             | `"KeyV"`                                                                                 |
| `0x0030`                                                           | `"KeyB"`                                             | `"KeyB"`                                                                                 |
| `0x0031`                                                           | `"KeyN"`                                             | `"KeyN"`                                                                                 |
| `0x0032`                                                           | `"KeyM"`                                             | `"KeyM"`                                                                                 |
| `0x0033`                                                           | `"Comma"`                                            | `"Comma"`                                                                                |
| `0x0034`                                                           | `"Period"`                                           | `"Period"`                                                                               |
| `0x0035`                                                           | `"Slash"`                                            | `"Slash"`                                                                                |
| `0x0036`                                                           | `"ShiftRight"`                                       | `"ShiftRight"`                                                                           |
| `0x0037`                                                           | `"NumpadMultiply"`                                   | `"NumpadMultiply"`                                                                       |
| `0x0038`                                                           | `"AltLeft"`                                          | `"AltLeft"`                                                                              |
| `0x0039`                                                           | `"Space"`                                            | `"Space"`                                                                                |
| `0x003A`                                                           | `"CapsLock"`                                         | `"CapsLock"`                                                                             |
| `0x003B`                                                           | `"F1"`                                               | `"F1"`                                                                                   |
| `0x003C`                                                           | `"F2"`                                               | `"F2"`                                                                                   |
| `0x003D`                                                           | `"F3"`                                               | `"F3"`                                                                                   |
| `0x003E`                                                           | `"F4"`                                               | `"F4"`                                                                                   |
| `0x003F`                                                           | `"F5"`                                               | `"F5"`                                                                                   |
| `0x0040`                                                           | `"F6"`                                               | `"F6"`                                                                                   |
| `0x0041`                                                           | `"F7"`                                               | `"F7"`                                                                                   |
| `0x0042`                                                           | `"F8"`                                               | `"F8"`                                                                                   |
| `0x0043`                                                           | `"F9"`                                               | `"F9"`                                                                                   |
| `0x0044`                                                           | `"F10"`                                              | `"F10"`                                                                                  |
| `0x0045`                                                           | `"Pause"`                                            | `"Pause"`                                                                                |
| `0x0046`                                                           | `"ScrollLock"`                                       | `"ScrollLock"`                                                                           |
| `0x0047`                                                           | `"Numpad7"`                                          | `"Numpad7"`                                                                              |
| `0x0048`                                                           | `"Numpad8"`                                          | `"Numpad8"`                                                                              |
| `0x0049`                                                           | `"Numpad9"`                                          | `"Numpad9"`                                                                              |
| `0x004A`                                                           | `"NumpadSubtract"`                                   | `"NumpadSubtract"`                                                                       |
| `0x004B`                                                           | `"Numpad4"`                                          | `"Numpad4"`                                                                              |
| `0x004C`                                                           | `"Numpad5"`                                          | `"Numpad5"`                                                                              |
| `0x004D`                                                           | `"Numpad6"`                                          | `"Numpad6"`                                                                              |
| `0x004E`                                                           | `"NumpadAdd"`                                        | `"NumpadAdd"`                                                                            |
| `0x004F`                                                           | `"Numpad1"`                                          | `"Numpad1"`                                                                              |
| `0x0050`                                                           | `"Numpad2"`                                          | `"Numpad2"`                                                                              |
| `0x0051`                                                           | `"Numpad3"`                                          | `"Numpad3"`                                                                              |
| `0x0052`                                                           | `"Numpad0"`                                          | `"Numpad0"`                                                                              |
| `0x0053`                                                           | `"NumpadDecimal"`                                    | `"NumpadDecimal"`                                                                        |
| `0x0054`                                                           | `"PrintScreen"` (⚠️ Not the same on Chrome)          | `""` (❌ Missing)                                                                        |
| `0x0055`                                                           | `"Unidentified"`                                     | `""`                                                                                     |
| `0x0056`                                                           | `"IntlBackslash"`                                    | `"IntlBackslash"`                                                                        |
| `0x0057`                                                           | `"F11"`                                              | `"F11"`                                                                                  |
| `0x0058`                                                           | `"F12"`                                              | `"F12"`                                                                                  |
| `0x0059`                                                           | `"NumpadEqual"`                                      | `"NumpadEqual"` (was `""` prior to Chrome 48)                                            |
| `0x005A`                                                           | `"Unidentified"`                                     | `""`                                                                                     |
| `0x005B`                                                           | `"Unidentified"`                                     | `""` (was `"F13"` prior to Chrome 48)                                                    |
| `0x005C`                                                           | `"Unidentified"`                                     | `""` (was `"F14"` prior to Chrome 48)                                                    |
| `0x005D`                                                           | `"Unidentified"`                                     | `""` (was `"F15"` prior to Chrome 48)                                                    |
| `0x005E`                                                           | `"Unidentified"`                                     | `""`                                                                                     |
| `0x005F`                                                           | `"Unidentified"`                                     | `""`                                                                                     |
| `0x0060`                                                           | `"Unidentified"`                                     | `""`                                                                                     |
| `0x0061`                                                           | `"Unidentified"`                                     | `""`                                                                                     |
| `0x0062`                                                           | `"Unidentified"`                                     | `""`                                                                                     |
| `0x0063`                                                           | `"Unidentified"`                                     | `""` (was `"F16"` prior to Chrome 48)                                                    |
| `0x0064`                                                           | `"F13"`                                              | `"F13"` (was `"F17"` prior to Chrome 48)                                                 |
| `0x0065`                                                           | `"F14"`                                              | `"F14"` (was `"F18"` prior to Chrome 48)                                                 |
| `0x0066`                                                           | `"F15"`                                              | `"F15"` (was `"F19"` prior to Chrome 48)                                                 |
| `0x0067`                                                           | `"F16"`                                              | `"F16"` (was `"F20"` prior to Chrome 48)                                                 |
| `0x0068`                                                           | `"F17"`                                              | `"F17"` (was `"F21"` prior to Chrome 48)                                                 |
| `0x0069`                                                           | `"F18"`                                              | `"F18"` (was `"F22"` prior to Chrome 48)                                                 |
| `0x006A`                                                           | `"F19"`                                              | `"F19"` (was `"F23"` prior to Chrome 48)                                                 |
| `0x006B`                                                           | `"F20"`                                              | `"F20"` (was `"F24"` prior to Chrome 48)                                                 |
| `0x006C`                                                           | `"F21"`                                              | `"F21"` (was `""` prior to Chrome 48)                                                    |
| `0x006D`                                                           | `"F22"`                                              | `"F22"` (was `""` prior to Chrome 48)                                                    |
| `0x006E`                                                           | `"F23"`                                              | `"F23"` (was `""` prior to Chrome 48)                                                    |
| `0x006F`                                                           | `"Unidentified"`                                     | `""`                                                                                     |
| `0x0070`                                                           | `"KanaMode"`                                         | `"KanaMode"` (was `""` prior to Chrome 48)                                               |
| `0x0071` (<kbd>Hanja</kbd> key without Korean keyboard layout)     | `"Lang2"`                                            | `"Lang2"` (was `""` prior to Chrome 48)                                                  |
| `0x0072` (<kbd>Han/Yeong</kbd> key without Korean keyboard layout) | `"Lang1"`                                            | `"Lang1"` (was `""` prior to Chrome 48)                                                  |
| `0x0073`                                                           | `"IntlRo"`                                           | `"IntlRo"` (was `""` prior to Chrome 48)                                                 |
| `0x0074`, `0x0075`                                                 | `"Unidentified"`                                     | `""`                                                                                     |
| `0x0076`                                                           | `"F24"`                                              | `"F24"` (was `""` prior to Chrome 48)                                                    |
| `0x0077`                                                           | `"Unidentified"` (❌ Missing)                        | `"Lang4"` (was `""` prior to Chrome 48) (⚠️ Not the same on Firefox)                     |
| `0x0078`                                                           | `"Unidentified"` (❌ Missing)                        | `"Lang3"` (was `""` prior to Chrome 48) (⚠️ Not the same on Firefox)                     |
| `0x0079`                                                           | `"Convert"`                                          | `"Convert"` (was `""` prior to Chrome 48)                                                |
| `0x007A`                                                           | `"Unidentified"`                                     | `""`                                                                                     |
| `0x007B`                                                           | `"NonConvert"`                                       | `"NonConvert"` (was `""` prior to Chrome 48)                                             |
| `0x007C`                                                           | `"Unidentified"`                                     | `""`                                                                                     |
| `0x007D`                                                           | `"IntlYen"`                                          | `"IntlYen"`                                                                              |
| `0x007E`                                                           | `"NumpadComma"`                                      | `"NumpadComma"` (was `""` prior to Chrome 48)                                            |
| `0x007F`                                                           | `"Unidentified"`                                     | `""`                                                                                     |
| `0xE000` ～ `0xE007`                                               | `"Unidentified"`                                     | `""`                                                                                     |
| `0xE008`                                                           | `"Unidentified"` (❌ Missing)                        | `"Undo"` (⚠️ Not the same on Firefox)                                                    |
| `0xE009`                                                           | `"Unidentified"`                                     | `""`                                                                                     |
| `0xE00A`                                                           | `""` (❌ Missing)                                    | `"Paste"` (⚠️ Not the same on Firefox)                                                   |
| `0xE00B` ～ `0xE00F`                                               | `""`                                                 | `""`                                                                                     |
| `0xE010`                                                           | `"MediaTrackPrevious"`                               | `"MediaTrackPrevious"`                                                                   |
| `0xE011` ～ `0xE016`                                               | `""`                                                 | `""`                                                                                     |
| `0xE017`                                                           | `"Unidentified"` (❌ Missing)                        | `"Cut"` (⚠️ Not the same on Firefox)                                                     |
| `0xE018`                                                           | `"Unidentified"` (❌ Missing)                        | `"Copy"` (⚠️ Not the same on Firefox)                                                    |
| `0xE019`                                                           | `"MediaTrackNext"`                                   | `"MediaTrackNext"`                                                                       |
| `0xE01A, 0xE01B`                                                   | `"Unidentified"`                                     | `""`                                                                                     |
| `0xE01C`                                                           | `"NumpadEnter"`                                      | `"NumpadEnter"`                                                                          |
| `0xE01D`                                                           | `"ControlRight"`                                     | `"ControlRight"`                                                                         |
| `0xE01E`                                                           | `"Unidentified"`                                     | `""` (was `"LaunchMail"` prior to Chrome 48)                                             |
| `0xE01F`                                                           | `"Unidentified"`                                     | `""`                                                                                     |
| `0xE020`                                                           | `"AudioVolumeMute"`                                  | `"AudioVolumeMute"`                                                                      |
| `0xE021`                                                           | `"LaunchApp2"`                                       | `"LaunchApp2"` (was `""` prior to Chrome 48)                                             |
| `0xE022`                                                           | `"MediaPlayPause"`                                   | `"MediaPlayPause"`                                                                       |
| `0xE023`                                                           | `"Unidentified"`                                     | `""`                                                                                     |
| `0xE024`                                                           | `"MediaStop"`                                        | `"MediaStop"`                                                                            |
| `0xE025` ～ `0xE02B`                                               | `"Unidentified"`                                     | `""`                                                                                     |
| `0xE02C`                                                           | `"Unidentified"` (❌ Missing)                        | `"Eject"` (⚠️ Not the same on Firefox)                                                   |
| `0xE02D`                                                           | `"Unidentified"`                                     | `""`                                                                                     |
| `0xE02E`                                                           | `"VolumeDown"` (⚠️ Not the same on Chrome)           | `"AudioVolumeDown"` (was `"VolumeDown"` prior to Chrome 52) (⚠️ Not the same on Firefox) |
| `0xE02F`                                                           | `"Unidentified"`                                     | `""`                                                                                     |
| `0xE030`                                                           | `"VolumeUp"` (⚠️ Not the same on Chrome)             | `"AudioVolumeUp"` (was `"VolumeUp"` prior to Chrome 52) (⚠️ Not the same on Firefox)     |
| `0xE031`                                                           | `"Unidentified"`                                     | `""`                                                                                     |
| `0xE032`                                                           | `"BrowserHome"`                                      | `"BrowserHome"`                                                                          |
| `0xE033, 0xE034`                                                   | `"Unidentified"`                                     | `""`                                                                                     |
| `0xE035`                                                           | `"NumpadDivide"`                                     | `"NumpadDivide"`                                                                         |
| `0xE036`                                                           | `"Unidentified"`                                     | `""`                                                                                     |
| `0xE037`                                                           | `"PrintScreen"`                                      | `"PrintScreen"`                                                                          |
| `0xE038`                                                           | `"AltRight"`                                         | `"AltRight"`                                                                             |
| `0xE039, 0xE03A`                                                   | `"Unidentified"`                                     | `""`                                                                                     |
| `0xE03B`                                                           | `"Unidentified"` (❌ Missing)                        | `"Help"` (⚠️ Not the same on Firefox)                                                    |
| `0xE03C` ～ `0xE044`                                               | `"Unidentified"`                                     | `""`                                                                                     |
| `0xE045`                                                           | `"NumLock"`                                          | `"NumLock"`                                                                              |
| `0xE046` (<kbd>Ctrl</kbd> + <kbd>Pause</kbd>)                      | `"Pause"`                                            | `"Pause"`                                                                                |
| `0xE047`                                                           | `"Home"`                                             | `"Home"`                                                                                 |
| `0xE048`                                                           | `"ArrowUp"`                                          | `"ArrowUp"`                                                                              |
| `0xE049`                                                           | `"PageUp"`                                           | `"PageUp"`                                                                               |
| `0xE04A`                                                           | `"Unidentified"`                                     | `""`                                                                                     |
| `0xE04B`                                                           | `"ArrowLeft"`                                        | `"ArrowLeft"`                                                                            |
| `0xE04C`                                                           | `"Unidentified"`                                     | `""`                                                                                     |
| `0xE04D`                                                           | `"ArrowRight"`                                       | `"ArrowRight"`                                                                           |
| `0xE04E`                                                           | `"Unidentified"`                                     | `""`                                                                                     |
| `0xE04F`                                                           | `"End"`                                              | `"End"`                                                                                  |
| `0xE050`                                                           | `"ArrowDown"`                                        | `"ArrowDown"`                                                                            |
| `0xE051`                                                           | `"PageDown"`                                         | `"PageDown"`                                                                             |
| `0xE052`                                                           | `"Insert"`                                           | `"Insert"`                                                                               |
| `0xE053`                                                           | `"Delete"`                                           | `"Delete"`                                                                               |
| `0xE054` ～ `0xE05A`                                               | `"Unidentified"`                                     | `""`                                                                                     |
| `0xE05B`                                                           | `"MetaLeft"` (was `"OSLeft"` prior to Firefox 118)   | `"MetaLeft"` (was `"OSLeft"` prior to Chrome 52)                                         |
| `0xE05C`                                                           | `"MetaRight"` (was `"OSRight"` prior to Firefox 118) | `"MetaRight"` (was `"OSRight"` prior to Chrome 52)                                       |
| `0xE05D`                                                           | `"ContextMenu"`                                      | `"ContextMenu"`                                                                          |
| `0xE05E`                                                           | `"Power"`                                            | `"Power"` (was `""` prior to Chrome 48)                                                  |
| `0xE05F`                                                           | `"Unidentified"` (❌ Missing)                        | `"Sleep"` (was `""` prior to Chrome 48) (⚠️ Not the same on Firefox)                     |
| `0xE060` ～ `0xE062`                                               | `"Unidentified"`                                     | `""`                                                                                     |
| `0xE063`                                                           | `"Unidentified"` (❌ Missing)                        | `"WakeUp"` (was `""` prior to Chrome 48) (⚠️ Not the same on Firefox)                    |
| `0xE064`                                                           | `"Unidentified"`                                     | `""`                                                                                     |
| `0xE065`                                                           | `"BrowserSearch"`                                    | `"BrowserSearch"`                                                                        |
| `0xE066`                                                           | `"BrowserFavorites"`                                 | `"BrowserFavorites"`                                                                     |
| `0xE067`                                                           | `"BrowserRefresh"`                                   | `"BrowserRefresh"`                                                                       |
| `0xE068`                                                           | `"BrowserStop"`                                      | `"BrowserStop"`                                                                          |
| `0xE069`                                                           | `"BrowserForward"`                                   | `"BrowserForward"`                                                                       |
| `0xE06A`                                                           | `"BrowserBack"`                                      | `"BrowserBack"`                                                                          |
| `0xE06B`                                                           | `"LaunchApp1"`                                       | `"LaunchApp1"` (was `""` prior to Chrome 48)                                             |
| `0xE06C`                                                           | `"LaunchMail"`                                       | `"LaunchMail"` (was `""` prior to Chrome 48)                                             |
| `0xE06D`                                                           | `"MediaSelect"`                                      | `"MediaSelect"` (was `""` prior to Chrome 48)                                            |
| `0xE06E` ～ `0xE0F0`                                               | `"Unidentified"`                                     | `""`                                                                                     |
| `0xE0F1` (<kbd>Hanja</kbd> key with Korean keyboard layout)        | `"Lang2"` (⚠️ Not the same on Chrome)                | `""` (❌ Missing)                                                                        |
| `0xE0F2` (<kbd>Han/Yeong</kbd> key with Korean keyboard layout)    | `"Lang1"` (⚠️ Not the same on Chrome)                | `""` (❌ Missing)                                                                        |

## Code values on Mac

On macOS, it's hard to get scancode or something which can distinguish a physical key from a key event.
Therefore, Firefox always maps `code` value from the virtual keycode.

In the cells,

- "(❌ Missing)" means that this code value cannot be detected on this browser;
- "(⚠️ Not the same on xyz)" means that this string represents a different code value on the browser xyz and that special care has to be done
  when using it;
- "(⚠️ Same string for `0xab`)" means that you cannot distinguished this key with the one matching `0xab`;
- "(⚠️ No events fired actually)" means that even if technically you have a specific string for this code, no event will be dispatched;

| Virtual keycode                         | Firefox                                                                   | Chromium                                                                                   |
| --------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `kVK_ANSI_A (0x00)`                     | `"KeyA"`                                                                  | `"KeyA"`                                                                                   |
| `kVK_ANSI_S (0x01)`                     | `"KeyS"`                                                                  | `"KeyS"`                                                                                   |
| `kVK_ANSI_D (0x02)`                     | `"KeyD"`                                                                  | `"KeyD"`                                                                                   |
| `kVK_ANSI_F (0x03)`                     | `"KeyF"`                                                                  | `"KeyF"`                                                                                   |
| `kVK_ANSI_H (0x04)`                     | `"KeyH"`                                                                  | `"KeyH"`                                                                                   |
| `kVK_ANSI_G (0x05)`                     | `"KeyG"`                                                                  | `"KeyG"`                                                                                   |
| `kVK_ANSI_Z (0x06)`                     | `"KeyZ"`                                                                  | `"KeyZ"`                                                                                   |
| `kVK_ANSI_X (0x07)`                     | `"KeyX"`                                                                  | `"KeyX"`                                                                                   |
| `kVK_ANSI_C (0x08)`                     | `"KeyC"`                                                                  | `"KeyC"`                                                                                   |
| `kVK_ANSI_V (0x09)`                     | `"KeyV"`                                                                  | `"KeyV"`                                                                                   |
| `kVK_ISO_Section (0x0A)`                | `"IntlBackslash"`                                                         | `"IntlBackslash"`                                                                          |
| `kVK_ANSI_B (0x0B)`                     | `"KeyB"`                                                                  | `"KeyB"`                                                                                   |
| `kVK_ANSI_Q (0x0C)`                     | `"KeyQ"`                                                                  | `"KeyQ"`                                                                                   |
| `kVK_ANSI_W (0x0D)`                     | `"KeyW"`                                                                  | `"KeyW"`                                                                                   |
| `kVK_ANSI_E (0x0E)`                     | `"KeyE"`                                                                  | `"KeyE"`                                                                                   |
| `kVK_ANSI_R (0x0F)`                     | `"KeyR"`                                                                  | `"KeyR"`                                                                                   |
| `kVK_ANSI_Y (0x10)`                     | `"KeyY"`                                                                  | `"KeyY"`                                                                                   |
| `kVK_ANSI_T (0x11)`                     | `"KeyT"`                                                                  | `"KeyT"`                                                                                   |
| `kVK_ANSI_1 (0x12)`                     | `"Digit1"`                                                                | `"Digit1"`                                                                                 |
| `kVK_ANSI_2 (0x13)`                     | `"Digit2"`                                                                | `"Digit2"`                                                                                 |
| `kVK_ANSI_3 (0x14)`                     | `"Digit3"`                                                                | `"Digit3"`                                                                                 |
| `kVK_ANSI_4 (0x15)`                     | `"Digit4"`                                                                | `"Digit4"`                                                                                 |
| `kVK_ANSI_6 (0x16)`                     | `"Digit6"`                                                                | `"Digit6"`                                                                                 |
| `kVK_ANSI_5 (0x17)`                     | `"Digit5"`                                                                | `"Digit5"`                                                                                 |
| `kVK_ANSI_Equal (0x18)`                 | `"Equal"`                                                                 | `"Equal"`                                                                                  |
| `kVK_ANSI_9 (0x19)`                     | `"Digit9"`                                                                | `"Digit9"`                                                                                 |
| `kVK_ANSI_7 (0x1A)`                     | `"Digit7"`                                                                | `"Digit7"`                                                                                 |
| `kVK_ANSI_Minus (0x1B)`                 | `"Minus"`                                                                 | `"Minus"`                                                                                  |
| `kVK_ANSI_8 (0x1C)`                     | `"Digit8"`                                                                | `"Digit8"`                                                                                 |
| `kVK_ANSI_0 (0x1D)`                     | `"Digit0"`                                                                | `"Digit0"`                                                                                 |
| `kVK_ANSI_RightBracket (0x1E)`          | `"BracketRight"`                                                          | `"BracketRight"`                                                                           |
| `kVK_ANSI_O (0x1F)`                     | `"KeyO"`                                                                  | `"KeyO"`                                                                                   |
| `kVK_ANSI_U (0x20)`                     | `"KeyU"`                                                                  | `"KeyU"`                                                                                   |
| `kVK_ANSI_LeftBracket (0x21)`           | `"BracketLeft"`                                                           | `"BracketLeft"`                                                                            |
| `kVK_ANSI_I (0x22)`                     | `"KeyI"`                                                                  | `"KeyI"`                                                                                   |
| `kVK_ANSI_P (0x23)`                     | `"KeyP"`                                                                  | `"KeyP"`                                                                                   |
| `kVK_Return (0x24)`                     | `"Enter"`                                                                 | `"Enter"`                                                                                  |
| `kVK_ANSI_L (0x25)`                     | `"KeyL"`                                                                  | `"KeyL"`                                                                                   |
| `kVK_ANSI_J (0x26)`                     | `"KeyJ"`                                                                  | `"KeyJ"`                                                                                   |
| `kVK_ANSI_Quote (0x27)`                 | `"Quote"`                                                                 | `"Quote"`                                                                                  |
| `kVK_ANSI_K (0x28)`                     | `"KeyK"`                                                                  | `"KeyK"`                                                                                   |
| `kVK_ANSI_Semicolon (0x29)`             | `"Semicolon"`                                                             | `"Semicolon"`                                                                              |
| `kVK_ANSI_Backslash (0x2A)`             | `"Backslash"`                                                             | `"Backslash"`                                                                              |
| `kVK_ANSI_Comma (0x2B)`                 | `"Comma"`                                                                 | `"Comma"`                                                                                  |
| `kVK_ANSI_Slash (0x2C)`                 | `"Slash"`                                                                 | `"Slash"`                                                                                  |
| `kVK_ANSI_N (0x2D)`                     | `"KeyN"`                                                                  | `"KeyN"`                                                                                   |
| `kVK_ANSI_M (0x2E)`                     | `"KeyM"`                                                                  | `"KeyM"`                                                                                   |
| `kVK_ANSI_Period (0x2F)`                | `"Period"`                                                                | `"Period"`                                                                                 |
| `kVK_Tab (0x30)`                        | `"Tab"`                                                                   | `"Tab"`                                                                                    |
| `kVK_Space (0x31)`                      | `"Space"`                                                                 | `"Space"`                                                                                  |
| `kVK_ANSI_Grave (0x32)`                 | `"Backquote"`                                                             | `"Backquote"`                                                                              |
| `kVK_Delete (0x33)`                     | `"Backspace"`                                                             | `"Backspace"`                                                                              |
| Enter key on keypad of PowerBook (0x34) | `"NumpadEnter"` (⚠️ Same string for `0x4C`) (⚠️ Not the same on Chromium) | `""` (❌ Missing)                                                                          |
| `kVK_Escape (0x35)`                     | `"Escape"`                                                                | `"Escape"`                                                                                 |
| right-command key (0x36)                | `"MetaRight"` (was `"OSRight"` prior to Firefox 118)                      | `"MetaRight"` (was `"OSRight"` prior to Chromium 52)                                       |
| `kVK_Command (0x37)`                    | `"MetaLeft"` (was `"OSLeft"` prior to Firefox 118)                        | `"MetaLeft"` (was `"OSLeft"` prior to Chromium 52)                                         |
| `kVK_Shift (0x38)`                      | `"ShiftLeft"`                                                             | `"ShiftLeft"`                                                                              |
| `kVK_CapsLock (0x39)`                   | `"CapsLock"`                                                              | `"CapsLock"`                                                                               |
| `kVK_Option (0x3A)`                     | `"AltLeft"`                                                               | `"AltLeft"`                                                                                |
| `kVK_Control (0x3B)`                    | `"ControlLeft"`                                                           | `"ControlLeft"`                                                                            |
| `kVK_RightShift (0x3C)`                 | `"ShiftRight"`                                                            | `"ShiftRight"`                                                                             |
| `kVK_RightOption (0x3D)`                | `"AltRight"`                                                              | `"AltRight"`                                                                               |
| `kVK_RightControl (0x3E)`               | `"ControlRight"`                                                          | `"ControlRight"`                                                                           |
| `kVK_Function (0x3F)`                   | `"Fn"` (⚠️ No events fired actually)                                      | `""` (❌ Missing) (⚠️ No events fired actually)                                            |
| `kVK_F17 (0x40)`                        | `"F17"`                                                                   | `"F17"`                                                                                    |
| `kVK_ANSI_KeypadDecimal (0x41)`         | `"NumpadDecimal"`                                                         | `"NumpadDecimal"`                                                                          |
| `kVK_ANSI_KeypadMultiply (0x43)`        | `"NumpadMultiply"`                                                        | `"NumpadMultiply"`                                                                         |
| `kVK_ANSI_KeypadPlus (0x45)`            | `"NumpadAdd"`                                                             | `"NumpadAdd"`                                                                              |
| `kVK_ANSI_KeypadClear (0x47)`           | `"NumLock"`                                                               | `"NumLock"`                                                                                |
| `kVK_VolumeUp (0x48)`                   | `"VolumeUp"` (⚠️ Not the same on Chromium)                                | `"AudioVolumeUp"` (was `"VolumeUp"` prior to Chromium 1) (⚠️ Not the same on Firefox)      |
| `kVK_VolumeDown (0x49)`                 | `"VolumeDown"` (⚠️ Not the same on Chromium)                              | `"AudioVolumeDown"` (was `"VolumeDown"` prior to Chromium 52) (⚠️ Not the same on Firefox) |
| `kVK_Mute (0x4A)`                       | `"VolumeMute"` (⚠️ Not the same on Chromium)                              | `"AudioVolumeMute"` (was `"VolumeMute"` prior to Chromium 52) (⚠️ Not the same on Firefox) |
| `kVK_ANSI_KeypadDivide (0x4B)`          | `"NumpadDivide"`                                                          | `"NumpadDivide"`                                                                           |
| `kVK_ANSI_KeypadEnter (0x4C)`           | `"NumpadEnter"`                                                           | `"NumpadEnter"`                                                                            |
| `kVK_ANSI_KeypadMinus (0x4E)`           | `"NumpadSubtract"`                                                        | `"NumpadSubtract"`                                                                         |
| `kVK_F18 (0x4F)`                        | `"F18"`                                                                   | `"F18"`                                                                                    |
| `kVK_F19 (0x50)`                        | `"F19"`                                                                   | `"F19"`                                                                                    |
| `kVK_ANSI_KeypadEquals (0x51)`          | `"NumpadEqual"`                                                           | `"NumpadEqual"`                                                                            |
| `kVK_ANSI_Keypad0 (0x52)`               | `"Numpad0"`                                                               | `"Numpad0"`                                                                                |
| `kVK_ANSI_Keypad1 (0x53)`               | `"Numpad1"`                                                               | `"Numpad1"`                                                                                |
| `kVK_ANSI_Keypad2 (0x54)`               | `"Numpad2"`                                                               | `"Numpad2"`                                                                                |
| `kVK_ANSI_Keypad3 (0x55)`               | `"Numpad3"`                                                               | `"Numpad3"`                                                                                |
| `kVK_ANSI_Keypad4 (0x56)`               | `"Numpad4"`                                                               | `"Numpad4"`                                                                                |
| `kVK_ANSI_Keypad5 (0x57)`               | `"Numpad5"`                                                               | `"Numpad5"`                                                                                |
| `kVK_ANSI_Keypad6 (0x58)`               | `"Numpad6"`                                                               | `"Numpad6"`                                                                                |
| `kVK_ANSI_Keypad7 (0x59)`               | `"Numpad7"`                                                               | `"Numpad7"`                                                                                |
| `kVK_F20 (0x5A)`                        | `"F20"`                                                                   | `"F20"`                                                                                    |
| `kVK_ANSI_Keypad8 (0x5B)`               | `"Numpad8"`                                                               | `"Numpad8"`                                                                                |
| `kVK_ANSI_Keypad9 (0x5C)`               | `"Numpad9"`                                                               | `"Numpad9"`                                                                                |
| `kVK_JIS_Yen (0x5D)`                    | `"IntlYen"`                                                               | `"IntlYen"`                                                                                |
| `kVK_JIS_Underscore (0x5E)`             | `"IntlRo"`                                                                | `"IntlRo"`                                                                                 |
| `kVK_JIS_KeypadComma (0x5F)`            | `"NumpadComma"`                                                           | `"NumpadComma"`                                                                            |
| `kVK_F5 (0x60)`                         | `"F5"`                                                                    | `"F5"`                                                                                     |
| `kVK_F6 (0x61)`                         | `"F6"`                                                                    | `"F6"`                                                                                     |
| `kVK_F7 (0x62)`                         | `"F7"`                                                                    | `"F7"`                                                                                     |
| `kVK_F3 (0x63)`                         | `"F3"`                                                                    | `"F3"`                                                                                     |
| `kVK_F8 (0x64)`                         | `"F8"`                                                                    | `"F8"`                                                                                     |
| `kVK_F9 (0x65)`                         | `"F9"`                                                                    | `"F9"`                                                                                     |
| `kVK_JIS_Eisu (0x66)`                   | `"Lang2"`                                                                 | `"Lang2"` (was `""` prior to Chromium 82) (⚠️ No events fired actually)                    |
| `kVK_F11 (0x67)`                        | `"F11"`                                                                   | `"F11"`                                                                                    |
| `kVK_JIS_Kana (0x68)`                   | `"Lang1"`                                                                 | `"Lang1"` (was `"KanaMode"` prior to Chromium 82) (⚠️ No events fired actually)            |
| `kVK_F13 (0x69)`                        | `"F13"`                                                                   | `"F13"`                                                                                    |
| `kVK_F16 (0x6A)`                        | `"F16"`                                                                   | `"F16"`                                                                                    |
| `kVK_F14 (0x6B)`                        | `"F14"`                                                                   | `"F14"`                                                                                    |
| `kVK_F10 (0x6D)`                        | `"F10"`                                                                   | `"F10"`                                                                                    |
| context menu key (0x6E)                 | `"ContextMenu"`                                                           | `"ContextMenu"`                                                                            |
| `kVK_F12 (0x6F)`                        | `"F12"`                                                                   | `"F12"`                                                                                    |
| `kVK_F15 (0x71)`                        | `"F15"`                                                                   | `"F15"`                                                                                    |
| `kVK_Help (0x72)`                       | `"Help"` (⚠️ Not the same on Chromium)                                    | `"Insert"` (⚠️ Not the same on Firefox)                                                    |
| `kVK_Home (0x73)`                       | `"Home"`                                                                  | `"Home"`                                                                                   |
| `kVK_PageUp (0x74)`                     | `"PageUp"`                                                                | `"PageUp"`                                                                                 |
| `kVK_ForwardDelete (0x75)`              | `"Delete"`                                                                | `"Delete"`                                                                                 |
| `kVK_F4 (0x76)`                         | `"F4"`                                                                    | `"F4"`                                                                                     |
| `kVK_End (0x77)`                        | `"End"`                                                                   | `"End"`                                                                                    |
| `kVK_F2 (0x78)`                         | `"F2"`                                                                    | `"F2"`                                                                                     |
| `kVK_PageDown (0x79)`                   | `"PageDown"`                                                              | `"PageDown"`                                                                               |
| `kVK_F1 (0x7A)`                         | `"F1"`                                                                    | `"F1"`                                                                                     |
| `kVK_LeftArrow (0x7B)`                  | `"ArrowLeft"`                                                             | `"ArrowLeft"`                                                                              |
| `kVK_RightArrow (0x7C)`                 | `"ArrowRight"`                                                            | `"ArrowRight"`                                                                             |
| `kVK_DownArrow (0x7D)`                  | `"ArrowDown"`                                                             | `"ArrowDown"`                                                                              |
| `kVK_UpArrow (0x7E)`                    | `"ArrowUp"`                                                               | `"ArrowUp"`                                                                                |

## Code values on Linux (X11)

Note that X has too many keys and some of them are not testable with usual keyboard. So, following table is created from source code which maps from scancode to code value.

In the cells, "(❌ Missing)" means that this code value cannot be detected on this browser.

| scancode (hardware_keycode) | Firefox                                              | Chromium                                                                                   |
| --------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `0x0009`                    | `"Escape"`                                           | `"Escape"`                                                                                 |
| `0x000A`                    | `"Digit1"`                                           | `"Digit1"`                                                                                 |
| `0x000B`                    | `"Digit2"`                                           | `"Digit2"`                                                                                 |
| `0x000C`                    | `"Digit3"`                                           | `"Digit3"`                                                                                 |
| `0x000D`                    | `"Digit4"`                                           | `"Digit4"`                                                                                 |
| `0x000E`                    | `"Digit5"`                                           | `"Digit5"`                                                                                 |
| `0x000F`                    | `"Digit6"`                                           | `"Digit6"`                                                                                 |
| `0x0010`                    | `"Digit7"`                                           | `"Digit7"`                                                                                 |
| `0x0011`                    | `"Digit8"`                                           | `"Digit8"`                                                                                 |
| `0x0012`                    | `"Digit9"`                                           | `"Digit9"`                                                                                 |
| `0x0013`                    | `"Digit0"`                                           | `"Digit0"`                                                                                 |
| `0x0014`                    | `"Minus"`                                            | `"Minus"`                                                                                  |
| `0x0015`                    | `"Equal"`                                            | `"Equal"`                                                                                  |
| `0x0016`                    | `"Backspace"`                                        | `"Backspace"`                                                                              |
| `0x0017`                    | `"Tab"`                                              | `"Tab"`                                                                                    |
| `0x0018`                    | `"KeyQ"`                                             | `"KeyQ"`                                                                                   |
| `0x0019`                    | `"KeyW"`                                             | `"KeyW"`                                                                                   |
| `0x001A`                    | `"KeyE"`                                             | `"KeyE"`                                                                                   |
| `0x001B`                    | `"KeyR"`                                             | `"KeyR"`                                                                                   |
| `0x001C`                    | `"KeyT"`                                             | `"KeyT"`                                                                                   |
| `0x001D`                    | `"KeyY"`                                             | `"KeyY"`                                                                                   |
| `0x001E`                    | `"KeyU"`                                             | `"KeyU"`                                                                                   |
| `0x001F`                    | `"KeyI"`                                             | `"KeyI"`                                                                                   |
| `0x0020`                    | `"KeyO"`                                             | `"KeyO"`                                                                                   |
| `0x0021`                    | `"KeyP"`                                             | `"KeyP"`                                                                                   |
| `0x0022`                    | `"BracketLeft"`                                      | `"BracketLeft"`                                                                            |
| `0x0023`                    | `"BracketRight"`                                     | `"BracketRight"`                                                                           |
| `0x0024`                    | `"Enter"`                                            | `"Enter"`                                                                                  |
| `0x0025`                    | `"ControlLeft"`                                      | `"ControlLeft"`                                                                            |
| `0x0026`                    | `"KeyA"`                                             | `"KeyA"`                                                                                   |
| `0x0027`                    | `"KeyS"`                                             | `"KeyS"`                                                                                   |
| `0x0028`                    | `"KeyD"`                                             | `"KeyD"`                                                                                   |
| `0x0029`                    | `"KeyF"`                                             | `"KeyF"`                                                                                   |
| `0x002A`                    | `"KeyG"`                                             | `"KeyG"`                                                                                   |
| `0x002B`                    | `"KeyH"`                                             | `"KeyH"`                                                                                   |
| `0x002C`                    | `"KeyJ"`                                             | `"KeyJ"`                                                                                   |
| `0x002D`                    | `"KeyK"`                                             | `"KeyK"`                                                                                   |
| `0x002E`                    | `"KeyL"`                                             | `"KeyL"`                                                                                   |
| `0x002F`                    | `"Semicolon"`                                        | `"Semicolon"`                                                                              |
| `0x0030`                    | `"Quote"`                                            | `"Quote"`                                                                                  |
| `0x0031`                    | `"Backquote"`                                        | `"Backquote"`                                                                              |
| `0x0032`                    | `"ShiftLeft"`                                        | `"ShiftLeft"`                                                                              |
| `0x0033`                    | `"Backslash"`                                        | `"Backslash"`                                                                              |
| `0x0034`                    | `"KeyZ"`                                             | `"KeyZ"`                                                                                   |
| `0x0035`                    | `"KeyX"`                                             | `"KeyX"`                                                                                   |
| `0x0036`                    | `"KeyC"`                                             | `"KeyC"`                                                                                   |
| `0x0037`                    | `"KeyV"`                                             | `"KeyV"`                                                                                   |
| `0x0038`                    | `"KeyB"`                                             | `"KeyB"`                                                                                   |
| `0x0039`                    | `"KeyN"`                                             | `"KeyN"`                                                                                   |
| `0x003A`                    | `"KeyM"`                                             | `"KeyM"`                                                                                   |
| `0x003B`                    | `"Comma"`                                            | `"Comma"`                                                                                  |
| `0x003C`                    | `"Period"`                                           | `"Period"`                                                                                 |
| `0x003D`                    | `"Slash"`                                            | `"Slash"`                                                                                  |
| `0x003E`                    | `"ShiftRight"`                                       | `"ShiftRight"`                                                                             |
| `0x003F`                    | `"NumpadMultiply"`                                   | `"NumpadMultiply"`                                                                         |
| `0x0040`                    | `"AltLeft"`                                          | `"AltLeft"`                                                                                |
| `0x0041`                    | `"Space"`                                            | `"Space"`                                                                                  |
| `0x0042`                    | `"CapsLock"`                                         | `"CapsLock"`                                                                               |
| `0x0043`                    | `"F1"`                                               | `"F1"`                                                                                     |
| `0x0044`                    | `"F2"`                                               | `"F2"`                                                                                     |
| `0x0045`                    | `"F3"`                                               | `"F3"`                                                                                     |
| `0x0046`                    | `"F4"`                                               | `"F4"`                                                                                     |
| `0x0047`                    | `"F5"`                                               | `"F5"`                                                                                     |
| `0x0048`                    | `"F6"`                                               | `"F6"`                                                                                     |
| `0x0049`                    | `"F7"`                                               | `"F7"`                                                                                     |
| `0x004A`                    | `"F8"`                                               | `"F8"`                                                                                     |
| `0x004B`                    | `"F9"`                                               | `"F9"`                                                                                     |
| `0x004C`                    | `"F10"`                                              | `"F10"`                                                                                    |
| `0x004D`                    | `"NumLock"`                                          | `"NumLock"`                                                                                |
| `0x004E`                    | `"ScrollLock"`                                       | `"ScrollLock"`                                                                             |
| `0x004F`                    | `"Numpad7"`                                          | `"Numpad7"`                                                                                |
| `0x0050`                    | `"Numpad8"`                                          | `"Numpad8"`                                                                                |
| `0x0051`                    | `"Numpad9"`                                          | `"Numpad9"`                                                                                |
| `0x0052`                    | `"NumpadSubtract"`                                   | `"NumpadSubtract"`                                                                         |
| `0x0053`                    | `"Numpad4"`                                          | `"Numpad4"`                                                                                |
| `0x0054`                    | `"Numpad5"`                                          | `"Numpad5"`                                                                                |
| `0x0055`                    | `"Numpad6"`                                          | `"Numpad6"`                                                                                |
| `0x0056`                    | `"NumpadAdd"`                                        | `"NumpadAdd"`                                                                              |
| `0x0057`                    | `"Numpad1"`                                          | `"Numpad1"`                                                                                |
| `0x0058`                    | `"Numpad2"`                                          | `"Numpad2"`                                                                                |
| `0x0059`                    | `"Numpad3"`                                          | `"Numpad3"`                                                                                |
| `0x005A`                    | `"Numpad0"`                                          | `"Numpad0"`                                                                                |
| `0x005B`                    | `"NumpadDecimal"`                                    | `"NumpadDecimal"`                                                                          |
| `0x005C`                    | `"Unidentified"`                                     | `""`                                                                                       |
| `0x005D`                    | `"Unidentified"` (❌ Missing)                        | `"Lang5"` (was `""` prior to Chromium 48) (⚠️ Not the same on Firefox)                     |
| `0x005E`                    | `"IntlBackslash"`                                    | `"IntlBackslash"`                                                                          |
| `0x005F`                    | `"F11"`                                              | `"F11"`                                                                                    |
| `0x0060`                    | `"F12"`                                              | `"F12"`                                                                                    |
| `0x0061`                    | `"IntlRo"`                                           | `"IntlRo"`                                                                                 |
| `0x0062`                    | `"Unidentified"` (❌ Missing)                        | `"Lang3"` (⚠️ Not the same on Firefox)                                                     |
| `0x0063`                    | `"Unidentified"` (❌ Missing)                        | `"Lang4"` (⚠️ Not the same on Firefox)                                                     |
| `0x0064`                    | `"Convert"`                                          | `"Convert"`                                                                                |
| `0x0065`                    | `"KanaMode"`                                         | `"KanaMode"`                                                                               |
| `0x0066`                    | `"NonConvert"`                                       | `"NonConvert"`                                                                             |
| `0x0067`                    | `"Unidentified"`                                     | `""`                                                                                       |
| `0x0068`                    | `"NumpadEnter"`                                      | `"NumpadEnter"`                                                                            |
| `0x0069`                    | `"ControlRight"`                                     | `"ControlRight"`                                                                           |
| `0x006A`                    | `"NumpadDivide"`                                     | `"NumpadDivide"`                                                                           |
| `0x006B`                    | `"PrintScreen"`                                      | `"PrintScreen"`                                                                            |
| `0x006C`                    | `"AltRight"`                                         | `"AltRight"`                                                                               |
| `0x006D`                    | `"Unidentified"`                                     | `""`                                                                                       |
| `0x006E`                    | `"Home"`                                             | `"Home"`                                                                                   |
| `0x006F`                    | `"ArrowUp"`                                          | `"ArrowUp"`                                                                                |
| `0x0070`                    | `"PageUp"`                                           | `"PageUp"`                                                                                 |
| `0x0071`                    | `"ArrowLeft"`                                        | `"ArrowLeft"`                                                                              |
| `0x0072`                    | `"ArrowRight"`                                       | `"ArrowRight"`                                                                             |
| `0x0073`                    | `"End"`                                              | `"End"`                                                                                    |
| `0x0074`                    | `"ArrowDown"`                                        | `"ArrowDown"`                                                                              |
| `0x0075`                    | `"PageDown"`                                         | `"PageDown"`                                                                               |
| `0x0076`                    | `"Insert"`                                           | `"Insert"`                                                                                 |
| `0x0077`                    | `"Delete"`                                           | `"Delete"`                                                                                 |
| `0x0078`                    | `"Unidentified"`                                     | `""`                                                                                       |
| `0x0079`                    | `"VolumeMute"` (⚠️ Not the same on Chromium)         | `"AudioVolumeMute"` (was `"VolumeMute"` prior to Chromium 52) (⚠️ Not the same on Firefox) |
| `0x007A`                    | `"VolumeDown"` (⚠️ Not the same on Chromium)         | `"AudioVolumeDown"` (was `"VolumeDown"` prior to Chromium 52) (⚠️ Not the same on Firefox) |
| `0x007B`                    | `"VolumeUp"` (⚠️ Not the same on Chromium)           | `"AudioVolumeUp"` (was `"VolumeUp"` prior to Chromium 52) (⚠️ Not the same on Firefox)     |
| `0x007C`                    | `"Unidentified"` (❌ Missing)                        | `"Power"` (⚠️ Not the same on Firefox)                                                     |
| `0x007D`                    | `"NumpadEqual"`                                      | `"NumpadEqual"`                                                                            |
| `0x007E`                    | `"Unidentified"`                                     | `""`                                                                                       |
| `0x007F`                    | `"Pause"`                                            | `"Pause"`                                                                                  |
| `0x0080`                    | `"Unidentified"`                                     | `""`                                                                                       |
| `0x0081`                    | `"NumpadComma"`                                      | `"NumpadComma"`                                                                            |
| `0x0082`                    | `"Lang1"`                                            | `"Lang1"`                                                                                  |
| `0x0083`                    | `"Lang2"`                                            | `"Lang2"`                                                                                  |
| `0x0084`                    | `"IntlYen"`                                          | `"IntlYen"`                                                                                |
| `0x0085`                    | `"MetaLeft"` (was `"OSLeft"` prior to Firefox 118)   | `"MetaLeft"` (was `"OSLeft"` prior to Chromium 52)                                         |
| `0x0086`                    | `"MetaRight"` (was `"OSRight"` prior to Firefox 118) | `"MetaRight"` (was `"OSRight"` prior to Chromium 52)                                       |
| `0x0087`                    | `"ContextMenu"`                                      | `"ContextMenu"`                                                                            |
| `0x0088`                    | `"BrowserStop"`                                      | `"BrowserStop"` (was `"Abort"` prior to Chromium 48)                                       |
| `0x0089`                    | `"Again"`                                            | `"Again"`                                                                                  |
| `0x008A`                    | `"Props"` (⚠️ Not the same on Chromium)              | `""` (❌ Missing)                                                                          |
| `0x008B`                    | `"Undo"`                                             | `"Undo"`                                                                                   |
| `0x008C`                    | `"Select"`                                           | `"Select"` (was `""` prior to Chromium 48)                                                 |
| `0x008D`                    | `"Copy"`                                             | `"Copy"`                                                                                   |
| `0x008E`                    | `"Open"`                                             | `"Open"` (was `""` prior to Chromium 48)                                                   |
| `0x008F`                    | `"Paste"`                                            | `"Paste"`                                                                                  |
| `0x0090`                    | `"Find"`                                             | `"Find"`                                                                                   |
| `0x0091`                    | `"Cut"`                                              | `"Cut"`                                                                                    |
| `0x0092`                    | `"Help"`                                             | `"Help"`                                                                                   |
| `0x0093`                    | `"Unidentified"`                                     | `""`                                                                                       |
| `0x0094`                    | `"LaunchApp2"`                                       | `"LaunchApp2"`                                                                             |
| `0x0095`                    | `"Unidentified"`                                     | `""`                                                                                       |
| `0x0096`                    | `"Unidentified"` (❌ Missing)                        | `"Sleep"` (⚠️ Not the same on Firefox)                                                     |
| `0x0097`                    | `"WakeUp"`                                           | `"WakeUp"`                                                                                 |
| `0x0098`                    | `"LaunchApp1"`                                       | `"LaunchApp1"` (was `""` prior to Chromium 48)                                             |
| `0x0099` ～ `0x00A2`        | `"Unidentified"`                                     | `""`                                                                                       |
| `0x00A3`                    | `"LaunchMail"`                                       | `"LaunchMail"` (was `""` prior to Chromium 51)                                             |
| `0x00A4`                    | `"BrowserFavorites"`                                 | `"BrowserFavorites"`                                                                       |
| `0x00A5`                    | `"Unidentified"`                                     | `""`                                                                                       |
| `0x00A6`                    | `"BrowserBack"`                                      | `"BrowserBack"`                                                                            |
| `0x00A7`                    | `"BrowserForward"`                                   | `"BrowserForward"`                                                                         |
| `0x00A8`                    | `"Unidentified"`                                     | `""`                                                                                       |
| `0x00A9`                    | `"Eject"`                                            | `"Eject"` (was `""` prior to Chromium 48)                                                  |
| `0x00AA`                    | `"Unidentified"`                                     | `""`                                                                                       |
| `0x00AB`                    | `"MediaTrackNext"`                                   | `"MediaTrackNext"` (was `""` prior to Chromium 48)                                         |
| `0x00AC`                    | `"MediaPlayPause"`                                   | `"MediaPlayPause"` (was `""` prior to Chromium 48)                                         |
| `0x00AD`                    | `"MediaTrackPrevious"`                               | `"MediaTrackPrevious"` (was `""` prior to Chromium 48)                                     |
| `0x00AE`                    | `"MediaStop"`                                        | `"MediaStop"` (was `""` prior to Chromium 48)                                              |
| `0x00AF` ～ `0x00B2`        | `"Unidentified"`                                     | `""`                                                                                       |
| `0x00B3`                    | `"MediaSelect"`                                      | `"MediaSelect"` (was `""` prior to Chromium 48)                                            |
| `0x00B4`                    | `"BrowserHome"`                                      | `"BrowserHome"` (was `""` prior to Chromium 48)                                            |
| `0x00B5`                    | `"BrowserRefresh"`                                   | `"BrowserRefresh"`                                                                         |
| `0x00B6` ～ `0x00BA`        | `"Unidentified"`                                     | `""`                                                                                       |
| `0x00BB`                    | `"Unidentified"` (❌ Missing)                        | `"NumpadParenLeft"` (⚠️ Not the same on Firefox)                                           |
| `0x00BC`                    | `"Unidentified"` (❌ Missing)                        | `"NumpadParenRight"` (⚠️ Not the same on Firefox)                                          |
| `0x00BD`, `0x00BE`          | `"Unidentified"`                                     | `""`                                                                                       |
| `0x00BF`                    | `"F13"`                                              | `"F13"`                                                                                    |
| `0x00C0`                    | `"F14"`                                              | `"F14"`                                                                                    |
| `0x00C1`                    | `"F15"`                                              | `"F15"`                                                                                    |
| `0x00C2`                    | `"F16"`                                              | `"F16"`                                                                                    |
| `0x00C3`                    | `"F17"`                                              | `"F17"`                                                                                    |
| `0x00C4`                    | `"F18"`                                              | `"F18"`                                                                                    |
| `0x00C5`                    | `"F19"`                                              | `"F19"`                                                                                    |
| `0x00C6`                    | `"F20"`                                              |                                                                                            |

## Code values on Firefox for Android

| scancode             | Firefox                                              |
| -------------------- | ---------------------------------------------------- |
| `0x0001`             | `"Escape"`                                           |
| `0x0002`             | `"Digit1"`                                           |
| `0x0003`             | `"Digit2"`                                           |
| `0x0004`             | `"Digit3"`                                           |
| `0x0005`             | `"Digit4"`                                           |
| `0x0006`             | `"Digit5"`                                           |
| `0x0007`             | `"Digit6"`                                           |
| `0x0008`             | `"Digit7"`                                           |
| `0x0009`             | `"Digit8"`                                           |
| `0x000A`             | `"Digit9"`                                           |
| `0x000B`             | `"Digit0"`                                           |
| `0x000C`             | `"Minus"`                                            |
| `0x000D`             | `"Equal"`                                            |
| `0x000E`             | `"Backspace"`                                        |
| `0x000F`             | `"Tab"`                                              |
| `0x0010`             | `"KeyQ"`                                             |
| `0x0011`             | `"KeyW"`                                             |
| `0x0012`             | `"KeyE"`                                             |
| `0x0013`             | `"KeyR"`                                             |
| `0x0014`             | `"KeyT"`                                             |
| `0x0015`             | `"KeyY"`                                             |
| `0x0016`             | `"KeyU"`                                             |
| `0x0017`             | `"KeyI"`                                             |
| `0x0018`             | `"KeyO"`                                             |
| `0x0019`             | `"KeyP"`                                             |
| `0x001A`             | `"BracketLeft"`                                      |
| `0x001B`             | `"BracketRight"`                                     |
| `0x001C`             | `"Enter"`                                            |
| `0x001D`             | `"ControlLeft"`                                      |
| `0x001E`             | `"KeyA"`                                             |
| `0x001F`             | `"KeyS"`                                             |
| `0x0020`             | `"KeyD"`                                             |
| `0x0021`             | `"KeyF"`                                             |
| `0x0022`             | `"KeyG"`                                             |
| `0x0023`             | `"KeyH"`                                             |
| `0x0024`             | `"KeyJ"`                                             |
| `0x0025`             | `"KeyK"`                                             |
| `0x0026`             | `"KeyL"`                                             |
| `0x0027`             | `"Semicolon"`                                        |
| `0x0028`             | `"Quote"`                                            |
| `0x0029`             | `"Backquote"`                                        |
| `0x002A`             | `"ShiftLeft"`                                        |
| `0x002B`             | `"Backslash"`                                        |
| `0x002C`             | `"KeyZ"`                                             |
| `0x002D`             | `"KeyX"`                                             |
| `0x002E`             | `"KeyC"`                                             |
| `0x002F`             | `"KeyV"`                                             |
| `0x0030`             | `"KeyB"`                                             |
| `0x0031`             | `"KeyN"`                                             |
| `0x0032`             | `"KeyM"`                                             |
| `0x0033`             | `"Comma"`                                            |
| `0x0034`             | `"Period"`                                           |
| `0x0035`             | `"Slash"`                                            |
| `0x0036`             | `"ShiftRight"`                                       |
| `0x0037`             | `"NumpadMultiply"`                                   |
| `0x0038`             | `"AltLeft"`                                          |
| `0x0039`             | `"Space"`                                            |
| `0x003A`             | `"CapsLock"`                                         |
| `0x003B`             | `"F1"`                                               |
| `0x003C`             | `"F2"`                                               |
| `0x003D`             | `"F3"`                                               |
| `0x003E`             | `"F4"`                                               |
| `0x003F`             | `"F5"`                                               |
| `0x0040`             | `"F6"`                                               |
| `0x0041`             | `"F7"`                                               |
| `0x0042`             | `"F8"`                                               |
| `0x0043`             | `"F9"`                                               |
| `0x0044`             | `"F10"`                                              |
| `0x0045`             | `"NumLock"`                                          |
| `0x0046`             | `"ScrollLock"`                                       |
| `0x0047`             | `"Numpad7"`                                          |
| `0x0048`             | `"Numpad8"`                                          |
| `0x0049`             | `"Numpad9"`                                          |
| `0x004A`             | `"NumpadSubtract"`                                   |
| `0x004B`             | `"Numpad4"`                                          |
| `0x004C`             | `"Numpad5"`                                          |
| `0x004D`             | `"Numpad6"`                                          |
| `0x004E`             | `"NumpadAdd"`                                        |
| `0x004F`             | `"Numpad1"`                                          |
| `0x0050`             | `"Numpad2"`                                          |
| `0x0051`             | `"Numpad3"`                                          |
| `0x0052`             | `"Numpad0"`                                          |
| `0x0053`             | `"NumpadDecimal"`                                    |
| `0x0054`, `0x0055`   | `"Unidentified"`                                     |
| `0x0056`             | `"IntlBackslash"`                                    |
| `0x0057`             | `"F11"`                                              |
| `0x0058`             | `"F12"`                                              |
| `0x0059`             | `"IntlRo"`                                           |
| `0x005A`, `0x005B`   | `"Unidentified"`                                     |
| `0x005C`             | `"Convert"`                                          |
| `0x005D`             | `"KanaMode"`                                         |
| `0x005E`             | `"NonConvert"`                                       |
| `0x005F`             | `"Unidentified"`                                     |
| `0x0060`             | `"NumpadEnter"`                                      |
| `0x0061`             | `"ControlRight"`                                     |
| `0x0062`             | `"NumpadDivide"`                                     |
| `0x0063`             | `"PrintScreen"`                                      |
| `0x0064`             | `"AltRight"`                                         |
| `0x0065`             | `"Unidentified"`                                     |
| `0x0066`             | `"Home"`                                             |
| `0x0067`             | `"ArrowUp"`                                          |
| `0x0068`             | `"PageUp"`                                           |
| `0x0069`             | `"ArrowLeft"`                                        |
| `0x006A`             | `"ArrowRight"`                                       |
| `0x006B`             | `"End"`                                              |
| `0x006C`             | `"ArrowDown"`                                        |
| `0x006D`             | `"PageDown"`                                         |
| `0x006E`             | `"Insert"`                                           |
| `0x006F`             | `"Delete"`                                           |
| `0x0070`             | `"Unidentified"`                                     |
| `0x0071`             | `"VolumeMute"`                                       |
| `0x0072`             | `"VolumeDown"`                                       |
| `0x0073`             | `"VolumeUp"`                                         |
| `0x0074`             | `"Power"`                                            |
| `0x0075`             | `"NumpadEqual"`                                      |
| `0x0076`             | `"Unidentified"`                                     |
| `0x0077`             | `"Pause"`                                            |
| `0x0078`             | `"Unidentified"`                                     |
| `0x0079`             | `"NumpadComma"`                                      |
| `0x007A`             | `"Lang1"`                                            |
| `0x007B`             | `"Lang2"`                                            |
| `0x007C`             | `"IntlYen"`                                          |
| `0x007D`             | `"MetaLeft"` (was `"OSLeft"` prior to Firefox 118)   |
| `0x007E`             | `"MetaRight"` (was `"OSRight"` prior to Firefox 118) |
| `0x007F`             | `"ContextMenu"`                                      |
| `0x0080`             | `"BrowserStop"`                                      |
| `0x0081`             | `"Again"`                                            |
| `0x0082`             | `"Props"`                                            |
| `0x0083`             | `"Undo"`                                             |
| `0x0084`             | `"Select"`                                           |
| `0x0085`             | `"Copy"`                                             |
| `0x0086`             | `"Open"`                                             |
| `0x0087`             | `"Paste"`                                            |
| `0x0088`             | `"Find"`                                             |
| `0x0089`             | `"Cut"`                                              |
| `0x008A`             | `"Help"`                                             |
| `0x008B` ～ `0x008D` | `"Unidentified"`                                     |
| `0x008E`             | `"Sleep"`                                            |
| `0x008F`             | `"WakeUp"`                                           |
| `0x0090`             | `"LaunchApp1"`                                       |
| `0x0091` ～ `0x009B` | `"Unidentified"`                                     |
| `0x009C`             | `"BrowserFavorites"`                                 |
| `0x009D`             | `"Unidentified"`                                     |
| `0x009E`             | `"BrowserBack"`                                      |
| `0x009F`             | `"BrowserForward"`                                   |
| `0x00A0`             | `"Unidentified"`                                     |
| `0x00A1`             | `"Eject"`                                            |
| `0x00A2`             | `"Unidentified"`                                     |
| `0x00A3`             | `"MediaTrackNext"`                                   |
| `0x00A4`             | `"MediaPlayPause"`                                   |
| `0x00A5`             | `"MediaTrackPrevious"`                               |
| `0x00A6`             | `"MediaStop"`                                        |
| `0x00A7` ～ `0x00AC` | `"Unidentified"`                                     |
| `0x00AD`             | `"BrowserRefresh"`                                   |
| `0x00AE` ～ `0x00B6` | `"Unidentified"`                                     |
| `0x00B7`             | `"F13"`                                              |
| `0x00B8`             | `"F14"`                                              |
| `0x00B9`             | `"F15"`                                              |
| `0x00BA`             | `"F16"`                                              |
| `0x00BB`             | `"F17"`                                              |
| `0x00BC`             | `"F18"`                                              |
| `0x00BD`             | `"F19"`                                              |
| `0x00BE`             | `"F20"`                                              |
| `0x00BF`             | `"F21"`                                              |
| `0x00C0`             | `"F22"`                                              |
| `0x00C1`             | `"F23"`                                              |
| `0x00C2`             | `"F24"`                                              |
| `0x00C3` ～ `0x00D8` | `"Unidentified"`                                     |
| `0x00D9`             | `"BrowserSearch"`                                    |
| `0x00DA` ～ `0x01CF` | `"Unidentified"`                                     |
| `0x01D0`             | `"Fn"`                                               |
