function homePageLoad() {

   const content = document.getElementById('content');

   const main = document.createElement('main');
   main.classList.add('page');

   const section = document.createElement('section');
   section.classList.add('page__hero', 'hero');

   const heroContainerDiv = document.createElement('div');
   heroContainerDiv.classList.add('hero__container');

   const heroRow = document.createElement('div');
   heroRow.classList.add('hero__row');

   const heroDescription = document.createElement('div');
   heroDescription.classList.add('hero__description');

   const heroPretitle = document.createElement('h3');
   heroPretitle.classList.add('hero__pretitle', 'pretitle');
   heroPretitle.textContent = 'Healthy & Testy Food';

   const heroTitle = document.createElement('h1');
   heroTitle.classList.add('hero__title', 'title');
   heroTitle.textContent = 'Enjoy Healthy Life & Testy Food.';

   const heroText = document.createElement('p');
   heroText.classList.add('hero__text');
   heroText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue';

   const heroCallToAction = document.createElement('div');
   heroCallToAction.classList.add('hero__call-to-action');

   const heroMoreLink = document.createElement('a');
   heroMoreLink.href = '';
   heroMoreLink.classList.add('hero__more', 'btn', 'btn--primary-color');
   heroMoreLink.textContent = 'Show more';

   const heroOrderLink = document.createElement('a');
   heroOrderLink.href = '';
   heroOrderLink.classList.add('hero__order', 'btn', 'btn--transparent-color');
   heroOrderLink.textContent = 'Place an order';

   heroCallToAction.appendChild(heroMoreLink);
   heroCallToAction.append(heroOrderLink);

   heroDescription.appendChild(heroPretitle);
   heroDescription.appendChild(heroTitle);
   heroDescription.appendChild(heroText);
   heroDescription.appendChild(heroCallToAction);

   const heroImageDiv = document.createElement('div');
   heroImageDiv.classList.add('hero__image');

   const heroImage = document.createElement('img');
   heroImage.src = './img/hero-image.png';

   heroImageDiv.appendChild(heroImage);

   const heroScrolldownDiv = document.createElement('div');
   heroScrolldownDiv.classList.add('hero__scrolldown', 'scrolldown');

   const heroScrolldownLink = document.createElement('a');
   heroScrolldownLink.href = '';
   heroScrolldownLink.textContent = 'Scrolldown';

   heroScrolldownDiv.appendChild(heroScrolldownLink);

   heroRow.appendChild(heroDescription);
   heroRow.appendChild(heroImageDiv);

   heroContainerDiv.appendChild(heroRow);
   heroContainerDiv.appendChild(heroScrolldownDiv);

   section.appendChild(heroContainerDiv);

   main.appendChild(section);

   content.appendChild(main);


   // <main class="page">

   // <section class="page__hero hero">

   // <div class="hero__container">
   // <div class="hero__row">
   // <div class="hero__description">
   // <h3 class="hero__pretitle pretitle">Healthy & Testy Food</h3>
   // <h1 class="hero__title title">Enjoy Healthy Life
   //    & Testy Food.</h1>
   // <p class="hero__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
   //    Varius sed pharetra dictum neque massa congue</p>
   // <div class="hero__call-to-action">
   // <a href="" class="hero__more btn btn--primary-color">Show more</a>
   // <button class="hero__order btn btn--transparent-color">Place an order</button>
   // </div >
   //             </div >
   //    // <div class="hero__image">
   //    //    <img src="./img/hero-image.png" alt="">
   //    // </div>
   //          </div >
   //    // <div class="hero__scrolldown scrolldown">
   //    // <a href="" class="">Scrolldown</a>
   //    </div >
   //       </div >
   //    </section >
   // </main >

   return content;

}

export default homePageLoad;