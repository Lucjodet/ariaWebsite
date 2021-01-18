$(document).ready(async function(){
  const circulatingSupplyreq = await fetch('https://api.arianee.org/aria/circulatingSupply');
  const circulatingSupply =await circulatingSupplyreq.text()
  $('#circulatingSupply').text(circulatingSupply)
})
