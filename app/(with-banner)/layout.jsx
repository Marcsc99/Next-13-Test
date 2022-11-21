import { Counter } from './posts/Couter'

export default function PostsLayout ({ children }) {
  return (
    <div>
      <Counter />
      <marquee style={{ background: '#fff', color: 'purple' }}>El mejor programador</marquee>
      {children}
    </div>
  )
}
