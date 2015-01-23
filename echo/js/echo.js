
//I'm just trying to print to the index.html this is what is 
//giving me the  Uncaught TypeError: Cannot set property 'innerHTML' of null

var result = document.getElementById("demo");
result.innerHTML = "hi";

// I don't even know if this works but it's what i have so far

function echo()
{
  //console.log(arg);
  var i;
  var args = 0;

  for(i = 0; i<arguments.length; i++){
  	args += arguments[i] + "<br>";
  	//console.log(args);<br>
  }
  document.getElementById("demo").innerHTML = args;


}

echo();
echo('bla');
echo('foo', 'bar', 'baz');
