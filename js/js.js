  //  betölti a képeket dat [] -be
 let dat=[
  {
    image: 'img/erdo.jpg',
    title: 'Erdő',
    blurb:
      '"Ez egy gyönyörű erdő ahol érdemes lenne sétálni"',
  },
  {
    image: 'img/lake-1581879_1920.jpg',
    title: 'Tél',
    blurb:
      '"Havas tájról mi jut eszedbe?"',
  },
  {
    image: 'img/road-1072821_1920.jpg',
    title: 'Ősz',
    blurb:
      '"Csodaszép színes levelek"',
   
  },
  {
    image: 'img/tree-736885_1280.jpg',
    title: 'Napnyugta',
    blurb:
      '"Elkezdődött egy csodálatos Nap lemente"',
  },
  {
    image: 'img/tree-276014_1920.jpg',
    title: 'Tavasz',
    blurb:
      '"Frisseséget árasztó virágos tavaszi Pázsit"',
  },
  {
    image: 'img/poppies-174276_1920.jpg',
    title: 'Pipacsok',
    blurb:
      '"A Pipacsok Területén"',
  },
  {
    image: 'img/drop-3698073_1920.jpg',
    title: 'Víz Csepp',
    blurb:
      '"Eső csepp"',
  },
];
  let current = 0;
// végig megy a tombon egy for ciklus segítségével

for (let i = 0; i < dat.length; i++) {
  $('#kep').append(
    $(
      `<div class='thumb' id="${i}"><img src="${dat[i].image}"><p class='hidden'>${dat[i].title}</p></div>`
    )
  );
    }
    
  //beolvassuk a képeket,feliratokat, index szerint : ez is meg volt már 
   loadPicture =(index)=> { 
    $('#photo').attr('src', dat[index].image);
    $('#title').text(dat[index].title);
    $('#blurb').text(dat[index].blurb);
  current = index;
  }
  
  loadPicture(current);
  // nyil clickelésre beolvassa a képet ha a aktuális kép indexe kisebb a data.hosszúságnál ez meg volt már
  $('#next').click(() => {
    if (current < dat.length - 1) {
      // léptetjük
      current++;
      // betölti az aktuális képet index szerint
      loadPicture(current);
    }
  });
  // nyil clickelésre beolvassa a képet ha a aktuális kép indexe nagyobb mint 0 
  $('#previous').click(() => {
    if (current > 0) {
      current--;
      loadPicture(current);
    }
  });
  // ráklikelünk a kisképre ,akkor be rakja nagyba ezt nem tudtam szintén
  $('#kep').on('click', '.thumb', function () {
    loadPicture($(this).attr('id'));
  });
  
  $('.showOnHover').hover(
    //fakulas funkcio
    () => {
       
      $('#description').fadeIn('fast');
      $('#title').fadeIn('fast');
      $('#blurb').fadeIn('fast');
    },
    //elhalványuló hatás
    () =>  {
       
      
      $('#description').fadeOut();
      $('#title').fadeOut();
      $('#blurb').fadeOut();
    }
  );
  