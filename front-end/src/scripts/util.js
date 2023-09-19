export function handleEnterReturnKeypress(e, action)  {
  if (e.keyCode === 13) {
    action();
  }
}