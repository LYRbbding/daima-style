onmessage = (event) => {
    importScripts('/utils/highlight.js-10.1.2/highlight.pack.js');
    const result = self.hljs.highlightAuto(event.data);
    postMessage(result.value);
  };