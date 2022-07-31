import { add } from './utils';

const Header = () => {
  return <button>Header{add(2, 3)}</button>;
};

export default Header;
