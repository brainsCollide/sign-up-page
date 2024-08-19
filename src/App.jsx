import { useState } from 'react'
import signUp from './assets/signup-desktop.svg'
import list from './assets/icon-list.svg'

function App() {

  const [isSubscribed, setIsSubscribed] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const update = [
    {
      index: 1,
      img: list,
      text: 'Product discovery and building what matters'
    },
    {
      index: 2,
      img: list,
      text: ' Measuring to ensure updates are a success'
    },
    {
      index: 3,
      img: list,
      text: 'And much more!'
    }

  ]

  const handleInput = (e) => {
    setInput(e.target.value)
    setError('')
  }

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!input) {
      setError('Valid email required');
    } else if (!emailRegex.test(input)) {
      setError('Valid email required');
    } else {
      setIsSubscribed(true);
      setError('');
    }
  };

  const handleDismiss = () => {
    setIsSubscribed(false);
  }

  return (
    <>
      <div className='h-screen flex flex-col justify-center items-center bg-zinc-500'>
        <div className='flex flex-row bg-white lg:rounded-2xl '>
           <div className='flex flex-col justify-center'> 
           {!isSubscribed && (
            <img src={signUp} 
            alt="Sign Up" 
            className='w-screen md:w-auto md:hidden mb-6' />
          )} 
            {isSubscribed ? (
              <div className='flex flex-col justify-center lg:h-96 lg:w-72 w-screen h-screen my-10 lg:mx-10 ' >
                <div className='lg:mx-0 mx-8'>
                <img src={list} alt="Sign Up" className='w-10 mb-10' />
                <h1 className='text-4xl my-6 font-semibold '>Thanks for subscribing!</h1>
                <p className='mb-6'>  A confirmation email has been sent to <strong>{input}</strong>. 
                    Please open it and click the button inside to confirm your subscription.</p>
                    <button className='h-10 w-96 abs lg:w-56 lg-w-auto rounded-lg bg-blue-950 text-white mt-6 absolute bottom-10 lg:bottom-56' onClick={handleDismiss}> Dismiss Message </button>
                </div>                
              </div>
            ) : (
              <div className="w-screen lg:w-auto">
                <div className="flex flex-col justify-center m-20 lg:m-8">
                  <h1 className="text-6xl my-6 font-semibold">Stay Updated!</h1>
                  <p className="mb-6">Join 60,000+ product managers receiving monthly updates on:</p>
                  {update.map((item, index) => {
                    return (
                      <p key={index} className="flex items-center mt-2">
                        <img src={item.img} alt="List" className="mr-4" />
                        {item.text}
                      </p>
                    );
                  })}
                  <div className="flex flex-row mt-10">
                    <h1>Email Address</h1>
                    {error && <p className="text-red-500 ml-20">{error}</p>}
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your email address"
                    className={`w-96 lg:w-80 h-12 rounded-lg mt-2 border-2 p-4 ${error ? 'border-red-500' : 'border-zinc-500'}`}
                    onChange={handleInput}
                    value={input}
                  />
                  <button className="w-96 lg:w-80 h-12 rounded-lg bg-blue-950 text-white mt-6" onClick={handleSubscribe}>
                    Subscribe to monthly newsletter
                  </button>
                </div>
              </div>
            )}
          </div>
          {!isSubscribed && (
            <img
              src={signUp}
              alt="Sign Up"
              className="hidden md:block md:w-auto"
            />
          )}
        </div>
        <div class="mt-10">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/brainsCollide">Oz</a>.
      </div>
      </div>
    </>
  )
}

export default App
