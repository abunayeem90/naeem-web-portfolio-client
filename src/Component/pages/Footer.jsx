import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer text-base-content border-b px-10 py-4">

  <div className="grid-flow-col items-center">
    <img className='w-10 h-10' src="" alt="LOGO" />
  </div>

<div className='ml-[630px] mt-2 flex space-x-10'>
    <p>+91 12345 09876</p>
    <p>info@example.com</p>
</div>
  
  <nav className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4">

      <a>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path d="M12 .297c-6.627 0-12 5.373-12 12 0 5.304 3.438 9.8 8.205 11.387.6.111.82-.26.82-.577 0-.288-.011-1.049-.016-2.062-3.338.724-4.043-1.607-4.043-1.607-.546-1.387-1.33-1.758-1.33-1.758-1.085-.74.083-.726.083-.726 1.198.084 1.827 1.23 1.827 1.23 1.064 1.818 2.791 1.295 3.469.99.107-.772.417-1.295.76-1.592-2.665-.303-5.466-1.333-5.466-5.93 0-1.313.467-2.387 1.237-3.224-.124-.303-.537-1.525.116-3.175 0 0 1.007-.322 3.299 1.227A11.529 11.529 0 0112 4.147c1.014.004 2.028.137 2.99.402 2.29-1.55 3.296-1.227 3.296-1.227.655 1.65.241 2.872.118 3.175.77.837 1.236 1.911 1.236 3.224 0 4.608-2.806 5.625-5.474 5.922.43.371.815 1.103.815 2.222 0 1.605-.014 2.895-.014 3.288 0 .316.218.693.825.577C20.563 22.1 24 17.604 24 12.297c0-6.627-5.373-12-12-12z"></path>
    </svg>
</a>

<a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>


      <a>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path d="M19 0h-14C2.69 0 0 2.69 0 6v12c0 3.31 2.69 6 6 6h14c3.31 0 6-2.69 6-6V6c0-3.31-2.69-6-6-6zm-11 19h-3v-12h3v12zm-1.5-13.5c-1.04 0-1.5-.68-1.5-1.5s.48-1.5 1.5-1.5 1.5.68 1.5 1.5-.46 1.5-1.5 1.5zm15 13.5h-3v-6.75c0-1.61-.03-3.69-2.25-3.69-2.25 0-2.59 1.75-2.59 3.57V19h-3v-12h3v1.64c1.47-2.78 5.06-2.53 5.06 1.22V19z"></path>
    </svg>
</a>


    </div>
  </nav>
</footer>

<footer className="px-4 py-8 dark:bg-gray-100 dark:text-gray-600">
	<div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
		<div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
			
			<ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
				<li>
					<a rel="noopener noreferrer" href="#">Home</a>
				</li>
				<li>
					<a rel="noopener noreferrer" href="#">About</a>
				</li>
				<li>
					<a rel="noopener noreferrer" href="#">Technologies</a>
				</li>
				<li>
					<a rel="noopener noreferrer" href="#">Projects</a>
				</li>
				<li>
					<a rel="noopener noreferrer" href="#">Contact</a>
				</li>
			</ul>
		</div>
		<div className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
			<p>Designed and built by Pavan MG with Love & Coffee</p>
		</div>
	</div>
</footer>

        </div>
    );
};

export default Footer;