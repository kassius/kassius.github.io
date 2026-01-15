import { QuartzTransformerPlugin } from "../types"
import { Element } from "hast"
import { Root } from "mdast"
import { visit } from "unist-util-visit"
import { i18n } from "../../i18n"

/* https://quartz.eilleeenz.com/Quartz-Snippets#twitter-embed-plugin */
 
export const twitterUrlRegex = /^.*(twitter\.com|x\.com)\/[a-zA-Z0-9_]+\/(status)\/(\d{19}).*/
 
export const Twitter: QuartzTransformerPlugin = () => ({
  name: "Twitter",
  markdownPlugins(ctx) {
    const locale = ctx.cfg.configuration.locale.split("-")[0] ?? "en"
    return [
      () => async (tree: Root, _file) => {
        const promises: Promise<void>[] = []
 
        visit(tree, "paragraph", (node, index, parent) => {
          if (node.children.length === 0) return
 
          // find first line and callout content
          const [firstChild] = node.children
          if (firstChild.type !== "link" || !twitterUrlRegex.test(firstChild.url)) return
 
          promises.push(
            fetch(
              `https://publish.twitter.com/oembed?url=${firstChild.url}&dnt=false&omit_script=true&lang=${locale}`,
            )
              .then((res) => res.json())
              .then((data) => {
                parent!.children.splice(index!, 1, {
                  type: "html",
                  value: data.html,
                })
              }),
          )
        })
 
        await Promise.all(promises)
      },
    ]
  },
})
