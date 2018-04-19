const app = function () {
  const canvas = document.getElementById('main-canvas');
  const cxt = canvas.getContext('2d');

  const position = {
    x: 250,
    y: 250,
  };

  const startPosition = {
    x: 250,
    y: 250,
  };

   document.addEventListener('keydown', function(event) {
     event.preventDefault();
     console.log(event.keyCode);
     if(event.keyCode === 13) {
       clearTheCanvas();
     } else {

       cxt.beginPath();
       cxt.moveTo(position.x, position.y);

       switch (event.keyCode) {
         case 37:
         if(position.x - 1 > 0){
         position.x-= 5;
       } else { break }
         break;

         case 38:
         if(position.y - 1 > 0){
         position.y-= 5;
         } else { break }
         break;

         case 39:
         if(position.x - 1 != canvas.width){
         position.x+= 5;
         } else { break }
         break;

         case 40:
         if(position.y - 1 != canvas.height){
         position.y+= 5;
         } else { break }
         break;

         default:
         console.log('break default');
         break;
       }

       cxt.lineTo(position.x, position.y);
       cxt.stroke();
     }
   });

   const clearTheCanvas = function () {
     cxt.clearRect(0,0, canvas.width, canvas.height);
     cxt.moveTo(startPosition.x, startPosition.y)
   }
};

document.addEventListener('DOMContentLoaded', app);
