'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Photos', [
    {title:"X-Rays Indicate Star Ripped Up by Black Hole",
    category:"Black Holes",
    description:"What could rip a star apart? A black hole. Giant black holes in just the right mass range would pull on the front of a closely passing star much more strongly than on the back. Such a strong tidal force would stretch out a star and likely cause some of the star's gasses to fall into the black hole. The infalling gas has been predicted to emit just the same blast of X-rays that have recently been seen in the center of galaxy RX J1242-11. Above, an artist's illustration depicts the sequence of destruction (assuming that image-distorting gravitational-lens effects of the black hole are somehow turned off). Most of the stellar remains would be flung out into the galaxy. Such events are rare, occurring perhaps only one in 10,000 years for typical black holes at the center of typical galaxies.",
    photoUrl:"https://apod.nasa.gov/apod/image/0402/bhstar_chandra.jpg",
    authorCredited:"Illustration Credit: M. Weiss, CXC, NASA",
    userId:1},

    {title:"Sirius: The Brightest Star in the Night",
    category:"Individual Stars",
    description:"Sirius is the brightest star in the night sky. Sirius is visible on the far left of the above photograph, to the left of the constellation of Orion and Comet Hale-Bopp. Intrinsically, Sirius is over 20 times brighter than our Sun and over twice as massive. As Sirius is 8.7 light years distant, it is not the closest star system - the Alpha Centauri system holds this distinction. Sirius is called the Dog Star because of its prominence in the constellation of Canis Majoris (Big Dog). In 1862, Sirius was discovered to be a binary star system with a companion star, Sirius B, 10,000 times dimmer than the bright primary, Sirius A. Sirius B was the first white dwarf star discovered, a type of star first understood by Subrahmanyan Chandrasekhar in 1930. While studying Sirius in 1718, Edmond Halley discovered that stars move with respect to each other. There is conflicting evidence that Sirius appeared more red only 2000 years ago.",
    photoUrl:"https://apod.nasa.gov/apod/image/0006/siriushb_jcc.jpg",
    authorCredited:"Credit & Copyright: Juan Carlos Casado",
    userId:1},

    {title:"Proxima Centauri: The Closest Star",
    category:"Individual Stars",
    description:"What is the closest star to our Sun? It is Proxima Centauri, the nearest member of the Alpha Centauri triple star system. Light takes only 4.22 years to reach us from Proxima Centauri. This small red star, captured in the center of the above image, is so faint that it was only discovered in 1915 and is only visible through a telescope. Stars of all types from our Milky Way Galaxy are visible in the background. The brightest star in the Alpha Centauri system is quite similar to our Sun, has been known as long as recorded history, and is the third brightest star in the night sky. The Alpha Centauri system is primarily visible from Earth's Southern Hemisphere.",
    photoUrl:"https://apod.nasa.gov/apod/image/0512/proximacen1_aao.jpg",
    authorCredited:"Credit & Copyright: David Malin, UK Schmidt Telescope, DSS, AAO",
    userId:1},

    {title:"Polaris: The North Star",
    category:"Individual Stars",
    description:"Polaris is quite an unusual star. First, Polaris is the nearest bright star to the north spin axis of the Earth. Therefore, as the Earth turns, stars appear to rotate around Polaris, making it the North Star. Since no bright star is near the south spin axis of the Earth, there is currently no South Star. Thousands of years ago, Earth's spin axis pointed in a slightly different direction, and Vega was the North Star. Although Polaris is not the brightest star on the sky, it is easily located because it is nearly aligned with two stars in the cup of the Big Dipper, and is the last star in the handle of the Little Dipper. In the above picture, Polaris is the brightest star on the right, above the fleeting streak of a Perseid meteor. The surface of Polaris slowly pulsates, causing the star to change its brightness by a few percent over the course of a few days. This rare Cepheid variability of Polaris is, oddly enough, itself changing.",
    photoUrl:"https://apod.nasa.gov/apod/image/9910/polaris_pacholka.jpg",
    authorCredited:"Credit & Copyright: Wally Pacholka",
    userId:1},

    {title:"M2-9: Wings of a Butterfly Nebula",
    category:"Plantery Nebulae",
    description:"Are stars better appreciated for their art after they die? Actually, stars usually create their most artistic displays as they die. In the case of low-mass stars like our Sun and M2-9 pictured above, the stars transform themselves from normal stars to white dwarfs by casting off their outer gaseous envelopes. The expended gas frequently forms an impressive display called a planetary nebula that fades gradually over thousand of years. M2-9, a butterfly planetary nebula 2100 light-years away shown in representative colors, has wings that tell a strange but incomplete tale. In the center, two stars orbit inside a gaseous disk 10 times the orbit of Pluto. The expelled envelope of the dying star breaks out from the disk creating the bipolar appearance. Much remains unknown about the physical processes that cause planetary nebulae.",
    photoUrl:"https://apod.nasa.gov/apod/image/0506/m2-9b_hst.jpg",
    authorCredited:"Credit: B. Balick (U. Washington) et al., WFPC2, HST, NASA",
    userId:1},

    {title:"Crab Nebula Mosaic from HST",
    category:"Supernova Remnents",
    description:"The Crab Nebula is cataloged as M1, the first object on Charles Messier's famous list of things which are not comets. In fact, the cosmic Crab is now known to be a supernova remnant, an expanding cloud of debris from the death explosion of a massive star. Light from that stellar catastrophe was first witnessed by astronomers on planet Earth in the year 1054. Composed of 24 exposures taken in October 1999, January 2000, and December 2000, this Hubble Space Telescope mosaic spans about twelve light years. Colors in the intricate filaments trace the light emitted from atoms of hydrogen, oxygen, and sulfur in the debris cloud. The spooky blue interior glow is emitted by high-energy electrons accelerated by the Crab's central pulsar. One of the most exotic objects known to modern astronomers, the pulsar is a neutron star, the spinning remnant of the collapsed stellar core. The Crab Nebula lies about 6,500 light-years away in the constellation Taurus.",
    photoUrl:"https://apod.nasa.gov/apod/image/0512/crabmosaic_hst_c80.jpg",
    authorCredited:"Image Credit: NASA, ESA, J. Hester, A. Loll (ASU)",
    userId:1},

    {title:"A Primordial Quasar",
    category:"Miscellaneous: Quasars",
    description:"What did the first quasars look like? The nearest quasars are now known to be supermassive black holes in the centers of galaxies. Gas and dust that falls toward a quasar glows brightly, sometimes outglowing the entire home galaxy. The quasars that formed in the first billion years of the universe are more mysterious, though, with even the nature of the surrounding gas still unknown. Above, an artist's impression shows a primordial quasar as it might have been, surrounded by sheets of gas, dust, stars, and early star clusters. Exacting observations of three distant quasars now indicate emission of very specific colors of the element iron. These Hubble Space Telescope observations, which bolster recent results from the WMAP mission, indicate that a whole complete cycle of stars was born, created this iron, and died within the first few hundred million years of the universe.",
    photoUrl:"https://apod.nasa.gov/apod/image/0305/firstqsos_esa.jpg",
    authorCredited:"Drawing Credit: Wolfram Freudling et al. (STECF), ESO, ESA, NASA",
    userId:1},

    {title:"The Heart and Soul Nebulas",
    category:"Nebulae: Emission Nebulae",
    description:"Is the heart and soul of our Galaxy located in Cassiopeia? Possibly not, but that is where two bright emission nebulas nicknamed Heart and Soul can be found. The Heart Nebula, officially dubbed IC 1805 and visible above on the right, has a shape reminiscent of a classical heart symbol. Both nebulas shine brightly in the red light of energized hydrogen. Several young open clusters of stars populate the image and are visible above in blue, including the nebula centers. Light takes about 6,000 years to reach us from these nebulas, which together span roughly 300 light years. Studies of stars and clusters like those found in the Heart and Soul Nebulas have focussed on how massive stars form and how they affect their environment.",
    photoUrl:"https://apod.nasa.gov/apod/image/0310/heartandsoul_dss.jpg",
    authorCredited:"Credit & Copyright: Richard Powell, Digitized Sky Survey, Palomar Observatory, STScI",
    userId:1},

    {title:"IC 1396 H-Alpha Close-Up",
    category:"Nebulae: Emission Nebulae",
    description:"Clouds of glowing hydrogen gas mingle ominously with dark dust lanes in this close-up of IC 1396, an active star forming region some 2,000 light years away in the constellation Cepheus. In this and other similar emission nebulae, energetic ultraviolet light from a hot young star strips electrons from the surrounding hydrogen atoms. As the electrons and atoms recombine they emit longer wavelength, lower energy light in a well known characteristic pattern of bright spectral lines. At visible wavelengths, the strongest emission line in this pattern is in the red part of the spectrum and is known as 'Hydrogen-alpha' or just H-alpha. Part of IPHAS, a survey of H-alpha emission in our Milky Way Galaxy, this image spans about 20 light-years and highlights bright, dense regions within IC 1396, likely sites where massive new stars are born.",
    photoUrl:"https://apod.nasa.gov/apod/image/0509/ic1396b_wright_f13.jpg",
    authorCredited:"Credit: Nick Wright (University College London), IPHAS Collaboration",
    userId:1},

    {title:"An Orion Deep Field",
    category:"Nebulae: Emission Nebulae",
    description:"Adrift 1,500 light-years away in one of the night sky's most recognizable constellations, the glowing Orion Nebula and the dark Horsehead Nebula are contrasting cosmic vistas. They both appear in this stunning composite digital image assembled from over 20 hours of data that includes exposures filtered to record emission from hydrogen atoms. The view reveals extensive nebulosities associated with the giant Orion Molecular Cloud complex, itself hundreds of light-years across. The magnificent emission region, the Orion Nebula (aka M42), lies at the upper right of the picture. Immediately to its left are a cluster of of prominent bluish reflection nebulae sometimes called the Running Man. The Horsehead nebula appears as a dark cloud, a small silhouette notched against the long red glow at the lower left. Alnitak is the easternmost star in Orion's belt and is seen as the brightest star to the left of the Horsehead. Below Alnitak is the Flame Nebula, with clouds of bright emission and dramatic dark dust lanes. Fainter tendrils of glowing hydrogen gas are easily traced throughout the region in this Orion deep field.",
    photoUrl:"https://apod.nasa.gov/apod/image/0401/OriondeepfieldM_gendler_c2.jpg",
    authorCredited:"Credit & Copyright: Robert Gendler",
    userId:1},


    {title:"A Fox Fur, a Unicorn, and a Christmas Tree",
    category:"Nebulae: Emission Nebulae",
    description:"What do the following things have in common: a cone, the fur of a fox, and a Christmas tree? Answer: they all occur in the constellation of the unicorn (Monoceros). Pictured as a star forming region and cataloged as NGC 2264, the complex jumble of cosmic gas and dust is about 2,700 light-years distant and mixes reddish emission nebulae excited by energetic light from newborn stars with dark interstellar dust clouds. Where the otherwise obscuring dust clouds lie close to the hot, young stars they also reflect starlight, forming blue reflection nebulae. The image spans about the diameter of a full moon, covering about 30 light-years at the distance of NGC 2264. Its cast of cosmic characters includes the Fox Fur Nebula, whose convoluted pelt lies on the lower right, bright variable star S Mon visible just above the Fox Fur, and the Cone Nebula on the image left. Given their distribution, the stars of NGC 2264 are also known as the Christmas Tree star cluster. The triangular tree shape traced by the stars appears here with its apex at the Cone Nebula on the left with its broader base near S Mon on the right.",
    photoUrl:"https://apod.nasa.gov/apod/image/1501/conefox_colombari_960.jpg",
    authorCredited:"Image Credit & Copyright: R. Colombari & Francesco Antonucci; Data: Subaru, ESO, & F. Antonucci",
    userId:1},
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     const Op = Sequelize.Op;
   return queryInterface.bulkDelete('Photos', {
      // title: {
      //   [Op.in]: ['X-Rays Indicate Star Ripped Up by Black Hole',
      //   'Sirius: The Brightest Star in the Night',
      //   'Proxima Centauri: The Closest Star',
      //   'Polaris: The North Star',
      //   'M2-9: Wings of a Butterfly Nebula',
      //   'Crab Nebula Mosaic from HST',
      //   'A Primordial Quasar',
      //   'The Heart and Soul Nebulas',
      //   'IC 1396 H-Alpha Close-Up',
      //   'An Orion Deep Field',
      //   'A Fox Fur, a Unicorn, and a Christmas Tree']
      // }
   });
  }
};
