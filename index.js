addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  url.hostname = 'eopp.epd-portal.ru'  // Замените на URL целевого сайта

  const newRequest = new Request(url, {
    headers: request.headers,
    method: request.method,
    body: request.body,
    redirect: 'follow'
  })

  const response = await fetch(newRequest)

  // Сохранение куки
  const cookies = response.headers.get('Set-Cookie')
  if (cookies) {
    console.log('Cookies:', cookies)
  }

  return response
}
