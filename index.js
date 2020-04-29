var checkbox = document.querySelector("input[type=checkbox]");

var cardNumber = document.querySelectorAll(".card").length;

var ticketNumber = document.querySelectorAll(".ticket").length;

var num = document.querySelectorAll(".number").length;

checkbox.addEventListener( 'change', function() {

    if(this.checked) {
        document.querySelector(".title").classList.replace("light-title","dark-title")
        document.querySelector(".subtitle").classList.replace("light-sub","dark-sub")
        document.querySelector(".theme").classList.replace("light-sub","dark-sub")
        document.querySelector(".overview").classList.replace("light-title","dark-title")
        document.querySelector("body").classList.replace("light-bg","dark-bg")
        document.querySelector("#top-container").classList.replace("light-top-bg","dark-top-bg")
        document.querySelector(".title-container").classList.replace("light-top-bg","dark-top-bg")

        for(var i = 0; i < cardNumber; i++){
          document.querySelectorAll(".card")[i].classList.replace("light-card","dark-card")
          document.querySelectorAll(".card-title")[i].classList.replace("light-sub","dark-sub")
          document.querySelectorAll(".followers")[i].classList.replace("light-sub","dark-sub")
          document.querySelectorAll(".number")[i].classList.replace("light-title","dark-title")
        }

        for(var j = 0; j < ticketNumber; j++){
          document.querySelectorAll(".ticket")[j].classList.replace("light-card","dark-card")
          document.querySelectorAll(".ticket-title")[j].classList.replace("light-sub","dark-sub")
          document.querySelectorAll(".ticket-number")[j].classList.replace("light-title", "dark-title")
        }


    } else {

        document.querySelector(".title").classList.replace("dark-title","light-title")
        document.querySelector(".subtitle").classList.replace("dark-sub","light-sub")
        document.querySelector(".theme").classList.replace("dark-sub","light-sub")
        document.querySelector(".overview").classList.replace("dark-title","light-title")
        document.querySelector("body").classList.replace("dark-bg","light-bg")
        document.querySelector("#top-container").classList.replace("dark-top-bg","light-top-bg")
        document.querySelector(".title-container").classList.replace("dark-top-bg","light-top-bg")

        for(var i = 0; i < cardNumber; i++){
          document.querySelectorAll(".card")[i].classList.replace("dark-card","light-card")
          document.querySelectorAll(".card-title")[i].classList.replace("dark-sub","light-sub")
          document.querySelectorAll(".followers")[i].classList.replace("dark-sub","light-sub")
          document.querySelectorAll(".number")[i].classList.replace("dark-title","light-title")
        }

        for(var j = 0; j < ticketNumber; j++){
          document.querySelectorAll(".ticket")[j].classList.replace("dark-card","light-card")
          document.querySelectorAll(".ticket-title")[j].classList.replace("dark-sub","light-sub")
          document.querySelectorAll(".ticket-number")[j].classList.replace("dark-title", "light-title")
        }


    }
});
