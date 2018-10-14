var db
window.onload = function(){
db = firebase.database().ref('applicants');
db.once("value").then(getApplicants)
}

function addApplicant (){
    var firstName = document.getElementById("firstName").value
    var lastName = document.getElementById("lastName").value
    try{
        db.push({
            firstName: firstName,
            lastName: lastName,
        }, function() {
            var success = firstName + " " + lastName + " has been successfully added."
            console.log(success)
            clearFields()
        })
        
    }
    catch(e){
        console.warn("Error while adding applicant " + firstName + " " + lastName + "\n" + e)
    }
}

function getApplicants(snapshot){
    var applicants = snapshot.val();
    console.log(applicants)
    return applicants
} 

function clearFields(){
    document.getElementById("firstName").value = null
    document.getElementById("lastName").value = null
}