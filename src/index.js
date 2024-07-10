import '../src/css/style.css';
import homePageLoad from './home.js';
import menuPageLoad from './menu.js';
import aboutPageLoad from './about.js';

//document.addEventListener('DOMContentLoaded', homePageLoad);

const App = {
   init: function () {
      document.addEventListener("DOMContentLoaded", this.onDomContentLoaded.bind(this));

   },

   cacheDom: function () {
      this.navButtons = document.querySelectorAll('.menu__item');
      this.content = document.getElementById('content');
   },

   onDomContentLoaded: function () {
      this.cacheDom();
      homePageLoad(this.content);
      this.bindEvents();
   },



   bindEvents: function () {
      this.navButtons.forEach(button => {
         button.addEventListener('click', this.handleClick.bind(this));
      });
   },

   handleClick: function (e) {
      this.onClick(e);
      this.cleanContent(e);
      this.loadPage(e);
   },


   onClick: function (e) {
      this.navButtons.forEach(item => item.classList.remove('menu__item--active'));

      const clickedMenuLink = e.target.closest('.menu__item');
      clickedMenuLink.classList.add('menu__item--active');
   },

   cleanContent: function (e) {
      this.content.innerHTML = '';
   },

   loadPage: function (e) {
      console.log('page Loaded!')
   }

}

App.init();