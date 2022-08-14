import { h } from 'preact'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import GitHubButton from 'react-github-btn'
import useWindowDimensions from '../utils/useWindowDimensions'

import light from './../assets/3-01.svg'
import dark from './../assets/4-01.svg'
import launchImg from './../assets/launch.png'
import githubSmallIcon from './../assets/gh_small.svg'
import twitterIcon from './../assets/twitter.png'

import './../styles/nav.css'

function Navbar({ isDark, toggleDarkMode, color }) {
  const { height, width } = useWindowDimensions()

  return (
    <div className="fixed z-20 flex items-center justify-center w-full h-16 bg-white shadow-lg dark:bg-darkish-black dark:text-white">
      <div className="flex items-center px-1 mx-1 font-sans text-lg font-bold nav-item max-h-16 sm:mx-3 sm:px-3">
        <img
          src={
            isDark
              ? 'https://img.icons8.com/ios-filled/100/ffffff/year-of-monkey.png'
              : 'https://img.icons8.com/ios-filled/100/1111111/year-of-monkey.png'
          }
          alt=""
          width={width < 600 ? '40' : '33'}
          style={{ marginRight: '10px' }}
        />
        <h3 className="relative logo-name">
          <span className="text-black nav-logo dark:text-white text-sm sm:text-md">
            {' '}
            Wave
          </span>
          <span className="text-black nav-logo dark:text-white text-sm sm:text-md">
            {' '}
            Monkey
          </span>
        </h3>
      </div>

      <DarkModeSwitch
        style={{ marginLeft: '2rem' }}
        checked={isDark}
        onChange={toggleDarkMode}
        size={20}
      />
    </div>
  )
}

export default Navbar
