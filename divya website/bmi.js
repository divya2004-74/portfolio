function toggleunit(){
    const system=document.getElementById("unitsystem").value
    const weightlabel=document.getElementById("weightlabel")
    const heightlabel=document.getElementById("heightlabel")
    const weightunit=document.getElementById("weight")
    const heightunit=document.getElementById("height")

    if(system==="Metric"){
        weightlabel.innerText="weight(kg)"
        heightlabel.innerText="height(cm)"
        weightunit.placeholder="eg.50(kg))"
        heightunit.placeholder="eg.157(cm)"
    }
    else{
        weightlabel.innerText="weight(lbs)"
        heightlabel.innerText="height(inches)"
        weightunit.placeholder="eg.110"
        heightunit.placeholder="eg.62"
    }
}
function calc() {
    const system=document.getElementById("unitsystem").value
    const age=parseFloat(document.getElementById('age').value)
    const weight=parseFloat(document.getElementById('weight').value)
    const height=parseFloat(document.getElementById('height').value)
    const weightunit=document.getElementById('weight').value
    const heightunit=document.getElementById('height').value
    const resultbox=document.getElementById('result')

// validation

    if(isNaN(age)||isNaN(weight)||isNaN(height)||age<=0||weight<=0||height<=0){
            resultbox.innerText="please enter a valid numbers for all field"
            return
    }
    let bmi=0

     if(system==="Metric"){
        // height converted  from cm to meter
        const meter=height/100
        bmi=weight/(meter*meter)
     }else{
        // imperial formula
        bmi=(weight/(height*height))*703
     }
     bmi=Math.round(bmi*10)/10 //round to 1 decimal place

    // age calculation logic
    let classify=""
    // dollar symbol is used to asign value
    if(age<20){
        classify=`Child/Teenager (Age ${age}). BMI scores for minors must be cross-checked against pediatric growth percentiles rather than rigid adult scales.`
    }
    else{
     if(bmi<=18.4){
        classify="UNDER WEIGHT"
    }
    else if(bmi>=18.5 && bmi<=24.9){
        classify="NORMAL/healthy weight"
    }
    else if(bmi>=25.0 && bmi<=29.9){
        classify="OVERWEIGHT"
    }
    else {
        classify="OBESE"
    }
}

    // resultBox.style.display = "block";
    resultbox.innerHTML = `Your BMI is: ${bmi}<br>Status${classify}`
    //height,weight,age --> id based ah vanganum

    // apply formula for bmi 

    // if else statements
}