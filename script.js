function fetchApiData(url) {
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  
  
  function createPictureCard(picture) {
    const card = document.createElement('div');
    card.classList.add('col-md-4', 'mb-4');
  
    const img = document.createElement('img');
    img.classList.add('img-fluid');
    img.src = picture.url;
    img.alt = picture.title;
  
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
  
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = picture.title;
  
    cardBody.appendChild(cardTitle);
    card.appendChild(img);
    card.appendChild(cardBody);
  
    return card;
  }
  
  // Function to populate pictures section with API data
  function populatePicturesSection() {
    const picturesGrid = document.getElementById('pictures-grid');
  
    fetchApiData('https://jsonplaceholder.typicode.com/photos')
      .then((data) => {
        data.slice(0, 9).forEach((picture) => {
          const card = createPictureCard(picture);
          picturesGrid.appendChild(card);
        });
      });
  }
  
  // Event listener for form submission
  document.getElementById('picture-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const pictureUrl = document.getElementById('picture-url').value;
    const picturesGrid = document.getElementById('pictures-grid');
  
    const picture = {
      id: picturesGrid.childElementCount + 1,
      title: 'New Picture',
      url: pictureUrl,
    };
  
    const card = createPictureCard(picture);
    picturesGrid.appendChild(card);
  
    // Clear form input
    document.getElementById('picture-url').value = '';
  });
  
  // Populate pictures section on page load
  populatePicturesSection();
  