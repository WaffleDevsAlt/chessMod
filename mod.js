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
  let res = []
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
