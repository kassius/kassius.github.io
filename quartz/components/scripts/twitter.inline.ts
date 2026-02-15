type Theme = "light" | "dark"

interface Twitter {
  widgets: {
    load: (element?: HTMLElement) => Promise<void>
  }
}

declare global {
  interface Window {
    twttr: Twitter
  }
}

const renderTweets = () => {
  if (window.twttr?.widgets) {
    window.twttr.widgets.load()
  }
}

document.addEventListener("nav", renderTweets)

const themeChangeHandler = (e: CustomEvent) => {
  const theme = e.detail.theme as Theme
  const tweets = document.querySelectorAll("blockquote.twitter-tweet")

  tweets.forEach((tweet) => {
    const blockquote = tweet as HTMLElement
    blockquote.setAttribute("data-theme", theme)

    const parent = blockquote.parentElement
    if (parent) {
      const iframe = parent.querySelector("iframe[id^='twitter-widget-']")
      if (iframe) {
        iframe.remove()
        blockquote.style.display = "block"
        blockquote.removeAttribute("data-twitter-extracted-i159")
      }
    }
  })

  renderTweets()
}

document.addEventListener("themechange", themeChangeHandler as EventListener)

// Initial render attempt
if (document.readyState === "complete") {
  renderTweets()
} else {
  window.addEventListener("load", renderTweets)
}
