const repea = require("https://mehbark.github.io/repeatjs/repeat.mjs");

function hello(greeting, punctuation) {
  console.log(greeting + punctuation);
}

repea.t(hello, 2, "hi", "!");
repea.t(hello, 2.1, "hi", "!");
repea.t(hello, 0, "hi", "!");
repea.t(hello, 2);
repea.t(hello, -1, "hi", "!").catch(err => console.log(err));
repea.t(hello, -1, "hi", "!").catch(err => console.log(err));
repea.t(hello, "ten", "hi", "!".catch(err => console.log(err)));
repea.t(hello).catch(err => console.log(err));