/* global Vue */
var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "You loaded this page on " + new Date().toLocaleString(),
      jacob: "Just testing this out",
    };
  },
});
