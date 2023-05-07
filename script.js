
document.getElementById("btn").onclick = function() {
    var que = document.createElement('div');
    que.className = "card";
    que.innerHTML = document.getElementById("question").value;
    document.body.appendChild(que);
    
    var bttn = document.createElement('button');
    bttn.className = "bttn";
    document.querySelector('.card:last-child').appendChild(bttn);
    
    var ans = document.createElement('p');
    ans.innerHTML = document.getElementById('answer').value;
    document.querySelector('.card:last-child').appendChild(ans);
  };
  
  document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains('bttn')) {
      event.target.nextElementSibling.style.color = 'black';
    }
  });