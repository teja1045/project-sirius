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
          text: 'Comprehensive structural steel detailing, accurate connection design, and coordinated fabrication packages for complex projects.',
          bg: 'linear-gradient(125deg, rgba(26,52,82,.78), rgba(38,121,143,.75)), linear-gradient(120deg,#2b8ea1,#5ac2c6)'
        },
        {
          title: 'Connection Design that Reduces Rework',
          text: 'We leverage SDS2 and Tekla workflows to detect clashes early and keep erection teams moving in the field.',
          bg: 'linear-gradient(125deg, rgba(36,47,84,.78), rgba(58,93,158,.75)), linear-gradient(120deg,#2d4f90,#4f7fcb)'
        },
        {
          title: 'Fast Turnaround. Reliable Output.',
          text: 'From bid support to final issue drawings, we provide clear communication, timely submissions, and dependable quality.',
          bg: 'linear-gradient(125deg, rgba(62,50,42,.72), rgba(129,89,60,.72)), linear-gradient(120deg,#6a5f4f,#a48358)'
        }
      ];

      vm.stats = { years: 17, projects: 1200, retention: 99 };
      vm.values = [
        {
          id: '01',
          title: 'Customer Driven',
          body: 'At Sirius, we work with clients as partners by ensuring full-time support, progression reporting, and reliable quotations.'
        },
        {
          id: '02',
          title: 'Professional Team',
          body: 'Our extremely talented team has deep software and field experience, delivering quality-driven and practical detailing solutions.'
        },
        {
          id: '03',
          title: 'Integrity',
          body: 'We use sophisticated tools and disciplined QA workflows, combined with ethical business practices for sustainable growth.'
        },
        {
          id: '04',
          title: 'Flexibility',
          body: 'Our project management model helps distribute workloads and respond quickly to changing schedules across time zones.'
        }
      ];

      vm.projects = [
        {
          name: 'North River Manufacturing Plant',
          desc: 'Heavy industrial framing with crane support steel and coordinated erection sequencing.'
        },
        {
          name: 'Harbor Point Distribution Hub',
          desc: 'Fast-track logistics center detailing package delivered ahead of construction schedule.'
        },
        {
          name: 'Metro Medical Tower Expansion',
          desc: 'Complex retrofit steel package with phased release strategy for an active site environment.'
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
