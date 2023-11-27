import Script from 'next/script'

/**
 * *todo list 23/11/23
 * TODO: function href="tel+..." DONE
 * TODO: Responsive DONE
 * TODO: Google analytics DONE
 * TODO: Emergency-number page
 * 
 * *todo list 24/11/23
 * TODO: from train to airport
 * TODO: btn go back  DONE
 * 
 * *todo list 25/11/23
 * TODO: function check bg-image
 * 
 * *todo list 26/11/23
 * TODO: add Otorhinolaryngologist DONE
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

      <div className='flex items-center flex-col'>
        <h1 className='text-3xl sm:text-4xl text-center text-gray-950 font-semibold mb-4'>Добро пожаловать на наш сайт</h1>
        <h2 className='text-2xl sm:text-3xl lg:w-3/4 text-gray-950 text-center font-medium'>Проект создан для помощи беженцам в поисках специалистов/врачей, которые говорят на русском/украинском языке в таких городах: <br /> Мемминген, Кемптен, Аугсбур, Мюнхен</h2>
      </div>

    </div>
  )
}
