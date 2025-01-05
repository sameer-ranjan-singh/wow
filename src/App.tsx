import './App.css'
import { Button } from './components/ui/Button'
import { LoadingIcon } from './icons/LoadingIcon'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {
  return (
    <>
     <Button startIcon={<ShareIcon size="sm"/>} variant="primary" size="sm" text="Share" loading={false} loadIcon={<LoadingIcon size='sm'/>} onClick={()=>{}} />
     <Button startIcon={<PlusIcon size='md'/>} variant="secondary" size="md" text="Add Content" loading={false} loadIcon={<LoadingIcon size='md'/>} onClick={()=>{}} />
     <Button startIcon={<PlusIcon size='lg'/>} variant="secondary" size="lg" text="Add Content" loading={false} loadIcon={<LoadingIcon size='lg'/>} onClick={()=>{}} />
    </>
  )
}

export default App
