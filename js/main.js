
		$(".all-cards").each(function(){
			var title;
			$(".card").click(function(){
				$(".card").removeClass('flipped');
				$(this).toggleClass('flipped');
				title = $(this).attr('title');
			//alert("User flipped " + title);
			console.log("User flipped " + title);
		});
		});

		