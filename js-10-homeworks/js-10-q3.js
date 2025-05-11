// According to your js10 session, write a code that shows why we shouldn't use var?
function example() {
  if (true) {
    var message = "I'm using var!";
  }
  console.log(message);
}

example();

function example() {
  if (true) {
    let message = "I'm using let!";
  }
  console.log(message);
}

example();