// JavaScript Document
$(document).ready(function () {

    $('#scart').jfollow('#cartfollow', 20);
	
	$(".productitem").draggable({
		
		revert:true,
		helper: function() {
       
       //return $("<div class='ui-widget-header'>").css('z-index', 100).append($(this).find("<img alt="Show Basket" src="images/tshirticon.png"></div>.title, .listprice").clone());
	   return $("<div class='ui-widget-header'>").css('z-index', 100,style="background-color:orange; border:1px solid black;width:100px;height:100px;line-height:100px;" ).append($(this).find(" .title, .listprice").clone());

    }
		
		
		
		/*drag:function () {
        $(this).addClass("active");
        $(this).closest("#productitem").addClass("active");
    },
	stop:function () {
        $(this).removeClass("active").closest("#productitem").removeClass("active");
    }*/
	});
	
    $(".cartdropbox").droppable({
		activeClass: "active",
		hoverClass: "hover",
		drop: function (event, ui) {
			var box = $(this),
			move = ui.draggable,
			id = "box".find("p[productid ='" + move.attr("productid") + "']");
			if (id.html() !== null) {
				id.find("input").val(parseInt(id.find("input").val()) + 1);
			} else { addProductItem(".productitem", move);
			move.find("input").val(parseInt(move.find("input").val()) + 1);
			}
		}
	});
	
	/*function addProductItem(".productitem", move) {
        ".cartdropbox".find("ul").append('<p productid="' + move.attr("p productid") + '">' + '<span class="name">' + move.find("h4").html() + '</span>' + '<input class="count" value="1" type="text">' + '<button class="delete">✕</button>');
    }
    $(".basket ul li button.delete").live("click", function () {
        $(this).closest("li").remove();
    });			

    
   /* 
        drop: function (event, ui) {

            var basket = $(this),
                move = ui.draggable,
                itemId = basket.find("p[productid='" + move.attr("productid") + "']");

            // To increase the value by +1 if the same item is already in the basket
            if (itemId.html() !== null) {
                itemId.find("input").val(parseInt(itemId.find("input").val()) + 1);
            } else {
                // Add the dragged item to the basket
                addBasket(basket, move);

                // Updating the quantity by +1" rather than adding it to the basket
                move.find("input").val(parseInt(move.find("input").val()) + 1);
            }
        }
    });

    function addBasket(basket, move) {
        basket.find("ul").append('<p productid="' + move.attr("p productid") + '">' + '<span class="name">' + move.find("h4").html() + '</span>' + '<input class="count" value="1" type="text">' + '<button class="delete">✕</button>');
    }
    $(".basket ul li button.delete").live("click", function () {
        $(this).closest("li").remove();
    });*/

});