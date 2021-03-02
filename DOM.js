var input = document.getElementById('fromtext');
var btn = document.getElementById('btnadd');
var cont = document.getElementById('paragraph');
btn.addEventListener('click', function(){
    var para = document.createElement('p');
    para.innerText = input.value;
    cont.appendChild(para);
    input.value = '';
    para.addEventListener('dblclick' , function(){
        para.remove();
        
    })

    
})