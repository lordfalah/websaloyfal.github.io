
// const getButton = document.querySelectorAll(".btn");

// getButton.forEach(button =>{
//     button.addEventListener("click", function(){
//         alert("Are you sure click this Button?");
//     })
// })


// const getLinkNav = document.querySelectorAll(".page-scroll");
// getLinkNav.forEach(linkNav =>{
//     linkNav.addEventListener("click", function(e){
//         var getHref = this.getAttribute("href");
        
//         var elemHref =  document.querySelector(`${getHref}`);
//         console.log(elemHref)
//         // console.log($(elemHref).offset().top);
        
//         $("html, body").animate({
//             scrollTop: elemHref.offsetTop - 15
//         }, 800, "easeInOutQuint");
        
//         e.preventDefault();

      
//     });
// });

const getScroll = document.querySelectorAll(".page-scroll");

getScroll.forEach(allLink =>{
    allLink.addEventListener("click", function(e){
        const getAttr = this.getAttribute("href");
        const parentLink = document.querySelector(`${getAttr}`);
        // console.log(parentLink);
        $("html, body").animate({
            scrollTop: parentLink.offsetTop - 20
        }, 800, "easeInOutQuint")

        e.preventDefault();
    })
})


// Arrow Effect

function arrowTop(){
    $(window).scroll(function(){
        let qScw = document.querySelector("html, body").scrollTop;
        // console.log(qScw);

        if(qScw >= $(".arrow").offset().top - 650 && qScw <= $(".arrow").offset().top){
            // console.log("Muncul");
            $(".arrow").addClass("effect");
        
        }else{
            // console.log("Hilang");
            $(".arrow").removeClass("effect");
        }



        $(".arrow").css({
            transform: `translate(0, ${qScw / 50}%)`
        });
    
    });
};

arrowTop();

// Arrow End






$(window).scroll(function(){
    const wScroll = $("html, body").scrollTop();
    $(".talent").css({
        "transform": `translate(0, ${wScroll / 2}%)`
    });
    
})


const getUsername = document.querySelector(".talent");

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    $(".talent").css({
        "transform": `translate(0, ${wScroll / 1.9}%)`
    }),

    $(".skill").css({
        "transform": `translate(0, ${wScroll / 1.5}%)`
    }),

    $(".logo").css({
        "transform": `rotate(${wScroll / 0.8}deg)`
    }),
    $(".img-sett").css({
        "transform": `translate(0, ${wScroll / 5}%)`,
        
    })
})
    

// portofolio

$(window).scroll(function(){
    gScroll = $(this).scrollTop();
    // console.log(gScroll);

    if(gScroll >= $(".portfolio").offset().top - 655){
        // console.log("nyampe");
        $(".natNav .portfolio").addClass("slide");
    };

});

// portofolio end





// Card

$(window).scroll(function(){
    let diScroll = $(this).scrollTop();
    // console.log(diScroll);

    if(diScroll >= $(".all-card").offset().top - 550 && diScroll <= $(".all-card").offset().top + 600 ){
        // console.log("Jalankan Gambar");
        $(".all-card .card").each(i =>{
            setTimeout(() =>{
                $(".all-card .card").eq(-i).addClass("muncul");
                
            }, 300 * (i - 1));
        })
        
    }else{
            //Efek Menghilang SUdah
        // console.log("Hapus Gambar ini");

        $(".all-card .card").removeClass("muncul");
        $(".all-card .card").css({
            "transform": `translate(0, 50px)`
        });        
    }
    
})

// Card End







// Documentation

$(window).scroll(function(){
    let toScroll = $(this).scrollTop();
    // console.log(toScroll);

    if(toScroll >= $(".info-teks").offset().top - 530 && toScroll <= $(".info-teks .first-teks").offset().top + 80){
        // console.log("AKan muncul")
        $(".info-teks .first-teks").addClass("see");
        $(".info-teks .second-teks").addClass("see");
    }

    else{
        // console.log("Akan dihapus");
        $(".info-teks .first-teks").removeClass("see");
        $(".info-teks .second-teks").removeClass("see");
    }

    // console.log(toScroll);
})




// Documentation End


// Register

$(window).scroll(function(){
    let  myScroll = $(this).scrollTop();
    // console.log(myScroll);


    if(myScroll >= $(".register").offset().top - 450 && myScroll <= $(".register").offset().top + 100){
        // console.log("MUncul input");
        $(".register .form-group").each(allInput =>{
            setTimeout(() =>{
                $(".register .form-group").eq(allInput).addClass("gerak");
            }, 200 * (allInput + 1));
        });
    
    }else{
        // console.log("hapusinput");
        $(".register .form-group").removeClass("gerak");
    };

    
});




// Register End


// Edit Name

function editName(){

    const getMarket = document.querySelector(".market");

    let placeMarket = [...getMarket.textContent]
            .map(abjad => `<span>${abjad}</span>`).join("")

    console.log(placeMarket);
    getMarket.innerHTML = placeMarket;

    let getDocument = document.querySelector(".document");

    let placeDoct = [...getDocument.textContent]
            .map(abjadDoct => `<span>${abjadDoct}</span>`).join("");

    getDocument.innerHTML = placeDoct;

    const getCopy = document.querySelector(".reges");
    let placeCopy = [...getCopy.textContent]
            .map(abjadCopy => `<span>${abjadCopy}</span>`).join("");
    getCopy.innerHTML = placeCopy;
    console.log(placeCopy);

    const right = document.querySelector(".copyRight");
    const placeRight = [...right.textContent]
            .map(copy => `<span>${copy}</span>`).join("");
    
    right.innerHTML = placeRight;

    const navig = document.querySelector(".portfolio");
    const abc = [...navig.textContent]
            .map(huruf => `<span>${huruf}</span>`).join("");
    
    navig.innerHTML = abc;


}

editName();



function copyRight(){
    $(window).scroll(function(){
        const scrollling = $(this).scrollTop();
        // console.log(scrollling);

        if(scrollling >= $(".copyRight").offset().top - 695 && scrollling <= $(".foot-content").offset().top + 100){
            // console.log("menambahkan Efek");
            $(".foot-content .container .copyRight").addClass("trans");
        
        }else{
            $(".foot-content .container .copyRight").removeClass("trans");
            // console.log("teks akan di clear");
        };
        
    });
    
}
copyRight();

// Edit Name ENd



// Img-Click

const getImgClick = document.querySelectorAll(".img-click");
getImgClick.forEach(gambarAll =>{
    gambarAll.addEventListener("click", function(e){
        console.log("Tampil img")
        // $(".blackSreen .img-black").addClass("see");

        
    })
    
})


// Img-Click End







const getShow = document.querySelectorAll(".show");

getShow.forEach(allShow =>{
    allShow.addEventListener("click", function(e){
        // const runSkin = $(this).addClass("close")
        $(".placeOver .close").addClass("skin");
        let gmb = document.querySelectorAll(".gambar");
        gmb.forEach((imgAll) =>{
            imgAll.classList.add("nampak");
                        

        });  
    });
});

// Akan dilanjutkan

// document.body.addEventListener("click", function(e){
//     if(e.target.classList.contains("show")){
//         // console.log("test")
//         let gmb = document.querySelectorAll(".gambar");
//         gmb.forEach(jumboImg => {
//             // console.log(jumboImg);
//             const getImgThumb = document.querySelectorAll(".imgThumb")
//             getImgThumb.forEach(thumb =>{
//                 [jumboImg.src] = [thumb.src];
                
//             })
            
//         });
//     };
// });


// Closeee

const getAllclose = document.querySelectorAll(".close");

getAllclose.forEach(out =>{
    out.addEventListener("click", function(){
        $(".placeOver .close").removeClass("skin");
        $(".gambar").removeClass("nampak")
        console.log("POKKOKOKO");
    });
});

// Close End





// Create Responsive

    
// function scrl(x){
//     $(window).scroll(function(){
//         let tinggi = $(this).scrollTop();
//         console.log(tinggi);
//         if(x.matches){
//             if(tinggi >= 346){ //359
//                 $(".all-card .card").addClass("muncul");
//                 console.log("Muncul");
//             }
//         }
        
//     })
// }


// let myX = window.matchMedia("(max-width: 600px)");
// scrl(myX);


// Create Responsive All For Mobile

function myCard(){
    $(window).scroll(function(){
        let high = $(this).scrollTop();
        // console.log(high);
        
        if(window.matchMedia("(max-width: 700px)").matches){
            if(high >= $(".all-card").offset().top - 500 && high <= $(".all-card").offset().top + 2350){
                // console.log("Muncul Efek");
                $(".all-card .card").each(idxCard =>{
                    setTimeout(() =>{
                        $(".all-card .card").eq(idxCard).addClass("muncul");
                    }, 300 * (idxCard + 1));
                });
                

            }else{
                // console.log("Clear Efek");
                $(".all-card .card").removeClass("muncul");
            };
        };
    });
    
};

myCard();


function teks(){
    $(window).scroll(function(){
        const scrolling = $(this).scrollTop();
        // console.log(scrolling);
    
        if(window.matchMedia("(max-width: 700px)").matches){
            if(scrolling >= $(".info-teks").offset().top - 530 && scrolling <= $(".info-teks .first-teks").offset().top + 80){
                // console.log("lolololoo");
                $(".info-teks .first-teks").addClass("lihat");
                $(".info-teks .second-teks").addClass("lihat");
            
            }else{
                console.log("yahahah hayukk");
                $(".info-teks .first-teks").removeClass("lihat");
                $(".info-teks .second-teks").removeClass("lihat");
            };
        };
    });
        
};

teks();


function linkScroll(){
    const getPageLink = document.querySelectorAll(".page-scroll");


    if(window.matchMedia("(max-width: 700px)").matches){
        getPageLink.forEach(link =>{
            link.addEventListener("click", function(event){
                const getClassid = this.getAttribute("href");
                const parentLink = document.querySelector(`${getClassid}`);
                
                $("html, body").animate({
                    scrollTop: parentLink.offsetTop - 120
                }, 800);


                event.preventDefault();
            });
    
        });
    };

};

linkScroll();






// Create Responsive End



