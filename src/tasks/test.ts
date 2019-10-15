export function test(): void {
  const fro: number = 1;
  const to: number = 10;
  let current: number = fro;
  let timerId: number;

  function go(): void {
    console.log(current.toString());
    if (current === to) {
      clearInterval(timerId);
    }
    current += 1;
  }

  go();
  timerId = setInterval(go, 1000);
}
