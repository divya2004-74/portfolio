 function addvalue(num){
     document.getElementById("display").value+=num
 }
 function operator(num){
    document.getElementById("display").value+=num
 }
  function allclear() {
        document.getElementById("display").value=" "
    }
     function del(){
   let del=document.getElementById("display")
   del.value=del.value.slice(0,-1)//trigers last value
    }
    function calc(){
        let cal=document.getElementById("display").value//'20+40'
        let exp=eval(cal)//'eval(20+40)=60'
        document.getElementById("display").value=exp
    }

   