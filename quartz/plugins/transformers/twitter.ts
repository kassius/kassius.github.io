import { QuartzTransformerPlugin } from "../types"
// @ts-ignore
import twitterScript from "../../components/scripts/twitter.inline"
import { JSResource } from "../../util/resources"
import { twitterTransformer, TwitterOptions } from "./twitter.logic"

export const Twitter: QuartzTransformerPlugin<TwitterOptions> = (opts?: TwitterOptions) => {
  return {
    name: "Twitter",
    htmlPlugins() {
      return [[twitterTransformer, opts]]
    },
    externalResources() {
      const js: JSResource[] = []
      js.push({
        script: twitterScript,
        loadTime: "afterDOMReady",
        contentType: "inline",
      })
      js.push({
        src: "https://platform.twitter.com/widgets.js",
        loadTime: "afterDOMReady",
        contentType: "external",
      })
      return { js, css: [] }
    },
  }
}
