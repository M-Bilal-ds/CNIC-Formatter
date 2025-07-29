function Validate(){
    let cnic = document.getElementById("cnic").value; 
    if (cnic[5] != '-'){
        cnic = cnic.slice(0, 5) + "-" + cnic.slice(5);
    }
    if (cnic[13] != '-'){
        cnic = cnic.slice(0, 13) + "-" + cnic.slice(13);
    }
    if (cnic.length != 15){
        alert("Invalid CNIC!");
        return
    }
    document.getElementById("output").textContent = cnic;
}

