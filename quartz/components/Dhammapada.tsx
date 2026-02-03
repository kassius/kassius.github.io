import { QuartzComponentProps } from "./types"
import { QuartzComponentConstructor } from "./types"

interface Options {
  apiEndpoint: string
}

const defaultOpts: Options = {
  apiEndpoint: "https://yoke.kassius.org/dhammapada",
}

export default ((userOpts?: Options) => {
  const opts = { ...defaultOpts, ...userOpts }

  function Dhammapada(props: QuartzComponentProps) {

    // 1. Create a unique ID for the container so our script can find it
    const elementId = `api-result-dhammapada`

    return (
      <div class="external-api-box" style={{
        border: 0,
      }}>
        
        {/* 2. Create a placeholder for the text */}
        <pre id={elementId} style={{
          /*background: "#222", 
          color: "#0f0", */
          color: "#333;",
          fontSize: "inherit",

          // padding: "1rem",
          overflow: "auto"
        }}>
        </pre>
      </div>
    )
  }

  // 3. Attach a client-side script to fetch the data
  // This runs in the browser after the page loads
  Dhammapada.afterDOMLoaded = `
    const container = document.getElementById('api-result-dhammapada');
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

  return Dhammapada
}) satisfies QuartzComponentConstructor
