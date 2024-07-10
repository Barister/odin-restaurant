export default function aboutPageLoad(content) {
   const main = document.createElement('main');
   main.classList.add('page');

   const section = document.createElement('section');
   section.classList.add('page__about', 'about');

   const aboutContainerDiv = document.createElement('div');
   aboutContainerDiv.classList.add('about__container');

   const aboutGridDiv = document.createElement('div');
   aboutGridDiv.classList.add('about__grid');

   const aboutTitle = document.createElement('h1');
   aboutTitle.classList.add('about__title', 'title');
   aboutTitle.textContent = 'Why Choose us';

   const aboutText = document.createElement('p');
   aboutText.classList.add('about__text');
   aboutText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.';

   const aboutImageDiv = document.createElement('div');
   aboutImageDiv.classList.add('about__image');

   const aboutImage = document.createElement('img');
   aboutImage.src = './img/about-01.jpg';
   aboutImage.alt = '';

   aboutImageDiv.appendChild(aboutImage);

   const aboutCardsDiv = document.createElement('div');
   aboutCardsDiv.classList.add('about__cards');

   const createCard = (iconSrc, titleText, cardText) => {
      const card = document.createElement('div');
      card.classList.add('about__card', 'card-about');

      const cardIconDiv = document.createElement('div');
      cardIconDiv.classList.add('card-about__icon');

      const cardIcon = document.createElement('img');
      cardIcon.src = iconSrc;
      cardIcon.alt = '';

      cardIconDiv.appendChild(cardIcon);

      const cardTitle = document.createElement('h3');
      cardTitle.classList.add('card-about__title');
      cardTitle.textContent = titleText;

      const cardTextDiv = document.createElement('div');
      cardTextDiv.classList.add('card-about__text');
      cardTextDiv.textContent = cardText;

      card.appendChild(cardIconDiv);
      card.appendChild(cardTitle);
      card.appendChild(cardTextDiv);

      return card;
   };

   const card1 = createCard('./img/student.svg', 'Best Chef', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat');
   const card2 = createCard('./img/coffee.svg', '120 Item food', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat');
   const card3 = createCard('./img/person.svg', 'Clean Environment', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat');

   aboutCardsDiv.appendChild(card1);
   aboutCardsDiv.appendChild(card2);
   aboutCardsDiv.appendChild(card3);

   aboutGridDiv.appendChild(aboutTitle);
   aboutGridDiv.appendChild(aboutText);
   aboutGridDiv.appendChild(aboutImageDiv);
   aboutGridDiv.appendChild(aboutCardsDiv);

   aboutContainerDiv.appendChild(aboutGridDiv);
   section.appendChild(aboutContainerDiv);
   main.appendChild(section);

   content.appendChild(main);

   return content;
}
