import { useState, useRef } from 'react';
import { useOnClickOutside } from '../useOnClickOutside';
const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, dropdown, () => setDropdown(false));

  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li ref={ref}>
          <button onClick={() => setDropdown(!dropdown)}>
            Services <span>&#8595;</span>
          </button>
          {dropdown && (
            <ul>
              <li>Design</li>
              <li>Development</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
