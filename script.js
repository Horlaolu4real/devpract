document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.container');
  
    boxes.forEach(box => {
      box.addEventListener('click', function() {
        const digit = this.querySelector('.switch');
        if (digit.style.display === 'none') {
          digit.style.display = 'block';
        } else {
          digit.style.display = 'none';
        }
      });
    });
  });
  