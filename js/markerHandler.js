AFRAME.registerComponent("markerHandler", {
    init: async function(){
        this.el.addEventListener("markerFound", ()=>{
            this.handleMarkerFound()
        })
        this.el.addEventListener("markerLost", ()=>{
            this.handleMarkerLost()
        })
    },

    handleMarkerFound: function() {  
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "flex";
        var ratingButton = document.getElementById("rating-button");
        var orderButton = document.getElementById("order-button");

        ratingButton.addEventListener("click", function(){
            swal({
                icon: "warning",
                title: "Rate Toy",
                text: "Work in Progress"
            })
        })

        orderButton.addEventListener("click", function(){
            swal({
                icon: "https://i.imgur.com/4NZ6uLY.jpg",
                title: "Order Toy",
                text: "Your toy is added into your cart!"
            })
        })

    },

    handleMarkerLost: function() {  
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "none";
    }
})