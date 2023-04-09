import { links } from './data'
import { nanoid } from 'nanoid'
import { useRef } from 'react'

export const Links = ({ showLinks }) => {
  const linksHeight = useRef(null)
  const containerLinksHeight = useRef(null)
  const linksContainerHeight = {
    height: showLinks
      ? `${linksHeight.current.getBoundingClientRect().height}px`
      : '0px',
  }

  return (
    <div
      ref={containerLinksHeight}
      style={linksContainerHeight}
      className="links-container"
    >
      <ul ref={linksHeight} className="nav-links">
        {links.map((link) => {
          return (
            <li className="link" key={nanoid()}>
              <a href={link.url}>{link.text}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
