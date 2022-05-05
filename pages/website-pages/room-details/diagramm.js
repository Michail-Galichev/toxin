$(function(){

  
  var diagramm = function (){
      var ctx = document.getElementById('myChart').getContext('2d');
  
      var $goldgradient = ctx.createLinearGradient(0,0,0,150);
      $goldgradient.addColorStop(0, 'rgba(255, 227, 156, 1)');
      $goldgradient.addColorStop(1, 'rgba(255, 186, 156, 1)');
    
      var $turquoisegradient = ctx.createLinearGradient(0,0,0,150);
      $turquoisegradient.addColorStop(0, 'rgba(111, 207, 151, 1)');
      $turquoisegradient.addColorStop(1, 'rgba(102, 210, 234, 1)');
    
      var $lilacgradient = ctx.createLinearGradient(0,0,0,150);
      $lilacgradient.addColorStop(0, 'rgba(188, 156, 255, 1)');
      $lilacgradient.addColorStop(1, 'rgba(139, 164, 249, 1)');
    
      var $greygradient = ctx.createLinearGradient(0,0,0,150);
      $greygradient.addColorStop(0, 'rgba(144, 144, 144, 1)');
      $greygradient.addColorStop(1, 'rgba(61, 73, 117, 1)');
    
      var arrayColors = [
        $goldgradient,
        $turquoisegradient,
        $lilacgradient,
        $greygradient
      ]
      
      
      var data = {
          labels: [
            "Великолепно",
            "Хорошо",
            "Удовлетворительно",
            "Разочарован"
          ],
          datasets: [{
            data: [260, 0, 0, 0],
            backgroundColor: arrayColors,
            hoverOffset: 1,
            hoverBackgroundColor: arrayColors,
            hoverBorderColor: arrayColors,
            borderWidth: 2,
            hoverBorderWidth: 0.01
          
          }]
        };
        
        var options = {
          animation: {
            animateRotate: true,
            animateScale: true
          },
          
          showTooltips : true,
          cutoutPercentage: 90,
          legend: false,
          legendCallback: function(chart) {
            var text = [];
            text.push('<ul class="' + chart.id + '-legend">');
            for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
              text.push('<li class="js-li">');
              if (chart.data.labels[i]) {
                text.push(chart.data.labels[i]);
              }
              text.push('</li>');
            }
            text.push('</ul>');
            return text.join("");
          },
          tooltips: {
            callbacks: {
              label: function(tooltipItems, data) {
                var sum = data.datasets[0].data.reduce(add, 0);
                function add(a, b) {
                  return a + b;
                }
              },
              beforeLabel: function(tooltipItems, data) {
                return 'Голосов: ' + data.datasets[0].data[tooltipItems.index];
              }
              
            }
            
          }
        }
      
        Chart.pluginService.register({
          beforeDraw: function(chart) {
            var width = chart.chart.width,
                height = chart.chart.height,
                ctx = chart.chart.ctx;
        
            ctx.restore();
            var fontSize = 24;
            ctx.font = "bold " + fontSize + "px Montserrat";
            ctx.textBaseline = "bottom";
            ctx.textCoClor = "red";
        
            var total = 0
            for (var i = 0; i < chart.data.datasets[0].data.length; i++){
              total += chart.data.datasets[0].data[i]
            }
  
            var text = total,
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = (height / 2)+5;
            ctx.fillStyle= '#BC9CFF';
            ctx.fontWeight = 700
            ctx.fillText(text, textX, textY);
            ctx.save();
          }
        });
        
        var chart = new Chart(ctx, {
          type: 'doughnut',
          data: data,
          options: options
        });
        $(".js-diagramm--legend").html(chart.generateLegend());
        $(".js-diagramm--legend").on('click', "li", function() {
          chart.data.datasets[0].data[$(this).index()] += 1;
          chart.update();
          console.log('legend: ' + data.datasets[0].data[$(this).index()]);
        });
  }     
  diagramm();  
  });