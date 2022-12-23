import Link from 'next/link'


export const Header2: React.FC = () => {

  return (
    <nav className="mx-auto h-16 w-pc py-4 px-16">
      <ul className="flex gap-x-12">
        <title>Twitter Clone</title>
       <li>
          <Link
            className="text-xl font-semibold text-gray-700 hover:text-gray-900"
            href="/login"
          >
            Login
          </Link>
        </li> 
      </ul>
    </nav>
  )
}
