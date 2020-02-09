$(function () {

    $("#submitButton").on("click", function (event) {

        event.preventDefault();

        alert("you hit create")
        var burgers_create = $("#inputForm").val().trim();
        var newBurger = {

            burger_name: burgers_create,

            devoured: 0

        };
        console.log(burgers_create);


        $.ajax("/api/burgers", {

            type: "POST",

            data: newBurger

        }).then(function () {



            location.reload();

        });

    });

    $(".change-devour").on("click", function (event) {

        event.preventDefault();

        var id = $(this).data("id");

        var devourState = {

            devoured: 1

        };



        $.ajax("/api/burgers/"+ id, {

            type: "PUT",

            data: devourState

        }).then(function () {

  

            location.reload();

        });

    });

    

    $("#deleteButton").on("click", function(event){

        event.preventDefault();

      

        var id = $(this).data("id");



        $.ajax({

            type: "DELETE",

            url: "/api/burgers/" + id

        }).then(function(){


            location.reload()});

    });

});