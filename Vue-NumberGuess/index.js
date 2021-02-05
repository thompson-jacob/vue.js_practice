var app = new Vue({
  el: "#app",
  data: {
    message: "Guess a Number",
    answer: 27
  },
  methods: {
    guess: function () {
      if (parseInt(this.guess) >this.answer){
        this.message = "Too high!";
      } else if (parseInt(this.guess) < this.answer) {
        this.message  "Too low!";
      } else if (parseInt(this.guess) == this.answer) {
        this.message = "Correct!" 
      }
    },
    resetGame: function () {
      this.messsage = null;
      this.answer = 1 + Math.floor(Math.random() * Math.floor(100))
    }
  },
});
