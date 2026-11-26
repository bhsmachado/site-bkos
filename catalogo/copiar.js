(function(){
  function toast(t){var d=document.createElement('div');d.className='toast';d.textContent=t;document.body.appendChild(d);setTimeout(function(){d.remove()},2200)}
  document.addEventListener('click',function(ev){
    var b=ev.target.closest('[data-copiar]');if(!b)return;
    var url=b.getAttribute('data-copiar'),titulo=document.title;
    if(navigator.share&&matchMedia('(pointer:coarse)').matches){navigator.share({title:titulo,url:url}).catch(function(){});return}
    if(navigator.clipboard){navigator.clipboard.writeText(url).then(function(){toast('Link copiado. É só colar no WhatsApp ou no Instagram.')},function(){prompt('Copie o link:',url)})}
    else prompt('Copie o link:',url);
  });
})();
