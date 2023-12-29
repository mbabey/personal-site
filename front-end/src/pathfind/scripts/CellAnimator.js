export default class CellAnimator {
  static bounce(cell, cell_DOM, max_height_px, min_height_px) {
    const tower_left = cell_DOM.querySelector('.tower.left');
    const tower_right = cell_DOM.querySelector('.tower.right');
    const top = cell_DOM.querySelector('.top');

    const default_height = cell.get_physical_height();
    const height_modifier = max_height_px - min_height_px;
    
    const animation_settings = {
      timing: CellAnimator.make_animation_ease_out(CellAnimator.timing_elastic),
      draw: function (progress) {
        tower_left.style.height = Math.max(default_height * progress, min_height_px) + 'px';
        tower_right.style.height = Math.max(default_height * progress, min_height_px) + 'px';
        top.style.top = Math.min(-(default_height * progress), -(min_height_px)) + 'px';
      },
      duration: 2000,
    }

    CellAnimator.animate(animation_settings);
  }

  // https://javascript.info/js-animation
  static animate({ timing, draw, duration }) {

    let start = performance.now();

    requestAnimationFrame(function animate(time) {
      // timeFraction goes from 0 to 1
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;

      // calculate the current animation state
      let progress = timing(timeFraction)

      draw(progress); // draw it

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });
  }

  static make_animation_ease_out(timing) {
    return function (timeFraction) {
      return 1 - timing(1 - timeFraction);
    }
  }

  static timing_elastic(timeFraction) {
    return Math.pow(2, 10 * (timeFraction - 1)) * (1 - Math.cos(20 * Math.PI * 1.5 / 3 * timeFraction));
  }

  static timing_bounce(timeFraction) {
    for (let a = 0, b = 1; 1; a += b, b /= 2) {
      if (timeFraction >= (7 - 4 * a) / 11) {
        return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
      }
    }
  }
}