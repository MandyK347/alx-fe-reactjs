function UserProfile() {
    return (
        <div ClassName="bg-gray-100 md:p-8 sm:p-4 max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <img
               src="https://via.placeholder.com/150"
               alt="User"
               ClassName="sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"
            />
            <h1 ClassName="text-lg md:text-xl text-blue-800 my-4 hover:text-blue-500 transition-colors duration-300 ease-in-out">John Doe</h1>
            <p ClassName="text-sm sm:text-base text-gray-600">
                Developer at Example Co. Loves to write code and explore new technologies.
            </p>
        </div>
    );
}

export default UserProfile;
