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
  if (pieceType == 'king') {
    let knight = [6, 10, 15, 17]
    let krows = [1, 1, 2, 2]
    knight.forEach(function(i) {
      if (Math.floor((id + 7 + i) / 8) == row + krows[knight.indexOf(i)] && id + i <= 64) {
        if (($('#' + (id + i)).attr('class')).slice(11, 12) == 'w' && pieceColor == 'b' || ($('#' + (id + i)).attr('class')).slice(11, 12) == 'b' && pieceColor == 'w') {
          placeHighlights((id + i), '#855')
        }
        if (($('#' + (id + i)).attr('class')).slice(12) == '') {
          placeHighlights((id + i), '#885')
        }
      }
      if (Math.floor((id + 7 - i) / 8) == row - krows[knight.indexOf(i)] && id - i > 0) {
        if (($('#' + (id - i)).attr('class')).slice(11, 12) == 'w' && pieceColor == 'b' || ($('#' + (id - i)).attr('class')).slice(11, 12) == 'b' && pieceColor == 'w') {
          placeHighlights((id - i), '#855')
        }
        if (($('#' + (id - i)).attr('class')).slice(12) == '') {
          placeHighlights((id - i), '#885')
        }
      }
    })
  }
}

function moddedCheckLogic(pieceType, pieceColor, id, row, column) {
  if (pieceType == 'king') {
    let knight = [6, 10, 15, 17]
    let krows = [1, 1, 2, 2]
    knight.forEach(function(i) {
      if (Math.floor((id + 7 + i) / 8) == row + krows[knight.indexOf(i)] && id + i <= 64) {
        if (($('#' + (id + i)).attr('class')).slice(11, 12) == 'w' && pieceColor == 'b' || ($('#' + (id + i)).attr('class')).slice(11, 12) == 'b' && pieceColor == 'w') {
          res.push(id + i)
        }
      } else if (Math.floor((id + 7 - i) / 8) == row - krows[knight.indexOf(i)] && id - i > 0) {
        if (($('#' + (id - i)).attr('class')).slice(11, 12) == 'w' && pieceColor == 'b' || ($('#' + (id - i)).attr('class')).slice(11, 12) == 'b' && pieceColor == 'w') {
          res.push(id - i)
        }
      }
    })
  }
}
