import Tag from './components/Tag.js';
import Content from './components/Content.js';
import { chiikawaUrl, hachiwareUrl, usagiUrl, momongaUrl, allUrl } from './data/url.js';

export default function App($app) {
  let path = window.location.pathname.replace('/', '') || 'all';

  /**
   * 상태관리
   *
   */
  this.state = {
    tag: path || 'all',
    images: [...allUrl],
  };

  this.setState = (state) => {
    this.state = state;
    $tag.setState(this.state.tag);
    $content.setState(this.state.images);
  };

  /**
   * 컴포넌트
   *
   */

  const $tagWrapper = document.getElementById('tag-wrapper');
  const $tagDefault = document.getElementById('all');

  const $tag = new Tag({ state: this.state.tag });
  const $content = new Content({ state: this.state.images });

  /**
   * 라우팅
   *
   */
  window.addEventListener('popstate', (event) => {
    const tag = event.state ? event.state.tag : 'all';
    this.setState({ tag: tag, images: ['test1', 'test2'] });
    initSelected($tagWrapper);
    addSelected(document.getElementById(tag));
  });

  const changePage = (tag) => {
    history.pushState({ tag: tag }, '', `/${tag}`);
  };

  const init = () => {
    const $curr = document.getElementById(`${this.state.tag}`);
    if ($curr) handleTagClick($curr);
    else handleTagClick($tagDefault);
  };

  /**
   * 이벤트 설정
   *
   */

  const setTagEvent = () => {
    const $all = document.getElementById('all');
    const $chiikawa = document.getElementById('chiikawa');
    const $hachiware = document.getElementById('hachiware');
    const $usagi = document.getElementById('usagi');
    const $momonga = document.getElementById('momonga');

    $all.addEventListener('click', () => {
      handleTagClick($all);
    });

    $chiikawa.addEventListener('click', () => {
      handleTagClick($chiikawa);
    });

    $hachiware.addEventListener('click', () => {
      handleTagClick($hachiware);
    });

    $usagi.addEventListener('click', () => {
      handleTagClick($usagi);
    });

    $momonga.addEventListener('click', () => {
      handleTagClick($momonga);
    });
  };

  const urls = {
    all: allUrl,
    chiikawa: chiikawaUrl,
    hachiware: hachiwareUrl,
    usagi: usagiUrl,
    momonga: momongaUrl,
  };

  const handleTagClick = ($elem) => {
    this.setState({ tag: `${$elem.id}`, images: urls[$elem.id] });
    initSelected($tagWrapper);
    addSelected($elem);
    changePage($elem.id);
  };

  const initSelected = ($wrapper) => {
    Array.from($wrapper.children).forEach((children) => {
      children.classList.remove('c-selected');
    });
  };

  const addSelected = ($elem) => {
    $elem.classList.add('c-selected');
  };

  /**
   * 컴포넌트 마운트 시 실행
   *
   */

  init();
  setTagEvent();
}
