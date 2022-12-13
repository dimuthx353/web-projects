$(document).ready(function () {

    $("#open").click(function (e) {
        e.preventDefault();
        $("#body").css("height", "100vh");
        $("#body").css("overflow", "hidden");
        $("#navigation").toggleClass("active-1");
        $("nav").toggleClass("active-2");
        $("#close").css("display", "flex");
        $("#open").css("display", "none");
        $("#welcome").css("display", "none");

    });

    $("#close").click(function (e) {
        e.preventDefault();
        $("#body").css("height", "auto");
        $("#body").css("overflow", "auto");
        $("#navigation").toggleClass("active-1");
        $("nav").toggleClass("active-2");
        $("#open").css("display", "flex");
        $("#close").css("display", "none");
        $("#welcome").css("display", "block");
    });




    $(".table-facts").hover(function () {
        $(".box").css("display", "block");
        $(this).css("cursor", "pointer");
        $(this).css("color", "#FFEAA7");
        $(this).css("box-shadow", "none")
        console.log("hover in");

    }, function () {
        $(".box").css("display", "none");
        console.log("hover out");
        $(this).css("color", "#fff");
        $(this).css("box-shadow", "rgb(255 255 255 / 80%) 0px 5px 15px")
    }
    );


    var myIndex = 0;
    carousel();

    function carousel() {
        var i;
        var x = $(".slide");

        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }

        myIndex++;
        if (myIndex > x.length) {
            myIndex = 1;
        }

        x[myIndex - 1].style.display = "block";
        setTimeout(carousel, 2000)
    };




    $(".card").hover(function () {
        $(".text").stop().slideDown(1000);
        $('.text').css("display", "flex");
        $(".card").css("margin-bottom", "50px");


    }, function () {
        $(".text").stop().slideUp(2000);
        $(".card").css("margin-bottom", "0px");

    }
    );






















});

