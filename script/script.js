function toggleNavbar() {
	const navbar = document.querySelector(".nav-bar");
	navbar.classList.toggle("active");
  }
  
  window.addEventListener('load', function() {
	new Glider(document.querySelector('.carousel__lista'), {
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: '.carousel__indicadores',
	  arrows: {
		prev: '.carousel__anterior',
		next: '.carousel__siguiente'
	  },
	  responsive: [
		{
		  
		  breakpoint: 450,
		  settings: {
			
			slidesToShow: 2,
			slidesToScroll: 2
		  }
		},
		{
		  
		  breakpoint: 800,
		  settings: {
			slidesToShow: 4,
			slidesToScroll: 4
		  }
		}
	  ]
	});
  });

const images = document.querySelectorAll('.container img');


const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const modalImage = document.querySelector('.modal-image');
const modalTitle = document.querySelector('.modal-title');
const modalDescription = document.querySelector('.modal-description');
const closeButton = document.querySelector('.close');

function openModal(image) {
  
  const imageUrl = image.getAttribute('src');
  const imageAlt = image.getAttribute('alt');
  const imageDescription = image.nextElementSibling.innerHTML;

 
  modalImage.src = imageUrl;
  modalTitle.textContent = imageAlt;
  modalDescription.textContent = imageDescription;

  
  modal.style.display = 'block';
}


images.forEach((image) => {
  image.addEventListener('click', () => {
    openModal(image);
  });
});


closeButton.addEventListener('click', () => {
  // Ocultar el modal
  modal.style.display = 'none';
});


modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
	event.preventDefault(); 
  
	
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var subject = document.getElementById('subject').value;
	var message = document.getElementById('message').value;
  
	
	if (!name || !email || !subject || !message) {
	  alert('Por favor, completa todos los campos del formulario.');
	  return;
	}
  
	
	var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailPattern.test(email)) {
	  alert('Por favor, introduce una dirección de correo electrónico válida.');
	  return;
	}
  
	
	alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
  
	
	document.getElementById('contact-form').reset();
  });
  