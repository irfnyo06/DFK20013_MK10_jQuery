function semak(){

    var username = $("#username").val();
    var password = $("#password").val();

    if(username == "" && password == ""){
        alert("Sila isi username dan password");
        return false;
    }

    else if(username == ""){
        alert("Username belum diisi");
        return false;
    }

    else if(password == ""){
        alert("Password belum diisi");
        return false;
    }

    else{
        alert("Data berjaya dihantar");
        return true;
    }

}