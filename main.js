// upload = function() {
//   console.log('test');
//   var file = document.getElementById('file');
// };
//
// var file = document.getElementById('file');
//
// var reader = new FileReader(File);
//
// reader.onload = function(e) {
//   var text = reader.result;
//   console.log(text);
// };
//
// reader.readAsText(file);

// var fs = require('fs'),
//   out = console.log.bind(console);
//
// function main(filename, callback) {
//   fs.readFile(filename, 'utf8', function(err, data) {
//     if (err) throw err;
//     callback(data.split('\n').length, data.split(/\s/).length);
//   });
// }
// main(process.argv[2], function(lines, words) {
//   out('%s is %s lines long, and has %s words.', process.argv[2], lines, words);
// });

$(document).ready(function() {
  $(function() {
    $('#upload').change(function(event) {
      var f = event.target.files[0];
      if (f) {
        var r = new FileReader();

        r.onload = function(e) {
          var contents = e.target.result;
          var res = contents.split(' ');
          $('.screen1').fadeOut(1000);
          $('.screen2').fadeIn(1000);
          $('#display_File_count').text(res.length);
        };
        r.readAsText(f);
      }
    });
  });
});
