$(document).ready(function () {
	function create_grid(c) {
		delete_grid();
		let grid = $('#grid');
		let w = grid.width();
		let sq_w = w / c;
		for (let j = 0; j < c; j++) {
			let row = $('<div class="row"></div>');
			row.width(sq_w).height(w);
			row.css('display', 'inline-block');
			grid.append(row);
			for (let i = 0; i < c; i++) {
				let div = $('<div class="square"></div>');
				div.width(sq_w).height(sq_w);
				div.css('border', '1px solid black');
				row.append(div);
			}
		}
	}

	function delete_grid() {
		$('#grid').html('');
	}

	$('input[name="squares"]').keyup(function() {
		create_grid($(this).val());
	});

});