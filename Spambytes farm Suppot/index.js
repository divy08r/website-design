const services = document.querySelectorAll('.service');

services.forEach(service => {
  service.addEventListener('click', () => {
    services.forEach(otherService => otherService.classList.remove('selected'));
    service.classList.add('selected');
  });
});

const service_del = document.querySelectorAll(".service-del");