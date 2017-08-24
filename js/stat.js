window.renderStatistics = function (ctx, names, times) {

  var widthRect = 420;
  var heightRect = 270;

  ctx.fillRect(100, 10, widthRect, heightRect);
  ctx.fillStyle = 'white';

  ctx.fillRect(90, 0, widthRect, heightRect);
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 56);
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / max;
  var barWidth = 50;
  var indent = 40;
  var initialX = 140;
  var initialY = 240;

  function GetRandomAlpha(min, max) {
    return (Math.random() * (max - min) + min).toFixed(1);
  }

  for (var i = 0; i < times.length; i++) {
    if (names[i] == 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    else {
      ctx.fillStyle = 'rgba(0, 0, 255,' + GetRandomAlpha(0.1,0.9) + ')';
    }
    ctx.fillRect(initialX + (barWidth + indent) * i, initialY - times[i] * step, indent, times[i] * step);
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], initialX + (barWidth + indent) * i, 260);
    ctx.fillText(times[i].toFixed(0), initialX + (barWidth + indent) * i, 235 - times[i] * step);
  }
};
