import React from 'react';
import blog1 from '../../../assets/image/banner11.jpg'
import blog2 from '../../../assets/image/banner9.jpg'
import blog3 from '../../../assets/image/banner10.jpg'

const RecentBlogs = () => {
    return (
        <div>
            <section class="bg-white dark:bg-gray-900">
                <div class="container px-6 py-10 mx-auto">
                    <div class="flex items-center justify-between">
                        <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">recent posts </h1>

                        <button class="focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>

                    <hr class="my-8 border-gray-200 dark:border-gray-700" />

                    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                        <div>
                            <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={blog1} alt="" />

                            <div class="mt-8">
                                <span class="text-blue-500 uppercase">category</span>

                                <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                                    What do you want to know about Book Reading
                                </h1>

                                <p class="mt-2 text-gray-500 dark:text-gray-400">
                                Books are a rich source of information, providing insights into various subjects, cultures, and perspectives.
                                </p>

                                <div class="flex items-center justify-between mt-4">
                                    <div>
                                        <a href="#" class="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                                            John snow
                                        </a>

                                        <p class="text-sm text-gray-500 dark:text-gray-400">February 1, 2022</p>
                                    </div>

                                    <a href="#" class="inline-block text-blue-500 underline hover:text-blue-400">Read more</a>
                                </div>

                            </div>
                        </div>

                        <div>
                            <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={blog2} alt="" />

                            <div class="mt-8">
                                <span class="text-blue-500 uppercase">category</span>

                                <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                                    All the features you want to know</h1>

                                <p class="mt-2 text-gray-500 dark:text-gray-400">
                                Books are organized and cataloged using systems like the Dewey Decimal Classification or Library of Congress Classification, making it easier for users to find what they need.
                                </p>

                                <div class="flex items-center justify-between mt-4">
                                    <div>
                                        <a href="#" class="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                                            Arthur Melo
                                        </a>

                                        <p class="text-sm text-gray-500 dark:text-gray-400">February 6, 2022</p>
                                    </div>

                                    <a href="#" class="inline-block text-blue-500 underline hover:text-blue-400">Read more</a>
                                </div>

                            </div>
                        </div>

                        <div>
                            <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={blog3} alt="" />

                            <div class="mt-8">
                                <span class="text-blue-500 uppercase">category</span>

                                <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                                    Which services you get from Oxford Library
                                </h1>

                                <p class="mt-2 text-gray-500 dark:text-gray-400">
                                The Bodleian Libraries house over 13 million printed items, including rare books, manuscripts, maps, and archives.
                                </p>

                                <div class="flex items-center justify-between mt-4">
                                    <div>
                                        <a href="#" class="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                                            Tom Hank
                                        </a>

                                        <p class="text-sm text-gray-500 dark:text-gray-400">February 19, 2022</p>
                                    </div>

                                    <a href="#" class="inline-block text-blue-500 underline hover:text-blue-400">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RecentBlogs;