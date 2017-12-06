$(function() {

	$('#js-shopping-list-form').submit( function(event) { 
		event.preventDefault();
		console.log( event );

		const shoppingItem = $('.js-shopping-list-entry').val();
		 //console.log( shoppingItem );
		 // console.log( shoppingItem.attr("name") );
		
		$('.js-shopping-list-entry').val("");

		function checkLength(item, minLength){
			var el, elMsg;
			el = item;
			elMsg = document.getElementById('error');

			if (item.length  < minLength) {
				elMsg.innerHTML = 'Item must be at least ' + minLength + ' characters long!';
				$('shopping-list').append(''); 
			} else {
				elMsg.innerHTML = '';
				$('.shopping-list').append(
				`<li>
		        <span class="shopping-item">${shoppingItem} </span> 
		        <div class="shopping-item-controls">
		          <button class="shopping-item-toggle">
		            <span class="button-label">check</span>
		          </button>
		          <button class="shopping-item-delete">
		            <span class="button-label">delete</span>
		          </button>
		        </div>
		      </li>`
				);
			}
  	}

  	checkLength(shoppingItem, 2);

  	$('#back').focus();
	  	setTimeout(function() {
        $('#back').css("background-color", "#060600");
        $("h1").css("color", "#fff", "transition", "background-color 2s ease");
        $("h1 span").css("color", "yellow", "transition", "background-color 2s ease");
        $("#error").css("color", "#fff", "transition", "background-color 2s ease");
        $("label").css("color", "yellow", "transition", "background-color 2s ease");

    }, 2000);

	  function sale(item){
	  	var el, elMsg, start;
	  	var start = new Date().toISOString().slice(0, 10);
	  	el = item.toLowerCase();
	  	elMsg = document.getElementById('sale');
	  	console.log(elMsg);

	  	var sale_items = ['sugar', 'cheese', 'coffee', 'rice'];
	  	for (var i = 0; i < sale_items.length; i++ ) {
	  		if ( sale_items[i] === el ) {
	  			console.log(sale_items[i] === el); // true
	  			elMsg.innerHTML = el + " on SALE until " + start + "!";
	  		} 
	  	}
	  }
	
		sale(shoppingItem);

	});

	$('.shopping-list').on('click', '.shopping-item-delete', function(event) { 
		$(this).closest('li').remove();
	});

	$('.shopping-list').on('click', '.shopping-item-toggle', function(event) { 
		$(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
	});

	$('.shopping-item-reset').click(function(event) { 
		window.location.reload();
	});

});


