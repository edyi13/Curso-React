import { TwitterFollowCard } from './TwitterFollowCard';
import './app.css'
export default function App() {
  const formatUserName = (userName: string) => `@${userName}`
  const users = [
    {
      userName: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: true
    },
    {
      userName: 'pheralb',
      name: 'Pablo H.',
      isFollowing: false
    },
    {
      userName: 'elonmusk',
      name: 'Elon Musk',
      isFollowing: true
    },
    {
      userName: 'Cristiano',
      name: 'Cristiano Ronaldo',
      isFollowing: false
    }
  ]
  return (
    <section className='App'>
      {
        users.map(({ userName, name }) => (          
          <TwitterFollowCard key={userName} formatUserName={formatUserName} userName={userName}>
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  );
}
