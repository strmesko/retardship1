placebutton("Explore", "Explore the entire tile for further investigate. Full tile exploration reveals neighbour tiles");
calculateStats();
stupidResConstructor('div', 'livemap', '', 'livemap', 'mapcontent', 'hurr durr');
panzoom(livemap, {
    bounds: true,
    bound: {
        top:-50,
        bottom:500,
        left:500,
        right:500,
        },
    minZoom: 0.1,

  });
