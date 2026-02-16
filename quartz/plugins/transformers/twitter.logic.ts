import { Root } from "hast"
import { visit } from "unist-util-visit"

export interface TwitterOptions {
  defaultAlignment?: "left" | "center" | "right"
}

export const twitterTransformer = (opts?: TwitterOptions) => {
  return (tree: Root) => {
    visit(tree, "element", (node, _index, _parent) => {
      if (node.tagName === "img" && node.properties && typeof node.properties.src === "string") {
        const { src, alt, title } = node.properties
        const match = src.match(/^https?:\/\/(twitter|x)\.com\/(?:#!\/)?(\w+)\/status(es)?\/(\d+)/)

        if (match) {
          let align: "left" | "center" | "right" | undefined = opts?.defaultAlignment

          if (typeof alt === "string" && ["left", "center", "right"].includes(alt)) {
            align = alt as "left" | "center" | "right"
          } else if (typeof title === "string" && ["left", "center", "right"].includes(title)) {
            align = title as "left" | "center" | "right"
          }

          node.tagName = "blockquote"
          node.properties = {
            class: "twitter-tweet",
            "data-dnt": "true",
            "data-theme": "light",
            ...(align ? { "data-align": align } : {}),
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
