function Footer() {
    return (
        <footer className="grid sm:flex sm:pl-3 justify-between w-full bg-gray-100 text-sm text-gray-500 px-6 py-6">
            <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
                <p className="link">About</p>
                <p className="link">Advertising</p>
                <p className="link">Business</p>
                <p className="link">How Search works</p>
            </div>
            <div className="flex justify-center space-x-8 md:ml-auto">
                <p className="link">privacy</p>
                <p className="link">Teams</p>
                <p className="link">Settings</p>
            </div>
        </footer>
    )
}

export default Footer
