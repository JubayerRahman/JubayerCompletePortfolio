document.getElementById("experienceData").style.display= "none"
document.getElementById("educationData").style.display= "none"
//button
document.getElementById("experience").style.border= "none"
document.getElementById("education").style.border= "none"
function skills(){
    document.getElementById("skillData").style.display= "block"
    document.getElementById("experienceData").style.display= "none"
    document.getElementById("educationData").style.display= "none"
    //button
    document.getElementById("experience").style.border= "none"
    document.getElementById("education").style.border= "none"
    document.getElementById("skills").style.borderBlockEnd= "4px solid rgb(223, 86, 86)"
}

function experience(){
    document.getElementById("experienceData").style.display= "block"
    document.getElementById("skillData").style.display= "none"
    document.getElementById("educationData").style.display= "none"
    //button
    document.getElementById("experience").style.borderBlockEnd= "4px solid rgb(223, 86, 86)"
    document.getElementById("education").style.border= "none"
    document.getElementById("skills").style.border= "none"
}

function education(){
    document.getElementById("skillData").style.display= "none"
    document.getElementById("experienceData").style.display= "none"
    document.getElementById("educationData").style.display= "block"
    //button
    document.getElementById("education").style.borderBlockEnd= "4px solid rgb(223, 86, 86)"
    document.getElementById("experience").style.border= "none"
    document.getElementById("skills").style.border= "none"
}