var StartIterator = 1;
var iterator = StartIterator;
var maxElement = 8; 
/* 
maxElement - сколько в папке рисунков
*/

function Replace(image)
{
	iterator++;
	
	if(iterator > maxElement)
		iterator = StartIterator;
	
	image.src = "images/"+ iterator +".jpg";
	window.scrollTo(0, 0); // change scrolling on up
}