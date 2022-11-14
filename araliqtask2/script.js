class Message {
  constructor(author, time, text) {
    this.author = author;
    this.time=time
    this.text = text;
  }
  toString() {
      return `${this.time} ${this.author}: ${this.text}`;
  }
}

class Messenger {
  constructor() {
    this.arr = [];
  }

  show_history() {
    this.arr.forEach((item) => {
      console.log(item.toString());
    });
  }

  gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
  }

  send(author, text) {
      this.arr.push(new Message(author, this.gettime(), text));
  }
}

let messenger = new Messenger();
messenger.send("Elnur", "Salam necesen?");
messenger.send("Elman", "Yaxsiyam,cox sagol!");
messenger.show_history();