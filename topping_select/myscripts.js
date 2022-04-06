let dips= true;
let options=false;
function toggle(target,h2){
    if(dips){
    document.getElementById(target).style.display="none";
    document.getElementById(h2).innerHTML=" + דיפים - רטבים";
    dips=false;
        }
    else{
            document.getElementById(target).style.display="inline";
            document.getElementById(h2).innerHTML=" - דיפים - רטבים";
            dips=true;
                }
    }
    function toggleOptions(target,h2){
        if(options){
        document.getElementById(target).style.display="none";
        document.getElementById(h2).innerHTML="+ אפשרויות נוספות";
        options=false;
            }
        else{
                document.getElementById(target).style.display="inline";
                document.getElementById(h2).innerHTML="- אפשרויות נוספות";
                options=true;
                    }
        }