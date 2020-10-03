const video = {
  title: 'a',
  play() {
    console.log(this);
  }
};

function Video(title) {
  this.title = title;
  console.log(this);
}

const v = new Video('b');