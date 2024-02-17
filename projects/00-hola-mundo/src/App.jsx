import "./App.css"
import {TwitterFollowCard} from "./TwitterFollowCard";
export function App() {
  const users = [
    {
      userName: 'midudev',
      name: 'Juli',
      isFollowing: false
    },{
      userName: 'soto.jhon_',
      name: 'Juli 2',
      isFollowing: true
    },{
      userName: 'mia.kaly',
      name: 'Juli 3',
      isFollowing: false
    },
  ]
  return (
    <section className={'App'}>
      {
        users.map(({userName, name, isFollowing}) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            name={name}
            initialIsFollowing={isFollowing}
          />
        ))
      }
    </section>
  )
}