import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        const iframe = document.getElementById('embedIframe');
        iframe.addEventListener('load', () => {
          const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
          const link = iframeDocument.getElementById('embedLink');
          link.addEventListener('click', (event) => {
            event.preventDefault();
            // 在这里添加您想要执行的代码
            console.log('Link clicked in iframe');
          });
        });
      }, []);

  return (
    <>
        <iframe id="embedIframe" src="/embed-page" style={{ width: '100%', height: '300px' }}></iframe>
    </>
  )
}
