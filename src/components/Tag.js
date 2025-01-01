export default function Tag({ state }) {
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
  const $tagNameWrapper = document.getElementById('tag-name-wrapper');

  this.render = () => {
    $tagNameWrapper.innerHTML = `<span>${this.state}</span>`;
  };
}
