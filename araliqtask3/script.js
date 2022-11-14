const InputAuthor=document.querySelector('.muellif')

const InputMessage=document.querySelector('.sms');
const btn=document.querySelector('button');
class Message {
    constructor(author, time, text) {
      this.author = author;
      this.time=time
      this.text = text;
    }
    toHtml() {
        const result = document.querySelector(".history");
        const p = document.createElement("p");
        p.innerHTML = `<b> ${this.time} ${this.author}: ${this.text} </b>`;
        result.append(p);
      }
}

class Messenger {
    constructor() {
      this.arr = [];
    }
  
    show_history() {
      this.arr.shift().toHtml()
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

  btn.addEventListener('click', ()=>{
    console.log(InputMessage.value)
    messenger.send(InputAuthor.value, InputMessage.value);
    messenger.show_history();
    InputAuthor.value="";
    InputMessage.value = "";
  })