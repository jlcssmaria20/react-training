import Link from 'next/link'

export const Header: React.FC = () => {
  return (
    <nav className="mx-auto h-16 w-pc py-4 px-16">
      <ul className="flex gap-x-12">
        <title>a</title>

        {/* <li>
          <Link
            className="text-xl font-semibold text-gray-700 hover:text-gray-900"
            href="/timeline"
          >
            Home
          </Link>
        </li> */}
      </ul>
    </nav>
  )
}
