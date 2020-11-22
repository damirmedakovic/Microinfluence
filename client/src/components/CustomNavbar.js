import React from 'react'

export default function CustomNavbar() {
    return (
        <header class="flex">
            <div class="flex-shrink-0 px-4 py-3 bg-gray-800">
                <button class="items-center flex">
                <img class="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1455504490126-80ed4d83b3b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=144&q=80" alt=""></img>
                <span class="text-sm font-med">Monica White</span>
                </button>
            </div>
            <div class="flex-1 bg-gray-700">
                <div></div>
                <div></div>
            </div>


        </header>
    )
}
