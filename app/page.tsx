import Script from 'next/script'

/**
 * todo list 23/11/23
 * TODO: function href="tel+..."
 * TODO: Mobile
 * TODO: Google analytics
 * TODO: Emergency-number page
 */
export default function Home() {
  return (
    <div className="container flex min-h-screen flex-col items-center justify-between">

      {/* <!-- Google tag (gtag.js) --> */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-XCBV6CZE0F"></Script>
      <Script id="google-analytics">
        {
          `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-XCBV6CZE0F');
          `}
      </Script>

    </div>
  )
}
