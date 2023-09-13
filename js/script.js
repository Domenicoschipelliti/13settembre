const task=document.getElementById("list")


task.addEventListener('click',function(listen){
 listen.preventDefault()

  const compito=document.getElementById('to')
  const compitoPrimo=document.getElementById('do')
  const compitoSecondo=document.getElementById('lista')
  const compitoTerzo=document.getElementById('tao')
  const compitoQuarto=document.getElementById('lost')  

  const oggetto={
    comp:compito.value,
    comprimo:compitoPrimo.value,
    cosecondo:compitoSecondo.value,
    coterzo:compitoTerzo.value,
    coquarto:compitoQuarto.value,
  }

  console.log('task salvate con successo',oggetto)

  compito.value='',
  compitoPrimo.value='',
  compitoSecondo.value='',
  compitoTerzo.value='',
  compitoQuarto.value=''

  


  const aggiungi= document.createElement('div') // <div></div>
  aggiungi.classList.add('compiti')

  aggiungi.innerHTML = `
    <p>${oggetto.comp} ${newContact.lastName}</p>
    <p>${oggetto.comprimo}</p>
    <p>${oggetto.cosecondo}</p>
    <p>${oggetto.coterzo}</p>
    <p>${oggetto.coquarto}</p>
    `
  

   
 
})