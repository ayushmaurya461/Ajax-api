const loadUsers = () => {
    // console.log("HEllo there...!")
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users', true);

    //  console.log(xhr);
    xhr.onload = () => {
        var HelloUSer = JSON.parse(xhr.responseText);
        // console.log(HelloUSer);
        // document.querySelector('.myUsers').innerHTML = xhr.responseText;
        // document.querySelector(".test").innerHTML = HelloUSer;
        var out = "";

        for (var i in HelloUSer) {
            out +=
                '<div class="newUser">' +
                '<img src = "' + HelloUSer[i].avatar_url + '" width = "60" height="60">' +
                '<ul>' +
                '<li> Name: ' + HelloUSer[i].login + '</li>' +
                '<li> ID: ' + HelloUSer[i].id + '</li>' +
                '<li><a href = "' + HelloUSer[i].html_url + '">Github Profile</a></li>' +
                '</ul>' +
                '</div>'
        }
        // for(var i in HelloUSer){

        //    var newDiv = document.createElement("div");
        //    var newUl = document.createElement("ul");
        //    var li1 = document.createElement("li");
        //    var textName = document.createTextNode("ID :" + HelloUSer[i].id)

        //    li1.appendChild(textName);
        //    newUl.appendChild(li1);
        //    newDiv.appendChild(newUl);

        //    out += newDiv;


        // }

        document.querySelector('.myUsers').innerHTML = out;
    }

    xhr.send();
    // console.log(xhr.onload)

}
document.getElementById('button1').addEventListener('click', loadUsers);