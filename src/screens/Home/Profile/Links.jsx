import React from 'react'
import { Icon } from 'semantic-ui-react'
import { SLink } from '../../../components/SLink'
import { profileLinks } from '../../../assets'

export default function Links({}) {
  return (
    <div className="srh-my-links">
      {profileLinks.map( link => 
        <SLink
          key={link.name}
          type="icon"
          icon={<Icon size='large' name={link.icon} />}
          name={link.name}
          pathname={link.pathname}
        />
      )}
    </div>
  )
}