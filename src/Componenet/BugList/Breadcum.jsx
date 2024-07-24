
// eslint-disable-next-line react/prop-types
const Breadcrumb = ({ items }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 ">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index !== items.length - 1 ? (
              <a
                href={item.href}
                className="inline-flex items-center text-custom-md font-medium text-gray-500 hover:text-gray-900"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-sm font-medium text-custom-md text-gray-800">
                {item.label}
              </span>
            )}
            {index !== items.length - 1 && (
              <svg
                className="w-4 h-4 mx-1 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L11.586 9 7.293 4.707a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
