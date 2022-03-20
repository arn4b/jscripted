import React from 'react'
import './Features.css';

export default function Features() {
    return (
        <div className='container features'>
            <div className='row'>
                <div className='col'>
                    <a href="/docs/Polyfills/intro" className='link'>
                        <div className='parent-card'>
                            <img src="https://aroul.in/posts/js-data-types/js.jpg" alt="polyfill" className='img' />
                            <h1>Polyfills</h1>
                            <p className='text'>Polyfills of multiple Core JS functions and methods explained w/ multiple comments for clear understanding 💥.</p>
                        </div>
                    </a>
                </div>
                <div className='col'>
                    <a href="/docs/UI Challenges/">
                        <div className='parent-card'>
                            <img src="https://user-images.githubusercontent.com/60937304/159109617-69907726-679b-4058-933a-c546e75e2c2f.png" alt="" className='img' />
                            <h1>UI Challenges</h1>
                            <p className='text'>UI Challenges to make your DOM concepts stronger than ever, curated from a list of challenges asked by Big Tech companies 👨‍💻.</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <a href="/docs/UI Challenges/">
                        <div className='parent-card'>
                            <img src="https://icons-for-free.com/iconfiles/png/512/Coding-1320568096072194118.png" alt="" className='img' />
                            <h1>Machine Coding</h1>
                            <p className='text'>JS questions - ranging from simple ToDo lists to complex challenges involving IntersectionObserver APIs - to be coded in under 50 mins ⚡.</p>
                        </div>
                    </a>
                </div>
                <div className='col'>
                    <a href="/docs/React/">
                        <div className='parent-card'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="" className='img' />
                            <h1>React Challenges</h1>
                            <p className='text'>React specific challenges to gauge your mastery in React and its Hooks, functions and methods ⚛.</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
