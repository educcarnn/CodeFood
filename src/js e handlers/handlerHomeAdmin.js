import { Modals } from "./dom.js";

const btnDashBoard = document.querySelector('.btnDashboard')
const btnLogout = document.querySelector('.btnAdmin')

btnDashBoard.addEventListener('click', function() {
  window.location = './../pages/dashboard.html'
})

btnLogout.addEventListener('click', function(){
  console.log('clicou')
})