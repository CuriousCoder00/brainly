import Header from "@/components/header"

const NotFound = () => {
  return (
    <div className='w-screen min-h-dvh flex flex-col items-center justify-center'>
      <Header/>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">404</h1>
        <h2 className="text-2xl font-bold">Page Not Found</h2>
      </div>
    </div>
  )
}

export default NotFound
