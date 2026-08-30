import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  block.classList.add('session-two');

  block.querySelectorAll('picture > img').forEach((img) => {
    img.closest('picture').replaceWith(
      createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]),
    );
  });

  block.querySelectorAll('video').forEach((video) => {
    video.setAttribute('controls', '');
    video.setAttribute('playsinline', '');
    video.closest('div').classList.add('eds-enablement-block-video');
  });
}