$(document).ready(function(){

    $("#title").text("jQueryyyyy")
    //$("p:last").css("color", "pink")

    // $(".btn2").click(function(){
    //     $(this).css("background", "lightgreen")
    // })

    $("ul li:first-child").css("color", "orange")

    $("[href]").css("color", "yellow")

    $("tr:odd").css("background", "lightgreen")
    $("tr:even").css("background", "lightblue")

    $("th").css("background", "red")

    $(".btn2").click(function(){
     $(this).css("background", "lightgreen")
     })

     $(".btn2").dblclick(function(){
    $(this).css("background", "brown")
     })

     $(".btn2").mouseenter(function(){
        $("#message").text("Your mouse reached the button")
     })

          $(".btn2").mouseleave(function(){
        $("#message").text("Your mouse leaves the button")
     })

          $(".btn2").mousedown(function(){
        $(this).css("color", "cyan")
     })

          $(".btn2").mouseup(function(){
        $(this).css("color", "white")
     })

     $("#name").focus(function(){
        $("#message").text("Typing...")
        $(this).css("background", "lightyellow")
     })

      $("#name").blur(function(){
        $("#message").text("Output")
        $(this).css("background", "white")
     })

     $("#course").change(function(){
        $("#message").text($(this).val())
     })
    
     $(".btn2").click(function(){
      $("#table").hide("slow")
     })

      $(".btn3").click(function(){
        $("#table").show(2000)
     })
})