export default function menuPageLoad() {

   const panelList = document.querySelector('.panel__list');
   if (!panelList.classList.contains('panel__list--invert')) {
      panelList.classList.add('panel__list--invert');
   }

   const main = document.createElement('main');
   main.classList.add('page');

   const section = document.createElement('section');
   section.classList.add('page__menu');

   const menuContainerDiv = document.createElement('div');
   menuContainerDiv.classList.add('menu__container');

   const menuTitle = document.createElement('h1');
   menuTitle.classList.add('menu__title', 'title');
   menuTitle.textContent = 'Our Food Menu';

   const menuSubtitle = document.createElement('p');
   menuSubtitle.classList.add('menu__subtitle', 'subtitle');
   menuSubtitle.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue';

   const menuGridDiv = document.createElement('div');
   menuGridDiv.classList.add('menu__grid');

   const menuTabsUl = document.createElement('ul');
   menuTabsUl.classList.add('menu__tabs');

   const tabNames = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Drink', 'Snack'];
   tabNames.forEach(tab => {
      const tabElement = document.createElement('h3');
      tabElement.classList.add('menu__tab');
      if (tab === 'Breakfast') {
         tabElement.classList.add('menu__tab--active');
      }
      tabElement.textContent = tab;
      menuTabsUl.appendChild(tabElement);
   });

   const menuCardsUl = document.createElement('ul');
   menuCardsUl.classList.add('menu__cards');

   const createMenuItem = (title, description, calories, price) => {
      const card = document.createElement('li');
      card.classList.add('menu__card', 'item-menu');

      const cardDescriptionDiv = document.createElement('div');
      cardDescriptionDiv.classList.add('item-menu__description');

      const cardTitle = document.createElement('h5');
      cardTitle.classList.add('item-menu__title');
      cardTitle.textContent = title;

      const cardText = document.createElement('div');
      cardText.classList.add('item-menu__text');
      cardText.textContent = description;

      const cardCalories = document.createElement('div');
      cardCalories.classList.add('item-menu__callories');
      cardCalories.textContent = `${calories} CAL`;

      const cardPrice = document.createElement('div');
      cardPrice.classList.add('item-menu__price');
      cardPrice.textContent = `${price}$`;

      cardDescriptionDiv.appendChild(cardTitle);
      cardDescriptionDiv.appendChild(cardText);
      cardDescriptionDiv.appendChild(cardCalories);
      card.appendChild(cardDescriptionDiv);
      card.appendChild(cardPrice);

      return card;
   };

   const breakfastItems = [
      { title: 'Pancakes with Maple Syrup', description: 'Fluffy pancakes topped with butter and pure maple syrup', calories: 450, price: 10 },
      { title: 'Avocado Toast', description: 'Toasted whole grain bread with mashed avocado, sea salt, and red pepper flakes', calories: 350, price: 8 },
      { title: 'Omelette with Spinach and Feta', description: 'Three-egg omelette with fresh spinach and feta cheese', calories: 300, price: 12 },
      { title: 'Fruit and Yogurt Parfait', description: 'Layers of Greek yogurt, fresh berries, and granola', calories: 250, price: 7 },
      { title: 'Breakfast Burrito', description: 'Scrambled eggs, cheese, and sausage wrapped in a flour tortilla', calories: 600, price: 9 },
      { title: 'French Toast', description: 'Thick slices of bread soaked in a cinnamon egg mixture and grilled', calories: 500, price: 11 },
      { title: 'Smoked Salmon Bagel', description: 'Bagel with cream cheese, smoked salmon, and capers', calories: 400, price: 13 },
      { title: 'Breakfast Sandwich', description: 'Egg, cheese, and bacon on a toasted English muffin', calories: 550, price: 8 }
   ];

   breakfastItems.forEach(item => {
      menuCardsUl.appendChild(createMenuItem(item.title, item.description, item.calories, item.price));
   });

   const viewMenuButton = document.createElement('button');
   viewMenuButton.classList.add('menu__button', 'btn', 'btn--transparent-color');
   viewMenuButton.textContent = 'View menu';

   menuGridDiv.appendChild(menuTabsUl);
   menuGridDiv.appendChild(menuCardsUl);
   menuGridDiv.appendChild(viewMenuButton);

   menuContainerDiv.appendChild(menuTitle);
   menuContainerDiv.appendChild(menuSubtitle);
   menuContainerDiv.appendChild(menuGridDiv);

   section.appendChild(menuContainerDiv);
   main.appendChild(section);

   content.appendChild(main);

   return content;
   return
}