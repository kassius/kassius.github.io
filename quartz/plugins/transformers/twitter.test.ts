import { describe, it } from "node:test"
import assert from "node:assert"
import { twitterTransformer } from "./twitter.logic"
import { unified } from "unified"
import rehypeParse from "rehype-parse"
import { toHtml } from "hast-util-to-html"
import { Root } from "hast"

describe("Twitter Transformer Logic", () => {
  it("transforms twitter image to blockquote", async () => {
    const processor = unified()
      .use(rehypeParse, { fragment: true })
      // @ts-ignore
      .use(twitterTransformer)

    const input = '<img src="https://twitter.com/jackyzha0/status/1734253327685951859">'
    const tree = processor.parse(input)
    const transformedTree = await processor.run(tree)
    const output = toHtml(transformedTree as Root)

    assert.ok(
      output.includes('<blockquote class="twitter-tweet" data-dnt="true" data-theme="light">'),
    )
    assert.ok(
      output.includes('<a href="https://twitter.com/jackyzha0/status/1734253327685951859"></a>'),
    )
  })

  it("transforms x.com image to blockquote", async () => {
    const processor = unified()
      .use(rehypeParse, { fragment: true })
      // @ts-ignore
      .use(twitterTransformer)

    const input = '<img src="https://x.com/jackyzha0/status/1734253327685951859">'
    const tree = processor.parse(input)
    const transformedTree = await processor.run(tree)
    const output = toHtml(transformedTree as Root)

    assert.ok(
      output.includes('<blockquote class="twitter-tweet" data-dnt="true" data-theme="light">'),
    )
    assert.ok(output.includes('<a href="https://x.com/jackyzha0/status/1734253327685951859"></a>'))
  })
})
