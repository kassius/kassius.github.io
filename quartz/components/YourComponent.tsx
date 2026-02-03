import { QuartzComponentProps } from "./types"
import { QuartzComponentConstructor } from "./types"

interface Options {
  favouriteNumber: number
  // Add a generic API endpoint option
  apiEndpoint: string
}

const defaultOpts: Options = {
  favouriteNumber: 42,
  // Default to a text file (e.g., your own robots.txt or an API)
  // apiEndpoint: "https://kassius.org/robots.txt",
  apiEndpoint: "https://yoke.kassius.org/dhammapada",
}

export default ((userOpts?: Options) => {
  const opts = { ...defaultOpts, ...userOpts }

  function YourComponent(props: QuartzComponentProps) {
    if (opts.favouriteNumber < 0) {
      return null
    }

    // 1. Create a unique ID for the container so our script can find it
    const elementId = `api-result-${opts.favouriteNumber}`

    return (
      <div class="external-api-box">
        <h3>API Data Fetcher</h3>
        <p>My favourite number is {opts.favouriteNumber}</p>
        
        {/* 2. Create a placeholder for the text */}
        <pre id={elementId} style={{ 
          background: "#222", 
          color: "#0f0", 
          padding: "1rem", 
          overflow: "auto" 
        }}>
          Loading remote text...
        </pre>
      </div>
    )
  }

  // 3. Attach a client-side script to fetch the data
  // This runs in the browser after the page loads
  YourComponent.afterDOMLoaded = `
    const container = document.getElementById('api-result-${opts.favouriteNumber}');
    if (container) {
      fetch("${opts.apiEndpoint}")
        .then(response => {
          if (!response.ok) throw new Error("HTTP " + response.status);
          // Vital: use .text() instead of .json()
          return response.text(); 
        })
        .then(text => {
          container.innerText = text;
        })
        .catch(err => {
          container.innerText = "Failed to load: " + err.message;
          container.style.color = "red";
        });
    }
  `

  return YourComponent
}) satisfies QuartzComponentConstructor
