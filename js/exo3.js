function info(f){
  console.log(f);
  if(document.getElementById('diag')==undefined)
  {
     var diag=document.createElement('div','id="diag"');
     document.body.insertBefore(diag,document.getElementsByTagName('form')[0]);
  }
//  diag.innerHTML+='<p>'+f.parentNode.children[2].value+'</p>';

  alert(f.value);
};
