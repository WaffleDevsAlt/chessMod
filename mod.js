function appendPieceImage(imageSource, containerId, imageId) {

  if (imageSource == 'wrook') imageSource = wrook
  else if (imageSource == 'wknight') imageSource = wknight
  else if (imageSource == 'wbishop') imageSource = wbishop
  else if (imageSource == 'wqueen') imageSource = wqueen
  else if (imageSource == 'wking') imageSource = wking
  else if (imageSource == 'wpawn') imageSource = wpawn
  else if (imageSource == 'brook') imageSource = brook
  else if (imageSource == 'bknight') imageSource = bknight
  else if (imageSource == 'bbishop') imageSource = bbishop
  else if (imageSource == 'bqueen') imageSource = bqueen
  else if (imageSource == 'bking') imageSource = bking
  else if (imageSource == 'bpawn') imageSource = bpawn
  else if (imageSource == 'wtest') imageSource = bking
  else return;

  var img = document.createElement("IMG");
  img.src = path + imageSource;
  img.setAttribute('id', imageId);
  document.getElementById(containerId).appendChild(img);
  return imageId;
}

function moddedLogic(pieceType, pieceColor, id, row, column) {
  if(pieceType == 'test') {
    $('#34').css('background-color' , 'black')
  }
}

function moddedCheckLogic(pieceType, pieceColor, id, row, column) {
  if(pieceType == 'test') {
    $('#34').css('background-color' , 'red')
  }
}
