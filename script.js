(function () {
  angular
    .module('siriusApp', ['ngSanitize'])
    .controller('MainController', ['$interval', '$sce', function ($interval, $sce) {
      var vm = this;

      vm.year = new Date().getFullYear();
      vm.menuOpen = false;
      vm.phone1 = '+1 937-797-3975';
      vm.phone2 = '+1 937-797-3904';
      vm.email1 = 'info@siriussteelservices.com';
      vm.email2 = 'mark@siriussteelservices.com';

      vm.offices = [
        {
          name: 'Ohio',
          address: $sce.trustAsHtml('1985 W Henderson Road #2211,<br>Columbus, OH 43220')
        },
        {
          name: 'Florida',
          address: $sce.trustAsHtml('8270, Woodland Center Blvd<br>Tampa, FL 33614')
        },
        {
          name: 'Canada',
          address: $sce.trustAsHtml('2482 Yonge St #13 Toronto, ON<br>M4P 2H5, Canada')
        }
      ];

      vm.slides = [
        {
          title: 'Experts and High Quality Works',
          text: 'Precision detailing and steel design solutions for commercial and industrial projects.',
          bg: 'linear-gradient(125deg, rgba(26,52,82,.78), rgba(38,121,143,.75)), linear-gradient(120deg,#2b8ea1,#5ac2c6)'
        },
        {
          title: 'Connection Design that Reduces Rework',
          text: 'Smart engineering decisions that help teams avoid conflicts before fabrication starts.',
          bg: 'linear-gradient(125deg, rgba(36,47,84,.78), rgba(58,93,158,.75)), linear-gradient(120deg,#2d4f90,#4f7fcb)'
        },
        {
          title: 'Fast Turnaround. Reliable Output.',
          text: 'From bid support to final issue drawings, we keep deadlines predictable and transparent.',
          bg: 'linear-gradient(125deg, rgba(62,50,42,.72), rgba(129,89,60,.72)), linear-gradient(120deg,#6a5f4f,#a48358)'
        }
      ];

      vm.stats = { years: 17, projects: 1200, retention: 99 };
      vm.values = [
        {
          id: '01',
          title: 'Customer Driven',
          body: 'We partner closely with clients and provide transparent progress with accountable communication.'
        },
        {
          id: '02',
          title: 'Professional Team',
          body: 'Experienced detailers and engineers deliver production-ready packages with practical coordination.'
        },
        {
          id: '03',
          title: 'Integrity',
          body: 'We apply licensed processes, ethical standards, and strict quality checks across every milestone.'
        },
        {
          id: '04',
          title: 'Flexibility',
          body: 'Timezone-friendly collaboration and scalable capacity to support varying project demands.'
        }
      ];

      vm.whyPoints = [
        'Expert in Structural and Misc. Steel',
        'Connection Design',
        'PEMB'
      ];

      vm.slideIndex = 0;
      vm.currentSlide = vm.slides[0];

      vm.prevSlide = function () {
        vm.slideIndex = (vm.slideIndex - 1 + vm.slides.length) % vm.slides.length;
        vm.currentSlide = vm.slides[vm.slideIndex];
      };

      vm.nextSlide = function () {
        vm.slideIndex = (vm.slideIndex + 1) % vm.slides.length;
        vm.currentSlide = vm.slides[vm.slideIndex];
      };

      vm.toggleMenu = function () {
        vm.menuOpen = !vm.menuOpen;
      };

      vm.submitForm = function (event) {
        event.preventDefault();
        window.alert('Thanks! Your quote request has been captured.');
      };

      $interval(vm.nextSlide, 5000);
    }]);
})();
