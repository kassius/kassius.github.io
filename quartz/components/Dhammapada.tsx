import { QuartzComponentProps } from "./types"
import { QuartzComponentConstructor } from "./types"

interface Options {
  apiEndpoint: string
}

const defaultOpts: Options = {
  apiEndpoint: "https://yoke.kassius.org/dhammapada?space_padding=1",
}

export default ((userOpts?: Options) => {
  const opts = { ...defaultOpts, ...userOpts }

  function Dhammapada(props: QuartzComponentProps) {

    // 1. Create a unique ID for the container so our script can find it
    const elementId = `api-result-dhammapada`

    return (
      <div class="external-api-box" style={{
        fontSize: "inherit",
      }}>
        
        {/* 2. Create a placeholder for the text */}
        <pre id={elementId} style={{
          fontSize: "inherit",
          textAlign: "center",

          border: "none",
          boxShadow: "none",
          outline: "none",
        }}>
        </pre>
      </div>
    )
  }
// ... imports and component function ...

  // This script runs in the browser
  Dhammapada.afterDOMLoaded = `
    // 1. Define the logic as a named function
    async function loadRemoteText() {
      const box = document.getElementById("api-result-dhammapada");
      if (!box) return; // Component not present on this page

      try {
        const res = await fetch("${opts.apiEndpoint}");
        if (!res.ok) throw new Error("HTTP " + res.status);
        const text = await res.text();
        box.innerText = text;
      } catch (err) {
        box.innerText = "Failed to load: " + err.message;
        // box.style.color = "red";
        box.style.color = "#aaa";
      }
    }

    // 2. Listen for the 'nav' event (Fired by Quartz on initial load AND page changes)
    document.addEventListener("nav", loadRemoteText);

    // 3. Cleanup: Remove listener when navigating AWAY to prevent duplicates
    // (Quartz provides window.addCleanup for this exact purpose)
    if (window.addCleanup) {
      window.addCleanup(() => {
        document.removeEventListener("nav", loadRemoteText);
      });
    }
  `

  return Dhammapada
}) satisfies QuartzComponentConstructor

//
//   // 3. Attach a client-side script to fetch the data
//   // This runs in the browser after the page loads
//   Dhammapada.afterDOMLoaded = `
//     const container = document.getElementById('api-result-dhammapada');
//     if (container) {
//       fetch("${opts.apiEndpoint}")
//         .then(response => {
//           if (!response.ok) throw new Error("HTTP " + response.status);
//           // Vital: use .text() instead of .json()
//           return response.text();
//         })
//         .then(text => {
//           container.innerText = text;
//         })
//         .catch(err => {
//           container.innerText = "Failed to load: " + err.message;
//           container.style.color = "red";
//         });
//     }
//   `
//
//   return Dhammapada
// }) satisfies QuartzComponentConstructor
