 $(function(){

var firstQ = $( "input[name='q1']" );
var secondQ = $( "input[name='q2']" );
var thirdQ = $( "input[name='q3']" );
var fourthQ = $( "input[name='q4']" );
var fifthQ = $( "input[name='q5']" );

$("#testresult").click(function() { 
    testResult(); 
    });

 
var result = 0;


function testResult() {
	result = 0;
	if ($("input[name='q1']")[0].checked) {
		result += 2;
	};
	
	if ($("input[name='q2']")[2].checked) {
		result += 2;
	};
	
	if ($("input[name='q3']")[3].checked) {
		result += 2;
	};

    
       if (!($("input[name='q4']")[0].checked) && ($("input[name='q4']")[1].checked) && !($("input[name='q4']")[2].checked) && ($("input[name='q4']")[3].checked)) {
        result +=2;   
    };    
   
   
   if (($("input[name='q5']")[0].checked) && ($("input[name='q5']")[1].checked) && !($("input[name='q5']")[2].checked) && !($("input[name='q5']")[3].checked)) {
         result +=2;  
    };

	
alert("Вы набрали " + result + " баллов " + result * 10 + "% правильных ответов!"); 
}
});