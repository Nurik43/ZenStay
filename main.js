const hotels = [
    {
      name: "Hilton Garden Inn",
      location: "Ташкент",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/484105483.jpg?k=d381f915f7e9311bf64734cbb87742eec40a834264ba1c1237f7e18f7276060a&o=&hp=1",
      price: "$120 / ночь"
    },
    {
      name: "City Plaza Hotel",
      location: "Самарканд",
      image: "https://source.unsplash.com/featured/?resort",
      price: "$90 / ночь"
    },
    {
      name: "Luxury Stay",
      location: "Бухара",
      image: "https://source.unsplash.com/featured/?luxury-hotel",
      price: "$150 / ночь"
    },
    {
      name: "Luxury Stay",
      location: "Бухара",
      image: "https://source.unsplash.com/featured/?luxury-hotel",
      price: "$150 / ночь"
    },
    {
      name: "Luxury Stay",
      location: "Бухара",
      image: "https://source.unsplash.com/featured/?luxury-hotel",
      price: "$150 / ночь"
    },
    {
      name: "Luxury Stay",
      location: "Бухара",
      image: "https://source.unsplash.com/featured/?luxury-hotel",
      price: "$150 / ночь"
    },
    {
      name: "Luxury Stay",
      location: "Бухара",
      image: "https://source.unsplash.com/featured/?luxury-hotel",
      price: "$150 / ночь"
    },
    {
      name: "Luxury Stay",
      location: "Бухара",
      image: "https://source.unsplash.com/featured/?luxury-hotel",
      price: "$150 / ночь"
    },
    {
      name: "Luxury Stay",
      location: "Бухара",
      image: "https://source.unsplash.com/featured/?luxury-hotel",
      price: "$150 / ночь"
    },
    {
      name: "Luxury Stay",
      location: "Бухара",
      image: "https://source.unsplash.com/featured/?luxury-hotel",
      price: "$150 / ночь"
    },
    {
      name: "Luxury Stay",
      location: "Бухара",
      image: "https://source.unsplash.com/featured/?luxury-hotel",
      price: "$150 / ночь"
    },
    {
      name: "Luxury Stay",
      location: "Бухара",
      image: "https://source.unsplash.com/featured/?luxury-hotel",
      price: "$150 / ночь"
    }
  ];

  function renderHotels(hotelArray) {
    const list = document.getElementById('hotel-list');
    list.innerHTML = '';
    hotelArray.forEach(hotel => {
      list.innerHTML += `
        <div class="bg-white rounded-xl shadow-md overflow-hidden w-full">
          <img src="${hotel.image}" alt="${hotel.name}" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h3 class="text-lg font-bold">${hotel.name}</h3>
            <p class="text-sm text-gray-500">${hotel.location}</p>
            <p class="text-rose-500 font-semibold mt-2">${hotel.price}</p>
          </div>
        </div>
      `;
    });
  }

  function searchHotels() {
    const loc = document.getElementById("location").value.toLowerCase();
    const filtered = hotels.filter(h =>
      h.location.toLowerCase().includes(loc)
    );
    renderHotels(filtered);
  }

  // Initial render
  renderHotels(hotels);


  
  

