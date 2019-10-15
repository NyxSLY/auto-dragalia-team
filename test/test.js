function printNumbers(from, to) {
  let current = from;

  function go() {
    console.log(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }

  go();
  let timerId = setInterval(go, 1000);
}

printNumbers(1, 20);
