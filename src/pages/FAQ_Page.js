import React, { useEffect } from 'react';
const FAQ_Page = () => {
  useEffect(() => { document.title = "Clock Suite | FAQ" })
  return (
    <main className={'main-background main-blue'}>
      <br></br>
      <h1 className='main-h-1'>Frequently Asked Questions</h1>
      <h2 className="text-align-center">
        Question: How do I enable translucency for the active Clock Suite window?
      </h2>
      <h3 className="main-margin">
        Answer: You must open Clock Suite Preferences under the Clock Suite menu 
        and select "Translucent", under "Color For Foreground Background".  
        You also must have selected, under the Colors menu, "Color for Foreground"
        to have the active window be transclucent.
        To return to a dark gray background for when the chosen color is the 
        foreground, go to Clock Suite Preferences under the Clock Suite menu 
        and select "Dark Gray", under "Color For Foreground Background".
      </h3>
      <h2 className="text-align-center">
        Question: How do I switch between AM/PM mode and using a 24 hour clock?
      </h2>
      <h3 className="main-margin">
        Answer: You must open Clock Suite Preferences under the Clock Suite menu 
        and select or deselect the "Use 24 Hour Clock" checkbox.
      </h3>
      <br></br><br></br><br></br>
    </main>
  )
}

export default FAQ_Page