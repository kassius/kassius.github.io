import { QuartzComponentProps } from "./types"
import { QuartzComponentConstructor } from "./types"

interface Options {
  favouriteNumber: number
}
 
// const defaultOptions: Options = {
const defaultOpts: Options = {
  favouriteNumber: 42,
}
 
export default ((userOpts?: Options) => {
  const opts = { ...userOpts, ...defaultOpts }
  function YourComponent(props: QuartzComponentProps) {
    if (opts.favouriteNumber < 0) {
      return null
    }
 
    return <p>My favourite number is {opts.favouriteNumber}</p>
  }
 
  return YourComponent
}) satisfies QuartzComponentConstructor
