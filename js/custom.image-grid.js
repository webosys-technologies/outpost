	/* ------------------------------------------------------------------------ */
	// imagesGrid For Gallery
	/* ------------------------------------------------------------------------ */


	$('#gallery').imagesGrid({
		cells: 5,
		align: true,
        images: [
            'images/top-destinations/01.jpg',
            { src: 'images/top-destinations/02.jpg', alt: 'Nature', title: 'Nature' },
            'images/top-destinations/03.jpg',
            { src: 'images/top-destinations/04.jpg', caption: 'The long way' },
            'images/top-destinations/05.jpg',
            'images/top-destinations/06.jpg',
            'images/top-destinations/07.jpg'
        ],
        align: true
    });
  