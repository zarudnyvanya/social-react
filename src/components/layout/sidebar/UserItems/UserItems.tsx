import { UserItem } from '../userItem/UserItem'
import { dataUsers } from './dataUsers'

export const UserItems = () => {
  return (
    <div>
      {dataUsers.map((user) => (
        <UserItem key={user.link} {...user} />
      ))}
    </div>
  )
}
