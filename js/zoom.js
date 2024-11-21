$(document).ready(function () {
  var currZoom = $("#divpnlChart").css("zoom");
  if (currZoom == 'normal') currZoom = 1;

  $(".select-chair__zoom--in").click(function () {
    currZoom *= 1.2;
    $("#divpnlChart").css("zoom", currZoom);
    $("#divpnlChart").css("-moz-transform", "Scale(" + currZoom + ")");
    $("#divpnlChart").css("-moz-transform-origin", "0 0");

  });
  $(".select-chair__zoom--orginal").click(function () {
    $("#divpnlChart").css("zoom", 1);
    $("#divpnlChart").css("-moz-transform", "Scale(" + currZoom + ")");
    $("#divpnlChart").css("-moz-transform-origin", "0 0");

  });
  $(".select-chair__zoom--out").click(function () {
    currZoom *= .8;
    $("#divpnlChart").css("zoom", currZoom);
    $("#divpnlChart").css("-moz-transform", "Scale(" + currZoom + ")");
    $("#divpnlChart").css("-moz-transform-origin", "0 0");

  });
});