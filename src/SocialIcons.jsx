import { social } from './data'
import { nanoid } from 'nanoid'

export const SocialIcons = () => {
  return (
    <div className="social-container">
      <ul className="nav-icons">
        {social.map((icon) => {
          return (
            <li key={nanoid()} className="icon">
              <a href={icon.url}>{icon.icon}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
