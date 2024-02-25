const barPlotContainer = document.querySelector('.bar-plot-container');
const barPlot = document.createElement('div');
barPlot.classList.add('bar-plot');
barPlotContainer.appendChild(barPlot);

const heights = ['30%', '40%', '80%'];
heights.forEach((height, index) => {
  const bar = document.createElement('div');
  bar.classList.add('bar');
  bar.style.height = height;
  bar.style.animationDelay = `${index}s`;
  barPlot.appendChild(bar);
});

barPlot.style.height = `${heights.reduce((acc, curr) => acc + parseInt(curr), 0)}`;
barPlot.style.width = `${barPlotContainer.offsetWidth - 40}px`;
barPlot.style.margin = '0 auto';

const bars = document.querySelectorAll('.bar');
bars.forEach(bar => {
  bar.style.width = `${barPlot.offsetWidth / bars.length}px`;
  bar.style.marginRight = '10px';
});

const moveUpAnimation = (bar, delay) => {
  bar.style.transform = 'translateY(100%)';
  setTimeout(() => {
    bar.style.animation = 'move-up 2s forwards';
    bar.style.animationDelay = `${delay}s`;
  }, 100);
};

bars.forEach((bar, index) => moveUpAnimation(bar, index * 1000));