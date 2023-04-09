import { useState } from 'react'
import { SocialIcons } from './SocialIcons'
import { Links } from './Links'
import { Logos } from './Logos'

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const handleValueState = () => {
    setShowLinks(!showLinks)
  }

  return (
    <nav className="nav">
      <Logos handleValueState={handleValueState} />
      <Links showLinks={showLinks} />
      <SocialIcons />
    </nav>
  )
}
