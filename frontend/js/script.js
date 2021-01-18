$(document).ready(function(){

	// OCULTANDO PRODUCTOS =========================
	$('.services_item').hide();

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.category_item[category="include"]').addClass('ci_active');

	$('.services_item[category="include"]').show();
	// FILTRANDO PRODUCTOS  ============================================

	$('.category_item').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.category_item').removeClass('ci_active');
		$(this).addClass('ci_active');

		// OCULTANDO PRODUCTOS =========================
		$('.services_item').hide();

		// MOSTRANDO PRODUCTOS =========================
		$('.services_item[category="'+catProduct+'"]').show();
	});

});