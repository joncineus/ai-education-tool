//We need to include react router to navigate between pages/react components
//import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function NavigationBar() {
return (
    <nav className="flex justify-between w-full p-4 bg-gray-800 text-white">
      <ul className="flex space-x-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;