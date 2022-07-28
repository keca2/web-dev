// Add your code here
let main = document.querySelector('main');
main.style.display = 'block';
main.style.width = '100%';
main.style.textAlign = 'center';
main.style.marginTop = '10%';

let pic = document.createElement('img');
pic.setAttribute('class', 'kevinpic');
pic.setAttribute('src', '../hw1/images/kevin-pic.jpg');
pic.setAttribute('alt', 'image of Kevin holding his PSU ID with a picture of Kevin in it.');
pic.setAttribute('width', '200');
pic.setAttribute('height', '200');
pic.style.borderRadius = '50%';
pic.style.marginTop = '0%';

let firstSentence = document.createElement('p');
firstSentence.textContent = "Hello, my name is Kevin, and I'm a junior studying CS at PSU!"
firstSentence.style.fontWeight = 'bold';
firstSentence.style.margin = '5% 20%';
firstSentence.style.textAlign = 'left';
firstSentence.style.marginBottom = '0%';
firstSentence.style.whiteSpace = 'nowrap';

let paragraph = document.createElement('p')
paragraph.textContent = "I'm currently an intern at Oracle working with my team on data processing pipeline. It's super confusing! When I'm not working or studying for school, I like to pretend that I read books, watch baseball, and eat raspberry sorbet."
paragraph.style.margin = '5% 20%';
paragraph.style.marginTop = '0%';
paragraph.style.textAlign = 'left';

main.append(pic);
main.append(firstSentence);
main.append(paragraph);