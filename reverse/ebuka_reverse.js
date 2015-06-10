var s = 'university';
function reverse(s) {
  var h = '';
  for (var i = s.length - 1; i >= 0; i--)
    h += s[i];
  return h;
}
console.log(reverse(s));