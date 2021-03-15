import ClientSystem from './WP4System'
import ServerSystem from './ServeComp'
export default typeof window === 'undefined' ? ServerSystem : ClientSystem
