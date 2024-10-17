const name = 'George'
console.log(name)
//EX.1  Mail: Chiediamo all’utente la sua email, controlliamo che sia presente nella lista, stampiamo un messaggio affine all’esito del controllo.
const mails = ['Pluto@gmail.com','Paperino@gmail.com', 'Topolino@gmail.com','Minnie@gmail.com']
console.log(mails)
const referMails = prompt('Qual è la tua mail?')
if (mails.includes (referMails)){
  console.log('Benvenuto',(referMails))
  alert('Benvenuto')
} else {
  console.log(" mi dispiace " + " la tua mail non va bene ")
  alert('mi dispiace la tua mail non va bene')
}