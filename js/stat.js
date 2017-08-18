
window.renderStatistics = function (ctx, names, times) {
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = 'white';

  ctx.fillRect(90, 0, 420, 270);
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 56);
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';

  var max = -1;

  for(var i = 0 ; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histogramWidth = 150;
  var step = histogramWidth / (max - 0);
  var barWidth = 50;
  var indent = 40;
  var initialX = 140;
  var initialY = 240;


  for(var i = 0; i < times.length; i++) {
    if (names[i] == 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1';
      ctx.fillRect(initialX + (barWidth + indent) * i, initialY - times[i] * step, indent, times[i] * step);
    }
    else {
      ctx.fillStyle = 'blue';
      ctx.globalAlpha = 0.1 + i*0.3; //прозрачный голубой
      ctx.fillRect(initialX + (barWidth + indent) * i, initialY - times[i] * step, indent, times[i] * step);
    }

    ctx.globalAlpha = 1;
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], initialX + (barWidth + indent) * i, 260);
    ctx.fillText(times[i].toFixed(0),initialX + (barWidth + indent) * i, 235 - times[i] * step);
    }
  };
