jQuery('.add-to-basket').click(function() {
 	var price = jQuery(this).parents('.product_wrapper').find('span.price').html();
	price = price.replace(',','.');
     fbq('track', 'AddToCart',{
     				currency: "PLN", 
     				value: parseFloat(price)
   			       }
   ); 
});



jQuery('#projector_button_basket').click(function() {
 	var prices = jQuery('#projector_price_value').html();
   prices = prices.replace(',','.');
   fbq('track', 'AddToCart',{
     			      currency: "PLN", 
     			      value: parseFloat(prices)
   			    }
   );
});



PageView (any page in your site)
ViewContent (product page)
AddToCart
InitiateCheckout
Purchase
