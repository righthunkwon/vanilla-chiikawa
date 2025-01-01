export default function Content({ state }) {
  /**
   * 상태관리
   *
   */
  this.state = state;
  this.setState = (state) => {
    this.state = state;
    this.render();
  };

  /**
   * 렌더링
   *
   */
  const $contentWrapper = document.getElementById('content-wrapper');

  this.template = () => {
    let $template = ``;

    this.state?.forEach((url, idx) => {
      const lazyLoading = idx >= 6 ? 'loading="lazy"' : '';
      $template += `<div class="c-image"><img src="${url}" ${lazyLoading}></img></div>`;
    });
    return $template;
  };

  this.render = () => {
    $contentWrapper.innerHTML = this.template();
  };
}
