var Images = ["https://thumbs.dreamstime.com/z/kerala-indian-woman-cute-134899939.jpg",
             "https://comps.canstockphoto.com/little-girl-cartoon-holding-bear-st-eps-vectors_csp18700033.jpg",
            
             "https://i.pinimg.com/236x/9c/89/db/9c89dbaab265183665fe0e9462531580.jpg",
            
             "https://thumbs.dreamstime.com/z/cartoon-vector-smiling-chinese-girl-overalls-cartoon-vector-smiling-chinese-girl-overalls-vector-illustration-isolated-192018628.jpg" ,
              
              "https://images.booksense.com/images/409/070/9780316070409.jpg"
             ];
            
            var names =["Mommy",
                      "Sister",
                      "Father",
                        "Me!",
                        "Family Book"
            ];
var i=0;
function Change(){
var t=4;
i++;
if (i >t)
  {
    i=0;
  }
document.getElementById("m").src=Images[i];
document.getElementById("name").innerHTML=names[i];
}
