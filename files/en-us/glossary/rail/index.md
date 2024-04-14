---
제목 : RAIL
슬러그 : 광택/레일
페이지 유형: 용어사전-정의
---

{{GlossarySidebar}}

**RAIL**, an acronym for **Response, Animation, Idle, and Load**, is a performance model originated by the Google Chrome team in 2015, focused on user experience and performance within the browser. The performance mantra of RAIL is "Focus on the user; the end goal isn't to make your site perform fast on any specific device, it's to make users happy." There are 4 stages of interaction: page load, idle, response to input, and scrolling and animation. In acronym order, the main tenets are:

- **대답**
  - : Respond to users immediately, acknowledging any user input in **100ms** or less.
- **Animation**
 -: 애니메이션 시 일관성을 지향하고 장크를 피하여 **16ms**이하로 각 프레임을 렌더링합니다.
 -: 기본 자바스크립트 스레드를 사용할 때 **50ms** 미만의 청크로 작업하여 사용자 상호 작용을 위해 스레드를 자유롭게 합니다.
- **Load**
  - : Deliver interactive content in less than **5 second**.

## See also

- [Recommended Web Performance Timings: How long is too long](/en-US/docs/Web/Performance/How_long_is_too_long)
