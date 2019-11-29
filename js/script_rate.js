function activateRate() {
  //address = $('#address').filter('span').text();
  window.open('pageRating.html', 'newwin','left=440,top=430,width=300,height=180,toolbar=1,resizable=0');
  // return confirmRate()
}

function activateBid() {
  window.open('bidding.html', 'bidwin','left=440,top=430,width=300,height=180,toolbar=1,resizable=0');
}

function confirmRate(_address) {
  let address = '0x32D57e7ffEb6F17f85F5D9EA8EC657459B7D084F';
  let score = document.getElementById('score').value;
  let message = address + '에게 ' + score.toString() + '의 평점을 주시겠습니까?';
  var check = confirm(message);
  if (check === true) {
    close();
    return score;
  } else {
    close();
  }
}
