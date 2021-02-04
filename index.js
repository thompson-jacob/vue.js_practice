/* global Vue */
var app = new Vue({
  el: "#app",
  data: function () {
    return {
      memes: ["Unforgivable", "Deez", "Steak & Snow"],
    };
  },
  methods: {
    guess: function () {
      console.log("Hi");
    },
  },
});
