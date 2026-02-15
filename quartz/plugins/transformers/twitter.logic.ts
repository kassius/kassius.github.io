import { Root } from "hast"
import { visit } from "unist-util-visit"

export const twitterTransformer = () => {
  return (tree: Root) => {
    visit(tree, "element", (node, _index, _parent) => {
      if (node.tagName === "img" && node.properties && typeof node.properties.src === "string") {
        const src = node.properties.src
        const match = src.match(/^https?:\/\/(twitter|x)\.com\/(?:#!\/)?(\w+)\/status(es)?\/(\d+)/)

        if (match) {
          node.tagName = "blockquote"
          node.properties = {
            class: "twitter-tweet",
            "data-dnt": "true",
            "data-theme": "light",
          }
          node.children = [
            {
              type: "element",
              tagName: "a",
              properties: {
                href: src,
              },
              children: [],
            },
          ]
        }
      }
    })
  }
}
