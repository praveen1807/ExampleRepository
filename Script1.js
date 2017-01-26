// JavaScript source code
<script>
        
       function add() {
           var first_number = parseInt(document.getElementById("text1").value);
           var second_number = parseInt(document.getElementById("text2").value);
           var result = first_number + second_number;
           document.getElementById("text3").value = result;
       }
function sub() {
    var first_number = parseInt(document.getElementById("text1").value);
    var second_number = parseInt(document.getElementById("text2").value);
    var result = first_number - second_number;
    document.getElementById("text3").value = result;
}
function mult() {
    var first_number = parseInt(document.getElementById("text1").value);
    var second_number = parseInt(document.getElementById("text2").value);
    var result = first_number * second_number;
    document.getElementById("text3").value = result;
}
function div() {
    var first_number = parseInt(document.getElementById("text1").value);
    var second_number = parseInt(document.getElementById("text2").value);
    var result = first_number / second_number;
    document.getElementById("text3").value = result;
}
</script>
