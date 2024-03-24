import { Loader2 } from "lucide-react"

const Overlay = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-slate-500 bg-opacity-20 flex items-center justify-center z-50">
      <Loader2 className="h-10 w-10 animate-spin" />
    </div>
  )
}

export default Overlay
