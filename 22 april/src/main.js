"use strict"
let items = document.querySelectorAll(".item")
let lis = document.querySelectorAll(".li");



[...lis].map(li => {
    li.onclick = function () {
        let liActive = document.querySelector(".li.active")
        liActive.classList.remove("active")
        this.classList.add("active")

        let dataID = this.getAttribute("data-type");
        console.log(dataID)
        let i = 7;
        let j = 0;
        [...items].map(item => {

            item.classList.add("d-none")

            if (item.classList.contains(dataID)) {
                item.classList.remove("d-none")
            }

            else if (dataID === "all") {
                item.classList.remove("d-none")
            }

            else if (dataID === "ASC") {
                item.classList.remove("d-none");
                item.classList.remove(`order-${i--}`)
                item.classList.add(`order-${j++}`)

            }

            else if (dataID === "DESC") {
                item.classList.remove("d-none");
                item.classList.remove(`order-${j++}`)
                item.classList.add(`order-${i--}`)

            }
        })
    }
})




// home-work-2
let area = document.querySelector(".area")
let input = document.querySelector(".input")
let dropareaImage = document.querySelector(".droparea-Image")
let dropareaVideo = document.querySelector(".droparea-Video")
let dropareaMusic = document.querySelector(".droparea-music")
let sizeArea = document.querySelector(".sizeArea")

let countimage = document.querySelector(".count-image")
let countvideo = document.querySelector(".count-video")
let countmusic = document.querySelector(".count-music")




area.onclick = function () {
    input.click()
};
let count = 0;
let count1 = 0;
let count2 = 0;



let Musicsize=0 ;
let Videosize = 0;
let Imagesize = 0;

input.onchange = function (e) {
    [...e.target.files].forEach(file => {
       
        console.log(Imagesize)
        if (file.type.match("image/*")) {
            let reader = new FileReader();
            
          
            reader.onloadend = function (event) {
                let image = document.createElement("img");
                image.classList.add("img");
                image.src = event.target.result;
                dropareaImage.appendChild(image);

                Imagesize += parseInt((file.size / 1024))

                count++;
                countimage.innerHTML = `image ${count}`;
            }
            reader.readAsDataURL(file);
        }

        if (file.type.match("video/*")) {
            let reader = new FileReader();
            reader.onloadend = function (event) {
                let icon = document.createElement("i");
                icon.classList.add("far", "fa-play-circle", "fa-3x");

                dropareaVideo.appendChild(icon);

                Videosize = parseInt((file.size / 1024))
        
                count1++;
                countvideo.innerHTML = `video ${count1}`;
            }
            reader.readAsDataURL(file);
        }

        if (file.type.match(".mp3")) {
            let reader = new FileReader();
            reader.onloadend = function (event) {
                let icon2 = document.createElement("i");
                icon2.classList.add("fas", "fa-music", "fa-3x");

                dropareaMusic.appendChild(icon2);
                Musicsize += parseInt((file.size / 1024))


                count2++;
                countmusic.innerHTML = `music ${count2}`;
            }

            reader.readAsDataURL(file);
        }
    })
}

area.ondragover = function (e) {
    e.preventDefault();
}



area.ondrop = function (e) {
    e.preventDefault();

    [...e.dataTransfer.files].forEach(file => {
        if (file.type.match("image/*")) {
            let reader = new FileReader();
            reader.onloadend = function (event) {
                let image = document.createElement("img");
                image.classList.add("img");
                image.src = event.target.result;
                dropareaImage.appendChild(image);

                Imagesize += parseInt((file.size / 1024))

                count++;
                countimage.innerHTML = `image ${count}`;
            }
            reader.readAsDataURL(file);
        }

        if (file.type.match("video/*")) {
            let reader = new FileReader();
            reader.onloadend = function (event) {
                let icon = document.createElement("i");
                icon.classList.add("far", "fa-play-circle", "fa-3x");

                dropareaVideo.appendChild(icon);

                Videosize = parseInt((file.size / 1024))

                count1++;
                countvideo.innerHTML = `video ${count1}`;
            }
            reader.readAsDataURL(file);
        }

        if (file.type.match(".mp3")) {
            let reader = new FileReader();
            reader.onloadend = function (event) {
                let icon2 = document.createElement("i");
                icon2.classList.add("fas", "fa-music", "fa-3x");

                dropareaMusic.appendChild(icon2);
                Musicsize += parseInt((file.size / 1024))


                count2++;
                countmusic.innerHTML = `music ${count2}`;
            }

            reader.readAsDataURL(file);
        }
    })
}










