import React, { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const hiddenElementsRef = useRef([]);


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    hiddenElementsRef.current.forEach((el) => {
      if (el instanceof Element) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  
  return (
    <div className="App" style={{ height: '100vh' }}>
      <div className="">
        <h2 data-text="Creative..." className="animation">
          Creative...
        </h2>
      </div>

      <section ref={(el) => hiddenElementsRef.current.push(el)} className="hidden">
        <h2>Hi mum!</h2>
        <p>This is my website</p>
      </section>
      <section ref={(el) => hiddenElementsRef.current.push(el)} className="hidden">
        <h2>Hi beaver!</h2>
        <div className="logos">
          <div ref={(el) => hiddenElementsRef.current.push(el)} className="logo hidden">
            <img src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="" />
          </div>
          <div ref={(el) => hiddenElementsRef.current.push(el)} className="logo hidden" >
            <img src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="" />
          </div>
          <div ref={(el) => hiddenElementsRef.current.push(el)} className="logo hidden">
            <img src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="" />
          </div>
        </div>
      </section>
      <section ref={(el) => hiddenElementsRef.current.push(el)} className="hidden">
        <h2>Hi human!</h2>
        <p>This is my website</p>
      </section>
    </div>
  );
}

export default App;
