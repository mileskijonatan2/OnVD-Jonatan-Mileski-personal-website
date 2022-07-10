function change(){
    let title = document.getElementById("animated");
    let titles = ["About", "Education", "Skills", "Hobbies", "Contact" ];
    let links = ["about.html", "education.html", "skills.html", "contact.html" ];
    let i=0;
    setInterval(myFunction, 2000);
    function myFunction(){
        title.classList.toggle("fade");
        title.href=links[i];
        title.innerHTML=titles[i];
        i++;
        if(i===5){
            i=0;
        }
    }
}

function collapse1(x){
    let table = document.getElementById("sec-"+x);
    let icon = document.getElementsByClassName("icon")[x-1];
    if(table.style.display==="none"){
        table.style.display="table";
        icon.innerHTML="<i class='bx bx-chevron-up bx-sm'></i>";
    }
    else {
        table.style.display="none";
        icon.innerHTML="<i class='bx bx-chevron-down bx-sm'>";
    }
}

function showMsg(){
    alert("Oops! It seems like we have some difficulties getting your submission. Please use the alternative contact links below.")
}
